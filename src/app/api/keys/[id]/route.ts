import { NextResponse } from "next/server";
import { revokeApiKey } from "@/lib/server/api-keys";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

export async function DELETE(request: Request, ctx: RouteContext<"/api/keys/[id]">) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const { id } = await ctx.params;
  if (!revokeApiKey(user.id, id)) return jsonError(404, "not_found", "Key not found.");
  return NextResponse.json({ ok: true });
}
