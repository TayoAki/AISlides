import sharp from "sharp";
import type { ImageProvider, ProviderInput } from "./types";

// Used only when no AI provider key is configured. It never pretends to be AI:
// every image carries a visible "Demo preview" label, and the UI explains it.

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function grade(style = "") {
  const s = style.toLowerCase();
  if (/(coastal|scandi|minimal|japandi|wabi)/.test(s)) return { brightness: 1.08, saturation: 0.82, tint: { r: 244, g: 240, b: 232 } };
  if (/(industrial|dark|art deco|tudor)/.test(s)) return { brightness: 0.92, saturation: 0.9, tint: { r: 214, g: 205, b: 196 } };
  if (/(boho|bohemian|mediterranean|rustic|farmhouse|desert|spanish)/.test(s)) return { brightness: 1.02, saturation: 1.08, tint: { r: 250, g: 226, b: 205 } };
  return { brightness: 1.03, saturation: 0.95, tint: { r: 238, g: 242, b: 236 } };
}

function badge(width: number, label: string) {
  const w = Math.min(width - 32, 520);
  return Buffer.from(
    `<svg width="${w}" height="64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" rx="14" width="${w}" height="64" fill="rgba(20,26,23,0.78)"/>
      <circle cx="30" cy="32" r="7" fill="#e68a64"/>
      <text x="48" y="29" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" font-weight="700" fill="#f6f2ea">Demo preview</text>
      <text x="48" y="49" font-family="DejaVu Sans, Arial, sans-serif" font-size="13" fill="#d8d2c6">${escape(label)}</text>
    </svg>`,
  );
}

async function placeholder(input: ProviderInput) {
  const width = 1536;
  const height = input.spec.tool === "furniture-creator" ? 1536 : 1024;
  const words = escape(input.spec.prompt ?? "").split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).length > 52) {
      lines.push(line);
      line = w;
    } else line = line ? `${line} ${w}` : w;
    if (lines.length === 4) break;
  }
  if (line && lines.length < 5) lines.push(line);
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dcebe4"/><stop offset="1" stop-color="#f6e0d4"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="96" y="${height / 2 - 120}" font-family="DejaVu Serif, Georgia, serif" font-size="56" fill="#1b1f1d">Text-to-design preview</text>
    ${lines.map((l, i) => `<text x="96" y="${height / 2 - 40 + i * 44}" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#3d433f">${l}</text>`).join("")}
    <text x="96" y="${height - 96}" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" fill="#1e5b4b">Connect an AI provider to generate this design.</text>
  </svg>`;
  return sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toBuffer();
}

export const demoProvider: ImageProvider = {
  id: "demo",
  demo: true,
  async generate(input) {
    if (!input.image) return placeholder(input);
    const g = grade(input.spec.style);
    const img = sharp(input.image).resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true });
    const meta = await img.clone().metadata();
    const graded = await img
      .modulate({ brightness: g.brightness, saturation: g.saturation })
      .tint(g.tint)
      .jpeg({ quality: 90 })
      .toBuffer({ resolveWithObject: true });
    const label = "Color grade only. Connect an AI provider for real redesigns.";
    return sharp(graded.data)
      .composite([{ input: badge(graded.info.width ?? meta.width ?? 1200, label), gravity: "southwest", top: graded.info.height - 80, left: 16 }])
      .jpeg({ quality: 88 })
      .toBuffer();
  },
};
