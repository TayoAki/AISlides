import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LandingPage } from "@/content/types";
import { Badge, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/content/CtaBand";

export type HubGroup = { title: string; text?: string; pages: LandingPage[] };

export function HubTemplate({ crumb, eyebrow, title, intro, groups }: { crumb: { label: string; href: string }; eyebrow: string; title: string; intro: string; groups: HubGroup[] }) {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-14 pt-10">
          <Breadcrumbs items={[crumb]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">{title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">{intro}</p>
          </div>
        </Container>
      </section>
      <Container className="flex flex-col gap-16 py-16 sm:py-20">
        {groups
          .filter((g) => g.pages.length > 0)
          .map((g) => (
            <section key={g.title}>
              <h2 className="text-2xl text-ink sm:text-3xl">{g.title}</h2>
              {g.text && <p className="mt-2 max-w-2xl text-muted">{g.text}</p>}
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.pages.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-shadow hover:shadow-lift">
                    <div className="overflow-hidden">
                      <Photo image={p.heroImage} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">{p.eyebrow}</p>
                        {p.status === "coming-soon" && <Badge tone="accent">Soon</Badge>}
                      </div>
                      <h3 className="mt-2 text-xl leading-snug text-ink">{p.navLabel}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{p.subtitle}</p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-brand">
                        Learn more <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
      </Container>
      <CtaBand />
    </>
  );
}
