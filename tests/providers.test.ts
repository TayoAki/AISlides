import { describe, expect, it, vi } from "vitest";
import sharp from "sharp";
import { buildPrompt } from "@/lib/server/ai/prompt";
import { createReplicateProvider, replicateRequest } from "@/lib/server/ai/replicate";
import { createOpenAIProvider } from "@/lib/server/ai/openai";
import { demoProvider } from "@/lib/server/ai/demo";
import { ProviderError, type RenderSpec } from "@/lib/server/ai/types";

const photo = await sharp({ create: { width: 1600, height: 1200, channels: 3, background: "#8a7f70" } }).jpeg().toBuffer();
const outputJpeg = await sharp({ create: { width: 1024, height: 768, channels: 3, background: "#406050" } }).png().toBuffer();

const spec = (s: Partial<RenderSpec>): RenderSpec => ({ tool: "redesign", space: "interior", strength: "balanced", ...s });
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

describe("buildPrompt", () => {
  it("keeps the architecture and names the style for redesigns", () => {
    const p = buildPrompt(spec({ roomType: "Living room", style: "Japandi" }));
    expect(p).toContain("living room");
    expect(p).toContain("Japandi");
    expect(p).toMatch(/walls, windows, doors/);
  });
  it("uses the user's instruction verbatim for precision edits", () => {
    expect(buildPrompt(spec({ tool: "edit", prompt: "Swap the sofa for a green velvet one" }))).toMatch(/^Swap the sofa for a green velvet one\./);
  });
  it("resolves named paint colors to hex and targets the facade outside", () => {
    const p = buildPrompt(spec({ tool: "paint", space: "exterior", color: "Sage" }));
    expect(p).toContain("#A9B8A0");
    expect(p).toMatch(/exterior walls and siding/);
  });
  it("adds window glow for twilight skies", () => {
    expect(buildPrompt(spec({ tool: "sky", space: "exterior", sky: "Twilight with lights on" }))).toMatch(/interior lights glowing/);
  });
  it("produces a prompt for every tool", () => {
    for (const tool of ["redesign", "virtual-staging", "decor-staging", "declutter", "paint", "materials", "sky", "sketch", "edit", "style-transfer", "text-to-design", "furniture-creator"] as const) {
      expect(buildPrompt(spec({ tool, space: tool === "sky" ? "exterior" : "interior", prompt: "x" })).length).toBeGreaterThan(40);
    }
  });
});

describe("replicate provider", () => {
  it("sends single-image edits to FLUX Kontext with a small data URL", async () => {
    const { model, payload } = await replicateRequest({ spec: spec({}), prompt: "p", image: photo, aspect: { width: 1600, height: 1200 } });
    expect(model).toBe("black-forest-labs/flux-kontext-pro");
    expect(payload).toMatchObject({ prompt: "p", aspect_ratio: "match_input_image", output_format: "jpg", safety_tolerance: 2 });
    expect(String(payload.input_image)).toMatch(/^data:image\/jpeg;base64,/);
    expect(String(payload.input_image).length).toBeLessThan(1_300_000);
  });
  it("uses the two-image model for style transfer", async () => {
    const { model, payload } = await replicateRequest({ spec: spec({ tool: "style-transfer" }), prompt: "p", image: photo, reference: photo });
    expect(model).toBe("flux-kontext-apps/multi-image-kontext-pro");
    expect(payload).toHaveProperty("input_image_1");
    expect(payload).toHaveProperty("input_image_2");
  });
  it("uses text-to-image for text-to-design", async () => {
    const { model, payload } = await replicateRequest({ spec: spec({ tool: "text-to-design", prompt: "x" }), prompt: "p" });
    expect(model).toBe("black-forest-labs/flux-1.1-pro");
    expect(payload).toMatchObject({ aspect_ratio: "3:2", output_format: "jpg" });
    expect(payload).not.toHaveProperty("input_image");
  });
  it("creates, polls and downloads a prediction", async () => {
    const calls: { url: string; init?: RequestInit }[] = [];
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      const u = String(url);
      calls.push({ url: u, init });
      if (u.endsWith("/models/black-forest-labs/flux-kontext-pro/predictions"))
        return json({ id: "abc", status: "processing", urls: { get: "https://api.replicate.com/v1/predictions/abc" } }, 201);
      if (u.endsWith("/predictions/abc")) return json({ id: "abc", status: "succeeded", output: "https://replicate.delivery/out.png" });
      if (u === "https://replicate.delivery/out.png") return new Response(new Uint8Array(outputJpeg));
      return new Response("unexpected", { status: 500 });
    });
    const provider = createReplicateProvider("r8_test", fetchMock as unknown as typeof fetch);
    const out = await provider.generate({ spec: spec({}), prompt: "p", image: photo });
    expect((await sharp(out).metadata()).format).toBe("jpeg");
    const headers = calls[0].init?.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer r8_test");
    expect(headers.Prefer).toBe("wait=60");
    expect(JSON.parse(String(calls[0].init?.body)).input.prompt).toBe("p");
    expect(calls.map((c) => c.url)).toContain("https://api.replicate.com/v1/predictions/abc");
  });
  it("turns a safety failure into a friendly message", async () => {
    const fetchMock = vi.fn(async () => json({ id: "x", status: "failed", error: "NSFW content detected" }));
    const provider = createReplicateProvider("r8_test", fetchMock as unknown as typeof fetch);
    await expect(provider.generate({ spec: spec({}), prompt: "p", image: photo })).rejects.toMatchObject({
      userMessage: expect.stringMatching(/safety filter/),
    });
  });
  it("reports auth problems without leaking details", async () => {
    const provider = createReplicateProvider("bad", (async () => new Response("{}", { status: 401 })) as unknown as typeof fetch);
    const err = await provider.generate({ spec: spec({}), prompt: "p", image: photo }).catch((e) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect(err.userMessage).toMatch(/isn't configured correctly/);
  });
});

describe("openai provider", () => {
  it("posts a multipart edit with the photo and decodes b64 output", async () => {
    let form: FormData | null = null;
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      expect(String(url)).toBe("https://api.openai.com/v1/images/edits");
      form = init?.body as FormData;
      return json({ data: [{ b64_json: outputJpeg.toString("base64") }] });
    });
    const provider = createOpenAIProvider("sk-test", fetchMock as unknown as typeof fetch);
    const out = await provider.generate({ spec: spec({}), prompt: "p", image: photo, aspect: { width: 1600, height: 1200 } });
    expect((await sharp(out).metadata()).format).toBe("jpeg");
    expect(form!.get("model")).toBe("gpt-image-1");
    expect(form!.get("size")).toBe("1536x1024");
    expect(form!.get("input_fidelity")).toBe("high");
    expect(form!.getAll("image[]")).toHaveLength(1);
  });
  it("retries without input_fidelity when the model rejects it", async () => {
    const bodies: FormData[] = [];
    const fetchMock = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
      bodies.push(init?.body as FormData);
      if (bodies.length === 1) return json({ error: { message: "Unknown parameter: 'input_fidelity'." } }, 400);
      return json({ data: [{ b64_json: outputJpeg.toString("base64") }] });
    });
    const provider = createOpenAIProvider("sk-test", fetchMock as unknown as typeof fetch);
    await provider.generate({ spec: spec({ tool: "style-transfer" }), prompt: "p", image: photo, reference: photo });
    expect(bodies).toHaveLength(2);
    expect(bodies[1].get("input_fidelity")).toBeNull();
    expect(bodies[1].getAll("image[]")).toHaveLength(2);
  });
  it("uses the generations endpoint for text-only tools", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
      expect(String(url)).toBe("https://api.openai.com/v1/images/generations");
      expect(JSON.parse(String(init?.body))).toMatchObject({ model: "gpt-image-1", size: "1024x1024" });
      return json({ data: [{ b64_json: outputJpeg.toString("base64") }] });
    });
    const provider = createOpenAIProvider("sk-test", fetchMock as unknown as typeof fetch);
    await provider.generate({ spec: spec({ tool: "furniture-creator", prompt: "a chair" }), prompt: "p" });
    expect(fetchMock).toHaveBeenCalledOnce();
  });
});

describe("demo provider", () => {
  it("returns a labeled JPEG preview of the photo", async () => {
    const out = await demoProvider.generate({ spec: spec({ style: "Coastal" }), prompt: "p", image: photo });
    const meta = await sharp(out).metadata();
    expect(meta.format).toBe("jpeg");
    expect(meta.width).toBe(1600);
    expect(demoProvider.demo).toBe(true);
  });
  it("returns a placeholder card for text-only tools", async () => {
    const out = await demoProvider.generate({ spec: spec({ tool: "text-to-design", prompt: "A calm Japandi bedroom" }), prompt: "p" });
    expect((await sharp(out).metadata()).width).toBe(1536);
  });
});
