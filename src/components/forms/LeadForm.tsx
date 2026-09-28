"use client";

import { useState, type FormEvent } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/primitives";

const input =
  "w-full rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function LeadForm({
  kind,
  submitLabel = "Send",
  successText = "Thanks — we'll be in touch soon.",
  askCompany = false,
  askWebsite = false,
  messageLabel = "Message",
  messageRequired = false,
  compact = false,
}: {
  kind: string;
  submitLabel?: string;
  successText?: string;
  askCompany?: boolean;
  askWebsite?: boolean;
  messageLabel?: string | null;
  messageRequired?: boolean;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body?.error?.message ?? "Something went wrong. Please try again.");
      setState("done");
    } catch (err) {
      setError((err as Error).message);
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-brand/25 bg-brand-soft/60 p-5 text-ink" role="status">
        <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-ink">
          <Check className="size-4" />
        </span>
        <p>{successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3 sm:grid-cols-[1fr_auto]" : "grid gap-3 sm:grid-cols-2"}>
        {!compact && (
          <label className="grid gap-1.5 text-sm font-medium text-ink-2">
            Name
            <input name="name" autoComplete="name" className={input} placeholder="Your name" maxLength={120} />
          </label>
        )}
        <label className={compact ? "sr-only" : "grid gap-1.5 text-sm font-medium text-ink-2"}>
          {!compact && "Email"}
          <input name="email" type="email" required autoComplete="email" className={input} placeholder="you@example.com" maxLength={200} aria-label="Email" />
        </label>
        {compact && (
          <Button type="submit" disabled={state === "sending"}>
            {state === "sending" && <LoaderCircle className="size-4 animate-spin" />}
            {submitLabel}
          </Button>
        )}
      </div>
      {!compact && (askCompany || askWebsite) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {askCompany && (
            <label className="grid gap-1.5 text-sm font-medium text-ink-2">
              Company
              <input name="company" autoComplete="organization" className={input} placeholder="Company name" maxLength={160} />
            </label>
          )}
          {askWebsite && (
            <label className="grid gap-1.5 text-sm font-medium text-ink-2">
              Website or profile
              <input name="website" className={input} placeholder="https://" maxLength={300} />
            </label>
          )}
        </div>
      )}
      {!compact && messageLabel && (
        <label className="grid gap-1.5 text-sm font-medium text-ink-2">
          {messageLabel}
          <textarea name="message" rows={4} required={messageRequired} className={input} maxLength={4000} />
        </label>
      )}
      {/* Honeypot for bots. */}
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {error && (
        <p className="text-sm text-danger" role="alert">
          {error}
        </p>
      )}
      {!compact && (
        <div>
          <Button type="submit" disabled={state === "sending"}>
            {state === "sending" && <LoaderCircle className="size-4 animate-spin" />}
            {submitLabel}
          </Button>
        </div>
      )}
    </form>
  );
}
