import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-8", className)} aria-hidden>
      <rect width="32" height="32" rx="8" className="fill-brand" />
      <path d="M8.5 25.5V15a7.5 7.5 0 0 1 15 0v10.5" fill="none" className="stroke-bg" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M13.25 25.5v-8.25a2.75 2.75 0 0 1 5.5 0v8.25" fill="none" className="stroke-bg" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24.25" cy="7.75" r="2.4" className="fill-accent" />
    </svg>
  );
}

export function Logo({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-2.5 text-ink", className)} aria-label={`${BRAND.name} home`}>
      <LogoMark />
      <span className="font-display text-[1.35rem] font-semibold tracking-tight">{BRAND.name}</span>
    </Link>
  );
}
