import { Sparkles, WandSparkles } from "lucide-react";
import { Photo } from "@/components/content/Photo";
import type { ImageKey } from "@/content/types";

const STYLE_SWATCHES: { label: string; image: ImageKey }[] = [
  { label: "Japandi", image: "living-japandi" },
  { label: "Coastal", image: "living-coastal" },
  { label: "Bohemian", image: "living-boho" },
  { label: "Classic", image: "living-classic" },
];

/** A static rendition of the studio: your photo on the left, the settings panel on the right. */
export function HeroStudio() {
  return (
    <div className="relative" data-hero-studio>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 text-xs text-muted">Roomwright studio</span>
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1.35fr_1fr]">
          <figure className="relative overflow-hidden rounded-2xl">
            <Photo image="living-dated" eager sizes="(min-width: 1024px) 380px, 90vw" className="aspect-[4/3] sm:aspect-[4/4.2]" />
            <figcaption className="absolute left-2.5 top-2.5 rounded-full bg-ink/75 px-2.5 py-1 text-[0.7rem] font-medium text-white backdrop-blur">Your photo</figcaption>
          </figure>
          <div className="flex flex-col gap-3.5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">Space</p>
              <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-full bg-bg p-1 text-center text-[0.72rem]">
                <span className="rounded-full bg-surface py-1 font-medium text-ink shadow-soft">Interior</span>
                <span className="py-1 text-muted">Exterior</span>
                <span className="py-1 text-muted">Garden</span>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">Tool</p>
              <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-brand bg-brand-soft/60 px-2.5 py-2 text-[0.78rem] text-ink">
                <WandSparkles className="size-4 text-brand" /> Redesign · Living room
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">Style</p>
              <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                {STYLE_SWATCHES.map((s, i) => (
                  <span
                    key={s.label}
                    className={`flex items-center gap-1.5 rounded-full border py-0.5 pl-0.5 pr-2.5 text-[0.72rem] ${i === 0 ? "border-brand bg-brand text-brand-ink" : "border-line text-ink-2"}`}
                  >
                    <span className="relative size-5 overflow-hidden rounded-full">
                      <Photo image={s.image} fill sizes="24px" />
                    </span>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto rounded-full bg-brand px-3 py-2.5 text-center text-[0.8rem] font-medium text-brand-ink shadow-soft">
              <Sparkles className="mr-1.5 inline size-4" />
              Generate design
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-lift sm:block">
        <p className="text-xs text-muted">Keeps what matters</p>
        <p className="text-sm font-medium text-ink">Walls · windows · layout · camera</p>
      </div>
    </div>
  );
}
