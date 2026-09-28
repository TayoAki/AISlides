import { Studio, type Sample } from "@/components/app/Studio";
import { requireUser } from "@/lib/server/auth";
import { getRender, usageFor } from "@/lib/server/renders";
import { providerStatus } from "@/lib/server/ai";
import { IMAGES } from "@/content/images";
import type { ImageKey } from "@/content/types";
import { ROOM_TYPES, SPACES, STYLES, TOOLS, TOOL_IDS, type SpaceKind, type ToolId } from "@/lib/tools";

const SAMPLE_KEYS: { key: ImageKey; space: Sample["space"]; label: string }[] = [
  { key: "living-dated", space: "interior", label: "Living room" },
  { key: "kitchen-dated", space: "interior", label: "Kitchen" },
  { key: "empty-room", space: "interior", label: "Empty room" },
  { key: "empty-room-2", space: "interior", label: "Empty room 2" },
  { key: "bedroom-warm", space: "interior", label: "Bedroom" },
  { key: "bath-modern", space: "interior", label: "Bathroom" },
  { key: "office-home", space: "interior", label: "Home office" },
  { key: "dining-modern", space: "interior", label: "Dining room" },
  { key: "exterior-brick", space: "exterior", label: "Brick house" },
  { key: "exterior-farmhouse", space: "exterior", label: "Farmhouse" },
  { key: "exterior-modern", space: "exterior", label: "Modern house" },
  { key: "exterior-dusk", space: "exterior", label: "House at dusk" },
  { key: "garden-backyard", space: "garden", label: "Backyard" },
  { key: "garden-front", space: "garden", label: "Front yard" },
  { key: "garden-patio", space: "garden", label: "Patio" },
  { key: "garden-pool", space: "garden", label: "Pool area" },
  { key: "sketch-plan", space: "sketch", label: "Sketch" },
];

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function NewDesignPage({ searchParams }: PageProps<"/app/new">) {
  const user = await requireUser("/app/new");
  const sp = await searchParams;
  const toolParam = one(sp.tool);
  const tool: ToolId = (TOOL_IDS as readonly string[]).includes(toolParam ?? "") ? (toolParam as ToolId) : "redesign";
  const spaceParam = one(sp.space);
  let space: SpaceKind = (SPACES as readonly string[]).includes(spaceParam ?? "") ? (spaceParam as SpaceKind) : TOOLS[tool].spaces[0];
  if (!TOOLS[tool].spaces.includes(space)) space = TOOLS[tool].spaces[0];
  const room = one(sp.room);
  const style = one(sp.style);
  const sampleKey = one(sp.sample);
  const fromId = one(sp.from);
  const from = fromId ? getRender(fromId, user.id) : undefined;

  const samples: Sample[] = SAMPLE_KEYS.filter((s) => IMAGES[s.key]).map((s) => ({
    key: s.key,
    src: IMAGES[s.key].srcSm,
    alt: IMAGES[s.key].alt,
    space: s.space,
    label: s.label,
  }));

  const sample = samples.find((s) => s.key === sampleKey);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl text-ink sm:text-4xl">New design</h1>
        <p className="mt-2 text-muted">Start from a photo, choose a tool and a direction, then generate.</p>
      </div>
      <Studio
        initial={{
          tool,
          space,
          roomType: room && ROOM_TYPES[space].includes(room) ? room : undefined,
          style: style && STYLES[space].includes(style) ? style : undefined,
          prompt: one(sp.prompt)?.slice(0, 800),
          from: from && from.status === "succeeded" ? { id: from.id, url: `/media/${from.id}/output-1` } : undefined,
          sample: sample ? { key: sample.key, url: sample.src, name: sample.label } : undefined,
        }}
        samples={samples}
        usage={usageFor(user.id)}
        demo={providerStatus().demo}
      />
    </div>
  );
}
