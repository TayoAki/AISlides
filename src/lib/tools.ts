// Catalog of studio tools and the options the studio offers. Shared by the
// marketing pages (CTA links), the studio UI and the render pipeline.

export const SPACES = ["interior", "exterior", "garden"] as const;
export type SpaceKind = (typeof SPACES)[number];

export const SPACE_LABELS: Record<SpaceKind, string> = {
  interior: "Interior",
  exterior: "Exterior",
  garden: "Garden",
};

export const TOOL_IDS = [
  "redesign",
  "virtual-staging",
  "decor-staging",
  "declutter",
  "paint",
  "materials",
  "sky",
  "sketch",
  "edit",
  "style-transfer",
  "text-to-design",
  "furniture-creator",
] as const;
export type ToolId = (typeof TOOL_IDS)[number];

export type ToolDef = {
  id: ToolId;
  label: string;
  blurb: string;
  spaces: SpaceKind[];
  /** Whether the tool starts from a photo (false = text only). */
  needsPhoto: boolean;
  /** Which option groups the studio shows for this tool. */
  options: Array<"roomType" | "style" | "surface" | "material" | "color" | "sky" | "strength" | "reference">;
  /** Whether a custom instruction is required (true) or optional (false). */
  promptRequired: boolean;
};

export const TOOLS: Record<ToolId, ToolDef> = {
  redesign: {
    id: "redesign",
    label: "Redesign",
    blurb: "Restyle the whole space while keeping its structure.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: true,
    options: ["roomType", "style", "strength"],
    promptRequired: false,
  },
  "virtual-staging": {
    id: "virtual-staging",
    label: "Virtual staging",
    blurb: "Furnish an empty room in the style you choose.",
    spaces: ["interior"],
    needsPhoto: true,
    options: ["roomType", "style"],
    promptRequired: false,
  },
  "decor-staging": {
    id: "decor-staging",
    label: "Decor staging",
    blurb: "Add rugs, art, plants and accessories without replacing furniture.",
    spaces: ["interior"],
    needsPhoto: true,
    options: ["roomType", "style"],
    promptRequired: false,
  },
  declutter: {
    id: "declutter",
    label: "Declutter & remove",
    blurb: "Clear furniture and clutter to reveal the empty room.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: true,
    options: [],
    promptRequired: false,
  },
  paint: {
    id: "paint",
    label: "Paint visualizer",
    blurb: "Preview a new wall or facade color.",
    spaces: ["interior", "exterior"],
    needsPhoto: true,
    options: ["color"],
    promptRequired: false,
  },
  materials: {
    id: "materials",
    label: "Material swap",
    blurb: "Swap floors, walls, counters, cabinets or siding.",
    spaces: ["interior", "exterior"],
    needsPhoto: true,
    options: ["surface", "material"],
    promptRequired: false,
  },
  sky: {
    id: "sky",
    label: "Sky & light",
    blurb: "Replace a dull sky and relight the scene.",
    spaces: ["exterior", "garden"],
    needsPhoto: true,
    options: ["sky"],
    promptRequired: false,
  },
  sketch: {
    id: "sketch",
    label: "Sketch to render",
    blurb: "Turn a hand sketch or line drawing into a photoreal image.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: true,
    options: ["roomType", "style"],
    promptRequired: false,
  },
  edit: {
    id: "edit",
    label: "Precision edit",
    blurb: "Change one thing: swap a sofa, add a window seat, remove a lamp.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: true,
    options: [],
    promptRequired: true,
  },
  "style-transfer": {
    id: "style-transfer",
    label: "Style transfer",
    blurb: "Borrow the look of an inspiration photo.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: true,
    options: ["reference", "strength"],
    promptRequired: false,
  },
  "text-to-design": {
    id: "text-to-design",
    label: "Text to design",
    blurb: "Describe a space and generate it from scratch.",
    spaces: ["interior", "exterior", "garden"],
    needsPhoto: false,
    options: ["roomType", "style"],
    promptRequired: true,
  },
  "furniture-creator": {
    id: "furniture-creator",
    label: "Furniture creator",
    blurb: "Design a one-off piece of furniture from a description.",
    spaces: ["interior"],
    needsPhoto: false,
    options: ["style"],
    promptRequired: true,
  },
};

export const ROOM_TYPES: Record<SpaceKind, string[]> = {
  interior: [
    "Living room",
    "Kitchen",
    "Open-plan kitchen & living",
    "Bedroom",
    "Bathroom",
    "Dining room",
    "Home office",
    "Kids room",
    "Nursery",
    "Family room",
    "Attic",
    "Basement",
    "Entryway",
    "Laundry room",
    "Walk-in closet",
    "Home gym",
    "Game room",
    "Balcony",
    "Café",
    "Retail store",
    "Office",
  ],
  exterior: ["House front", "Backyard facade", "Porch", "Garage", "Townhouse", "Apartment building", "Cabin"],
  garden: ["Backyard", "Front yard", "Patio", "Deck", "Pool area", "Courtyard", "Rooftop terrace", "Side yard"],
};

export const STYLES: Record<SpaceKind, string[]> = {
  interior: [
    "Modern",
    "Japandi",
    "Scandinavian",
    "Mid-century modern",
    "Minimalist",
    "Contemporary",
    "Transitional",
    "Coastal",
    "Bohemian",
    "Industrial",
    "Farmhouse",
    "Traditional",
    "Mediterranean",
    "Art deco",
    "Quiet luxury",
    "Rustic",
    "Wabi-sabi",
    "Maximalist",
    "Bauhaus",
    "French country",
  ],
  exterior: [
    "Modern",
    "Modern farmhouse",
    "Craftsman",
    "Colonial",
    "Mediterranean",
    "Scandinavian",
    "Mid-century modern",
    "Coastal",
    "Industrial",
    "Tudor",
    "Spanish revival",
    "Contemporary",
  ],
  garden: [
    "Modern",
    "Cottage",
    "Japanese zen",
    "Mediterranean",
    "Desert xeriscape",
    "Tropical",
    "English formal",
    "Wildflower meadow",
    "Minimalist",
    "Woodland",
  ],
};

export const SURFACES = ["Flooring", "Walls", "Countertops", "Cabinets", "Ceiling", "Siding", "Roof"] as const;

export const MATERIALS: Record<(typeof SURFACES)[number], string[]> = {
  Flooring: ["Light oak hardwood", "Walnut hardwood", "Herringbone oak", "Polished concrete", "Large porcelain tile", "Terracotta tile", "Natural stone"],
  Walls: ["Limewash plaster", "Painted wood paneling", "Exposed brick", "Zellige tile", "Grasscloth wallpaper", "Microcement"],
  Countertops: ["White quartz", "Calacatta marble", "Black granite", "Butcher block", "Terrazzo", "Soapstone"],
  Cabinets: ["Matte white slab", "Sage green shaker", "Navy shaker", "Natural walnut", "Fluted oak", "Black matte"],
  Ceiling: ["Exposed wood beams", "Tongue-and-groove wood", "Coffered", "Smooth white plaster"],
  Siding: ["White board and batten", "Charred timber", "Red brick", "Painted stucco", "Natural stone", "Fiber cement lap"],
  Roof: ["Standing-seam metal", "Clay tile", "Slate", "Asphalt shingle"],
};

export const PAINT_COLORS = [
  { name: "Warm white", hex: "#F2EDE3" },
  { name: "Greige", hex: "#CFC6B8" },
  { name: "Sage", hex: "#A9B8A0" },
  { name: "Evergreen", hex: "#2F4F43" },
  { name: "Terracotta", hex: "#C0694A" },
  { name: "Clay pink", hex: "#D9A99A" },
  { name: "Navy", hex: "#23324A" },
  { name: "Charcoal", hex: "#3A3B3C" },
  { name: "Butter yellow", hex: "#EFD9A0" },
  { name: "Sky blue", hex: "#AFC8DA" },
];

export const SKIES = ["Clear blue midday", "Golden hour", "Soft overcast", "Dramatic sunset", "Blue hour dusk", "Twilight with lights on"];

export const STRENGTHS = [
  { id: "subtle", label: "Subtle", hint: "Keep most of what's there" },
  { id: "balanced", label: "Balanced", hint: "Noticeable restyle" },
  { id: "bold", label: "Bold", hint: "Full transformation" },
] as const;
export type Strength = (typeof STRENGTHS)[number]["id"];

/** Build a studio deep link, e.g. studioHref({ tool: "redesign", space: "interior" }). */
export function studioHref(preset: { tool: ToolId; space?: SpaceKind; roomType?: string; style?: string }) {
  const params = new URLSearchParams({ tool: preset.tool });
  if (preset.space) params.set("space", preset.space);
  if (preset.roomType) params.set("room", preset.roomType);
  if (preset.style) params.set("style", preset.style);
  return `/app/new?${params.toString()}`;
}
