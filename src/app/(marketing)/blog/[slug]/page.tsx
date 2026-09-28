import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/content/registry";
import { Badge, Container } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import { Blocks } from "@/components/content/Blocks";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/content/CtaBand";
import { pageMetadata } from "@/lib/seo";
import { BRAND, absoluteUrl } from "@/lib/brand";
import { IMAGES } from "@/content/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? pageMetadata({ title: post.title, description: post.metaDescription, path: `/blog/${slug}`, image: post.heroImage }) : {};
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const date = new Date(post.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <>
      <article>
        <Container className="max-w-4xl pb-6 pt-10">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
          <Badge tone="brand" className="mt-8">
            {post.category}
          </Badge>
          <h1 className="mt-4 text-4xl leading-[1.08] text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          <p className="mt-4 text-sm text-muted">
            <time dateTime={post.date}>{date}</time> · {post.readingMinutes} min read
          </p>
        </Container>
        <Container className="max-w-5xl">
          <div className="overflow-hidden rounded-[1.75rem] border border-line">
            <Photo image={post.heroImage} eager className="aspect-[16/8]" sizes="(min-width: 1024px) 1000px, 100vw" />
          </div>
        </Container>
        <Container className="max-w-3xl py-12">
          <Blocks blocks={post.body} />
        </Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.metaDescription,
              datePublished: post.date,
              image: absoluteUrl(IMAGES[post.heroImage].src),
              publisher: { "@type": "Organization", name: BRAND.name },
              mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            }).replace(/</g, "\\u003c"),
          }}
        />
      </article>
      {more.length > 0 && (
        <section className="border-t border-line/70 bg-surface-2 py-16">
          <Container>
            <h2 className="text-2xl text-ink">Keep reading</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {more.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-[1.25rem] border border-line bg-surface hover:shadow-lift">
                  <Photo image={p.heroImage} className="aspect-[16/10]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <p className="p-5 font-display text-lg leading-snug text-ink">{p.title}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      <CtaBand />
    </>
  );
}
