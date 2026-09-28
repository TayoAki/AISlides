"use client";
import { Surface } from "@webprodigies/flute";
import { PricingSection } from "@/components/site/home/HomeSections";

/** The live pricing section, surveyed from free to enterprise. */
export default function PricingSurvey() {
  return (
    <Surface id="pricing" style={{ width: 1920, height: 1080 }}>
      <div className="overflow-hidden bg-bg" style={{ height: 1080 }}>
        <PricingSection />
      </div>
    </Surface>
  );
}
