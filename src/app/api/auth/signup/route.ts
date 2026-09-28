import { NextResponse } from "next/server";
import { z } from "zod";
import { createSession, createUser, findUserByEmail } from "@/lib/server/auth";
import { clientIp, jsonError, rateLimit, sameOrigin } from "@/lib/server/http";

const Body = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(200),
  password: z.string().min(8, "Use at least 8 characters for your password.").max(200),
  name: z.string().trim().max(80).optional(),
});

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  if (!rateLimit(`signup:${clientIp(request)}`, 10, 60 * 60_000))
    return jsonError(429, "rate_limited", "Too many sign-up attempts. Please try again later.");
  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError(400, "invalid_request", parsed.error.issues[0]?.message ?? "Check the form and try again.");
  const { email, password, name } = parsed.data;
  if (findUserByEmail(email)) return jsonError(409, "email_taken", "An account with that email already exists. Try logging in.");
  const userId = await createUser(email, password, name || null);
  await createSession(userId);
  return NextResponse.json({ ok: true });
}
