import { ProgramTemplate } from "@/components/templates/ProgramTemplate";
import { getProgram } from "@/content/registry";
import { Container } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/brand";

const page = getProgram("api")!;

export const metadata = pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: "/api", image: page.heroImage });

const SAMPLE = `curl -X POST ${absoluteUrl("/api/v1/renders")} \\
  -H "Authorization: Bearer $ROOMWRIGHT_API_KEY" \\
  -F tool=redesign -F space=interior \\
  -F room_type="Living room" -F style=Japandi \\
  -F image=@living-room.jpg

# → 202 { "id": "r_…", "status": "queued", … }

curl ${absoluteUrl("/api/v1/renders/r_…")} \\
  -H "Authorization: Bearer $ROOMWRIGHT_API_KEY"

# → { "status": "succeeded", "output_urls": ["…/outputs/1"] }`;

export default function ApiPage() {
  return (
    <ProgramTemplate
      page={page}
      extra={
        <section className="pb-20">
          <Container>
            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-[#101614] shadow-lift">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-xs text-white/50">Create a render, then poll for the result</span>
              </div>
              <pre className="overflow-x-auto p-5 text-[0.85rem] leading-relaxed text-[#e6e1d6]">
                <code>{SAMPLE}</code>
              </pre>
            </div>
          </Container>
        </section>
      }
    />
  );
}
