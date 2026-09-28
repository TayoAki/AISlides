// Use-case landing pages: one per room, surface or job a visitor wants done.
// Slugs and nav labels mirror USE_CASE_LINKS in src/content/nav.ts.
import type { LandingPage } from "@/content/types";
import { studioHref } from "@/lib/tools";

export const useCasePages: LandingPage[] = [
  {
    slug: "interior-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "AI Interior Design",
    metaTitle: "AI Interior Design From a Photo of Your Room",
    metaDescription:
      "Photograph any room and see it restyled as Japandi, coastal, mid-century or art deco while the walls, windows and floor plan stay in place. Free in beta.",
    eyebrow: "AI interior design",
    title: "See your room in a new style before you move a single thing",
    subtitle:
      "Photograph the room you already live in, choose a direction, and Roomwright renders a photoreal redesign that keeps your walls, windows and floor plan where they are.",
    primaryCta: { label: "Redesign a room", href: studioHref({ tool: "redesign", space: "interior" }) },
    heroImage: "living-japandi",
    highlights: ["20 interior styles to explore", "Walls, windows and layout kept", "Free during the public beta"],
    steps: [
      {
        title: "Photograph the room as it is",
        body: "Stand in a corner or doorway and take a wide, level shot in daylight. Clutter and tired furniture are fine, since the redesign replaces them.",
      },
      {
        title: "Pick a style and a strength",
        body: "Choose a look such as Japandi, Transitional or Art deco, then set the strength. Subtle keeps much of what you own; Bold reimagines all of it.",
      },
      {
        title: "Compare, steer and download",
        body: "Generate a few versions, revisit them in your design history, and add a short note such as “warmer wood tones” to guide the next pass.",
      },
    ],
    benefits: [
      {
        icon: "palette",
        title: "Styles tested on your room",
        body: "Try the same space as Scandinavian one minute and Mediterranean the next. Seeing both in your own light can settle a debate that a mood board never could.",
      },
      {
        icon: "home",
        title: "Your architecture stays put",
        body: "Ceiling height, window placement and door openings are kept, so every render is a version of your room rather than a stock photo.",
      },
      {
        icon: "move",
        title: "Control how much changes",
        body: "Subtle, Balanced and Bold strengths let you choose between a light refresh of the furnishings and a top-to-bottom rethink.",
      },
      {
        icon: "message",
        title: "Steer it in plain words",
        body: "Add an instruction like “keep the green sofa” or “more pale wood” and the redesign factors it in alongside the style you picked.",
      },
      {
        icon: "layers",
        title: "Go deeper once a look lands",
        body: "When a direction clicks, move to Paint visualizer, Material swap or Precision edit to work on single surfaces and pieces.",
      },
    ],
    sections: [
      {
        title: "Finding a style when you are not sure what you like",
        body: "Most people know what bothers them about a room long before they can name the style they want. Running one photo through several directions is a quick way to find out. Start with three contrasting looks, notice which details you keep coming back to, then narrow in. Pairings worth comparing on the same room:",
        bullets: [
          "Japandi against Scandinavian, if you want calm and uncluttered but cannot choose between warm and bright",
          "Transitional against Traditional, if you like classic shapes with less ornament",
          "Wabi-sabi against Quiet luxury, if texture matters more to you than color",
          "Maximalist against Bohemian, if you love pattern, color and collected objects",
        ],
        image: "living-boho",
      },
      {
        title: "What a render is, and what it is not",
        body: "A Roomwright redesign is a photoreal visualization built from your photo. It is well suited to choosing a direction, briefing a designer or getting everyone in the house to agree. It is not a floor plan, a measured drawing or a shopping list, and the furniture it shows is generated rather than pulled from a catalog, so treat sizes and proportions as approximate. If a redesign sparks a bigger project, such as removing a wall or adding a window, take the image to an architect or contractor and let them confirm what is structurally sound and permitted.",
        image: "living-classic",
      },
    ],
    faqs: [
      {
        q: "What kind of photo gives the best result?",
        a: "A wide, level photo taken from a corner or doorway in good light. Show at least two walls and some of the floor. Ultra-wide lenses can bend straight lines, and that distortion carries into the render, so your phone's standard lens is usually the safer choice.",
      },
      {
        q: "Will the redesign keep my furniture?",
        a: "Redesign restyles the whole room, furniture included. To hold on to a favorite piece, name it in your instruction and use the Subtle strength. If you only want to change one or two items, Precision edit is the better tool.",
      },
      {
        q: "Can I copy the look of a room I saw online?",
        a: "Yes. Style transfer takes an inspiration photo and applies its palette, materials and mood to your room while keeping your layout.",
      },
      {
        q: "Does this replace an interior designer?",
        a: "No. It is a fast way to explore ideas, not a substitute for someone who can measure, source and manage a project. Renders are a good way to brief a designer more clearly, which gives the first meeting a head start.",
      },
      {
        q: "How much does it cost?",
        a: "Nothing while Roomwright is in public beta. Every account can create up to 20 renders a day. Paid plans are listed on the pricing page and are launching soon.",
      },
    ],
    related: ["room-design-ai", "living-room-design-ai", "features/design-transfer", "for/interior-designers"],
  },
  {
    slug: "exterior-ai",
    kind: "use-case",
    status: "live",
    navLabel: "AI House Exterior Design",
    metaTitle: "AI House Exterior Design and Curb Appeal Previews",
    metaDescription:
      "Photograph your house and preview new siding, paint colors, roofing and architectural styles in photoreal renders before you hire a contractor. Free in beta.",
    eyebrow: "AI exterior design",
    title: "Try a new facade on your house before the scaffolding goes up",
    subtitle:
      "Upload a street-side photo and restyle your home as modern farmhouse, Craftsman, Mediterranean or another look, with the roofline, windows and doors kept where they are.",
    primaryCta: { label: "Redesign my exterior", href: studioHref({ tool: "redesign", space: "exterior" }) },
    heroImage: "exterior-farmhouse",
    highlights: ["12 architectural styles", "Siding, roof and paint previews", "Relight it with a new sky"],
    steps: [
      {
        title: "Shoot the front from the curb",
        body: "Stand across the street or at the end of the driveway so the whole facade fits in the frame. A bright overcast day avoids harsh shadows that hide detail.",
      },
      {
        title: "Choose a style and strength",
        body: "Pick from Craftsman, Tudor, Spanish revival and more. Subtle suits a paint-and-trim refresh, while Bold explores a complete change of character.",
      },
      {
        title: "Refine the big surfaces",
        body: "Take the version you like into Material swap for siding or roofing, or into Paint visualizer to test a specific body color.",
      },
    ],
    benefits: [
      {
        icon: "eye",
        title: "Curb appeal you can see first",
        body: "Judge a charcoal body with crisp white trim, or warm stucco under a clay tile roof, on your actual house instead of a small sample board.",
      },
      {
        icon: "layers",
        title: "Siding and roofing swaps",
        body: "Preview board and batten, charred timber, red brick, painted stucco, natural stone or fiber cement lap, plus standing-seam metal, clay tile, slate or asphalt shingle roofs.",
      },
      {
        icon: "home",
        title: "Your house, not a template",
        body: "The redesign works with the massing, window openings and entry you already have, so every option stays grounded in the home on your lot.",
      },
      {
        icon: "sun",
        title: "See it in different light",
        body: "Use Sky & light to swap a flat gray sky for golden hour or blue-hour dusk and check how a color scheme reads as the day changes.",
      },
      {
        icon: "message",
        title: "Clearer briefs for trades",
        body: "A render shows a siding installer or painter what you mean more quickly than a paragraph of description.",
      },
    ],
    sections: [
      {
        title: "Where an exterior preview earns its keep",
        body: "Facade projects are hard to undo. Once new siding is on or a roof is replaced, you live with the choice for years, so a few minutes of renders can catch a mismatch you would otherwise only notice after installation. Exterior previews are especially handy for questions like these:",
        bullets: [
          "Dark body color or light, when the street has both",
          "Whether stone on the lower third of the facade looks grounded or heavy",
          "A standing-seam metal roof against the existing asphalt shingle",
          "Whether a new porch or entry suits the character of the rest of the house",
        ],
        image: "exterior-modern",
      },
      {
        title: "Keeping expectations realistic",
        body: "Roomwright renders are visual previews. Colors on a screen will not match a paint chip in sunlight exactly, and a generated material is an impression of that finish rather than a specific product. Before committing, look at physical samples on the house at different times of day. Structural changes such as new openings, additions or a different roof pitch need an architect or builder, and facade changes in historic districts or HOA communities often need approval first. Use the images to decide what to ask for, and let professionals confirm what is allowed.",
        image: "exterior-brick",
      },
    ],
    faqs: [
      {
        q: "What if trees, cars or trash cans block part of the house?",
        a: "The model can only work with what it sees, so anything hidden is guesswork. Move what you can before shooting and choose an angle where the main facade is clear. Declutter & remove can also tidy smaller items like trash cans and hoses out of the photo.",
      },
      {
        q: "Can I change only the front door or shutters?",
        a: "Yes. Use Precision edit with an instruction like “paint the front door deep green” or “add black shutters to the upstairs windows”, and the rest of the facade is left alone.",
      },
      {
        q: "Can I test an exact paint color from a brand?",
        a: "The Paint visualizer includes ten preset colors, from Warm white to Evergreen and Navy, and you can describe other shades in your own words. Treat the result as a close impression rather than a color match, and confirm with a sample on the wall.",
      },
      {
        q: "Does it work for townhouses, cabins and apartment buildings?",
        a: "Yes. Exterior options cover house fronts, backyard facades, porches, garages, townhouses, apartment buildings and cabins.",
      },
      {
        q: "Is it useful before selling?",
        a: "It can help you decide which updates are worth doing before you list, and a sky replacement can brighten a gloomy exterior shot. If you publish edited images, label them clearly.",
      },
    ],
    related: ["landscaping-ai", "features/material-swap", "features/sky-colors", "free-ai-tools/exterior-design"],
  },
  {
    slug: "landscaping-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Landscaping AI",
    metaTitle: "Landscaping AI: Redesign Your Yard From a Photo",
    metaDescription:
      "Turn a photo of your backyard, front yard or patio into planting and hardscape ideas, from cottage borders to desert xeriscape. Free during the beta.",
    eyebrow: "AI landscape design",
    title: "Plan the garden you want from a photo of the yard you have",
    subtitle:
      "Restyle backyards, front yards, patios and pool areas in styles like Japanese zen, cottage or wildflower meadow, then share the render with whoever will build it.",
    primaryCta: { label: "Redesign my yard", href: studioHref({ tool: "redesign", space: "garden" }) },
    heroImage: "garden-backyard",
    highlights: ["10 garden styles to explore", "Yards, patios, decks and pools", "Sky and light swaps included"],
    steps: [
      {
        title: "Photograph the whole space",
        body: "Shoot from a raised spot if you can, such as a deck or an upstairs window, so the model can see the edges, paths and changes in level.",
      },
      {
        title: "Choose an outdoor style",
        body: "Pick the space type, from courtyard to side yard, then a style like English formal or Tropical and a strength that controls how much gets replanted.",
      },
      {
        title: "Refine what stays and goes",
        body: "Add notes such as “keep the oak tree” or “low-water planting only” and run a few versions until the layout feels right.",
      },
    ],
    benefits: [
      {
        icon: "leaf",
        title: "See planting before you dig",
        body: "Compare a loose wildflower meadow with clipped formal borders on your actual lawn without buying a single plant.",
      },
      {
        icon: "grid",
        title: "Hardscape and planting together",
        body: "Paths, patios, raised beds, decking and planting are rendered as one scene, so you can judge the balance between green and paved areas.",
      },
      {
        icon: "trees",
        title: "Small spaces count too",
        body: "Rooftop terraces, courtyards and narrow side yards are all options, which helps when every square foot has to work hard.",
      },
      {
        icon: "sun",
        title: "Light that sets the mood",
        body: "Sky & light shows the same garden at golden hour or dusk, which is handy when deciding where evening seating should go.",
      },
      {
        icon: "message",
        title: "Clear briefs for landscapers",
        body: "A render communicates scale and atmosphere to a landscaper or garden designer faster than a list of plant names.",
      },
    ],
    sections: [
      {
        title: "Match the style to your climate and your weekends",
        body: "A render can make any style look effortless. The garden you actually live with depends on rainfall, sun, soil and how much time you want to spend on upkeep. Treat each style as a starting point and ask the practical question that goes with it:",
        bullets: [
          "Desert xeriscape and Mediterranean schemes lean on drought-tolerant planting and gravel, which suits dry summers",
          "Cottage and English formal gardens look their best with regular pruning and deadheading",
          "Woodland and wildflower meadow plantings can be easier once established but need patience early on",
          "Japanese zen gardens depend on careful placement of stone, gravel and a few well-chosen plants",
        ],
        image: "garden-front",
      },
      {
        title: "From render to planting plan",
        body: "A Roomwright render shows mood and layout, not a planting schedule. The plants in the image are the model's interpretation of the style, and some may not suit your hardiness zone or soil. Take the version you like to a local nursery or landscape designer and ask them to translate it into species that will thrive where you live. For grading, drainage, retaining walls, pools and anything near utility lines, bring in a qualified professional before work starts, and check whether your city, county or HOA needs to approve the plan.",
        image: "garden-patio",
      },
    ],
    faqs: [
      {
        q: "Will it tell me which plants are in the render?",
        a: "No. The planting is generated to fit the style you chose, so treat it as a visual reference. A nursery or garden designer can suggest real species with a similar look that suit your climate.",
      },
      {
        q: "Can I keep my existing trees and features?",
        a: "Name them in your instruction, for example “keep the mature maple and the stone wall”, and use a Subtle or Balanced strength. For a single addition, such as a pergola, Precision edit is the better choice.",
      },
      {
        q: "Which outdoor spaces can I design?",
        a: "Backyards, front yards, patios, decks, pool areas, courtyards, rooftop terraces and side yards are all available as space types.",
      },
      {
        q: "Can I start from a sketch instead of a photo?",
        a: "Yes. Photograph or scan a hand-drawn sketch of your garden idea and use Sketch to render to turn it into a photoreal image. It is a useful way to test a plan for a plot that is still bare or overgrown.",
      },
      {
        q: "Is there a charge?",
        a: "Not while the public beta runs. Your account includes 20 renders each day, enough to compare several styles on the same yard.",
      },
    ],
    related: ["exterior-ai", "features/sky-colors", "features/sketch-to-render", "free-ai-tools/landscape-design"],
  },
  {
    slug: "real-estate-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Real Estate AI",
    metaTitle: "Real Estate AI for Better Listing Photos",
    metaDescription:
      "Stage empty rooms, clear clutter, swap gray skies and create twilight exteriors from the listing photos you already have. Free for agents during the beta.",
    eyebrow: "AI for real estate",
    title: "Listing photos that show what each room could be",
    subtitle:
      "Stage vacant rooms, clear a seller's belongings, swap a gray sky or turn a daytime exterior into twilight, all from the photos you already shot. One studio covers the whole listing.",
    primaryCta: { label: "Stage a listing photo", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
    heroImage: "exterior-dusk",
    highlights: ["Staging, declutter and sky swaps", "Twilight exteriors from day shots", "No rental furniture to move"],
    steps: [
      {
        title: "Match each photo to a tool",
        body: "Empty rooms go to Virtual staging, lived-in rooms to Declutter & remove, and exteriors with a dull sky to Sky & light.",
      },
      {
        title: "Stage for the likely buyer",
        body: "Set the room's purpose and a style that suits whoever is likely to buy, such as Scandinavian for a city condo or Farmhouse for a family house outside town.",
      },
      {
        title: "Label, then publish",
        body: "Download the finished images, mark each one as virtually staged or edited, and keep the unedited originals in the gallery alongside them.",
      },
    ],
    benefits: [
      {
        icon: "sofa",
        title: "Vacant rooms with a purpose",
        body: "An empty spare room leaves buyers guessing. Staged as a home office or a nursery, it answers the question for them.",
      },
      {
        icon: "eraser",
        title: "Occupied homes, cleared",
        body: "Declutter & remove takes out furniture and personal items so viewers notice floor space and light instead of the seller's belongings.",
      },
      {
        icon: "sun",
        title: "Twilight without a second shoot",
        body: "Turn a daytime exterior into a blue-hour or lights-on twilight image, or replace a blown-out white sky with clear blue.",
      },
      {
        icon: "users",
        title: "One room, several buyers",
        body: "Stage the same living room two ways, say Coastal and Modern, and use each version where it fits your marketing.",
      },
      {
        icon: "hammer",
        title: "Concepts for fixer-uppers",
        body: "Use Redesign or Material swap to suggest what a dated kitchen could become, clearly labeled as a concept rather than the current condition.",
      },
    ],
    sections: [
      {
        title: "Disclosure belongs in the workflow",
        body: "Virtually staged and digitally altered photos are common in listings, and many MLSs and brokerages require them to be labeled. Rules vary by market, so check yours before you publish. Good practice goes further than the minimum: caption each edited image as virtually staged, keep the original photo in the gallery, and never use editing to hide defects such as water stains, cracks or damaged floors. Staging should help buyers picture the space, not misrepresent its condition. Handled this way, edited photos support trust instead of putting it at risk.",
        image: "empty-room",
      },
      {
        title: "Choosing a staging style for the property",
        body: "Neutral, broadly appealing styles usually serve a listing better than bold personal ones, because the goal is to let buyers imagine their own lives in the rooms. A few pairings that tend to fit:",
        bullets: [
          "Scandinavian or Minimalist for compact condos where light and floor space matter most",
          "Transitional for family homes where buyers want comfort without clutter",
          "Coastal for vacation markets and homes near the water",
          "Modern or Contemporary for new construction with clean architectural lines",
        ],
        image: "living-coastal",
      },
    ],
    faqs: [
      {
        q: "Do I have to disclose virtual staging?",
        a: "In many markets, yes. MLS rules, brokerage policies and some local regulations require edited listing photos to be identified. Even where it is optional, labeling staged images and showing the original protects you and your seller.",
      },
      {
        q: "Can I remove the seller's furniture and then stage the room?",
        a: "Yes. Run Declutter & remove first to clear the room, then upload the cleared image to Virtual staging and choose a style.",
      },
      {
        q: "Will staged furniture match the room's real dimensions?",
        a: "The AI places furniture at a plausible scale, but it does not measure the room. In tight spaces, such as a small second bedroom, check that the staging does not suggest more space than there is.",
      },
      {
        q: "Does it work on exteriors and yards?",
        a: "Yes. Sky & light replaces dull skies and creates dusk or twilight scenes, Declutter & remove works on patios and yards, and Redesign can preview landscaping ideas for a tired garden.",
      },
      {
        q: "Is Roomwright free for agents?",
        a: "Yes. During the beta every account gets 20 renders a day, and you can use results in your listings as long as you label virtually staged photos the way your MLS requires. Paid plans with higher limits and high-resolution downloads are previewed on our pricing page and launching soon.",
      },
    ],
    related: ["virtual-staging-ai", "for/realtors", "features/sky-colors", "features/furniture-removal"],
  },
  {
    slug: "virtual-staging-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Virtual Staging AI",
    metaTitle: "Virtual Staging AI: Furnish Empty Rooms From a Photo",
    metaDescription:
      "Start from a shot of a vacant room, tell us what it is for, choose a style, and get a photoreal staged version with furniture, rugs and art. Free in beta.",
    eyebrow: "AI virtual staging",
    title: "Furnish an empty room in the time it takes to pick a style",
    subtitle:
      "Choose from 21 room types and 20 interior styles, and Roomwright fills the bare floor with furniture, lighting and decor that suit the space.",
    primaryCta: { label: "Stage an empty room", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
    heroImage: "empty-room-2",
    highlights: ["21 room types and 20 styles", "Furniture, rugs, lighting and art", "Keeps the room's architecture"],
    steps: [
      {
        title: "Photograph the bare room",
        body: "Shoot from a doorway or corner at about chest height with the lights on. Include plenty of floor, since that is where the furniture has to sit convincingly.",
      },
      {
        title: "Set the room's purpose",
        body: "Tell the studio what the room is for, from bedroom to home gym, and pick a style. The room type decides the furniture; the style decides its look.",
      },
      {
        title: "Stage, then accessorize",
        body: "Generate a few versions. If a staged room still feels sparse, run Decor staging on it to layer in plants, throw pillows and art.",
      },
    ],
    benefits: [
      {
        icon: "sofa",
        title: "Nothing to haul",
        body: "Physical staging means rentals, movers and scheduling around the photographer. Virtual staging starts from a single photo.",
      },
      {
        icon: "key",
        title: "Rooms with a clear job",
        body: "Awkward spaces like a basement, attic or bonus room are easier to understand when they are shown as a game room, guest room or home office.",
      },
      {
        icon: "clock",
        title: "Restage in minutes",
        body: "If the first style misses, try another. Each version is kept in your design history, so you can go back to an earlier one.",
      },
      {
        icon: "lamp",
        title: "Accessories on their own",
        body: "Decor staging adds rugs, art and plants to a room that already has furniture, which helps sparse rentals and model units.",
      },
      {
        icon: "briefcase",
        title: "Commercial spaces too",
        body: "Café, retail store and office are included as room types, useful for vacant commercial units that need a sense of purpose.",
      },
    ],
    sections: [
      {
        title: "Photos that stage well",
        body: "The quality of a staged image depends heavily on the photo you start with. A few habits make a clear difference:",
        bullets: [
          "Keep the camera level so vertical lines stay vertical; tilted walls look odd once furniture is added",
          "Switch on every light and open the blinds for even exposure",
          "Clear the floor completely, including boxes, ladders and cables, or run Declutter & remove first",
          "Take one wide shot per room rather than several tight ones",
          "Skip heavy HDR processing and filters, which can make surfaces look unnatural after staging",
        ],
        image: "empty-room",
      },
      {
        title: "When the room is not quite empty",
        body: "Plenty of rooms fall between furnished and bare: a leftover chair, a mattress against the wall, a desk the owner is taking with them. Staging over those items can produce muddled results, so clear them first with Declutter & remove and stage the cleared image. If the room is fully furnished but tired, Redesign is usually the better fit, since it restyles what is there instead of adding to it. And if you only want to soften a sparsely furnished room, Decor staging adds accessories while leaving the furniture in place.",
        image: "bedroom-calm",
      },
    ],
    faqs: [
      {
        q: "Is virtual staging allowed in property listings?",
        a: "Generally, yes, provided it is disclosed. Many MLSs require staged photos to be labeled and some ask for the unstaged version too, so check the rules where you list before publishing.",
      },
      {
        q: "Can I choose specific furniture pieces?",
        a: "Not from a catalog. The room type and style decide the furniture, and you can guide it with an instruction such as “a sectional sofa and a round dining table”. Individual pieces can be swapped afterwards with Precision edit.",
      },
      {
        q: "Which rooms can I stage?",
        a: "Living rooms, bedrooms, kitchens, dining rooms, home offices, nurseries, basements, attics, entryways, balconies and more, plus commercial spaces such as cafés, retail stores and offices.",
      },
      {
        q: "Will it work on a room that is still under construction?",
        a: "It works best on finished rooms. Bare drywall, exposed subfloors and missing fixtures tend to carry through into the render, so the result can still look unfinished. For early-stage projects, Sketch to render or Text to design may be better starting points.",
      },
      {
        q: "What is the difference between virtual staging and decor staging?",
        a: "Virtual staging starts with a bare room and supplies all of the furniture. Decor staging keeps the furniture already there and adds the finishing layer: rugs, art, plants, throw pillows and accessories.",
      },
    ],
    related: ["real-estate-ai", "for/realtors", "features/decor-staging", "free-ai-tools/virtual-staging"],
  },
  {
    slug: "cabinet-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Cabinet Design AI",
    metaTitle: "Cabinet Design AI: Preview New Cabinet Finishes",
    metaDescription:
      "See your kitchen with sage or navy shaker, walnut, fluted oak, white slab or matte black cabinets before you refinish or replace them. Just upload a photo.",
    eyebrow: "AI cabinet design",
    title: "Choose your cabinet finish by seeing it in your own kitchen",
    subtitle:
      "Swap your current cabinets for matte white slab, sage or navy shaker, natural walnut, fluted oak or black matte, while your counters, floor and layout stay as they are.",
    primaryCta: { label: "Swap my cabinets", href: studioHref({ tool: "materials", space: "interior" }) },
    heroImage: "detail-cabinets",
    highlights: ["Six cabinet finishes built in", "Only the cabinets change", "Kitchens, vanities and built-ins"],
    steps: [
      {
        title: "Photograph the cabinet run",
        body: "Stand back far enough to capture uppers and lowers together, with the counter and backsplash in frame so you can judge the whole combination.",
      },
      {
        title: "Select Cabinets, then a finish",
        body: "Choose Cabinets as the surface and pick a finish. Add a note such as “brass knobs” or “keep the glass-front uppers” if those details matter.",
      },
      {
        title: "Compare against the room",
        body: "Run two or three finishes and look at each with your floor, counter and walls. Keep the winner, then try a wall color that suits it.",
      },
    ],
    benefits: [
      {
        icon: "hammer",
        title: "Refinish or replace, decided",
        body: "Painting existing doors and replacing them sit at very different price points. Seeing the color first shows whether paint alone gets you there.",
      },
      {
        icon: "palette",
        title: "Deep colors without the nerves",
        body: "Navy and sage change the whole mood of a kitchen. A render shows whether that works with your light before anyone opens a can.",
      },
      {
        icon: "layers",
        title: "Wood against paint",
        body: "Compare natural walnut or fluted oak with painted shaker to see how much warmth wood tones bring to the room.",
      },
      {
        icon: "grid",
        title: "Two-tone schemes",
        body: "Describe a split, such as navy lowers with white uppers, in your instruction and see how it balances the space.",
      },
      {
        icon: "droplet",
        title: "Beyond the kitchen",
        body: "Bathroom vanities, laundry cabinets and built-in shelving can be restyled the same way.",
      },
    ],
    sections: [
      {
        title: "Judging a finish in context",
        body: "Cabinets cover more visual area in a kitchen than almost anything else, so their finish sets the tone. When you compare renders, look past the doors themselves:",
        bullets: [
          "Check the floor. Walnut cabinets over a similar wood-toned floor can merge into one mass of brown",
          "Consider the light. In a north-facing kitchen, navy can read darker than the sample suggested",
          "Look at the counter. Matte black cabinets feel heavy against black granite and crisp against white quartz",
          "Think about hardware. Brass, black or chrome pulls change the feel of the same door color",
        ],
        image: "kitchen-dark",
      },
      {
        title: "Before you order doors or book a painter",
        body: "A render tells you whether you like a look, not whether it is practical. Changing door style, for example from flat slab to shaker, usually means new doors rather than paint. Refinishing needs the right preparation and primer for your existing surface. Custom sizes, hinges and interior fittings are decisions for a cabinetmaker who has measured the room. Bring your favorite renders to that conversation, since they make the brief concrete and help the quote reflect what you actually want.",
        image: "kitchen-farmhouse",
      },
    ],
    faqs: [
      {
        q: "Which cabinet finishes are built in?",
        a: "Matte white slab, sage green shaker, navy shaker, natural walnut, fluted oak and black matte. You can also describe a different finish in your own words.",
      },
      {
        q: "Will my countertops and backsplash change too?",
        a: "Material swap is designed to change only the surface you select. To test new counters as well, run a second swap with Countertops chosen as the surface.",
      },
      {
        q: "Can it show a new door style, not just a new color?",
        a: "Yes. The presets include both flat slab and shaker doors, so you can see a change of profile as well as color. For anything more unusual, describe it and confirm the details with a cabinetmaker.",
      },
      {
        q: "Can I preview new hardware?",
        a: "Add it to your instruction, for example “matte black bar pulls” or “unlacquered brass knobs”. For a hardware-only change on an existing render, Precision edit gives you more control.",
      },
      {
        q: "How accurate is the color on screen?",
        a: "Close, but not exact. Screens, lighting and camera settings all shift color. Use the render to choose a direction, then look at a physical door sample in your own kitchen before you order.",
      },
    ],
    related: ["kitchen-design-ai", "countertop-ai", "features/material-swap", "for/contractors"],
  },
  {
    slug: "wall-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Wall AI",
    metaTitle: "Wall AI: Preview Paint Colors and Wall Finishes",
    metaDescription:
      "Upload a room photo and preview new paint colors or finishes like limewash, wood paneling, exposed brick, zellige tile and grasscloth on your own walls.",
    eyebrow: "AI wall design",
    title: "Try paint colors and wall finishes on your actual walls",
    subtitle:
      "Preview ten curated paint colors or a shade you describe, then go further with limewash plaster, painted paneling, exposed brick, zellige tile, grasscloth or microcement.",
    primaryCta: { label: "Repaint my walls", href: studioHref({ tool: "paint", space: "interior" }) },
    heroImage: "detail-paint",
    highlights: ["Ten curated paint colors", "Limewash, paneling, brick and tile", "Furniture and floors stay as is"],
    steps: [
      {
        title: "Photograph the walls in question",
        body: "Include some trim, the floor and a piece of furniture, so you can see how the new color works with everything that is staying.",
      },
      {
        title: "Choose a color or a finish",
        body: "Pick a shade such as Sage, Greige or Terracotta in the Paint visualizer, or switch to Material swap and choose Walls for textured finishes.",
      },
      {
        title: "Check it in different light",
        body: "Run the same color on a morning photo and an evening photo of the room. Paint shifts with daylight, and a render made from each shot shows how.",
      },
    ],
    benefits: [
      {
        icon: "droplet",
        title: "Fewer samples to buy",
        body: "Narrow a long list of candidates to two or three before you buy paint samples and start brushing swatches onto the wall.",
      },
      {
        icon: "layers",
        title: "Texture, not just color",
        body: "Limewash, grasscloth and microcement have a depth that a flat swatch cannot show. See it across a whole wall instead.",
      },
      {
        icon: "brush",
        title: "Accent walls without the gamble",
        body: "Try one evergreen or clay pink wall behind a bed or sofa and decide whether it anchors the room or overwhelms it.",
      },
      {
        icon: "eye",
        title: "Color in context",
        body: "Wall color reacts to floors, furniture and daylight. Previewing it in your own photo shows those interactions, not just the chip.",
      },
      {
        icon: "home",
        title: "Facades as well",
        body: "The Paint visualizer also works on exterior photos, so you can test a house color in the same few steps.",
      },
    ],
    sections: [
      {
        title: "Reading a paint render honestly",
        body: "Paint is where on-screen previews are most likely to mislead, because color depends on light, sheen and the screen you view it on. Use Roomwright to settle on a family of colors: warm or cool, light or deep, green or gray. Then test real samples on the wall, look at them at several times of day, and make the final call in person. The render cannot tell you the right sheen, how well a color covers or how many coats you need; your paint supplier can.",
        image: "bedroom-warm",
      },
      {
        title: "Finishes worth previewing at full scale",
        body: "Some wall treatments are hard to imagine from a sample board because their appeal comes from scale and texture. These are the ones where a whole-room preview helps most:",
        bullets: [
          "Limewash plaster, for soft, cloudy movement that suits Mediterranean and wabi-sabi rooms",
          "Painted wood paneling, to give structure to plain walls in a dining room or hallway",
          "Zellige tile, whose uneven glaze makes a strong kitchen or bathroom feature wall",
          "Grasscloth wallpaper, for warmth and texture in bedrooms and home offices",
          "Exposed brick and microcement, for industrial or minimalist schemes",
        ],
        image: "detail-tile",
      },
    ],
    faqs: [
      {
        q: "Can I match a specific brand's paint color?",
        a: "You can describe the shade you have in mind, but the render is an approximation rather than a color-matched reproduction of any brand's paint. Check a physical sample before you buy.",
      },
      {
        q: "Will it change the ceiling or trim?",
        a: "The Paint visualizer focuses on walls. To test the ceiling, Material swap has a Ceiling surface with options like exposed beams, tongue-and-groove wood and coffered panels. For trim, describe the change with Precision edit.",
      },
      {
        q: "Can I put tile on a wall?",
        a: "Yes. Choose Material swap, select Walls and pick zellige tile. For a backsplash-only change, Precision edit lets you describe exactly which area to tile.",
      },
      {
        q: "What about patterned wallpaper?",
        a: "Grasscloth is included as a preset. For other patterns, describe them in your instruction; the more specific you are about scale and color, the closer the result tends to be.",
      },
      {
        q: "Does it work in rooms full of furniture?",
        a: "Yes. Furniture and floors are left in place while the walls change. Walls hidden behind tall bookcases or large art will show less of the new color, so pick a photo where a good stretch of wall is visible.",
      },
    ],
    related: ["features/paint-visualizer", "features/colors-textures", "partial-remodel-ai", "room-design-ai"],
  },
  {
    slug: "flooring-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Flooring AI",
    metaTitle: "Flooring AI: See New Floors in Your Room First",
    metaDescription:
      "Swap carpet or old tile for oak, walnut, herringbone, polished concrete, porcelain, terracotta or stone in a photo of your room. Free in the public beta.",
    eyebrow: "AI flooring visualizer",
    title: "Change the floor in your photo before you change it for real",
    subtitle:
      "See light oak, walnut, herringbone, polished concrete, large porcelain tile, terracotta or natural stone under your own furniture. Only the floor changes.",
    primaryCta: { label: "Try a new floor", href: studioHref({ tool: "materials", space: "interior" }) },
    heroImage: "detail-flooring",
    highlights: ["Seven flooring materials", "Furniture and walls stay put", "Judge tone against your decor"],
    steps: [
      {
        title: "Show plenty of floor",
        body: "Shoot from standing height with the camera tilted slightly down, so a good stretch of floor is visible between the furniture.",
      },
      {
        title: "Select Flooring and a material",
        body: "Choose from wood, tile, concrete and stone options. Add a note like “wide planks” or “matte finish” to fine-tune the look.",
      },
      {
        title: "Check the transitions",
        body: "Look at how the new floor meets rugs, stairs and neighboring rooms, and try a second material if the contrast feels off.",
      },
    ],
    benefits: [
      {
        icon: "eye",
        title: "Undertones you can see",
        body: "Floors carry warm, cool or neutral undertones that either clash or harmonize with cabinets and walls. A render shows which, at room scale.",
      },
      {
        icon: "grid",
        title: "Pattern at full size",
        body: "Herringbone and large-format tile look very different across a whole room than on a single plank or sample tile.",
      },
      {
        icon: "move",
        title: "Continuity in open plans",
        body: "Test one material running through the kitchen and living area to see whether it pulls the space together.",
      },
      {
        icon: "sofa",
        title: "Judged with your furniture",
        body: "Your sofa, table and cabinets stay in the picture, so you are choosing a floor for the room you actually live in.",
      },
      {
        icon: "lightbulb",
        title: "A quick first cut",
        body: "Rule out the options that clearly do not work before you order samples or visit a showroom.",
      },
    ],
    sections: [
      {
        title: "Wood, tile, stone or concrete",
        body: "The look is only half the decision. Each material behaves differently underfoot and over time, which is worth weighing alongside the render:",
        bullets: [
          "Light oak brightens a room and suits Scandinavian and Japandi schemes",
          "Walnut adds depth and warmth but tends to show dust and scratches more readily than lighter woods",
          "Porcelain and natural stone are common choices for kitchens, bathrooms and entryways where water is a concern",
          "Polished concrete suits modern and industrial rooms, and rugs can soften it",
          "Terracotta brings warmth to Mediterranean and rustic kitchens and pairs well with plaster walls",
        ],
        image: "dining-modern",
      },
      {
        title: "What a floor render cannot tell you",
        body: "A visualization shows color, pattern and scale. It cannot tell you whether your subfloor is level, whether new flooring will raise the height at doorways, whether it suits underfloor heating, or how much material to order. Those questions belong with an installer who has seen the space. Bring your chosen render and your measurements to that conversation, and ask for physical samples of the specific product before you commit. Look at them on your actual floor, in daylight and at night.",
        image: "empty-room-2",
      },
    ],
    faqs: [
      {
        q: "What if a rug covers most of the floor?",
        a: "Only the visible floor can be restyled, so a large rug limits what you can judge. Roll it back for the photo, or use Declutter & remove to clear the room first.",
      },
      {
        q: "Can I try a flooring product I found online?",
        a: "Material swap works from its built-in materials plus your written description. Describe the product's color, plank width and pattern for the closest likeness, then compare the render with a real sample.",
      },
      {
        q: "Can I try a different floor in each room?",
        a: "Yes. Upload a photo of each room and change the floors one at a time. If the rooms connect, try the same material throughout as well, to see whether continuity suits the house.",
      },
      {
        q: "Will herringbone or tile be laid out correctly?",
        a: "Patterns are rendered to look convincing in the photo, but they are not a layout plan. Your installer will set the direction, borders and starting point on site.",
      },
      {
        q: "Does it work in kitchens and bathrooms?",
        a: "Yes. Choose Flooring as the surface on a photo of a kitchen, bathroom, laundry room or entryway, just as you would for a living room or bedroom.",
      },
    ],
    related: ["features/material-swap", "kitchen-design-ai", "partial-remodel-ai", "for/renovators"],
  },
  {
    slug: "countertop-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Countertop AI",
    metaTitle: "Countertop AI: Preview Quartz, Marble and More",
    metaDescription:
      "Try white quartz, Calacatta marble, black granite, butcher block, terrazzo or soapstone counters in a photo of your kitchen or bath before choosing a slab.",
    eyebrow: "AI countertop visualizer",
    title: "See the counter before you choose the slab",
    subtitle:
      "Swap your existing countertops for quartz, marble, granite, butcher block, terrazzo or soapstone in a photo of your kitchen or bathroom, and judge the result next to your cabinets and floor.",
    primaryCta: { label: "Swap my countertops", href: studioHref({ tool: "materials", space: "interior" }) },
    heroImage: "detail-countertop",
    highlights: ["Six countertop materials", "Kitchens, islands and vanities", "Cabinets and layout kept"],
    steps: [
      {
        title: "Capture the whole run",
        body: "Photograph the counters with the cabinets below and the backsplash above, and put away small appliances so the surface is visible.",
      },
      {
        title: "Choose Countertops and a material",
        body: "Select the surface, then a material such as soapstone or terrazzo. Mention a waterfall island or a particular edge in the instruction if you are weighing one.",
      },
      {
        title: "Judge the pairing",
        body: "Look at the counter with your cabinet color, then try the runner-up. If the backsplash suddenly feels wrong, test a new one with Precision edit.",
      },
    ],
    benefits: [
      {
        icon: "eye",
        title: "Veining at full scale",
        body: "A palm-sized sample of Calacatta marble cannot show how bold veining reads across a long island. A render can.",
      },
      {
        icon: "palette",
        title: "Contrast, tested",
        body: "Black granite on white cabinets, or butcher block on sage shaker? See the contrast before anyone starts cutting.",
      },
      {
        icon: "sun",
        title: "Warm, bright or grounded",
        body: "Butcher block warms a kitchen, white quartz and terrazzo keep it bright, and soapstone or black granite add weight. See which suits your light.",
      },
      {
        icon: "droplet",
        title: "Islands and vanities too",
        body: "Swap bathroom vanity tops, islands and bar counters as well as the main perimeter run.",
      },
      {
        icon: "message",
        title: "A focused trip to the stone yard",
        body: "Arrive with a clear idea of color and pattern, which makes browsing full slabs much easier.",
      },
    ],
    sections: [
      {
        title: "Match the material to how you cook",
        body: "Every counter looks good in a render. In daily use they differ, and it is worth knowing the tradeoffs before you fall for one:",
        bullets: [
          "White quartz is engineered for a consistent look and is low maintenance in a busy kitchen",
          "Calacatta marble is striking but can etch and stain, so it suits cooks who enjoy a patina",
          "Black granite is hard-wearing and hides crumbs, though it can show fingerprints and water spots",
          "Butcher block is warm and repairable but needs regular oiling, especially near the sink",
          "Soapstone feels soft and darkens with use; it can scratch, but light scratches can often be sanded out",
          "Terrazzo brings color and pattern to playful or retro kitchens",
        ],
        image: "kitchen-modern",
      },
      {
        title: "From render to template",
        body: "Once you have a favorite, the render becomes a reference for your fabricator, not a specification. Natural stone varies from slab to slab, so the marble in your image will not match any particular piece exactly. Ask to see full slabs in person, and talk through seams, edge profiles, overhangs and sink cutouts with the fabricator who templates your cabinets. If you are changing the cabinet layout or adding an island, confirm clearances and support with your contractor first.",
        image: "kitchen-dated",
      },
    ],
    faqs: [
      {
        q: "Can I preview a waterfall edge or a thicker slab?",
        a: "You can describe it in your instruction and the model will attempt it. Edges are small in most photos, so take a closer shot of the island if the edge is the detail you are deciding on.",
      },
      {
        q: "Will my backsplash change as well?",
        a: "Material swap aims to change only the counters when Countertops is selected. To test a new backsplash too, describe it in Precision edit, for example “white zellige backsplash up to the upper cabinets”.",
      },
      {
        q: "Can I see a specific slab from my supplier?",
        a: "Not exactly. Each material is generated to represent its type, so let the render settle the type and color family, then pick the actual slab in person.",
      },
      {
        q: "Does it work on bathroom vanities?",
        a: "Yes. Photograph the vanity with the mirror and faucet in frame, choose Countertops and pick a material. Smaller surfaces are a good place for a statement stone like Calacatta or terrazzo.",
      },
      {
        q: "Is it free to try?",
        a: "Yes. There is no charge during the public beta, and 20 renders a day is enough to test all six materials on the same kitchen.",
      },
    ],
    related: ["kitchen-design-ai", "cabinet-design-ai", "bathroom-design-ai", "features/material-swap"],
  },
  {
    slug: "furniture-replacement-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Furniture Replacement AI",
    metaTitle: "Furniture Replacement AI: Swap One Piece at a Time",
    metaDescription:
      "Describe the change, like a cognac leather sofa in place of the gray sectional, and Precision edit swaps that piece while the rest of your room stays put.",
    eyebrow: "AI furniture replacement",
    title: "Swap the sofa, keep the room",
    subtitle:
      "Tell Roomwright which piece to replace and what you want instead. Precision edit changes that one item and leaves your walls, floor and other furniture where they are.",
    primaryCta: { label: "Replace a piece", href: studioHref({ tool: "edit", space: "interior" }) },
    heroImage: "furniture-sofa",
    highlights: ["Built for one change at a time", "Describe the swap in plain words", "Everything else stays put"],
    steps: [
      {
        title: "Upload the furnished room",
        body: "Use a clear photo in which the piece you want to replace is fully visible, not cropped at the edge or hidden behind a table.",
      },
      {
        title: "Write the swap",
        body: "Name the item and its replacement, for example “replace the gray sectional with a cognac leather sofa” or “swap the dining chairs for rattan ones”.",
      },
      {
        title: "Adjust and repeat",
        body: "If the result is close, sharpen the wording and run it again. To change a second piece, start a new edit from the result.",
      },
    ],
    benefits: [
      {
        icon: "search",
        title: "Shop with a picture in mind",
        body: "Seeing a new sofa or bed in your own room makes it easier to settle on shape, color and material before you start browsing.",
      },
      {
        icon: "heart",
        title: "Try the bold piece first",
        body: "An emerald velvet armchair or a sculptural coffee table is easier to commit to once you have seen it in context.",
      },
      {
        icon: "shield",
        title: "Keep what you love",
        body: "Unlike a full redesign, a precision edit leaves the heirloom dresser and the rug you just bought alone.",
      },
      {
        icon: "message",
        title: "Plain words, not menus",
        body: "There is no catalog to scroll. Describe the piece the way you would to a friend who is shopping for you.",
      },
      {
        icon: "eraser",
        title: "Remove as well as replace",
        body: "Take a piece out entirely, like a bulky recliner, and see how the room feels with the extra space.",
      },
      {
        icon: "pencil",
        title: "Imagine a piece from scratch",
        body: "If the piece in your head does not seem to exist, Furniture creator generates a one-off design from a description.",
      },
    ],
    sections: [
      {
        title: "Writing instructions that work",
        body: "Precision edit works from your words, so a specific instruction gets closer to what you pictured than a vague one. Include what to change, what to change it to, and any detail that matters:",
        bullets: [
          "Name the item by position if there are several: “the armchair by the window”",
          "Describe material and color together: “oatmeal boucle” rather than “cozy”",
          "Mention shape when it matters: “a round pedestal table” or “a low platform bed”",
          "Keep to one change per instruction and chain edits for bigger updates",
        ],
        image: "furniture-chair",
      },
      {
        title: "Rendered furniture is a reference, not a product",
        body: "The pieces Roomwright generates are not items from a retailer's catalog, and their dimensions are estimates based on the photo. Use the render to settle on a direction, then measure your room and the real pieces you are considering. Check that doorways, stairs and elevators can take a large sofa, and leave space to walk around it. A render can make a deep sectional look effortless in a room where, in reality, it would block the path to the balcony door.",
        image: "living-modern",
      },
    ],
    faqs: [
      {
        q: "Can I replace several pieces at once?",
        a: "Precision edit is designed for one change at a time, which keeps the rest of the room stable. For a bigger furniture change, run edits in sequence, or use Redesign for a full restyle.",
      },
      {
        q: "Can I show it a photo of the product I want?",
        a: "Precision edit works from a written description rather than a product image. Describe the piece's shape, color, material and base as precisely as you can for the closest likeness.",
      },
      {
        q: "What if the new piece looks the wrong size?",
        a: "Say so in the next instruction, for example “make it a smaller three-seat sofa” or “a narrower coffee table”. Scale in a render is approximate, so confirm with a tape measure before buying.",
      },
      {
        q: "Does it work on patio and garden furniture?",
        a: "Yes. Precision edit works on exterior and garden photos too, so you can swap patio chairs or add a dining set to a deck.",
      },
      {
        q: "Where can I buy the furniture in the render?",
        a: "The pieces are generated, so there is no direct product link. Save the image and use it as a reference when you shop, or show it to a store or furniture maker to explain what you are after.",
      },
    ],
    related: ["features/precision-edit", "features/furniture-creator", "features/furniture-removal", "living-room-design-ai"],
  },
  {
    slug: "partial-remodel-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Partial Remodel AI",
    metaTitle: "Partial Remodel AI: Change One Area, Keep the Rest",
    metaDescription:
      "Preview a single change, like a window seat, a new backsplash or built-in shelves, in a photo of your space while everything else stays as it is. Free in beta.",
    eyebrow: "AI partial remodel",
    title: "Remodel one corner of a room without redesigning all of it",
    subtitle:
      "Describe the single change you are weighing, from a window seat to a new vanity, and Precision edit renders it into your photo with the rest of the room left as it is.",
    primaryCta: { label: "Try a single change", href: studioHref({ tool: "edit", space: "interior" }) },
    heroImage: "decor-shelf",
    highlights: ["One targeted change at a time", "Built-ins, fixtures and finishes", "The rest of the room is kept"],
    steps: [
      {
        title: "Start with the room as it is",
        body: "Upload a current photo. The more clearly the target area shows, the more convincing the change will look.",
      },
      {
        title: "Describe the one change",
        body: "Say what you want and where: “add a window seat with drawers under the bay window” or “replace the fireplace surround with limestone”.",
      },
      {
        title: "Build it up step by step",
        body: "Happy with the first change? Use that render as the starting photo for the next, and stack small updates into a fuller plan.",
      },
    ],
    benefits: [
      {
        icon: "ruler",
        title: "Right-sized projects",
        body: "Plenty of rooms need a few targeted updates rather than a gut renovation. Preview each one and decide which are worth doing.",
      },
      {
        icon: "chart",
        title: "Spend where it shows",
        body: "When there is budget for one project this year, seeing each option rendered makes choosing between them much easier.",
      },
      {
        icon: "layers",
        title: "See changes add up",
        body: "Try the new lighting, then the built-ins, then the paint, and watch the combined effect before anything is booked.",
      },
      {
        icon: "home",
        title: "Architectural details",
        body: "Window seats, ceiling beams, wainscoting, arched openings and built-in shelving can all be described and previewed.",
      },
      {
        icon: "droplet",
        title: "Kitchen and bath touches",
        body: "Swap a vanity, a light fixture, a backsplash or a range hood without touching anything else in the room.",
      },
    ],
    sections: [
      {
        title: "Ideas that suit a single edit",
        body: "Targeted changes make the biggest visual difference when they land on a focal point. A few that work well as one precise instruction:",
        bullets: [
          "A built-in window seat or reading nook in a bay or dormer",
          "Floor-to-ceiling shelving on both sides of a fireplace",
          "A statement range hood, or open shelving in place of upper cabinets",
          "Wainscoting or board and batten on the lower half of a dining room wall",
          "A new pendant or chandelier over an island or table",
          "A glass shower screen in place of a curtain",
        ],
        image: "dining-modern",
      },
      {
        title: "Know which changes need a professional",
        body: "Some edits are surface-level: paint, lighting, a new vanity. Others look simple in a render but involve structure, plumbing, gas or electrical work. Removing or opening up a wall, enlarging a window, moving a sink or adding a skylight can call for an engineer, licensed trades and a permit. Roomwright shows how a finished result might look; it cannot tell you whether a wall is load-bearing or what the work involves. Use the render to start that conversation with a contractor, and let them confirm scope, cost and approvals.",
        image: "living-dated",
      },
    ],
    faqs: [
      {
        q: "How is this different from Redesign?",
        a: "Redesign restyles the whole space at once. Precision edit changes the one thing you describe and leaves the rest in place, which is what you want when most of the room already works.",
      },
      {
        q: "Can I do the same for outdoor areas?",
        a: "Yes. The same tool handles facades and gardens, for changes like a new front door, a pergola or a painted fence.",
      },
      {
        q: "What if the edit changes more than I asked for?",
        a: "Occasionally a neighboring area shifts slightly. Make the instruction more specific about location, or run it again, since each generation comes out a little differently.",
      },
      {
        q: "I rent. Is this still useful?",
        a: "Yes, for testing changes you can undo, such as new curtains, freestanding shelving or different light shades, before you buy anything or ask your landlord about bigger ideas.",
      },
      {
        q: "Does it give me a cost estimate?",
        a: "No. Roomwright creates visualizations, not quotes or material lists. Once you know what you want, a contractor can price the work.",
      },
    ],
    related: ["features/precision-edit", "furniture-replacement-ai", "wall-ai", "for/renovators"],
  },
  {
    slug: "room-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Room Design AI",
    metaTitle: "Room Design AI for Bedrooms, Offices and Beyond",
    metaDescription:
      "Redesign bedrooms, home offices, nurseries, basements, entryways and more from a single photo, with 21 room types to pick from. Free during the public beta.",
    eyebrow: "AI room design",
    title: "Redesign any room you can photograph, attic to laundry room",
    subtitle:
      "Pick the room type, choose a style and Roomwright restyles the space around its existing walls and windows. Bedrooms, offices, nurseries, basements and even home gyms are covered.",
    primaryCta: { label: "Design a room", href: studioHref({ tool: "redesign", space: "interior" }) },
    heroImage: "bedroom-calm",
    highlights: ["21 interior room types", "Awkward spaces welcome", "Subtle to bold changes"],
    steps: [
      {
        title: "Tell it what the room is for",
        body: "Select the room type so the redesign knows the job: a nursery needs a crib and storage, while a home gym needs open floor.",
      },
      {
        title: "Set the direction",
        body: "Choose a look and decide how far to push it. For a room you use every day, start Subtle; for a spare room with no history, go Bold.",
      },
      {
        title: "Refine the details",
        body: "Add a brief instruction, such as “desk facing the window” or “bunk beds for two”, and generate again until it works.",
      },
    ],
    benefits: [
      {
        icon: "search",
        title: "The rooms that get forgotten",
        body: "Entryways, laundry rooms and walk-in closets rarely get a design plan. A render shows what a small upgrade could do for them.",
      },
      {
        icon: "key",
        title: "Repurpose a spare room",
        body: "See the same small spare room as a guest bedroom, a home office or a game room before deciding what it should become.",
      },
      {
        icon: "ruler",
        title: "Real constraints respected",
        body: "Sloped attic ceilings and small basement windows stay in the render, so ideas are grounded in the room you actually have.",
      },
      {
        icon: "heart",
        title: "Kids' rooms that grow",
        body: "Try a nursery now and a kids room later from the same photo to plan furniture that can adapt.",
      },
      {
        icon: "building",
        title: "Small business spaces",
        body: "Café, retail store and office room types help owners picture a refit before they call a contractor.",
      },
    ],
    sections: [
      {
        title: "Start with how the room is used",
        body: "Style gets most of the attention, but function decides whether a room works. Before you generate, spend a minute on what the room has to do, then put it in your instruction:",
        bullets: [
          "A guest room that doubles as an office needs a sleeper sofa or a daybed, not a king bed",
          "A basement family room benefits from layered lighting to make up for small windows",
          "An entryway needs somewhere to sit, hooks and a home for shoes",
          "A shared kids room needs storage each child can reach",
        ],
        image: "office-home",
      },
      {
        title: "Rooms with difficult features",
        body: "Sloped ceilings, exposed ductwork, off-center windows and narrow galley shapes are part of real homes. Roomwright keeps those features, which is useful, because a design that ignores them will not survive contact with the actual room. If a feature bothers you, try styles that work with it: Rustic and Scandinavian make the most of attic beams, Industrial embraces exposed pipes, and Minimalist keeps a narrow room from feeling crowded. If you want to change the feature itself, a contractor can tell you what is possible.",
        image: "kids-room",
      },
    ],
    faqs: [
      {
        q: "Which room types can I choose?",
        a: "Living rooms, kitchens, open-plan spaces, bedrooms, bathrooms, dining rooms, home offices, kids rooms, nurseries, family rooms, attics, basements, entryways, laundry rooms, walk-in closets, home gyms, game rooms and balconies, plus cafés, retail stores and offices.",
      },
      {
        q: "My room is tiny. Will it still work?",
        a: "Yes. Shoot from the doorway or a corner to capture as much as you can. The redesign keeps the real footprint, so it will not invent extra square footage, which is exactly what you want from a realistic preview.",
      },
      {
        q: "Can I design a room that does not exist yet?",
        a: "Yes. Text to design generates a room from a written description, and Sketch to render turns a hand-drawn perspective sketch into a photoreal image.",
      },
      {
        q: "Can I use a photo from a listing I am considering?",
        a: "Yes, if you have the right to use the photo. Restyling a room in a home you might buy or rent is a helpful way to picture living there.",
      },
      {
        q: "How many rooms can I do?",
        a: "As many as you like, within the beta allowance of 20 renders a day per account.",
      },
    ],
    related: ["interior-design-ai", "features/redesign", "features/text-to-design", "free-ai-tools/interior-design"],
  },
  {
    slug: "living-room-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Living Room AI",
    metaTitle: "Living Room Design AI: Restyle Your Living Room",
    metaDescription:
      "See your living room as Scandinavian, wabi-sabi, art deco or quiet luxury with the layout kept, then swap the sofa or repaint a wall. Free during the beta.",
    eyebrow: "AI living room design",
    title: "Rethink the room where everyone ends up",
    subtitle:
      "Restyle your living room around its real windows, fireplace and doorways, then fine-tune the sofa, rug or wall color until it feels like the place you want to come home to.",
    primaryCta: {
      label: "Redesign my living room",
      href: studioHref({ tool: "redesign", space: "interior", roomType: "Living room" }),
    },
    heroImage: "living-modern",
    highlights: ["Windows, fireplace and layout kept", "Swap single pieces afterwards", "Borrow a look from a photo"],
    steps: [
      {
        title: "Shoot from the entrance",
        body: "Photograph from where you usually walk in, so the render shows the view you see every day, with the main seating and the focal wall in frame.",
      },
      {
        title: "Pick a style for how you live",
        body: "Match the style to the household: Coastal for easy, light rooms, Maximalist for collectors, Quiet luxury for a calm, tailored space.",
      },
      {
        title: "Finish with the details",
        body: "Use Precision edit to swap a coffee table or add built-ins, and Decor staging to layer in throw pillows, plants and art.",
      },
    ],
    benefits: [
      {
        icon: "lamp",
        title: "Fireplace or TV, balanced",
        body: "Try arrangements that center conversation on the fireplace, or balance a TV wall with shelving and lamps.",
      },
      {
        icon: "users",
        title: "Seating for your household",
        body: "Compare a sectional for movie nights with a pair of facing sofas for conversation, and see which suits the room's shape.",
      },
      {
        icon: "palette",
        title: "Mood through fabric",
        body: "Boucle, linen, leather and velvet change how a living room feels. Name them in your instruction to steer the look.",
      },
      {
        icon: "image",
        title: "Borrow a look you saved",
        body: "Style transfer applies the feel of an inspiration photo, like a hotel lounge you loved, to the living room you have.",
      },
      {
        icon: "brush",
        title: "Color at room scale",
        body: "Test an evergreen feature wall or warm white throughout with the Paint visualizer.",
      },
    ],
    sections: [
      {
        title: "Checking the layout in a render",
        body: "A living room restyle can rearrange the furniture as well as change its style. Before you fall for a render, run through a few practical checks, and if one fails, ask for the fix in your next instruction:",
        bullets: [
          "Is there a clear path from the door to the seating and on to other rooms?",
          "Can everyone on the sofa see the TV or the fire without craning?",
          "Does every seat have somewhere to put a drink down?",
          "Is there a mix of overhead, lamp and accent lighting for evenings?",
        ],
        image: "living-japandi",
      },
      {
        title: "Finding common ground on style",
        body: "Because the living room hosts everyone, it is often where compromises happen. Running the same photo through different styles is a useful way to find common ground in a household with different tastes. Japandi and Scandinavian suit people who want calm and fewer things. Mid-century modern and Art deco appeal to lovers of statement furniture. Coastal and Farmhouse feel relaxed and family-friendly. Transitional can be a good middle ground: classic shapes, clean lines and nothing too loud.",
        image: "living-boho",
      },
    ],
    faqs: [
      {
        q: "Can I keep my sofa and change everything else?",
        a: "Mention it by name, as in “keep the tan leather sofa”, and use the Subtle or Balanced strength. If it still changes, restyle around it in stages with Precision edit instead.",
      },
      {
        q: "My living room is open to the kitchen. Which room type should I use?",
        a: "Choose Open-plan kitchen & living, so the redesign treats both zones as one space and keeps the style consistent across them.",
      },
      {
        q: "Can I plan around a TV?",
        a: "Yes. Include it in your instruction, for example “wall-mounted TV above a low media console, with shelving on both sides”.",
      },
      {
        q: "Can I buy the furniture shown?",
        a: "Not directly. The pieces are the model's own creations for that style rather than products from a store, so treat the render as a visual brief and look for pieces with a similar shape, color and material.",
      },
      {
        q: "How can I make a dark living room feel brighter?",
        a: "Try lighter styles such as Scandinavian or Coastal, ask for pale floors and warm white walls, and add lamps in your instruction. The windows stay the same size, but the render shows how much finishes and lighting can help.",
      },
    ],
    related: ["interior-design-ai", "furniture-replacement-ai", "features/decor-staging", "features/design-transfer"],
  },
  {
    slug: "kitchen-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Kitchen Design AI",
    metaTitle: "Kitchen Design AI: Preview a Kitchen Remodel",
    metaDescription:
      "Photograph your kitchen and preview new cabinets, counters, flooring and styles from modern to farmhouse, with the layout and windows kept where they are.",
    eyebrow: "AI kitchen design",
    title: "Preview your kitchen remodel before the first cabinet comes out",
    subtitle:
      "Restyle the whole kitchen in one pass, or work surface by surface through cabinets, counters, backsplash, floor and lighting, all on a picture of the kitchen you cook in now.",
    primaryCta: {
      label: "Redesign my kitchen",
      href: studioHref({ tool: "redesign", space: "interior", roomType: "Kitchen" }),
    },
    heroImage: "kitchen-modern",
    highlights: ["Whole-room or surface by surface", "Cabinets, counters and floors", "Your layout and windows kept"],
    steps: [
      {
        title: "Clear the counters, shoot wide",
        body: "Put away small appliances and dish racks, then photograph from the far corner so cabinets, counters and floor are all in view.",
      },
      {
        title: "Restyle, then specialize",
        body: "Run Redesign with a style like Farmhouse, Modern or Mediterranean to find a direction, then switch to Material swap to test exact cabinet and counter pairings.",
      },
      {
        title: "Fine-tune the focal points",
        body: "Use Precision edit for the details that define a kitchen: a range hood, open shelves, pendant lights or a new backsplash.",
      },
    ],
    benefits: [
      {
        icon: "grid",
        title: "Combinations, not guesses",
        body: "Cabinet color, counter material and floor finish all interact. Seeing them together avoids surprises from samples that looked fine on their own.",
      },
      {
        icon: "lightbulb",
        title: "Style before spending",
        body: "Settle the big question, such as warm farmhouse or sleek modern, before you get into quotes and product lists.",
      },
      {
        icon: "hammer",
        title: "Refresh or full remodel",
        body: "Compare a complete remodel with a lighter refresh. Painted cabinets, a new counter and pendants can go a long way.",
      },
      {
        icon: "lamp",
        title: "Islands and lighting",
        body: "Describe an island, a breakfast bar or a row of pendants and see how they sit in the room.",
      },
      {
        icon: "users",
        title: "Everyone sees the same idea",
        body: "A render gets partners, designers and contractors looking at one picture instead of three different imagined kitchens.",
      },
    ],
    sections: [
      {
        title: "Work in layers",
        body: "Kitchens pack a lot of decisions into a small footprint, and it is easy to get stuck choosing a faucet before you know the style. Rather than solving everything in one render, move from broad to specific:",
        bullets: [
          "First, style: run three or four Redesign passes to find the overall direction",
          "Second, big surfaces: use Material swap for cabinets, counters and flooring",
          "Third, focal points: use Precision edit for the hood, shelving, lighting and hardware",
          "Last, color: fine-tune the wall paint around everything else",
        ],
        image: "kitchen-farmhouse",
      },
      {
        title: "What stays the same, and why that helps",
        body: "Roomwright keeps your kitchen's walls, windows and overall footprint, which makes each render a realistic preview of a remodel that works with the existing layout. Keeping the sink, range and ventilation where they are is often the most practical route, since moving them adds cost and complexity. If you want to explore a new layout, such as moving the sink to an island, a render can still show the idea, but a kitchen designer or contractor should confirm plumbing, electrical, ventilation, clearances and permits before you plan around it.",
        image: "kitchen-dated",
      },
    ],
    faqs: [
      {
        q: "Will it keep my appliances?",
        a: "Redesign may restyle appliances along with everything else. If you want them kept, say so in your instruction, or use Material swap and Precision edit to change specific surfaces only.",
      },
      {
        q: "Does it work for small or galley kitchens?",
        a: "Yes. Photograph from one end to show the full run. In a narrow space, lighter cabinets, a continuous counter and open shelving are all worth testing.",
      },
      {
        q: "Can I see the kitchen and living area together?",
        a: "Yes. Choose the Open-plan kitchen & living room type so both zones are styled as one space.",
      },
      {
        q: "Can it produce a layout plan or cabinet list?",
        a: "No. The output is an image for choosing a look. A kitchen designer or cabinetmaker will produce the measured plan and the order list.",
      },
      {
        q: "Which style should I try first?",
        a: "Pick one you are drawn to and one you are unsure about. The contrast is informative: a Farmhouse render next to a Modern one quickly shows which details you care about.",
      },
    ],
    related: ["cabinet-design-ai", "countertop-ai", "flooring-ai", "for/renovators"],
  },
  {
    slug: "bathroom-design-ai",
    kind: "use-case",
    status: "live",
    navLabel: "Bathroom Design AI",
    metaTitle: "Bathroom Design AI: Preview a New Bathroom",
    metaDescription:
      "See your bathroom as a calm spa, a bold tiled room or a clean modern refresh. Start from one photo and preview tile, vanity, fixture and lighting ideas.",
    eyebrow: "AI bathroom design",
    title: "Plan a bathroom you will want to spend time in",
    subtitle:
      "Photograph your bathroom as it is today and restyle the tile, vanity, fixtures and lighting around the room's existing walls, window and footprint.",
    primaryCta: {
      label: "Redesign my bathroom",
      href: studioHref({ tool: "redesign", space: "interior", roomType: "Bathroom" }),
    },
    heroImage: "bath-spa",
    highlights: ["Spa, modern or classic looks", "Tile, vanity and lighting ideas", "Works in compact bathrooms"],
    steps: [
      {
        title: "Photograph from the doorway",
        body: "Bathrooms are tight, so stand in the doorway at chest height and include the vanity and the shower or tub if you can. Close the toilet lid and clear the counter first.",
      },
      {
        title: "Choose a style",
        body: "Japandi and Wabi-sabi lean toward spa calm, Art deco and Maximalist toward pattern and drama, and Modern and Minimalist toward clean, simple lines.",
      },
      {
        title: "Refine the fittings",
        body: "Use Precision edit for one fixture at a time: a freestanding tub, a fluted vanity, a wall-mounted faucet or a new mirror.",
      },
    ],
    benefits: [
      {
        icon: "grid",
        title: "Tile at full scale",
        body: "Tile is hard to picture from a single sample. Zellige, large porcelain and terrazzo each change character once they cover a whole wall or floor.",
      },
      {
        icon: "ruler",
        title: "Small room, big decisions",
        body: "In a compact bathroom every choice is on show. Test lighter tile, a floating vanity or a glass screen to see what opens it up.",
      },
      {
        icon: "droplet",
        title: "A spa mood, tested",
        body: "Warm wood, soft stone and layered light are what make a bathroom feel calm. See the combination before buying any of it.",
      },
      {
        icon: "lamp",
        title: "Lighting that flatters",
        body: "Try sconces on either side of the mirror instead of a single overhead light and see how the room changes.",
      },
      {
        icon: "hammer",
        title: "How far a refresh goes",
        body: "Compare a new vanity and fresh paint with a complete retile to see what a smaller budget could achieve.",
      },
    ],
    sections: [
      {
        title: "Bathroom choices worth testing",
        body: "Bathroom remodels bring several trades into a small room and are disruptive to live through, so it pays to settle the look early. These are the decisions a render helps with most:",
        bullets: [
          "Shower or tub, or a walk-in shower with a glass screen",
          "Tile height: full height, half height or just the wet zones",
          "Vanity style: floating, furniture-style or double",
          "Fitting finishes: brushed brass, matte black or chrome",
          "Floor tile size and color against the walls",
        ],
        image: "bath-modern",
      },
      {
        title: "Water, ventilation and code come first",
        body: "A render can show a curbless shower or a freestanding tub under the window. It cannot tell you whether the floor can take the weight, whether the drain can move, or how ventilation and waterproofing should be handled. Building codes are specific about bathrooms, and some changes need a licensed plumber or electrician and a permit. Use Roomwright to agree on the look, then ask a qualified contractor to confirm what the room can support before you order fixtures.",
        image: "detail-tile",
      },
    ],
    faqs: [
      {
        q: "Can I swap a tub for a shower, or the other way around?",
        a: "You can describe the swap with Precision edit and see how it looks. Whether it is practical depends on drain location, floor structure and space, so check with a plumber before planning around it.",
      },
      {
        q: "Does it work on tiny bathrooms and powder rooms?",
        a: "Yes. Shoot from the doorway and fit in as much as you can. If the room is too narrow for one shot, focus on the vanity wall, where most of the design decisions live.",
      },
      {
        q: "Can I preview the exact tile I picked?",
        a: "Not an exact product. Describe the tile's color, shape and layout, for example “green square zellige in a stacked pattern”, for a close impression, then compare it with the physical sample.",
      },
      {
        q: "Does it include a shopping list?",
        a: "No. Roomwright generates images, not product lists or prices. The fittings in a render are generated to suit the style, so use them as a reference when you visit a showroom.",
      },
      {
        q: "Can I refresh a guest bath without changing fixtures?",
        a: "Yes. Decor staging adds towels, plants, art and accessories without touching the fixtures, a quick way to plan a low-cost refresh for a guest bath or a rental.",
      },
    ],
    related: ["partial-remodel-ai", "wall-ai", "features/precision-edit", "for/contractors"],
  },
];
