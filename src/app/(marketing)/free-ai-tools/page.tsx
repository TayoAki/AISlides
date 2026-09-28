import { HubTemplate } from "@/components/templates/HubTemplate";
import { landingsOfKind } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free AI home design tools",
  description: "Try AI interior design, exterior design, landscape design and virtual staging free during the Roomwright beta. Create a free account and start from a photo.",
  path: "/free-ai-tools",
  image: "garden-backyard",
});

export default function FreeToolsHub() {
  return (
    <HubTemplate
      crumb={{ label: "Free AI tools", href: "/free-ai-tools" }}
      eyebrow="Free AI tools"
      title="Free AI design tools for your home"
      intro="During the public beta every tool is free with a Roomwright account, up to 20 renders a day. Sign-up takes seconds and there's no card to enter."
      groups={[{ title: "Pick a tool to try", pages: landingsOfKind("free-tool") }]}
    />
  );
}
