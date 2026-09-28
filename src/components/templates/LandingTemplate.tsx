import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { LandingPage } from "@/content/types";
import { getLanding, KIND_LABEL } from "@/content/registry";
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/content/Photo";
import { FaqList } from "@/components/content/Faq";
import { CtaBand } from "@/components/content/CtaBand";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { InlineText } from "@/components/content/Blocks";
import { LeadForm } from "@/components/forms/LeadForm";
import { TOOLS, type ToolId } from "@/lib/tools";
import { cn } from "@/lib/cn";

function toolFromHref(href: string): ToolId | null {
  const m = href.match(/[?&]tool=([a-z-]+)/);
  return m && m[1] in TOOLS ? (m[1] as ToolId) : null;
}

export function LandingTemplate({ page }: { page: LandingPage }) {
  const soon = page.status === "coming-soon";
  const tool = toolFromHref(page.primaryCta.href);
  const related = page.related.map((s) => getLanding(s)).filter((p): p is LandingPage => Boolean(p));
  const crumb = KIND_LABEL[page.kind];

  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-14">
          <div>
            <Breadcrumbs items={[crumb, { label: page.navLabel, href: `/${page.slug}` }]} />
            <div className="mt-8 flex items-center gap-3">
              <Eyebrow>{page.eyebrow}</Eyebrow>
              {soon && <Badge tone="accent">Coming soon</Badge>}
            </div>
            <h1 className="mt-4 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">{page.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{page.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={page.primaryCta.href} size="lg">
                {page.primaryCta.label}
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href={soon ? "/ai-features" : "/pricing"} variant="secondary" size="lg">
                {soon ? "See live features" : "Free during beta"}
              </ButtonLink>
            </div>
            <ul className="mt-8 grid gap-2.5 sm:grid-cols-3">
              {page.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line shadow-lift">
              <Photo image={page.heroImage} eager sizes="(min-width: 1024px) 560px, 100vw" className="aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 mx-auto max-w-sm rounded-2xl border border-line bg-surface/95 p-4 shadow-lift backdrop-blur sm:left-auto sm:right-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Sparkles className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{tool ? TOOLS[tool].label : page.navLabel}</p>
                  <p className="truncate text-xs text-muted">{tool ? TOOLS[tool].blurb : "In development — join early access"}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How it works" title={soon ? "How it will work" : "Three steps, about a minute"} />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {page.steps.map((s, i) => (
              <li key={s.title} className="relative rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-soft">
                <span className="font-display text-5xl leading-none text-accent/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-line/70 bg-surface-2 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why it helps" title={`What you get with ${page.navLabel}`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((b) => (
              <div key={b.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon name={b.icon} />
                </span>
                <h3 className="mt-4 text-lg text-ink">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-16 sm:gap-24">
          {page.sections.map((s, i) => (
            <div key={s.title} className={cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <div className="overflow-hidden rounded-[1.5rem] border border-line">
                <Photo image={s.image ?? (i % 2 === 0 ? page.heroImage : related[0]?.heroImage ?? page.heroImage)} className="aspect-[5/4]" />
              </div>
              <div>
                <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-2">
                  <InlineText text={s.body} />
                </p>
                {s.bullets && (
                  <ul className="mt-5 grid gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-ink-2">
                        <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                        <span>
                          <InlineText text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {soon && (
        <section id="early-access" className="scroll-mt-24 pb-8">
          <Container>
            <div className="grid gap-8 rounded-[2rem] border border-line bg-surface p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <Badge tone="accent">Coming soon</Badge>
                <h2 className="mt-4 text-3xl text-ink">Get early access to {page.navLabel}</h2>
                <p className="mt-3 text-lg text-muted">
                  Leave your email and we&apos;ll let you know the moment it&apos;s ready to try. In the meantime, every live tool is free during the beta.
                </p>
              </div>
              <div className="self-center">
                <LeadForm kind={`early-access:${page.slug}`} compact submitLabel="Notify me" successText="You're on the list. We'll email you when it's ready." />
              </div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle={<>Still curious? Visit the <Link href="/help" className="text-brand underline underline-offset-4">help desk</Link>.</>} />
          <FaqList faqs={page.faqs} />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line/70 bg-surface-2 py-20">
          <Container>
            <SectionHeading eyebrow="Keep exploring" title="Related tools and ideas" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="group overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-shadow hover:shadow-lift">
                  <Photo image={r.heroImage} className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 280px, 50vw" />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">{r.eyebrow}</p>
                    <p className="mt-1.5 font-display text-lg leading-snug text-ink">{r.navLabel}</p>
                    {r.status === "coming-soon" && <Badge tone="accent" className="mt-2">Coming soon</Badge>}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        primary={soon ? { label: "Try a live tool", href: "/ai-features" } : { label: page.primaryCta.label, href: page.primaryCta.href }}
      />
    </>
  );
}
