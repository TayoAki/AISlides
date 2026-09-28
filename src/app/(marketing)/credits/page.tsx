import { IMAGES } from "@/content/images";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/content/Photo";
import type { ImageKey } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo credits",
  description: "Credits and licenses for the photographs used on the Roomwright website.",
  path: "/credits",
});

const LICENSE_URL: Record<string, string> = {
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC0 1.0": "https://creativecommons.org/publicdomain/zero/1.0/",
  "Public Domain Mark 1.0": "https://creativecommons.org/publicdomain/mark/1.0/",
  "Unsplash License": "https://unsplash.com/license",
};

export default function CreditsPage() {
  const entries = Object.entries(IMAGES) as [ImageKey, (typeof IMAGES)[ImageKey]][];
  return (
    <Container className="py-14">
      <Eyebrow>Credits</Eyebrow>
      <h1 className="mt-3 text-4xl text-ink sm:text-5xl">Photo credits</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        The images on this site are a mix of photographs and photoreal 3D renderings used for illustration and inspiration. They are used under the licenses below and have been resized or cropped for the web. None of them are outputs of Roomwright.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([key, img]) => (
          <li key={key} className="flex gap-3 rounded-2xl border border-line bg-surface p-3">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
              <Photo image={key} fill sizes="80px" />
            </div>
            <div className="min-w-0 text-sm">
              <p className="line-clamp-2 text-ink">{img.alt}</p>
              <p className="mt-1 text-muted">
                {img.credit.author ? `${img.credit.author} · ` : ""}
                <a href={img.credit.url} rel="noopener noreferrer" target="_blank" className="underline underline-offset-2">
                  {img.credit.source || "Source"}
                </a>
                {" · "}
                {LICENSE_URL[img.credit.license] ? (
                  <a href={LICENSE_URL[img.credit.license]} rel="noopener noreferrer license" target="_blank" className="underline underline-offset-2">
                    {img.credit.license}
                  </a>
                ) : (
                  img.credit.license
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
