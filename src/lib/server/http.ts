import "server-only";
import { NextResponse } from "next/server";
import { getDb, now } from "./db";
import { sha256 } from "./ids";
import { userForSessionToken, SESSION_COOKIE, type User } from "./auth";
import { recoverRenders } from "./renders";

export function jsonError(status: number, code: string, message: string, extra?: Record<string, unknown>) {
  return NextResponse.json({ error: { code, message, ...extra } }, { status });
}

/** Rejects cross-site browser requests to cookie-authenticated endpoints. */
export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function sessionUser(request: Request): User | null {
  const cookie = request.headers.get("cookie") ?? "";
  const token = cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${SESSION_COOKIE}=`))
    ?.slice(SESSION_COOKIE.length + 1);
  recoverRenders();
  return userForSessionToken(token ? decodeURIComponent(token) : undefined);
}

/** Resolves the user for a public API request from its Bearer key. */
export function apiKeyUser(request: Request): User | null {
  const header = request.headers.get("authorization") ?? "";
  const match = header.match(/^Bearer\s+(rw_[A-Za-z0-9_-]{20,})$/);
  if (!match) return null;
  recoverRenders();
  const db = getDb();
  const row = db
    .prepare(
      `SELECT k.id AS key_id, u.id, u.email, u.name, u.created_at FROM api_keys k JOIN users u ON u.id = k.user_id
       WHERE k.key_hash = ? AND k.revoked_at IS NULL`,
    )
    .get(sha256(match[1])) as (User & { key_id: string }) | undefined;
  if (!row) return null;
  db.prepare("UPDATE api_keys SET last_used_at = ? WHERE id = ?").run(now(), row.key_id);
  return { id: row.id, email: row.email, name: row.name, created_at: row.created_at };
}

// Small in-memory sliding-window limiter for abuse-prone endpoints (login, forms).
const buckets = new Map<string, number[]>();
export function rateLimit(key: string, max: number, windowMs: number) {
  const t = Date.now();
  const hits = (buckets.get(key) ?? []).filter((h) => t - h < windowMs);
  if (hits.length >= max) {
    buckets.set(key, hits);
    return false;
  }
  hits.push(t);
  buckets.set(key, hits);
  if (buckets.size > 5000) for (const [k, v] of buckets) if (!v.some((h) => t - h < windowMs)) buckets.delete(k);
  return true;
}

export function clientIp(request: Request) {
  return (request.headers.get("x-forwarded-for")?.split(",")[0] ?? request.headers.get("x-real-ip") ?? "local").trim();
}
