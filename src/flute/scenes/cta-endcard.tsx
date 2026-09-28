"use client";
import { Surface } from "@webprodigies/flute";
import { CtaBand } from "@/components/content/CtaBand";
import { Logo } from "@/components/site/Logo";

/** Closing card for promos: the site's real call-to-action band under the logo. */
export default function CtaEndcard() {
  return (
    <Surface id="cta" style={{ width: 1440, height: 640 }}>
      <div className="h-full bg-bg pt-10">
        <div className="mx-auto w-full max-w-7xl px-8">
          <Logo />
        </div>
        <CtaBand />
      </div>
    </Surface>
  );
}
