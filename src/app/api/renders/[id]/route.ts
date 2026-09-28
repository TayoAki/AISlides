import { NextResponse } from "next/server";
import { deleteRender, getRender, serializeRender } from "@/lib/server/renders";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

const media = (id: string, file: string) => `/media/${id}/${file}`;

export async function GET(request: Request, ctx: RouteContext<"/api/renders/[id]">) {
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const { id } = await ctx.params;
  const row = getRender(id, user.id);
  if (!row) return jsonError(404, "not_found", "Design not found.");
  return NextResponse.json(serializeRender(row, media), { headers: { "Cache-Control": "no-store" } });
}

export async function DELETE(request: Request, ctx: RouteContext<"/api/renders/[id]">) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const { id } = await ctx.params;
  if (!(await deleteRender(id, user.id))) return jsonError(404, "not_found", "Design not found.");
  return NextResponse.json({ ok: true });
}
