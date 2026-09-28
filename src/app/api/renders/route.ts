import { NextResponse } from "next/server";
import { createRender, listRenders, RenderInputError, serializeRender, usageFor } from "@/lib/server/renders";
import { readRenderRequest } from "@/lib/server/render-request";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

const media = (id: string, file: string) => `/media/${id}/${file}`;

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in to create designs.");
  try {
    const input = await readRenderRequest(request);
    const id = await createRender({ userId: user.id, source: "app", ...input });
    return NextResponse.json({ id, usage: usageFor(user.id) }, { status: 202 });
  } catch (e) {
    if (e instanceof RenderInputError) return jsonError(e.status, e.code, e.message, e.status === 429 ? { usage: usageFor(user.id) } : undefined);
    console.error("create render failed", e);
    return jsonError(500, "server_error", "Something went wrong. Please try again.");
  }
}

export async function GET(request: Request) {
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const url = new URL(request.url);
  const before = Number(url.searchParams.get("before")) || undefined;
  const limit = Math.min(60, Math.max(1, Number(url.searchParams.get("limit")) || 24));
  const rows = listRenders(user.id, { limit, before });
  return NextResponse.json({ data: rows.map((r) => serializeRender(r, media)), usage: usageFor(user.id) });
}
