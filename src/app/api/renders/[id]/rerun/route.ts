import { NextResponse } from "next/server";
import { z } from "zod";
import { RenderInputError, rerunRender, usageFor } from "@/lib/server/renders";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

const Body = z
  .object({
    style: z.string().trim().max(60).optional(),
    prompt: z.string().trim().max(800).optional(),
    strength: z.enum(["subtle", "balanced", "bold"]).optional(),
  })
  .default({});

export async function POST(request: Request, ctx: RouteContext<"/api/renders/[id]/rerun">) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const { id } = await ctx.params;
  const parsed = Body.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) return jsonError(400, "invalid_request", "Invalid settings.");
  try {
    const newId = await rerunRender(id, user.id, parsed.data);
    return NextResponse.json({ id: newId, usage: usageFor(user.id) }, { status: 202 });
  } catch (e) {
    if (e instanceof RenderInputError) return jsonError(e.status, e.code, e.message);
    console.error("rerun failed", e);
    return jsonError(500, "server_error", "Something went wrong. Please try again.");
  }
}
