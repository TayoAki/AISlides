import { ButtonLink, Container } from "@/components/ui/primitives";

export function CtaBand({
  title = "Your space, reimagined in the next minute.",
  text = "Upload a photo, pick a direction and compare the results side by side. Free while we're in beta.",
  primary = { label: "Start designing free", href: "/signup" },
  secondary = { label: "See pricing", href: "/pricing" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-brand-ink sm:px-14">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/30 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-5xl">{title}</h2>
            <p className="mt-4 text-lg opacity-85">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="inverse" size="lg">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="onDark" size="lg">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
