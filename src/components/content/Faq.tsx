import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/types";
import { InlineText } from "./Blocks";

const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function FaqList({ faqs, jsonLd = true }: { faqs: Faq[]; jsonLd?: boolean }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {faqs.map((f, i) => (
        <details key={i} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-5 py-4 text-left text-[1.02rem] font-medium text-ink sm:px-6">
            {f.q}
            <ChevronDown className="mt-1 size-4 shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <div className="px-5 pb-5 text-[0.98rem] leading-relaxed text-ink-2 sm:px-6">
            <InlineText text={f.a} />
          </div>
        </details>
      ))}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </div>
  );
}
