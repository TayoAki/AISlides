import { NextResponse } from "next/server";
import { z } from "zod";
import { destroySession, findUserByEmail, verifyPassword } from "@/lib/server/auth";
import { getDb } from "@/lib/server/db";
import { deleteRenderMedia } from "@/lib/server/storage";
import { jsonError, sameOrigin, sessionUser } from "@/lib/server/http";

export async function PATCH(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const parsed = z.object({ name: z.string().trim().max(80) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError(400, "invalid_request", "Names can be up to 80 characters.");
  getDb().prepare("UPDATE users SET name = ? WHERE id = ?").run(parsed.data.name || null, user.id);
  return NextResponse.json({ ok: true });
}

/** Permanently deletes the account, its designs and their files. */
export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return jsonError(403, "forbidden", "Cross-site request blocked.");
  const user = sessionUser(request);
  if (!user) return jsonError(401, "unauthorized", "Please log in.");
  const parsed = z.object({ password: z.string().max(200) }).safeParse(await request.json().catch(() => null));
  const record = findUserByEmail(user.email);
  if (!parsed.success || !record || !(await verifyPassword(parsed.data.password, record.password_hash)))
    return jsonError(401, "invalid_credentials", "That password isn't right.");
  const db = getDb();
  const renders = db.prepare("SELECT id FROM renders WHERE user_id = ?").all(user.id) as { id: string }[];
  db.prepare("DELETE FROM users WHERE id = ?").run(user.id);
  await Promise.all(renders.map((r) => deleteRenderMedia(r.id)));
  await destroySession();
  return NextResponse.json({ ok: true });
}
