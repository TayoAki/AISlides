// Every public route on the site, grouped the way the footer and mega menu show them.
// Page content files must use exactly these slugs.

export type NavLink = { label: string; href: string; soon?: boolean };
export type NavGroup = { title: string; links: NavLink[] };

export const MAIN_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing Plans", href: "/pricing" },
  { label: "Affiliate Program", href: "/affiliate-program" },
  { label: "API", href: "/api" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "White Label Widget", href: "/white-label-widget" },
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Help Desk", href: "/help" },
  { label: "API Documentation", href: "/docs/api" },
  { label: "Changelog", href: "/changelog" },
  { label: "Release Notes", href: "/release-notes" },
];

export const USE_CASE_LINKS: NavLink[] = [
  { label: "Explore all", href: "/ai-use-cases" },
  { label: "AI Interior Design", href: "/interior-design-ai" },
  { label: "AI House Exterior Design", href: "/exterior-ai" },
  { label: "Landscaping AI", href: "/landscaping-ai" },
  { label: "Real Estate AI", href: "/real-estate-ai" },
  { label: "Virtual Staging AI", href: "/virtual-staging-ai" },
  { label: "Cabinet Design AI", href: "/cabinet-design-ai" },
  { label: "Wall AI", href: "/wall-ai" },
  { label: "Flooring AI", href: "/flooring-ai" },
  { label: "Countertop AI", href: "/countertop-ai" },
  { label: "Furniture Replacement AI", href: "/furniture-replacement-ai" },
  { label: "Partial Remodel AI", href: "/partial-remodel-ai" },
  { label: "Room Design AI", href: "/room-design-ai" },
  { label: "Living Room AI", href: "/living-room-design-ai" },
  { label: "Kitchen Design AI", href: "/kitchen-design-ai" },
  { label: "Bathroom Design AI", href: "/bathroom-design-ai" },
  { label: "Virtual Staging for Realtors", href: "/for/realtors" },
  { label: "AI Remodel Preview", href: "/for/renovators" },
  { label: "AI Rendering for Interior Designers", href: "/for/interior-designers" },
  { label: "AI Architecture Design", href: "/for/architects" },
  { label: "AI for Contractors", href: "/for/contractors" },
  { label: "Construction AI for Builders", href: "/for/builders" },
];

export const FEATURE_LINKS: NavLink[] = [
  { label: "AI Features", href: "/ai-features" },
  { label: "Redesign", href: "/features/redesign" },
  { label: "Sketch to Render", href: "/features/sketch-to-render" },
  { label: "Precision Edit", href: "/features/precision-edit" },
  { label: "Fill Spaces", href: "/features/fill-spaces" },
  { label: "Decor Staging", href: "/features/decor-staging" },
  { label: "Colors & Textures", href: "/features/colors-textures" },
  { label: "AI Furniture Removal", href: "/features/furniture-removal" },
  { label: "Furniture Finder", href: "/features/furniture-finder", soon: true },
  { label: "Sky Colors", href: "/features/sky-colors" },
  { label: "Material Swap", href: "/features/material-swap" },
  { label: "Paint Visualizer", href: "/features/paint-visualizer" },
  { label: "Room Composer", href: "/features/room-composer" },
  { label: "Design Critique", href: "/features/design-critique", soon: true },
  { label: "Design Advisor", href: "/features/design-advisor", soon: true },
  { label: "Smart Home AI", href: "/features/smart-home", soon: true },
  { label: "Text to Design", href: "/features/text-to-design" },
  { label: "Furniture Creator", href: "/features/furniture-creator" },
  { label: "Design Transfer", href: "/features/design-transfer" },
];

export const INSPIRATION_LINKS: NavLink[] = [
  { label: "Interior Design Ideas", href: "/ideas/interior" },
  { label: "Exterior Design Ideas", href: "/ideas/exterior" },
  { label: "Garden Design Ideas", href: "/ideas/garden" },
];

export const FREE_TOOL_LINKS: NavLink[] = [
  { label: "Explore all", href: "/free-ai-tools" },
  { label: "AI Interior Design Free", href: "/free-ai-tools/interior-design" },
  { label: "AI Exterior Design Free", href: "/free-ai-tools/exterior-design" },
  { label: "AI Landscape Design Free", href: "/free-ai-tools/landscape-design" },
  { label: "Virtual Staging AI Free", href: "/free-ai-tools/virtual-staging" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export const FOOTER_GROUPS: NavGroup[] = [
  { title: "Roomwright", links: MAIN_LINKS },
  { title: "Use cases", links: USE_CASE_LINKS },
  { title: "Features", links: FEATURE_LINKS },
  { title: "Inspiration", links: INSPIRATION_LINKS },
  { title: "Free AI tools", links: FREE_TOOL_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];
