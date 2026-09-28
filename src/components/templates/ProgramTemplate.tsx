import type { ReactNode } from "react";
import { ArrowDown, Check } from "lucide-react";
import type { ProgramPage } from "@/content/types";
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/content/Photo";
import { FaqList } from "@/components/content/Faq";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { InlineText } from "@/components/content/Blocks";
import { LeadForm } from "@/components/forms/LeadForm";
import { cn } from "@/lib/cn";

export function ProgramTemplate({ page, badge, extra }: { page: ProgramPage; badge?: string; extra?: ReactNode }) {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pb-24">
          <div>
            <Breadcrumbs items={[{ label: page.navLabel, href: `/${page.slug}` }]} />
            <div className="mt-8 flex items-center gap-3">
              <Eyebrow>{page.eyebrow}</Eyebrow>
              {badge && <Badge tone="accent">{badge}</Badge>}
            </div>
            <h1 className="mt-4 text-4xl leading-[1.05] text-ink sm:text-[3.3rem]">{page.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{page.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#contact" size="lg">
                {page.form.submitLabel}
                <ArrowDown className="size-4" />
              </ButtonLink>
              {page.slug === "api" && (
                <ButtonLink href="/docs/api" variant="secondary" size="lg">
                  Read the docs
                </ButtonLink>
              )}
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-line shadow-lift">
            <Photo image={page.heroImage} eager className="aspect-[4/3]" sizes="(min-width: 1024px) 560px, 100vw" />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((b) => (
              <div key={b.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-soft">
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

      {extra}

      <section className="border-y border-line/70 bg-surface-2 py-20">
        <Container>
          <SectionHeading eyebrow="How it works" title="Getting started" />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {page.steps.map((s, i) => (
              <li key={s.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
                <span className="font-display text-5xl leading-none text-accent/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col gap-16">
          {page.sections.map((s, i) => (
            <div key={s.title} className={cn("grid items-center gap-10 lg:grid-cols-2", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <div className="overflow-hidden rounded-[1.5rem] border border-line">
                <Photo image={s.image ?? page.heroImage} className="aspect-[5/4]" />
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

      <section id="contact" className="scroll-mt-24 pb-20">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-line bg-surface p-8 shadow-soft sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{page.form.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">{page.form.text}</p>
            </div>
            <LeadForm
              kind={page.slug}
              submitLabel={page.form.submitLabel}
              successText={page.form.successText}
              askCompany={page.form.askCompany}
              askWebsite={page.form.askWebsite}
              messageLabel={page.form.messageLabel}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Good to know" />
          <FaqList faqs={page.faqs} />
        </Container>
      </section>
    </>
  );
}
