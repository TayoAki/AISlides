// Single source of truth for the product's identity. Rename the product here.
export const BRAND = {
  name: "Roomwright",
  tagline: "Redesign any space from a single photo",
  description:
    "Roomwright turns a photo of your room, facade or garden into photoreal redesigns in seconds. Restyle, stage, repaint and swap materials while your walls, windows and layout stay put.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Beta: every account is free. Plans on /pricing are shown but not charged.
  betaFree: true,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, BRAND.url).toString();
}
