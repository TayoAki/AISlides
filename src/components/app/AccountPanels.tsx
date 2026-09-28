"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Check, Copy, KeyRound, LoaderCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/primitives";

const input =
  "w-full rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

async function send(url: string, method: string, body?: unknown) {
  const res = await fetch(url, { method, headers: body ? { "Content-Type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error?.message ?? "Something went wrong.");
  return data;
}

export function ProfileForm({ name }: { name: string | null }) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "saving" | "saved">("idle");
  const [error, setError] = useState<string | null>(null);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("saving");
    setError(null);
    try {
      await send("/api/account", "PATCH", { name: new FormData(e.currentTarget).get("name") });
      setState("saved");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setState("idle");
    }
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <label className="grid flex-1 gap-1.5 text-sm font-medium text-ink-2">
        Display name
        <input name="name" defaultValue={name ?? ""} maxLength={80} className={input} onChange={() => setState("idle")} />
      </label>
      <Button type="submit" variant="secondary" disabled={state === "saving"}>
        {state === "saving" ? <LoaderCircle className="size-4 animate-spin" /> : state === "saved" ? <Check className="size-4" /> : null}
        {state === "saved" ? "Saved" : "Save"}
      </Button>
      {error && <p className="text-sm text-danger">{error}</p>}
    </form>
  );
}

type Key = { id: string; name: string; prefix: string; created_at: number; last_used_at: number | null };

export function ApiKeys({ initial }: { initial: Key[] }) {
  const [keys, setKeys] = useState(initial);
  const [secret, setSecret] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function create(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    setError(null);
    try {
      const created = await send("/api/keys", "POST", { name: new FormData(form).get("name") });
      setSecret(created.secret);
      setCopied(false);
      const list = await send("/api/keys", "GET");
      setKeys(list.data);
      form.reset();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function revoke(id: string) {
    if (!confirm("Revoke this key? Apps using it will stop working immediately.")) return;
    try {
      await send(`/api/keys/${id}`, "DELETE");
      setKeys(keys.filter((k) => k.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {secret && (
        <div className="rounded-2xl border border-brand/30 bg-brand-soft/50 p-4">
          <p className="text-sm font-medium text-ink">Copy your new key now. For security, we won&apos;t show it again.</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="min-w-0 flex-1 truncate rounded-lg bg-surface px-3 py-2 font-mono text-sm text-ink">{secret}</code>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(secret);
                setCopied(true);
              }}
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
      )}
      {keys.length > 0 ? (
        <ul className="divide-y divide-line rounded-2xl border border-line">
          {keys.map((k) => (
            <li key={k.id} className="flex items-center gap-3 px-4 py-3">
              <KeyRound className="size-4 text-muted" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{k.name}</p>
                <p className="text-xs text-muted">
                  <span className="font-mono">{k.prefix}…</span> · created {new Date(k.created_at).toLocaleDateString()} ·{" "}
                  {k.last_used_at ? `last used ${new Date(k.last_used_at).toLocaleDateString()}` : "never used"}
                </p>
              </div>
              <button type="button" onClick={() => revoke(k.id)} className="rounded-full px-3 py-1.5 text-sm text-danger hover:bg-danger/10">
                Revoke
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">No API keys yet.</p>
      )}
      <form onSubmit={create} className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="grid flex-1 gap-1.5 text-sm font-medium text-ink-2">
          New key name
          <input name="name" required maxLength={60} placeholder="e.g. Listing tool" className={input} />
        </label>
        <Button type="submit" disabled={busy}>
          {busy && <LoaderCircle className="size-4 animate-spin" />} Create key
        </Button>
      </form>
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
}

export function DeleteAccount() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await send("/api/account", "DELETE", { password: new FormData(e.currentTarget).get("password") });
      router.replace("/");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }
  if (!open)
    return (
      <Button type="button" variant="secondary" onClick={() => setOpen(true)} className="text-danger">
        <Trash2 className="size-4" /> Delete my account
      </Button>
    );
  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-danger/30 bg-danger/5 p-4">
      <p className="text-sm text-ink-2">This permanently deletes your account, every design and uploaded photo, and your API keys. Enter your password to confirm.</p>
      <input name="password" type="password" required autoComplete="current-password" placeholder="Password" className={input} />
      {error && <p className="text-sm text-danger">{error}</p>}
      <div className="flex gap-2">
        <Button type="submit" disabled={busy} className="bg-danger text-white hover:bg-danger/90">
          {busy && <LoaderCircle className="size-4 animate-spin" />} Delete permanently
        </Button>
        <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
