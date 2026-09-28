import "server-only";
import { z } from "zod";
import { getDb, now } from "./db";
import { newId } from "./ids";
import { normalizeUpload, thumbnail, ImageError } from "./images";
import { deleteRenderMedia, readMedia, readSample, writeMedia } from "./storage";
import { buildPrompt } from "./ai/prompt";
import { getProvider } from "./ai";
import { ProviderError, type RenderSpec } from "./ai/types";
import { SKIES, SPACES, STRENGTHS, SURFACES, TOOLS, TOOL_IDS } from "@/lib/tools";
import { IMAGE_KEYS } from "@/content/types";

export const DAILY_LIMIT = Math.max(1, Number(process.env.FREE_DAILY_RENDERS ?? 20) || 20);
const CONCURRENCY = Math.max(1, Number(process.env.RENDER_CONCURRENCY ?? 2) || 2);

export class RenderInputError extends Error {
  constructor(message: string, public readonly status = 400, public readonly code = "invalid_request") {
    super(message);
  }
}

const text = (max: number) => z.string().trim().max(max).optional().transform((v) => (v ? v : undefined));

export const RenderSpecSchema = z
  .object({
    tool: z.enum(TOOL_IDS),
    space: z.enum(SPACES).default("interior"),
    roomType: text(60),
    style: text(60),
    strength: z.enum(STRENGTHS.map((s) => s.id) as [string, ...string[]]).default("balanced"),
    prompt: text(800),
    surface: z.enum(SURFACES).optional(),
    material: text(60),
    color: text(40),
    sky: z.enum(SKIES as [string, ...string[]]).optional(),
  })
  .superRefine((spec, ctx) => {
    const tool = TOOLS[spec.tool];
    if (!tool.spaces.includes(spec.space))
      ctx.addIssue({ code: "custom", path: ["space"], message: `${tool.label} works on ${tool.spaces.join(", ")} photos.` });
    if (tool.promptRequired && (!spec.prompt || spec.prompt.length < 3))
      ctx.addIssue({ code: "custom", path: ["prompt"], message: `Describe what you'd like ${tool.label.toLowerCase()} to do.` });
  });

export type RenderRow = {
  id: string;
  user_id: string;
  source: "app" | "api";
  tool: RenderSpec["tool"];
  space: RenderSpec["space"];
  options: string;
  prompt: string | null;
  has_input: number;
  has_reference: number;
  input_width: number | null;
  input_height: number | null;
  outputs: number;
  status: "queued" | "processing" | "succeeded" | "failed";
  error: string | null;
  provider: string | null;
  demo: number;
  created_at: number;
  started_at: number | null;
  completed_at: number | null;
};

export function startOfUtcDay(t = now()) {
  const d = new Date(t);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
}

export function usageFor(userId: string) {
  const row = getDb()
    .prepare("SELECT COUNT(*) AS n FROM renders WHERE user_id = ? AND created_at >= ? AND status != 'failed'")
    .get(userId, startOfUtcDay()) as { n: number };
  return { used: row.n, limit: DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - row.n), resetsAt: startOfUtcDay() + 86_400_000 };
}

export type CreateRenderInput = {
  userId: string;
  source: "app" | "api";
  spec: unknown;
  image?: Buffer | null;
  sample?: string | null;
  /** Start from the output of one of the user's earlier renders. */
  fromRender?: string | null;
  reference?: Buffer | null;
};

export async function createRender(input: CreateRenderInput) {
  const parsed = RenderSpecSchema.safeParse(input.spec);
  if (!parsed.success) throw new RenderInputError(parsed.error.issues[0]?.message ?? "Invalid render settings.");
  const spec = parsed.data as RenderSpec;
  const tool = TOOLS[spec.tool];

  let source = input.image ?? null;
  if (!source && input.fromRender) {
    const prior = getRender(input.fromRender, input.userId);
    if (!prior || prior.status !== "succeeded") throw new RenderInputError("That design isn't available to start from.");
    source = await readMedia(prior.id, "output-1");
  }
  if (!source && input.sample) {
    if (!(IMAGE_KEYS as readonly string[]).includes(input.sample)) throw new RenderInputError("Unknown sample photo.");
    source = await readSample(input.sample);
  }
  if (tool.needsPhoto && !source) throw new RenderInputError("Upload a photo to start from.");
  if (spec.tool === "style-transfer" && !input.reference) throw new RenderInputError("Add an inspiration photo to borrow its style.");

  let photo: Awaited<ReturnType<typeof normalizeUpload>> | null = null;
  let reference: Awaited<ReturnType<typeof normalizeUpload>> | null = null;
  try {
    if (tool.needsPhoto && source) photo = await normalizeUpload(source);
    if (spec.tool === "style-transfer" && input.reference) reference = await normalizeUpload(input.reference);
  } catch (e) {
    if (e instanceof ImageError) throw new RenderInputError(e.message);
    throw e;
  }

  const id = newId("r");
  const db = getDb();
  // Check the allowance and insert atomically so parallel requests can't exceed it.
  const insert = db.transaction(() => {
    const usage = usageFor(input.userId);
    if (usage.remaining <= 0)
      throw new RenderInputError(`You've used all ${DAILY_LIMIT} free renders for today. Your allowance resets at midnight UTC.`, 429, "rate_limited");
    db.prepare(
      `INSERT INTO renders (id, user_id, source, tool, space, options, prompt, has_input, has_reference, input_width, input_height, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'queued', ?)`,
    ).run(
      id,
      input.userId,
      input.source,
      spec.tool,
      spec.space,
      JSON.stringify({ roomType: spec.roomType, style: spec.style, strength: spec.strength, surface: spec.surface, material: spec.material, color: spec.color, sky: spec.sky }),
      spec.prompt ?? null,
      photo ? 1 : 0,
      reference ? 1 : 0,
      photo?.width ?? null,
      photo?.height ?? null,
      now(),
    );
  });
  insert();

  try {
    if (photo) {
      await writeMedia(id, "input", photo.data);
      await writeMedia(id, "input-thumb", await thumbnail(photo.data));
    }
    if (reference) await writeMedia(id, "reference", reference.data);
  } catch (e) {
    db.prepare("UPDATE renders SET status = 'failed', error = ? WHERE id = ?").run("Could not store the uploaded photo.", id);
    throw e;
  }
  enqueue(id);
  return id;
}

// ---------------------------------------------------------------------------
// In-process queue. One Node process owns the queue; jobs survive restarts because
// queued rows are re-enqueued and interrupted ones are failed on boot.

const queueState = globalThis as unknown as { __rwQueue?: { pending: string[]; active: number; booted: boolean } };
const q = (queueState.__rwQueue ??= { pending: [], active: 0, booted: false });

function enqueue(id: string) {
  q.pending.push(id);
  pump();
}

function pump() {
  while (q.active < CONCURRENCY && q.pending.length) {
    const id = q.pending.shift()!;
    q.active++;
    processRender(id)
      .catch((e) => console.error(`[render ${id}]`, e))
      .finally(() => {
        q.active--;
        pump();
      });
  }
}

export function recoverRenders() {
  if (q.booted) return;
  q.booted = true;
  const db = getDb();
  db.prepare("UPDATE renders SET status = 'failed', error = 'Interrupted by a server restart. Please try again.' WHERE status = 'processing'").run();
  const queued = db.prepare("SELECT id FROM renders WHERE status = 'queued' ORDER BY created_at").all() as { id: string }[];
  for (const r of queued) enqueue(r.id);
}

async function processRender(id: string) {
  const db = getDb();
  const row = db.prepare("SELECT * FROM renders WHERE id = ?").get(id) as RenderRow | undefined;
  if (!row || row.status !== "queued") return;
  const provider = getProvider();
  db.prepare("UPDATE renders SET status = 'processing', started_at = ?, provider = ?, demo = ? WHERE id = ?").run(now(), provider.id, provider.demo ? 1 : 0, id);
  const options = JSON.parse(row.options) as Omit<RenderSpec, "tool" | "space" | "prompt">;
  const spec: RenderSpec = { ...options, tool: row.tool, space: row.space, prompt: row.prompt ?? undefined, strength: options.strength ?? "balanced" };
  try {
    const image = row.has_input ? await readMedia(id, "input") : null;
    const reference = row.has_reference ? await readMedia(id, "reference") : null;
    const output = await provider.generate({
      spec,
      prompt: buildPrompt(spec),
      image: image ?? undefined,
      reference: reference ?? undefined,
      aspect: row.input_width && row.input_height ? { width: row.input_width, height: row.input_height } : undefined,
    });
    await writeMedia(id, "output-1", output);
    await writeMedia(id, "output-1-thumb", await thumbnail(output));
    const done = db.prepare("UPDATE renders SET status = 'succeeded', outputs = 1, completed_at = ? WHERE id = ? AND status = 'processing'").run(now(), id);
    // The design (or its account) was deleted while rendering: don't leave its files behind.
    if (done.changes === 0 && !db.prepare("SELECT 1 FROM renders WHERE id = ?").get(id)) await deleteRenderMedia(id).catch(() => {});
  } catch (e) {
    const message = e instanceof ProviderError ? e.userMessage : "Something went wrong while rendering. Please try again.";
    console.error(`[render ${id}] failed:`, e instanceof Error ? e.message : e);
    db.prepare("UPDATE renders SET status = 'failed', error = ?, completed_at = ? WHERE id = ?").run(message, now(), id);
  }
}

// ---------------------------------------------------------------------------

export function getRender(id: string, userId: string) {
  return getDb().prepare("SELECT * FROM renders WHERE id = ? AND user_id = ?").get(id, userId) as RenderRow | undefined;
}

export function listRenders(userId: string, { limit = 24, before }: { limit?: number; before?: number } = {}) {
  const rows = getDb()
    .prepare(`SELECT * FROM renders WHERE user_id = ? ${before ? "AND created_at < ?" : ""} ORDER BY created_at DESC LIMIT ?`)
    .all(...(before ? [userId, before, limit] : [userId, limit])) as RenderRow[];
  return rows;
}

/** Re-runs a design with the same photo and settings, optionally overriding some settings. */
export async function rerunRender(id: string, userId: string, overrides: Partial<Pick<RenderSpec, "style" | "prompt" | "strength">> = {}) {
  const row = getRender(id, userId);
  if (!row) throw new RenderInputError("Design not found.", 404, "not_found");
  const options = JSON.parse(row.options) as Record<string, unknown>;
  const spec = { ...options, tool: row.tool, space: row.space, prompt: row.prompt ?? undefined, ...overrides };
  return createRender({
    userId,
    source: row.source,
    spec,
    image: row.has_input ? await readMedia(id, "input") : null,
    reference: row.has_reference ? await readMedia(id, "reference") : null,
  });
}

export async function deleteRender(id: string, userId: string) {
  const res = getDb().prepare("DELETE FROM renders WHERE id = ? AND user_id = ?").run(id, userId);
  if (res.changes) await deleteRenderMedia(id).catch((e) => console.error(`[render ${id}] media cleanup failed`, e));
  return res.changes > 0;
}

/** Public JSON shape shared by the app and the API. */
export function serializeRender(row: RenderRow, mediaBase: (id: string, file: string) => string) {
  const options = JSON.parse(row.options) as Record<string, unknown>;
  return {
    id: row.id,
    status: row.status,
    tool: row.tool,
    space: row.space,
    prompt: row.prompt,
    options: Object.fromEntries(Object.entries(options).filter(([, v]) => v !== undefined && v !== null)),
    demo: Boolean(row.demo),
    error: row.error,
    input_url: row.has_input ? mediaBase(row.id, "input") : null,
    output_urls: Array.from({ length: row.outputs }, (_, i) => mediaBase(row.id, `output-${i + 1}`)),
    created_at: new Date(row.created_at).toISOString(),
    completed_at: row.completed_at ? new Date(row.completed_at).toISOString() : null,
  };
}
