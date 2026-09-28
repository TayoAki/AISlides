// Pricing shown on /pricing and the home page. Nothing is charged during the
// beta: every account gets the Free plan's allowance. Edit prices here.

export type Plan = {
  id: "free" | "pro" | "studio" | "enterprise";
  name: string;
  priceMonthly: number | null; // USD, null = custom
  priceYearly: number | null; // USD per month when billed yearly
  blurb: string;
  renders: string;
  features: string[];
  highlight?: boolean;
  cta: { label: string; href: string };
};

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    blurb: "Everything you need to try ideas on your own space.",
    renders: "20 renders a day during beta",
    features: [
      "All live design tools",
      "Interiors, exteriors and gardens",
      "Standard resolution downloads",
      "Design history",
      "API access during beta",
      "Personal and commercial use during beta",
    ],
    cta: { label: "Start free", href: "/signup" },
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 19,
    priceYearly: 15,
    blurb: "For homeowners and solo pros working on real projects.",
    renders: "600 renders a month",
    features: [
      "Everything in Free",
      "High-resolution downloads",
      "Commercial license",
      "Priority rendering queue",
      "Unlimited projects",
    ],
    highlight: true,
    cta: { label: "Start free — upgrade later", href: "/signup?plan=pro" },
  },
  {
    id: "studio",
    name: "Studio",
    priceMonthly: 49,
    priceYearly: 39,
    blurb: "For agents, designers and contractors who present to clients.",
    renders: "2,500 renders a month",
    features: [
      "Everything in Pro",
      "5 team seats",
      "API access",
      "Branded client exports",
      "Priority support",
    ],
    cta: { label: "Start free — upgrade later", href: "/signup?plan=studio" },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: null,
    priceYearly: null,
    blurb: "For brokerages, builders and platforms at volume.",
    renders: "Volume pricing",
    features: [
      "White-label widget (early access)",
      "Dedicated API capacity",
      "Custom styles and presets",
      "Invoice billing",
      "Team management and SSO (on the roadmap)",
    ],
    cta: { label: "Talk to us", href: "/enterprise#contact" },
  },
];
