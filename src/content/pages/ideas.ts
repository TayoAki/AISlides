// Inspiration pages (/ideas/*). Every idea pairs practical how-to advice with a
// ready-to-paste studio prompt (`tryPrompt`).
import type { IdeaPage } from "@/content/types";

export const ideaPages: IdeaPage[] = [
  {
    slug: "ideas/interior",
    navLabel: "Interior Design Ideas",
    metaTitle: "Interior Design Ideas to Try on Your Own Room",
    metaDescription:
      "Practical interior design ideas for living rooms, kitchens, bedrooms and baths, each with a ready-made prompt to preview it on a photo of your own room.",
    eyebrow: "Interior inspiration",
    title: "Interior design ideas to try on your own room",
    intro: [
      "Good rooms rarely come from one big purchase. They come from a handful of decisions made well: a tighter palette, light at more than one height, a rug that is actually big enough, one natural material repeated with intent.",
      "Each idea below explains why it works and how to pull it off, followed by a prompt you can paste into the Roomwright studio. Upload a photo of your room, choose Redesign or the tool the idea mentions, add the prompt and see the idea in your own space before you spend anything.",
      "Most prompts work best at Balanced strength. If a result changes more than you wanted, drop to Subtle; if it plays it too safe, try Bold.",
    ],
    ideas: [
      {
        title: "Warm minimalism with one natural material",
        body: "Minimal rooms turn cold when every surface is white and hard. Pick one natural material, usually pale oak, and repeat it in the floor, a coffee table and a shelf. Keep the palette to three tones, such as warm white, oat and a soft charcoal accent, and put texture into linen, boucle and limewash instead of pattern. Hide everyday clutter in closed storage so the calm survives real life.",
        image: "living-japandi",
        tags: ["Living room", "Japandi", "Minimal"],
        tryPrompt:
          "Restyle this living room in warm minimalism: limewash walls, pale oak floor and coffee table, a low linen sofa, a boucle accent chair and a paper floor lamp",
      },
      {
        title: "Paint the kitchen cabinets instead of replacing them",
        body: "If the cabinet boxes are sound, new color and hardware can transform a kitchen for far less than new cabinetry. Soft sage or deep green pairs well with brushed brass or aged bronze pulls and white or marble-look counters. For a durable finish, degrease, sand and prime before painting, and use an enamel made for cabinets. Preview the color with Precision edit, or use Material swap if you are also weighing new shaker doors.",
        image: "detail-cabinets",
        tags: ["Kitchen", "Cabinets", "Budget refresh"],
        tryPrompt:
          "Paint the existing kitchen cabinets soft sage green and add brushed brass pulls; keep the door style, countertops, layout and appliances",
      },
      {
        title: "Color-drench a small room",
        body: "Painting the walls, trim, ceiling and even the door in one color makes a small room feel deliberate rather than cramped, because there are no hard contrasts marking where the box ends. It suits studies, powder rooms, dens and guest rooms. Choose a mid-to-deep shade such as evergreen or clay pink, and vary only the sheen: eggshell on the walls, satin on the trim, flat on the ceiling.",
        image: "office-home",
        tags: ["Paint", "Home office", "Bold color"],
        tryPrompt:
          "Paint the walls, trim, ceiling and door of this room in one deep evergreen; add a walnut desk, a brass task lamp and a patterned wool rug",
      },
      {
        title: "Light the room at three heights",
        body: "A single ceiling fixture flattens a room. Layer it instead: ambient light overhead, task light where you read, cook or work, and accent light lower down or on the walls, such as a picture light or a small lamp on a shelf. Aim for pools of light rather than even brightness. Warm bulbs around 2700K feel cozy in living spaces, and dimmers let one room handle both movie night and homework.",
        image: "living-classic",
        tags: ["Lighting", "Living room", "Cozy"],
        tryPrompt:
          "Add layered warm lighting to this living room: a linen-shaded floor lamp beside the sofa, table lamps on the side tables and a brass picture light above the art",
      },
      {
        title: "Size the rug to anchor the seating",
        body: "An undersized rug makes furniture look like it is floating. In a living room, choose one large enough for at least the front legs of every seat to rest on it, with a band of bare floor showing around the edges. Under a bed, let the rug extend well past both sides so your feet land on it in the morning. When you are torn between two sizes, the larger one is usually right.",
        image: "living-modern",
        tags: ["Rugs", "Layout", "Living room"],
        tryPrompt:
          "Add a large neutral wool rug under the seating area so the front legs of the sofa and chairs rest on it; keep the existing furniture",
      },
      {
        title: "A spa bathroom with fewer grout lines",
        body: "Large-format tiles make a bathroom feel calmer and larger because there are fewer lines for the eye to follow, and less grout to scrub. Pair warm grey or stone-look porcelain with a floating wood vanity that shows more floor, a frameless glass screen and matte fixtures. Add one soft, natural element, such as a teak stool or a stack of textured towels, so the room feels restful rather than clinical.",
        image: "bath-spa",
        tags: ["Bathroom", "Spa", "Tile"],
        tryPrompt:
          "Redesign this bathroom as a calm spa: large warm grey porcelain tiles, a floating oak vanity, a frameless glass shower screen, matte black fixtures and a teak stool",
      },
      {
        title: "Give the bedroom a boutique hotel feel",
        body: "Hotel rooms feel restful because they are edited and symmetrical. Center the bed on the main wall with a tall upholstered headboard, then flank it with matching nightstands and lamps. Hang curtains close to the ceiling and wider than the window so the room looks taller and the glass looks bigger. Keep the bedding to two or three tones and layer textures rather than colors.",
        image: "bedroom-calm",
        tags: ["Bedroom", "Calm", "Symmetry"],
        tryPrompt:
          "Restyle this bedroom like a boutique hotel: a tall upholstered headboard, matching walnut nightstands and lamps, linen curtains hung high and wide, and layered white and oatmeal bedding",
      },
      {
        title: "Go dark in the kitchen, then add warmth",
        body: "Dark cabinets look rich when they are balanced by warm materials and good light. Pair black or charcoal fronts with an oak open shelf, a honed stone counter and aged brass hardware, and add under-cabinet lighting so work surfaces do not fall into shadow. If the room gets little daylight, keep the walls or backsplash light to avoid a cave effect. Test a sample door in your own light, since dark colors shift a lot between morning and evening.",
        image: "kitchen-dark",
        tags: ["Kitchen", "Dark palette", "Dramatic"],
        tryPrompt:
          "Change the kitchen cabinets to matte black with aged brass pulls, add soapstone countertops, a warm oak open shelf and under-cabinet lighting; keep the layout",
      },
      {
        title: "Add warmth overhead with a wood ceiling",
        body: "The ceiling is the largest unused surface in most rooms. Tongue-and-groove boards or simple beams bring warmth and texture to a dining room or family room without taking up any floor space. Keep the walls light so the ceiling reads as a feature rather than a lid, and hang the pendant over the table low enough to create a pool of light. Material swap can preview a wood finish under Ceiling.",
        image: "dining-modern",
        tags: ["Dining room", "Ceiling", "Wood"],
        tryPrompt:
          "Add a warm tongue-and-groove wood ceiling to this dining room, keep the walls white and hang a sculptural paper pendant low over the table",
      },
      {
        title: "A kids' room that grows with them",
        body: "Children outgrow themes fast, so build on a calm base and put the personality into things that are easy to change: bedding, removable wall decals, art and a rug. Keep storage low and open, with baskets they can reach and put away without help. Carve out one small zone for a single activity, like a reading nook with floor cushions, so the room is not all play or all sleep.",
        image: "kids-room",
        tags: ["Kids room", "Storage", "Flexible"],
        tryPrompt:
          "Redesign this kids' room with a calm neutral base, low open shelving with woven baskets, a reading nook with floor cushions and colorful removable wall art",
      },
      {
        title: "Mix one old piece into every room",
        body: "Rooms furnished from a single catalog can feel like a showroom. Adding one piece with history to each room, such as a wooden chest, a worn rug, a vintage mirror or an inherited chair, gives the space depth and a story. Mostly new with a few old pieces keeps things fresh rather than fussy. Repeat a wood tone or metal finish so the old and the new feel related.",
        image: "living-boho",
        tags: ["Eclectic", "Vintage", "Styling"],
        tryPrompt:
          "Restyle this living room with a mix of modern and vintage: a clean-lined sofa, an antique wooden chest as a coffee table, a faded vintage rug and a gilded mirror",
      },
      {
        title: "Style open shelves with fewer, larger things",
        body: "Crowded shelves read as clutter. Choose fewer, larger objects and group them in odd numbers, varying height and shape: a stack of books with a small bowl on top, a tall vase, a framed print leaning against the back. Leave roughly a third of each shelf empty so the arrangement can breathe, and repeat two or three colors across the whole unit to tie it together. Decor staging can dress bare shelves in a photo.",
        image: "decor-shelf",
        tags: ["Styling", "Shelves", "Decor"],
        tryPrompt:
          "Style these open shelves with fewer, larger objects: stacked books, two ceramic vases, a small trailing plant and a leaning framed print, leaving space on every shelf",
      },
      {
        title: "Refresh a dated room without renovating",
        body: "Before planning demolition, see how far soft changes go. A lighter wall color, new window treatments, a modern sofa, a bigger rug and better lamps can make a tired room feel current while the floors, trim and fireplace stay. Run the photo through Redesign at Subtle or Balanced strength with an instruction to keep the fixed elements. If you like the result, you may have talked yourself out of a remodel.",
        image: "living-dated",
        tags: ["Refresh", "Budget", "Living room"],
        tryPrompt:
          "Refresh this dated living room without renovating: warm white walls, light linen curtains, a modern sofa, a large jute rug and brass floor lamps; keep the flooring and trim",
      },
      {
        title: "Coastal, minus the seashells",
        body: "Modern coastal style is about light and texture, not anchors and nautical stripes. Start with white or sandy walls, pale washed wood and slipcovered linen seating, then add rattan, jute and a few soft blues or greens borrowed from the sea and sky. Keep windows as bare as privacy allows so the room fills with daylight. Skip the literal decor; a single piece of driftwood says enough.",
        image: "living-coastal",
        tags: ["Coastal", "Light", "Natural texture"],
        tryPrompt:
          "Restyle this living room in relaxed modern coastal: white walls, pale washed oak, a slipcovered linen sofa, a rattan armchair, a jute rug and soft blue accents, no nautical decor",
      },
    ],
    faqs: [
      {
        q: "How do I try one of these ideas on my room?",
        a: "Upload a photo of your room in the studio, choose Redesign or the tool the idea mentions, and paste the prompt into the instruction box. Start at Balanced strength. It helps to tweak the prompt for your room, for example by naming a piece you want to keep.",
      },
      {
        q: "Which tool should I use for a small change?",
        a: "Precision edit for a single change, Paint for wall colors, Material swap for floors, counters, cabinets or ceilings, and Decor staging to add rugs, art and plants without replacing furniture. Redesign is for restyling the whole room.",
      },
      {
        q: "Will the AI move my walls or windows?",
        a: "No. Roomwright is designed to keep your walls, windows and layout in place while it changes the design. If a render alters something it should not, run it again or lower the strength.",
      },
      {
        q: "Can I buy the exact furniture shown?",
        a: "The furniture in a render is AI-generated, so it is not a specific product. Use the image as a reference for the shape, color and scale you want when you shop.",
      },
      {
        q: "Are these ideas renter-friendly?",
        a: "Many are. Rugs, lamps, curtains, shelf styling and furniture changes are usually fine in a rental. Check your lease before painting, and ask your landlord before changing fixtures or ceilings.",
      },
      {
        q: "Is it free to try these ideas?",
        a: "Yes, during the public beta. Every live tool is free with a free account, up to 20 renders a day.",
      },
    ],
  },

  {
    slug: "ideas/exterior",
    navLabel: "Exterior Design Ideas",
    metaTitle: "Exterior House Design Ideas for Curb Appeal",
    metaDescription:
      "Exterior ideas for paint, siding, roofing, entries, lighting and planting, each with a prompt to preview it on a photo of your own house before you commit.",
    eyebrow: "Exterior inspiration",
    title: "Exterior design ideas to preview on your own house",
    intro: [
      "A house's exterior is the first thing anyone sees and one of the costliest surfaces to get wrong. Paint covers the most area, siding and roofing last the longest, and the front door is where every eye lands.",
      "The ideas below cover all three, from a three-color paint scheme to layered foundation planting. Each comes with a prompt for the Roomwright studio: upload a daytime photo of the front of your house, choose Paint, Material swap, Precision edit or Redesign as the idea suggests, and paste the prompt in.",
      "Renders are for exploring. Before you buy, test real samples on the house, and check HOA rules and local permit requirements for siding, roofing and other major work.",
    ],
    ideas: [
      {
        title: "Use a three-color paint scheme",
        body: "A classic exterior scheme uses three colors: a body color for the siding, a trim color for windows, fascia and corners, and an accent for the front door. Keep body and trim far enough apart that the architecture reads from the street, and let the door carry the boldest color. Try the body color first with Paint, then add a note about the trim and the door.",
        image: "detail-paint",
        tags: ["Paint", "Color scheme", "Curb appeal"],
        tryPrompt: "Paint the siding a soft greige, keep all trim crisp warm white and paint the front door deep navy",
      },
      {
        title: "Dark siding with warm wood",
        body: "Charcoal or black cladding makes a modern house look grounded and crisp, but on its own it can feel severe. Warm it up with natural wood where people see it up close: the front door, the soffits, a porch ceiling or a slatted screen. Black window frames and warm-white lighting complete the look. Dark colors absorb more heat, so ask your installer which materials suit sunny walls.",
        image: "exterior-modern",
        tags: ["Modern", "Dark exterior", "Wood accents"],
        tryPrompt:
          "Change the siding to charred timber, add warm cedar around the front door and soffits, and give the window frames a black finish",
      },
      {
        title: "Board and batten for a modern farmhouse",
        body: "Vertical board and batten adds shadow lines and height, which is why it anchors so many modern farmhouse exteriors. White or soft white siding with black trim is the classic pairing, and a standing-seam metal roof over the porch adds a clean accent. Keep the details simple, with slim trim and plain lantern or gooseneck lights, so the look stays fresh rather than themed.",
        image: "exterior-farmhouse",
        tags: ["Modern farmhouse", "Siding", "Metal roof"],
        tryPrompt:
          "Restyle this house as a modern farmhouse: white board and batten siding, black window trim, a standing-seam metal porch roof and a natural wood front door",
      },
      {
        title: "Soften brick with limewash",
        body: "Limewash is a mineral finish that soaks into brick instead of sitting on top as a film, so the texture stays visible and it can weather to a soft, aged patina. It suits orange or heavy red brick. It needs bare, unsealed masonry to bond, and painted brick is far harder to undo, so test a small area first and ask a mason if the walls have moisture problems.",
        image: "exterior-brick",
        tags: ["Brick", "Limewash", "Traditional"],
        tryPrompt:
          "Give this brick house a soft white limewash that lets some of the brick texture show through; keep the roof, windows and trim as they are",
      },
      {
        title: "Make the front door the focal point",
        body: "The entry is where visitors look first, so it deserves your boldest move. Paint the door a saturated color that contrasts with the body, such as evergreen, navy or terracotta. Flank it with generously sized wall lights, since small fixtures tend to look lost from the street. Finish with clear house numbers, a large doormat and a pair of matching planters to frame the approach.",
        image: "garden-front",
        tags: ["Entry", "Front door", "Lighting"],
        tryPrompt:
          "Paint the front door deep evergreen, add a black wall lantern on each side, large brass house numbers and two tall planters with clipped boxwood",
      },
      {
        title: "Upgrade the garage door",
        body: "On many houses the garage door is the largest single element on the front. A carriage-style or wood-look door with a row of windows can make it feel like part of the architecture instead of an appliance. Decide whether it should blend in, painted the body color, or stand out as a warm wood feature, and match its hardware finish to the front door.",
        image: "exterior-modern",
        tags: ["Garage", "Curb appeal"],
        tryPrompt:
          "Replace the garage door with a warm wood-look carriage-style door with a row of windows across the top; keep everything else the same",
      },
      {
        title: "Switch to a standing-seam metal roof",
        body: "A standing-seam metal roof gives a house clean, continuous lines and suits modern, farmhouse and cabin styles alike. Dark bronze or charcoal is the most versatile choice, while lighter colors reflect more sun. If a full replacement is not on the cards, metal over just the porch or a bay window adds the same accent. Roofing work often needs a permit, so involve a licensed roofer early.",
        image: "exterior-farmhouse",
        tags: ["Roof", "Metal", "Materials"],
        tryPrompt: "Swap the roof to a charcoal standing-seam metal roof and keep the siding, windows and trim unchanged",
      },
      {
        title: "Warm Mediterranean stucco and clay tile",
        body: "Smooth stucco in warm white or pale sand, a terracotta clay tile roof and dark iron details create a sunny look that suits hot, dry climates. Keep the window trim minimal and let deep shadows do the decorating. Olive trees, lavender and gravel at the base complete it. Clay tile is heavy, so a roof change needs a structural check before anyone orders materials.",
        image: "exterior-modern",
        tags: ["Mediterranean", "Stucco", "Clay tile"],
        tryPrompt:
          "Restyle this house in a Mediterranean style: warm white painted stucco, a terracotta clay tile roof, black iron light fixtures and potted olive trees by the entry",
      },
      {
        title: "Light the house for evening",
        body: "A good lighting plan makes a house look welcoming after dark and helps guests find the door. Use wall lanterns at the entry and garage, soffit downlights to wash the facade and low path lights along the walk. Uplight one or two trees rather than the whole yard, and choose warm white, shielded fixtures to avoid glare. Sky & light can show the house at twilight before you plan the fixtures.",
        image: "exterior-dusk",
        tags: ["Lighting", "Evening", "Curb appeal"],
        tryPrompt:
          "Show this house at blue hour with warm lights on: soffit downlights along the eaves, wall lanterns by the door and low path lights along the walkway",
      },
      {
        title: "Layer the foundation planting",
        body: "A bare foundation makes a house look unfinished. Plant in layers: low edging or groundcover at the front, mid-height shrubs behind and taller plants at the corners to soften the edges of the building. Leave space between the shrubs and the siding for air and maintenance, mix in evergreens for winter structure and top the beds with fresh dark mulch for a crisp finish.",
        image: "garden-front",
        tags: ["Planting", "Front yard", "Curb appeal"],
        tryPrompt:
          "Add layered planting along the front of the house: low boxwood edging, mid-height hydrangeas and ornamental grasses, taller shrubs at the corners and dark mulch",
      },
      {
        title: "Ground the facade with stone",
        body: "Natural stone on the lower part of a facade, around the entry or on porch columns adds weight and texture, especially on Craftsman and rustic houses. Keep it to one clear zone rather than scattered patches, and choose a stone whose tones pick up the roof or trim. Manufactured stone veneer is lighter than full stone, but its moisture detailing matters, so hire an experienced installer.",
        image: "exterior-brick",
        tags: ["Stone", "Craftsman", "Materials"],
        tryPrompt:
          "Add natural stone veneer to the lower third of the front facade and the porch columns, and paint the siding above a warm greige",
      },
      {
        title: "Paint the porch ceiling and dress the porch",
        body: "A porch is an outdoor room, so furnish it like one. A pale sky-blue ceiling is a long-standing tradition in the American South and feels airy anywhere. Add seating that invites people to stay, like a pair of rockers or a swing, then an outdoor rug, a small side table and planters by the steps. Tie cushions and pots back to the house colors.",
        image: "exterior-farmhouse",
        tags: ["Porch", "Paint", "Outdoor living"],
        tryPrompt:
          "Paint the porch ceiling a pale sky blue, add two wooden rocking chairs, an outdoor rug and potted ferns on each side of the steps",
      },
    ],
    faqs: [
      {
        q: "How do I preview these ideas on my house?",
        a: "Upload a daytime photo of the front of your house in the studio. Use Paint for color ideas, Material swap for siding and roofing, Precision edit for single changes like the front door, and Redesign for a full style change. Paste the prompt from the idea and adjust it to fit your home.",
      },
      {
        q: "How accurate are paint colors in a render?",
        a: "Accurate enough to compare directions, not to choose a final color. Screens, camera settings and daylight all shift color. Paint large sample boards, look at them on more than one side of the house at different times of day, then decide.",
      },
      {
        q: "Do I need approval to change my exterior?",
        a: "Often. HOAs commonly review exterior colors and materials, historic districts may have their own rules, and roofing, siding and structural work can require permits. Check locally before you commit.",
      },
      {
        q: "My photo was taken on a grey day. Does that matter?",
        a: "Flat light makes every color look duller. Sky & light can replace the sky and relight the scene, from clear midday to golden hour, so you can compare ideas in better light. Confirm final choices with real samples outdoors.",
      },
      {
        q: "Will a render change the shape of my house?",
        a: "No. Roomwright is designed to leave the structure of your house alone and change finishes, colors and styling, so additions and new rooflines are outside what it shows.",
      },
      {
        q: "Is it free?",
        a: "Yes, during the public beta. All live tools are free with a free account, up to 20 renders a day.",
      },
    ],
  },

  {
    slug: "ideas/garden",
    navLabel: "Garden Design Ideas",
    metaTitle: "Garden Design Ideas for Yards, Patios and Pools",
    metaDescription:
      "Garden and landscaping ideas for backyards, front yards, patios and pools, with practical tips and a prompt to preview each one on a photo of your yard.",
    eyebrow: "Garden inspiration",
    title: "Garden design ideas for yards of every size",
    intro: [
      "Most good gardens start with structure rather than plants: where you will sit, how you will move through the space and what you will look at from the house. Planting then softens and fills that framework.",
      "These ideas range from a weekend project, like a gravel fire pit circle, to longer plans, like turning lawn into meadow. Each includes a prompt for the Roomwright studio. Upload a photo of your outdoor space, choose Redesign with the Garden space selected and paste the prompt to see it in your own yard.",
      "A render cannot tell you what will grow in your climate. Use it for layout and mood, then choose plants for your hardiness zone, sun and soil.",
    ],
    ideas: [
      {
        title: "Plant in drifts, not dots",
        body: "Single plants dotted along a border look busy. Group each variety in odd-numbered clusters of three, five or seven, and repeat those groups along the bed so the eye follows a rhythm. Ribbons of ornamental grasses woven between flowering perennials look natural and hold interest into fall. Space plants by their mature spread, then fill the gaps with annuals for the first season.",
        image: "garden-backyard",
        tags: ["Planting", "Perennials", "Borders"],
        tryPrompt:
          "Redesign this garden border with generous drifts of ornamental grasses, lavender and white coneflowers repeated along its length",
      },
      {
        title: "Build an outdoor room around the patio",
        body: "A patio feels finished when it has what an indoor room has: a floor, walls, a ceiling and good light. An outdoor rug defines the floor, planters or a low hedge suggest walls, and a pergola or a large umbrella provides the ceiling. Choose deep seating scaled to the space, leave clear walkways around it and add string lights for evenings.",
        image: "garden-patio",
        tags: ["Patio", "Outdoor living", "Pergola"],
        tryPrompt:
          "Turn this patio into an outdoor living room: a deep teak sofa and two lounge chairs, an outdoor rug, a slatted wood pergola overhead and warm string lights",
      },
      {
        title: "Raised beds for an easy kitchen garden",
        body: "Raised beds warm up faster in spring, drain well and save your back. Keep them narrow enough to reach the middle from either side, usually no more than about four feet wide, and leave paths wide enough for a wheelbarrow. Put them where they get at least six hours of direct sun. Cedar and corten steel both look good and last for years.",
        image: "garden-backyard",
        tags: ["Kitchen garden", "Raised beds", "Vegetables"],
        tryPrompt:
          "Add four corten steel raised vegetable beds in a grid with gravel paths between them and a small wooden bench at one end",
      },
      {
        title: "Swap thirsty lawn for a xeriscape",
        body: "A xeriscape replaces thirsty lawn with gravel or decomposed granite, boulders and drought-tolerant plants such as agave, lavender, salvia and ornamental grasses. Group plants with similar water needs and feed them with drip irrigation rather than sprinklers. A curving path and a few large boulders keep it looking designed rather than bare. It is also worth asking whether your water utility offers lawn replacement incentives.",
        image: "garden-front",
        tags: ["Xeriscape", "Low water", "Front yard"],
        tryPrompt:
          "Replace the lawn in this front yard with a desert xeriscape: decomposed granite, a few large boulders, agaves, lavender and ornamental grasses along a curving path",
      },
      {
        title: "A Japanese-inspired garden corner",
        body: "Japanese-inspired gardens rely on restraint: raked gravel, a few carefully placed stones, moss or low groundcover and one specimen tree such as a Japanese maple. Set stones in asymmetrical groups and bury them partly so they look settled rather than dropped. A stone lantern or a simple water basin adds a focal point. The style fits small spaces well, which makes it a good match for courtyards and side yards.",
        image: "garden-patio",
        tags: ["Japanese zen", "Small space", "Calm"],
        tryPrompt:
          "Redesign this corner of the garden in a Japanese zen style: raked pale gravel, a few large mossy stones, a Japanese maple and a stone lantern",
      },
      {
        title: "Light the garden for evening",
        body: "Lighting stretches summer evenings well past sunset. Uplight one or two trees or a textured wall for drama, run low path lights along steps and walkways for safety, and hang string lights over the seating area for atmosphere. Warm white light looks best among plants. Low-voltage kits are simple to install, but have an electrician handle any new outdoor outlets. Sky & light can show the scene at blue-hour dusk first.",
        image: "garden-pool",
        tags: ["Lighting", "Evening", "Outdoor living"],
        tryPrompt: "Show this garden at dusk with warm low path lights, two uplit trees and string lights over the seating area",
      },
      {
        title: "Poolside planting that stays tidy",
        body: "Around a pool, choose plants that drop little litter: clipped evergreens, ornamental grasses, succulents and potted olives are common choices. Keep trees that shed leaves, flowers or berries away from the water, and give the deck a generous band of paving so wet feet stay off the beds. Pale pavers stay cooler underfoot than dark ones, which matters on a hot afternoon.",
        image: "garden-pool",
        tags: ["Pool", "Low maintenance", "Planting"],
        tryPrompt:
          "Redesign the pool area with pale stone pavers, clipped evergreen hedges, potted olive trees and two white loungers under a canvas umbrella",
      },
      {
        title: "A gravel fire pit circle",
        body: "A fire pit gives a garden a destination. Set it on a level gravel or paved circle with room for chairs and space to walk behind them, and keep it well away from the house, fences and overhanging branches. Low planting around the edge frames the circle without crowding it. Check local fire rules and HOA guidelines before you build, since some areas restrict open flames.",
        image: "garden-backyard",
        tags: ["Fire pit", "Gathering", "Gravel"],
        tryPrompt:
          "Add a round gravel fire pit area with a stone fire bowl and four wooden Adirondack chairs, edged with low ornamental grasses",
      },
      {
        title: "Privacy from layered planting and screens",
        body: "A single tall hedge takes years to fill in and can feel like a wall. Layer instead: a slatted timber screen for immediate privacy, tall grasses or evergreen shrubs in front of it, and a small tree placed to block the view from a neighbor's upstairs window. Choose clumping bamboo rather than running types, which spread aggressively, and check local limits on fence and screen height.",
        image: "garden-patio",
        tags: ["Privacy", "Screening", "Backyard"],
        tryPrompt:
          "Add privacy along the back fence with a horizontal slatted cedar screen, tall evergreen shrubs in front of it and a small multi-stem tree in the corner",
      },
      {
        title: "A cottage garden by the front door",
        body: "Cottage gardens feel generous because they are planted densely, with flowers spilling over the paths. Combine roses, foxgloves, catmint, lady's mantle and hardy geraniums, and let a few self-seeders fill the gaps. A gently curving brick or gravel path and a simple picket fence or gate complete the look. Deadhead through summer to keep the flowers coming.",
        image: "garden-front",
        tags: ["Cottage", "Flowers", "Front yard"],
        tryPrompt:
          "Redesign this front garden in a cottage style: a brick path to the door lined with roses, foxgloves, catmint and lady's mantle spilling over the edges",
      },
      {
        title: "Let part of the lawn become a meadow",
        body: "A wildflower meadow needs far less mowing than lawn and feeds pollinators, but it depends on good preparation. Clear the existing turf, sow a seed mix suited to your region and expect it to take a season or two to look its best. Mow a crisp path through it and keep a neat edge where it meets the lawn, so it reads as intentional rather than neglected.",
        image: "garden-backyard",
        tags: ["Wildflower meadow", "Pollinators", "Low mow"],
        tryPrompt:
          "Turn the back half of this lawn into a wildflower meadow with a mown grass path curving through it and a neat edge along the remaining lawn",
      },
      {
        title: "Containers for a rooftop or courtyard",
        body: "Where there is no open ground, containers do the work. Group large pots rather than scattering small ones, and pick wind-tolerant plants such as grasses, rosemary and olive trees for exposed rooftops. Lightweight fiberglass or resin planters reduce the load, but always confirm what a roof or balcony can safely carry with the building manager or a structural engineer before adding soil and water.",
        image: "garden-patio",
        tags: ["Rooftop terrace", "Containers", "Small space"],
        tryPrompt:
          "Redesign this rooftop terrace with large lightweight planters of grasses, rosemary and olive trees, a compact bistro set and an outdoor rug",
      },
      {
        title: "Stepping stones that match your stride",
        body: "Stepping stones make a path feel relaxed and let rain soak into the ground instead of running off. Before setting them, walk the route at a comfortable pace and mark where your feet land, then space the stones to match. Set each one flush with the surrounding gravel or lawn so no one trips and the mower passes over, and tuck creeping thyme or moss into the gaps.",
        image: "garden-front",
        tags: ["Paths", "Hardscape"],
        tryPrompt:
          "Add a path of large flat stepping stones set in pale gravel from the patio to the back of the garden, with creeping thyme between the stones",
      },
    ],
    faqs: [
      {
        q: "How do I try these ideas on my yard?",
        a: "Upload a photo of your outdoor space in the studio, choose Redesign with the Garden space and the matching area, such as backyard or patio, then paste the prompt. To add a single feature like a fire pit to a design you already like, use Precision edit.",
      },
      {
        q: "Will the plants in a render suit my climate?",
        a: "Not necessarily. The render shows a look, not a plant list for your conditions. Use it for layout and mood, then choose plants for your hardiness zone, sun and soil with help from a local nursery.",
      },
      {
        q: "Can I keep my existing trees and patio?",
        a: "Yes. Name them in your instruction, for example \"keep the large oak and the stone patio,\" and use Subtle or Balanced strength.",
      },
      {
        q: "Can I design a garden without a photo?",
        a: "Yes. Text to design generates an outdoor space from a written description, and Sketch to render turns a hand-drawn garden sketch into a photoreal image.",
      },
      {
        q: "What should I check before building?",
        a: "In the US, call 811 before you dig so utility lines can be marked. Check HOA and local rules for fences, fire features and hardscape, and bring in professionals for grading, drainage, retaining walls, pools and electrical work.",
      },
      {
        q: "Is it free?",
        a: "Yes, during the public beta. Every live tool is free with a free account, up to 20 renders a day.",
      },
    ],
  },
];
