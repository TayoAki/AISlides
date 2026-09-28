import type { MetadataRoute } from "next";
import { FOOTER_GROUPS } from "@/content/nav";
import { BLOG_POSTS } from "@/content/registry";
import { absoluteUrl } from "@/lib/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>();
  for (const group of FOOTER_GROUPS) for (const link of group.links) if (!link.href.endsWith(".xml")) paths.add(link.href);
  for (const post of BLOG_POSTS) paths.add(`/blog/${post.slug}`);
  paths.add("/signup");
  const modified = new Date("2026-09-28T00:00:00Z");
  return [...paths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: modified,
    changeFrequency: path === "/" || path === "/blog" || path === "/changelog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
