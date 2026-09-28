import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/app/AuthForm";
import { currentUser } from "@/lib/server/auth";

export const metadata: Metadata = { title: "Log in", robots: { index: false } };

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const { next } = await searchParams;
  if (await currentUser()) redirect(typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/app");
  return (
    <>
      <h1 className="text-4xl text-ink">Welcome back</h1>
      <p className="mb-8 mt-2 text-muted">Log in to pick up where you left off.</p>
      <AuthForm mode="login" next={typeof next === "string" ? next : undefined} />
    </>
  );
}
