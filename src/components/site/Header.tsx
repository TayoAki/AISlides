"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonClass } from "@/components/ui/primitives";
import { FEATURE_LINKS, FREE_TOOL_LINKS, INSPIRATION_LINKS, USE_CASE_LINKS, type NavLink } from "@/content/nav";
import { cn } from "@/lib/cn";

type MenuGroup = { title: string; links: NavLink[] };
type Menu = { id: string; label: string; groups: MenuGroup[]; footer: NavLink };

const byHref = (hrefs: string[]) => hrefs.map((h) => USE_CASE_LINKS.find((l) => l.href === h)!).filter(Boolean);

const MENUS: Menu[] = [
  {
    id: "features",
    label: "Features",
    groups: [
      { title: "Transform", links: FEATURE_LINKS.slice(1, 10) },
      { title: "Create & refine", links: FEATURE_LINKS.slice(10) },
    ],
    footer: { label: "See every feature", href: "/ai-features" },
  },
  {
    id: "use-cases",
    label: "Use cases",
    groups: [
      {
        title: "Spaces",
        links: byHref(["/interior-design-ai", "/exterior-ai", "/landscaping-ai", "/room-design-ai", "/living-room-design-ai", "/kitchen-design-ai", "/bathroom-design-ai"]),
      },
      {
        title: "Surfaces & edits",
        links: byHref(["/cabinet-design-ai", "/wall-ai", "/flooring-ai", "/countertop-ai", "/furniture-replacement-ai", "/partial-remodel-ai"]),
      },
      {
        title: "For professionals",
        links: byHref(["/real-estate-ai", "/virtual-staging-ai", "/for/realtors", "/for/renovators", "/for/interior-designers", "/for/architects", "/for/contractors", "/for/builders"]),
      },
    ],
    footer: { label: "Explore all use cases", href: "/ai-use-cases" },
  },
  {
    id: "resources",
    label: "Resources",
    groups: [
      { title: "Inspiration", links: INSPIRATION_LINKS },
      { title: "Free AI tools", links: FREE_TOOL_LINKS.slice(1) },
      {
        title: "Learn",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Help Desk", href: "/help" },
          { label: "API Documentation", href: "/docs/api" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
    ],
    footer: { label: "Browse free AI tools", href: "/free-ai-tools" },
  },
];

function MenuLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group flex items-center justify-between gap-3 rounded-lg px-2.5 py-1.5 text-[0.93rem] text-ink-2 transition-colors hover:bg-brand-soft/60 hover:text-ink"
    >
      <span>{link.label}</span>
      {link.soon && <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-accent-strong">Soon</span>}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const hover = (id: string | null) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(id), id ? 60 : 160);
  };
  const close = () => setOpen(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <div ref={navRef} className="mx-auto flex h-16 w-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 lg:flex">
          {MENUS.map((menu) => (
            <div key={menu.id} className="relative" onMouseEnter={() => hover(menu.id)} onMouseLeave={() => hover(null)}>
              <button
                type="button"
                aria-expanded={open === menu.id}
                aria-controls={`menu-${menu.id}`}
                onClick={() => setOpen(open === menu.id ? null : menu.id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] text-ink-2 transition-colors hover:text-ink",
                  open === menu.id && "bg-ink/5 text-ink",
                )}
              >
                {menu.label}
                <ChevronDown className={cn("size-4 transition-transform", open === menu.id && "rotate-180")} aria-hidden />
              </button>
              <div
                id={`menu-${menu.id}`}
                hidden={open !== menu.id}
                className="absolute left-0 top-full pt-3"
              >
                <div className="rounded-2xl border border-line bg-surface p-4 shadow-lift" style={{ width: menu.groups.length * 232 + 16 }}>
                  <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${menu.groups.length}, minmax(0, 1fr))` }}>
                    {menu.groups.map((g) => (
                      <div key={g.title}>
                        <p className="mb-1.5 px-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">{g.title}</p>
                        <div className="flex flex-col">
                          {g.links.map((l) => (
                            <MenuLink key={l.href} link={l} onNavigate={close} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={menu.footer.href}
                    onClick={close}
                    className="mt-3 flex items-center justify-between rounded-xl bg-bg px-3.5 py-2.5 text-sm font-medium text-brand hover:bg-brand-soft/60"
                  >
                    {menu.footer.label}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <Link href="/pricing" className="rounded-full px-3.5 py-2 text-[0.95rem] text-ink-2 hover:text-ink">
            Pricing
          </Link>
          <Link href="/enterprise" className="rounded-full px-3.5 py-2 text-[0.95rem] text-ink-2 hover:text-ink">
            Enterprise
          </Link>
        </nav>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link href="/login" className={buttonClass("ghost", "sm")}>
            Log in
          </Link>
          <Link href="/signup" className={buttonClass("primary", "sm")}>
            Start free
          </Link>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobile && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg px-4 pb-10 pt-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {MENUS.map((menu) => (
              <details key={menu.id} className="group rounded-2xl border border-line bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium text-ink">
                  {menu.label}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <div className="flex flex-col gap-3 px-2 pb-3">
                  {menu.groups.map((g) => (
                    <div key={g.title}>
                      <p className="px-2.5 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">{g.title}</p>
                      {g.links.map((l) => (
                        <MenuLink key={l.href} link={l} onNavigate={() => setMobile(false)} />
                      ))}
                    </div>
                  ))}
                  <MenuLink link={menu.footer} onNavigate={() => setMobile(false)} />
                </div>
              </details>
            ))}
            <Link href="/pricing" className="rounded-2xl border border-line bg-surface px-4 py-3.5 text-base font-medium text-ink">
              Pricing
            </Link>
            <Link href="/enterprise" className="rounded-2xl border border-line bg-surface px-4 py-3.5 text-base font-medium text-ink">
              Enterprise
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/login" className={buttonClass("secondary", "md")}>
                Log in
              </Link>
              <Link href="/signup" className={buttonClass("primary", "md")}>
                Start free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
