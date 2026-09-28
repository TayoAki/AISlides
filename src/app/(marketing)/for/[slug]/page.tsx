import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { getLanding, landingsOfKind } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingsOfKind("audience").map((p) => ({ slug: p.slug.replace(/^for\//, "") }));
}

export async function generateMetadata({ params }: PageProps<"/for/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`for/${slug}`);
  return page ? pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/for/${slug}`, image: page.heroImage }) : {};
}

export default async function AudiencePage({ params }: PageProps<"/for/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`for/${slug}`);
  if (!page) notFound();
  return <LandingTemplate page={page} />;
}
