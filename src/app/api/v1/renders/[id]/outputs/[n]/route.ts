import { apiKeyUser, jsonError } from "@/lib/server/http";
import { renderMediaResponse } from "@/lib/server/media-response";

export async function GET(request: Request, ctx: RouteContext<"/api/v1/renders/[id]/outputs/[n]">) {
  const user = apiKeyUser(request);
  if (!user) return jsonError(401, "unauthorized", "Missing or invalid API key.");
  const { id, n } = await ctx.params;
  if (!/^\d{1,2}$/.test(n)) return jsonError(404, "not_found", "Output not found.");
  return renderMediaResponse(user.id, id, `output-${n}`);
}
