import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { buttonClass } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo />
      <p className="font-display text-7xl text-accent">404</p>
      <h1 className="text-3xl text-ink">This room doesn&apos;t exist yet</h1>
      <p className="max-w-md text-muted">The page you&apos;re looking for has moved or never existed. Try the home page, or start a new design.</p>
      <div className="flex gap-3">
        <Link href="/" className={buttonClass("secondary")}>
          Home
        </Link>
        <Link href="/app/new" className={buttonClass("primary")}>
          New design
        </Link>
      </div>
    </div>
  );
}
