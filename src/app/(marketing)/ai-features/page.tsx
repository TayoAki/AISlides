import { HubTemplate } from "@/components/templates/HubTemplate";
import { getLanding } from "@/content/registry";
import type { LandingPage } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI home design features",
  description: "Every Roomwright tool in one place: redesign, virtual staging, paint, material swap, sky replacement, sketch to render, precision edits and more.",
  path: "/ai-features",
  image: "living-japandi",
});

const pick = (slugs: string[]) => slugs.map((s) => getLanding(s)).filter((p): p is LandingPage => Boolean(p));

export default function FeaturesHub() {
  return (
    <HubTemplate
      crumb={{ label: "Features", href: "/ai-features" }}
      eyebrow="Features"
      title="Every tool you need to reimagine a space"
      intro="Start with a full redesign or go straight to the detail you care about. Every live tool works from your own photo and is free during the beta."
      groups={[
        {
          title: "Transform a space",
          pages: pick(["features/redesign", "features/fill-spaces", "features/decor-staging", "features/furniture-removal", "features/design-transfer"]),
        },
        {
          title: "Change the details",
          pages: pick(["features/paint-visualizer", "features/colors-textures", "features/material-swap", "features/sky-colors", "features/precision-edit", "features/room-composer"]),
        },
        {
          title: "Create from scratch",
          pages: pick(["features/sketch-to-render", "features/text-to-design", "features/furniture-creator"]),
        },
        {
          title: "Coming soon",
          text: "In development now. Join early access on any of these pages and we'll let you know when they're ready.",
          pages: pick(["features/furniture-finder", "features/design-critique", "features/design-advisor", "features/smart-home"]),
        },
      ]}
    />
  );
}
