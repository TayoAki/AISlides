// Content schema for every marketing page. Page components render these
// shapes; content files under src/content/pages/ supply the data.

export const IMAGE_KEYS = [
  "living-modern",
  "living-japandi",
  "living-coastal",
  "living-boho",
  "living-classic",
  "living-dated",
  "kitchen-modern",
  "kitchen-farmhouse",
  "kitchen-dark",
  "kitchen-dated",
  "bath-spa",
  "bath-modern",
  "bedroom-calm",
  "bedroom-warm",
  "dining-modern",
  "office-home",
  "kids-room",
  "empty-room",
  "empty-room-2",
  "exterior-modern",
  "exterior-farmhouse",
  "exterior-brick",
  "exterior-dusk",
  "garden-backyard",
  "garden-patio",
  "garden-front",
  "garden-pool",
  "detail-cabinets",
  "detail-countertop",
  "detail-flooring",
  "detail-paint",
  "detail-tile",
  "sketch-plan",
  "smart-home",
  "furniture-sofa",
  "furniture-chair",
  "decor-shelf",
] as const;
export type ImageKey = (typeof IMAGE_KEYS)[number];

export const ICON_NAMES = [
  "sparkles", "wand", "palette", "sofa", "home", "trees", "ruler", "layers", "camera", "clock",
  "shield", "download", "brush", "lamp", "sun", "image", "pencil", "scan", "users", "briefcase",
  "building", "hammer", "key", "megaphone", "chart", "code", "lightbulb", "leaf", "droplet", "grid",
  "eye", "heart", "zap", "globe", "lock", "message", "search", "move", "eraser", "cpu",
] as const;
export type IconName = (typeof ICON_NAMES)[number];

export type Cta = { label: string; href: string };
export type Faq = { q: string; a: string };
export type Step = { title: string; body: string };
export type Benefit = { title: string; body: string; icon: IconName };
export type ContentSection = { title: string; body: string; bullets?: string[]; image?: ImageKey };

/** Rich text for articles, legal pages and company pages. `text` supports **bold** and [links](/path). */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "image"; image: ImageKey; caption?: string }
  | { type: "cta"; title: string; text: string; cta: Cta };

/** Use-case, audience, feature and free-tool pages share one template. */
export type LandingPage = {
  /** Route path without a leading slash, e.g. "interior-design-ai" or "features/redesign". */
  slug: string;
  kind: "use-case" | "audience" | "feature" | "free-tool";
  status: "live" | "coming-soon";
  navLabel: string;
  /** Without the brand suffix (the layout appends " | Roomwright"). Max 55 chars. */
  metaTitle: string;
  /** 120–160 chars. */
  metaDescription: string;
  eyebrow: string;
  /** H1, max ~70 chars. */
  title: string;
  subtitle: string;
  /** For live pages: a studio deep link built with studioHref(). For coming-soon pages: "#early-access". */
  primaryCta: Cta;
  heroImage: ImageKey;
  /** Exactly 3 short proof points shown under the hero (max ~40 chars each). */
  highlights: [string, string, string];
  steps: [Step, Step, Step];
  /** 4–6 items. */
  benefits: Benefit[];
  /** 2–3 deeper sections, 70–150 words each. */
  sections: ContentSection[];
  /** 4–6 items. */
  faqs: Faq[];
  /** 3–4 slugs of other LandingPages. */
  related: string[];
};

export type IdeaPage = {
  slug: "ideas/interior" | "ideas/exterior" | "ideas/garden";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string[];
  /** 10–14 ideas. `tryPrompt` is a ready-to-use instruction for the studio. */
  ideas: { title: string; body: string; image: ImageKey; tags: string[]; tryPrompt: string }[];
  faqs: Faq[];
};

export type DocPage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow?: string;
  title: string;
  intro: string;
  /** ISO date, shown as "Last updated" on legal pages. */
  updated?: string;
  blocks: Block[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  /** ISO date. */
  date: string;
  readingMinutes: number;
  category: "Guides" | "Real estate" | "Inspiration" | "Product";
  heroImage: ImageKey;
  body: Block[];
};

export type ChangelogEntry = {
  /** ISO date. */
  date: string;
  title: string;
  summary: string;
  items: { tag: "New" | "Improved" | "Fixed"; text: string }[];
};

export type ReleaseNote = {
  version: string;
  /** ISO date. */
  date: string;
  highlights: string[];
  changes: { tag: "New" | "Improved" | "Fixed"; text: string }[];
};

/** Copy for the program pages that also carry a lead form. */
export type ProgramPage = {
  slug: "affiliate-program" | "enterprise" | "white-label-widget" | "api";
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: ImageKey;
  benefits: Benefit[];
  steps: [Step, Step, Step];
  sections: ContentSection[];
  faqs: Faq[];
  form: { title: string; text: string; submitLabel: string; successText: string; askCompany: boolean; askWebsite: boolean; messageLabel: string };
};

export type HelpCategory = { id: string; title: string; icon: IconName; faqs: Faq[] };
