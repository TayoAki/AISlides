import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { IDEA_PAGES, getIdea } from "@/content/registry";
import { Badge, ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import { FaqList } from "@/components/content/Faq";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/content/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return IDEA_PAGES.map((p) => ({ slug: p.slug.replace("ideas/", "") }));
}

export async function generateMetadata({ params }: PageProps<"/ideas/[slug]">) {
  const { slug } = await params;
  const page = getIdea(`ideas/${slug}`);
  return page ? pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/ideas/${slug}`, image: page.ideas[0]?.image }) : {};
}

const SPACE: Record<string, "interior" | "exterior" | "garden"> = { interior: "interior", exterior: "exterior", garden: "garden" };

export default async function IdeasPage({ params }: PageProps<"/ideas/[slug]">) {
  const { slug } = await params;
  const page = getIdea(`ideas/${slug}`);
  if (!page) notFound();
  const space = SPACE[slug] ?? "interior";
  const others = IDEA_PAGES.filter((p) => p.slug !== page.slug);
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-14 pt-10">
          <Breadcrumbs items={[{ label: "Inspiration", href: "/ideas/interior" }, { label: page.navLabel, href: `/${page.slug}` }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">{page.title}</h1>
            {page.intro.map((p, i) => (
              <p key={i} className="mt-5 text-lg leading-relaxed text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <ol className="grid gap-8 md:grid-cols-2">
          {page.ideas.map((idea, i) => {
            const href = `/app/new?${new URLSearchParams({ tool: "redesign", space, prompt: idea.tryPrompt })}`;
            return (
              <li key={idea.title} id={`idea-${i + 1}`} className="flex flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-soft">
                <Photo image={idea.image} className="aspect-[16/10]" sizes="(min-width: 768px) 600px, 100vw" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-sm text-accent-strong">Idea {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-1 text-2xl leading-snug text-ink">{idea.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-2">{idea.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {idea.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <div className="rounded-xl bg-bg p-3.5 text-sm text-ink-2">
                      <span className="font-medium text-ink">Try this prompt: </span>
                      {idea.tryPrompt}
                    </div>
                    <ButtonLink href={href} size="sm" className="mt-4">
                      Try it on my photo <ArrowRight className="size-4" />
                    </ButtonLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-10 text-sm text-muted">Photos show real spaces for inspiration. Your results depend on your own photo and settings.</p>
      </Container>

      <section className="border-t border-line/70 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <FaqList faqs={page.faqs} />
        </Container>
      </section>

      <section className="border-t border-line/70 bg-surface-2 py-16">
        <Container>
          <h2 className="text-2xl text-ink">More inspiration</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}`} className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-3 hover:shadow-lift">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Photo image={o.ideas[0].image} fill sizes="80px" />
                </div>
                <span className="font-display text-xl text-ink">{o.navLabel}</span>
                <ArrowRight className="ml-auto mr-2 size-4 text-brand transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
