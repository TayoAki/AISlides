import { NextResponse } from "next/server";
import { z } from "zod";
import { createApiKey, listApiKeys } from "@/lib/server/api-keys";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

export async function GET(request: Request) {
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  return NextResponse.json({ data: listApiKeys(user.id) });
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const parsed = z.object({ name: z.string().trim().min(1, "Give the key a name.").max(60) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError(400, "invalid_request", parsed.error.issues[0]?.message ?? "Give the key a name.");
  try {
    const key = createApiKey(user.id, parsed.data.name);
    return NextResponse.json(key, { status: 201 });
  } catch (e) {
    return jsonError(400, "invalid_request", (e as Error).message);
  }
}
