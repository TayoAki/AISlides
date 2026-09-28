import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Check } from "lucide-react";
import { AuthForm } from "@/components/app/AuthForm";
import { currentUser } from "@/lib/server/auth";

export const metadata: Metadata = {
  title: "Create your free account",
  description: "Sign up in seconds and redesign your first room, facade or garden from a photo. Free during the beta.",
};

export default async function SignupPage({ searchParams }: PageProps<"/signup">) {
  const { next } = await searchParams;
  if (await currentUser()) redirect("/app");
  return (
    <>
      <h1 className="text-4xl text-ink">Start designing free</h1>
      <p className="mt-2 text-muted">Everything is free while we&apos;re in beta. No card needed.</p>
      <ul className="mb-8 mt-5 grid gap-2 text-sm text-ink-2">
        {["Redesign, stage, repaint and swap materials", "Interiors, exteriors and gardens", "Your designs saved to your account"].map((t) => (
          <li key={t} className="flex items-center gap-2">
            <Check className="size-4 text-brand" aria-hidden />
            {t}
          </li>
        ))}
      </ul>
      <AuthForm mode="signup" next={typeof next === "string" ? next : undefined} />
      <p className="mt-6 text-center text-xs text-muted">
        By creating an account you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>.
      </p>
    </>
  );
}
