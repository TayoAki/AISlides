"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { PLANS } from "@/content/plans";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export function PricingTable() {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-line bg-surface p-1">
        {[
          { v: false, l: "Monthly" },
          { v: true, l: "Yearly" },
        ].map((o) => (
          <button
            key={o.l}
            type="button"
            aria-pressed={yearly === o.v}
            onClick={() => setYearly(o.v)}
            className={cn("rounded-full px-4 py-1.5 text-sm font-medium transition", yearly === o.v ? "bg-brand text-brand-ink" : "text-muted hover:text-ink")}
          >
            {o.l}
            {o.v && <span className={cn("ml-1.5 text-xs", yearly ? "text-brand-ink/80" : "text-accent-strong")}>save ~20%</span>}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan) => {
          const price = yearly ? plan.priceYearly : plan.priceMonthly;
          const live = plan.id === "free";
          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-[1.5rem] border bg-surface p-6 shadow-soft",
                plan.highlight ? "border-brand ring-1 ring-brand" : "border-line",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-2xl text-ink">{plan.name}</h3>
                {live ? (
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-strong">Available now</span>
                ) : (
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-strong">Launching soon</span>
                )}
              </div>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{plan.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                {price === null ? (
                  <span className="font-display text-4xl text-ink">Custom</span>
                ) : (
                  <>
                    <span className="font-display text-5xl text-ink">${price}</span>
                    <span className="text-sm text-muted">/ month{yearly && price > 0 ? ", billed yearly" : ""}</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-ink-2">{plan.renders}</p>
              <Link href={plan.cta.href} className={cn(buttonClass(plan.highlight ? "primary" : "secondary", "md"), "mt-6 w-full")}>
                {plan.cta.label}
              </Link>
              <ul className="mt-6 grid gap-2.5 border-t border-line pt-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
        During the beta, every account gets the Free plan with all live tools, and nothing is charged. Paid plans are shown so you can plan ahead; they&apos;ll launch soon.
      </p>
    </div>
  );
}
