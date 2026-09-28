// Generates real before/after showcase pairs through the Roomwright API and writes
// public/showcase/* plus src/content/showcase.ts. Requires a server with an AI provider.
//
//   ROOMWRIGHT_API_KEY=rw_live_... BASE_URL=https://your-site node scripts/generate-showcase.mjs
//
// Demo-mode renders are refused so labeled previews can never end up in marketing.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const KEY = process.env.ROOMWRIGHT_API_KEY;
if (!KEY) throw new Error("Set ROOMWRIGHT_API_KEY (create one under Account → API keys).");
const auth = { Authorization: `Bearer ${KEY}` };

const PRESETS = [
  { id: "living-japandi", title: "Dated living room to warm Japandi", sample: "living-dated", fields: { tool: "redesign", space: "interior", room_type: "Living room", style: "Japandi" }, detail: "Redesign · Japandi" },
  { id: "kitchen-farmhouse", title: "Tired kitchen, fresh farmhouse", sample: "kitchen-dated", fields: { tool: "redesign", space: "interior", room_type: "Kitchen", style: "Farmhouse" }, detail: "Redesign · Farmhouse" },
  { id: "empty-staged", title: "Empty room, staged to sell", sample: "empty-room", fields: { tool: "virtual-staging", space: "interior", room_type: "Living room", style: "Scandinavian" }, detail: "Virtual staging · Scandinavian" },
  { id: "facade-sage", title: "Brick facade repainted sage", sample: "exterior-brick", fields: { tool: "paint", space: "exterior", color: "Sage" }, detail: "Paint visualizer · Sage" },
  { id: "garden-zen", title: "Plain backyard to Japanese garden", sample: "garden-backyard", fields: { tool: "redesign", space: "garden", room_type: "Backyard", style: "Japanese zen" }, detail: "Redesign · Japanese zen" },
];

async function waitFor(id) {
  for (let i = 0; i < 240; i++) {
    const r = await (await fetch(`${BASE}/api/v1/renders/${id}`, { headers: auth })).json();
    if (r.status === "succeeded" || r.status === "failed") return r;
    await new Promise((res) => setTimeout(res, 2500));
  }
  throw new Error(`render ${id} timed out`);
}

await mkdir("public/showcase", { recursive: true });
const items = [];
for (const p of PRESETS) {
  const res = await fetch(`${BASE}/api/v1/renders`, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({ ...p.fields, sample: p.sample }),
  });
  const created = await res.json();
  if (!res.ok) throw new Error(`${p.id}: ${created.error?.message}`);
  const render = await waitFor(created.id);
  if (render.status !== "succeeded") {
    console.warn(`skip ${p.id}: ${render.error}`);
    continue;
  }
  if (render.demo) throw new Error("This server is in demo mode. Connect an AI provider before generating a showcase.");
  const out = Buffer.from(await (await fetch(render.output_urls[0], { headers: auth })).arrayBuffer());
  const after = `/showcase/${p.id}-after.webp`;
  const before = `/showcase/${p.id}-before.webp`;
  const meta = await sharp(out).webp({ quality: 80 }).toFile(`public${after}`);
  // The "before" is the same sample photo the render started from, resized to match.
  await sharp(`public/images/library/${p.sample}.webp`).resize(meta.width, meta.height, { fit: "cover" }).webp({ quality: 80 }).toFile(`public${before}`);
  items.push({ id: p.id, title: p.title, tool: p.fields.tool, detail: p.detail, before, after, width: meta.width, height: meta.height });
  console.log(`✓ ${p.id}`);
}

const header = (await readFile("src/content/showcase.ts", "utf8")).split("export const SHOWCASE")[0];
await writeFile("src/content/showcase.ts", `${header}export const SHOWCASE: ShowcaseItem[] = ${JSON.stringify(items, null, 2)};\n`);
console.log(`Wrote ${items.length} showcase pairs. Commit public/showcase and src/content/showcase.ts.`);
