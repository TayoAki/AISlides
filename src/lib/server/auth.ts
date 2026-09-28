import "server-only";
import bcrypt from "bcryptjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getDb, now } from "./db";
import { newId, randomToken, sha256 } from "./ids";

export const SESSION_COOKIE = "rw_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30;

export type User = { id: string; email: string; name: string | null; created_at: number };

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 11);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

// Spend the same bcrypt time when an email does not exist, so login timing
// doesn't reveal which emails have accounts.
let dummyHash: Promise<string> | null = null;
export async function burnPasswordCheck(password: string) {
  dummyHash ??= bcrypt.hash("roomwright-timing-guard", 11);
  await bcrypt.compare(password, await dummyHash);
}

async function isSecureRequest() {
  const h = await headers();
  const proto = h.get("x-forwarded-proto")?.split(",")[0]?.trim();
  return proto === "https";
}

export async function createSession(userId: string) {
  const token = randomToken();
  const expires = now() + SESSION_TTL_MS;
  getDb()
    .prepare("INSERT INTO sessions (id, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)")
    .run(sha256(token), userId, expires, now());
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: await isSecureRequest(),
    path: "/",
    expires: new Date(expires),
  });
}

export async function destroySession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) getDb().prepare("DELETE FROM sessions WHERE id = ?").run(sha256(token));
  store.delete(SESSION_COOKIE);
}

export function userForSessionToken(token: string | undefined): User | null {
  if (!token) return null;
  const row = getDb()
    .prepare(
      `SELECT u.id, u.email, u.name, u.created_at, s.expires_at FROM sessions s
       JOIN users u ON u.id = s.user_id WHERE s.id = ?`,
    )
    .get(sha256(token)) as (User & { expires_at: number }) | undefined;
  if (!row) return null;
  if (row.expires_at < now()) {
    getDb().prepare("DELETE FROM sessions WHERE id = ?").run(sha256(token));
    return null;
  }
  return { id: row.id, email: row.email, name: row.name, created_at: row.created_at };
}

export async function currentUser(): Promise<User | null> {
  const store = await cookies();
  return userForSessionToken(store.get(SESSION_COOKIE)?.value);
}

/** For pages: returns the signed-in user or redirects to login. */
export async function requireUser(next = "/app"): Promise<User> {
  const user = await currentUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(next)}`);
  return user;
}

export function findUserByEmail(email: string) {
  return getDb().prepare("SELECT id, email, name, created_at, password_hash FROM users WHERE email = ?").get(email.trim().toLowerCase()) as
    | (User & { password_hash: string })
    | undefined;
}

export async function createUser(email: string, password: string, name: string | null) {
  const id = newId("u");
  getDb()
    .prepare("INSERT INTO users (id, email, name, password_hash, created_at) VALUES (?, ?, ?, ?, ?)")
    .run(id, email.trim().toLowerCase(), name, await hashPassword(password), now());
  return id;
}

export function isAdmin(user: User | null) {
  if (!user) return false;
  const admins = (process.env.ADMIN_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(user.email.toLowerCase());
}
