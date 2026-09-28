import { PLANS } from "@/content/plans";
import type { HelpCategory } from "@/content/types";

// Help center Q&As shown on /help, alongside the contact form.
// Answers are plain text (no markdown), so they read correctly in any FAQ component.

// Read the beta allowance from the pricing data so this page never drifts from /pricing.
const betaAllowance = PLANS.find((plan) => plan.id === "free")?.renders ?? "a daily render allowance";

export const helpCategories: HelpCategory[] = [
  {
    id: "getting-started",
    title: "Getting started",
    icon: "sparkles",
    faqs: [
      {
        q: "What is Roomwright?",
        a: "Roomwright is an AI design studio for real spaces. Upload a photo of a room, a house facade or a garden, choose what you'd like to change, and you'll get a photoreal redesign of your own space. You can restyle a room, stage an empty one, clear out clutter, preview paint colors, swap materials, replace a dull sky, turn a sketch into a render or make one precise edit. You can also describe a space or a piece of furniture and generate it from scratch.",
      },
      {
        q: "How do I make my first design?",
        a: "Create a free account with your email address and a password, then open the studio. Pick a tool (Redesign is a good place to start), choose whether you're working on an interior, an exterior or a garden, and upload your photo. Select a room type and a style, add an instruction if you'd like, and generate. Your result is saved to your design history, so you can come back to it later or try again with different settings.",
      },
      {
        q: "Is Roomwright free?",
        a: "Yes. Roomwright is in public beta, and every account is free, with a daily render allowance. You don't need a payment card to sign up. The paid plans on our Pricing page show what we plan to offer after the beta. Nothing is charged yet, and once paid plans launch, you'll only pay if you choose one.",
      },
      {
        q: "What does public beta mean for me?",
        a: "It means Roomwright is new and still changing. You get free access to the live tools while we improve them, and you may notice features being added, adjusted or occasionally misbehaving. Some features on our site are marked coming soon and aren't available yet. Your feedback shapes what we build next, so if something doesn't work the way you expect, tell us through the contact form on this page. You can see what's changed in our changelog and release notes.",
      },
      {
        q: "What kinds of spaces can I design?",
        a: "Interiors, exteriors and gardens. Indoors, that includes living rooms, kitchens, bedrooms, bathrooms, home offices, kids' rooms, basements and attics, as well as commercial spaces like cafés, shops and offices. Outside, you can work on house fronts, porches, garages, townhouses, apartment buildings and cabins. In the garden, you can redesign backyards, front yards, patios, decks, pool areas, courtyards and rooftop terraces.",
      },
      {
        q: "How do I save or download a result?",
        a: "Every result is saved to your design history automatically, so it's there the next time you sign in. You can also download results to your device; during the beta, downloads are standard resolution. If a result matters to you, keep a downloaded copy, because deleting a design or your account removes it from Roomwright.",
      },
    ],
  },
  {
    id: "photos-results",
    title: "Photos and results",
    icon: "camera",
    faqs: [
      {
        q: "How do I take a photo that gives good results?",
        a: "Shoot in daylight with the lights on and the curtains open. Stand in a corner or a doorway so you capture as much of the room as you can, and hold your phone at about chest height, level and in landscape orientation. Keep vertical lines straight, avoid the ultra-wide lens (it bends walls and furniture), and make sure the photo is sharp. One room per photo works best.",
      },
      {
        q: "Any tips for exteriors and gardens?",
        a: "For a house front, stand far enough back to fit the whole facade, roofline included, and shoot as straight on as you can. Overcast days give even light without harsh shadows, and you can swap in a better sky later with Sky & light. Move cars, trash cans and hoses out of the frame if you can. For gardens, include the edges of the space, like fences, walls or paths, so the redesign fits the real boundaries.",
      },
      {
        q: "Why do I get a different result each time?",
        a: "AI image models create every result fresh, so the same photo and settings can produce different takes. That's useful: run a few versions and keep the one you like best. For more consistent results, be specific in your instruction, stick with one style and use a lower strength setting. Keep in mind that every version counts as a render toward your daily allowance.",
      },
      {
        q: "Why did a window move or a wall change?",
        a: "AI models sometimes misread a photo, especially one that's dark, blurry, cluttered or taken at an unusual angle, and they can invent details like an extra doorway or a warped shelf. To keep the structure intact, start from a clear, level photo, choose the Subtle or Balanced strength, and say what must stay in your instruction, for example \"keep the windows and fireplace exactly as they are.\" If most of a result works, you can download it and use Precision edit to fix the one detail that doesn't.",
      },
      {
        q: "Are the colors, materials and sizes in my results accurate?",
        a: "Treat them as close approximations. Colors shift between screens and lighting conditions, materials are generic rather than specific products, and the AI doesn't measure your space, so furniture and fixtures may not be true to scale. Results are concepts to help you decide, not plans or construction documents. Before you buy or build, look at real samples in your own light and confirm the details with a qualified professional.",
      },
      {
        q: "Can I use my results in property listings?",
        a: "Yes, as long as you follow our Terms of Service and the rules in your market. Your MLS, brokerage, listing site or local law may require virtually staged or edited images to be disclosed, and we recommend labeling them even when it isn't required. Never use an edit to hide or play down a defect, such as water damage, cracks or a damaged roof, or to misrepresent permanent features like views or room sizes. It's good practice to keep the original photo alongside the edited one.",
      },
    ],
  },
  {
    id: "tools",
    title: "Design tools",
    icon: "wand",
    faqs: [
      {
        q: "Which tool should I use?",
        a: "Start with what you want to see. Redesign restyles a whole space. Virtual staging furnishes an empty room, and Decor staging adds rugs, art, plants and accessories around the furniture you already have. Declutter & remove clears out furniture and clutter. Paint visualizer previews a wall or facade color, and Material swap changes floors, walls, countertops, cabinets, ceilings, siding or roofing. Sky & light replaces a dull sky on exteriors and gardens. Sketch to render turns a drawing into a photoreal image, Precision edit changes one specific thing, and Style transfer borrows the look of an inspiration photo. Text to design and Furniture creator start from a description instead of a photo.",
      },
      {
        q: "What's the difference between Redesign, Virtual staging and Decor staging?",
        a: "Redesign reimagines the whole space in the style you pick, which can include furniture, finishes and decor, while keeping the room's structure. Virtual staging is for empty rooms: it adds furniture in the style you choose. Decor staging is the lightest touch: it adds rugs, art, plants and accessories without replacing the furniture that's already there.",
      },
      {
        q: "What does the strength setting do?",
        a: "Strength controls how far a result can move away from your photo. Subtle keeps most of what's there and suits refreshes and small changes. Balanced gives a noticeable restyle. Bold allows a full transformation, which is great for exploring but more likely to change details you wanted to keep. You'll find it in Redesign and Style transfer. If a result drifts too far from your space, try a lower setting.",
      },
      {
        q: "How do I write a good instruction?",
        a: "Be specific and concrete. Name the object, where it is and what you want instead, including materials and colors, for example: \"Replace the sofa under the window with a low sofa in oatmeal linen.\" Ask for one or two changes at a time rather than everything at once, and say what should stay the same. Precision edit, Text to design and Furniture creator need an instruction. In the other tools it's optional, but it helps steer the result.",
      },
      {
        q: "How does Style transfer use my inspiration photo?",
        a: "Upload a photo of your space and a reference image whose look you love. Style transfer carries the reference's overall feel, like its colors, materials and mood, over to your space while aiming to keep your layout. Use the strength setting to choose how strongly the reference comes through. Only use reference images you have the right to use, such as your own photos or images you have permission to use.",
      },
      {
        q: "Can I create a design without a photo?",
        a: "Yes. Text to design generates a space from a written description, which is handy when you're planning something that doesn't exist yet. Furniture creator designs a one-off piece, like a sideboard or a reading chair, from a description. If you have a hand sketch or a line drawing, Sketch to render turns it into a photoreal image; you upload the drawing instead of a photo.",
      },
    ],
  },
  {
    id: "account-billing",
    title: "Account and billing",
    icon: "key",
    faqs: [
      {
        q: "How do I create an account?",
        a: "Sign up with your email address and a password. You can add a display name if you'd like, but it's optional. You don't need a payment card, because Roomwright is free during the beta. A session cookie keeps you signed in, so if your browser blocks cookies, you won't be able to stay logged in.",
      },
      {
        q: "How does the daily render allowance work?",
        a: `Every account currently gets ${betaAllowance}. Every render counts toward it, whether you run it in the studio or through the API. When you've used up the day's renders, you can pick up again the next day. We may adjust the allowance during the beta to keep Roomwright running smoothly for everyone, and the Pricing page always shows the current amount.`,
      },
      {
        q: "I can't sign in. What should I do?",
        a: "Check that you're using the email address you signed up with and that caps lock is off. Make sure your browser allows cookies for Roomwright, since a session cookie keeps you signed in. If you still can't get in, send us a message through the contact form on this page, using the email address on your account, and we'll help you regain access.",
      },
      {
        q: "How do I delete a design?",
        a: "You can delete any individual design in the app. It's removed from your history and deleted from our storage, and it can't be restored, so download a copy first if you might want it later. Deleting one design doesn't affect your other designs or your account.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Account settings in the app and choose to delete your account. This permanently removes your account and your designs, and it can't be undone, so download anything you want to keep first. If you run into trouble, contact us through the form on this page from the email address on your account.",
      },
      {
        q: "Will I be charged when paid plans launch?",
        a: "Only if you choose a paid plan. We'll announce paid plans before they start, and you'll decide whether to upgrade. Payments will be handled by a third-party payment processor, so your card details won't be stored on our servers. Monthly plans can be canceled anytime and stay active until the end of the period you've paid for. Our Refund Policy explains how refunds will work.",
      },
    ],
  },
  {
    id: "api",
    title: "API",
    icon: "code",
    faqs: [
      {
        q: "Does Roomwright have an API?",
        a: "Yes. The API lets you run Roomwright renders from your own software, for example to add design previews to a listings workflow or an internal tool. During the beta, any account can create API keys. The API documentation, linked in the footer of our site, explains how to authenticate and send requests. After the beta, API access may depend on your plan, and the Pricing page will show which plans include it.",
      },
      {
        q: "How do I create an API key?",
        a: "Sign in, open Account settings and create a new API key. Copy it somewhere safe, such as an environment variable on your server or a secrets manager, and use it to authenticate your requests as described in the API documentation.",
      },
      {
        q: "Does API usage count toward my allowance?",
        a: "Yes. Renders you request through the API count toward the same daily allowance as renders in the studio, so the two share one pool. If you're running a batch, check how many renders you have left first so a job doesn't stop partway through.",
      },
      {
        q: "How do I keep my API key safe?",
        a: "Treat it like a password. Keep it on your server, never in a mobile app, browser code or a public code repository, and don't paste it into emails, chats or screenshots. Anyone who has your key can use your allowance, so if you think a key has been exposed, revoke it in Account settings and create a new one.",
      },
      {
        q: "Can I build Roomwright into my own product?",
        a: "Yes, within our Terms of Service. If you offer features built on the API to your own users, you're responsible for your product, for telling your users how their images are processed, and for making sure their use follows our acceptable use rules. If you need more volume, dedicated capacity or a ready-made widget for your site, tell us about your project through our Enterprise or White Label Widget pages.",
      },
    ],
  },
  {
    id: "privacy-data",
    title: "Privacy and data",
    icon: "shield",
    faqs: [
      {
        q: "Do you use my photos to train AI models?",
        a: "We don't use your photos to train our own AI models. To create a result, we send your photo, any reference image and your instructions to a third-party AI model provider, such as Replicate or OpenAI depending on the model, solely to generate that result. Those providers handle data under their own terms and privacy policies. Our Privacy Policy has the details.",
      },
      {
        q: "Who can see my photos and designs?",
        a: "Your uploads and designs are stored with your account so you can see them in your history. We don't publish them, sell them or use them in our marketing without your permission. Inside Roomwright, access is limited to what's needed to run the service, investigate problems or abuse, and help you when you ask us to. The AI providers that generate your results receive the images and instructions needed for each render.",
      },
      {
        q: "Do you sell my data?",
        a: "No. We don't sell personal data, and we don't share it for advertising. We share information only with the service providers that help us run Roomwright, such as our hosting and AI providers, when the law requires it, or with your permission.",
      },
      {
        q: "What cookies does Roomwright use?",
        a: "Only strictly necessary ones, such as the session cookie that keeps you signed in. We don't use advertising cookies, and we don't use third-party analytics at present. If that ever changes, we'll update our Privacy Policy first and ask for your consent where the law requires it.",
      },
      {
        q: "How do I get a copy of my data or delete it?",
        a: "You can download your results and delete individual designs in the app, and you can delete your account and all your designs from Account settings. For a copy of the personal information we hold about you, a correction or any other privacy request, send us a message through the contact form on this page using the email address on your account. We may need to confirm it's you before we act on a request.",
      },
      {
        q: "What should I keep out of my photos?",
        a: "Don't upload photos of people unless they've agreed, and for children, only with a parent's or guardian's permission. It's also worth moving or cropping out personal items like family photos, mail, documents and screens. For exteriors you plan to share, consider leaving out house numbers and license plates. Phone photos can also carry embedded location data; if you'd rather not share it, turn off location tagging in your camera settings or remove the data before uploading.",
      },
    ],
  },
];
