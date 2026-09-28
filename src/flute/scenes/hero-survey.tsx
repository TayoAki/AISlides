"use client";
import { Surface } from "@webprodigies/flute";
import { Header } from "@/components/site/Header";
import { HomeHero } from "@/components/site/home/HomeSections";

/** The live landing hero as one monumental surface. */
export default function HeroSurvey() {
  return (
    <Surface id="landing" style={{ width: 1920, height: 1080 }}>
      <div className="overflow-hidden bg-bg" style={{ height: 1080 }}>
        <Header />
        <HomeHero />
      </div>
    </Surface>
  );
}
