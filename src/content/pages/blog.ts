// Blog articles. Original, practical guides; no invented statistics, customers
// or quotes. Block text supports **bold** and [links](/path) to real routes.
import type { BlogPost } from "@/content/types";
import { studioHref } from "@/lib/tools";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-photograph-a-room-for-ai-redesigns",
    title: "How to Photograph a Room for Better AI Redesigns",
    metaDescription:
      "Light, angle, lens and clutter all shape how an AI redesign turns out. Here's how to photograph a room so the results look like your actual space.",
    excerpt:
      "The photo you upload is the blueprint for every redesign. A few minutes spent on light, angle, lens and clutter makes the results far more believable.",
    date: "2026-09-28",
    readingMinutes: 6,
    category: "Guides",
    heroImage: "living-modern",
    body: [
      {
        type: "p",
        text: "When you upload a photo to Roomwright, the AI treats it as a blueprint. It reads where the walls meet, where the windows and doors sit, how the floor runs and where the light comes from, then builds the new design on top of that structure. Anything it can't make out clearly, it has to guess, and guesses are where odd results come from: a window that drifts, a wall that bends, a lamp that turns into a plant.",
      },
      {
        type: "p",
        text: "You don't need professional gear to avoid that. A phone and five minutes of preparation are enough. Here's what matters, roughly in order of impact.",
      },
      { type: "h2", text: "Start with soft, even light" },
      {
        type: "p",
        text: "Light has the biggest effect on how believable a render looks. The AI works with the lighting it sees in your photo, so a dim room with an orange cast tends to come back as a dim redesign with an orange cast.",
      },
      {
        type: "ul",
        items: [
          "**Shoot in daylight.** Open curtains and blinds all the way. Overcast days are ideal for interiors because the light is bright but soft.",
          "**Avoid hard patches of sun.** A bright rectangle of sunlight on the floor can be mistaken for a rug or a change of material. If the sun is streaming in, wait an hour or shoot at a different time of day.",
          "**Don't mix light colors.** Warm bulbs plus cool daylight leave parts of the room yellow and parts blue, which throws off wall and floor colors. Turn the lights off, or make sure every bulb in view matches.",
          "**Turn off the flash.** It flattens depth and bounces glare off glossy surfaces.",
        ],
      },
      {
        type: "p",
        text: "Windows need special care. Point the camera straight at a bright window and your phone has to choose: expose for the window and the room goes dark, or expose for the room and the window becomes a white blank. Where you can, keep the main window beside you or behind you. Most phones now blend bright and dark areas automatically, which helps, but skip filters that add a heavy, dramatic look.",
      },
      { type: "h2", text: "Choose an angle that shows the room's shape" },
      {
        type: "p",
        text: "The most useful single photo of a room is usually taken from a corner or doorway, looking toward the opposite corner. That view shows two walls, a good stretch of floor and the ceiling line, which gives the AI clear cues about depth and scale.",
      },
      {
        type: "ul",
        items: [
          "**Hold the camera at chest height,** roughly four to five feet off the floor. Much lower exaggerates the floor; much higher looks down on the furniture.",
          "**Keep the phone level and upright.** Tilting it up or down makes vertical lines lean inward. Your camera's grid overlay makes this easy to check.",
          "**Use landscape orientation** for whole rooms. Portrait works for a narrow hallway or a single wall.",
          "**Include the floor and some ceiling.** The floor tells the AI where furniture can go, and the ceiling line anchors the room's height.",
        ],
      },
      {
        type: "p",
        text: "If you're planning a focused change, such as new cabinets or a different countertop, frame that area but keep some of the surrounding room in the shot so the AI can match what's around it.",
      },
      { type: "h2", text: "Use the main lens, not the ultra-wide" },
      {
        type: "p",
        text: "Most phones have an ultra-wide lens, often labeled 0.5x. It fits more of the room in, but it stretches everything near the edges of the frame, so chairs look elongated and walls can appear to lean. The AI will faithfully redesign that distortion, and the result will look slightly off.",
      },
      {
        type: "p",
        text: "Use the main 1x lens where you can, and step back into a doorway or corner to fit more in. In a very small room the ultra-wide may be your only option. If so, keep the phone perfectly level and keep the things you care about away from the edges of the frame. A few other camera features are best left off:",
      },
      {
        type: "ul",
        items: [
          "**Portrait mode.** Background blur hides the edges the AI needs to see.",
          "**Panorama mode.** Stitching bends straight lines and can repeat or warp objects.",
          "**Digital zoom.** It throws away detail. Move closer instead.",
        ],
      },
      {
        type: "p",
        text: "Finally, upload the original photo. Screenshots and copies sent through messaging apps are often compressed, which softens the fine detail the AI relies on.",
      },
      { type: "h2", text: "Decide what to do about clutter" },
      { type: "p", text: "How much to tidy depends on the tool you plan to use." },
      {
        type: "ul",
        items: [
          "**Redesign and Style transfer.** Clear small, loose items such as cords, laundry, paperwork and pet bowls. The AI tries to reinterpret everything it sees, and a pile of mail can come back as a strange sculpture.",
          "**Virtual staging.** Start with an empty room. If it isn't empty, run **Declutter & remove** first, check the result, then stage it.",
          "**Paint visualizer and Material swap.** Furniture can stay, but make sure a good area of the surface you're changing is visible. A wall hidden behind a tall bookcase gives the AI little to work with.",
        ],
      },
      {
        type: "p",
        text: "Move people and pets out of the frame, too, and check mirrors, glass doors and glossy cabinets for your own reflection.",
      },
      {
        type: "image",
        image: "empty-room",
        caption: "For virtual staging, start with an empty room photographed from a corner in soft daylight.",
      },
      { type: "h2", text: "Exteriors and gardens" },
      { type: "p", text: "The same principles apply outdoors, with a few adjustments." },
      {
        type: "ul",
        items: [
          "**House fronts.** Stand far enough back to fit in the whole roofline and some ground, ideally from across the street if it's safe. Shoot straight on or at a slight angle, and move cars and trash bins out of the driveway if you can.",
          "**Timing.** Soft, even light still wins, so keep the sun behind you or wait for light cloud. A dull gray sky is fine, because you can swap it later with the [Sky & light](/features/sky-colors) tool.",
          "**Gardens and yards.** Shoot from a slightly raised spot, such as a deck, a step or an upstairs window, so the layout reads clearly. Include the boundaries, such as fences, walls or hedges, so the AI understands the size of the space.",
        ],
      },
      { type: "h2", text: "A quick checklist before you upload" },
      {
        type: "ol",
        items: [
          "Curtains open, flash off, and lights either off or all the same color.",
          "Standing in a corner or doorway, phone at chest height, level and upright.",
          "Main lens, landscape orientation, with the floor and ceiling line in the frame.",
          "Loose clutter cleared, or the room emptied for staging.",
          "No people, pets or reflections in the shot.",
          "The original, full-resolution file, not a screenshot.",
        ],
      },
      {
        type: "callout",
        title: "Renders are visualizations, not plans",
        text: "Even with a perfect photo, a render is an AI visualization, not a measured drawing. It can shift small details, and it doesn't know your room's exact dimensions. Use renders to compare ideas, then confirm measurements, clearances and anything structural with a qualified professional before you buy or build.",
      },
      {
        type: "p",
        text: "Once you have a good photo, experiment. Run the same image through two or three styles at different strengths, then compare each one with the original in the before-and-after view. If something keeps coming out wrong, a better photo usually fixes it faster than a longer prompt.",
      },
      {
        type: "cta",
        title: "Try it on your own room",
        text: "Upload a photo and see your space in a new style. Free with an account during the beta, with 20 renders a day.",
        cta: { label: "Start a redesign", href: studioHref({ tool: "redesign", space: "interior" }) },
      },
    ],
  },
  {
    slug: "virtual-staging-for-listings",
    title: "Virtual Staging for Listings: How to Use It Honestly",
    metaDescription:
      "What virtual staging is, the disclosure rules to confirm with your MLS before you publish, and how to use staged listing photos without hiding any defects.",
    excerpt:
      "Virtual staging helps buyers picture an empty home furnished. Done well, it's honest marketing. Done carelessly, it misleads buyers and can break MLS rules.",
    date: "2026-09-28",
    readingMinutes: 5,
    category: "Real estate",
    heroImage: "dining-modern",
    body: [
      {
        type: "p",
        text: "Empty rooms are hard to read in photos. Without furniture there's no sense of scale, and buyers scrolling through a listing often can't tell whether a bedroom fits a queen bed or where the sofa would go. Virtual staging solves that by adding furniture and decor to a photo of the empty room, so the space looks lived in and its purpose is obvious.",
      },
      {
        type: "p",
        text: "It's a useful tool, and it comes with responsibilities. This guide covers what virtual staging is, the disclosure rules to confirm before you publish, and how to use it without misleading anyone.",
      },
      { type: "h2", text: "What virtual staging is, and what it isn't" },
      {
        type: "p",
        text: "Virtual staging means digitally adding movable items, such as sofas, beds, rugs, lamps, art and plants, to a photo of a real room. Everything you add could, in principle, be carried in through the front door. The room itself, including its walls, floors, windows, fixtures and condition, stays exactly as it is.",
      },
      {
        type: "p",
        text: "That distinction is the heart of doing it ethically. Adding a sofa shows a possibility. Changing the flooring, removing a water stain or improving the view out the window changes the facts about the property, and that's no longer staging.",
      },
      {
        type: "p",
        text: "Compared with physical staging, the virtual kind avoids renting, moving and insuring furniture, and you can show the same room in more than one style. The tradeoff is that buyers who walk in will find an empty room, which is exactly why clear disclosure matters.",
      },
      { type: "h2", text: "Disclosure rules: check with your MLS first" },
      {
        type: "p",
        text: "There's no single rule for virtual staging that applies everywhere in the US. Requirements usually come from your local MLS, your brokerage may have its own policy, listing portals can add rules of their own, and your state may regulate digitally altered listing photos too. Before you publish a staged photo, read your MLS's current rules on altered images, or ask MLS staff directly.",
      },
      { type: "p", text: "Requirements you may come across include:" },
      {
        type: "ul",
        items: [
          "A visible label on each staged photo, such as \"Virtually staged,\" placed on the image itself.",
          "A note in the listing remarks that identifies which photos are staged.",
          "An unstaged photo of the same room shown alongside the staged version.",
          "Limits on altering anything permanent, such as fixtures, finishes, views or the property's condition.",
        ],
      },
      {
        type: "p",
        text: "Beyond MLS rules, the National Association of Realtors Code of Ethics asks members to present a true picture in their advertising (Article 12), and consumer protection laws broadly prohibit misleading advertising. Outside the US, check the rules wherever you list. When in doubt, disclose more, not less. (This guide is general information, not legal advice.)",
      },
      {
        type: "callout",
        title: "A safe default",
        text: "Even if your MLS says nothing about virtual staging, label every staged image, mention it in the remarks and include the original photo. It costs you nothing and protects you, your seller and the buyer.",
      },
      { type: "h2", text: "Ethical use: never hide defects" },
      {
        type: "p",
        text: "The test is simple: would a buyer who has seen your photos feel misled when they walk through the door? If the answer is yes, the image shouldn't be published. In practice, that means:",
      },
      {
        type: "ul",
        items: [
          "**Don't remove or disguise damage.** Cracks, stains, worn flooring and dated fixtures stay visible. Placing a virtual rug over a damaged floor is still hiding a defect.",
          "**Don't change permanent features.** No new windows, fireplaces, built-ins, finishes or ceiling heights.",
          "**Leave the view alone.** Power lines, neighboring buildings and busy roads stay where they are.",
          "**Keep furniture to scale.** Undersized furniture makes a room look bigger than it is. Check that the bed, sofa and table look like real pieces that would actually fit.",
          "**Stay true to the room's use.** Don't stage a space as a bedroom if it can't legally be marketed as one where you are.",
        ],
      },
      {
        type: "p",
        text: "Renovation concepts are different from staging. Showing what a dated kitchen could look like with new cabinets and counters can help buyers see potential, but it must be clearly labeled, for example \"Renovation concept, not current condition,\" and shown next to the real photo. Check whether your MLS allows concept images in a listing at all. If it doesn't, keep them for conversations with interested buyers, still clearly labeled.",
      },
      {
        type: "image",
        image: "empty-room-2",
        caption: "Photograph the empty room first. Its real condition should be just as visible after staging.",
      },
      { type: "h2", text: "Which rooms to stage" },
      {
        type: "p",
        text: "You don't need to stage every room. Focus on the spaces where furniture answers a question buyers would otherwise be left with:",
      },
      {
        type: "ul",
        items: [
          "**The main living area,** where scale and layout matter most.",
          "**The primary bedroom,** to show how a bed and nightstands fit.",
          "**Open-plan spaces,** where furniture helps define the living, dining and kitchen zones.",
          "**Awkward or ambiguous spaces,** such as a bonus room, a nook or an oddly shaped room, where staging suggests a clear use, like a home office or a reading corner.",
        ],
      },
      {
        type: "p",
        text: "Keep the style consistent from room to room, so the listing reads as one home rather than a collection of unrelated renders.",
      },
      { type: "h2", text: "A practical workflow with Roomwright" },
      {
        type: "ol",
        items: [
          "**Photograph the empty room well.** Soft daylight, a corner angle and the main lens make the biggest difference. Our guide to [photographing a room for AI redesigns](/blog/how-to-photograph-a-room-for-ai-redesigns) covers the details.",
          "**Clear leftover items if needed.** If the seller left boxes or a few pieces of furniture, [Declutter & remove](/features/furniture-removal) can clear them. Only remove movable belongings, never fixtures or damage, and treat the result as an altered photo that needs disclosure too.",
          "**Stage the room.** In [Virtual staging](/virtual-staging-ai), choose the room type and a style that suits the home and its likely buyers. Neutral, widely liked styles such as transitional or Scandinavian are a safe starting point.",
          "**Review every render closely.** Compare it with the original in the before-and-after view. Check that windows, doors, outlets, vents, radiators, flooring and wall color are unchanged. If anything permanent has shifted, generate it again or don't use it.",
          "**Label and publish.** Add your disclosure label to the image, note the staging in the remarks, and include the original photo if your MLS requires it, and ideally even if it doesn't.",
        ],
      },
      { type: "h2", text: "At the showing" },
      {
        type: "p",
        text: "Disclosure doesn't stop online. Mention virtual staging when you talk to buyers, and consider bringing the staged and original photos side by side. Seeing a room furnished helps buyers imagine living there, and knowing upfront that the furniture was virtual keeps that impression a positive one.",
      },
      {
        type: "p",
        text: "One more practical point: make sure you have the right to alter the photos you're using, especially if a photographer shot them under a license, and read our [terms](/terms) for how renders can be used. For more on how agents can fit staging into a listing workflow, see our page on [virtual staging for real estate agents](/for/realtors).",
      },
      {
        type: "cta",
        title: "Stage an empty room",
        text: "Upload a photo of an empty room, choose a style and compare the staged version with the original before you publish.",
        cta: { label: "Try virtual staging", href: studioHref({ tool: "virtual-staging", space: "interior" }) },
      },
    ],
  },
  {
    slug: "choosing-paint-colors-with-a-visualizer",
    title: "How to Choose Paint Colors With a Visualizer",
    metaDescription:
      "Use a paint visualizer to narrow your options, then get the color right: how undertones work, how light direction changes color, and how to sample for real.",
    excerpt:
      "A visualizer is the fastest way to rule colors in or out. Here's how to read undertones, account for your room's light, and confirm your pick with real samples.",
    date: "2026-09-28",
    readingMinutes: 6,
    category: "Guides",
    heroImage: "detail-paint",
    body: [
      {
        type: "p",
        text: "Paint is one of the least expensive ways to change a room, and one of the easiest to get wrong. A small chip under store lighting tells you very little about how a color will look across four walls, next to your floor, in your light. That gap is where the surprises come from.",
      },
      {
        type: "p",
        text: "A paint visualizer closes part of that gap by showing a color on your actual walls, in a photo of your actual room. It won't close all of it, and knowing its limits is what makes it useful.",
      },
      { type: "h2", text: "What a visualizer is good for" },
      { type: "p", text: "Think of the visualizer as a shortlisting tool. It's excellent at three things:" },
      {
        type: "ul",
        items: [
          "**Comparing color families quickly.** Warm white, greige, sage and navy make very different rooms. Seeing each one on your own walls rules options in or out in minutes.",
          "**Judging proportion.** A deep color on one accent wall reads very differently from the same color on every wall.",
          "**Checking relationships.** You see the color next to your floors, cabinets, trim and furniture, which a chip can't show you.",
        ],
      },
      {
        type: "p",
        text: "What it can't do is show the exact color that will come out of the can. A render depends on your photo's white balance, the light in the room when you took it, how the AI interprets that light, and the brightness and calibration of your screen. Use it to choose a direction, then confirm with real samples.",
      },
      { type: "h2", text: "Undertones: the color behind the color" },
      {
        type: "p",
        text: "Most paint colors, especially neutrals, have an undertone: a subtle lean that shows up in some light and next to some materials. It's why a gray can look faintly blue in one room and faintly purple in another.",
      },
      {
        type: "ul",
        items: [
          "**Whites** lean warm, toward yellow or cream, or cool, toward blue or gray.",
          "**Grays** can lean blue, green or violet.",
          "**Beiges and greiges** can lean pink, yellow or green.",
          "**Greens** can lean yellow and warm, or blue and cool.",
        ],
      },
      {
        type: "p",
        text: "Undertones are hard to see on a single chip and obvious in comparison. Hold several samples from the same family side by side, or against a sheet of plain white printer paper. The one that suddenly looks pink, green or blue next to the others is showing its undertone.",
      },
      {
        type: "p",
        text: "Then check your samples against what you aren't changing: flooring, countertops, tile, brick, stone and large furniture. A warm oak floor can make a cool blue-gray feel colder, and a creamy white can look dingy beside bright white tile. Colors don't need to match these fixed elements, but their undertones should sit comfortably together.",
      },
      { type: "h2", text: "How light direction changes a color" },
      { type: "p", text: "The direction a room faces changes the quality of its daylight. In the Northern Hemisphere:" },
      {
        type: "ul",
        items: [
          "**North-facing rooms** get cool, indirect light that stays fairly even all day. Colors tend to look darker and grayer, and cool colors can feel chilly, so warmer undertones often help.",
          "**South-facing rooms** get bright, warm light for much of the day. Colors look lighter and can wash out, so these rooms handle cooler and deeper colors well.",
          "**East-facing rooms** are bright and warm in the morning, then cooler and dimmer later in the day.",
          "**West-facing rooms** are softer in the morning and glow warm in the late afternoon and evening.",
        ],
      },
      { type: "p", text: "In the Southern Hemisphere, swap north and south." },
      {
        type: "p",
        text: "Artificial light matters just as much, since you'll see most rooms after dark. Bulbs are rated by color temperature in kelvins: about 2700K is warm and yellowish, 3000K is a softer white, 4000K is neutral, and 5000K and above looks cool and bluish. Warm bulbs push colors toward yellow, and cool bulbs push them toward blue. Bulbs with a color rendering index (CRI) of 90 or higher show colors more faithfully.",
      },
      {
        type: "p",
        text: "It's also worth checking a color's light reflectance value (LRV), which many paint brands publish. It runs from 0 for black to 100 for pure white and tells you how much light a color bounces back. In a dim room, a color with a higher LRV helps keep the space from feeling dark.",
      },
      {
        type: "image",
        image: "bedroom-calm",
        caption: "The same color can read warmer or cooler depending on the light a room gets.",
      },
      { type: "h2", text: "A visualizer workflow that works" },
      {
        type: "ol",
        items: [
          "**Photograph the room in its usual light.** Daylight, no flash, with the walls you're painting clearly visible. Our [room photography guide](/blog/how-to-photograph-a-room-for-ai-redesigns) has more tips.",
          "**Start broad.** In the [Paint visualizer](/features/paint-visualizer), try four to six colors from different families to find the direction you like.",
          "**Narrow to two or three.** Compare each with the original in the before-and-after view, and look at the whole room, not just the walls.",
          "**Test the light.** If the room changes a lot through the day, photograph it in the morning and again in the evening, then try your finalists on both.",
          "**Think beyond one room.** In open layouts, check how your pick sits next to the colors in adjoining spaces.",
          "**Consider finishes too.** If you're also thinking about new flooring or cabinets, use [Material swap](/features/material-swap) so you judge the whole combination, not the paint alone.",
        ],
      },
      { type: "h2", text: "Sample in real life before you buy" },
      { type: "p", text: "A render gets you to a shortlist. Real paint gets you to a decision. For each finalist:" },
      {
        type: "ul",
        items: [
          "**Pick an actual paint.** A color in a render isn't a paint formula, so choose the closest real color from a manufacturer's range and sample that.",
          "**Go big.** Use a sample pot or a large peel-and-stick sheet. If you're painting a sample, apply two coats to white poster board, ideally around two feet square.",
          "**Keep it off the old color.** Painting samples straight onto a strong existing color skews how you see them. Boards avoid that, and you can move them around.",
          "**Move it around.** Look at each sample beside the window, on the darkest wall, next to the trim and near the floor.",
          "**Watch it for a few days.** Check it in the morning, at midday and in the evening with the lamps you actually use switched on.",
        ],
      },
      {
        type: "p",
        text: "Sheen matters too. Flatter finishes look softer and hide wall imperfections, while higher sheens reflect more light, wipe clean more easily and show every bump. The same color can look slightly different in each, so sample in the sheen you plan to use.",
      },
      { type: "h2", text: "A note on exterior colors" },
      {
        type: "p",
        text: "Outdoor light is far stronger than indoor light, so exterior colors usually look lighter and brighter on the house than on the chip. It often helps to go a shade or two deeper than your first instinct. Consider what isn't changing, such as the roof, brick, stone and window frames, and check any HOA or historic district rules before you commit. The Paint visualizer works on photos of house fronts, too.",
      },
      {
        type: "callout",
        title: "Screens aren't paint",
        text: "Every render is an approximation, shown on a screen with its own brightness and color settings. Always confirm your final choice with a physical sample in the room before you buy paint.",
      },
      {
        type: "cta",
        title: "Try colors on your own walls",
        text: "Upload a photo of a room or your house front and preview a new color before you buy a single sample.",
        cta: { label: "Open the paint visualizer", href: studioHref({ tool: "paint", space: "interior" }) },
      },
    ],
  },
  {
    slug: "interior-design-styles-explained",
    title: "14 Interior Design Styles and How to Recognize Them",
    metaDescription:
      "From Japandi and mid-century modern to art deco and quiet luxury: 14 interior design styles explained, with the details that help you recognize each one.",
    excerpt:
      "Style names get used loosely. Here's what 14 popular interior styles actually are, the telltale details of each, and how to work out which ones suit you.",
    date: "2026-09-28",
    readingMinutes: 5,
    category: "Inspiration",
    heroImage: "living-japandi",
    body: [
      {
        type: "p",
        text: "Style names get used loosely, and many of them overlap. Japandi borrows from Scandinavian design, transitional sits between traditional and contemporary, and quiet luxury shares a lot with minimalism. Knowing what actually defines each style helps you describe what you want, shop with more focus and get better results when you [redesign a room with AI](/features/redesign).",
      },
      {
        type: "p",
        text: "Here are 14 styles worth knowing, grouped loosely by mood, with the details that give each one away.",
      },
      { type: "h2", text: "Calm and natural" },
      { type: "h3", text: "Japandi" },
      {
        type: "p",
        text: "A blend of Japanese and Scandinavian design that pairs Japanese restraint and craftsmanship with Nordic comfort. Expect low, simple furniture, a mix of light and darker woods, a muted palette of stone, sand and charcoal, and plenty of breathing room. **How to spot it:** low platform beds and sofas, paper lanterns, handmade ceramics and a single branch in a vase.",
      },
      { type: "h3", text: "Scandinavian" },
      {
        type: "p",
        text: "Shaped by long, dark Nordic winters, this style is all about light, function and comfort. Walls are white or pale, floors are light wood, and furniture is simple and practical, softened with wool, sheepskin and candles. **How to spot it:** a bright, airy room, pale oak or ash, simple wooden chairs, cozy textiles and small touches of muted color.",
      },
      { type: "h3", text: "Minimalist" },
      {
        type: "p",
        text: "Minimalism strips a room back to what's necessary and lets space and light do the work. Surfaces stay clear, storage is hidden, and every piece has to earn its place. **How to spot it:** bare counters, handleless cabinets, a restrained neutral palette and large stretches of empty wall.",
      },
      { type: "h3", text: "Wabi-sabi" },
      {
        type: "p",
        text: "Rooted in a Japanese worldview that finds beauty in imperfection and the passage of time, wabi-sabi is rawer and more rustic than Japandi. It favors handmade, weathered and natural things over anything polished. **How to spot it:** limewash or plaster walls, irregular pottery, rumpled linen, aged wood and patina left untouched.",
      },
      {
        type: "image",
        image: "bath-spa",
        caption: "Calm, natural styles lean on soft neutrals, natural materials and uncluttered space.",
      },
      { type: "h2", text: "Shaped by an era" },
      { type: "h3", text: "Mid-century modern" },
      {
        type: "p",
        text: "Named for the design of the middle of the 20th century, roughly the mid-1940s through the 1960s, this style pairs clean lines with organic curves and a love of warm wood. **How to spot it:** tapered or splayed legs, walnut and teak sideboards, sculptural lounge chairs, globe pendants, and accents of mustard, olive or burnt orange.",
      },
      { type: "h3", text: "Art deco" },
      {
        type: "p",
        text: "Glamorous and geometric, art deco flourished in the 1920s and 1930s and takes its name from a 1925 decorative arts exhibition in Paris. It loves luxurious materials and strong contrast. **How to spot it:** fan and sunburst motifs, brass and gold accents, velvet upholstery, lacquer, mirror and marble, and jewel tones like emerald and sapphire.",
      },
      { type: "h3", text: "Industrial" },
      {
        type: "p",
        text: "Inspired by converted warehouses and factories, industrial style celebrates a building's raw structure instead of hiding it. **How to spot it:** exposed brick, ductwork and pipes, concrete floors, steel-framed windows, black metal, reclaimed wood, worn leather and bare-bulb lighting.",
      },
      { type: "h2", text: "Relaxed and collected" },
      { type: "h3", text: "Bohemian" },
      {
        type: "p",
        text: "Bohemian rooms look collected over time, from travel, markets and vintage shops. Pattern, texture and color are layered freely, and plants are everywhere. **How to spot it:** layered rugs, textiles from around the world, rattan and macramé, low seating and floor cushions, and a mix of patterns that somehow works.",
      },
      {
        type: "image",
        image: "living-boho",
        caption: "Bohemian rooms mix pattern, texture and plants into something personal and collected.",
      },
      { type: "h3", text: "Coastal" },
      {
        type: "p",
        text: "Light, breezy and relaxed, coastal style takes its cues from beach houses without needing anchors and seashells on every surface. **How to spot it:** white and sand tones with soft blues and greens, slipcovered sofas, linen, jute and rattan, and weathered or whitewashed wood.",
      },
      { type: "h3", text: "Farmhouse" },
      {
        type: "p",
        text: "Farmhouse style brings rural practicality indoors, with honest materials and a lived-in warmth. Its modern version is cleaner and brighter, usually with white walls and black accents. **How to spot it:** shiplap, apron-front sinks, open shelving, sliding barn doors, reclaimed wood and black metal hardware.",
      },
      { type: "h3", text: "Mediterranean" },
      {
        type: "p",
        text: "Inspired by homes around the Mediterranean, from Spain and southern France to Italy and Greece, this style is sun-warmed and textural. **How to spot it:** plaster or limewashed walls, arches, terracotta floors, exposed beams, wrought iron, patterned tile, and either earthy tones or crisp white with blue.",
      },
      { type: "h2", text: "Classic and refined" },
      { type: "h3", text: "Traditional" },
      {
        type: "p",
        text: "Traditional style draws on 18th- and 19th-century European design. It's formal, symmetrical and detailed, with rich wood and classic patterns. **How to spot it:** matching pairs of lamps and chairs, crown molding and wainscoting, rolled-arm sofas, wingback chairs, dark polished wood, and damask, floral or striped fabrics.",
      },
      { type: "h3", text: "Transitional" },
      {
        type: "p",
        text: "Transitional design sits between traditional and contemporary. It keeps classic shapes but simplifies them, trading ornament for clean lines and a calm, neutral palette. **How to spot it:** a classic sofa silhouette in a solid neutral fabric, simple molding, a mix of wood and metal, and restrained accessories.",
      },
      { type: "h3", text: "Quiet luxury" },
      {
        type: "p",
        text: "A newer name for an old idea: rooms that look expensive without ever shouting about it. The label comes from fashion's turn toward understated, logo-free clothing, and the style relies on exceptional materials and tailoring rather than statement pieces. **How to spot it:** tonal palettes of cream, camel, taupe and chocolate, natural stone, fine wool and bouclé, tailored upholstery and custom details.",
      },
      {
        type: "image",
        image: "living-classic",
        caption: "Classic styles favor symmetry, rich materials and tailored details.",
      },
      { type: "h2", text: "How to find your own style" },
      {
        type: "p",
        text: "Most real homes don't fit neatly into one category, and they don't need to. A few ways to work out what you're drawn to:",
      },
      {
        type: "ul",
        items: [
          "**Look for repeats.** Save 20 or 30 rooms you love, then look for what they share. Maybe it's a palette, a material or a furniture shape. That's your style, whatever its label.",
          "**Start from what's staying.** Your floors, architecture and favorite furniture narrow the field. An older home with original trim and molding often suits traditional or transitional, while a concrete loft suits industrial or minimalist.",
          "**Mix with a plan.** Pairing two styles works best when one leads and the other accents, and when they share something, such as a palette or a material.",
          "**Test before you buy.** Run the same photo of your room through two or three styles and compare them side by side. It's a quick way to discover that you love Japandi in theory but prefer warmer mid-century pieces in your own space.",
        ],
      },
      {
        type: "p",
        text: "All 14 styles in this guide are available as presets in Roomwright's **Redesign** and **Virtual staging** tools. In Redesign you can also set the strength, from subtle to bold, to see how far you want to take a room. For more starting points, browse our [interior design ideas](/ideas/interior).",
      },
      {
        type: "callout",
        title: "Styles are a starting point",
        text: "An AI render shows one interpretation of a style in your room. Use it for direction, then choose real pieces that fit your space, your budget and your measurements.",
      },
      {
        type: "cta",
        title: "See your room in a new style",
        text: "Upload a photo, pick one of these 14 styles and compare the result with your room as it is today.",
        cta: { label: "Try a redesign", href: studioHref({ tool: "redesign", space: "interior" }) },
      },
    ],
  },
];
