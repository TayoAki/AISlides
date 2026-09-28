import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { getLanding, landingsOfKind } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingsOfKind("feature").map((p) => ({ slug: p.slug.replace(/^features\//, "") }));
}

export async function generateMetadata({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`features/${slug}`);
  return page ? pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/features/${slug}`, image: page.heroImage }) : {};
}

export default async function FeaturePage({ params }: PageProps<"/features/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`features/${slug}`);
  if (!page) notFound();
  return <LandingTemplate page={page} />;
}
