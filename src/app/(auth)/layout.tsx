import { Logo } from "@/components/site/Logo";
import { Photo } from "@/components/content/Photo";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-5 py-8 sm:px-10">
        <Logo />
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">{children}</div>
        <p className="text-xs text-muted">AI-generated designs are visual concepts. Confirm structural and code questions with a professional.</p>
      </div>
      <div className="relative hidden overflow-hidden bg-bg-deep lg:block">
        <Photo image="living-japandi" fill eager sizes="50vw" />
        <div className="absolute inset-x-8 bottom-8 rounded-2xl bg-surface/90 p-5 shadow-lift backdrop-blur">
          <p className="font-display text-xl text-ink">Your walls, windows and layout stay put.</p>
          <p className="mt-1 text-sm text-muted">Only the design changes: furniture, finishes, color and light.</p>
        </div>
      </div>
    </div>
  );
}
