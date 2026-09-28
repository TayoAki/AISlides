"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from "react";
import { ImagePlus, Info, LoaderCircle, RefreshCw, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/primitives";
import { TOOL_ICONS, TOOL_PLACEHOLDERS } from "./tool-icons";
import {
  MATERIALS, PAINT_COLORS, ROOM_TYPES, SKIES, SPACE_LABELS, SPACES, STRENGTHS, STYLES, SURFACES, TOOLS,
  type SpaceKind, type Strength, type ToolId,
} from "@/lib/tools";
import { cn } from "@/lib/cn";

export type Sample = { key: string; src: string; alt: string; space: SpaceKind | "sketch"; label: string };

type Photo =
  | { kind: "file"; file: File; url: string; name: string }
  | { kind: "sample"; key: string; url: string; name: string }
  | { kind: "render"; id: string; url: string; name: string };

const SURFACES_BY_SPACE: Record<SpaceKind, (typeof SURFACES)[number][]> = {
  interior: ["Flooring", "Walls", "Countertops", "Cabinets", "Ceiling"],
  exterior: ["Siding", "Roof"],
  garden: [],
};

const label = "text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-muted";
const select =
  "w-full rounded-xl border border-line-strong bg-surface px-3 py-2.5 text-[0.95rem] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

/** Shrinks big photos in the browser so uploads stay fast; falls back to the original. */
async function downscale(file: File): Promise<File> {
  if (file.size < 2_500_000) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, 2560 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/jpeg", 0.9));
    return blob ? new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" }) : file;
  } catch {
    return file;
  }
}

function Chip({ active, onClick, children, className }: { active: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition-colors",
        active ? "border-brand bg-brand text-brand-ink" : "border-line-strong bg-surface text-ink-2 hover:border-ink/40",
        className,
      )}
    >
      {children}
    </button>
  );
}

function DropZone({
  onFile,
  title,
  hint,
  compact = false,
}: {
  onFile: (f: File) => void;
  title: string;
  hint: string;
  compact?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) onFile(f);
  };
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      className={cn(
        "flex flex-col items-center justify-center rounded-[1.25rem] border-2 border-dashed text-center transition-colors",
        compact ? "gap-2 px-4 py-6" : "aspect-[4/3] gap-3 px-6",
        over ? "border-brand bg-brand-soft/50" : "border-line-strong bg-surface-2 hover:border-brand/60",
      )}
    >
      <span className={cn("inline-flex items-center justify-center rounded-2xl bg-brand-soft text-brand-strong", compact ? "size-10" : "size-14")}>
        <ImagePlus className={compact ? "size-5" : "size-7"} />
      </span>
      <p className={cn("font-display text-ink", compact ? "text-lg" : "text-2xl")}>{title}</p>
      <p className="max-w-sm text-sm text-muted">{hint}</p>
      <Button type="button" variant="secondary" size="sm" onClick={() => inputRef.current?.click()}>
        <Upload className="size-4" /> Choose a photo
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/heic,image/heif"
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
          e.target.value = "";
        }}
      />
    </div>
  );
}

export function Studio({
  initial,
  samples,
  usage,
  demo,
}: {
  initial: {
    tool: ToolId;
    space: SpaceKind;
    roomType?: string;
    style?: string;
    prompt?: string;
    from?: { id: string; url: string };
    sample?: { key: string; url: string; name: string };
  };
  samples: Sample[];
  usage: { used: number; limit: number; remaining: number };
  demo: boolean;
}) {
  const router = useRouter();
  const [space, setSpace] = useState<SpaceKind>(initial.space);
  const [tool, setTool] = useState<ToolId>(initial.tool);
  const [roomType, setRoomType] = useState(initial.roomType ?? ROOM_TYPES[initial.space][0]);
  const [style, setStyle] = useState(initial.style ?? STYLES[initial.space][0]);
  const [strength, setStrength] = useState<Strength>("balanced");
  const [prompt, setPrompt] = useState(initial.prompt ?? "");
  const [surface, setSurface] = useState<(typeof SURFACES)[number]>(SURFACES_BY_SPACE[initial.space][0] ?? "Flooring");
  const [material, setMaterial] = useState(MATERIALS[SURFACES_BY_SPACE[initial.space][0] ?? "Flooring"][0]);
  const [color, setColor] = useState(PAINT_COLORS[2].name);
  const [sky, setSky] = useState(SKIES[1]);
  const [photo, setPhoto] = useState<Photo | null>(
    initial.from
      ? { kind: "render", id: initial.from.id, url: initial.from.url, name: "Your previous design" }
      : initial.sample
        ? { kind: "sample", ...initial.sample }
        : null,
  );
  const [reference, setReference] = useState<{ file: File; url: string } | null>(null);
  const [showAllStyles, setShowAllStyles] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const def = TOOLS[tool];
  const tools = useMemo(() => Object.values(TOOLS).filter((t) => t.spaces.includes(space)), [space]);
  const styles = STYLES[space];
  const visibleStyles = showAllStyles ? styles : styles.slice(0, 12);
  const spaceSamples = samples.filter((s) => (tool === "sketch" ? s.space === "sketch" || s.space === space : s.space === space));

  // Revoke object URLs we create.
  useEffect(() => () => {
    if (photo?.kind === "file") URL.revokeObjectURL(photo.url);
  }, [photo]);

  const choosePhoto = useCallback(async (file: File) => {
    setError(null);
    if (!file.type.startsWith("image/") && !/\.(heic|heif)$/i.test(file.name)) {
      setError("That file isn't an image. Please choose a JPEG, PNG or WebP photo.");
      return;
    }
    const small = await downscale(file);
    setPhoto({ kind: "file", file: small, url: URL.createObjectURL(small), name: file.name });
  }, []);

  // Paste an image from the clipboard anywhere on the page.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const file = Array.from(e.clipboardData?.files ?? []).find((f) => f.type.startsWith("image/"));
      if (file && def.needsPhoto) {
        e.preventDefault();
        void choosePhoto(file);
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [choosePhoto, def.needsPhoto]);

  function changeSpace(next: SpaceKind) {
    setSpace(next);
    setRoomType(ROOM_TYPES[next][0]);
    setStyle(STYLES[next][0]);
    const surfaces = SURFACES_BY_SPACE[next];
    if (surfaces.length) {
      setSurface(surfaces[0]);
      setMaterial(MATERIALS[surfaces[0]][0]);
    }
    if (!TOOLS[tool].spaces.includes(next)) setTool("redesign");
    if (photo?.kind === "sample") setPhoto(null);
  }

  const missing = def.needsPhoto && !photo ? "Add a photo to start from." : def.promptRequired && prompt.trim().length < 3 ? "Describe what you'd like to create." : tool === "style-transfer" && !reference ? "Add an inspiration photo." : null;

  async function submit() {
    if (missing || busy) return;
    setBusy(true);
    setError(null);
    const form = new FormData();
    form.set("tool", tool);
    form.set("space", space);
    if (def.options.includes("roomType")) form.set("roomType", roomType);
    if (def.options.includes("style")) form.set("style", style);
    if (def.options.includes("strength")) form.set("strength", strength);
    if (def.options.includes("surface")) {
      form.set("surface", surface);
      form.set("material", material);
    }
    if (def.options.includes("color")) form.set("color", color);
    if (def.options.includes("sky")) form.set("sky", sky);
    if (prompt.trim()) form.set("prompt", prompt.trim());
    if (def.needsPhoto && photo) {
      if (photo.kind === "file") form.set("image", photo.file);
      else if (photo.kind === "sample") form.set("sample", photo.key);
      else form.set("fromRender", photo.id);
    }
    if (tool === "style-transfer" && reference) form.set("reference", reference.file);
    try {
      const res = await fetch("/api/renders", { method: "POST", body: form });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error?.message ?? "Something went wrong. Please try again.");
      router.push(`/app/designs/${body.id}`);
      // Layouts are served from the client cache on navigation; refresh so the usage meter counts this render.
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  }

  const ToolIcon = TOOL_ICONS[tool];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      {/* Photo column */}
      <section aria-label="Photo" className="flex flex-col gap-5">
        {def.needsPhoto ? (
          <>
            {photo ? (
              <figure className="relative overflow-hidden rounded-[1.25rem] border border-line bg-surface-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.url} alt="Your starting photo" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-medium text-bg backdrop-blur">
                  {tool === "sketch" ? "Your sketch" : "Your photo"} · {photo.name}
                </figcaption>
                <div className="absolute right-3 top-3 flex gap-2">
                  <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-ink shadow-soft">
                    <RefreshCw className="size-3.5" /> Replace
                    <input
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) void choosePhoto(f);
                        e.target.value = "";
                      }}
                    />
                  </label>
                  <button type="button" onClick={() => setPhoto(null)} className="inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-ink shadow-soft">
                    <Trash2 className="size-3.5" /> Remove
                  </button>
                </div>
              </figure>
            ) : (
              <DropZone
                onFile={choosePhoto}
                title={tool === "sketch" ? "Add your sketch" : "Add a photo of your space"}
                hint="Drag it here, choose a file, or paste with Ctrl/⌘+V. JPEG, PNG or WebP up to 15 MB. Straight-on, well-lit photos work best."
              />
            )}

            {spaceSamples.length > 0 && (
              <div>
                <p className={label}>No photo handy? Try a sample</p>
                <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {spaceSamples.slice(0, 8).map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setPhoto({ kind: "sample", key: s.key, url: s.src, name: s.label })}
                      className={cn(
                        "group overflow-hidden rounded-xl border-2 text-left transition",
                        photo?.kind === "sample" && photo.key === s.key ? "border-brand" : "border-transparent hover:border-line-strong",
                      )}
                      aria-label={`Use sample: ${s.label}`}
                    >
                      <Image src={s.src} alt={s.alt} width={320} height={240} className="aspect-[4/3] w-full object-cover" />
                      <span className="block truncate bg-surface px-2 py-1 text-[0.72rem] text-muted">{s.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {tool === "style-transfer" && (
              <div>
                <p className={label}>Inspiration photo</p>
                <div className="mt-3">
                  {reference ? (
                    <div className="relative overflow-hidden rounded-[1.25rem] border border-line">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={reference.url} alt="Inspiration" className="aspect-[16/9] w-full object-cover" />
                      <button type="button" onClick={() => setReference(null)} className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-ink shadow-soft">
                        <Trash2 className="size-3.5" /> Remove
                      </button>
                    </div>
                  ) : (
                    <DropZone
                      compact
                      onFile={async (f) => {
                        const small = await downscale(f);
                        setReference({ file: small, url: URL.createObjectURL(small) });
                      }}
                      title="Add an inspiration photo"
                      hint="A room, facade or garden whose look you love. We borrow its palette, materials and mood, not its layout."
                    />
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex aspect-[4/3] flex-col justify-center rounded-[1.25rem] border border-line bg-surface-2 p-8">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong">
              <ToolIcon className="size-7" />
            </span>
            <p className="mt-5 font-display text-3xl text-ink">No photo needed</p>
            <p className="mt-2 max-w-md text-muted">
              {tool === "furniture-creator"
                ? "Describe the piece: its shape, materials, finish and where it will live. We'll render it as a studio product shot."
                : "Describe the space you imagine: the room, the mood, the materials and the light. Be specific for the best results."}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(tool === "furniture-creator"
                ? ["A fluted oak sideboard with brass pulls", "A modular boucle sofa in warm white", "A round travertine dining table"]
                : ["A calm Japandi bedroom with a low platform bed", "A moody green library with brass lamps", "A bright coastal kitchen with a big island"]
              ).map((ex) => (
                <button key={ex} type="button" onClick={() => setPrompt(ex)} className="rounded-full border border-line-strong bg-surface px-3 py-1.5 text-sm text-ink-2 hover:border-brand">
                  {ex}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Options column */}
      <section aria-label="Design settings" className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-soft sm:p-6 lg:sticky lg:top-24 lg:self-start">
        <div className="flex flex-col gap-6">
          <div>
            <p className={label}>Space</p>
            <div className="mt-2.5 grid grid-cols-3 gap-1 rounded-full bg-bg p-1">
              {SPACES.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={space === s}
                  onClick={() => changeSpace(s)}
                  className={cn("rounded-full py-2 text-sm font-medium transition", space === s ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink")}
                >
                  {SPACE_LABELS[s]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className={label}>Tool</p>
            <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {tools.map((t) => {
                const I = TOOL_ICONS[t.id];
                return (
                  <button
                    key={t.id}
                    type="button"
                    aria-pressed={tool === t.id}
                    onClick={() => {
                      setTool(t.id);
                      setError(null);
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[0.83rem] leading-tight transition",
                      tool === t.id ? "border-brand bg-brand-soft/60 text-ink" : "border-line text-ink-2 hover:border-line-strong",
                    )}
                  >
                    <I className={cn("size-4 shrink-0", tool === t.id ? "text-brand" : "text-muted")} />
                    {t.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-2.5 flex items-start gap-1.5 text-sm text-muted">
              <Info className="mt-0.5 size-4 shrink-0" /> {def.blurb}
            </p>
          </div>

          {def.options.includes("roomType") && (
            <label className="grid gap-2">
              <span className={label}>{space === "interior" ? "Room type" : space === "exterior" ? "Building" : "Area"}</span>
              <select className={select} value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                {ROOM_TYPES[space].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </label>
          )}

          {def.options.includes("style") && (
            <div>
              <p className={label}>Style</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {visibleStyles.map((s) => (
                  <Chip key={s} active={style === s} onClick={() => setStyle(s)}>
                    {s}
                  </Chip>
                ))}
                {styles.length > 12 && (
                  <button type="button" onClick={() => setShowAllStyles(!showAllStyles)} className="px-2 py-1.5 text-sm font-medium text-brand">
                    {showAllStyles ? "Fewer" : `+${styles.length - 12} more`}
                  </button>
                )}
              </div>
            </div>
          )}

          {def.options.includes("strength") && (
            <div>
              <p className={label}>How much should change?</p>
              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {STRENGTHS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={strength === s.id}
                    onClick={() => setStrength(s.id)}
                    className={cn("rounded-xl border px-3 py-2 text-left transition", strength === s.id ? "border-brand bg-brand-soft/60" : "border-line hover:border-line-strong")}
                  >
                    <span className="block text-sm font-medium text-ink">{s.label}</span>
                    <span className="block text-xs text-muted">{s.hint}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {def.options.includes("surface") && SURFACES_BY_SPACE[space].length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className={label}>Surface</span>
                <select
                  className={select}
                  value={surface}
                  onChange={(e) => {
                    const s = e.target.value as (typeof SURFACES)[number];
                    setSurface(s);
                    setMaterial(MATERIALS[s][0]);
                  }}
                >
                  {SURFACES_BY_SPACE[space].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className={label}>New material</span>
                <select className={select} value={material} onChange={(e) => setMaterial(e.target.value)}>
                  {MATERIALS[surface].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {def.options.includes("color") && (
            <div>
              <p className={label}>{space === "exterior" ? "Facade color" : "Wall color"}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {PAINT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    aria-pressed={color === c.name}
                    title={c.name}
                    onClick={() => setColor(c.name)}
                    className={cn("flex items-center gap-2 rounded-full border py-1 pl-1 pr-3 text-sm transition", color === c.name ? "border-brand bg-brand-soft/60" : "border-line hover:border-line-strong")}
                  >
                    <span className="size-6 rounded-full border border-black/10" style={{ background: c.hex }} />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {def.options.includes("sky") && (
            <div>
              <p className={label}>Sky and light</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {SKIES.map((s) => (
                  <Chip key={s} active={sky === s} onClick={() => setSky(s)}>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          <label className="grid gap-2">
            <span className={label}>{def.promptRequired ? "Describe it" : "Anything else? (optional)"}</span>
            <textarea
              className={cn(select, "min-h-24 resize-y leading-relaxed")}
              value={prompt}
              maxLength={800}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={TOOL_PLACEHOLDERS[tool]}
            />
          </label>

          {error && (
            <p className="rounded-xl bg-danger/10 px-3.5 py-2.5 text-sm text-danger" role="alert">
              {error}
            </p>
          )}

          <div>
            <Button type="button" size="lg" className="w-full" disabled={Boolean(missing) || busy || usage.remaining <= 0} onClick={submit}>
              {busy ? <LoaderCircle className="size-5 animate-spin" /> : <ToolIcon className="size-5" />}
              {busy ? "Uploading…" : "Generate design"}
            </Button>
            <p className="mt-2.5 text-center text-xs text-muted">
              {usage.remaining <= 0
                ? `You've used all ${usage.limit} free renders today. Your allowance resets at midnight UTC.`
                : missing ?? `Uses 1 of your ${usage.remaining} remaining renders today.`}
            </p>
            {demo && (
              <p className="mt-3 rounded-xl bg-accent-soft px-3 py-2 text-xs text-accent-strong">
                Demo mode: no AI provider is connected on this server, so results are labeled color-grade previews, not AI redesigns.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
