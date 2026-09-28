// Changelog (/changelog) and release notes (/release-notes). Only list what has
// actually shipped. The public beta launched on 2026-09-28; there are no
// earlier public releases. Add new entries to the top of each array.
import type { ChangelogEntry, ReleaseNote } from "@/content/types";

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-09-28",
    title: "Roomwright public beta is live",
    summary:
      "Roomwright is now open to everyone. Create a free account to redesign rooms, house exteriors and gardens from a single photo, with 20 renders a day during the beta.",
    items: [
      {
        tag: "New",
        text: "Twelve studio tools: Redesign, Virtual staging, Decor staging, Declutter & remove, Paint visualizer, Material swap, Sky & light, Sketch to render, Precision edit, Style transfer, Text to design and Furniture creator.",
      },
      { tag: "New", text: "Interiors, exteriors and gardens, each with its own room types and style presets." },
      { tag: "New", text: "Before-and-after comparison on every render." },
      { tag: "New", text: "Design history, so you can come back to your past renders." },
      { tag: "New", text: "Downloads of your renders at standard resolution." },
      {
        tag: "New",
        text: "Public REST API in beta: create API keys in account settings, then create, check and list renders from your own code. The API documentation has the full reference.",
      },
      { tag: "New", text: "A free daily allowance of 20 renders per account, shared by the studio and the API." },
    ],
  },
];

export const releaseNotes: ReleaseNote[] = [
  {
    version: "1.0.0-beta.1",
    date: "2026-09-28",
    highlights: [
      "Public beta: free with an account, with 20 renders a day",
      "Twelve AI design tools for interiors, exteriors and gardens",
      "Public REST API in beta, with self-serve API keys",
    ],
    changes: [
      { tag: "New", text: "Redesign: restyle a whole room, facade or garden while keeping its structure, at subtle, balanced or bold strength." },
      { tag: "New", text: "Virtual staging: furnish an empty room in the style you choose." },
      { tag: "New", text: "Decor staging: add rugs, art, plants and accessories without replacing the furniture." },
      { tag: "New", text: "Declutter & remove: clear furniture and clutter to reveal the empty space." },
      { tag: "New", text: "Paint visualizer: preview a new wall or facade color." },
      { tag: "New", text: "Material swap: change flooring, walls, countertops, cabinets, ceilings, siding or roofing." },
      { tag: "New", text: "Sky & light: replace a dull sky and relight exterior and garden photos." },
      { tag: "New", text: "Sketch to render: turn a hand sketch or line drawing into a photoreal image." },
      { tag: "New", text: "Precision edit: change one specific thing with a written instruction, such as swapping a sofa or removing a lamp." },
      { tag: "New", text: "Style transfer: borrow the look of an inspiration photo." },
      { tag: "New", text: "Text to design: describe a space and generate it without a photo." },
      { tag: "New", text: "Furniture creator: design a one-off piece of furniture from a description." },
      { tag: "New", text: "Interior, exterior and garden spaces, each with its own room types and style presets." },
      { tag: "New", text: "Before-and-after comparison on every render." },
      { tag: "New", text: "Design history for revisiting your past renders." },
      { tag: "New", text: "Standard-resolution downloads." },
      {
        tag: "New",
        text: "Public REST API (beta): create renders, check their status and list recent ones, authenticated with bearer-token API keys created in account settings. Keys are shown once.",
      },
      { tag: "New", text: "Free daily allowance of 20 renders per account during the beta, shared by the studio and the API." },
    ],
  },
];
