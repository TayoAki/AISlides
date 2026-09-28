import { NextResponse } from "next/server";
import { getDb } from "@/lib/server/db";
import { providerStatus } from "@/lib/server/ai";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    getDb().prepare("SELECT 1").get();
    const provider = providerStatus();
    return NextResponse.json({ ok: true, ai: provider.id, demo: provider.demo }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("health check failed", e);
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
