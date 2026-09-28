import { changelog } from "@/content/pages/changelog";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ChangeList } from "@/components/content/ChangeList";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Changelog",
  description: "What's new in Roomwright each month: new tools, improvements and fixes to the AI home design studio and API.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-12 pt-10">
          <Breadcrumbs items={[{ label: "Changelog", href: "/changelog" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Changelog</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">What&apos;s new</h1>
            <p className="mt-5 text-lg text-ink-2">A running summary of what we ship. For versioned details, see the release notes.</p>
          </div>
        </Container>
      </section>
      <Container className="max-w-4xl py-14">
        <ol className="relative border-l border-line pl-8">
          {changelog.map((entry) => (
            <li key={entry.date + entry.title} className="mb-14">
              <span className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-bg bg-brand" aria-hidden />
              <time dateTime={entry.date} className="text-sm font-medium text-accent-strong">
                {new Date(entry.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}
              </time>
              <h2 className="mt-1 text-3xl text-ink">{entry.title}</h2>
              <p className="mt-3 text-lg text-ink-2">{entry.summary}</p>
              <ChangeList items={entry.items} />
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
