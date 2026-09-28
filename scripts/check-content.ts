// Validates marketing content against the schema limits and the nav map.
// Run: npx tsx scripts/check-content.ts [module ...]   (no args = every module)
import { ICON_NAMES, IMAGE_KEYS, type LandingPage } from "@/content/types";
import { FEATURE_LINKS, FOOTER_GROUPS, FREE_TOOL_LINKS, USE_CASE_LINKS } from "@/content/nav";

const errors: string[] = [];
const warn = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
const images = new Set<string>(IMAGE_KEYS);
const icons = new Set<string>(ICON_NAMES);
const navHrefs = new Set(FOOTER_GROUPS.flatMap((g) => g.links.map((l) => l.href)));
const soon = new Set(FEATURE_LINKS.filter((l) => l.soon).map((l) => l.href.slice(1)));

const MODULES: Record<string, { file: string; exportName: string; expect?: string[] }> = {
  "use-cases": { file: "use-cases", exportName: "useCasePages", expect: USE_CASE_LINKS.slice(1, 16).map((l) => l.href.slice(1)) },
  audiences: { file: "audiences", exportName: "audiencePages", expect: USE_CASE_LINKS.slice(16).map((l) => l.href.slice(1)) },
  features: { file: "features", exportName: "featurePages", expect: FEATURE_LINKS.slice(1).map((l) => l.href.slice(1)) },
  "free-tools": { file: "free-tools", exportName: "freeToolPages", expect: FREE_TOOL_LINKS.slice(1).map((l) => l.href.slice(1)) },
  ideas: { file: "ideas", exportName: "ideaPages", expect: ["ideas/interior", "ideas/exterior", "ideas/garden"] },
  company: { file: "company", exportName: "companyPages", expect: ["about", "press", "investors", "careers"] },
  legal: { file: "legal", exportName: "legalPages", expect: ["terms", "privacy", "refund-policy"] },
  programs: { file: "programs", exportName: "programPages", expect: ["affiliate-program", "enterprise", "white-label-widget", "api"] },
  help: { file: "help", exportName: "helpCategories" },
  blog: { file: "blog", exportName: "blogPosts" },
  changelog: { file: "changelog", exportName: "changelog" },
  releases: { file: "changelog", exportName: "releaseNotes" },
};

const len = (s: string) => [...s].length;
const range = (where: string, field: string, n: number, min: number, max: number) => {
  if (n < min || n > max) warn(where, `${field} is ${n}, expected ${min}–${max}`);
};
const noSmell = (where: string, text: string) => {
  const lower = text.toLowerCase();
  for (const bad of ["homedesigns", "home designs ai", "homedesignsai", "lorem ipsum", "todo", "tbd", "[insert", "{{"]) {
    if (lower.includes(bad)) warn(where, `contains forbidden text "${bad}"`);
  }
  if (/\b\d+(\.\d+)?\s?(k|m|million|thousand)\+?\s+(users|customers|designs|renders|projects|homeowners|agents)\b/i.test(text))
    warn(where, `looks like an unverifiable usage stat: "${text.slice(0, 80)}"`);
  if (/(#1|number one|world'?s best|trusted by)/i.test(text)) warn(where, `hype/unverifiable claim: "${text.slice(0, 80)}"`);
};
const walkText = (where: string, value: unknown) => {
  if (typeof value === "string") noSmell(where, value);
  else if (Array.isArray(value)) value.forEach((v, i) => walkText(`${where}[${i}]`, v));
  else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) walkText(`${where}.${k}`, v);
};
const checkImage = (where: string, key: unknown) => {
  if (typeof key !== "string" || !images.has(key)) warn(where, `unknown image key "${String(key)}"`);
};
const checkHref = (where: string, href: string) => {
  if (href.startsWith("#") || href.startsWith("/app/new") || href.startsWith("/signup") || href.startsWith("/login")) return;
  const path = href.split("#")[0].split("?")[0];
  if (path.startsWith("/blog/")) return;
  if (!navHrefs.has(path) && !["/app", "/pricing", "/help", "/docs/api"].includes(path)) warn(where, `link to unknown route "${href}"`);
};
const checkMarkdownLinks = (where: string, text: string) => {
  for (const m of text.matchAll(/\]\(([^)]+)\)/g)) checkHref(where, m[1]);
};

function checkLanding(p: LandingPage, allSlugs: Set<string>) {
  const w = `[${p.slug}]`;
  range(w, "metaTitle length", len(p.metaTitle), 15, 55);
  range(w, "metaDescription length", len(p.metaDescription), 110, 165);
  range(w, "title length", len(p.title), 10, 80);
  range(w, "benefits", p.benefits.length, 4, 6);
  range(w, "sections", p.sections.length, 2, 3);
  range(w, "faqs", p.faqs.length, 4, 6);
  range(w, "related", p.related.length, 3, 4);
  if (p.highlights.length !== 3) warn(w, "highlights must have exactly 3 items");
  if (p.steps.length !== 3) warn(w, "steps must have exactly 3 items");
  p.highlights.forEach((h, i) => range(w, `highlights[${i}] length`, len(h), 8, 48));
  p.benefits.forEach((b, i) => !icons.has(b.icon) && warn(w, `benefits[${i}] unknown icon "${b.icon}"`));
  p.sections.forEach((s, i) => {
    const words = s.body.split(/\s+/).length + (s.bullets?.join(" ").split(/\s+/).length ?? 0);
    range(w, `sections[${i}] words`, words, 60, 190);
    if (s.image) checkImage(`${w}.sections[${i}]`, s.image);
  });
  checkImage(`${w}.heroImage`, p.heroImage);
  p.related.forEach((r) => !allSlugs.has(r) && warn(w, `related slug "${r}" is not a known page`));
  const isSoon = soon.has(p.slug);
  if (isSoon !== (p.status === "coming-soon")) warn(w, `status should be ${isSoon ? "coming-soon" : "live"}`);
  if (p.status === "coming-soon" && p.primaryCta.href !== "#early-access") warn(w, 'coming-soon pages must use primaryCta.href "#early-access"');
  if (p.status === "live" && !p.primaryCta.href.startsWith("/app/new?")) warn(w, "live pages must deep-link into the studio via studioHref()");
  walkText(w, p);
}

async function main() {
  const wanted = process.argv.slice(2);
  const names = wanted.length ? wanted : Object.keys(MODULES);
  const allSlugs = new Set<string>([...navHrefs].map((h) => h.slice(1)));
  for (const name of names) {
    const spec = MODULES[name];
    if (!spec) { warn(name, "unknown module"); continue; }
    let mod: Record<string, unknown>;
    try {
      mod = await import(`@/content/pages/${spec.file}`);
    } catch (e) {
      warn(name, `cannot import src/content/pages/${spec.file}.ts (${(e as Error).message.split("\n")[0]})`);
      continue;
    }
    const data = mod[spec.exportName];
    if (!Array.isArray(data)) { warn(name, `export "${spec.exportName}" missing or not an array`); continue; }
    if (spec.expect) {
      const slugs = data.map((d: { slug?: string }) => d.slug);
      for (const s of spec.expect) if (!slugs.includes(s)) warn(name, `missing page "${s}"`);
      for (const s of slugs) if (!spec.expect.includes(s as string)) warn(name, `unexpected slug "${s}"`);
    }
    for (const item of data as Record<string, unknown>[]) {
      const w = `[${String(item.slug ?? item.id ?? item.version ?? item.date ?? name)}]`;
      if ("kind" in item) checkLanding(item as unknown as LandingPage, allSlugs);
      else walkText(w, item);
      for (const key of ["heroImage", "image"]) if (key in item) checkImage(`${w}.${key}`, item[key]);
      const blocks = (item.blocks ?? item.body) as { type: string; image?: string; text?: string; cta?: { href: string } }[] | undefined;
      if (Array.isArray(blocks)) blocks.forEach((b, i) => {
        if (b.type === "image") checkImage(`${w}.blocks[${i}]`, b.image);
        if (b.text) checkMarkdownLinks(`${w}.blocks[${i}]`, b.text);
        if (b.cta) checkHref(`${w}.blocks[${i}].cta`, b.cta.href);
      });
      if (Array.isArray(item.ideas)) (item.ideas as { image: string }[]).forEach((idea, i) => checkImage(`${w}.ideas[${i}]`, idea.image));
      if (Array.isArray(item.benefits) && !("kind" in item)) (item.benefits as { icon: string }[]).forEach((b, i) => !icons.has(b.icon) && warn(w, `benefits[${i}] unknown icon "${b.icon}"`));
    }
    console.log(`checked ${name}: ${data.length} item(s)`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} problem(s):`);
    for (const e of errors) console.log("  - " + e);
    process.exit(1);
  }
  console.log("content OK");
}

main();
