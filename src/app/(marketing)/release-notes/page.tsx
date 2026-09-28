import { releaseNotes } from "@/content/pages/changelog";
import { Badge, Container, Eyebrow } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ChangeList } from "@/components/content/ChangeList";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Release notes",
  description: "Versioned Roomwright release notes with every new feature, improvement and fix in the AI home design studio and public API.",
  path: "/release-notes",
});

export default function ReleaseNotesPage() {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-12 pt-10">
          <Breadcrumbs items={[{ label: "Release Notes", href: "/release-notes" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Release notes</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">Release notes</h1>
          </div>
        </Container>
      </section>
      <Container className="flex max-w-4xl flex-col gap-8 py-14">
        {releaseNotes.map((r) => (
          <article key={r.version} className="rounded-[1.5rem] border border-line bg-surface p-7 shadow-soft">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-mono text-2xl text-ink">v{r.version}</h2>
              <Badge tone="brand">Latest</Badge>
              <time dateTime={r.date} className="text-sm text-muted">
                {new Date(r.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
            </div>
            <ul className="mt-5 grid gap-2 text-ink-2">
              {r.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
            <ChangeList items={r.changes} />
          </article>
        ))}
      </Container>
    </>
  );
}
