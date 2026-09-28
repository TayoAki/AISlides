import { NextResponse } from "next/server";
import { getRender, serializeRender } from "@/lib/server/renders";
import { apiKeyUser, jsonError } from "@/lib/server/http";
import { absoluteUrl } from "@/lib/brand";

const media = (id: string, file: string) =>
  file === "input" ? absoluteUrl(`/api/v1/renders/${id}/input`) : absoluteUrl(`/api/v1/renders/${id}/outputs/${file.replace("output-", "")}`);

export async function GET(request: Request, ctx: RouteContext<"/api/v1/renders/[id]">) {
  const user = apiKeyUser(request);
  if (!user) return jsonError(401, "unauthorized", "Missing or invalid API key.");
  const { id } = await ctx.params;
  const row = getRender(id, user.id);
  if (!row) return jsonError(404, "not_found", "Render not found.");
  return NextResponse.json(serializeRender(row, media), { headers: { "Cache-Control": "no-store" } });
}
