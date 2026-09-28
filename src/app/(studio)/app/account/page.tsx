import Link from "next/link";
import type { ReactNode } from "react";
import { ApiKeys, DeleteAccount, ProfileForm } from "@/components/app/AccountPanels";
import { requireUser } from "@/lib/server/auth";
import { usageFor } from "@/lib/server/renders";
import { listApiKeys } from "@/lib/server/api-keys";
import { Badge } from "@/components/ui/primitives";

function Panel({ title, text, children }: { title: string; text?: ReactNode; children: ReactNode }) {
  return (
    <section className="grid gap-6 rounded-[1.5rem] border border-line bg-surface p-6 shadow-soft md:grid-cols-[260px_1fr]">
      <div>
        <h2 className="text-xl text-ink">{title}</h2>
        {text && <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default async function AccountPage() {
  const user = await requireUser("/app/account");
  const usage = usageFor(user.id);
  const keys = listApiKeys(user.id);
  const resets = new Date(usage.resetsAt).toUTCString().replace(":00 GMT", " UTC").slice(17);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl text-ink sm:text-4xl">Account</h1>
        <p className="mt-2 text-muted">{user.email}</p>
      </div>

      <Panel title="Profile">
        <ProfileForm name={user.name} />
      </Panel>

      <Panel title="Plan" text={<>Paid plans are launching soon. See <Link href="/pricing" className="text-brand underline underline-offset-4">pricing</Link>.</>}>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-2xl text-ink">Free beta</p>
          <Badge tone="brand">Active</Badge>
        </div>
        <p className="mt-2 text-sm text-muted">Every live tool, {usage.limit} renders a day, no card on file.</p>
        <div className="mt-5">
          <div className="flex justify-between text-sm">
            <span className="text-ink-2">Today&apos;s renders</span>
            <span className="text-muted">
              {usage.used} / {usage.limit}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-brand" style={{ width: `${Math.min(100, (usage.used / usage.limit) * 100)}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted">Resets daily at {resets}. Failed renders don&apos;t count.</p>
        </div>
      </Panel>

      <Panel
        title="API keys"
        text={
          <>
            Use keys with the <Link href="/docs/api" className="text-brand underline underline-offset-4">REST API</Link>. API renders count toward the same daily allowance.
          </>
        }
      >
        <ApiKeys initial={keys} />
      </Panel>

      <Panel title="Delete account" text="Removes your account and everything in it. This can't be undone.">
        <DeleteAccount />
      </Panel>
    </div>
  );
}
