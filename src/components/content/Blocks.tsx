import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import type { Block } from "@/content/types";
import { Photo } from "./Photo";
import { ButtonLink } from "@/components/ui/primitives";

/** Renders **bold** and [label](href) inside a plain string. */
export function InlineText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(pattern)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={key++}>{m[1]}</strong>);
    else {
      const href = m[3];
      out.push(
        href.startsWith("/") || href.startsWith("#") ? (
          <Link key={key++} href={href}>
            {m[2]}
          </Link>
        ) : (
          <a key={key++} href={href} rel="noopener noreferrer" target="_blank">
            {m[2]}
          </a>
        ),
      );
    }
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export function slugifyHeading(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-rw">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <InlineText text={b.text} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={slugifyHeading(b.text)} className="scroll-mt-24">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={slugifyHeading(b.text)} className="scroll-mt-24">
                {b.text}
              </h3>
            );
          case "ul":
          case "ol": {
            const List = b.type;
            return (
              <List key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <InlineText text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <blockquote key={i}>
                <InlineText text={b.text} />
              </blockquote>
            );
          case "callout":
            return (
              <aside key={i} className="my-6 rounded-2xl border border-brand/20 bg-brand-soft/50 px-5 py-4 text-[0.98rem]">
                <p className="mb-1 font-semibold text-ink">{b.title}</p>
                <p className="m-0">
                  <InlineText text={b.text} />
                </p>
              </aside>
            );
          case "image":
            return (
              <figure key={i} className="my-8">
                <Photo image={b.image} className="rounded-2xl" sizes="(min-width: 768px) 720px, 100vw" />
                {b.caption && <figcaption className="mt-2 text-sm text-muted">{b.caption}</figcaption>}
              </figure>
            );
          case "cta":
            return (
              <div key={i} className="not-prose my-10 rounded-3xl bg-brand px-6 py-7 text-brand-ink sm:px-8">
                <p className="font-display text-2xl leading-tight">{b.title}</p>
                <p className="mt-2 opacity-85">{b.text}</p>
                <ButtonLink href={b.cta.href} variant="inverse" className="mt-5">
                  {b.cta.label}
                </ButtonLink>
              </div>
            );
          default:
            return <Fragment key={i} />;
        }
      })}
    </div>
  );
}
