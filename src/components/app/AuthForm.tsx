"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/primitives";

const input =
  "w-full rounded-xl border border-line-strong bg-surface px-3.5 py-3 text-[0.97rem] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function safeNext(next: string | undefined) {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : "/app";
}

export function AuthForm({ mode, next }: { mode: "login" | "signup"; next?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error?.message ?? "Something went wrong. Please try again.");
      router.replace(safeNext(next));
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {mode === "signup" && (
        <label className="grid gap-1.5 text-sm font-medium text-ink-2">
          Name <span className="sr-only">(optional)</span>
          <input name="name" autoComplete="name" className={input} placeholder="What should we call you?" maxLength={80} />
        </label>
      )}
      <label className="grid gap-1.5 text-sm font-medium text-ink-2">
        Email
        <input name="email" type="email" required autoComplete="email" className={input} placeholder="you@example.com" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-2">
        Password
        <input
          name="password"
          type="password"
          required
          minLength={mode === "signup" ? 8 : undefined}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          className={input}
          placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
        />
      </label>
      {error && (
        <p className="rounded-xl bg-danger/10 px-3.5 py-2.5 text-sm text-danger" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" size="lg" disabled={busy} className="mt-1 w-full">
        {busy && <LoaderCircle className="size-4 animate-spin" />}
        {mode === "signup" ? "Create free account" : "Log in"}
      </Button>
      <p className="text-center text-sm text-muted">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href={`/login${next ? `?next=${encodeURIComponent(next)}` : ""}`} className="font-medium text-brand hover:underline">
              Log in
            </Link>
          </>
        ) : (
          <>
            New to Roomwright?{" "}
            <Link href={`/signup${next ? `?next=${encodeURIComponent(next)}` : ""}`} className="font-medium text-brand hover:underline">
              Create a free account
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
