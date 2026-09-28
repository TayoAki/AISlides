"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Plus } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { buttonClass } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export function AppNav({ email, usage, admin }: { email: string; usage: { used: number; limit: number }; admin: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const links = [
    { href: "/app", label: "My designs", active: pathname === "/app" || pathname.startsWith("/app/designs") },
    { href: "/app/account", label: "Account", active: pathname.startsWith("/app/account") },
    ...(admin ? [{ href: "/app/admin", label: "Admin", active: pathname.startsWith("/app/admin") }] : []),
  ];
  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/");
    router.refresh();
  }
  const pct = Math.min(100, Math.round((usage.used / usage.limit) * 100));
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo href="/app" />
        <nav aria-label="App" className="ml-2 hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn("rounded-full px-3.5 py-2 text-sm", l.active ? "bg-ink/5 font-medium text-ink" : "text-ink-2 hover:text-ink")}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden text-right md:block" title={`${usage.used} of ${usage.limit} renders used today`}>
            <p className="text-xs text-muted">
              {usage.limit - usage.used} of {usage.limit} renders left today
            </p>
            <div className="mt-1 h-1.5 w-40 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <Link href="/app/new" className={buttonClass("primary", "sm")}>
            <Plus className="size-4" /> New design
          </Link>
          <button type="button" onClick={logout} className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-ink/5 hover:text-ink" title={`Log out ${email}`} aria-label="Log out">
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
      <nav aria-label="App" className="flex gap-1 overflow-x-auto px-4 pb-2 sm:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={cn("rounded-full px-3 py-1.5 text-sm", l.active ? "bg-ink/5 font-medium text-ink" : "text-ink-2")}>
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
