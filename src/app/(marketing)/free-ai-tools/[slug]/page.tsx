import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { getLanding, landingsOfKind } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingsOfKind("free-tool").map((p) => ({ slug: p.slug.replace(/^free-ai-tools\//, "") }));
}

export async function generateMetadata({ params }: PageProps<"/free-ai-tools/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`free-ai-tools/${slug}`);
  return page ? pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/free-ai-tools/${slug}`, image: page.heroImage }) : {};
}

export default async function FreeToolPage({ params }: PageProps<"/free-ai-tools/[slug]">) {
  const { slug } = await params;
  const page = getLanding(`free-ai-tools/${slug}`);
  if (!page) notFound();
  return <LandingTemplate page={page} />;
}
