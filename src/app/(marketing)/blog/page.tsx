import Link from "next/link";
import { BLOG_POSTS } from "@/content/registry";
import { Badge, Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/content/CtaBand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: home design guides and ideas",
  description: "Practical guides from Roomwright: photographing rooms for AI, virtual staging done right, choosing paint colors, and interior styles explained.",
  path: "/blog",
});

const fmt = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default function BlogIndex() {
  const [lead, ...rest] = BLOG_POSTS;
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-12 pt-10">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">Guides for better rooms, listings and renovations</h1>
          </div>
        </Container>
      </section>
      <Container className="py-14">
        {lead && (
          <Link href={`/blog/${lead.slug}`} className="group grid overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-soft lg:grid-cols-2">
            <div className="overflow-hidden">
              <Photo image={lead.heroImage} eager className="aspect-[16/10] h-full transition-transform duration-500 group-hover:scale-[1.02]" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <Badge tone="brand" className="w-fit">{lead.category}</Badge>
              <h2 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">{lead.title}</h2>
              <p className="mt-3 text-lg text-muted">{lead.excerpt}</p>
              <p className="mt-5 text-sm text-muted">
                {fmt(lead.date)} · {lead.readingMinutes} min read
              </p>
            </div>
          </Link>
        )}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface transition hover:shadow-lift">
              <Photo image={p.heroImage} className="aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.03]" sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="flex flex-1 flex-col p-6">
                <Badge className="w-fit">{p.category}</Badge>
                <h2 className="mt-3 text-xl leading-snug text-ink">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{p.excerpt}</p>
                <p className="mt-auto pt-4 text-xs text-muted">
                  {fmt(p.date)} · {p.readingMinutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
