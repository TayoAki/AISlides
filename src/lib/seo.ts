import type { Metadata } from "next";
import { IMAGES } from "@/content/images";
import type { ImageKey } from "@/content/types";

export function pageMetadata({
  title,
  description,
  path,
  image,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: ImageKey;
  noindex?: boolean;
}): Metadata {
  const og = image ? [{ url: IMAGES[image].src, width: IMAGES[image].width, height: IMAGES[image].height, alt: IMAGES[image].alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: og },
    twitter: { title, description, images: og?.map((o) => o.url) },
    robots: noindex ? { index: false } : undefined,
  };
}
