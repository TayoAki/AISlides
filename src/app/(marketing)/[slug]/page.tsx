import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { DocTemplate } from "@/components/templates/DocTemplate";
import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import { getDoc, getLanding, getProgram, TOP_LEVEL_SLUGS } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOP_LEVEL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (landing) return pageMetadata({ title: landing.metaTitle, description: landing.metaDescription, path: `/${slug}`, image: landing.heroImage });
  const program = getProgram(slug);
  if (program) return pageMetadata({ title: program.metaTitle, description: program.metaDescription, path: `/${slug}`, image: program.heroImage });
  const doc = getDoc(slug);
  if (doc) return pageMetadata({ title: doc.metaTitle, description: doc.metaDescription, path: `/${slug}` });
  return {};
}

export default async function TopLevelPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (landing) return <LandingTemplate page={landing} />;
  const program = getProgram(slug);
  if (program) return <ProgramTemplate page={program} badge={slug === "white-label-widget" ? "Early access" : undefined} />;
  const doc = getDoc(slug);
  if (doc) return <DocTemplate page={doc} />;
  notFound();
}
