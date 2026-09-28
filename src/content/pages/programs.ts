// Copy for the program pages that carry a lead form: affiliate program,
// enterprise, white-label widget and API. Keep every claim in line with what
// is live in the public beta (launched 2026-09-28): the studio and the REST API
// are live; the widget, enterprise features and paid plans are not yet.
import type { ProgramPage } from "@/content/types";

export const programPages: ProgramPage[] = [
  {
    slug: "affiliate-program",
    navLabel: "Affiliate Program",
    metaTitle: "Affiliate Program for Home and Design Creators",
    metaDescription:
      "Apply to the Roomwright affiliate program. Make AI room makeovers for your audience free during the beta, and get our commission terms once approved.",
    eyebrow: "Affiliate program",
    title: "Help your audience see what their homes could become",
    subtitle:
      "Applications are open. Roomwright is free to use during the public beta, so you can start creating with it today, and we share commission terms directly with every approved partner.",
    heroImage: "living-boho",
    benefits: [
      {
        title: "Content that shows, not tells",
        body: "Before-and-after redesigns of real rooms make natural material for videos, posts and newsletters. Your own home is a great place to start.",
        icon: "image",
      },
      {
        title: "Easy for your audience to try",
        body: "During the beta, anyone can create a free account and get 20 renders a day, so trying your recommendation costs them nothing.",
        icon: "heart",
      },
      {
        title: "Terms before you promote",
        body: "Approved partners receive our commission terms directly, so you know how the program works before you share a single link.",
        icon: "shield",
      },
      {
        title: "Fits many home topics",
        body: "Decor, renovation, real estate, garden and DIY audiences all have a reason to use Roomwright, so it slots into content you already make.",
        icon: "users",
      },
      {
        title: "Twelve tools to feature",
        body: "Restyling, virtual staging, paint previews, material swaps, sky replacement, sketch rendering and more give you plenty of fresh angles.",
        icon: "wand",
      },
      {
        title: "Early to a new product",
        body: "Paid plans are launching soon. Joining now gives you time to learn the tools and build a library of content before they go live.",
        icon: "clock",
      },
    ],
    steps: [
      {
        title: "Apply",
        body: "Tell us who you are, where you publish and who your audience is, using the form on this page.",
      },
      {
        title: "Get your terms",
        body: "We read every application. If it looks like a good fit, we'll email you our commission terms and next steps.",
      },
      {
        title: "Create and share",
        body: "Make honest before-and-after content with Roomwright, disclose the partnership, and share it with your audience.",
      },
    ],
    sections: [
      {
        title: "Why apply during the beta",
        body: "Roomwright is in public beta and free with an account, and paid plans are launching soon. Until they do, there are no purchases to earn commission on, which makes this a good window to get ahead. Learn the tools, test formats with your audience and build up a library of room makeovers, so people already know and trust your take on Roomwright when plans go live. Content you publish now can keep introducing new people to the product long after launch.",
        image: "kitchen-modern",
      },
      {
        title: "Who we're looking for",
        body: "We want partners who publish honest, useful content about homes, in whatever format suits them.",
        bullets: [
          "Interior design and decor creators on video, social media or blogs",
          "Renovation, DIY and home improvement channels",
          "Real estate educators and coaches who teach agents",
          "Garden and outdoor living creators",
          "Newsletter writers and community hosts in home and design",
        ],
        image: "decor-shelf",
      },
      {
        title: "What we ask of partners",
        body: "Our ask is simple: be as straight with your audience as you'd want someone to be with you.",
        bullets: [
          "Disclose the affiliate relationship clearly and close to every link, as the FTC requires in the US",
          "Present renders as AI visualizations, not finished or professional work",
          "Only use photos you have the right to use, and ask before featuring someone else's home",
          "Never suggest using virtual staging on a property listing without disclosing it",
        ],
        image: "bedroom-warm",
      },
    ],
    faqs: [
      {
        q: "What commission do affiliates earn?",
        a: "We share commission terms directly with approved partners rather than publishing them here. If your application is accepted, you'll receive the full terms before you start promoting Roomwright.",
      },
      {
        q: "Can I earn commission during the free beta?",
        a: "Commission is earned on paid plans, which are launching soon. Nothing is charged during the beta, so there's nothing to earn on yet. It's a good time to build content and an audience that already knows the product when plans go live.",
      },
      {
        q: "Do I need a paid plan to join?",
        a: "No. There are no paid plans yet, and a [free account](/signup) gives you everything you need to create content. We do recommend using the tools yourself before you recommend them to anyone else.",
      },
      {
        q: "How should I disclose that I'm an affiliate?",
        a: "Plainly and close to the link, in words your audience will understand, such as \"I may earn a commission if you buy through my link.\" In the US, the FTC expects clear and conspicuous disclosure of material connections, and other countries have their own rules.",
      },
      {
        q: "Can I show Roomwright renders in my content?",
        a: "Yes, that's the point. Label them as AI visualizations, use photos you have the rights to, and get permission before showing anyone else's home.",
      },
      {
        q: "What happens after I apply?",
        a: "We read every application. If it looks like a good fit, we'll email you our commission terms and next steps.",
      },
    ],
    form: {
      title: "Apply to the affiliate program",
      text: "Tell us about yourself, where you publish and who your audience is. A link to your channel, site or profile helps us review your application.",
      submitLabel: "Apply to join",
      successText: "Thanks for applying. We read every application, and we'll email you if it looks like a good fit.",
      askCompany: false,
      askWebsite: true,
      messageLabel: "Where do you publish, and who is your audience?",
    },
  },
  {
    slug: "enterprise",
    navLabel: "Enterprise",
    metaTitle: "Enterprise AI Home Design for Teams and Platforms",
    metaDescription:
      "Roomwright for brokerages, builders, retailers and platforms: volume API capacity, team management, custom styles and invoice billing. Talk to us.",
    eyebrow: "Enterprise",
    title: "AI home design for brokerages, builders and platforms",
    subtitle:
      "Bring photoreal redesigns to your team or your customers. Enterprise plans are rolling out alongside our public beta, and we'd like to shape yours around how your organization actually works.",
    heroImage: "exterior-dusk",
    benefits: [
      {
        title: "Volume API capacity",
        body: "Enterprise plans will add capacity sized to your volume, on the same public REST API that's live in beta today.",
        icon: "zap",
      },
      {
        title: "White-label widget",
        body: "We're building an embeddable, brandable version of the studio for your own site. Partners can request early access now.",
        icon: "layers",
      },
      {
        title: "Team management",
        body: "Manage seats for agents, designers or sales staff in one place, as team features roll out with enterprise plans.",
        icon: "users",
      },
      {
        title: "Custom styles and presets",
        body: "Enterprise plans will include house styles, finish packages or brand palettes, so renders reflect what you actually sell or build.",
        icon: "palette",
      },
      {
        title: "Invoice billing",
        body: "Enterprise plans will be billed by invoice, to fit the way your finance and procurement teams already work.",
        icon: "briefcase",
      },
      {
        title: "Security on the roadmap",
        body: "Single sign-on and formal service commitments are on our roadmap. Tell us what your security review requires, and we'll be clear about where we stand.",
        icon: "lock",
      },
    ],
    steps: [
      {
        title: "Tell us what you need",
        body: "Share your use case, expected monthly volume and timeline using the form on this page.",
      },
      {
        title: "Scope it together",
        body: "We'll talk through which pieces fit, and be clear about what's available today and what's still on the roadmap.",
      },
      {
        title: "Start building now",
        body: "Your developers can prototype on the public API right away while we set up an enterprise plan for production.",
      },
    ],
    sections: [
      {
        title: "Built for organizations that sell, design or build",
        body: "Enterprise plans are for teams that want AI visualization built into their everyday work, whether that's marketing homes, selling finishes or helping clients decide.",
        bullets: [
          "**Brokerages and property managers** staging vacant listings consistently across many agents, with clear disclosure",
          "**Home builders and remodelers** showing buyers color and finish options before anything is installed",
          "**Furniture, flooring and paint retailers** letting shoppers preview styles, colors and finishes in their own rooms",
          "**Marketplaces and property apps** adding redesign features for their users without building an AI pipeline",
        ],
        image: "exterior-modern",
      },
      {
        title: "What's available today, and what's next",
        body: "We'd rather be clear than impressive, so here's exactly where things stand.",
        bullets: [
          "**Available today:** all twelve studio tools and the public REST API in beta, for any account, within the daily allowance",
          "**Rolling out with enterprise plans:** volume API capacity, team management, custom styles and presets, and invoice billing",
          "**In development:** the white-label widget, with early access for partners",
          "**On the roadmap:** single sign-on and formal service commitments",
        ],
        image: "office-home",
      },
      {
        title: "Responsible use at scale",
        body: "Renders are AI visualizations, not construction documents, measured plans or product guarantees. For property listings, virtually staged photos should be clearly labeled and disclosed under your MLS and local rules. When you roll Roomwright out to a team or to your customers, we're glad to help you build that labeling into the workflow from the start, so every render is presented honestly.",
        image: "empty-room-2",
      },
    ],
    faqs: [
      {
        q: "Do you offer SSO or an uptime SLA today?",
        a: "Not yet. Single sign-on and formal service commitments are on the roadmap for enterprise plans. If either is a requirement for you, mention it in the form and we'll share timing as it firms up.",
      },
      {
        q: "Can we try Roomwright before we talk?",
        a: "Yes. Anyone can [create a free account](/signup) and use the studio and the [public API](/docs/api) within the beta allowance of 20 renders a day.",
      },
      {
        q: "How is enterprise pricing set?",
        a: "Enterprise pricing is custom, based on your volume and the features you need. Once we understand your use case, we'll put together a proposal. Our upcoming self-serve plans are on the [pricing page](/pricing).",
      },
      {
        q: "Do API renders count toward the beta allowance?",
        a: "Yes. During the beta, renders made through the API count toward the same daily allowance as renders made in the studio. Enterprise plans are designed to add capacity for production volume.",
      },
      {
        q: "Can renders carry our branding?",
        a: "That's the goal of the white-label widget, which is being designed to carry your logo and colors instead of ours. It isn't available yet, but you can [request early access](/white-label-widget).",
      },
      {
        q: "How do you handle the photos we upload?",
        a: "Our [privacy policy](/privacy) explains how uploaded images and account data are handled. If your organization has specific data requirements, include them in the form so we can address them directly.",
      },
    ],
    form: {
      title: "Talk to us about enterprise",
      text: "Tell us about your organization, what you'd like to build and roughly how many renders you expect each month. We'll reply by email to set up a conversation.",
      submitLabel: "Talk to us",
      successText: "Thanks, we've received your message. We'll reply by email to set up a conversation.",
      askCompany: true,
      askWebsite: true,
      messageLabel: "What would you like to build, and at what volume?",
    },
  },
  {
    slug: "white-label-widget",
    navLabel: "White Label Widget",
    metaTitle: "White-Label AI Design Widget: Early Access",
    metaDescription:
      "We're building an embeddable, brandable Roomwright studio for brokerages, builders, retailers and marketplaces. Request early access and help shape it.",
    eyebrow: "White-label widget",
    title: "Put an AI design studio on your site, under your brand",
    subtitle:
      "We're building an embeddable, white-label version of the Roomwright studio for brokerages, builders, retailers and marketplaces. It isn't available yet. Partners can request early access now and help decide what it does first.",
    heroImage: "living-modern",
    benefits: [
      {
        title: "Your brand, not ours",
        body: "The widget is being designed to carry your logo and colors, so it feels like a natural part of your site or app.",
        icon: "brush",
      },
      {
        title: "Light integration",
        body: "Our goal is a widget you can add to an existing page without taking on a large engineering project.",
        icon: "code",
      },
      {
        title: "The tools your customers need",
        body: "We plan to let you choose the tools that fit: staging for listings, paint and material swaps for retail, exterior redesigns for builders.",
        icon: "grid",
      },
      {
        title: "Visitors stay with you",
        body: "The aim is for shoppers and clients to explore ideas on your site, where they already are, instead of leaving for another app.",
        icon: "home",
      },
      {
        title: "Same engine as the studio",
        body: "The widget will run on the same rendering pipeline that powers the Roomwright studio and API today.",
        icon: "cpu",
      },
      {
        title: "Shaped by early partners",
        body: "Early-access partners will help set priorities, from which tools come first to how results are shared.",
        icon: "message",
      },
    ],
    steps: [
      {
        title: "Request early access",
        body: "Tell us about your platform, your users and how you'd use the widget.",
      },
      {
        title: "Help shape it",
        body: "We'll follow up to learn how you work, and keep you updated as the widget develops.",
      },
      {
        title: "Build with the API meanwhile",
        body: "If you have developers, the public API is live in beta, so you can start on a custom experience today.",
      },
    ],
    sections: [
      {
        title: "Who it's for",
        body: "The widget is planned for businesses whose customers are already picturing a space.",
        bullets: [
          "**Brokerages:** let buyers picture a listing in their own style, alongside the original photos",
          "**Builders and remodelers:** let prospects try colors and finishes before they commit",
          "**Retailers:** let shoppers preview paint colors, flooring or a new look in their own rooms",
          "**Marketplaces and apps:** add redesign features without building and running your own AI pipeline",
        ],
        image: "exterior-farmhouse",
      },
      {
        title: "What early access means",
        body: "The widget is in development and not available yet. Early-access partners will be the first to try test builds when they're ready, and we'll ask for your input on priorities along the way. Requesting access is free and doesn't commit you to anything. We'll keep you posted by email as the widget takes shape, and we'll be upfront about timing as it becomes clear.",
        image: "kitchen-farmhouse",
      },
      {
        title: "Widget or API?",
        body: "If you want a ready-made experience with your branding and little engineering work, the widget is likely the better fit once it's available. If you want full control over the interface, or need renders inside an existing workflow, the [public API](/docs/api) is live in beta today. Some teams may end up using both: the API for internal tools, and the widget for customers.",
        image: "living-coastal",
      },
    ],
    faqs: [
      {
        q: "Is the widget available now?",
        a: "No. It's in development. Request early access and we'll contact you when there's something to try.",
      },
      {
        q: "How much will it cost?",
        a: "Pricing isn't set yet. The widget is planned as part of [enterprise plans](/enterprise), which are priced on volume and features.",
      },
      {
        q: "Will I be able to choose which tools appear?",
        a: "That's the plan. A paint retailer might show only the paint visualizer and material swap, while a brokerage might focus on virtual staging. Feedback from early-access partners will shape exactly how this works.",
      },
      {
        q: "Can I build something similar today?",
        a: "Yes, with the public API. Your developers can create a key in account settings and request renders from your own interface. The [API reference](/docs/api) covers every endpoint.",
      },
      {
        q: "What do early-access partners commit to?",
        a: "Nothing formal. We'll ask for honest feedback and, when test builds are ready, for your help trying them with real users.",
      },
    ],
    form: {
      title: "Request early access",
      text: "Tell us about your platform, your users and how you'd like to use the widget. We'll be in touch as early access opens.",
      submitLabel: "Request early access",
      successText: "Thanks, your request is in. We'll contact you by email as the widget takes shape.",
      askCompany: true,
      askWebsite: true,
      messageLabel: "How would you use the widget, and who are your users?",
    },
  },
  {
    slug: "api",
    navLabel: "API",
    metaTitle: "AI Home Design API for Developers (Beta)",
    metaDescription:
      "Send a photo of a room, facade or garden to the Roomwright REST API and get photoreal redesigns back. Create a key in account settings. Now in public beta.",
    eyebrow: "Developer API",
    title: "Build photoreal home redesigns into your own product",
    subtitle:
      "The Roomwright REST API is live in public beta. Create a key in your account settings, send a photo with the tool and options you want, and fetch the finished render when it's ready.",
    heroImage: "kitchen-dark",
    benefits: [
      {
        title: "Three simple endpoints",
        body: "Create a render, check its status and list recent renders, all over plain HTTPS that any language can call.",
        icon: "code",
      },
      {
        title: "Photo in, render out",
        body: "Upload an image as multipart form data or send it as base64 in JSON. Output URLs come back once the render is done.",
        icon: "image",
      },
      {
        title: "The studio's options",
        body: "Set the tool, space, room type, style and strength, add a prompt, or pass a surface, material, color or sky for targeted changes.",
        icon: "layers",
      },
      {
        title: "Bearer-token keys",
        body: "Create API keys in account settings and send them as a bearer token. Each key is shown only once, so store it securely.",
        icon: "key",
      },
      {
        title: "Free to start in beta",
        body: "API renders draw from the same daily allowance as the studio: 20 renders a day per account during the beta.",
        icon: "zap",
      },
      {
        title: "Rooms, facades and gardens",
        body: "Work with interiors, house exteriors and gardens by setting the space on each request.",
        icon: "home",
      },
    ],
    steps: [
      {
        title: "Create a key",
        body: "In account settings, create an API key and copy it right away. It's shown only once.",
      },
      {
        title: "Send a photo",
        body: "POST the image to /api/v1/renders with a tool and a space. The response includes a render id and the status queued.",
      },
      {
        title: "Fetch the result",
        body: "Check GET /api/v1/renders/{id} until the render is finished, then use the output URLs it returns.",
      },
    ],
    sections: [
      {
        title: "How a request works",
        body: "Every render starts with a POST to /api/v1/renders, authenticated with your key as a bearer token. Send the photo as multipart form data in an image field, or as JSON with an image_base64 field, along with a tool and a space. Optional fields such as room_type, style, strength and prompt refine the result, and surface, material, color and sky steer the tools that use them. Rendering happens in the background, so the response is a render id with the status queued. Check on it with GET /api/v1/renders/{id}, or list recent work with GET /api/v1/renders. The [full API reference](/docs/api) documents every field.",
        image: "empty-room",
      },
      {
        title: "Where the API fits",
        body: "A few of the products the API is designed to support:",
        bullets: [
          "Listing tools that offer virtual staging, clearly labeled and shown next to the original photos",
          "Paint and flooring retailers that let shoppers preview a color or finish on a photo of their own room",
          "Builder and remodeler portals that show finish options on photos of a client's space",
          "Design and property apps adding restyle, declutter or sky replacement features",
          "Internal tools that prepare concept images for a design or sales team",
        ],
        image: "detail-flooring",
      },
      {
        title: "Beta limits and good practice",
        body: "During the beta, API renders count toward your account's daily allowance of 20 renders, shared with the studio. If you need more for a production integration, tell us about it using the form below.",
        bullets: [
          "Keep your API key on your server, never in browser code, mobile apps or public repositories",
          "Poll for results at a sensible interval rather than in a tight loop",
          "Label renders as AI visualizations in your product, especially virtually staged listing photos",
          "Only send photos you have the right to use",
        ],
        image: "bath-modern",
      },
    ],
    faqs: [
      {
        q: "Is the API free to use?",
        a: "During the public beta, yes. API renders count toward the same daily allowance as the studio, currently 20 renders a day per account. Paid plans with larger allowances are launching soon; see [pricing](/pricing) for what's planned.",
      },
      {
        q: "How do I authenticate?",
        a: "Create a key in account settings and send it in the Authorization header as a bearer token. Keys are shown only once, so store yours somewhere safe, such as a secrets manager or an environment variable on your server.",
      },
      {
        q: "Is rendering synchronous?",
        a: "No. Creating a render returns an id with the status queued. Poll GET /api/v1/renders/{id} for its status, and for the output URLs once it's finished.",
      },
      {
        q: "Where can I find every parameter?",
        a: "The [API reference](/docs/api) documents every endpoint and field. This page is an overview.",
      },
      {
        q: "Can I call the API directly from a browser or mobile app?",
        a: "We recommend against it, because anyone could extract your key from the app. Have your app call your own backend, and have your backend call Roomwright.",
      },
      {
        q: "What if I need more than 20 renders a day?",
        a: "Tell us about your project using the form on this page. Higher volume is what [enterprise plans](/enterprise) are designed for, and self-serve paid plans are launching soon.",
      },
    ],
    form: {
      title: "Planning a production integration?",
      text: "The API is self-serve: create a key in account settings to get started. If you need more volume or have questions about your use case, tell us here.",
      submitLabel: "Talk to us",
      successText: "Thanks, we've received your message. We'll reply by email.",
      askCompany: true,
      askWebsite: false,
      messageLabel: "What are you building, and roughly how many renders a month?",
    },
  },
];
