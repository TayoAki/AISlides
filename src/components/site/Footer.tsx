import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER_GROUPS } from "@/content/nav";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-bg-deep">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-xs shrink-0">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{BRAND.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-strong">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden />
              Free during public beta
            </p>
          </div>
          <nav aria-label="Footer" className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink">{group.title}</p>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted transition-colors hover:text-ink" prefetch={false}>
                        {link.label}
                        {link.soon && <span className="ml-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-strong">Soon</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. AI-generated designs are visual concepts, not construction documents.
          </p>
          <p>
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
            <span className="mx-2">·</span>
            <Link href="/help" className="hover:text-ink">Help</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
