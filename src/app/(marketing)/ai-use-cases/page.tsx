import { HubTemplate } from "@/components/templates/HubTemplate";
import { getLanding } from "@/content/registry";
import type { LandingPage } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI home design use cases",
  description: "See how people use Roomwright to redesign rooms, facades and gardens, stage listings, preview remodels and present finishes to clients.",
  path: "/ai-use-cases",
  image: "living-modern",
});

const pick = (slugs: string[]) => slugs.map((s) => getLanding(s)).filter((p): p is LandingPage => Boolean(p));

export default function UseCasesHub() {
  return (
    <HubTemplate
      crumb={{ label: "Use cases", href: "/ai-use-cases" }}
      eyebrow="Use cases"
      title="One studio for every room, facade and garden"
      intro="Whether you're picking a paint color for one wall or planning a whole-house refresh, start from a photo of the real space and explore ideas before you spend a dollar."
      groups={[
        {
          title: "Whole spaces",
          text: "Restyle a complete room, the outside of a house, or the yard.",
          pages: pick(["interior-design-ai", "room-design-ai", "living-room-design-ai", "kitchen-design-ai", "bathroom-design-ai", "exterior-ai", "landscaping-ai"]),
        },
        {
          title: "Surfaces and targeted changes",
          text: "Change one thing and keep the rest: cabinets, walls, floors, counters or a single piece of furniture.",
          pages: pick(["cabinet-design-ai", "wall-ai", "flooring-ai", "countertop-ai", "furniture-replacement-ai", "partial-remodel-ai"]),
        },
        {
          title: "Real estate",
          text: "Help buyers picture a home, with clear disclosure of any virtual staging.",
          pages: pick(["real-estate-ai", "virtual-staging-ai"]),
        },
        {
          title: "For professionals",
          pages: pick(["for/realtors", "for/renovators", "for/interior-designers", "for/architects", "for/contractors", "for/builders"]),
        },
      ]}
    />
  );
}
