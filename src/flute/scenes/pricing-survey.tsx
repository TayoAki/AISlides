"use client";
import { Surface } from "@webprodigies/flute";
import { PricingSection } from "@/components/site/home/HomeSections";

/** The live pricing section, surveyed from free to enterprise. */
export default function PricingSurvey() {
  return (
    <Surface id="pricing" style={{ width: 1440, height: 1060 }}>
      <div className="h-full overflow-hidden bg-bg">
        <PricingSection />
      </div>
    </Surface>
  );
}
