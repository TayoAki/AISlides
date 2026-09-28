import type { DocPage } from "@/content/types";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Blocks, slugifyHeading } from "@/components/content/Blocks";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/content/CtaBand";

const LEGAL = new Set(["terms", "privacy", "refund-policy"]);

export function DocTemplate({ page }: { page: DocPage }) {
  const legal = LEGAL.has(page.slug);
  const toc = page.blocks.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-14 pt-10">
          <Breadcrumbs items={[{ label: legal ? "Legal" : "Company", href: legal ? "/terms" : "/about" }, { label: page.navLabel, href: `/${page.slug}` }]} />
          <div className="mt-8 max-w-3xl">
            {page.eyebrow && <Eyebrow className="mb-3">{page.eyebrow}</Eyebrow>}
            <h1 className="text-4xl leading-[1.08] text-ink sm:text-5xl">{page.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-2">{page.intro}</p>
            {page.updated && (
              <p className="mt-4 text-sm text-muted">
                Last updated{" "}
                <time dateTime={page.updated}>
                  {new Date(page.updated + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </p>
            )}
          </div>
        </Container>
      </section>
      <Container className="grid gap-12 py-14 lg:grid-cols-[220px_minmax(0,1fr)]">
        {toc.length > 2 ? (
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">On this page</p>
              <ul className="flex flex-col gap-2 border-l border-line pl-4 text-sm">
                {toc.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugifyHeading(h.text)}`} className="text-muted hover:text-ink">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : (
          <div className="hidden lg:block" />
        )}
        <article className="max-w-3xl">
          <Blocks blocks={page.blocks} />
        </article>
      </Container>
      {!legal && <CtaBand />}
    </>
  );
}
