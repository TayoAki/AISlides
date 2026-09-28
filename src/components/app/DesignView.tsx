"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AlertCircle, Download, LoaderCircle, RefreshCw, Trash2, Wand2 } from "lucide-react";
import { BeforeAfter } from "./BeforeAfter";
import { TOOL_ICONS } from "./tool-icons";
import { Button, ButtonLink, buttonClass } from "@/components/ui/primitives";
import { STYLES, TOOLS, type SpaceKind, type ToolId } from "@/lib/tools";
import { cn } from "@/lib/cn";

export type RenderJson = {
  id: string;
  status: "queued" | "processing" | "succeeded" | "failed";
  tool: ToolId;
  space: SpaceKind;
  prompt: string | null;
  options: Record<string, string>;
  demo: boolean;
  error: string | null;
  input_url: string | null;
  output_urls: string[];
  created_at: string;
  completed_at: string | null;
};

const PENDING = new Set(["queued", "processing"]);

export function DesignView({ initial }: { initial: RenderJson }) {
  const router = useRouter();
  const [render, setRender] = useState(initial);
  const [elapsed, setElapsed] = useState(() => Math.max(0, Math.round((Date.now() - Date.parse(initial.created_at)) / 1000)));
  const [busy, setBusy] = useState<null | "rerun" | "delete">(null);
  const [error, setError] = useState<string | null>(null);
  const [nextStyle, setNextStyle] = useState("");
  const pending = PENDING.has(render.status);
  const started = useRef(Date.parse(initial.created_at));

  useEffect(() => {
    if (!pending) return;
    const tick = setInterval(() => setElapsed(Math.round((Date.now() - started.current) / 1000)), 1000);
    const poll = setInterval(async () => {
      const res = await fetch(`/api/renders/${render.id}`, { cache: "no-store" }).catch(() => null);
      if (!res?.ok) return;
      const next = (await res.json()) as RenderJson;
      setRender(next);
      // A failed render gives its allowance back, so update the usage meter once it settles.
      if (!PENDING.has(next.status)) router.refresh();
    }, 1500);
    return () => {
      clearInterval(tick);
      clearInterval(poll);
    };
  }, [pending, render.id, router]);

  const tool = TOOLS[render.tool];
  const Icon = TOOL_ICONS[render.tool];
  const output = render.output_urls[0];
  const styles = STYLES[render.space];

  async function rerun(style?: string) {
    setBusy("rerun");
    setError(null);
    const res = await fetch(`/api/renders/${render.id}/rerun`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(style ? { style } : {}),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(body?.error?.message ?? "Couldn't start a new render.");
      setBusy(null);
      return;
    }
    router.push(`/app/designs/${body.id}`);
    router.refresh();
  }

  async function remove() {
    if (!confirm("Delete this design? This can't be undone.")) return;
    setBusy("delete");
    const res = await fetch(`/api/renders/${render.id}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/app");
      router.refresh();
    } else {
      setError("Couldn't delete this design.");
      setBusy(null);
    }
  }

  const studioLink = (() => {
    const p = new URLSearchParams({ tool: render.tool, space: render.space });
    if (render.options.roomType) p.set("room", render.options.roomType);
    if (render.options.style) p.set("style", render.options.style);
    if (render.prompt) p.set("prompt", render.prompt);
    return `/app/new?${p}`;
  })();

  const details = [
    ["Tool", tool.label],
    ["Space", render.space[0].toUpperCase() + render.space.slice(1)],
    ...Object.entries(render.options)
      .filter(([k]) => k !== "strength" || tool.options.includes("strength"))
      .map(([k, v]) => [k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()), v]),
    ...(render.prompt ? [["Instructions", render.prompt]] : []),
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      <div>
        {pending && (
          <div className="relative overflow-hidden rounded-[1.25rem] border border-line bg-surface-2">
            {render.input_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={render.input_url} alt="Your photo" className="aspect-[4/3] w-full object-cover opacity-70 blur-[1px]" />
            ) : (
              <div className="aspect-[4/3] w-full" />
            )}
            <div className="rw-shimmer absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full max-w-sm rounded-2xl bg-surface/95 p-5 text-center shadow-lift backdrop-blur">
                <LoaderCircle className="mx-auto size-7 animate-spin text-brand" />
                <p className="mt-3 font-display text-xl text-ink">{render.status === "queued" ? "In the queue…" : `Designing with ${tool.label}…`}</p>
                <p className="mt-1 text-sm text-muted">Usually 10 to 40 seconds · {elapsed}s so far</p>
                <p className="mt-3 text-xs text-muted">You can leave this page. The design will be waiting in My designs.</p>
              </div>
            </div>
          </div>
        )}

        {render.status === "failed" && (
          <div className="rounded-[1.25rem] border border-danger/30 bg-danger/5 p-8">
            <AlertCircle className="size-8 text-danger" />
            <p className="mt-3 font-display text-2xl text-ink">This render didn&apos;t finish</p>
            <p className="mt-2 text-ink-2">{render.error ?? "Something went wrong."} Failed renders don&apos;t count toward your daily allowance.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={() => rerun()} disabled={busy !== null}>
                {busy === "rerun" ? <LoaderCircle className="size-4 animate-spin" /> : <RefreshCw className="size-4" />} Try again
              </Button>
              <ButtonLink href={studioLink} variant="secondary">
                Adjust settings
              </ButtonLink>
            </div>
          </div>
        )}

        {render.status === "succeeded" && output && (
          <>
            {render.input_url ? (
              <BeforeAfter before={render.input_url} after={output} className="border border-line shadow-soft" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={output} alt="Generated design" className="w-full rounded-[1.25rem] border border-line shadow-soft" />
            )}
            {render.demo && (
              <p className="mt-3 rounded-xl bg-accent-soft px-4 py-3 text-sm text-accent-strong">
                Demo preview: this server has no AI provider connected yet, so this is a labeled color-grade of your photo, not an AI redesign. Once an AI key is added, the same button produces real renders.
              </p>
            )}
          </>
        )}
      </div>

      <aside className="flex flex-col gap-5">
        <div className="rounded-[1.25rem] border border-line bg-surface p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="font-display text-xl leading-tight text-ink">{tool.label}</p>
              <p className="text-sm text-muted">
                {new Date(render.created_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
              </p>
            </div>
          </div>

          {render.status === "succeeded" && output && (
            <div className="mt-5 grid gap-2">
              <a href={`${output}?download`} className={buttonClass("primary", "md", "w-full")}>
                <Download className="size-4" /> Download
              </a>
              <Button variant="secondary" onClick={() => rerun()} disabled={busy !== null} className="w-full">
                {busy === "rerun" ? <LoaderCircle className="size-4 animate-spin" /> : <RefreshCw className="size-4" />} Generate another version
              </Button>
              <Link href={`/app/new?tool=edit&space=${render.space}&from=${render.id}`} className={buttonClass("secondary", "md", "w-full")}>
                <Wand2 className="size-4" /> Refine this result
              </Link>
            </div>
          )}

          {render.status === "succeeded" && tool.options.includes("style") && (
            <div className="mt-5 border-t border-line pt-5">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">Try another style</p>
              <div className="mt-2.5 flex gap-2">
                <select
                  value={nextStyle}
                  onChange={(e) => setNextStyle(e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-line-strong bg-surface px-3 py-2 text-sm text-ink"
                  aria-label="Style"
                >
                  <option value="">Choose a style</option>
                  {styles
                    .filter((s) => s !== render.options.style)
                    .map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                </select>
                <Button size="sm" disabled={!nextStyle || busy !== null} onClick={() => rerun(nextStyle)}>
                  Render
                </Button>
              </div>
            </div>
          )}

          {error && (
            <p className="mt-4 rounded-xl bg-danger/10 px-3.5 py-2.5 text-sm text-danger" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="rounded-[1.25rem] border border-line bg-surface p-5">
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted">Settings</p>
          <dl className="mt-3 grid gap-2.5 text-sm">
            {details.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] gap-3">
                <dt className="text-muted">{k}</dt>
                <dd className="text-ink-2">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
            <Link href={studioLink} className={cn(buttonClass("ghost", "sm"), "px-2")}>
              Edit settings
            </Link>
            <button type="button" onClick={remove} disabled={busy !== null} className={cn(buttonClass("ghost", "sm"), "px-2 text-danger")}>
              <Trash2 className="size-4" /> Delete
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
