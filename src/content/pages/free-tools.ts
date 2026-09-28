// Free-tool landing pages (/free-ai-tools/*). "Free" here means free during the
// public beta with a free account and a daily render allowance; keep it precise.
import type { LandingPage } from "@/content/types";
import { studioHref } from "@/lib/tools";

export const freeToolPages: LandingPage[] = [
  {
    slug: "free-ai-tools/interior-design",
    kind: "free-tool",
    status: "live",
    navLabel: "AI Interior Design Free",
    metaTitle: "Free AI Interior Design From a Photo of Your Room",
    metaDescription:
      "Upload a room photo and see it redesigned in styles from Japandi to art deco. Free during the public beta with a free account and 20 renders a day.",
    eyebrow: "Free AI interior design",
    title: "Free AI interior design for the room you actually live in",
    subtitle:
      "Start with a photo of any room in your home and see it take on a new style while the architecture stays as it is. Every live tool is free during the public beta; all you need is a free account.",
    primaryCta: { label: "Redesign a room free", href: studioHref({ tool: "redesign", space: "interior" }) },
    heroImage: "living-coastal",
    highlights: ["Styles from Japandi to art deco", "Free account, 20 renders a day", "Your room's structure stays intact"],
    steps: [
      {
        title: "Upload a room photo",
        body: "A wide, bright shot taken from a corner works best, and a phone photo is fine.",
      },
      {
        title: "Choose a style and strength",
        body: "Pick the room type and a style, then Subtle, Balanced or Bold. Add a note such as \"keep the sofa\" if something should stay.",
      },
      {
        title: "Compare and refine",
        body: "Try a few styles on the same photo, then fine-tune the favorite with Paint, Material swap or Precision edit.",
      },
    ],
    benefits: [
      {
        icon: "image",
        title: "Your room, not a stock photo",
        body: "Ideas land differently when you see them in your own space, with your light and your proportions.",
      },
      {
        icon: "layers",
        title: "Three levels of change",
        body: "Subtle keeps most of what is there, Balanced makes a noticeable restyle and Bold goes for a full transformation.",
      },
      {
        icon: "home",
        title: "Every room in the house",
        body: "Living rooms, kitchens, bedrooms, bathrooms, home offices, nurseries, basements, attics, entryways, laundry rooms and more.",
      },
      {
        icon: "palette",
        title: "Paint and finishes too",
        body: "Preview a wall color or swap the flooring, counters or cabinets without restyling the whole room.",
      },
      {
        icon: "heart",
        title: "Borrow a look you love",
        body: "Style transfer takes a photo you have saved and applies its palette and mood to your room.",
      },
      {
        icon: "wand",
        title: "One change at a time",
        body: "Precision edit handles single requests, such as swapping the coffee table or removing a lamp.",
      },
    ],
    sections: [
      {
        title: "What free means here",
        body: "Roomwright is in public beta, and every live design tool is free while the beta runs. You need a free account to render, and sign-up takes seconds. Each account gets 20 renders a day, standard-resolution downloads and a design history that keeps your past renders. Paid plans are shown on the pricing page and are launching soon, but nothing is charged during the beta. In short: bring a photo of your room, create an account and start experimenting.",
      },
      {
        title: "Getting a better first render",
        body: "The photo does most of the work, so a little care pays off:",
        bullets: [
          "Shoot from a corner or doorway at about chest height to capture as much of the room as possible.",
          "Turn on the lights and open the curtains. Dim, grainy photos produce muddier results.",
          "Hold the phone level so vertical lines stay straight.",
          "Clear small clutter, or run Declutter & remove first.",
          "Start at Balanced strength, then move to Subtle or Bold depending on how far you want to go.",
        ],
        image: "living-dated",
      },
      {
        title: "Where it helps, and where it stops",
        body: "Use the renders to explore styles, color palettes, furniture ideas and finishes, and to show the people you live with what you have in mind. They are AI-generated visualizations, not shopping lists or plans. The furniture shown is not a specific product, nothing is measured, and colors on screen will differ from real paint and fabric. Before buying, measure your space and check physical samples. For changes involving walls, plumbing or wiring, talk to a qualified professional.",
        image: "bedroom-calm",
      },
    ],
    faqs: [
      {
        q: "Is it really free?",
        a: "Yes, during the public beta. Every live tool is free with a free account, up to 20 renders a day with standard-resolution downloads. Paid plans are listed on the pricing page and are launching soon; nothing is charged during the beta.",
      },
      {
        q: "Do I need to sign up?",
        a: "Yes. A free account is required to render, and sign-up takes seconds. Your renders are saved to your design history so you can come back to them.",
      },
      {
        q: "Will it change my walls, windows or layout?",
        a: "It is designed not to. Roomwright keeps the structure of your room in place and changes the design: furniture, color, materials, lighting and decor. If a render drifts, run it again or try a lower strength.",
      },
      {
        q: "Which rooms and styles can I try?",
        a: "Interior room types include living rooms, kitchens, open-plan spaces, bedrooms, bathrooms, dining rooms, home offices, kids' rooms, nurseries, basements and more. Styles run from Scandinavian, Japandi and mid-century modern to farmhouse, art deco, wabi-sabi and quiet luxury.",
      },
      {
        q: "Can I buy the furniture in the render?",
        a: "The pieces are AI-generated, so they are not specific products. Use a render as a reference for the shapes, colors and scale you like, then shop for similar pieces.",
      },
    ],
    related: ["interior-design-ai", "room-design-ai", "features/redesign", "free-ai-tools/virtual-staging"],
  },

  {
    slug: "free-ai-tools/exterior-design",
    kind: "free-tool",
    status: "live",
    navLabel: "AI Exterior Design Free",
    metaTitle: "Free AI Exterior Design and House Paint Preview",
    metaDescription:
      "Restyle your house, repaint the facade or try new siding and roofing on a photo of your home. Free in the public beta with a free account, 20 renders a day.",
    eyebrow: "Free AI exterior design",
    title: "Try a new look on your house before you call the painters",
    subtitle:
      "Upload a photo of the front of your home to restyle the facade, preview a new paint color or swap the siding and roof. Walls, windows and layout stay where they are. Free during the public beta with a free account.",
    primaryCta: { label: "Redesign my house free", href: studioHref({ tool: "redesign", space: "exterior" }) },
    heroImage: "exterior-modern",
    highlights: ["Restyle, repaint or reclad", "Free account, 20 renders a day", "Your home's structure stays put"],
    steps: [
      {
        title: "Photograph the front of the house",
        body: "Stand across the street or at the end of the drive and fit the whole facade in the frame, in daylight.",
      },
      {
        title: "Restyle or repaint",
        body: "Use Redesign with a style such as Craftsman or modern farmhouse, or switch to Paint and choose a new facade color.",
      },
      {
        title: "Fine-tune the details",
        body: "Swap siding or roofing with Material swap, change a single element with Precision edit and replace a grey sky with Sky & light.",
      },
    ],
    benefits: [
      {
        icon: "droplet",
        title: "Facade color, previewed",
        body: "Try warm white, greige, sage, navy or charcoal on your siding, and add a note to keep the trim white or paint the door.",
      },
      {
        icon: "building",
        title: "Styles from Tudor to modern",
        body: "Craftsman, Colonial, Spanish revival, Mediterranean, coastal, mid-century modern and more, applied to your own house.",
      },
      {
        icon: "layers",
        title: "Siding and roofing swaps",
        body: "Compare board and batten, fiber cement lap, stucco, brick or stone, and roofs from asphalt shingle to standing-seam metal.",
      },
      {
        icon: "sun",
        title: "Better light, fairer judgment",
        body: "Swap an overcast sky for clear midday or golden hour so colors are not judged under a gloomy cast.",
      },
      {
        icon: "eraser",
        title: "Clear the clutter",
        body: "Remove outdoor furniture, bins and clutter with Declutter & remove before you start designing.",
      },
      {
        icon: "wand",
        title: "Small changes, big effect",
        body: "Paint just the front door, swap the garage door or add wall lanterns with Precision edit.",
      },
    ],
    sections: [
      {
        title: "Repaint the facade before you buy a gallon",
        body: "Exterior paint is a big, visible commitment, and small swatches are hard to judge from the curb. Upload a front photo, switch to Paint and try a few body colors on the actual house. Add an instruction for the supporting cast, such as \"keep the trim warm white and paint the front door black.\" Work with the elements that will not change, like the roof, brick, stone and the houses next door. When you have a favorite, paint large sample boards and look at them outdoors in morning and evening light before committing.",
        image: "detail-paint",
      },
      {
        title: "Style changes that respect the house",
        body: "Redesign works with the house you have. Subtle strength keeps most of what is there and refreshes color, lighting and details. Balanced makes a clear change, and Bold pushes toward a full transformation within the same footprint. Because the existing structure stays in place, the results show what finishes and styling can do, not what an addition or a new roofline would look like. For structural changes, and for anything that needs a permit or HOA approval, bring a qualified professional in early.",
        image: "exterior-farmhouse",
      },
      {
        title: "Small changes with big curb appeal",
        body: "Not every exterior project is a full repaint. Some of the most noticeable changes are small, and Precision edit is built for them: one instruction, one change. Try these on a photo of your house:",
        bullets: [
          "Paint the front door a strong accent color, like deep green or navy.",
          "Swap the garage door for a carriage style with windows.",
          "Add a pair of black wall lanterns beside the entry.",
          "Replace plain house numbers with large modern ones.",
          "Frame the steps with two tall planters.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the exterior design tool free?",
        a: "Yes, during the public beta. Redesign, Paint, Material swap, Sky & light and every other live tool are free with a free account, up to 20 renders a day. Paid plans are shown on the pricing page and launching soon, and nothing is charged during the beta.",
      },
      {
        q: "Can I preview a paint color on my own house?",
        a: "Yes. Choose Paint, pick a color and render. You can add an instruction for the trim, shutters or front door. Treat the result as a guide and confirm with real samples, since screens and daylight change how color looks.",
      },
      {
        q: "Will it change the shape of my house?",
        a: "No. It is designed to keep your walls, windows and layout in place while it changes finishes, colors, materials and styling. Additions, new rooflines and structural work need a professional design and usually a permit.",
      },
      {
        q: "What photo works best?",
        a: "A straight-on daytime photo of the whole facade, taken from far enough back to include the roof and the ground. Keep the camera level and, if you can, move cars out of the driveway first.",
      },
      {
        q: "Can I use a render for HOA or design review?",
        a: "It can help you explain an idea, but HOAs and review boards set their own requirements and often ask for paint chips, product details or drawings. Check what yours needs and use the render as a supporting image.",
      },
    ],
    related: ["exterior-ai", "features/paint-visualizer", "features/material-swap", "free-ai-tools/landscape-design"],
  },

  {
    slug: "free-ai-tools/landscape-design",
    kind: "free-tool",
    status: "live",
    navLabel: "AI Landscape Design Free",
    metaTitle: "Free AI Landscape Design for Yards and Patios",
    metaDescription:
      "Redesign your backyard, front yard, patio or pool area from a photo, in styles from cottage to desert xeriscape. Free in beta with a free account.",
    eyebrow: "Free AI landscape design",
    title: "Free AI landscape design, starting from your own yard",
    subtitle:
      "Upload a photo of your backyard, front yard, patio or pool area and see it redesigned in the style you choose. Find a direction before you spend a weekend digging or a budget on plants. Free during the public beta with a free account.",
    primaryCta: { label: "Redesign my yard free", href: studioHref({ tool: "redesign", space: "garden" }) },
    heroImage: "garden-backyard",
    highlights: ["Yards, patios, decks and pools", "Free account, 20 renders a day", "Cottage to desert xeriscape"],
    steps: [
      {
        title: "Photograph the outdoor space",
        body: "Capture the area you want to change in daylight, from the spot where you usually see it, such as the back door or the patio.",
      },
      {
        title: "Pick the space and a style",
        body: "Choose backyard, front yard, patio, deck, pool area, courtyard, rooftop terrace or side yard, then a style such as cottage, Japanese zen or modern.",
      },
      {
        title: "Refine the plan",
        body: "Say what to keep, like an existing tree, add single features with Precision edit and relight the scene with Sky & light.",
      },
    ],
    benefits: [
      {
        icon: "trees",
        title: "From formal to wild",
        body: "Try English formal, cottage, Mediterranean, tropical, woodland, wildflower meadow and more on your own yard.",
      },
      {
        icon: "leaf",
        title: "Low-water looks",
        body: "Desert xeriscape and Mediterranean styles show how the space could look with gravel, grasses and dry-garden planting.",
      },
      {
        icon: "eraser",
        title: "Start from a clean slate",
        body: "Clear old furniture, toys and clutter with Declutter & remove to see the space as it really is.",
      },
      {
        icon: "wand",
        title: "Add one feature",
        body: "Try a fire pit, a pergola, a path or a bench with Precision edit, without redesigning the whole yard.",
      },
      {
        icon: "sun",
        title: "See it at golden hour",
        body: "Relight the garden for sunset or blue-hour dusk to picture summer evenings outside.",
      },
      {
        icon: "pencil",
        title: "Plan from a sketch",
        body: "Drew a layout idea on paper? Sketch to render turns a perspective sketch of your garden into a photoreal image.",
      },
    ],
    sections: [
      {
        title: "Plan around sun, soil and scale",
        body: "A render shows how a garden could look. It does not know your climate, your soil, how much sun each bed gets or how big a plant will be in five years. Use the images to settle layout, mood and style, then choose the actual plants with your conditions in mind:",
        bullets: [
          "Check your USDA hardiness zone, or your local equivalent, before buying.",
          "Note how many hours of direct sun each bed gets.",
          "Look up each plant's mature height and spread, not its nursery size.",
          "Ask a local nursery which plants do well in your area.",
        ],
        image: "garden-front",
      },
      {
        title: "Keep what already works",
        body: "Mature trees, a sound patio or a good fence can take years and real money to replace, so it pays to design around them. Add an instruction such as \"keep the large maple and the stone patio\" and start at Subtle or Balanced strength. Compare that with a Bold version to see whether a bigger change is worth it. Often the best plan sits in between: new planting and lighting around the bones you already have.",
        image: "garden-patio",
      },
      {
        title: "Before anything goes in the ground",
        body: "Garden renders are ideas, not construction plans. Grading, drainage, retaining walls, pools, decks and anything electrical call for qualified professionals, and some need permits. In the US, call 811 a few days before you dig so underground utility lines can be marked. Check HOA rules for fences, front yards and hardscape too. With those basics covered, the render becomes a clear brief for a landscaper or a realistic plan for your own weekends.",
      },
    ],
    faqs: [
      {
        q: "Is the landscape design tool free?",
        a: "Yes, during the public beta. Garden redesign and every other live tool are free with a free account, up to 20 renders a day. Paid plans are listed on the pricing page and launching soon, and nothing is charged during the beta.",
      },
      {
        q: "Will the plants in the render grow where I live?",
        a: "Not necessarily. The render shows a style, not a plant list for your climate. Use it for layout and mood, then pick plants suited to your hardiness zone, sun and soil with help from a local nursery.",
      },
      {
        q: "Can I keep my existing trees or patio?",
        a: "Yes. Say what to keep in your instruction and use Subtle or Balanced strength. If something you wanted to keep changes, run it again or use Precision edit on the version you like.",
      },
      {
        q: "What outdoor spaces can I redesign?",
        a: "Backyards, front yards, patios, decks, pool areas, courtyards, rooftop terraces and side yards. For the house itself, use the exterior tools to restyle or repaint the facade.",
      },
      {
        q: "Can it design drainage, grading or retaining walls?",
        a: "No. Those need a landscape professional or engineer who can assess your site. Roomwright helps you picture the finished look and explain it to them.",
      },
    ],
    related: ["landscaping-ai", "free-ai-tools/exterior-design", "features/sky-colors", "features/precision-edit"],
  },

  {
    slug: "free-ai-tools/virtual-staging",
    kind: "free-tool",
    status: "live",
    navLabel: "Virtual Staging AI Free",
    metaTitle: "Free AI Virtual Staging for Empty Rooms",
    metaDescription:
      "Furnish an empty room from one photo in the style you choose, for a listing, a rental or planning a move. Free during the public beta with a free account.",
    eyebrow: "Free AI virtual staging",
    title: "Free virtual staging that turns an empty room into a home",
    subtitle:
      "Upload a photo of an empty room, choose the room type and style, and see it furnished while the room itself stays as it is. Free during the public beta with a free account and 20 renders a day.",
    primaryCta: { label: "Stage a room free", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
    heroImage: "bedroom-warm",
    highlights: ["Living rooms, bedrooms, nurseries", "Free account, 20 renders a day", "Furniture added, structure untouched"],
    steps: [
      {
        title: "Upload an empty room",
        body: "Use a wide, bright photo taken from a corner. If the room still has furniture in it, clear it first with Declutter & remove.",
      },
      {
        title: "Choose room type and style",
        body: "Tell it what the room is for, from bedroom to home office, and pick a style such as Scandinavian, transitional or mid-century modern.",
      },
      {
        title: "Download and use it honestly",
        body: "Save your favorite version. If it is going into a sale or rental listing, label it as virtually staged.",
      },
    ],
    benefits: [
      {
        icon: "sofa",
        title: "Furniture that suits the room",
        body: "A bedroom gets a bed and nightstands, a dining room gets a table and chairs. You choose the room type and the style follows.",
      },
      {
        icon: "users",
        title: "For sellers, landlords and movers",
        body: "Stage a listing, dress up a rental ad or plan how to furnish a place you have just moved into.",
      },
      {
        icon: "eraser",
        title: "Not empty yet? Clear it",
        body: "Declutter & remove takes out existing furniture so you can stage the empty version.",
      },
      {
        icon: "lamp",
        title: "Or just add finishing touches",
        body: "Decor staging adds rugs, art, plants and accessories to a furnished room without replacing the furniture.",
      },
      {
        icon: "palette",
        title: "Try more than one style",
        body: "Stage the same room as Scandinavian, coastal, transitional or farmhouse and keep the one that suits it best.",
      },
    ],
    sections: [
      {
        title: "Stage it free, label it honestly",
        body: "If a staged photo is going into a sale or rental listing, disclose it. Many MLSs and brokerages require virtually staged images to be labeled, and some also require the original photo alongside. Just as important, staging should only add furniture and decor. Using edits to hide damage, change a view or alter permanent features misleads the people who will tour the home, and it tends to backfire the moment they walk in. A clear \"virtually staged\" caption costs nothing and protects everyone.",
        image: "empty-room",
      },
      {
        title: "Not selling? Plan the move-in",
        body: "Virtual staging is not only for listings. If you have just moved into an empty apartment or house, stage photos of each room in a couple of styles to decide what to buy first, what kind of sofa the living room wants and whether that dining table idea works. Treat the furniture as a guide to mood and rough scale rather than a measurement. Before ordering, measure the room and the pieces, including the doorways and stairs they have to pass through.",
        image: "living-japandi",
      },
      {
        title: "Photos that stage well",
        body: "Empty rooms can be tricky to photograph because there is nothing in them to show scale. These habits help:",
        bullets: [
          "Shoot from a corner so two or three walls and plenty of floor are visible.",
          "Keep the camera level, at about chest height.",
          "Use daylight plus room lights, and avoid harsh streaks of direct sun.",
          "Take a separate photo for each angle you want staged, since every render works from a single image.",
        ],
        image: "empty-room-2",
      },
    ],
    faqs: [
      {
        q: "Is virtual staging really free?",
        a: "Yes, during the public beta. With a free account you get up to 20 renders a day, downloaded at standard resolution. Paid plans are listed on the pricing page and launching soon, and nothing is charged during the beta.",
      },
      {
        q: "Does the room have to be empty?",
        a: "Empty rooms give the cleanest results. If furniture is in the way, run Declutter & remove first, then stage the cleared photo. For a furnished room that just looks bare, try Decor staging instead.",
      },
      {
        q: "Do I need to disclose virtual staging?",
        a: "If the photo is used to sell or rent a property, you should, and many MLSs and brokerages require it. Label it as virtually staged, follow your local rules and never use staging to hide defects.",
      },
      {
        q: "Can I pick the furniture style?",
        a: "Yes. Choose from styles such as modern, Scandinavian, mid-century modern, transitional, coastal, farmhouse and quiet luxury, and add a note if you need something specific, like a desk or a crib.",
      },
      {
        q: "Is the furniture real?",
        a: "No. It is AI-generated to suit the room and style, so it is not a specific product you can order. Use it as a guide to the kind of pieces that work in the space.",
      },
    ],
    related: ["virtual-staging-ai", "for/realtors", "features/decor-staging", "features/furniture-removal"],
  },
];
