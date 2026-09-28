import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { ImageProvider, ProviderInput } from "./types";

// Used only when no AI provider key is configured. It never pretends to be AI:
// every image carries a visible "Demo preview" label, and the UI explains it.
// The label artwork is pre-rendered PNG so it stays legible on servers without fonts.

const ASSETS = path.join(process.cwd(), "src", "lib", "server", "ai", "assets");
let assetCache: Promise<{ badge: Buffer; placeholder: Buffer }> | null = null;
const assets = () =>
  (assetCache ??= Promise.all([fs.readFile(path.join(ASSETS, "demo-badge.png")), fs.readFile(path.join(ASSETS, "demo-placeholder.png"))]).then(
    ([badge, placeholder]) => ({ badge, placeholder }),
  ));

function grade(style = "") {
  const s = style.toLowerCase();
  if (/(coastal|scandi|minimal|japandi|wabi)/.test(s)) return { brightness: 1.07, saturation: 0.86, wash: { r: 238, g: 222, b: 196 } };
  if (/(industrial|dark|art deco|tudor)/.test(s)) return { brightness: 0.95, saturation: 0.9, wash: { r: 72, g: 82, b: 98 } };
  if (/(boho|bohemian|mediterranean|rustic|farmhouse|desert|spanish)/.test(s)) return { brightness: 1.02, saturation: 1.08, wash: { r: 226, g: 150, b: 102 } };
  return { brightness: 1.03, saturation: 0.96, wash: { r: 170, g: 196, b: 180 } };
}

async function placeholder(input: ProviderInput) {
  const width = 1536;
  const height = input.spec.tool === "furniture-creator" ? 1536 : 1024;
  const { placeholder: label } = await assets();
  const text = await sharp(label).resize({ width: Math.round(width * 0.72) }).toBuffer();
  const gradient = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dcebe4"/><stop offset="1" stop-color="#f6e0d4"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
  );
  return sharp(gradient).composite([{ input: text, gravity: "center" }]).jpeg({ quality: 88 }).toBuffer();
}

export const demoProvider: ImageProvider = {
  id: "demo",
  demo: true,
  async generate(input) {
    if (!input.image) return placeholder(input);
    const g = grade(input.spec.style);
    const { data, info } = await sharp(input.image)
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .modulate({ brightness: g.brightness, saturation: g.saturation })
      .jpeg({ quality: 90 })
      .toBuffer({ resolveWithObject: true });
    // A soft-light color wash shifts the mood but keeps the photo's own colors.
    const wash = { create: { width: info.width, height: info.height, channels: 4 as const, background: { ...g.wash, alpha: 0.35 } } };
    const { badge } = await assets();
    const margin = Math.round(info.width * 0.02);
    const label = await sharp(badge).resize({ width: Math.min(info.width - margin * 2, Math.round(info.width * 0.46)) }).toBuffer({ resolveWithObject: true });
    return sharp(data)
      .composite([
        { input: wash, blend: "soft-light" },
        { input: label.data, left: margin, top: info.height - label.info.height - margin },
      ])
      .jpeg({ quality: 88 })
      .toBuffer();
  },
};
