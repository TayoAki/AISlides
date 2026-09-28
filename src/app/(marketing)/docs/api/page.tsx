import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { SKIES, SPACES, STRENGTHS, SURFACES, TOOLS } from "@/lib/tools";
import { absoluteUrl } from "@/lib/brand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "API documentation",
  description: "Roomwright REST API reference: authentication, creating renders from photos, polling for results, downloading outputs, errors and limits.",
  path: "/docs/api",
});

const BASE = absoluteUrl("/api/v1");

function Code({ children, title }: { children: string; title?: string }) {
  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-line bg-[#101614]">
      {title && <div className="border-b border-white/10 px-4 py-2 text-xs text-white/55">{title}</div>}
      <pre className="overflow-x-auto p-4 text-[0.83rem] leading-relaxed text-[#e6e1d6]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-14 scroll-mt-24 border-t border-line pt-10 text-3xl text-ink first:mt-0 first:border-0 first:pt-0">
      {children}
    </h2>
  );
}

function Endpoint({ method, path }: { method: string; path: string }) {
  return (
    <p className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 font-mono text-sm">
      <span className={method === "POST" ? "font-semibold text-accent-strong" : "font-semibold text-brand"}>{method}</span>
      <span className="text-ink">{path}</span>
    </p>
  );
}

const FIELDS: [string, string, string][] = [
  ["tool", "string, required", `One of: ${Object.keys(TOOLS).join(", ")}.`],
  ["space", "string", `${SPACES.join(", ")}. Defaults to interior. Must be a space the tool supports.`],
  ["image", "file (multipart)", "The starting photo. JPEG, PNG or WebP, up to 15 MB, at least 256 px per side. Required for every tool except text-to-design and furniture-creator."],
  ["image_base64", "string (JSON)", "The starting photo as base64 or a data URL, when sending JSON instead of multipart."],
  ["reference / reference_base64", "file / string", "Inspiration photo. Required for style-transfer."],
  ["room_type", "string, ≤ 60 chars", 'What the photo shows, e.g. "Living room", "House front", "Backyard".'],
  ["style", "string, ≤ 60 chars", 'Design direction, e.g. "Japandi", "Modern farmhouse", "Japanese zen".'],
  ["strength", "string", `${STRENGTHS.map((s) => s.id).join(", ")}. How much should change. Defaults to balanced.`],
  ["prompt", "string, ≤ 800 chars", "Extra direction. Required for edit, text-to-design and furniture-creator."],
  ["surface", "string", `For materials: ${SURFACES.join(", ")}.`],
  ["material", "string, ≤ 60 chars", 'For materials, e.g. "Walnut hardwood", "White quartz".'],
  ["color", "string, ≤ 40 chars", 'For paint: a color name or hex, e.g. "Sage" or "#A9B8A0".'],
  ["sky", "string", `For sky: ${SKIES.join(", ")}.`],
  ["from_render", "string", "Start from the output of one of your earlier succeeded renders instead of uploading an image."],
  ["sample", "string", "Use a built-in sample photo instead of uploading, handy for testing: living-dated, kitchen-dated, empty-room, exterior-brick, garden-backyard."],
];

const TOC = [
  ["overview", "Overview"],
  ["authentication", "Authentication"],
  ["create", "Create a render"],
  ["retrieve", "Retrieve a render"],
  ["list", "List renders"],
  ["outputs", "Download images"],
  ["object", "The render object"],
  ["tools", "Tools"],
  ["errors", "Errors and limits"],
];

export default function ApiDocsPage() {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-12 pt-10">
          <Breadcrumbs items={[{ label: "API Documentation", href: "/docs/api" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Developers</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.2rem]">API documentation</h1>
            <p className="mt-5 text-lg text-ink-2">
              Create renders from photos, poll for results and download images over a small REST API. It uses the same engine as the studio. For an overview, see the <Link href="/api" className="text-brand underline underline-offset-4">API page</Link>.
            </p>
          </div>
        </Container>
      </section>
      <Container className="grid gap-12 py-14 lg:grid-cols-[210px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">On this page</p>
            <ul className="flex flex-col gap-2 border-l border-line pl-4 text-sm">
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <article className="prose-rw max-w-3xl">
          <H2 id="overview">Overview</H2>
          <p>
            Base URL: <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm">{BASE}</code>. Requests and responses use JSON, except image uploads (multipart) and image downloads (JPEG).
          </p>
          <p>Rendering is asynchronous. Creating a render returns immediately with status <code>queued</code>; poll the render every 2–3 seconds until it is <code>succeeded</code> or <code>failed</code>. Most renders finish in 10–40 seconds.</p>
          <p>The API is in beta and free to use. API renders count toward the same daily allowance as the studio.</p>

          <H2 id="authentication">Authentication</H2>
          <p>
            Create a key under <Link href="/app/account">Account → API keys</Link>. Keys start with <code>rw_live_</code> and are shown once. Send the key as a Bearer token on every request, and keep it on your server: never ship it in a browser or mobile app.
          </p>
          <Code>{`Authorization: Bearer rw_live_...`}</Code>
          <p>You can revoke a key at any time from the same page. Requests with a missing, malformed or revoked key receive <code>401 unauthorized</code>.</p>

          <H2 id="create">Create a render</H2>
          <Endpoint method="POST" path="/api/v1/renders" />
          <p>Send <code>multipart/form-data</code> (with an <code>image</code> file) or <code>application/json</code> (with <code>image_base64</code>). Field names are case-sensitive.</p>
          <div className="not-prose my-5 overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-medium">Field</th>
                  <th className="px-4 py-2.5 font-medium">Type</th>
                  <th className="px-4 py-2.5 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {FIELDS.map(([f, t, d]) => (
                  <tr key={f} className="align-top">
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-ink">{f}</td>
                    <td className="whitespace-nowrap px-4 py-2.5 text-muted">{t}</td>
                    <td className="px-4 py-2.5 text-ink-2">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Code title="curl · multipart upload">{`curl -X POST ${BASE}/renders \\
  -H "Authorization: Bearer $ROOMWRIGHT_API_KEY" \\
  -F tool=redesign \\
  -F space=interior \\
  -F room_type="Living room" \\
  -F style=Japandi \\
  -F strength=balanced \\
  -F image=@living-room.jpg`}</Code>
          <Code title="Node.js · JSON with base64">{`import { readFile } from "node:fs/promises";

const res = await fetch("${BASE}/renders", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.ROOMWRIGHT_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tool: "paint",
    space: "exterior",
    color: "Sage",
    image_base64: (await readFile("house.jpg")).toString("base64"),
  }),
});
const render = await res.json(); // { id: "r_...", status: "queued", ... }`}</Code>
          <p>
            A successful request returns <code>202 Accepted</code> with the <a href="#object">render object</a>.
          </p>

          <H2 id="retrieve">Retrieve a render</H2>
          <Endpoint method="GET" path="/api/v1/renders/{id}" />
          <Code title="Poll until finished">{`async function waitForRender(id) {
  for (;;) {
    const res = await fetch(\`${BASE}/renders/\${id}\`, {
      headers: { Authorization: \`Bearer \${process.env.ROOMWRIGHT_API_KEY}\` },
    });
    const render = await res.json();
    if (render.status === "succeeded" || render.status === "failed") return render;
    await new Promise((r) => setTimeout(r, 2500));
  }
}`}</Code>

          <H2 id="list">List renders</H2>
          <Endpoint method="GET" path="/api/v1/renders?limit=20&before=2026-09-28T00:00:00Z" />
          <p>
            Returns <code>{`{ data: Render[], usage }`}</code>, newest first. <code>limit</code> is 1–100 (default 20). Pass the <code>created_at</code> of the last item as <code>before</code> to page backwards. <code>usage</code> reports <code>used</code>, <code>limit</code>, <code>remaining</code> and <code>resetsAt</code> (Unix ms) for today.
          </p>

          <H2 id="outputs">Download images</H2>
          <Endpoint method="GET" path="/api/v1/renders/{id}/outputs/{n}" />
          <Endpoint method="GET" path="/api/v1/renders/{id}/input" />
          <p>
            Both return <code>image/jpeg</code> and require the same Authorization header. The URLs in <code>output_urls</code> and <code>input_url</code> already point here. Store images you need on your side; deleting a design or account removes them.
          </p>
          <Code>{`curl -H "Authorization: Bearer $ROOMWRIGHT_API_KEY" \\
  -o result.jpg ${BASE}/renders/r_example/outputs/1`}</Code>

          <H2 id="object">The render object</H2>
          <Code>{`{
  "id": "r_7k2m9x4q8w1n5c3d",
  "status": "succeeded",          // queued | processing | succeeded | failed
  "tool": "redesign",
  "space": "interior",
  "prompt": null,
  "options": { "roomType": "Living room", "style": "Japandi", "strength": "balanced" },
  "demo": false,                   // true only on servers without an AI provider (labeled previews)
  "error": null,                   // human-readable reason when status is "failed"
  "input_url": "${BASE}/renders/r_7k2m9x4q8w1n5c3d/input",
  "output_urls": ["${BASE}/renders/r_7k2m9x4q8w1n5c3d/outputs/1"],
  "created_at": "2026-09-28T14:02:11.000Z",
  "completed_at": "2026-09-28T14:02:39.000Z"
}`}</Code>

          <H2 id="tools">Tools</H2>
          <div className="not-prose my-5 overflow-x-auto rounded-2xl border border-line bg-surface">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-line text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-medium">tool</th>
                  <th className="px-4 py-2.5 font-medium">Spaces</th>
                  <th className="px-4 py-2.5 font-medium">Needs</th>
                  <th className="px-4 py-2.5 font-medium">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {Object.values(TOOLS).map((t) => (
                  <tr key={t.id} className="align-top">
                    <td className="whitespace-nowrap px-4 py-2.5 font-mono text-ink">{t.id}</td>
                    <td className="px-4 py-2.5 text-muted">{t.spaces.join(", ")}</td>
                    <td className="px-4 py-2.5 text-muted">
                      {[t.needsPhoto && "image", t.id === "style-transfer" && "reference", t.promptRequired && "prompt"].filter(Boolean).join(" + ") || "—"}
                    </td>
                    <td className="px-4 py-2.5 text-ink-2">{t.blurb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="errors">Errors and limits</H2>
          <p>
            Errors return JSON: <code>{`{ "error": { "code": "...", "message": "..." } }`}</code>. Messages are written for people and safe to show to your users.
          </p>
          <ul>
            <li><strong>400 invalid_request</strong>: a missing or invalid field, or an unreadable image.</li>
            <li><strong>401 unauthorized</strong>: missing, malformed or revoked API key.</li>
            <li><strong>404 not_found</strong>: the render doesn&apos;t exist or belongs to another account.</li>
            <li><strong>413</strong>: an image larger than 15 MB. <strong>415</strong>: an unsupported content type.</li>
            <li><strong>429 rate_limited</strong>: today&apos;s render allowance is used up. It resets at midnight UTC.</li>
            <li><strong>500 server_error</strong>: something went wrong on our side; retry with backoff.</li>
          </ul>
          <p>
            A render can also finish with <code>status: &quot;failed&quot;</code> and an <code>error</code> message, for example when an image is blocked by the safety filter. Failed renders don&apos;t count toward your allowance.
          </p>
          <p>
            Questions or higher limits? <Link href="/help#contact">Contact us</Link> or see <Link href="/enterprise">Enterprise</Link>.
          </p>
        </article>
      </Container>
    </>
  );
}
