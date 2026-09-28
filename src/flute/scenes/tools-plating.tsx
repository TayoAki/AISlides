"use client";
import { Surface } from "@webprodigies/flute";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { ToolCard } from "@/components/site/home/HomeSections";
import { TOOL_IDS } from "@/lib/tools";

/** The toolkit section; each real tool card is its own surface so it can settle into place. */
export default function ToolsPlating() {
  return (
    <Surface
      id="toolkit"
      // The section paint sits on the group itself so the card surfaces render above it.
      style={{ width: 1440, height: 1010, background: "var(--surface-2)" }}
      content={
        <div style={{ width: 1440 }}>
          <Container className="pt-20">
            <div className="flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="The toolkit"
                title="Twelve tools. One studio."
                subtitle="Start broad with a full redesign, then get specific: paint, materials, staging, sky, precise edits and more."
              />
              <ButtonLink href="/ai-features" variant="secondary">
                All features
              </ButtonLink>
            </div>
          </Container>
        </div>
      }
    >
      <div className="absolute inset-x-0 top-[250px]" style={{ transformStyle: "preserve-3d" }}>
        <Container>
          <div className="grid grid-cols-4 gap-4" style={{ transformStyle: "preserve-3d" }}>
            {TOOL_IDS.map((id) => (
              <Surface key={id} id={`tool-${id}`}>
                <ToolCard tool={id} />
              </Surface>
            ))}
          </div>
        </Container>
      </div>
    </Surface>
  );
}
