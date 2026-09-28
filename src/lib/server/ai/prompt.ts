import { PAINT_COLORS } from "@/lib/tools";
import type { RenderSpec } from "./types";

const SUBJECT: Record<RenderSpec["space"], string> = {
  interior: "room",
  exterior: "house exterior",
  garden: "outdoor space",
};

const KEEP: Record<RenderSpec["space"], string> = {
  interior:
    "Keep the exact room architecture: walls, windows, doors, ceiling height, room proportions and the camera angle and lens must stay the same.",
  exterior:
    "Keep the building's structure, rooflines, window and door openings, proportions, surroundings and the camera angle unchanged.",
  garden:
    "Keep the property boundaries, the house and any hardscape that frames the space, the terrain and the camera angle unchanged.",
};

const STRENGTH: Record<RenderSpec["strength"], string> = {
  subtle: "Make restrained changes: refresh finishes and styling while keeping most existing furniture and colors.",
  balanced: "Make a clear, cohesive restyle.",
  bold: "Make a complete, confident transformation in the chosen style.",
};

const PHOTO = "The result must look like a real, professionally shot photograph with natural light and realistic materials.";

function colorPhrase(color?: string) {
  if (!color) return "a warm neutral";
  const named = PAINT_COLORS.find((c) => c.name.toLowerCase() === color.toLowerCase() || c.hex.toLowerCase() === color.toLowerCase());
  return named ? `${named.name.toLowerCase()} (${named.hex})` : color;
}

function clean(text?: string) {
  return text?.replace(/\s+/g, " ").trim() ?? "";
}

/** Builds the instruction sent to the image model for a render. */
export function buildPrompt(spec: RenderSpec): string {
  const room = clean(spec.roomType).toLowerCase() || SUBJECT[spec.space];
  const style = clean(spec.style) || "modern";
  const extra = clean(spec.prompt);
  const withExtra = (s: string) => (extra ? `${s} Additional direction: ${extra}.` : s);

  switch (spec.tool) {
    case "redesign":
      return withExtra(
        `Redesign this ${room} in a ${style} style. ${KEEP[spec.space]} Replace the ${
          spec.space === "interior" ? "furniture, decor, lighting, colors and finishes" : spec.space === "exterior" ? "cladding, colors, trim, doors, lighting and planting" : "planting, paving, furniture and lighting"
        } so everything reads as a cohesive ${style} design. ${STRENGTH[spec.strength]} ${PHOTO}`,
      );
    case "virtual-staging":
      return withExtra(
        `Virtually stage this empty ${room} in a ${style} style: add well-proportioned furniture, a rug, lighting, art, plants and accessories arranged the way a professional stager would. ${KEEP.interior} Do not change the floor, walls, windows or fixtures. ${PHOTO}`,
      );
    case "decor-staging":
      return withExtra(
        `Add ${style} decor to this ${room}: rugs, throw pillows, art, plants, lamps, books and accessories. Keep the existing large furniture pieces and the architecture exactly as they are. ${PHOTO}`,
      );
    case "declutter":
      return withExtra(
        `Remove all furniture, clutter, loose items and people from this ${SUBJECT[spec.space]}, leaving it clean and empty. Rebuild the floor, walls and surfaces that were hidden behind removed items so they look continuous and natural. ${KEEP[spec.space]} ${PHOTO}`,
      );
    case "paint":
      return withExtra(
        spec.space === "exterior"
          ? `Repaint the exterior walls and siding of this house in ${colorPhrase(spec.color)}. Keep trim, windows, roof, landscaping and everything else unchanged. Realistic paint finish in natural daylight. ${PHOTO}`
          : `Repaint the walls of this ${room} in ${colorPhrase(spec.color)} with a realistic matte finish. Keep the ceiling, trim, floor, furniture, decor and lighting unchanged. ${PHOTO}`,
      );
    case "materials": {
      const surface = clean(spec.surface).toLowerCase() || (spec.space === "exterior" ? "siding" : "flooring");
      const material = clean(spec.material) || "light oak";
      return withExtra(
        `Replace the ${surface} in this ${spec.space === "exterior" ? "house exterior" : room} with ${material.toLowerCase()}. Match perspective, scale and lighting so the new ${surface} looks installed. Keep everything else exactly the same. ${PHOTO}`,
      );
    }
    case "sky":
      return withExtra(
        `Replace the sky with a ${clean(spec.sky).toLowerCase() || "clear blue midday"} sky and relight the scene to match it, including realistic reflections and shadows${
          /dusk|twilight|night/i.test(spec.sky ?? "") ? " and warm interior lights glowing through the windows" : ""
        }. Keep the buildings, landscaping and composition unchanged. ${PHOTO}`,
      );
    case "sketch":
      return withExtra(
        `Turn this sketch into a photorealistic photograph of a ${style} ${room}. Follow the drawn layout, proportions, perspective and openings exactly, and choose realistic materials, furniture and lighting that fit the ${style} style. ${PHOTO}`,
      );
    case "edit":
      return `${extra || "Refresh this space"}. Change only what this instruction asks for and keep everything else in the image exactly the same, including the architecture, lighting and camera angle. ${PHOTO}`;
    case "style-transfer":
      return withExtra(
        `Restyle the ${SUBJECT[spec.space]} in the first image using the style, color palette, materials and mood of the second image. ${KEEP[spec.space]} Do not copy the second image's layout. ${STRENGTH[spec.strength]} ${PHOTO}`,
      );
    case "text-to-design":
      return `A photorealistic, professionally shot photograph of a ${style} ${room}${extra ? `: ${extra}` : ""}. Natural light, realistic materials, wide-angle architectural photography, eye-level camera.`;
    case "furniture-creator":
      return `A studio product photograph of a single, original piece of ${style} furniture: ${extra || "a lounge chair"}. Realistic materials and joinery, soft shadows, neutral seamless background, three-quarter view.`;
  }
}
