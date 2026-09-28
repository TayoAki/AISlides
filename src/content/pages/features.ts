// Feature pages rendered at /features/*. All copy is original to Roomwright.
// Live pages deep-link into the studio; coming-soon pages collect early-access sign-ups.
import type { Cta, LandingPage } from "@/content/types";
import { studioHref } from "@/lib/tools";

const EARLY_ACCESS: Cta = { label: "Join early access", href: "#early-access" };

export const featurePages: LandingPage[] = [
  // ---------------------------------------------------------------- Redesign
  {
    slug: "features/redesign",
    kind: "feature",
    status: "live",
    navLabel: "Redesign",
    metaTitle: "AI Redesign for Rooms, Facades and Gardens",
    metaDescription:
      "Upload a photo and restyle a room, house exterior or garden in any style. Roomwright keeps walls, windows and layout in place while the design changes.",
    eyebrow: "Redesign",
    title: "Restyle any room, facade or garden from one photo",
    subtitle:
      "Choose a style and how far to take it. Roomwright reworks furniture, finishes, lighting and color across the whole scene, while your walls, windows and floor plan stay where they are.",
    primaryCta: { label: "Start a redesign", href: studioHref({ tool: "redesign" }) },
    heroImage: "living-japandi",
    highlights: ["Interiors, exteriors and gardens", "Subtle, balanced or bold restyles", "Walls and windows stay in place"],
    steps: [
      {
        title: "Upload a photo",
        body: "Shoot the room, the front of the house or the backyard in daylight. Standing in a corner gets more of the space into the frame.",
      },
      {
        title: "Pick a style and a strength",
        body: "Choose a look such as Japandi, Craftsman or Japanese zen, then decide whether the change should be subtle, balanced or bold.",
      },
      {
        title: "Compare, then refine",
        body: "Generate a few versions and keep the one that feels right. Add a short note, like warmer wood or fewer patterns, and run it again.",
      },
    ],
    benefits: [
      {
        title: "The whole scene changes together",
        body: "Furniture, lighting, finishes and color are reworked together, so nothing in the new scene looks pasted in.",
        icon: "wand",
      },
      {
        title: "You decide how far it goes",
        body: "Subtle keeps most of what you own and updates the mood. Bold treats everything except the architecture as open to change.",
        icon: "layers",
      },
      {
        title: "A style for every space",
        body: "Interior looks from mid-century modern to wabi-sabi, facade styles like Tudor and Spanish revival, and gardens from cottage to desert xeriscape.",
        icon: "palette",
      },
      {
        title: "Built around your architecture",
        body: "The redesign is designed to respect the structure in your photo, so the ideas fit the space you actually have.",
        icon: "home",
      },
      {
        title: "Room to experiment",
        body: "During the public beta every account gets 20 free renders a day, enough to test several directions on the same room.",
        icon: "sparkles",
      },
    ],
    sections: [
      {
        title: "Choosing the right strength",
        body: "Strength is the setting that shapes a redesign most. Subtle suits a room you mostly like: textiles, lighting and accents change while the sofa and table stay recognizable. Balanced is the everyday choice, a clear new look that still echoes the original arrangement. Bold replaces nearly everything that is not structure, which helps when a gut renovation is on the table or you want to try a style you have never lived with. If you are unsure, start at Balanced and move one step in either direction based on what you see.",
        image: "living-modern",
      },
      {
        title: "Photos that give the AI more to work with",
        body: "A redesign can only reinterpret what the camera captured, so a few minutes of preparation pays off in the result.",
        bullets: [
          "Shoot in daylight with the lamps on to avoid dark corners.",
          "Hold the camera level at about chest height; tilted verticals come back tilted.",
          "Clear small clutter from floors and counters so it isn't mistaken for furniture.",
          "Use a normal lens rather than a fisheye, which bends walls and confuses scale.",
          "For exteriors, step back far enough to include the roofline and the ground.",
        ],
      },
      {
        title: "What a redesign is for",
        body: "A redesign is a visualization for exploring ideas quickly. It shows a believable direction, not a construction drawing, a shopping list or a guarantee of how the finished room will look. Furniture in the image is generated, so treat it as a reference for shape, color and mood rather than a specific product. If a concept involves moving walls, changing windows or altering a facade, confirm what is possible with an architect, contractor or your local building department before you plan around it. When you like most of a result but want one detail changed, Precision Edit handles that single change.",
      },
    ],
    faqs: [
      {
        q: "Should I clear the room before redesigning it?",
        a: "You don't have to. It restyles what is in the photo, clutter and all, though tidier rooms give cleaner results. For a blank-slate approach, clear the room with AI Furniture Removal first, download the empty version and redesign that instead.",
      },
      {
        q: "Is Redesign only for interiors?",
        a: "No. It covers interiors such as kitchens, bedrooms, basements, attics, home gyms and even cafés or small shops; exteriors like a house front, porch, garage or townhouse; and gardens, including patios, decks, pool areas and rooftop terraces.",
      },
      {
        q: "Can I tell it what to keep or add?",
        a: "Yes, with the optional instruction. Try “keep the brick fireplace” or “add a navy velvet sofa.” Short, concrete notes steer the result better than long lists of adjectives.",
      },
      {
        q: "Will the finished room look exactly like the render?",
        a: "Treat the render as a strong visual direction, not a blueprint. Sizes, products and finishes are approximations, so measure, sample and get quotes before you buy or build.",
      },
      {
        q: "How many redesigns can I create?",
        a: "While Roomwright is in public beta, every account is free and includes 20 renders a day. Paid plans are listed on the pricing page and are launching soon; nothing is charged during the beta.",
      },
    ],
    related: ["interior-design-ai", "exterior-ai", "features/design-transfer", "features/precision-edit"],
  },

  // ---------------------------------------------------------------- Sketch to Render
  {
    slug: "features/sketch-to-render",
    kind: "feature",
    status: "live",
    navLabel: "Sketch to Render",
    metaTitle: "Sketch to Render: Turn Drawings into Photoreal Images",
    metaDescription:
      "Photograph a hand sketch or line drawing and turn it into a photoreal room, facade or garden in the style you choose. See an idea before anyone models it.",
    eyebrow: "Sketch to Render",
    title: "Turn pencil lines into a photoreal render",
    subtitle:
      "Upload a hand sketch or line drawing of a room, a house front or a garden, choose a style, and see it rendered with real-looking materials, light and shadow.",
    primaryCta: { label: "Render a sketch", href: studioHref({ tool: "sketch" }) },
    heroImage: "sketch-plan",
    highlights: ["Hand sketches and line drawings", "Rooms, house fronts and yards", "You choose the finished style"],
    steps: [
      {
        title: "Capture the drawing",
        body: "Lay the page flat in even light and photograph it straight on, or export a clean image from your drawing app.",
      },
      {
        title: "Set the space and style",
        body: "Choose interior, exterior or garden, then the room type and a style, so the AI has context for what each shape is meant to be.",
      },
      {
        title: "Render and compare",
        body: "Generate a version, then try another style or add a note about materials, such as a concrete floor or cedar cladding.",
      },
    ],
    benefits: [
      {
        title: "Show ideas at the napkin stage",
        body: "Give a client, a business partner or your own family something believable to react to long before a detailed model exists.",
        icon: "pencil",
      },
      {
        title: "Materials and light filled in",
        body: "Plain outlines come back with texture, shadow and daylight, which makes proportions and flow easier to judge.",
        icon: "sun",
      },
      {
        title: "One drawing, many directions",
        body: "Render the same sketch as Scandinavian, industrial or Mediterranean and put the options side by side.",
        icon: "layers",
      },
      {
        title: "Inside, outside and in the garden",
        body: "Sketch a kitchen wall, a porch addition or a planting bed; each space has its own room types and styles.",
        icon: "trees",
      },
      {
        title: "Nothing to install",
        body: "It runs in your browser, so there's no rendering software to buy, learn or keep updated.",
        icon: "zap",
      },
    ],
    sections: [
      {
        title: "What kind of drawing renders best",
        body: "Perspective sketches, drawn as if you were standing in the space, translate most directly into a photoreal scene. Elevations work well for facades and single walls. Top-down plans can be rendered too, but the AI has to imagine far more, so expect a looser interpretation. Whatever you draw, a little cleanup helps:",
        bullets: [
          "Dark, continuous lines on plain white paper",
          "Stray marks, hands, rulers and page edges cropped out",
          "Notes and labels written in the instruction box, not on the drawing",
          "Proportions drawn with care, since the render follows them",
        ],
      },
      {
        title: "Where it fits in a project",
        body: "Sketch to Render is strongest at the start, when you need to test an idea or explain it to someone who doesn't read drawings. An architect can bring three facade options to a first meeting; a homeowner can check whether an open kitchen feels right before calling a contractor. The render is a visualization, not a construction document. It follows the proportions you drew rather than real measurements, and anything structural, from removing a wall to adding a dormer, needs review by a qualified professional and your local permitting office.",
        image: "exterior-modern",
      },
    ],
    faqs: [
      {
        q: "Do I need to be good at drawing?",
        a: "No. A rough sketch with clear lines is enough for the AI to add materials and light. Keep proportions roughly right, though, because a lopsided sketch leads to a lopsided render.",
      },
      {
        q: "Can I use a drawing made on a tablet?",
        a: "Yes. Export it as an ordinary image file and upload it like any photo. Dark lines on a light background tend to give the cleanest result.",
      },
      {
        q: "Will the render match my dimensions?",
        a: "It matches the look of your drawing, not measured dimensions. Use it to judge style and feel, and keep your measured drawings as the reference for anything that gets built.",
      },
      {
        q: "Does it handle house fronts and gardens?",
        a: "Yes. Choose exterior for house fronts, porches and garages, or garden for backyards, patios, courtyards and pool areas, then pick a matching style.",
      },
      {
        q: "What if part of my sketch is misread?",
        a: "Darken the lines in that area, erase stray marks, or add a short note like “the tall rectangle on the left is a pantry door,” then render again.",
      },
    ],
    related: ["for/architects", "features/text-to-design", "for/interior-designers", "exterior-ai"],
  },

  // ---------------------------------------------------------------- Precision Edit
  {
    slug: "features/precision-edit",
    kind: "feature",
    status: "live",
    navLabel: "Precision Edit",
    metaTitle: "Precision Edit: Change One Thing in Your Room Photo",
    metaDescription:
      "Type the change you want, like swap the sofa or add a window seat, and Roomwright edits that part of your photo while leaving the rest of the scene alone.",
    eyebrow: "Precision Edit",
    title: "Change one thing and leave the rest alone",
    subtitle:
      "Write a plain instruction, such as “replace the glass coffee table with a round oak one” or “remove the floor lamp,” and Precision Edit makes that change without restyling the whole room.",
    primaryCta: { label: "Make a precise edit", href: studioHref({ tool: "edit" }) },
    heroImage: "living-classic",
    highlights: ["Instructions in everyday words", "Swap, add or remove one element", "Works inside, outside and in yards"],
    steps: [
      {
        title: "Start from a photo you like",
        body: "Upload a room, facade or garden that's mostly right, including a render you downloaded from another Roomwright tool.",
      },
      {
        title: "Describe one change",
        body: "Name the object and the result. “Swap the glass coffee table for a round oak one” works far better than “nicer table.”",
      },
      {
        title: "Check it and continue",
        body: "If you want another change, run a new instruction on the updated image and build the design one step at a time.",
      },
    ],
    benefits: [
      {
        title: "Targeted, not wholesale",
        body: "Your instruction points at one object or area, so a small tweak doesn't reshuffle a design you've already settled on.",
        icon: "scan",
      },
      {
        title: "Add, replace or remove",
        body: "Swap a pendant light, take out a bulky side table, or add a built-in window seat with storage below.",
        icon: "move",
      },
      {
        title: "No selections to draw",
        body: "There's no masking, brushing or layer panel to learn. The sentence you type is the whole interface.",
        icon: "message",
      },
      {
        title: "Outside the house too",
        body: "Try a black front door, shutters on the upstairs windows or a pergola over the patio.",
        icon: "home",
      },
      {
        title: "Preview a purchase",
        body: "Before you order the rug, vanity or light fixture, see something similar in your own room and light.",
        icon: "eye",
      },
    ],
    sections: [
      {
        title: "Writing instructions that land",
        body: "The AI does best with instructions a stranger could follow without asking questions. Vague requests invite the model to guess, and guesses tend to spread beyond the spot you meant. A few habits help:",
        bullets: [
          "Say which object, and where: “the armchair to the left of the fireplace.”",
          "Describe the result by material, color and shape: “a low walnut console with fluted doors.”",
          "Mention what must stay if it matters: “keep the rug and the artwork.”",
          "Make one change per instruction, then stack edits in sequence.",
        ],
      },
      {
        title: "Precision Edit, Redesign or Room Composer?",
        body: "Use Redesign when you want a new look for the whole space and are happy for everything to change. Use Precision Edit when a design is ninety percent right and one element is wrong: the wrong sofa, a dated light fixture, a missing window seat. Room Composer is the same instruction-based editing, focused on adding and arranging new pieces, and its guide covers placement phrases in more depth. Many people move between all three, redesigning first and then correcting details with a few precise edits.",
        image: "furniture-sofa",
      },
      {
        title: "Where edits can struggle",
        body: "Edits are AI-generated, so results vary. Fine text, logos, mirrors and glass reflections are harder to get right than furniture or finishes. Requested items come back as lookalikes, not exact products, and their size is estimated from the photo, so measure your space before buying anything you see. If an edit changes more than you asked, narrow the instruction and name what to keep. For structural ideas, such as a new opening or a moved window, use the image to start a conversation with a builder or architect, not as a plan.",
      },
    ],
    faqs: [
      {
        q: "How is Precision Edit different from Redesign?",
        a: "Redesign reinterprets the whole scene in a chosen style. Precision Edit changes only what your instruction describes and aims to leave everything else as it was.",
      },
      {
        q: "Can I remove things, not just add them?",
        a: "Yes. Instructions like “remove the ceiling fan” or “take the bike off the porch” work well. To empty an entire room at once, AI Furniture Removal is quicker.",
      },
      {
        q: "Can I ask for a specific product by name?",
        a: "Describe how it looks instead. The AI generates a similar piece rather than the exact item, so check real dimensions and finishes with the retailer.",
      },
      {
        q: "Why did the edit change more than I asked?",
        a: "Broad wording gives the AI room to interpret. Point to a single object, say where it is, and add “keep everything else the same.”",
      },
      {
        q: "Can I edit a facade or backyard photo?",
        a: "Yes. Paint the front door, swap a railing, add window boxes or put a fire pit on the patio, one instruction at a time.",
      },
    ],
    related: ["features/room-composer", "furniture-replacement-ai", "partial-remodel-ai", "features/redesign"],
  },

  // ---------------------------------------------------------------- Fill Spaces
  {
    slug: "features/fill-spaces",
    kind: "feature",
    status: "live",
    navLabel: "Fill Spaces",
    metaTitle: "Fill Spaces: Stage a Vacant Room in Any Style",
    metaDescription:
      "Turn a photo of an empty room into a furnished one. Pick the room type and style, and Roomwright stages it with furniture and decor that suit the space.",
    eyebrow: "Fill Spaces",
    title: "See a vacant room furnished in your chosen style",
    subtitle:
      "Bare rooms are hard to picture. Fill Spaces adds sofas, beds, tables, rugs and lighting in the style you pick, so anyone can see how the room could live.",
    primaryCta: { label: "Furnish a room", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
    heroImage: "empty-room",
    highlights: ["Made for vacant rooms", "Choose the room type and style", "Stage one room several ways"],
    steps: [
      {
        title: "Photograph the empty room",
        body: "Turn on the lights, open the blinds and shoot from a corner at chest height so the floor and at least two walls show.",
      },
      {
        title: "Choose what the room is for",
        body: "Pick a room type, from nursery to home office to family room, then a style such as Scandinavian or quiet luxury.",
      },
      {
        title: "Generate and choose",
        body: "Render a few versions, pick the arrangement that suits the room best and download it.",
      },
    ],
    benefits: [
      {
        title: "Give a room a purpose",
        body: "A vacant spare room could be anything. Furnished, it reads as a guest room, an office or a nursery at a glance.",
        icon: "sofa",
      },
      {
        title: "Match the likely buyer or renter",
        body: "Stage a city condo in clean modern pieces, or a country house with warm rustic wood and linen.",
        icon: "users",
      },
      {
        title: "Compare uses before you move",
        body: "See the same bedroom as a home office and as a guest room, then decide where the desk really goes.",
        icon: "layers",
      },
      {
        title: "From bedrooms to basements",
        body: "Living and dining rooms, bedrooms, basements, attics and walk-in closets, plus spaces like a café or a small office.",
        icon: "home",
      },
    ],
    sections: [
      {
        title: "Staging for a listing, done honestly",
        body: "Virtual staging helps buyers picture a vacant home, but it should never mislead. Label staged images as virtually staged, which many MLSs require, and keep an unstaged photo of each room in the listing so people can see its real condition. Stage furniture, not features: don't use staging to hide damage, add fixtures that aren't there or change views, floors or walls. The furniture in the image is illustrative and doesn't come with the home, and its scale is the AI's estimate, so buyers should measure before they plan.",
        image: "living-modern",
      },
      {
        title: "Getting a clean result",
        body: "Fill Spaces is built for rooms that are empty or nearly so, and a little preparation makes a visible difference:",
        bullets: [
          "Sweep away boxes, ladders and paint cans before shooting.",
          "If the room is partly furnished, clear it with AI Furniture Removal first and stage the cleared image.",
          "Photograph each angle separately rather than stitching a panorama.",
          "Match the style to the architecture; a coastal look in a loft with exposed ducts can feel forced.",
        ],
      },
    ],
    faqs: [
      {
        q: "How is Fill Spaces different from Decor Staging?",
        a: "Fill Spaces furnishes an empty room with the big pieces and the accessories. Decor Staging keeps the furniture a room already has and layers in rugs, art, plants and lighting.",
      },
      {
        q: "What if the room isn't completely empty?",
        a: "Results are cleanest in an empty room. Clear existing pieces with AI Furniture Removal, download that version and stage it from there.",
      },
      {
        q: "Is the furniture drawn to scale?",
        a: "It's sized by the AI's reading of the photo, which is an estimate. Measure the room and the real pieces before buying anything.",
      },
      {
        q: "Can I use staged images in a property listing?",
        a: "Many agents do, and commercial use is allowed during the beta. Disclose that the photos are virtually staged, include the original empty-room photo, and follow your MLS rules.",
      },
      {
        q: "Does it only work for bedrooms and living rooms?",
        a: "No. You can stage living rooms, bedrooms, kitchens, dining rooms, nurseries, home offices, basements, attics, laundry rooms, home gyms, balconies and more, plus a few commercial spaces.",
      },
    ],
    related: ["virtual-staging-ai", "for/realtors", "features/furniture-removal", "free-ai-tools/virtual-staging"],
  },

  // ---------------------------------------------------------------- Decor Staging
  {
    slug: "features/decor-staging",
    kind: "feature",
    status: "live",
    navLabel: "Decor Staging",
    metaTitle: "Decor Staging: Add Rugs, Art and Plants with AI",
    metaDescription:
      "Keep your furniture and let Roomwright layer in rugs, art, lamps, plants and textiles in a style you choose. An easy way to finish a room that feels bare.",
    eyebrow: "Decor Staging",
    title: "Finish a furnished room with the right accessories",
    subtitle:
      "Your sofa, bed and table stay put. Decor Staging adds the layer that makes a room feel lived in: rugs, art, lamps, plants, cushions and books.",
    primaryCta: { label: "Style my room", href: studioHref({ tool: "decor-staging", space: "interior" }) },
    heroImage: "decor-shelf",
    highlights: ["Keeps the furniture you have", "Rugs, art, plants and lamps", "Accents in the style you pick"],
    steps: [
      {
        title: "Upload a furnished room",
        body: "Any room with its main pieces in place works: a flat-feeling living room, a bedroom with bare walls, a dining room without a rug.",
      },
      {
        title: "Pick room type and style",
        body: "The style steers the accents. Bohemian leans toward woven textures and greenery; art deco toward brass, glass and graphic prints.",
      },
      {
        title: "Shop with a plan",
        body: "Use the render as a visual list of what the room is missing, then look for real pieces with a similar feel.",
      },
    ],
    benefits: [
      {
        title: "Fix a room that feels unfinished",
        body: "Flat rooms are often missing the same few things: a rug of the right size, art at the right height and a second or third light source.",
        icon: "lamp",
      },
      {
        title: "Your furniture is respected",
        body: "The big pieces you already own stay in the picture, so the ideas work with what you have.",
        icon: "sofa",
      },
      {
        title: "Renter-friendly ideas",
        body: "Rugs, lamps, plants and framed art come with you when you move, which makes accessories the natural upgrade for a rental.",
        icon: "key",
      },
      {
        title: "Warmer photos of furnished homes",
        body: "A sparse listing can look inviting without swapping out the owner's furniture, as long as the edits are disclosed.",
        icon: "camera",
      },
      {
        title: "Layering you can judge",
        body: "See how textures, patterns and greenery stack up before you buy so much as a cushion.",
        icon: "layers",
      },
    ],
    sections: [
      {
        title: "What gets added and what stays",
        body: "Decor Staging works on the layer between furniture and architecture. It adds or updates the accessories listed below and is designed to leave large furniture, walls, windows and built-ins in place. Small existing items may shift as the scene is restyled, so if a particular heirloom or piece of art needs to remain exactly as it is, mention it in the optional note.",
        bullets: [
          "Rugs and runners",
          "Wall art, mirrors and shelf displays",
          "Table and floor lamps",
          "Plants, vases and branches",
          "Cushions, throws and bedding accents",
        ],
      },
      {
        title: "Turning the render into a real room",
        body: "The accessories in a render are generated, so you won't find them in a store under a product name. What you can take from the image is proportion and direction. Notice how large the rug is relative to the seating, how high the art hangs and where the lamps sit. Pick the two or three moves that change the room most and shop for those first. A rug that anchors the furniture often does more than a dozen small objects, and smaller pieces are easy to add once the big ones are in.",
        image: "bedroom-warm",
      },
    ],
    faqs: [
      {
        q: "Will it replace my sofa or bed?",
        a: "No. It's designed to keep your main furniture. To swap a single piece use Precision Edit, and for a full new look use Redesign.",
      },
      {
        q: "How is this different from Fill Spaces?",
        a: "Fill Spaces is for empty rooms and brings in furniture. Decor Staging is for rooms that are already furnished and just need finishing.",
      },
      {
        q: "Can I ask for particular accents?",
        a: "Yes, add a note such as “a large round jute rug and one oversized abstract canvas above the sofa.” The items are generated, so they'll resemble your description rather than match a product.",
      },
      {
        q: "Can I use it on listing photos?",
        a: "You can, as long as you're open about it. Label enhanced photos, keep the unedited versions available, and check your MLS rules, since many require disclosure of virtual staging.",
      },
      {
        q: "Does it work in a messy room?",
        a: "Tidy surfaces before you shoot. The AI styles what it sees, and piles of mail or laundry compete with any accessory it adds.",
      },
    ],
    related: ["features/fill-spaces", "living-room-design-ai", "room-design-ai", "features/precision-edit"],
  },

  // ---------------------------------------------------------------- Colors & Textures
  {
    slug: "features/colors-textures",
    kind: "feature",
    status: "live",
    navLabel: "Colors & Textures",
    metaTitle: "Colors and Textures: Try Finishes on Any Surface",
    metaDescription:
      "Preview limewash walls, fluted oak cabinets, zellige tile or a coffered ceiling in your own photo, and judge color and texture together before you commit.",
    eyebrow: "Colors & Textures",
    title: "Test colors and textures on the surfaces you have",
    subtitle:
      "Pick a surface, pick a finish, and see how plaster, wood grain, tile and stone change the mood of a room you already know well.",
    primaryCta: { label: "Try a finish", href: studioHref({ tool: "materials" }) },
    heroImage: "detail-tile",
    highlights: ["Walls, ceilings, cabinets and more", "Plaster, wood, tile and stone looks", "Previewed in your own room"],
    steps: [
      {
        title: "Upload the space",
        body: "A kitchen, bathroom, living room or facade photographed in natural light shows texture best.",
      },
      {
        title: "Choose a surface and a finish",
        body: "Pick walls, ceiling, cabinets, counters, flooring, siding or roof, then a finish such as grasscloth, tongue-and-groove wood or terrazzo.",
      },
      {
        title: "Layer one finish at a time",
        body: "Change one surface, then use that image as the starting point for the next, and watch the palette build.",
      },
    ],
    benefits: [
      {
        title: "Texture at room scale",
        body: "Limewash, grasscloth and zellige behave very differently across a whole wall than on a palm-sized sample.",
        icon: "brush",
      },
      {
        title: "Seen in your own light",
        body: "North light cools colors and western sun warms them, so a finish previewed in your own photo tells you more than a showroom display.",
        icon: "sun",
      },
      {
        title: "Coordinate across surfaces",
        body: "Try sage shaker cabinets with a soapstone counter and a herringbone oak floor before ordering a single sample.",
        icon: "palette",
      },
      {
        title: "Look up, too",
        body: "Exposed beams, tongue-and-groove boards or a coffered ceiling can change a room as much as a new floor.",
        icon: "layers",
      },
      {
        title: "The outside counts",
        body: "The same approach works on the exterior, from charred timber siding to a slate roof.",
        icon: "home",
      },
    ],
    sections: [
      {
        title: "Building a palette that holds together",
        body: "Rooms that feel calm usually have one hero texture and a supporting cast. Let a single surface carry the interest, such as zellige behind the range or a limewashed feature wall, and keep neighboring surfaces quieter. Repeat a tone at least twice so the eye finds a rhythm, for example walnut in the cabinets and again in a floating shelf. Mix sheens deliberately: matte walls beside a honed counter and a softly polished floor feel layered rather than busy. Previewing combinations in one image makes it easy to spot when two strong finishes are competing.",
        image: "kitchen-farmhouse",
      },
      {
        title: "From screen to sample",
        body: "A render is a fast way to narrow choices, not a color-accurate proof. Screens differ, AI-generated finishes are approximations, and real materials vary by batch and supplier. Use the preview to cut a long list down to two or three finalists, then bring home physical samples and look at them in morning and evening light, next to the things you're keeping. For natural materials like marble or reclaimed wood, ask to see the actual slab or lot, since veining and color can differ a lot from photos.",
      },
    ],
    faqs: [
      {
        q: "How is Colors & Textures different from Material Swap?",
        a: "Both open the same material tool in the studio. This page focuses on exploring finishes and building a palette; Material Swap focuses on picking replacement surfaces for a renovation.",
      },
      {
        q: "Can I request a finish that isn't in the list?",
        a: "Yes, describe it in the optional note, for example “dusty blue lacquered cabinets” or “white oak with a matte finish.” Results are an interpretation, so treat them as a guide.",
      },
      {
        q: "Can I change the fabric on my sofa or chairs?",
        a: "The material tool is built for surfaces like walls, floors and cabinets. For upholstery, try Precision Edit with an instruction such as “reupholster the armchair in rust bouclé.”",
      },
      {
        q: "Can the finish go on a single wall?",
        a: "Add a note like “only the wall behind the bed.” If the finish spreads further than you want, Precision Edit, which is built for targeted changes, is a good alternative.",
      },
      {
        q: "Will the render match the tile I end up buying?",
        a: "Not exactly. Use it to decide direction, then confirm color, size and finish with real samples from your supplier.",
      },
    ],
    related: ["features/material-swap", "features/paint-visualizer", "wall-ai", "cabinet-design-ai"],
  },

  // ---------------------------------------------------------------- AI Furniture Removal
  {
    slug: "features/furniture-removal",
    kind: "feature",
    status: "live",
    navLabel: "AI Furniture Removal",
    metaTitle: "AI Furniture Removal: Empty Any Room in a Photo",
    metaDescription:
      "Remove furniture, boxes and clutter from a room photo to see the empty space underneath. Plan a new layout or restage a listing from a clean start.",
    eyebrow: "AI Furniture Removal",
    title: "Clear out a room without lifting a thing",
    subtitle:
      "Upload a furnished or cluttered photo, and Roomwright removes furniture and belongings and fills in the floor and walls behind them, so you can see the room itself.",
    primaryCta: { label: "Empty a room", href: studioHref({ tool: "declutter" }) },
    heroImage: "empty-room-2",
    highlights: ["Furniture and clutter cleared", "Hidden floor and walls filled in", "Works on porches and yards too"],
    steps: [
      {
        title: "Upload the room as it is",
        body: "Moving boxes, an old sectional, a desk buried in paperwork: photograph it all, level and in good light.",
      },
      {
        title: "Clear it in one pass",
        body: "The tool takes out movable furniture and clutter, then fills in the floor, baseboards and walls it predicts were behind them.",
      },
      {
        title: "Take the next step",
        body: "Keep the empty view for planning, or download it and furnish it fresh with Fill Spaces or Redesign.",
      },
    ],
    benefits: [
      {
        title: "See the room, not the stuff",
        body: "Heavy furniture hides proportions, flooring and light. An emptied view makes a space easier to judge.",
        icon: "eye",
      },
      {
        title: "A clean base for restaging",
        body: "Replace a tenant's belongings or tired furniture with fresh virtual staging, clearly labeled as such.",
        icon: "sofa",
      },
      {
        title: "Plan your own move-in",
        body: "Picture your furniture in a home you're buying or renting, without the current occupant's things in the way.",
        icon: "move",
      },
      {
        title: "Yards and patios too",
        body: "Clear old patio sets, toys and bins from an outdoor photo before you redesign the space.",
        icon: "trees",
      },
      {
        title: "No retouching skills needed",
        body: "There's no cloning or selection work to learn. One run handles the whole frame.",
        icon: "eraser",
      },
    ],
    sections: [
      {
        title: "How the empty room is filled in",
        body: "When a sofa disappears, something has to appear where it stood. The AI predicts what is most likely there: usually the same flooring continuing, the baseboard running on and the wall carrying through. That prediction is plausible, not a record. It cannot know about a stain under the rug or a crack behind a bookcase, and it may reconstruct a tricky spot, such as a radiator or an outlet, imperfectly. Large pieces pushed into corners and against walls leave the most to guess, so give those areas a second look.",
        image: "living-dated",
      },
      {
        title: "Using decluttered photos in a listing",
        body: "Removing clutter can make a listing photo far easier to read, but it comes with responsibilities. Many MLSs require you to disclose digitally altered photos, and it's good practice even where it isn't required. Keep the original photo available, remove only belongings and furniture rather than fixtures or features, and never use removal to hide damage that buyers would want to know about. If you then restage the emptied room, label that image as virtually staged too.",
      },
      {
        title: "One item or the whole room",
        body: "Furniture removal is designed to clear a room broadly. When you only want one thing gone, such as the treadmill in the corner or a stack of boxes by the door, Precision Edit handles single removals with an instruction like “remove the treadmill.” Many people use both: clear the room first, then build a new arrangement with Fill Spaces or a couple of precise edits. Planning a move-in works the same way, since an emptied photo is a neutral base for testing where your own sofa, bed or desk could go.",
      },
    ],
    faqs: [
      {
        q: "Can I remove one piece and keep the rest?",
        a: "Yes, with Precision Edit. Type something like “remove the recliner by the window” and the rest of the room is left as it is.",
      },
      {
        q: "How does it know what's behind the furniture?",
        a: "Strictly speaking, it doesn't. The AI fills those areas with its best prediction of the floor, walls and trim, which is a convincing guess, not a view of the actual condition.",
      },
      {
        q: "Will it remove built-ins like cabinets or a fireplace?",
        a: "It's aimed at movable furniture and clutter. Built-ins, fixtures and architecture are meant to stay, which also keeps the image a fair picture of the home.",
      },
      {
        q: "Can it clear a patio or yard?",
        a: "Yes. It works on patios, porches, decks and yards, clearing furniture, toys, bins and other loose items.",
      },
      {
        q: "Can I furnish the room afterwards?",
        a: "Yes. Download the emptied image and use Fill Spaces to stage it, or Redesign for a full new look.",
      },
    ],
    related: ["features/fill-spaces", "virtual-staging-ai", "real-estate-ai", "features/precision-edit"],
  },

  // ---------------------------------------------------------------- Furniture Finder (coming soon)
  {
    slug: "features/furniture-finder",
    kind: "feature",
    status: "coming-soon",
    navLabel: "Furniture Finder",
    metaTitle: "Furniture Finder (Coming Soon): Shop the Look",
    metaDescription:
      "Furniture Finder is in development. It will suggest real products similar to the pieces in a room photo or render. Join early access to hear when it opens.",
    eyebrow: "Furniture Finder",
    title: "Coming soon: shop pieces like the ones in your render",
    subtitle:
      "We're building a tool that looks at the furniture and decor in an image and points you to similar products you can buy. It isn't available yet. Join early access and we'll tell you when it opens.",
    primaryCta: EARLY_ACCESS,
    heroImage: "furniture-sofa",
    highlights: ["In development, not live yet", "Planned: find similar products", "Join the early access list"],
    steps: [
      {
        title: "Join early access",
        body: "Add your email on this page and we'll let you know when a first version is ready to try.",
      },
      {
        title: "Design with the live tools",
        body: "Meanwhile, use Redesign, Fill Spaces or Decor Staging to settle on a look you'd actually like to shop for.",
      },
      {
        title: "Shop from an image (planned)",
        body: "Once it launches, the idea is simple: point to a piece in a photo or render and browse comparable products.",
      },
    ],
    benefits: [
      {
        title: "From idea to purchase",
        body: "A render answers “what could this look like.” Furniture Finder is meant to answer the next question: where to find something like it.",
        icon: "search",
      },
      {
        title: "Similar, not identical",
        body: "Furniture in a render is generated, so the goal is close alternatives, with you judging fit, quality and price.",
        icon: "eye",
      },
      {
        title: "You stay in charge",
        body: "We plan to show options, not make decisions. Dimensions, materials and return policies will still be yours to check with the seller.",
        icon: "shield",
      },
      {
        title: "Built for the studio",
        body: "It's being designed to work with the renders you already make in Roomwright.",
        icon: "layers",
      },
    ],
    sections: [
      {
        title: "What we're building, and what we're not",
        body: "Furniture Finder is planned as a visual search: pick a sofa, lamp or rug in an image and see real products with a similar shape, color and material. We're being careful about what it will promise. Because the furniture in AI renders doesn't exist as a real product, results will be lookalikes, not exact matches. Prices, stock and dimensions will come from sellers and can change, so you'll always confirm details on the seller's site before buying. We haven't set a launch date, and the feature set may change as we test it.",
        image: "furniture-chair",
      },
      {
        title: "Shopping from a render today",
        body: "You don't need to wait to put a render to work. A render is a mood board with your own walls around it. Describe each piece you like by its essentials, then search retailers with those words:",
        bullets: [
          "Silhouette: low and deep, curved arms, tapered legs",
          "Material and color: cognac leather, pale oak, brushed brass",
          "Size: measure your room and note the maximum width and depth",
          "Priority: buy the anchor pieces first, then the accents",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use Furniture Finder now?",
        a: "No. It's still in development and isn't part of the studio. We haven't set a launch date; join early access on this page to hear when it's ready.",
      },
      {
        q: "Will it find the exact item in my render?",
        a: "Usually there isn't one. AI-generated furniture is invented, so the goal is products that look similar, not identical copies.",
      },
      {
        q: "Where will the product suggestions come from?",
        a: "We're still working that out. Whatever sources we use, prices, stock and dimensions will belong to the sellers, so you'll confirm details with them before buying.",
      },
      {
        q: "Will it cost extra?",
        a: "Pricing for this tool hasn't been decided. Everything in the current public beta, including 20 renders a day, is free.",
      },
      {
        q: "What can I use in the meantime?",
        a: "Decor Staging and Fill Spaces help you settle on a look, and Precision Edit lets you preview a described piece in your own room before you shop.",
      },
    ],
    related: ["features/decor-staging", "features/precision-edit", "furniture-replacement-ai", "features/furniture-creator"],
  },

  // ---------------------------------------------------------------- Sky Colors
  {
    slug: "features/sky-colors",
    kind: "feature",
    status: "live",
    navLabel: "Sky Colors",
    metaTitle: "Sky Colors: Replace a Dull Sky and Relight Exteriors",
    metaDescription:
      "Swap a gray sky for golden hour, clear midday blue or twilight with the lights on. Roomwright relights the house and garden so the whole photo matches.",
    eyebrow: "Sky Colors",
    title: "Give your exterior photo a better sky",
    subtitle:
      "Shot the house on a flat, overcast day? Choose a new sky and time of day, and the light on the facade, windows and garden shifts to match.",
    primaryCta: { label: "Change the sky", href: studioHref({ tool: "sky", space: "exterior" }) },
    heroImage: "exterior-dusk",
    highlights: ["Six skies from midday to twilight", "Light on the house shifts to match", "Facades, yards, patios and pools"],
    steps: [
      {
        title: "Upload an outdoor photo",
        body: "A house front, backyard, patio or pool area with a visible stretch of sky.",
      },
      {
        title: "Pick a sky",
        body: "Clear blue midday for crisp detail, golden hour for warmth, blue hour dusk for calm, or twilight with the lights on for an evening glow.",
      },
      {
        title: "Compare and download",
        body: "Render a daytime and an evening version, look at them side by side and keep the one that suits the home.",
      },
    ],
    benefits: [
      {
        title: "Weather stops being a problem",
        body: "No more rescheduling a shoot for sunshine. A gray afternoon can become a clear one.",
        icon: "sun",
      },
      {
        title: "Relit, not just recolored",
        body: "The tool relights the scene along with the sky, aiming for light on walls, glass and planting that fits the new conditions.",
        icon: "lightbulb",
      },
      {
        title: "Twilight without a night shoot",
        body: "The twilight option aims for warm windows under a deep blue sky, the classic evening exterior, starting from a daytime photo.",
        icon: "clock",
      },
      {
        title: "A consistent set",
        body: "Photos taken on different days can share one sky, so a gallery of the same property looks like a single visit.",
        icon: "image",
      },
      {
        title: "Gardens and pools shine",
        body: "Water, lawns and planting look richer under a sky that suits the season and the mood.",
        icon: "trees",
      },
    ],
    sections: [
      {
        title: "Picking a sky that suits the house",
        body: "Some combinations just work. Crisp modern houses with lots of glass look striking at blue hour, when interior light balances the sky. Brick, stone and farmhouse exteriors warm up at golden hour. Soft overcast is underrated: it gives even, detailed light for shaded gardens and dark siding. Save the dramatic sunset for one hero image rather than a whole gallery. And think about direction. A sunset glowing behind a house that faces east is the kind of small impossibility attentive buyers notice.",
        image: "exterior-modern",
      },
      {
        title: "Keep it believable, and disclose it",
        body: "Sky replacement is a familiar edit in property photography, but it still changes what the camera saw. Follow your MLS and local rules on enhanced photos, and when in doubt, note that the sky has been digitally replaced. Don't use a new sky to imply views, surroundings or conditions that aren't there. Match the season, too: a bright summer sky over bare winter branches looks off, even if nobody can say exactly why.",
        image: "garden-pool",
      },
    ],
    faqs: [
      {
        q: "What about photos taken indoors?",
        a: "It's built for house exteriors and gardens. For interiors, a bright photo taken with the lights on and the blinds open is the best starting point for the other tools.",
      },
      {
        q: "Which skies can I choose?",
        a: "Clear blue midday, golden hour, soft overcast, dramatic sunset, blue hour dusk, and twilight with the lights on.",
      },
      {
        q: "Can it add rain, snow or fog?",
        a: "The presets cover sky and time of day rather than weather effects. For a seasonal scene, start from a photo taken in that season.",
      },
      {
        q: "Is a replaced sky acceptable in a listing?",
        a: "Often, but rules vary. Check your MLS guidelines, disclose edits where required, and make sure the image still fairly represents the property.",
      },
      {
        q: "Why does the edge around trees or wires look soft?",
        a: "Fine branches and overhead lines are the hardest edges to separate from the sky. A photo with a cleaner roofline, or a calmer sky option, usually blends more naturally.",
      },
    ],
    related: ["exterior-ai", "real-estate-ai", "landscaping-ai", "features/redesign"],
  },

  // ---------------------------------------------------------------- Material Swap
  {
    slug: "features/material-swap",
    kind: "feature",
    status: "live",
    navLabel: "Material Swap",
    metaTitle: "Material Swap: Preview New Floors, Counters and Siding",
    metaDescription:
      "See walnut floors, quartz counters, navy shaker cabinets or a standing-seam metal roof on your own home before you order samples or collect quotes.",
    eyebrow: "Material Swap",
    title: "Try the new floor before you tear out the old one",
    subtitle:
      "Choose a surface in your photo, pick a replacement, and see a renovation option in place, from herringbone oak and white quartz to red brick siding and clay tile roofs.",
    primaryCta: { label: "Swap a material", href: studioHref({ tool: "materials" }) },
    heroImage: "detail-flooring",
    highlights: ["Seven surfaces, inside and out", "Floors, counters, siding and roofs", "Compare options before quotes"],
    steps: [
      {
        title: "Upload the room or house",
        body: "Use a photo where the surface you plan to replace is clearly visible, not hidden under rugs or furniture.",
      },
      {
        title: "Pick a surface and material",
        body: "Choose flooring, walls, countertops, cabinets, ceiling, siding or roof, then an option like polished concrete or fiber cement lap siding.",
      },
      {
        title: "Render your finalists",
        body: "Generate each option you're weighing and bring the images to the showroom or your contractor meeting.",
      },
    ],
    benefits: [
      {
        title: "Less guesswork on big purchases",
        body: "Flooring, counters and roofing are expensive to live with if you choose wrong. Seeing them in place first lowers the risk.",
        icon: "hammer",
      },
      {
        title: "Exterior surfaces included",
        body: "Put red brick against painted stucco, or asphalt shingle against slate, on your actual house.",
        icon: "home",
      },
      {
        title: "See how surfaces interact",
        body: "Black granite reads differently above white cabinets than above walnut. One image shows the pairing.",
        icon: "layers",
      },
      {
        title: "Everyone sees the same thing",
        body: "A picture settles “which gray did you mean” faster than a sample board passed around the kitchen table.",
        icon: "users",
      },
      {
        title: "Room for custom requests",
        body: "Not on the list? Describe it in a note, such as wide-plank white oak with a matte finish.",
        icon: "pencil",
      },
    ],
    sections: [
      {
        title: "Kitchens and baths: the high-stakes swaps",
        body: "Counters and cabinets define a kitchen, and they're rarely cheap to change twice. Material Swap lets you compare calacatta marble with white quartz, or natural walnut cabinets with sage green shaker, in the room you'll actually cook in. Keep in mind that a render shows appearance, not performance. Marble can etch and stain, butcher block needs regular oiling, and soapstone darkens and develops a patina over time. Those tradeoffs matter as much as looks, so pair the preview with a conversation with your fabricator or supplier.",
        image: "detail-countertop",
      },
      {
        title: "Siding and roofing",
        body: "Exterior materials shape curb appeal more than almost anything else. Try white board and batten, charred timber, natural stone or fiber cement lap siding on your facade, and compare standing-seam metal, clay tile, slate and asphalt shingle overhead. Before you fall for one, check what's allowed and practical. HOAs and historic districts often restrict exterior materials, and heavy roofing such as clay tile or slate may need a structural check before installation. A licensed contractor or engineer should confirm what your house can carry.",
        image: "exterior-brick",
      },
      {
        title: "From render to quote",
        body: "The render is a decision tool, not a takeoff. It won't give you square footage, quantities or pricing, and the pattern and scale of a surface in the image are approximations. Once you have a favorite, take it along when you collect quotes, ask to see full-size samples, and let the installer measure. Keeping the before photo and each option together in one folder makes those conversations quicker for everyone involved.",
      },
    ],
    faqs: [
      {
        q: "Which surfaces can I change?",
        a: "Flooring, walls, countertops, cabinets and ceilings inside, plus siding and roofing outside.",
      },
      {
        q: "Can I swap more than one surface?",
        a: "Work on one surface at a time for the cleanest result, then use the new image as the starting photo for the next swap.",
      },
      {
        q: "Can I upload a photo of my own tile or countertop sample?",
        a: "Not at the moment. Choose the closest preset and describe the rest in a note, for example “gray veining, honed finish.”",
      },
      {
        q: "How accurate are the colors and patterns?",
        a: "Close enough to compare options, not close enough to order from. Confirm color, veining and size with physical samples.",
      },
      {
        q: "Does it estimate cost or quantities?",
        a: "No. For measurements and pricing, a contractor or supplier needs to measure the space.",
      },
    ],
    related: ["flooring-ai", "countertop-ai", "features/colors-textures", "for/contractors"],
  },

  // ---------------------------------------------------------------- Paint Visualizer
  {
    slug: "features/paint-visualizer",
    kind: "feature",
    status: "live",
    navLabel: "Paint Visualizer",
    metaTitle: "Paint Visualizer: Preview Wall and Exterior Colors",
    metaDescription:
      "Preview sage, navy, greige or warm white on your own walls or house exterior. Upload a photo, pick a color and see it at full scale before buying samples.",
    eyebrow: "Paint Visualizer",
    title: "See a paint color on your walls, not on a chip",
    subtitle:
      "A two-inch swatch rarely tells you how a whole wall will feel. Upload a room or facade, choose a color, and preview it across the entire surface in your own space.",
    primaryCta: { label: "Try a paint color", href: studioHref({ tool: "paint" }) },
    heroImage: "detail-paint",
    highlights: ["Interior walls and house exteriors", "Ten curated starting colors", "Narrow it down before sampling"],
    steps: [
      {
        title: "Upload a room or facade",
        body: "Daylight photos without a strong color cast give the most honest preview.",
      },
      {
        title: "Choose a color",
        body: "Start from the palette, from warm white and greige to evergreen and terracotta. Add a note to target a specific wall or ask for a lighter shade.",
      },
      {
        title: "Shortlist, then sample",
        body: "Narrow it to two or three colors on screen, then paint real samples on the wall before buying gallons.",
      },
    ],
    benefits: [
      {
        title: "Whole-wall scale",
        body: "Color intensifies across a large surface. Seeing it at full size avoids the classic surprise of a shade that looked subtle on the chip.",
        icon: "droplet",
      },
      {
        title: "Curb appeal previews",
        body: "Try charcoal, evergreen or navy on the body of the house and see how it sits with the roof and landscaping.",
        icon: "home",
      },
      {
        title: "Fewer sample pots",
        body: "Rule out the colors that clearly don't work before you spend on samples and brushes.",
        icon: "eye",
      },
      {
        title: "Bold choices, less risk",
        body: "Navy in a small office or clay pink in a nursery can feel like a leap. A preview makes it an informed one.",
        icon: "palette",
      },
      {
        title: "Easier agreement at home",
        body: "Show everyone the same image instead of trying to describe what “a warm white” means.",
        icon: "users",
      },
    ],
    sections: [
      {
        title: "Why paint looks different on the wall",
        body: "Paint color shifts with everything around it. North light cools and grays a shade, while late western sun warms it. Warm and cool bulbs change it again after dark. Large surfaces make a color feel stronger than it did on the chip, and a green lawn or a red brick floor can bounce its tint onto nearby walls. Previewing a color in a photo of your actual room accounts for some of that context. Your screen is not paint, though, so the final decision belongs to a physical sample viewed at different times of day.",
        image: "office-home",
      },
      {
        title: "A simple way to choose",
        body: "Choosing paint gets easier with a short routine, and the visualizer handles the fast, inexpensive part of it:",
        bullets: [
          "Decide the mood first: calm, cozy, crisp or dramatic.",
          "Preview three candidates in the visualizer and drop the weakest.",
          "Check the survivors against things you aren't changing, like floors, counters and brick.",
          "Paint large samples on two walls and look at them morning and evening for a few days.",
          "Choose the sheen with your painter, since it affects both the look and how easily walls clean.",
        ],
      },
      {
        title: "Painting the outside",
        body: "Exterior color is a bigger commitment, and more people will see it. Before you choose, check HOA rules and any historic district guidelines. Plan around fixed elements such as the roof, stone and brick, which are expensive to change. Dark body colors absorb more heat, which can matter for some siding materials, so ask your paint supplier or siding manufacturer. And if you're thinking about painting brick, preview it first but research carefully, because paint on masonry is hard to undo.",
        image: "exterior-farmhouse",
      },
    ],
    faqs: [
      {
        q: "Can I match a specific paint brand's color?",
        a: "The studio renders from its own palette and your description, not from brand color codes. Use the preview to pick a direction, then confirm with a physical sample of the exact paint.",
      },
      {
        q: "Can I paint just one accent wall?",
        a: "Add a note that names the wall, such as “only the wall behind the sofa.” If the color spreads, Precision Edit gives you a more targeted option.",
      },
      {
        q: "Will it show matte versus glossy?",
        a: "Sheen is subtle in a photo. You can mention a finish in your note, but judge sheen with a real sample on the wall.",
      },
      {
        q: "Can I preview trim or a front door color?",
        a: "You can describe trim or door colors in the note alongside the main color. For a single element like the front door, Precision Edit is designed for exactly that kind of change.",
      },
      {
        q: "Why doesn't the preview match the chip exactly?",
        a: "Photos carry their own lighting and white balance, and screens vary. Treat the preview as a comparison tool and the sample as the final word.",
      },
    ],
    related: ["wall-ai", "features/colors-textures", "exterior-ai", "features/material-swap"],
  },

  // ---------------------------------------------------------------- Room Composer
  {
    slug: "features/room-composer",
    kind: "feature",
    status: "live",
    navLabel: "Room Composer",
    metaTitle: "Room Composer: Place Furniture by Describing It",
    metaDescription:
      "Describe where a piece should go, like a reading chair by the window or a bench under the stairs, and Roomwright adds it to your room photo in that spot.",
    eyebrow: "Room Composer",
    title: "Arrange a room by saying where things go",
    subtitle:
      "Write where you want a piece, such as a reading chair by the window or a console behind the sofa, and Roomwright works it into your photo.",
    primaryCta: { label: "Place a piece", href: studioHref({ tool: "edit", space: "interior" }) },
    heroImage: "living-modern",
    highlights: ["Placement by plain description", "One piece or a small grouping", "The rest of the room stays"],
    steps: [
      {
        title: "Upload the room",
        body: "Use a photo where the spot you want to fill is visible: a bare corner, an empty wall or the floor in front of a window.",
      },
      {
        title: "Say what and where",
        body: "Name the piece and anchor it to something already there: “a tall fiddle-leaf fig in the corner left of the bookcase.”",
      },
      {
        title: "Adjust with a follow-up",
        body: "If it lands wrong, rephrase, or run a follow-up on the new image, like “make the rug larger.”",
      },
    ],
    benefits: [
      {
        title: "Anchor words do the work",
        body: "Beside, under, in front of and centered on tell the AI where you mean far better than “somewhere nice.”",
        icon: "move",
      },
      {
        title: "Solve awkward spots",
        body: "Test ideas for the empty corner, the dead space under the stairs or the wall between two windows.",
        icon: "lightbulb",
      },
      {
        title: "Try arrangements, not just items",
        body: "Compare a desk facing the window with one against the side wall before you drag anything across the floor.",
        icon: "grid",
      },
      {
        title: "Build a room piece by piece",
        body: "Add one item at a time and keep what works, instead of regenerating the whole design.",
        icon: "layers",
      },
      {
        title: "Balconies and patios too",
        body: "Place a bistro set on the balcony, a fire pit on the patio or planters by the front steps.",
        icon: "trees",
      },
    ],
    sections: [
      {
        title: "Room Composer and Precision Edit",
        body: "Room Composer runs on the same instruction-based editing as Precision Edit; the difference is what you ask for. Precision Edit is about changing or removing what's already in the photo. Room Composer is about adding new pieces and deciding where they go, which is why this guide focuses on placement. In the studio, both start the same way: upload a photo and type a sentence. If you want to furnish an entire empty room rather than place a few pieces, Fill Spaces does that in one step.",
      },
      {
        title: "Placement phrases that work",
        body: "Good placement instructions name a piece, give it a size and tie it to a landmark. Keep each instruction to one or two pieces. Some starting points:",
        bullets: [
          "“a round side table to the right of the armchair”",
          "“a narrow console behind the sofa with a lamp at each end”",
          "“a cushioned window seat under the bay window”",
          "“a large jute rug under the dining table, extending past the chairs”",
          "“a slim runner down the length of the hallway”",
        ],
        image: "furniture-chair",
      },
      {
        title: "Scale is an estimate",
        body: "The AI judges size from the photo, which works well for a sense of proportion but isn't a measurement. A chair that looks right in the render could be a few inches too deep in real life. Before buying, measure the spot, check the product's dimensions and mark its footprint on the floor with painter's tape. Leave room to walk around it and to open doors and drawers. A few minutes with a tape measure turns a nice image into a plan you can rely on.",
      },
    ],
    faqs: [
      {
        q: "Can I upload a photo of a specific chair to place in my room?",
        a: "Not currently. Describe the piece instead, including its shape, material and color, and the AI will generate something similar in the spot you name.",
      },
      {
        q: "How many pieces should one instruction include?",
        a: "One or two related pieces, like a sofa and a coffee table, is a sensible limit. For a whole empty room, Fill Spaces is the better fit.",
      },
      {
        q: "Can I move something that's already in the room?",
        a: "You can ask, but moves are harder than additions. If an instruction struggles, remove the piece in one edit and add a new one in the right spot with the next.",
      },
      {
        q: "Will the piece be the right size?",
        a: "Size is estimated from the photo. Treat it as a guide to proportion and confirm real dimensions before you buy.",
      },
      {
        q: "Can I place things on a patio or balcony?",
        a: "Yes. Place outdoor furniture, planters, a fire pit or a pergola in exterior and garden photos, one instruction at a time.",
      },
    ],
    related: ["features/precision-edit", "features/fill-spaces", "living-room-design-ai", "room-design-ai"],
  },

  // ---------------------------------------------------------------- Design Critique (coming soon)
  {
    slug: "features/design-critique",
    kind: "feature",
    status: "coming-soon",
    navLabel: "Design Critique",
    metaTitle: "Design Critique (Coming Soon): AI Room Feedback",
    metaDescription:
      "Design Critique is on our roadmap. It will review a room photo and give specific feedback on layout, lighting, color and scale. Join early access for news.",
    eyebrow: "Design Critique",
    title: "Coming soon: a second opinion on your room",
    subtitle:
      "Design Critique will look at a photo of your room and explain what's working and what isn't, from furniture scale to lighting. It's not available yet; join early access to be notified at launch.",
    primaryCta: EARLY_ACCESS,
    heroImage: "living-boho",
    highlights: ["On the roadmap, not available yet", "Planned: layout, light and color notes", "Early access sign-up is open"],
    steps: [
      {
        title: "Share a photo (planned)",
        body: "You'll upload a room as it looks today, or a render you're weighing up.",
      },
      {
        title: "Read a structured review",
        body: "The aim is plain-language notes on focal point, layout, lighting, color balance and scale, not a vague score.",
      },
      {
        title: "Fix it with live tools",
        body: "Suggestions are meant to connect to tools you can use today, like Precision Edit for a single swap.",
      },
    ],
    benefits: [
      {
        title: "Specific, not generic",
        body: "We're aiming for notes like “the rug is too small to anchor the seating” instead of “add warmth.”",
        icon: "message",
      },
      {
        title: "Function as well as looks",
        body: "Blocked walkways, glare on a screen and chairs that face away from conversation matter as much as color.",
        icon: "ruler",
      },
      {
        title: "A prompt, not a verdict",
        body: "Taste is personal. The critique is meant to sharpen your judgment, not overrule it.",
        icon: "heart",
      },
      {
        title: "Connected to the studio",
        body: "Every note should be something you can test visually with the tools that are already live.",
        icon: "wand",
      },
    ],
    sections: [
      {
        title: "Why we're building it",
        body: "Most people can tell when a room feels off but can't say why. Is the sofa too big, the light too flat, the art hung too high? A good designer answers those questions quickly, and nothing replaces that expertise for a full project. Design Critique is meant for the moments in between: a quick, structured second opinion on a room you've arranged yourself or a render you're considering. We'll share more about how it works as it gets closer to release, and the plan may change as we test it.",
      },
      {
        title: "A do-it-yourself critique for now",
        body: "Until it launches, you can run a quick review yourself with a few questions, then test fixes with the live tools:",
        bullets: [
          "Is there one clear focal point when you walk in?",
          "Is the rug large enough for the front legs of the seating to rest on it?",
          "Are there at least three light sources at different heights?",
          "Can you walk through without turning sideways?",
          "Do the main colors repeat at least twice around the room?",
        ],
        image: "living-coastal",
      },
    ],
    faqs: [
      {
        q: "Is Design Critique part of the studio yet?",
        a: "No. It hasn't been released, so there's nothing to use today. Leave your email in the early access form and you'll get a note when it launches.",
      },
      {
        q: "Will it replace an interior designer?",
        a: "No. It's intended as a quick second opinion. For a full project, a designer brings judgment, sourcing and site knowledge that a tool can't.",
      },
      {
        q: "What will it comment on?",
        a: "Our current plan covers layout, focal points, lighting, color balance and scale. The details may change before launch.",
      },
      {
        q: "What can I try while I wait?",
        a: "Run Redesign on its Subtle setting for a gentle refresh, use Decor Staging to finish a sparse room, or test a single fix with Precision Edit.",
      },
    ],
    related: ["features/redesign", "features/precision-edit", "features/decor-staging", "for/interior-designers"],
  },

  // ---------------------------------------------------------------- Design Advisor (coming soon)
  {
    slug: "features/design-advisor",
    kind: "feature",
    status: "coming-soon",
    navLabel: "Design Advisor",
    metaTitle: "Design Advisor (Coming Soon): Personal Design Ideas",
    metaDescription:
      "Design Advisor is in development: an AI helper that aims to suggest styles, palettes and next steps for your space and taste. Join early access for updates.",
    eyebrow: "Design Advisor",
    title: "Coming soon: design suggestions shaped around you",
    subtitle:
      "Design Advisor is being built to ask about your space, habits and taste, then suggest directions you can try in the studio. It isn't live yet; join early access to follow along.",
    primaryCta: EARLY_ACCESS,
    heroImage: "bedroom-calm",
    highlights: ["Still in development", "Planned: ideas tailored to you", "Sign up to hear first"],
    steps: [
      {
        title: "Describe your situation (planned)",
        body: "Who uses the room, what bothers you about it and what you love elsewhere in your home.",
      },
      {
        title: "Get a few clear directions",
        body: "Expect a handful of distinct options with reasons, such as a calmer palette for a bedroom that doubles as an office.",
      },
      {
        title: "Render them yourself",
        body: "Each suggestion is meant to be something you can try right away with the live tools.",
      },
    ],
    benefits: [
      {
        title: "Starts with how you live",
        body: "Kids, pets, working from home and a rental lease all change what makes sense. The advisor is meant to ask first.",
        icon: "users",
      },
      {
        title: "Explains the why",
        body: "Suggestions will come with reasoning, so you learn what makes a room work instead of just copying a look.",
        icon: "lightbulb",
      },
      {
        title: "Constraints respected",
        body: "Budget limits and things you can't change, like a dark hallway or a fixed kitchen layout, are part of the brief, not afterthoughts.",
        icon: "shield",
      },
      {
        title: "From advice to image",
        body: "Recommendations are planned to connect to the studio's tools, so an idea can become a picture without starting over.",
        icon: "wand",
      },
    ],
    sections: [
      {
        title: "What we want it to do",
        body: "Choosing a direction is often harder than carrying one out. Design Advisor is meant to act like a thoughtful first conversation: it asks about the room, the people in it and what you've liked before, then narrows an overwhelming field of styles and palettes down to a few that fit. Its suggestions will be ideas to explore, not professional advice. For anything structural, electrical or plumbing-related, you'll still want a licensed professional, and the product will say so too.",
        image: "bedroom-warm",
      },
      {
        title: "Personal suggestions today, the manual way",
        body: "You can already get tailored results from the live tools with a little structure. It takes more effort than a conversation, but it works now:",
        bullets: [
          "Collect three images you love and look for what they share.",
          "Run Design Transfer with the strongest one on a photo of your room.",
          "Use Text to Design to test the shared ingredients in a room you describe.",
          "Keep notes on the details you keep choosing; that's your style.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I try Design Advisor yet?",
        a: "Not yet. It's still being built and can't be used in the studio. The early access list on this page is the best way to find out when that changes.",
      },
      {
        q: "How is it different from Design Critique?",
        a: "Critique is planned to review a room as it is. Advisor is planned to help you decide what to do next, based on your goals. Neither is live yet.",
      },
      {
        q: "Will it recommend products to buy?",
        a: "That isn't settled. Shopping help is being explored separately in Furniture Finder, which is also in development.",
      },
      {
        q: "What can I use right now?",
        a: "Design Transfer, Text to Design and Redesign are all live and free during the beta, and they're a good way to explore directions today.",
      },
    ],
    related: ["features/design-transfer", "features/text-to-design", "interior-design-ai", "features/redesign"],
  },

  // ---------------------------------------------------------------- Smart Home AI (coming soon)
  {
    slug: "features/smart-home",
    kind: "feature",
    status: "coming-soon",
    navLabel: "Smart Home AI",
    metaTitle: "Smart Home AI (Coming Soon): Plan Lighting and Devices",
    metaDescription:
      "Smart Home AI is in development. It's planned to help you picture where smart lighting, sensors and devices could go in a room photo. Join early access.",
    eyebrow: "Smart Home AI",
    title: "Coming soon: plan a smarter home from a room photo",
    subtitle:
      "We're working on a tool that suggests where smart lighting, switches, sensors and speakers could fit in your space and shows how they might look. It's not in the studio yet.",
    primaryCta: EARLY_ACCESS,
    heroImage: "smart-home",
    highlights: ["Planned feature, not yet live", "Lighting and device placement ideas", "Get launch news by email"],
    steps: [
      {
        title: "Upload a room (planned)",
        body: "Start from a photo of the space you'd like to upgrade, whether that's a living room, a hallway or the front entry.",
      },
      {
        title: "Review suggested placements",
        body: "The goal is ideas such as dimmable lighting zones, a motion sensor in the hallway or a video doorbell at the door, shown where they'd go.",
      },
      {
        title: "Hand the plan to a pro",
        body: "Wiring, hubs and compatibility still need a licensed electrician or installer; the tool is meant to start that conversation.",
      },
    ],
    benefits: [
      {
        title: "Lighting first",
        body: "Layered, dimmable light changes how a room feels more than any gadget, so that's where we want the tool to start.",
        icon: "lamp",
      },
      {
        title: "Tech that stays discreet",
        body: "Placement ideas that respect your design, so sensors and speakers don't clutter a finished room.",
        icon: "eye",
      },
      {
        title: "Comfort and security together",
        body: "Entry lighting, door sensors and thermostats planned as one system instead of one gadget at a time.",
        icon: "lock",
      },
      {
        title: "A clearer brief for installers",
        body: "A picture of what you want, and where, makes quotes and site visits more productive.",
        icon: "cpu",
      },
    ],
    sections: [
      {
        title: "Why plan smart devices visually",
        body: "Many smart home regrets come down to placement: a switch behind a door, a sensor that covers the hallway but not the stairs, a speaker that dominates a bookshelf. Seeing options in your own room before anyone cuts into drywall helps avoid them. Timing matters too. If you're renovating, the easiest moment to run wiring for lighting and devices is while walls and ceilings are open, so planning early can save a second round of work. Smart Home AI is meant to make that planning visual and approachable.",
      },
      {
        title: "What you can do with live tools today",
        body: "You can already preview the look of new fixtures with Precision Edit. Try instructions like “replace the ceiling fan with a flush-mount light,” “add slim recessed lights across the ceiling” or “add a wall sconce on each side of the bed.” Outside, the Sky Colors twilight option shows a house with its lights on, a quick way to judge a facade after dark. These are visualizations only. Electrical work must follow local code and often requires a permit, so involve a licensed electrician before anything is installed.",
        image: "living-japandi",
      },
    ],
    faqs: [
      {
        q: "When can I try Smart Home AI?",
        a: "There's no date yet. It's a planned feature and isn't in the studio today. Join early access and we'll send launch news by email.",
      },
      {
        q: "Will it work with my devices or ecosystem?",
        a: "We haven't finalized that. The first goal is planning and visualization, not controlling devices, so compatibility checks will still be up to you and your installer.",
      },
      {
        q: "Can it replace an electrician?",
        a: "No. Electrical work must meet local codes and often needs permits. The tool is meant to help you plan and communicate, not to design circuits.",
      },
      {
        q: "Can I preview light fixtures today?",
        a: "Yes. Use Precision Edit with an instruction like “add a linear pendant over the island” to see the look in your own photo.",
      },
    ],
    related: ["features/precision-edit", "features/sky-colors", "for/contractors", "partial-remodel-ai"],
  },

  // ---------------------------------------------------------------- Text to Design
  {
    slug: "features/text-to-design",
    kind: "feature",
    status: "live",
    navLabel: "Text to Design",
    metaTitle: "Text to Design: Generate a Room from a Description",
    metaDescription:
      "No photo needed. Describe a room, facade or garden in your own words, pick a style, and Roomwright generates a photoreal design concept from scratch.",
    eyebrow: "Text to Design",
    title: "Describe a space and watch it take shape",
    subtitle:
      "Start with words instead of a photo. Write what you imagine, from a sunlit reading nook to a desert-modern front yard, and get a photoreal concept to react to.",
    primaryCta: { label: "Describe a space", href: studioHref({ tool: "text-to-design" }) },
    heroImage: "dining-modern",
    highlights: ["No photo required", "Any room type, inside or out", "Room and style presets to steer it"],
    steps: [
      {
        title: "Frame the brief",
        body: "Choose interior, exterior or garden, a room type such as attic or rooftop terrace, and a style to anchor the look.",
      },
      {
        title: "Write your description",
        body: "Cover layout, materials, light and mood: “a narrow galley kitchen with sage cabinets, open oak shelves and a window over the sink.”",
      },
      {
        title: "Iterate on the words",
        body: "Change one phrase at a time and regenerate, so you can see what each detail contributes.",
      },
    ],
    benefits: [
      {
        title: "Ideas before there's a room",
        body: "Planning a build, an addition or a move? Explore designs before there's anything to photograph.",
        icon: "lightbulb",
      },
      {
        title: "A picture instead of a paragraph",
        body: "Hand a designer, builder or partner an image of what you mean, not a long description.",
        icon: "message",
      },
      {
        title: "Every space type",
        body: "From a nursery or walk-in closet to a cabin exterior or courtyard garden, the presets cover a wide range.",
        icon: "grid",
      },
      {
        title: "Discover your taste",
        body: "A few quick variations reveal which details you keep asking for, which is the start of a clear brief.",
        icon: "heart",
      },
      {
        title: "No drawing skills needed",
        body: "If you can describe it, you can visualize it. Sketching is optional.",
        icon: "pencil",
      },
    ],
    sections: [
      {
        title: "Anatomy of a strong description",
        body: "Specific nouns beat stacked adjectives. A description that names the size, light, materials and a couple of statement pieces gives the AI far more to build with than “beautiful, cozy, elegant.” Aim for two to four sentences covering:",
        bullets: [
          "The space and its size: “a small, square guest bedroom”",
          "The light: “one north-facing window, soft even daylight”",
          "Two or three key materials: “limewashed walls, pale oak floor, linen bedding”",
          "One or two statement pieces: “a caned headboard and a vintage kilim rug”",
        ],
      },
      {
        title: "When to use words instead of a photo",
        body: "Text to Design invents a space, so it won't match your actual floor plan, window positions or ceiling height. That makes it ideal for new builds, additions, a first apartment you haven't found yet, or a café concept you're pitching. When you want ideas for a room that already exists, start from a photo with Redesign or Design Transfer so the result respects your walls and windows. Either way, the output is a concept image for exploring ideas, not a plan to build from.",
        image: "garden-patio",
      },
    ],
    faqs: [
      {
        q: "Do I need a photo to use Text to Design?",
        a: "No. It creates a space from your description alone. If you do have a photo of the room, Redesign will keep its real layout.",
      },
      {
        q: "Will the result match my real floor plan?",
        a: "No. It invents a layout that fits your description. Use a photo-based tool when the design needs to fit an existing room.",
      },
      {
        q: "How long should my description be?",
        a: "Two to four sentences is plenty. Clear details about materials, light and a few key pieces matter more than length.",
      },
      {
        q: "Can I describe a backyard or house front instead of a room?",
        a: "Yes. Switch the space to exterior to describe a cabin, townhouse or porch, or to garden for a courtyard, side yard or pool area, and write the scene the way you would a room.",
      },
      {
        q: "Does it cover cafés, shops or offices?",
        a: "A few are included. Café, retail store and office are among the interior room types, which is handy for early concept work.",
      },
    ],
    related: ["features/sketch-to-render", "features/furniture-creator", "for/architects", "interior-design-ai"],
  },

  // ---------------------------------------------------------------- Furniture Creator
  {
    slug: "features/furniture-creator",
    kind: "feature",
    status: "live",
    navLabel: "Furniture Creator",
    metaTitle: "Furniture Creator: Design One-Off Pieces with AI",
    metaDescription:
      "Describe a sideboard, bed frame or lounge chair that doesn't exist yet, and Roomwright renders it in the style you choose, ready to share with a maker.",
    eyebrow: "Furniture Creator",
    title: "Design the piece of furniture you can't find",
    subtitle:
      "Describe it, from a fluted walnut sideboard to a bench with deep drawers, pick a style, and get an image you can refine or take to a furniture maker.",
    primaryCta: { label: "Create a piece", href: studioHref({ tool: "furniture-creator", space: "interior" }) },
    heroImage: "furniture-chair",
    highlights: ["Text in, custom piece out", "Choose the style it follows", "A visual brief for a maker"],
    steps: [
      {
        title: "Describe the piece",
        body: "Include the type, rough size, materials and details: “a low walnut media console, about seven feet long, with cane doors and tapered legs.”",
      },
      {
        title: "Choose a style",
        body: "Pick mid-century modern, Bauhaus, French country or another style to guide proportions and detailing.",
      },
      {
        title: "Refine the brief",
        body: "Adjust one detail at a time, such as the legs, hardware or finish, until the image matches what you picture.",
      },
    ],
    benefits: [
      {
        title: "Fill the gap in the catalog",
        body: "Odd alcoves, unusual heights and specific storage needs are exactly where off-the-shelf furniture falls short.",
        icon: "ruler",
      },
      {
        title: "Talk to makers in pictures",
        body: "A carpenter or upholsterer can respond faster to an image plus your measurements than to a description alone.",
        icon: "hammer",
      },
      {
        title: "Explore materials freely",
        body: "Try rattan, bouclé, burl veneer or powder-coated steel without ordering a single sample.",
        icon: "palette",
      },
      {
        title: "Concepts for client work",
        body: "Designers can show a custom piece in an early proposal before anyone commits to shop drawings.",
        icon: "briefcase",
      },
    ],
    sections: [
      {
        title: "What to include in your description",
        body: "The more your description reads like a brief, the more useful the image. Cover these points and leave the rest to the style you chose. Name anything you want to avoid, too, such as visible hardware.",
        bullets: [
          "What the piece is and what it's for: “a sideboard for a record collection”",
          "Approximate size: “about 30 inches high and six feet wide”",
          "Primary material and finish: “rift-sawn white oak, matte oil”",
          "Distinctive details: “reeded doors, brass pulls, recessed plinth base”",
        ],
      },
      {
        title: "From image to real furniture",
        body: "The image is a concept, not a set of plans. It has no dimensions, joinery details or engineering behind it, and some generated details may be impractical to build exactly as shown. A good maker will translate the idea into drawings, suggest construction that suits the material, and confirm comfortable heights and depths. Anything that carries weight or people, such as a loft bed, floating shelves or a wall-mounted desk, should be designed and installed by someone qualified to do it safely.",
        image: "dining-modern",
      },
      {
        title: "Seeing it in your own room",
        body: "Furniture Creator produces the piece on its own; it doesn't place it into a photo of your home. To preview something similar in your space, open Precision Edit or Room Composer with a photo of the room and describe the piece in the same words you used here, for example “add a low walnut sideboard with reeded doors under the window.” The result won't be identical to your creation, but it shows how the size, color and style sit with everything around it.",
      },
    ],
    faqs: [
      {
        q: "Can I place my created piece into a photo of my room?",
        a: "Not directly. Describe the same piece in Precision Edit or Room Composer to see something similar in your space.",
      },
      {
        q: "Will I get measurements or construction drawings?",
        a: "No. The output is an image. A furniture maker or designer will need to turn it into measured drawings.",
      },
      {
        q: "How do I get variations of the same idea?",
        a: "Generate again with the same description, or change one detail at a time, such as leg style or finish, to compare versions.",
      },
      {
        q: "Can a maker build exactly what I design?",
        a: "Often something very close, but not always exactly. Some AI-generated details look good but aren't practical to build, and a maker will adapt them.",
      },
      {
        q: "Can I design built-ins?",
        a: "You can describe built-ins like a window seat or a wall of bookshelves. To see one in your actual room, use Precision Edit on a photo of the space.",
      },
    ],
    related: ["features/room-composer", "features/text-to-design", "for/interior-designers", "furniture-replacement-ai"],
  },

  // ---------------------------------------------------------------- Design Transfer
  {
    slug: "features/design-transfer",
    kind: "feature",
    status: "live",
    navLabel: "Design Transfer",
    metaTitle: "Design Transfer: Apply an Inspiration Photo's Style",
    metaDescription:
      "Upload your room and an inspiration photo, and Roomwright carries the palette, materials and mood into your space while keeping your walls and windows.",
    eyebrow: "Design Transfer",
    title: "Bring the look of a photo you love into your room",
    subtitle:
      "Found a hotel lobby, magazine spread or friend's kitchen you keep thinking about? Pair it with a photo of your space and see that feeling translated to your own layout.",
    primaryCta: { label: "Transfer a style", href: studioHref({ tool: "style-transfer" }) },
    heroImage: "living-coastal",
    highlights: ["Your photo plus one inspiration image", "Choose how strongly it borrows", "Works on facades and gardens too"],
    steps: [
      {
        title: "Upload your space",
        body: "A clear, well-lit photo of the room, facade or garden you want to change.",
      },
      {
        title: "Add the inspiration",
        body: "Any image with a look you like: a room, a restaurant, a boutique hotel, even a garden you visited.",
      },
      {
        title: "Set the strength and render",
        body: "At Subtle your furniture stays recognizable and only the mood shifts. At Bold the inspiration takes over everything except the architecture.",
      },
    ],
    benefits: [
      {
        title: "No style vocabulary needed",
        body: "You don't need to know whether it's called Japandi or wabi-sabi. The photo explains it for you.",
        icon: "image",
      },
      {
        title: "Your layout, their look",
        body: "Your walls, windows and floor plan stay; the palette, materials and furnishings follow the inspiration.",
        icon: "home",
      },
      {
        title: "Inspiration from anywhere",
        body: "Screenshots, magazine pages, travel photos and showroom snapshots all work as a starting point.",
        icon: "camera",
      },
      {
        title: "A connected home",
        body: "Apply one inspiration to the living room, dining room and hallway so the whole house feels related.",
        icon: "layers",
      },
      {
        title: "Outside and in the garden",
        body: "Borrow a Mediterranean courtyard for your patio or a Scandinavian cabin's dark cladding for your facade.",
        icon: "trees",
      },
    ],
    sections: [
      {
        title: "What carries over, and what stays yours",
        body: "Design Transfer reads the look of the inspiration: its color palette, materials, furniture style, textiles and lighting mood. It doesn't copy the architecture. If the inspiration is a loft with tall steel windows and your room has a standard sash window, expect the loft's brick tones and industrial furniture to come across, not a new window wall. That's deliberate. The result should feel like your room in someone else's style, which is also what makes it useful for planning real changes.",
        image: "kitchen-dark",
      },
      {
        title: "Choosing a good inspiration photo",
        body: "The inspiration image does most of the steering, so it's worth choosing carefully. A few guidelines:",
        bullets: [
          "A similar room type transfers most predictably, kitchen to kitchen or bedroom to bedroom.",
          "Bright, uncluttered photos carry clearer information than moody, filtered ones.",
          "One strong idea per image beats a busy collage.",
          "If you love only the colors, use Subtle so the furniture stays closer to yours.",
          "Screenshots are fine; crop out text, logos and interface elements first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the inspiration need to be the same type of room?",
        a: "No, but closer matches are more predictable. A hotel bar can inspire a dining room; a spa can inspire a bathroom.",
      },
      {
        q: "Can I combine two inspiration photos?",
        a: "Work with one image at a time for the clearest result. To blend ideas, run a second transfer on the first result using another inspiration.",
      },
      {
        q: "Will it copy the exact furniture from the photo?",
        a: "It borrows the style, not the specific items. Expect pieces with a similar shape, material and color rather than exact replicas.",
      },
      {
        q: "How is this different from Redesign?",
        a: "Redesign follows a named style you pick from a list. Design Transfer follows a photo, which helps when the look you want doesn't have an obvious name.",
      },
      {
        q: "Can I use it on my house exterior?",
        a: "Yes. Pair a photo of your facade or garden with an exterior or landscape inspiration, and choose the strength that suits the change you're considering.",
      },
    ],
    related: ["features/redesign", "features/text-to-design", "interior-design-ai", "features/colors-textures"],
  },
];
