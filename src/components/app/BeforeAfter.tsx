"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/cn";

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  initial = 50,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initial?: number;
}) {
  const [pos, setPos] = useState(initial);
  return (
    <div className={cn("relative select-none overflow-hidden rounded-[1.25rem] bg-surface-2", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={afterLabel} className="block w-full" draggable={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.12)]" />
        <div className="absolute top-1/2 -ml-5 -mt-5 flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-lift">
          <MoveHorizontal className="size-5" />
        </div>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">{beforeLabel}</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">{afterLabel}</span>
      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
