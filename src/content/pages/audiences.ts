// Audience landing pages (/for/*). Each one speaks to a single profession and
// deep-links into the studio tool that profession reaches for first.
import type { LandingPage } from "@/content/types";
import { studioHref } from "@/lib/tools";

export const audiencePages: LandingPage[] = [
  {
    slug: "for/realtors",
    kind: "audience",
    status: "live",
    navLabel: "Virtual Staging for Realtors",
    metaTitle: "Virtual Staging for Realtors and Listing Agents",
    metaDescription:
      "Stage vacant rooms, clear occupied ones and fix grey-sky exteriors from your listing photos. Free in beta with a free account. Label staged photos as required.",
    eyebrow: "For real estate agents",
    title: "Virtual staging that makes empty listings feel like home",
    subtitle:
      "Upload the shots from your listing photographer, then furnish vacant rooms, clear out an occupied home or trade a flat grey sky for a bright one. The rooms themselves stay as they are, so buyers still see the real house.",
    primaryCta: { label: "Stage a listing photo", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
    heroImage: "living-modern",
    highlights: ["For vacant and occupied listings", "Walls, windows and layout stay put", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Upload the listing photo",
        body: "Start with your photographer's shot or your own. Wide, level, well-lit photos of an empty or cleared room give the most believable staging.",
      },
      {
        title: "Stage for the likely buyer",
        body: "Choose the room type and a style that suits who will tour the home: warm transitional for a family suburb, pared-back modern for a downtown condo.",
      },
      {
        title: "Review, label, publish",
        body: "Check each render at full size, keep the original next to it and label the staged version the way your MLS and brokerage require.",
      },
    ],
    benefits: [
      {
        icon: "sofa",
        title: "Furnish vacant rooms",
        body: "Empty rooms photograph as cold and hard to read. A furnished version helps buyers picture where the sofa goes and how the bedroom works.",
      },
      {
        icon: "eraser",
        title: "Clear an occupied home",
        body: "Remove the seller's furniture and clutter first, then stage the empty result. Useful when the owners are still living there.",
      },
      {
        icon: "sun",
        title: "Rescue grey-sky exteriors",
        body: "Swap a flat sky on the front elevation for clear midday blue or twilight with the lights on, without booking a reshoot.",
      },
      {
        icon: "lightbulb",
        title: "Give the bonus room a job",
        body: "Show the spare room as a home office or a nursery, so an awkward space reads as usable square footage.",
      },
      {
        icon: "clock",
        title: "Ready when the photos are",
        body: "No rental furniture, delivery windows or staging crew to schedule. Stage the set the day your photographer delivers.",
      },
      {
        icon: "shield",
        title: "Honest by design",
        body: "Staging adds furnishings and decor, not new walls or views, so the home buyers tour matches the one they saw online.",
      },
    ],
    sections: [
      {
        title: "Disclosure comes with the territory",
        body: "Virtual staging is common, and so are the rules around it. Many MLSs and brokerages require staged photos to be labeled, some also want the unstaged original in the listing, and some jurisdictions add rules of their own. A buyer who feels misled at the front door is hard to win back, so treat disclosure as part of doing staging well.",
        bullets: [
          "Label every staged image clearly, in the caption or on the photo itself.",
          "Include the original photo wherever your MLS asks for it.",
          "Stage furniture and decor only. Never use edits to hide damage, change a view or alter permanent features.",
          "Present any remodel idea as a concept, not as the home's current condition.",
        ],
        image: "empty-room",
      },
      {
        title: "Which rooms to stage first",
        body: "Put your effort where buyers' attention lands. The main living area, the kitchen and dining zone and the primary bedroom carry most of the listing. Next come rooms without an obvious purpose, such as a bonus room, a finished basement or a nook under the stairs. Giving those spaces a job helps buyers picture using the square footage they are paying for. Keep one style running through the whole set so the photos tell a single story, and resist filling every corner. A few well-scaled pieces read as spacious; a crowded room reads as small.",
        image: "bedroom-warm",
      },
      {
        title: "Occupied homes and fixer-uppers",
        body: "When the sellers still live there, run Declutter & remove to clear the room, check the cleared result, then stage it. If a room is furnished but feels bare, Decor staging adds rugs, art, plants and accessories while leaving the furniture in place. For a dated home with good bones, Redesign can show what the kitchen or living room could become. Use those images as a clearly labeled extra, placed after the true-to-life photos, rather than as the lead image. Buyers get the honest picture first and the possibilities second.",
      },
    ],
    faqs: [
      {
        q: "Do I have to disclose virtually staged photos?",
        a: "Often, yes, and it is good practice everywhere. Many MLSs and brokerages require staged images to be labeled, and some also require the unstaged original. Check your local MLS rules and brokerage policy. At a minimum, label every staged photo and never use edits to hide a defect or change a permanent feature.",
      },
      {
        q: "What if the sellers are still living in the home?",
        a: "Clear each room first with Declutter & remove, then stage the cleared photo. Rooms packed with overlapping furniture can take more than one pass, so look over the empty version before you furnish it.",
      },
      {
        q: "Will the staged furniture suit the size of the room?",
        a: "Staging is built around the room in your photo, so pieces are placed to fit the space. It is still an AI image, so review each one for anything that looks off, such as a chair blocking a doorway, and re-render or use Precision edit to fix it.",
      },
      {
        q: "Which listing photos work best?",
        a: "Wide shots taken from a corner or doorway at about chest height, with the lights on and the blinds open. Avoid extreme wide-angle distortion and very dark images. A strong original photo produces a more convincing staged version.",
      },
      {
        q: "Can I change the sky on exterior photos?",
        a: "Yes. Sky & light replaces a dull sky and relights the scene, with options from clear midday blue to twilight with the lights on. Treat it like any other photo edit and follow your MLS rules on altered images.",
      },
      {
        q: "What does it cost?",
        a: "Roomwright is in public beta, so every live tool is free with a free account, up to 20 renders a day. Paid plans for heavier use and teams are shown on the pricing page and are launching soon. Nothing is charged during the beta.",
      },
    ],
    related: ["virtual-staging-ai", "real-estate-ai", "features/furniture-removal", "features/sky-colors"],
  },

  {
    slug: "for/renovators",
    kind: "audience",
    status: "live",
    navLabel: "AI Remodel Preview",
    metaTitle: "AI Remodel Preview for Kitchens, Baths and More",
    metaDescription:
      "Preview a kitchen, bath or whole-room remodel on a photo of your own space. Compare styles, finishes and paint before you commit. Free in beta with an account.",
    eyebrow: "For homeowners planning a remodel",
    title: "See your remodel in your own room before you commit",
    subtitle:
      "Upload a photo of the room you are itching to change and try new styles, cabinets, counters, floors and paint on the real thing. Make the big calls while changing your mind is still easy.",
    primaryCta: { label: "Preview my remodel", href: studioHref({ tool: "redesign" }) },
    heroImage: "kitchen-modern",
    highlights: ["Your room, not a showroom", "Subtle, balanced or bold changes", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Photograph the room as it is",
        body: "Stand in a corner, turn on the lights and capture as much of the room as you can. If it is cluttered, Declutter & remove can clear it first.",
      },
      {
        title: "Choose how far to go",
        body: "Pick a style, then a strength: Subtle keeps most of what is there, Balanced makes a noticeable change and Bold goes for a full transformation within the same walls.",
      },
      {
        title: "Narrow it down",
        body: "Swap a single surface with Material swap or Paint, fix one detail with Precision edit and save the versions worth showing your contractor.",
      },
    ],
    benefits: [
      {
        icon: "eye",
        title: "See it in your actual space",
        body: "No guessing how a showroom kitchen translates to yours. The preview starts from your room's real bones: its windows, its proportions and its light.",
      },
      {
        icon: "layers",
        title: "Test the smaller job",
        body: "Try painted cabinets instead of new ones, or new counters with the current floor, and see whether a lighter remodel gets you most of the way.",
      },
      {
        icon: "palette",
        title: "Finishes side by side",
        body: "Put sage shaker cabinets next to natural walnut, or white quartz next to butcher block, all on the same photo.",
      },
      {
        icon: "heart",
        title: "Settle the style debate",
        body: "When two people picture two different kitchens, render both. A concrete image turns a stalemate into a choice.",
      },
      {
        icon: "message",
        title: "Brief your pros clearly",
        body: "Show contractors and designers the look you mean, instead of describing it or scrolling through dozens of saved photos.",
      },
      {
        icon: "wand",
        title: "Change one thing at a time",
        body: "Precision edit handles single requests, such as a new light fixture or a different backsplash, without redoing the rest of the room.",
      },
    ],
    sections: [
      {
        title: "Decide what stays before you decide what goes",
        body: "Most remodels come down to a string of keep-or-replace decisions. Start with a Subtle redesign to see how far paint, lighting and new textiles take the room you already have. Then run Balanced and Bold versions of the same photo. If the subtle version already feels right, you may be looking at a refresh rather than a gut renovation. If only the bold one excites you, you have learned something important before any demolition starts. Either way, you walk into the first contractor meeting knowing what you want.",
        image: "living-dated",
      },
      {
        title: "What a preview can and cannot tell you",
        body: "A Roomwright render is a visualization of a design direction. It is not a measured plan, a materials list or a price. Finishes are generic representations, so bring home real samples before you order, and look at paint and stone in your own light at different times of day. Anything that touches structure, plumbing, gas or electrical, such as removing a wall or moving a sink, needs a licensed contractor and often a permit. The preview starts that conversation; the professionals finish it.",
        image: "detail-tile",
      },
      {
        title: "Bring the photo you have been saving",
        body: "Most people planning a remodel have a folder of rooms they love. Style transfer borrows the look of one of those photos, including its palette, materials and mood, and applies it to your room while your layout stays put. The strength setting controls how closely it follows the reference. It is a quick way to find out whether a look you admired in someone else's house suits your space, your light and the rooms next to it. If it does, the render makes a far clearer brief than a folder of screenshots.",
      },
    ],
    faqs: [
      {
        q: "Will the preview look like my actual room?",
        a: "Yes. You start from your own photo, and Roomwright is designed to keep the walls, windows and layout in place while the design changes. Look each render over closely. AI can occasionally misread a detail, and a re-render often fixes it.",
      },
      {
        q: "Can Roomwright tell me what my remodel will cost?",
        a: "No. It shows what a design could look like, not what it takes to build. For pricing, take your favorite renders to a few contractors and ask for quotes based on real measurements and specified materials.",
      },
      {
        q: "Can I preview removing a wall or moving the island?",
        a: "Roomwright is built to work within your existing structure, so it is best for finishes, fixtures, furniture, color and style. Structural or layout changes need a licensed professional to assess what is possible, and usually a permit.",
      },
      {
        q: "How accurate are paint and material colors?",
        a: "Close enough to compare directions, not close enough to order from. Screens, lighting and camera settings all shift color. Once you have a favorite, test physical samples in the room and look at them in morning and evening light.",
      },
      {
        q: "Can I try several ideas on the same photo?",
        a: "Yes. Every render starts from your original photo, so you can compare styles, strengths and finishes as far as your daily allowance goes. Your renders are saved to your design history.",
      },
      {
        q: "What does it cost?",
        a: "Every live tool is free during the public beta with a free account, up to 20 renders a day. Paid plans are listed on the pricing page and launching soon, and nothing is charged during the beta.",
      },
    ],
    related: ["partial-remodel-ai", "kitchen-design-ai", "features/material-swap", "features/paint-visualizer"],
  },

  {
    slug: "for/interior-designers",
    kind: "audience",
    status: "live",
    navLabel: "AI Rendering for Interior Designers",
    metaTitle: "AI Concept Renders for Interior Designers",
    metaDescription:
      "Turn a photo of your client's room into concept renders in several directions, then refine the favorite one detail at a time. Free in beta with a free account.",
    eyebrow: "For interior designers",
    title: "Concept renders built on your client's real room",
    subtitle:
      "Photograph the space on your site visit and explore several design directions on it before you open a 3D program. Refine the favorite one change at a time, and walk into the presentation with pictures instead of promises.",
    primaryCta: { label: "Start a concept", href: studioHref({ tool: "redesign", space: "interior" }) },
    heroImage: "living-japandi",
    highlights: ["Concepts on the client's own room", "Refine one detail at a time", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Shoot the room on your site visit",
        body: "Take a few wide photos from the corners. They become the base for every concept, so your client sees ideas in a room they already know.",
      },
      {
        title: "Explore directions quickly",
        body: "Run the same photo through two or three styles at Balanced strength, or apply a mood image with Style transfer, and pick the direction worth developing.",
      },
      {
        title: "Refine, then present",
        body: "Tighten the favorite with Precision edit, Material swap and Paint, then use the renders to anchor the conversation before drawings and specifications.",
      },
    ],
    benefits: [
      {
        icon: "image",
        title: "Ideas in a familiar room",
        body: "It is easier for clients to react to their own living room than to a mood board. Concepts built on their photo remove a layer of imagination.",
      },
      {
        icon: "layers",
        title: "More directions, less overtime",
        body: "Show warm minimal, quiet luxury and mid-century options for the same room without building three models.",
      },
      {
        icon: "wand",
        title: "Edit during the meeting",
        body: "When the client says the sofa feels heavy, swap it with Precision edit and look again together instead of booking another round.",
      },
      {
        icon: "palette",
        title: "Quick finish studies",
        body: "Try limewash plaster against grasscloth, or herringbone oak against large porcelain tile, on the same photo.",
      },
      {
        icon: "sparkles",
        title: "Start from a mood image",
        body: "Style transfer applies the palette and feel of an inspiration photo to your client's room, with a strength control for how literal it gets.",
      },
      {
        icon: "pencil",
        title: "Concept a custom piece",
        body: "Describe a one-off console or banquette in Furniture creator and get a concept image to discuss before you brief your workroom.",
      },
    ],
    sections: [
      {
        title: "Where it fits in your process",
        body: "Roomwright earns its place between the discovery meeting and the first real presentation, when you know the room and the brief but have not yet committed hours to drawings or 3D. Use it to test directions, draw out the client's reactions early and cut down on full revision rounds later. It does not replace your specifications, sourcing or technical drawings. The furniture and finishes in a render are AI-generated interpretations, so present them as concept imagery and let your selections define the final design.",
        image: "dining-modern",
      },
      {
        title: "A concept round in practice",
        body: "Here is one way to run it. After the site visit, render the living room in three directions at Balanced strength. Show them together and ask the client what they like in each, rather than which one they prefer. Their answers become your brief. Next, combine the favorite elements with Style transfer or a specific instruction, and use Precision edit for single changes: a curved sofa, a darker rug, a lower pendant. By the time you open your drawing tools, the direction is already agreed.",
      },
      {
        title: "Setting expectations with clients",
        body: "Clients can fall for a render, so frame it before you show it. Explain that these are concept images: the pieces shown illustrate a direction rather than products you have sourced, and colors on a screen will differ from samples in their own light. Then bring real finish samples and product selections as the design develops. Framed this way, AI concepts speed up agreement without creating expectations you later have to walk back.",
        image: "decor-shelf",
      },
    ],
    faqs: [
      {
        q: "Will renders show the exact products I specify?",
        a: "No. Furniture and finishes in a render are AI-generated interpretations of a style or instruction, not specific products. Use them to agree on direction, then carry that direction into your own sourcing and specifications.",
      },
      {
        q: "Can I start from a mood board or a past project photo?",
        a: "Yes. Style transfer takes an inspiration photo and applies its look to your client's room, and the strength setting controls how closely it follows the reference. A clear photo of a single room usually gives a more predictable result than a busy collage.",
      },
      {
        q: "Can I change one element without redoing the whole room?",
        a: "Yes. Precision edit takes a single instruction, like swapping the coffee table for a round travertine one or removing a floor lamp, and aims to leave the rest of the image as it is.",
      },
      {
        q: "What if the room is still a shell or only exists on paper?",
        a: "Sketch to render turns a hand sketch or line drawing into a photoreal image, and Text to design generates a room from a written description. Both help on new builds and gut renovations before there is anything to photograph.",
      },
      {
        q: "Can I design a custom furniture piece?",
        a: "Furniture creator generates a concept image of a one-off piece from your description, such as a curved banquette in green velvet. Treat it as a starting point for your maker, who will handle dimensions, construction and materials.",
      },
      {
        q: "What does it cost?",
        a: "Every live tool is free during the public beta with a free account, up to 20 renders a day. Paid plans, including options for small teams, are listed on the pricing page and launching soon. Nothing is charged during the beta.",
      },
    ],
    related: ["interior-design-ai", "features/design-transfer", "features/precision-edit", "features/furniture-creator"],
  },

  {
    slug: "for/architects",
    kind: "audience",
    status: "live",
    navLabel: "AI Architecture Design",
    metaTitle: "AI Architecture Design From Your Sketches",
    metaDescription:
      "Turn massing sketches, facade studies and line drawings into photoreal concept images for early client conversations. Free in beta with a free account.",
    eyebrow: "For architects",
    title: "From trace paper to a picture your client can read",
    subtitle:
      "Upload a massing sketch or facade study and get a photoreal concept image back, then test cladding, roofing and light on the same scheme. Keep full visualization budgets for later stages and use this where early speed matters most.",
    primaryCta: { label: "Render a sketch", href: studioHref({ tool: "sketch" }) },
    heroImage: "sketch-plan",
    highlights: ["Hand sketches to photoreal images", "Test cladding, roofs and light", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Upload the drawing",
        body: "A scan or photo of a hand sketch, a massing study or a line drawing exported from your modeling software. Clear lines and a single perspective work best.",
      },
      {
        title: "Set type, style and context",
        body: "Choose the space and the building or room type, pick a style direction and add an instruction about materials, setting or time of day.",
      },
      {
        title: "Study the options",
        body: "Generate several interpretations, keep the one closest to your intent, then use it as the starting image for Material swap and Sky & light.",
      },
    ],
    benefits: [
      {
        icon: "pencil",
        title: "Starts from your lines",
        body: "Sketch to render works from your drawing, so the image follows the massing and openings you drew instead of inventing a new building.",
      },
      {
        icon: "layers",
        title: "Materiality studies",
        body: "Put charred timber, painted stucco, brick or natural stone on the same massing and compare. Roof options include standing-seam metal, slate and clay tile.",
      },
      {
        icon: "sun",
        title: "Light and atmosphere",
        body: "Show the scheme at golden hour, under soft overcast or at dusk with the lights on, using Sky & light.",
      },
      {
        icon: "users",
        title: "For clients who can't read plans",
        body: "Many homeowners struggle with elevations and sections. A photoreal image gets them reacting to the design instead of decoding it.",
      },
      {
        icon: "clock",
        title: "Early-stage speed",
        body: "Explore several options in one sitting and keep the full rendering budget for the scheme the client actually chooses.",
      },
      {
        icon: "building",
        title: "Existing buildings too",
        body: "For renovation work, start from a site photo and use Redesign, Material swap or Paint to show facade options on the real building.",
      },
    ],
    sections: [
      {
        title: "Getting a faithful render from a sketch",
        body: "The cleaner the input, the closer the output. A few drawing habits make a real difference:",
        bullets: [
          "Use dark, confident linework and go easy on hatching, which can read as texture.",
          "Draw one clear perspective or elevation per image, not a sheet of views.",
          "Show glazing, roof pitch and material changes with simple lines, and name the materials in your instruction.",
          "Describe the setting in words, such as a suburban street with mature trees or a hillside with dry grasses.",
          "Render a few times and keep the closest version. Each pass reads ambiguous areas a little differently.",
        ],
      },
      {
        title: "Materiality and mood on one massing",
        body: "Once a render captures the form, treat it as a base for studies. Use it as the starting image for Material swap and compare siding such as white board and batten, charred timber, painted stucco and natural stone, or roofs in standing-seam metal and slate. Then use Sky & light to see the scheme under clear midday sun, at golden hour or at blue-hour dusk. Four versions of the same building side by side on one sheet can settle a material conversation faster than a page of description.",
        image: "exterior-modern",
      },
      {
        title: "Know where it stops",
        body: "These are concept images. They are not measured drawings, they do not check code compliance or structure, and details such as window counts, stair geometry or roof junctions can drift between passes. Review every image before it leaves the office, and label renders used in public or planning presentations as illustrative. Your drawings, specifications and professional judgment remain the design of record. Roomwright simply helps more people understand the idea sooner.",
      },
    ],
    faqs: [
      {
        q: "Will the render stay true to my sketch?",
        a: "It works from your drawing's lines and composition, and clearer inputs give closer results. AI can still reinterpret ambiguous areas, so check details such as window counts and rooflines, and re-render or use Precision edit where needed.",
      },
      {
        q: "What kind of drawings work best?",
        a: "Clean line drawings, confident hand sketches and simple massing views. One perspective per image works better than a sheet with several views, plans or dimension strings.",
      },
      {
        q: "Can I use it on renovation and addition projects?",
        a: "For facade updates on an existing building, start from a site photo and use Redesign, Material swap or Paint. Those tools keep the existing structure in place, so to show a new volume such as an addition, sketch it and use Sketch to render.",
      },
      {
        q: "Are the images suitable for permit or planning submissions?",
        a: "Not as technical documents. They are AI-generated visualizations for exploring and communicating ideas. If you use one in a public presentation, label it as illustrative and rely on your drawings for anything regulatory.",
      },
      {
        q: "Does it work for interiors and landscapes?",
        a: "Yes. Sketch to render covers interiors, exteriors and gardens, so a quick perspective of a double-height living space or a courtyard renders the same way as a facade study.",
      },
      {
        q: "What does it cost?",
        a: "Every live tool is free during the public beta with a free account, up to 20 renders a day. Paid plans for practices and teams are listed on the pricing page and launching soon. Nothing is charged during the beta.",
      },
    ],
    related: ["features/sketch-to-render", "exterior-ai", "features/material-swap", "features/text-to-design"],
  },

  {
    slug: "for/contractors",
    kind: "audience",
    status: "live",
    navLabel: "AI for Contractors",
    metaTitle: "AI for Contractors: Show the Finished Job First",
    metaDescription:
      "Show homeowners their own kitchen, bath or facade with the cabinets, counters, floors, siding or paint you propose, and settle selections sooner. Free in beta.",
    eyebrow: "For contractors and remodelers",
    title: "Let clients see the finished job before demo day",
    subtitle:
      "Photograph the space on your estimate visit, then show the homeowner their own kitchen, bath or exterior with the cabinets, counters, flooring, siding or paint you are proposing. Selections move faster when everyone is looking at the same picture.",
    primaryCta: { label: "Swap finishes on a photo", href: studioHref({ tool: "materials" }) },
    heroImage: "detail-countertop",
    highlights: ["Floors, counters, cabinets, siding", "Your client's space, not a catalog", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Photograph on the walkthrough",
        body: "Take wide, level shots of each room or elevation in the scope while you are on site for the estimate.",
      },
      {
        title: "Swap in what you're proposing",
        body: "Choose a surface such as cabinets, countertops, flooring, siding or roof, pick a material and render. Use Paint for walls and facades.",
      },
      {
        title: "Send options with the proposal",
        body: "Pair two or three renders with your written selections so the homeowner can compare the options and decide.",
      },
    ],
    benefits: [
      {
        icon: "layers",
        title: "Selections without the sample shuffle",
        body: "Show navy shaker next to matte white slab cabinets on the client's own kitchen, instead of holding a door sample against the old ones.",
      },
      {
        icon: "hammer",
        title: "Clear scope conversations",
        body: "A render with new counters over the existing floor makes it plain what is in the job and what is not.",
      },
      {
        icon: "eye",
        title: "Show the upgrade honestly",
        body: "Put the standard option and the upgrade on the same photo and let the homeowner judge the difference for themselves.",
      },
      {
        icon: "home",
        title: "Exteriors included",
        body: "Compare fiber cement lap with board and batten, or asphalt shingle with standing-seam metal, on the client's own house.",
      },
      {
        icon: "droplet",
        title: "Paint decisions settled",
        body: "Preview interior or exterior colors on the actual walls, then confirm with physical samples before anyone opens a can.",
      },
      {
        icon: "message",
        title: "Expectations set early",
        body: "When the homeowner has approved a picture alongside a written selection sheet, there is less room for surprises at handover.",
      },
    ],
    sections: [
      {
        title: "Selections that don't stall the start date",
        body: "Waiting on finish decisions can leave a signed job sitting idle. Material swap puts the options on the homeowner's own photos: cabinets in matte white slab, sage or navy shaker, natural walnut, fluted oak or black matte; countertops in white quartz, Calacatta marble, black granite, soapstone, terrazzo or butcher block; flooring from light oak to large porcelain tile. Narrow the field to two or three renders, then bring physical samples of the finalists. Choosing between two pictures is easier than choosing between twenty samples.",
        image: "detail-cabinets",
      },
      {
        title: "Keep the picture in its place",
        body: "A render is a communication tool, not a specification. The materials shown are generic representations rather than the exact product you will install, and nothing in the image is measured. Keep your written selections, product details and drawings as the documents that define the work, and say so in the proposal: the render is illustrative, the selection sheet governs. Handled that way, the image builds confidence without creating a promise you never meant to make.",
      },
      {
        title: "Exterior jobs: siding, roofing and paint",
        body: "Exterior work is where a picture helps most, because the result is on show to the whole street. From a photo of the house, try siding such as white board and batten, fiber cement lap, painted stucco, natural stone or red brick, and roofing in asphalt shingle, slate, clay tile or standing-seam metal. Use Paint to test body colors and Sky & light to replace a grey sky so colors read fairly. If the home is in an HOA, its review board will likely want product and color details as well; the render supports that submission rather than replacing it.",
        image: "exterior-brick",
      },
    ],
    faqs: [
      {
        q: "Will the render match the exact product I install?",
        a: "No. Material swap shows a type of finish, such as white quartz or navy shaker, not a specific manufacturer's product. Use renders to agree on direction, then confirm with physical samples and your written selections.",
      },
      {
        q: "Can it help with measurements or estimates?",
        a: "No. Roomwright does not measure spaces, calculate quantities or price work. Do your takeoffs and estimates the way you always have; the render helps the client see what they are buying.",
      },
      {
        q: "Which surfaces can I change?",
        a: "Flooring, walls, countertops, cabinets, ceilings, siding and roofs with Material swap, plus wall and facade colors with Paint. For single changes, like a new pendant or faucet, use Precision edit.",
      },
      {
        q: "Can I show several options from one photo?",
        a: "Yes. Each render starts from your photo, so you can produce a standard and an upgraded version, or three cabinet colors, and present them together. Renders are saved to your design history.",
      },
      {
        q: "What if the client's rooms are full of furniture?",
        a: "Run Declutter & remove to clear the room first. A cleaner starting image keeps the homeowner focused on the finishes you are proposing.",
      },
      {
        q: "What does it cost?",
        a: "Every live tool is free during the public beta with a free account, up to 20 renders a day. Paid plans for contractors and small teams are listed on the pricing page and launching soon. Nothing is charged during the beta.",
      },
    ],
    related: ["features/material-swap", "cabinet-design-ai", "countertop-ai", "flooring-ai"],
  },

  {
    slug: "for/builders",
    kind: "audience",
    status: "live",
    navLabel: "Construction AI for Builders",
    metaTitle: "Pre-Construction Marketing Renders for Builders",
    metaDescription:
      "Turn elevation sketches into photoreal exteriors for pre-sales, preview finish packages and stage completed spec homes. Free in beta with a free account.",
    eyebrow: "For home builders and developers",
    title: "Marketing visuals for homes that aren't built yet",
    subtitle:
      "Start from an elevation sketch and create photoreal exteriors for site signs, brochures and your website, then preview finish packages and stage completed spec homes. One studio covers the run from lot to listing.",
    primaryCta: { label: "Render an elevation", href: studioHref({ tool: "sketch", space: "exterior" }) },
    heroImage: "exterior-dusk",
    highlights: ["Elevation sketches to photoreal", "Finish packages and spec homes", "Free in beta, 20 renders a day"],
    steps: [
      {
        title: "Upload the elevation",
        body: "Use a hand sketch, a line drawing from your plan set or a simple massing view of the house, townhouse or apartment building.",
      },
      {
        title: "Pick the style and setting",
        body: "Choose the building type and an architectural style, such as Craftsman, modern farmhouse or contemporary, then describe the lot, landscaping and time of day.",
      },
      {
        title: "Build the marketing set",
        body: "Refine with Material swap and Sky & light, check each image against the plans, and label it as illustrative before it goes on signs, brochures or listings.",
      },
    ],
    benefits: [
      {
        icon: "pencil",
        title: "Sell from the drawing",
        body: "Give buyers a photoreal view of the home while the lot is still stakes and string lines.",
      },
      {
        icon: "layers",
        title: "Elevation options",
        body: "Render one plan with different siding, roofing and color schemes to offer buyer choices or plan variety along a street.",
      },
      {
        icon: "sun",
        title: "Hero-shot lighting",
        body: "Set the scene at golden hour or at twilight with the lights on, without waiting for the weather or the build.",
      },
      {
        icon: "palette",
        title: "Preview finish packages",
        body: "Show a light oak and white quartz package next to a walnut and soapstone one on the same kitchen image.",
      },
      {
        icon: "sofa",
        title: "Stage finished spec homes",
        body: "Furnish completed but empty homes with Virtual staging so listing photos show how the rooms live. Disclose staging in the listing.",
      },
      {
        icon: "megaphone",
        title: "One look across a community",
        body: "Reuse the same style choices for every plan in a development so signs, brochures and web listings feel like one place.",
      },
    ],
    sections: [
      {
        title: "Pre-sales visuals, from sketch to sign",
        body: "Before the slab is poured, buyers have only drawings to go on. Sketch to render turns a front elevation or quick perspective into a photoreal exterior, and a few passes give you options to choose from. Start with a clean drawing, set the building type and style, and describe the setting you will actually deliver: young street trees, a finished lawn, a concrete driveway. Refine materials and light until the image reflects the home you plan to build, then check it against the plans before it goes to print.",
        image: "exterior-modern",
      },
      {
        title: "Finish packages and spec homes",
        body: "Inside, the same approach helps buyers choose. From a render or a photo of a model or completed home, Material swap shows cabinet, countertop and flooring combinations, and Paint tests wall colors. When a spec home is finished but empty, Virtual staging furnishes it for listing photos so buyers can judge how the rooms work, and Decor staging adds rugs, art and plants to rooms that feel bare. Label staged listing photos as virtually staged, following your MLS rules.",
        image: "kitchen-modern",
      },
      {
        title: "Keep the marketing accurate",
        body: "Pre-construction imagery sets expectations your contracts will eventually have to meet. Label every render as an artist's impression or illustrative image, make sure it matches the plans and elevations buyers are actually purchasing, and never show optional upgrades as standard features. Mature landscaping, premium finishes and furnished rooms all deserve a note. Your plans, specifications and purchase agreements define the home; the render helps buyers picture it. When in doubt, show less and caption more.",
      },
    ],
    faqs: [
      {
        q: "Will the render match the home we build?",
        a: "Only as closely as you make it. The render is an AI-generated concept based on your drawing and settings, so review it against the plans, correct anything that drifts and label it illustrative. Your plans and specifications define what is delivered.",
      },
      {
        q: "What should we start from if nothing is built yet?",
        a: "An elevation sketch or line drawing gives Sketch to render the most to work with. For very early mood images, Text to design can generate a home from a written description, though it will not follow a specific plan.",
      },
      {
        q: "Can we stage completed spec homes?",
        a: "Yes. Upload photos of the empty rooms and use Virtual staging to furnish them in a style that suits your buyers. Label staged photos in the listing as your MLS requires.",
      },
      {
        q: "Can we show several color schemes for the same plan?",
        a: "Yes. Use the render as the starting image for Paint and Material swap to build a set of elevation options, which helps with buyer selections and with planning a varied streetscape.",
      },
      {
        q: "Can we show finished landscaping on a new home?",
        a: "Yes. Redesign in the Garden space can show a front yard or backyard with planting and hardscape in place. Treat it like other pre-construction imagery: illustrative and clearly labeled, especially where plants are shown at mature size.",
      },
      {
        q: "What does it cost?",
        a: "Every live tool is free during the public beta with a free account, up to 20 renders a day. Paid plans are listed on the pricing page and launching soon, and larger builders can talk to us about enterprise options. Nothing is charged during the beta.",
      },
    ],
    related: ["features/sketch-to-render", "exterior-ai", "virtual-staging-ai", "features/sky-colors"],
  },
];
