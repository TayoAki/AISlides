// Aggregates every content page so routes, the sitemap and "related" links can look pages up by slug.
import { useCasePages } from "./pages/use-cases";
import { audiencePages } from "./pages/audiences";
import { featurePages } from "./pages/features";
import { freeToolPages } from "./pages/free-tools";
import { ideaPages } from "./pages/ideas";
import { companyPages } from "./pages/company";
import { legalPages } from "./pages/legal";
import { programPages } from "./pages/programs";
import { blogPosts } from "./pages/blog";
import type { BlogPost, DocPage, IdeaPage, LandingPage, ProgramPage } from "./types";

export const LANDING_PAGES: LandingPage[] = [...useCasePages, ...audiencePages, ...featurePages, ...freeToolPages];
export const IDEA_PAGES: IdeaPage[] = ideaPages;
export const DOC_PAGES: DocPage[] = [...companyPages, ...legalPages];
export const PROGRAM_PAGES: ProgramPage[] = programPages;
export const BLOG_POSTS: BlogPost[] = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

const landingBySlug = new Map<string, LandingPage>(LANDING_PAGES.map((p) => [p.slug, p]));
const docBySlug = new Map<string, DocPage>(DOC_PAGES.map((p) => [p.slug, p]));
const programBySlug = new Map<string, ProgramPage>(PROGRAM_PAGES.map((p) => [p.slug, p]));

export const getLanding = (slug: string) => landingBySlug.get(slug);
export const getDoc = (slug: string) => docBySlug.get(slug);
export const getProgram = (slug: string) => programBySlug.get(slug);
export const getIdea = (slug: string) => IDEA_PAGES.find((p) => p.slug === slug);
export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const landingsOfKind = (kind: LandingPage["kind"]) => LANDING_PAGES.filter((p) => p.kind === kind);

/** Top-level single-segment slugs served by app/(marketing)/[slug]. */
export const TOP_LEVEL_SLUGS = [
  ...LANDING_PAGES.filter((p) => !p.slug.includes("/")).map((p) => p.slug),
  ...DOC_PAGES.map((p) => p.slug),
  ...PROGRAM_PAGES.filter((p) => p.slug !== "api").map((p) => p.slug),
];

export const KIND_LABEL: Record<LandingPage["kind"], { label: string; href: string }> = {
  "use-case": { label: "Use cases", href: "/ai-use-cases" },
  audience: { label: "Use cases", href: "/ai-use-cases" },
  feature: { label: "Features", href: "/ai-features" },
  "free-tool": { label: "Free AI tools", href: "/free-ai-tools" },
};
