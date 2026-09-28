import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, now } from "@/lib/server/db";
import { newId } from "@/lib/server/ids";
import { clientIp, jsonError, rateLimit, sameOrigin } from "@/lib/server/http";

const Body = z.object({
  kind: z.string().trim().regex(/^[a-z0-9:/-]{2,80}$/),
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(200),
  name: z.string().trim().max(120).optional(),
  company: z.string().trim().max(160).optional(),
  website: z.string().trim().max(300).optional(),
  message: z.string().trim().max(4000).optional(),
  company_url: z.string().optional(), // honeypot
});

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  if (!rateLimit(`lead:${clientIp(request)}`, 12, 60 * 60_000))
    return jsonError(429, "rate_limited", "Too many submissions. Please try again later.");
  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError(400, "invalid_request", parsed.error.issues[0]?.message ?? "Check the form and try again.");
  const d = parsed.data;
  // Bots fill the hidden field; pretend success so they don't retry.
  if (d.company_url) return NextResponse.json({ ok: true });
  getDb()
    .prepare("INSERT INTO leads (id, kind, name, email, company, website, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .run(newId("l"), d.kind, d.name || null, d.email, d.company || null, d.website || null, d.message || null, now());
  return NextResponse.json({ ok: true });
}
