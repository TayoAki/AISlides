import type { DocPage } from "@/content/types";

// Company pages: /about, /press, /investors, /careers.
// Keep these free of invented facts: no people, dates, funding, metrics, press
// coverage, locations or job openings. The contact form lives on /help.

export const companyPages: DocPage[] = [
  {
    slug: "about",
    navLabel: "About Us",
    metaTitle: "About Roomwright",
    metaDescription:
      "Roomwright turns a photo of a room, facade or garden into photoreal AI redesigns. Learn what we're building, why it matters and the principles behind it.",
    eyebrow: "About us",
    title: "Helping people see a space before they change it",
    intro:
      "Roomwright turns an ordinary photo of a room, a house front or a garden into photoreal redesigns, so you can see an idea in your own space before you spend money, move furniture or open a can of paint.",
    blocks: [
      { type: "h2", text: "What Roomwright does" },
      {
        type: "p",
        text: "You upload a photo, choose what you'd like to change and get back a realistic image of your space with that change made. Our tools are built to keep your walls, windows and layout where they are, so the result shows your home rather than a showroom somewhere else.",
      },
      { type: "p", text: "The studio works on interiors, exteriors and gardens, with tools for big changes and small ones:" },
      {
        type: "ul",
        items: [
          "Restyle a whole room, facade or yard in a style you choose",
          "Furnish an empty room, or add rugs, art and plants to a furnished one",
          "Clear out furniture and clutter to see the bare space",
          "Preview a new wall or facade color before you buy a sample",
          "Swap floors, walls, countertops, cabinets, ceilings, siding or roofing",
          "Replace a gray sky and relight an exterior",
          "Turn a hand sketch into a photoreal image",
          "Change one specific thing, like a sofa or a light fixture, and leave the rest alone",
          "Borrow the look of an inspiration photo",
          "Describe a room, or a one-off piece of furniture, and generate it from scratch",
        ],
      },
      {
        type: "p",
        text: "Roomwright is in public beta. Every account is free during the beta, with a daily render allowance, and we're refining and adding tools as we learn from the people who use them. You can follow along in our [changelog](/changelog).",
      },

      { type: "h2", text: "Why we're building it" },
      {
        type: "p",
        text: "Most decisions about a home are made on imagination. You stand in the kitchen holding a paint chip and try to picture the whole room in that color. You save dozens of photos of other people's houses and wonder which ideas would survive contact with your ceiling height, your light and your budget.",
      },
      {
        type: "p",
        text: "Professional renderings answer that question well, but they take time and money, and they usually arrive later in a project than the moment you need them. We think anyone should be able to see a believable version of an idea in their own space early on, while changing their mind still costs nothing.",
      },
      { type: "image", image: "living-dated", caption: "Every project starts with a photo of a real space, just as it is today." },

      { type: "h2", text: "How we think about AI and real spaces" },
      {
        type: "p",
        text: "A redesign is only useful if it's still recognizably your space. So we build our tools to respect what's already there: the structure, the perspective, the windows and the way light comes in. Some tools let you choose how bold a change should be, and Precision edit lets you change a single thing while leaving everything else alone.",
      },
      {
        type: "p",
        text: "We're candid about the limits, too. Image models can nudge a window, invent a doorway or render a finish that doesn't quite exist. A result is a concept to react to, not a plan to build from, and we say so plainly, including in our [Terms of Service](/terms).",
      },
      {
        type: "p",
        text: "Pictures of homes carry real weight. People buy, rent, borrow and build based on them. That's why we ask anyone who uses Roomwright for listings to disclose virtual staging and edits wherever that's required, and never to use an edit to hide a problem a buyer or renter would want to know about.",
      },

      { type: "h2", text: "What we hold ourselves to" },
      { type: "h3", text: "Your space, your decisions" },
      {
        type: "p",
        text: "You choose the tool, the style, the strength and the words. Roomwright shows you options; what happens to your home is always your call.",
      },
      { type: "h3", text: "Your photos stay yours" },
      {
        type: "p",
        text: "Photos of a home are personal. We use yours to create your designs, we don't use them to train our own AI models, and we don't sell personal data. You can delete a design, or your whole account, whenever you like. Our [Privacy Policy](/privacy) has the details.",
      },
      { type: "h3", text: "Useful over impressive" },
      {
        type: "p",
        text: "It's easy to make a striking image. It's harder to make one that helps you choose between two floor finishes. We judge our tools by whether they help people make real decisions.",
      },
      { type: "h3", text: "Honest about what's real" },
      {
        type: "p",
        text: "Every result is an AI-generated concept. We'd rather say that clearly than let a beautiful image set expectations that a real room, or a real budget, can't meet.",
      },
      { type: "h3", text: "Built with the people who use it" },
      {
        type: "p",
        text: "A public beta only works if people tell us what's working and what isn't. Send us feedback through the [contact form](/help#contact), and see what we've changed in the [release notes](/release-notes).",
      },
      {
        type: "cta",
        title: "See an idea in your own space",
        text: "Upload a photo and try your first redesign. It's free during the beta.",
        cta: { label: "Start free", href: "/signup" },
      },
    ],
  },

  {
    slug: "press",
    navLabel: "Press",
    metaTitle: "Press and media kit",
    metaDescription:
      "Resources for journalists writing about Roomwright, the AI home design app in public beta: a ready-to-use description, name guidance and how to reach us.",
    eyebrow: "Press",
    title: "Press kit and media resources",
    intro:
      "Writing about AI and home design? This page has what you need to describe Roomwright accurately, and a direct way to reach us for anything else.",
    blocks: [
      { type: "h2", text: "About Roomwright" },
      { type: "p", text: "Use whichever description fits your piece. You're welcome to quote either one as written." },
      {
        type: "callout",
        title: "In one sentence",
        text: "Roomwright is an AI home design app that turns a photo of a room, house facade or garden into photoreal redesigns.",
      },
      {
        type: "callout",
        title: "In a paragraph",
        text: "Roomwright is an AI home design app that lets people see changes to a real space before they make them. Users upload a photo of a room, a house facade or a garden, then restyle it, stage an empty room, clear clutter, preview paint colors, swap materials such as floors and countertops, replace the sky, turn a sketch into a render or make a single precise edit, while the structure of the space stays recognizable. Roomwright is in public beta and free to use with a daily render allowance.",
      },

      { type: "h2", text: "Key facts" },
      {
        type: "ul",
        items: [
          "Name: Roomwright",
          "What it is: an AI design studio for interiors, exteriors and gardens",
          "How it works: upload a photo, choose a tool and a style, and get a photoreal redesign",
          "Where it runs: in a web browser, with an API for developers",
          "Status: public beta",
          "Price during the beta: free, with a daily render allowance",
        ],
      },

      { type: "h2", text: "Writing our name" },
      {
        type: "ul",
        items: [
          "Write Roomwright as one word, with a capital R and a lowercase w.",
          "Please don't split it (Room Wright), add a capital in the middle (RoomWright) or set it in all capitals in running text.",
          "The name stands on its own, so there's no need to add AI or App after it.",
          "The possessive is Roomwright's.",
          "When you publish images made with Roomwright, please label them as AI-generated.",
        ],
      },

      { type: "h2", text: "Describing the product accurately" },
      {
        type: "ul",
        items: [
          "Roomwright creates AI-generated concepts. They're useful for exploring ideas, but they aren't architectural drawings, construction documents or professional advice.",
          "The tools are designed to keep a space's structure, like its walls, windows and layout, while changing what the user asks for. Like all image models, they sometimes get details wrong.",
          "Customer photos are used to create each user's designs. Roomwright doesn't use them to train its own AI models and doesn't sell personal data.",
        ],
      },

      { type: "h2", text: "Available on request" },
      { type: "p", text: "We're happy to provide any of the following for editorial use. Tell us what you need and when you need it." },
      {
        type: "ul",
        items: [
          "Logo files for light and dark backgrounds",
          "Screenshots of the studio",
          "Before-and-after examples made with Roomwright",
          "A guided walkthrough of the product",
          "Background on how the tools work and how we approach responsible use",
          "Answers to written questions, or a conversation with the team",
        ],
      },

      { type: "h2", text: "Media inquiries" },
      {
        type: "p",
        text: "The quickest way to reach us is the [contact form on our Help page](/help#contact). Mention that it's a press inquiry, and include your name, your publication and your deadline so we can get back to you in time.",
      },
      {
        type: "cta",
        title: "Working on a story?",
        text: "Send us your questions and your deadline.",
        cta: { label: "Contact us", href: "/help#contact" },
      },
    ],
  },

  {
    slug: "investors",
    navLabel: "Investors",
    metaTitle: "Information for investors",
    metaDescription:
      "Why AI visualization matters for homes, what Roomwright is building and how investors who share that view can introduce themselves to our team.",
    eyebrow: "Investors",
    title: "Why we're building AI for real homes",
    intro:
      "Roomwright is a new product in public beta. If you're interested in where AI and the home meet, here's how we see the opportunity, what we're building and how to get in touch.",
    blocks: [
      { type: "h2", text: "Why this category matters" },
      {
        type: "p",
        text: "For many people, a home is the largest purchase they'll ever make, and it's where they spend much of their lives. Yet the decisions that shape it, from paint and flooring to a kitchen remodel or a new backyard, are still made mostly on imagination, samples and photos of somebody else's house.",
      },
      {
        type: "p",
        text: "The gap between an idea and being able to see it slows people down and leads to expensive surprises. And it isn't only a homeowner's problem. It's shared by:",
      },
      {
        type: "ul",
        items: [
          "Renters and homeowners who want to try a look before buying anything",
          "Real estate agents presenting empty or dated properties",
          "Interior designers who want to show concepts early in a conversation",
          "Contractors and remodelers helping clients choose between options",
          "Builders and architects exploring directions before detailed drawings exist",
        ],
      },
      {
        type: "p",
        text: "Image models can now produce a believable picture of a specific, real space from a single ordinary photo. That makes visualization possible at the moment decisions are made, rather than weeks later and at a professional's rate.",
      },

      { type: "h2", text: "What we're building" },
      {
        type: "p",
        text: "Roomwright is a design studio for real spaces. One photo can become a full restyle, a staged room, a new paint color, a different countertop, a brighter sky or a single precise change, across interiors, exteriors and gardens. The product is built around one idea: keep what's real about the space, and change only what the user asks for.",
      },
      {
        type: "p",
        text: "Beyond the studio, we offer an [API](/api) for developers and are building ways for brokerages, builders and platforms to bring Roomwright into their own products, including a [white-label widget](/white-label-widget) and [enterprise](/enterprise) options.",
      },

      { type: "h2", text: "How we approach it" },
      {
        type: "ul",
        items: [
          "Structure first: results should stay faithful to the real space, because that's what makes them useful for decisions.",
          "Trust as a feature: clear guidance on disclosing AI edits, firm rules against hiding property defects, and no training of our own models on customer photos.",
          "Open to everyone: Roomwright is free during the beta, so anyone can try it on their own space.",
          "Built in public: we ship to a public beta, learn from how people use it and publish what changes.",
        ],
      },

      { type: "h2", text: "Get in touch" },
      {
        type: "p",
        text: "If you invest in software, AI, real estate or the home and would like to learn more, introduce yourself through the [contact form on our Help page](/help#contact). Tell us a little about yourself and what you'd like to discuss.",
      },
      {
        type: "p",
        text: "This page is for general information only. It isn't an offer to sell, or a solicitation of an offer to buy, any securities.",
      },
      {
        type: "cta",
        title: "Introduce yourself",
        text: "Tell us who you are and what you'd like to talk about.",
        cta: { label: "Contact us", href: "/help#contact" },
      },
    ],
  },

  {
    slug: "careers",
    navLabel: "Careers",
    metaTitle: "Careers at Roomwright",
    metaDescription:
      "How we work and what we value at Roomwright. There are no open roles listed right now, but you're welcome to introduce yourself and tell us what you'd build.",
    eyebrow: "Careers",
    title: "Help build AI that respects real spaces",
    intro:
      "Roomwright is a young product with a clear goal: letting anyone see a change to their home before they make it. If that sounds like work you'd enjoy, here's how we think about it.",
    blocks: [
      { type: "h2", text: "How we work" },
      {
        type: "p",
        text: "We ship to a public beta, pay close attention to how people use it and improve in small, frequent steps. We write decisions down, so anyone can see why something was built the way it was. And we'd rather do fewer things carefully than many things halfway.",
      },
      {
        type: "p",
        text: "The work sits where software, image models and the physical world meet. A render that looks great but moves a load-bearing wall isn't a success, so we care about the details of real rooms as much as the details of our code.",
      },

      { type: "h2", text: "What we value" },
      { type: "h3", text: "Care for the craft" },
      {
        type: "p",
        text: "The difference between a toy and a tool is often a straight window frame or a believable shadow. We sweat those details.",
      },
      { type: "h3", text: "Honesty" },
      {
        type: "p",
        text: "With users about what AI can and can't do, and with each other about what's working. Clear, kind and direct beats vague and polite.",
      },
      { type: "h3", text: "Respect for people's homes" },
      {
        type: "p",
        text: "People trust us with photos of their private spaces. Protecting that trust is part of everyone's job.",
      },
      { type: "h3", text: "Ownership" },
      {
        type: "p",
        text: "When you spot a problem, you follow it through to a fix, or you make sure it lands with someone who can.",
      },
      { type: "h3", text: "Curiosity about how people live" },
      {
        type: "p",
        text: "Good product ideas come from understanding how people actually renovate, stage, sell and decorate, so we try to learn from the people who do that work every day.",
      },

      { type: "h2", text: "Open roles" },
      {
        type: "p",
        text: "We don't have any open roles listed right now. When that changes, we'll post them here with a clear description of the work.",
      },

      { type: "h2", text: "Introduce yourself" },
      {
        type: "p",
        text: "If you'd like to be considered in the future, send us a note through the [contact form on our Help page](/help#contact). Tell us what you're great at, share a link to work you're proud of and tell us what you'd want to build at Roomwright.",
      },
      {
        type: "p",
        text: "We'd like to hear from people with all kinds of backgrounds, whether that's software, machine learning, product design, interior design, architecture, real estate or the building trades. Because we aren't hiring for specific roles right now, it may take us a while to reply, but we'll reach out if there's a fit.",
      },
      {
        type: "cta",
        title: "Tell us about yourself",
        text: "There are no open roles right now, but we'd still like to hear from you.",
        cta: { label: "Introduce yourself", href: "/help#contact" },
      },
    ],
  },
];
