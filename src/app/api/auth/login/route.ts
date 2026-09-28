import { NextResponse } from "next/server";
import { z } from "zod";
import { burnPasswordCheck, createSession, findUserByEmail, verifyPassword } from "@/lib/server/auth";
import { clientIp, jsonError, rateLimit, sameOrigin } from "@/lib/server/http";

const Body = z.object({
  email: z.string().trim().toLowerCase().max(200),
  password: z.string().max(200),
});

export async function POST(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError(400, "invalid_request", "Enter your email and password.");
  const { email, password } = parsed.data;
  if (!rateLimit(`login:${clientIp(request)}`, 30, 15 * 60_000) || !rateLimit(`login:${email}`, 10, 15 * 60_000))
    return jsonError(429, "rate_limited", "Too many attempts. Please wait a few minutes and try again.");
  const user = findUserByEmail(email);
  const ok = user ? await verifyPassword(password, user.password_hash) : (await burnPasswordCheck(password), false);
  if (!user || !ok) return jsonError(401, "invalid_credentials", "That email and password don't match an account.");
  await createSession(user.id);
  return NextResponse.json({ ok: true });
}
