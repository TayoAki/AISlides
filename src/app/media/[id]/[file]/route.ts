import { sessionUser } from "@/lib/server/http";
import { renderMediaResponse } from "@/lib/server/media-response";

export async function GET(request: Request, ctx: RouteContext<"/media/[id]/[file]">) {
  const user = sessionUser(request);
  if (!user) return new Response("Not found", { status: 404 });
  const { id, file } = await ctx.params;
  const download = new URL(request.url).searchParams.has("download");
  return renderMediaResponse(user.id, id, file, download);
}
