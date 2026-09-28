import "server-only";
import { getDb, now } from "./db";
import { newId, randomToken, sha256 } from "./ids";

export type ApiKeyRow = { id: string; name: string; prefix: string; created_at: number; last_used_at: number | null };

export function listApiKeys(userId: string) {
  return getDb()
    .prepare("SELECT id, name, prefix, created_at, last_used_at FROM api_keys WHERE user_id = ? AND revoked_at IS NULL ORDER BY created_at DESC")
    .all(userId) as ApiKeyRow[];
}

/** Creates a key and returns the secret once; only its hash is stored. */
export function createApiKey(userId: string, name: string) {
  const active = listApiKeys(userId).length;
  if (active >= 10) throw new Error("You can have up to 10 active API keys. Revoke one first.");
  const secret = `rw_live_${randomToken(24)}`;
  const id = newId("k");
  getDb()
    .prepare("INSERT INTO api_keys (id, user_id, name, prefix, key_hash, created_at) VALUES (?, ?, ?, ?, ?, ?)")
    .run(id, userId, name, secret.slice(0, 12), sha256(secret), now());
  return { id, secret };
}

export function revokeApiKey(userId: string, id: string) {
  return getDb().prepare("UPDATE api_keys SET revoked_at = ? WHERE id = ? AND user_id = ? AND revoked_at IS NULL").run(now(), id, userId).changes > 0;
}
