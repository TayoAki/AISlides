"use client";
import { Surface } from "@webprodigies/flute";
import { Header } from "@/components/site/Header";
import { HomeHero } from "@/components/site/home/HomeSections";

/** The live landing hero as one monumental surface. */
export default function HeroSurvey() {
  return (
    <Surface id="landing" style={{ width: 1440, height: 900 }}>
      <div className="h-full overflow-hidden bg-bg">
        <Header />
        <HomeHero />
      </div>
    </Surface>
  );
}
