import type { Metadata } from "next";
import { CtaBand } from "@/components/content/CtaBand";
import {
  FaqSection, HomeHero, HowItWorks, IdeasSection, PricingSection, ProsSection, RealSpaceSection, ShowcaseSection, SpacesSection, ToolsSection,
} from "@/components/site/home/HomeSections";
import { BRAND, absoluteUrl } from "@/lib/brand";

export const metadata: Metadata = {
  title: { absolute: `${BRAND.name} — AI design for interiors, exteriors and gardens` },
  description:
    "Upload a photo of a room, facade or garden and see it redesigned in seconds. Restyle, stage, repaint and swap materials while your layout stays put. Free during beta.",
  alternates: { canonical: "/" },
};

const FAQS = [
  {
    q: "Will the result still look like my room?",
    a: "Yes. Roomwright works from your actual photo and is instructed to keep the walls, windows, doors, proportions and camera angle. What changes is the design: furniture, finishes, color, decor and light. You also choose how bold the change should be.",
  },
  {
    q: "What does it cost?",
    a: "Nothing during the public beta. Every account gets all live tools with 20 renders a day. Paid plans are listed on the [pricing page](/pricing) and will launch soon.",
  },
  {
    q: "What kind of photo works best?",
    a: "A bright, straight-on photo taken from a corner or doorway at chest height, with the whole space in frame. Avoid heavy wide-angle distortion and very dark shots. Our [photo guide](/blog) walks through it.",
  },
  {
    q: "Can I use Roomwright for real estate listings?",
    a: "Many agents use virtual staging to help buyers picture a space. Check your MLS and local rules: most require you to label virtually staged or edited photos, and edits must never hide defects.",
  },
  {
    q: "Are the renders construction plans?",
    a: "No. They're photoreal visual concepts for exploring ideas and communicating them. Dimensions, structure, permits and code questions still belong with a qualified professional.",
  },
  {
    q: "Who owns the images I create?",
    a: "You keep the rights to the photos you upload, and you can download and use your results. See the [terms](/terms) for the details, including the rules about photos of other people.",
  },
  {
    q: "Is there an API?",
    a: "Yes. Create a key in your account settings and follow the [API documentation](/docs/api). API renders use the same daily allowance during the beta.",
  },
  {
    q: "Can I delete my photos?",
    a: "Anytime. Delete individual designs from your studio, or delete your whole account from Account settings, which removes your designs and uploads.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HowItWorks />
      <ShowcaseSection />
      <ToolsSection />
      <SpacesSection />
      <RealSpaceSection />
      <ProsSection />
      <IdeasSection />
      <PricingSection />
      <FaqSection faqs={FAQS} />
      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: BRAND.name,
            applicationCategory: "DesignApplication",
            operatingSystem: "Web",
            url: absoluteUrl("/"),
            description: BRAND.description,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free during public beta" },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
