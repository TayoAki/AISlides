import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Variant = "primary" | "secondary" | "ghost" | "accent" | "inverse" | "onDark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-brand-ink hover:bg-brand-strong shadow-soft",
  secondary: "bg-surface text-ink border border-line-strong hover:border-ink/40 hover:bg-surface-2",
  ghost: "text-ink hover:bg-ink/5",
  accent: "bg-accent text-white hover:bg-accent-strong shadow-soft",
  inverse: "bg-bg text-ink hover:bg-surface",
  onDark: "border border-brand-ink/30 text-brand-ink hover:bg-brand-ink/10",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.95rem] gap-2",
  lg: "h-13 px-6 text-base gap-2.5",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );
}

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: { href: string; variant?: Variant; size?: Size; className?: string; children: ReactNode } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant,
  size,
  className,
  ...rest
}: { variant?: Variant; size?: Size } & ComponentProps<"button">) {
  return <button className={buttonClass(variant, size, className)} {...rest} />;
}

export function Badge({ tone = "neutral", className, children }: { tone?: "neutral" | "brand" | "accent" | "gold"; className?: string; children: ReactNode }) {
  const tones = {
    neutral: "bg-surface text-ink-2 border border-line",
    brand: "bg-brand-soft text-brand-strong",
    accent: "bg-accent-soft text-accent-strong",
    gold: "bg-gold/15 text-gold",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", tones[tone], className)}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong", className)}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <Heading className="text-3xl leading-[1.12] text-ink sm:text-[2.6rem]">{title}</Heading>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-[var(--radius-card)] border border-line bg-surface shadow-soft", className)}>{children}</div>;
}
