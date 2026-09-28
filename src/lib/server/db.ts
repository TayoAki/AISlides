import "server-only";
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

export const DATA_DIR = path.resolve(process.env.DATA_DIR ?? path.join(process.cwd(), ".data"));

// Each entry runs once, in order; PRAGMA user_version records progress.
const MIGRATIONS: string[] = [
  `
  CREATE TABLE users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    name TEXT,
    password_hash TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
  CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX sessions_user ON sessions(user_id);
  CREATE TABLE renders (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    source TEXT NOT NULL DEFAULT 'app',
    tool TEXT NOT NULL,
    space TEXT NOT NULL,
    options TEXT NOT NULL,
    prompt TEXT,
    has_input INTEGER NOT NULL DEFAULT 0,
    has_reference INTEGER NOT NULL DEFAULT 0,
    input_width INTEGER,
    input_height INTEGER,
    outputs INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL,
    error TEXT,
    provider TEXT,
    demo INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL,
    started_at INTEGER,
    completed_at INTEGER
  );
  CREATE INDEX renders_user_created ON renders(user_id, created_at DESC);
  CREATE INDEX renders_status ON renders(status);
  CREATE TABLE api_keys (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    prefix TEXT NOT NULL,
    key_hash TEXT NOT NULL UNIQUE,
    created_at INTEGER NOT NULL,
    last_used_at INTEGER,
    revoked_at INTEGER
  );
  CREATE INDEX api_keys_user ON api_keys(user_id);
  CREATE TABLE leads (
    id TEXT PRIMARY KEY,
    kind TEXT NOT NULL,
    name TEXT,
    email TEXT NOT NULL,
    company TEXT,
    website TEXT,
    message TEXT,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX leads_created ON leads(created_at DESC);
  `,
];

function migrate(db: Database.Database) {
  const current = db.pragma("user_version", { simple: true }) as number;
  for (let v = current; v < MIGRATIONS.length; v++) {
    db.transaction(() => {
      db.exec(MIGRATIONS[v]);
      db.pragma(`user_version = ${v + 1}`);
    })();
  }
}

const globalForDb = globalThis as unknown as { __rwDb?: Database.Database };

/** Lazily opens the database so builds never touch the data directory. */
export function getDb(): Database.Database {
  if (globalForDb.__rwDb) return globalForDb.__rwDb;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(path.join(DATA_DIR, "roomwright.db"));
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");
  db.pragma("busy_timeout = 5000");
  migrate(db);
  globalForDb.__rwDb = db;
  return db;
}

export const now = () => Date.now();
