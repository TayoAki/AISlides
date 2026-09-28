import Link from "next/link";
import { absoluteUrl } from "@/lib/brand";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-ink-2">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.label, item: absoluteUrl(t.href) })),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </nav>
  );
}
