import { NextResponse } from "next/server";
import { destroySession } from "@/lib/server/auth";
import { jsonError, sameOrigin } from "@/lib/server/http";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  await destroySession();
  return NextResponse.json({ ok: true });
}
