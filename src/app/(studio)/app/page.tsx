import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { requireUser } from "@/lib/server/auth";
import { listRenders } from "@/lib/server/renders";
import { TOOL_ICONS } from "@/components/app/tool-icons";
import { TOOLS, studioHref, type ToolId } from "@/lib/tools";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

const QUICK: { tool: ToolId; space: "interior" | "exterior" | "garden"; title: string }[] = [
  { tool: "redesign", space: "interior", title: "Redesign a room" },
  { tool: "virtual-staging", space: "interior", title: "Stage an empty room" },
  { tool: "redesign", space: "exterior", title: "Refresh a facade" },
  { tool: "redesign", space: "garden", title: "Reimagine a garden" },
  { tool: "paint", space: "interior", title: "Try a paint color" },
  { tool: "materials", space: "interior", title: "Swap materials" },
  { tool: "declutter", space: "interior", title: "Empty a room" },
  { tool: "edit", space: "interior", title: "Make a precise edit" },
];

const STATUS: Record<string, string> = {
  queued: "bg-gold/15 text-gold",
  processing: "bg-gold/15 text-gold",
  succeeded: "bg-brand-soft text-brand-strong",
  failed: "bg-danger/10 text-danger",
};

export default async function Dashboard() {
  const user = await requireUser();
  const renders = listRenders(user.id, { limit: 60 });
  const firstName = user.name?.split(" ")[0];
  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-3xl text-ink sm:text-4xl">{firstName ? `Welcome, ${firstName}` : "Welcome to your studio"}</h1>
        <p className="mt-2 text-muted">Pick a starting point, or open the studio and choose any tool.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {QUICK.map((q) => {
            const Icon = TOOL_ICONS[q.tool];
            return (
              <Link
                key={q.title}
                href={studioHref({ tool: q.tool, space: q.space })}
                className="group flex flex-col gap-3 rounded-[1.25rem] border border-line bg-surface p-4 shadow-soft transition hover:border-brand/50 hover:shadow-lift"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                  <Icon className="size-5" />
                </span>
                <span className="font-medium text-ink">{q.title}</span>
                <span className="text-xs text-muted">{TOOLS[q.tool].label}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl text-ink">My designs</h2>
          {renders.length > 0 && <p className="text-sm text-muted">{renders.length} most recent</p>}
        </div>
        {renders.length === 0 ? (
          <div className="mt-5 flex flex-col items-center rounded-[1.5rem] border border-dashed border-line-strong bg-surface-2 px-6 py-16 text-center">
            <p className="font-display text-2xl text-ink">No designs yet</p>
            <p className="mt-2 max-w-md text-muted">Upload a photo of a room, a facade or a garden and your first design will appear here.</p>
            <Link href="/app/new" className={cn(buttonClass("primary", "md"), "mt-6")}>
              Create your first design <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : (
          <ul className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {renders.map((r) => {
              const thumb = r.outputs > 0 ? `/media/${r.id}/output-1-thumb` : r.has_input ? `/media/${r.id}/input-thumb` : null;
              const options = JSON.parse(r.options) as { style?: string; roomType?: string };
              return (
                <li key={r.id}>
                  <Link href={`/app/designs/${r.id}`} className="group block overflow-hidden rounded-[1.1rem] border border-line bg-surface transition hover:shadow-lift">
                    <div className="relative aspect-[4/3] bg-surface-2">
                      {thumb && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={thumb} alt="" className={cn("h-full w-full object-cover", r.outputs === 0 && "opacity-60")} loading="lazy" />
                      )}
                      <span className={cn("absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold capitalize", STATUS[r.status])}>
                        {r.status === "succeeded" ? (r.demo ? "Demo" : "Ready") : r.status}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="truncate text-sm font-medium text-ink">{TOOLS[r.tool].label}</p>
                      <p className="truncate text-xs text-muted">
                        {[options.style, options.roomType].filter(Boolean).join(" · ") || r.space}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
