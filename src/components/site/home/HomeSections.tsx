import Link from "next/link";
import { ArrowRight, Check, Layers, Move, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import { FaqList } from "@/components/content/Faq";
import { HeroStudio } from "@/components/site/HeroStudio";
import { PricingTable } from "@/components/site/PricingTable";
import { TOOL_ICONS } from "@/components/app/tool-icons";
import { TOOLS, type ToolId } from "@/lib/tools";
import { BRAND } from "@/lib/brand";
import type { Faq, ImageKey } from "@/content/types";
import { SHOWCASE } from "@/content/showcase";
import { BeforeAfter } from "@/components/app/BeforeAfter";

// Home page sections, shared by the page and the Flute promo scenes.

export const TOOL_PAGES: Record<ToolId, string> = {
  redesign: "/features/redesign",
  "virtual-staging": "/features/fill-spaces",
  "decor-staging": "/features/decor-staging",
  declutter: "/features/furniture-removal",
  paint: "/features/paint-visualizer",
  materials: "/features/material-swap",
  sky: "/features/sky-colors",
  sketch: "/features/sketch-to-render",
  edit: "/features/precision-edit",
  "style-transfer": "/features/design-transfer",
  "text-to-design": "/features/text-to-design",
  "furniture-creator": "/features/furniture-creator",
};

export const SPACES: { title: string; text: string; image: ImageKey; links: { label: string; href: string }[] }[] = [
  {
    title: "Interiors",
    text: "Living rooms, kitchens, baths, bedrooms and every room between.",
    image: "living-modern",
    links: [
      { label: "AI interior design", href: "/interior-design-ai" },
      { label: "Kitchen design", href: "/kitchen-design-ai" },
      { label: "Bathroom design", href: "/bathroom-design-ai" },
      { label: "Virtual staging", href: "/virtual-staging-ai" },
    ],
  },
  {
    title: "Exteriors",
    text: "Facades, paint, siding, roofs, porches and curb appeal.",
    image: "exterior-modern",
    links: [
      { label: "House exterior design", href: "/exterior-ai" },
      { label: "Paint visualizer", href: "/features/paint-visualizer" },
      { label: "Sky and lighting", href: "/features/sky-colors" },
      { label: "Exterior ideas", href: "/ideas/exterior" },
    ],
  },
  {
    title: "Gardens",
    text: "Backyards, patios, front yards, decks and pool areas.",
    image: "garden-patio",
    links: [
      { label: "Landscaping AI", href: "/landscaping-ai" },
      { label: "Free landscape design", href: "/free-ai-tools/landscape-design" },
      { label: "Garden ideas", href: "/ideas/garden" },
      { label: "Design transfer", href: "/features/design-transfer" },
    ],
  },
];

export const AUDIENCES: { title: string; text: string; href: string; image: ImageKey }[] = [
  { title: "Real estate agents", text: "Stage empty listings and show buyers the potential.", href: "/for/realtors", image: "empty-room" },
  { title: "Homeowners & renovators", text: "Preview a remodel before you commit a budget.", href: "/for/renovators", image: "kitchen-farmhouse" },
  { title: "Interior designers", text: "Turn a site photo into concepts in a meeting.", href: "/for/interior-designers", image: "living-japandi" },
  { title: "Architects", text: "Take massing sketches to photoreal mood images.", href: "/for/architects", image: "sketch-plan" },
  { title: "Contractors", text: "Show finish options and close scopes faster.", href: "/for/contractors", image: "detail-cabinets" },
  { title: "Builders & developers", text: "Market homes before the drywall goes up.", href: "/for/builders", image: "exterior-dusk" },
];


export function HomeHero() {
  return (
    <section className="bg-grain relative overflow-hidden border-b border-line/60">
        <Container className="grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.02fr_1fr] lg:pb-28 lg:pt-20">
          <div data-hero-copy>
            <Badge tone="brand">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden /> Free during public beta
            </Badge>
            <h1 className="mt-6 text-[2.9rem] leading-[1.02] text-ink sm:text-[4.2rem]">
              See your space, <em className="font-display italic text-brand">remade.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              Upload a photo of any room, facade or garden. {BRAND.name} redesigns it in the style you choose while your walls, windows and layout stay exactly where they are.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/signup" size="lg">
                Start designing free <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/ai-features" variant="secondary" size="lg">
                Explore the tools
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["No card needed", "Interiors, exteriors and gardens", "12 design tools"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="size-4 text-brand" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroStudio />
        </Container>
      </section>
  );
}

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28" id="how-it-works">
        <Container>
          <SectionHeading eyebrow="How it works" title="From photo to fresh idea in about a minute" align="center" />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { t: "Upload a photo", b: "Snap the room, facade or yard as it is today, or start from one of our sample photos." },
              { t: "Choose a direction", b: "Pick a tool and a style, set how much should change, and add a note if you like." },
              { t: "Compare and refine", b: "Slide between before and after, try another style, make a precise edit, and download." },
            ].map((s, i) => (
              <li key={s.t} className="rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-soft">
                <span className="font-display text-6xl leading-none text-accent/80">{i + 1}</span>
                <h3 className="mt-5 text-2xl text-ink">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
  );
}

export function ToolCard({ tool }: { tool: ToolId }) {
  const t = TOOLS[tool];
  const Icon = TOOL_ICONS[t.id];
  return (
    <Link href={TOOL_PAGES[t.id]} className="group block h-full rounded-[1.25rem] border border-line bg-surface p-5 transition hover:border-brand/40 hover:shadow-lift">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong transition group-hover:bg-brand group-hover:text-brand-ink">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-4 text-lg text-ink">{t.label}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{t.blurb}</p>
    </Link>
  );
}

export function ToolsSection() {
  return (
    <section className="border-y border-line/70 bg-surface-2 py-20 sm:py-28" id="tools">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="The toolkit" title="Twelve tools. One studio." subtitle="Start broad with a full redesign, then get specific: paint, materials, staging, sky, precise edits and more." />
            <ButtonLink href="/ai-features" variant="secondary">
              All features <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.values(TOOLS).map((t) => (
              <ToolCard key={t.id} tool={t.id} />
            ))}
          </div>
        </Container>
      </section>
  );
}

export function SpacesSection() {
  return (
    <section className="py-20 sm:py-28" id="spaces">
        <Container>
          <SectionHeading eyebrow="Every space" title="Inside, outside and out back" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SPACES.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-soft">
                <Photo image={s.image} className="aspect-[4/3]" sizes="(min-width: 1024px) 400px, 100vw" />
                <div className="p-6">
                  <h3 className="text-2xl text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-muted">{s.text}</p>
                  <ul className="mt-5 grid gap-1.5">
                    {s.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                          {l.label}
                          <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
  );
}

export function RealSpaceSection() {
  return (
    <section className="py-4 sm:py-8">
        <Container>
          <div className="grid items-center gap-12 overflow-hidden rounded-[2rem] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Photo image="living-classic" className="aspect-[5/4]" />
            </div>
            <div>
              <Eyebrow>Your real space</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-[2.6rem]">Designed around the room you actually have</h2>
              <p className="mt-4 text-lg text-muted">Generic AI images invent a new room. {BRAND.name} starts from yours, so ideas are grounded in your windows, your light and your floor plan.</p>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, t: "Structure stays put", b: "Walls, openings and camera angle are held in place." },
                  { icon: SlidersHorizontal, t: "You set the dial", b: "Subtle refresh, balanced restyle or bold transformation." },
                  { icon: Move, t: "Compare side by side", b: "Drag the slider to see exactly what changed." },
                  { icon: Layers, t: "Build on results", b: "Refine a render with a precise edit or a new material." },
                ].map(({ icon: I, t, b }) => (
                  <li key={t}>
                    <I className="size-5 text-brand" />
                    <p className="mt-2 font-medium text-ink">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
  );
}

export function ProsSection() {
  return (
    <section className="py-20 sm:py-28" id="for-pros">
        <Container>
          <SectionHeading eyebrow="For professionals" title="Built for people who sell, design and build homes" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <Link key={a.href} href={a.href} className="group flex gap-4 rounded-[1.25rem] border border-line bg-surface p-4 transition hover:shadow-lift">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
                  <Photo image={a.image} fill sizes="96px" />
                </div>
                <div className="self-center">
                  <h3 className="text-lg text-ink">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted">{a.text}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    Learn more <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
  );
}

export function IdeasSection() {
  return (
    <section className="border-y border-line/70 bg-surface-2 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Inspiration" title="Not sure where to start?" subtitle="Browse ideas for interiors, exteriors and gardens, each with a ready-made prompt you can try on your own photo." />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Interior design ideas", href: "/ideas/interior", image: "living-boho" as ImageKey },
              { t: "Exterior design ideas", href: "/ideas/exterior", image: "exterior-farmhouse" as ImageKey },
              { t: "Garden design ideas", href: "/ideas/garden", image: "garden-backyard" as ImageKey },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="group relative overflow-hidden rounded-[1.5rem] border border-line">
                <Photo image={c.image} className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-white">{c.t}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm text-white/85">
                    Browse ideas <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
  );
}

export function PricingSection() {
  return (
    <section className="scroll-mt-20 py-20 sm:py-28" id="pricing">
        <Container>
          <SectionHeading eyebrow="Pricing" title="Free while we're in beta" subtitle="Use every live tool at no cost today. Paid plans are coming for heavier and commercial use." align="center" />
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </section>
  );
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="border-t border-line/70 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Good questions"
            subtitle={
              <>
                More answers in the <Link href="/help" className="text-brand underline underline-offset-4">help desk</Link>.
              </>
            }
          />
          <FaqList faqs={faqs} />
        </Container>
      </section>
  );
}

/** Real before/after pairs made with Roomwright. Renders nothing until scripts/generate-showcase.mjs has run. */
export function ShowcaseSection() {
  if (SHOWCASE.length === 0) return null;
  return (
    <section className="py-20 sm:py-28" id="showcase">
      <Container>
        <SectionHeading eyebrow="Made with Roomwright" title="Real photos, real results" subtitle="Each pair is a single render from the studio. Drag to compare." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.slice(0, 6).map((item) => (
            <figure key={item.id}>
              <BeforeAfter before={item.before} after={item.after} className="border border-line shadow-soft" />
              <figcaption className="mt-3">
                <p className="font-medium text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
