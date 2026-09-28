import Link from "next/link";
import { helpCategories } from "@/content/pages/help";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { FaqList } from "@/components/content/Faq";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Help desk",
  description: "Answers about photos, tools, results, your account, the API and privacy, plus a contact form to reach the Roomwright team directly.",
  path: "/help",
});

export default function HelpPage() {
  return (
    <>
      <section className="bg-grain border-b border-line/60">
        <Container className="pb-12 pt-10">
          <Breadcrumbs items={[{ label: "Help Desk", href: "/help" }]} />
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Help desk</Eyebrow>
            <h1 className="mt-3 text-4xl leading-[1.05] text-ink sm:text-[3.4rem]">How can we help?</h1>
            <p className="mt-5 text-lg text-ink-2">Browse answers by topic, or send us a message at the bottom of the page. A person reads every one.</p>
          </div>
          <nav aria-label="Help topics" className="mt-8 flex flex-wrap gap-2">
            {helpCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-2 hover:border-brand hover:text-ink">
                <Icon name={c.icon} className="size-4 text-brand" />
                {c.title}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-ink">
              Contact us
            </a>
          </nav>
        </Container>
      </section>
      <Container className="flex flex-col gap-14 py-16">
        {helpCategories.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-24 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon name={c.icon} />
              </span>
              <h2 className="mt-3 text-2xl text-ink">{c.title}</h2>
            </div>
            <FaqList faqs={c.faqs} jsonLd={false} />
          </section>
        ))}
        <section id="contact" className="scroll-mt-24 grid gap-10 rounded-[2rem] border border-line bg-surface p-8 shadow-soft sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl text-ink">Contact the team</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Questions, bug reports, privacy requests, press or partnership inquiries all land here. If it&apos;s about a specific design, include the link from your browser&apos;s address bar.
            </p>
            <p className="mt-4 text-sm text-muted">
              Looking for the API? See the <Link href="/docs/api" className="text-brand underline underline-offset-4">documentation</Link>.
            </p>
          </div>
          <LeadForm kind="support" submitLabel="Send message" successText="Thanks — your message is in. We'll reply by email." messageRequired />
        </section>
      </Container>
    </>
  );
}
