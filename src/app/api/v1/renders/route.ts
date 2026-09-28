import { NextResponse } from "next/server";
import { createRender, getRender, listRenders, RenderInputError, serializeRender, usageFor } from "@/lib/server/renders";
import { readRenderRequest } from "@/lib/server/render-request";
import { apiKeyUser, jsonError } from "@/lib/server/http";
import { absoluteUrl } from "@/lib/brand";

const media = (id: string, file: string) =>
  file === "input" ? absoluteUrl(`/api/v1/renders/${id}/input`) : absoluteUrl(`/api/v1/renders/${id}/outputs/${file.replace("output-", "")}`);

const UNAUTHORIZED = () => jsonError(401, "unauthorized", "Missing or invalid API key. Send it as: Authorization: Bearer rw_live_...");

export async function POST(request: Request) {
  const user = apiKeyUser(request);
  if (!user) return UNAUTHORIZED();
  try {
    const input = await readRenderRequest(request);
    const id = await createRender({ userId: user.id, source: "api", ...input });
    const row = getRender(id, user.id);
    return NextResponse.json(row ? serializeRender(row, media) : { id, status: "queued" }, { status: 202 });
  } catch (e) {
    if (e instanceof RenderInputError) return jsonError(e.status, e.code, e.message);
    console.error("api create render failed", e);
    return jsonError(500, "server_error", "Something went wrong. Please try again.");
  }
}

export async function GET(request: Request) {
  const user = apiKeyUser(request);
  if (!user) return UNAUTHORIZED();
  const url = new URL(request.url);
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit")) || 20));
  const before = url.searchParams.get("before");
  const beforeMs = before ? Date.parse(before) || undefined : undefined;
  const rows = listRenders(user.id, { limit, before: beforeMs });
  return NextResponse.json({ data: rows.map((r) => serializeRender(r, media)), usage: usageFor(user.id) });
}
