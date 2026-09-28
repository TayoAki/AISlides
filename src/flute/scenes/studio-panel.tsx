"use client";
import { Surface } from "@webprodigies/flute";
import { AppNav } from "@/components/app/AppNav";
import { Studio, type Sample } from "@/components/app/Studio";
import { IMAGES } from "@/content/images";

const SAMPLES: Sample[] = (["living-dated", "kitchen-dated", "empty-room", "bedroom-warm"] as const).map((key) => ({
  key,
  src: IMAGES[key].srcSm,
  alt: IMAGES[key].alt,
  space: "interior",
  label: key === "living-dated" ? "Living room" : key === "kitchen-dated" ? "Kitchen" : key === "empty-room" ? "Empty room" : "Bedroom",
}));

/** The real studio: photo on the left, settings panel on the right. */
export default function StudioPanel() {
  return (
    <Surface id="studio" style={{ width: 1440, height: 1040 }}>
      <div className="h-full overflow-hidden bg-bg">
        <AppNav email="you@example.com" usage={{ used: 3, limit: 20 }} admin={false} />
        <div className="mx-auto w-full max-w-7xl px-8 py-8">
          <h1 className="mb-8 text-4xl text-ink">New design</h1>
          <Studio
            initial={{
              tool: "redesign",
              space: "interior",
              roomType: "Living room",
              style: "Japandi",
              sample: { key: "living-dated", url: IMAGES["living-dated"].src, name: "Living room" },
            }}
            samples={SAMPLES}
            usage={{ used: 3, limit: 20, remaining: 17 }}
            demo={false}
          />
        </div>
      </div>
    </Surface>
  );
}
