import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { FaqList } from "@/components/content/Faq";
import { CtaBand } from "@/components/content/CtaBand";
import { PricingTable } from "@/components/site/PricingTable";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description: "Roomwright is free during the public beta: every live tool, 20 renders a day, no card. See the Pro, Studio and Enterprise plans launching soon.",
  path: "/pricing",
});

const FAQS = [
  { q: "Is it really free right now?", a: "Yes. During the public beta every account gets the Free plan with all live tools and 20 renders a day. There's no card to enter and nothing to cancel." },
  { q: "What happens when paid plans launch?", a: "The Free plan continues with a daily allowance. Pro, Studio and Enterprise add higher limits and features for heavier and professional use. We'll give notice before anything changes, and you'll never be moved to a paid plan without choosing it." },
  { q: "Do failed renders count against my allowance?", a: "No. Only renders that finish count. If something goes wrong, try again at no cost to your allowance." },
  { q: "Can I use designs commercially during the beta?", a: "Yes, within our [terms](/terms). If you use virtually staged or edited photos in a listing, label them as required by your MLS and local rules." },
  { q: "Do you offer refunds?", a: "There's nothing to refund during the free beta. Our [refund policy](/refund-policy) explains how refunds will work for paid plans." },
  { q: "We need volume, an API or a white-label widget.", a: "Talk to us through the [enterprise page](/enterprise). API keys are already available in every account during the beta; see the [API docs](/docs/api)." },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-16 pt-10">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
          <SectionHeading
            as="h1"
            className="mt-8"
            eyebrow="Pricing"
            title="Free while we're in beta"
            subtitle={
              <>
                Every live tool, 20 renders a day, no card. Paid plans are shown so you can plan ahead. Questions? <Link href="/help#contact" className="text-brand underline underline-offset-4">Ask us</Link>.
              </>
            }
          />
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" />
          <FaqList faqs={FAQS} />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
