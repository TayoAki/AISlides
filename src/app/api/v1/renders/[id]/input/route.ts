import { apiKeyUser, jsonError } from "@/lib/server/http";
import { renderMediaResponse } from "@/lib/server/media-response";

export async function GET(request: Request, ctx: RouteContext<"/api/v1/renders/[id]/input">) {
  const user = apiKeyUser(request);
  if (!user) return jsonError(401, "unauthorized", "Missing or invalid API key.");
  const { id } = await ctx.params;
  return renderMediaResponse(user.id, id, "input");
}
