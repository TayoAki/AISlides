import type { Metadata } from "next";
import { AppNav } from "@/components/app/AppNav";
import { isAdmin, requireUser } from "@/lib/server/auth";
import { usageFor } from "@/lib/server/renders";

export const metadata: Metadata = { title: "Studio", robots: { index: false, follow: false } };

export default async function AppLayout({ children }: LayoutProps<"/app">) {
  const user = await requireUser();
  const usage = usageFor(user.id);
  return (
    <div className="flex min-h-screen flex-col">
      <AppNav email={user.email} usage={usage} admin={isAdmin(user)} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
