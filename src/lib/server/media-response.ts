import "server-only";
import { getRender } from "./renders";
import { readMedia, type MediaFile } from "./storage";

const FILE = /^(input|reference|output-\d{1,2})(-thumb)?$/;

/** Streams a render's image to its owner, or 404s. */
export async function renderMediaResponse(userId: string, renderId: string, file: string, download = false) {
  if (!FILE.test(file)) return new Response("Not found", { status: 404 });
  const row = getRender(renderId, userId);
  if (!row) return new Response("Not found", { status: 404 });
  const data = await readMedia(renderId, file as MediaFile);
  if (!data) return new Response("Not found", { status: 404 });
  const headers: Record<string, string> = {
    "Content-Type": "image/jpeg",
    "Content-Length": String(data.byteLength),
    "Cache-Control": "private, max-age=31536000, immutable",
    "X-Content-Type-Options": "nosniff",
  };
  if (download) headers["Content-Disposition"] = `attachment; filename="roomwright-${renderId}-${file}.jpg"`;
  return new Response(new Uint8Array(data), { headers });
}
