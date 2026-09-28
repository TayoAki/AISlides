import type { DocPage } from "@/content/types";

// Legal pages: /terms, /privacy, /refund-policy.
// Plain-English documents written for the public beta. Before relying on them,
// have them reviewed by a lawyer and confirm the operating company and jurisdiction.

const UPDATED = "2026-09-28";

export const legalPages: DocPage[] = [
  {
    slug: "terms",
    navLabel: "Terms of Service",
    metaTitle: "Terms of Service",
    metaDescription:
      "The terms for using Roomwright's website, design studio and API during the public beta, in plain English: your content, AI outputs, fair use and more.",
    eyebrow: "Legal",
    title: "Terms of Service",
    intro:
      "These terms set out the rules for using Roomwright. We've kept them as plain as we can, but please read them carefully, because by using Roomwright you agree to them.",
    updated: UPDATED,
    blocks: [
      { type: "h2", text: "The short version" },
      { type: "p", text: "This summary is here to help you find your way around. The full terms below are what actually apply." },
      {
        type: "ul",
        items: [
          "You must be at least 16 to use Roomwright.",
          "Roomwright is in public beta. It's free during the beta, with a daily render allowance, and features may change.",
          "You keep ownership of the photos you upload. You let us process them, including through third-party AI providers, only to run Roomwright for you.",
          "Only upload photos you have the right to use, and never upload images of people without their consent.",
          "Results are AI-generated concepts. They aren't professional advice or construction documents.",
          "If you use Roomwright in real estate, disclose edited or virtually staged images where required, and never use edits to hide defects.",
          "You can stop using Roomwright and delete your account at any time.",
        ],
      },

      { type: "h2", text: "1. Agreeing to these terms" },
      {
        type: "p",
        text: "These Terms of Service (the **Terms**) apply to your use of Roomwright, including our website, the Roomwright design studio, our API and any related services (together, the **Service**). In these Terms, **Roomwright**, **we**, **us** and **our** mean the company that operates Roomwright, and **you** means the person or organization using the Service.",
      },
      {
        type: "p",
        text: "By creating an account or using the Service, you agree to these Terms. If you use Roomwright on behalf of a company or other organization, you confirm that you're authorized to accept these Terms for it. If you don't agree, please don't use the Service.",
      },
      {
        type: "p",
        text: "Our [Privacy Policy](/privacy) explains how we handle personal information, and our [Refund Policy](/refund-policy) explains how cancellations and refunds will work for paid plans. Please read them alongside these Terms.",
      },

      { type: "h2", text: "2. Who can use Roomwright" },
      {
        type: "p",
        text: "You must be at least 16 years old to use the Service. If you're under the age of majority where you live, you may use it only with the permission of a parent or guardian who agrees to these Terms on your behalf.",
      },
      {
        type: "p",
        text: "You can't use the Service if the law prohibits it, or if we've previously closed your account for breaking these Terms, unless we've told you in writing that you may.",
      },

      { type: "h2", text: "3. Your account" },
      {
        type: "p",
        text: "You need an account to use most of the Service, including the studio, your design history and the API. To create one, you give us an email address and a password, and you can add a display name if you'd like. When you have an account:",
      },
      {
        type: "ul",
        items: [
          "Use an email address you control. It identifies your account, and it's how we'll contact you.",
          "Choose a strong password that you don't use anywhere else, and keep it to yourself.",
          "Don't choose a display name that impersonates someone or is offensive or misleading.",
          "You're responsible for activity that happens under your account, including activity through your API keys.",
        ],
      },
      {
        type: "p",
        text: "If you think someone has accessed your account without permission, tell us right away through the [contact form](/help#contact).",
      },

      { type: "h2", text: "4. The public beta, free use and limits" },
      {
        type: "p",
        text: "Roomwright is in public beta. The Service is new and still changing, and it may not always work as expected. During the beta, we may add, change or remove features, tools, styles and AI models, and some features may be marked as coming soon or experimental.",
      },
      {
        type: "p",
        text: "The Service is free during the beta. Each account gets a daily render allowance, which is shown on our [Pricing page](/pricing), and renders you run in the studio and through the API count toward the same allowance. We may change the allowance or set other reasonable limits, such as rate limits or upload limits, to keep the Service fair and reliable for everyone.",
      },
      {
        type: "p",
        text: "Please don't try to get around these limits, for example by opening extra accounts to get more renders or by scripting the studio instead of using the API.",
      },
      { type: "h3", text: "Paid plans in the future" },
      {
        type: "p",
        text: "The paid plans on our Pricing page show what we intend to offer after the beta. Nothing is charged during the beta, and you won't be charged unless you choose a paid plan. We'll announce paid plans before they launch, and the price, billing period and any plan-specific terms will be shown to you before you buy. Payments will be handled by a third-party payment processor, and your card details won't be stored on our servers. Our [Refund Policy](/refund-policy) explains cancellations and refunds.",
      },

      { type: "h2", text: "5. Acceptable use" },
      { type: "p", text: "Roomwright is for exploring ideas for real spaces. When you use it, you agree not to:" },
      {
        type: "ul",
        items: [
          "Upload photos, reference images or other content that you don't own or don't have permission to use",
          "Upload images of identifiable people without their consent, or images of a child without the permission of the child's parent or guardian",
          "Create sexual content, anything that sexualizes minors, or content that's hateful, harassing, violent or threatening",
          "Use the Service to deceive people, for example by presenting edited property images as unaltered photos where that would mislead, or by using edits to hide defects",
          "Infringe anyone's intellectual property, privacy or other rights, or break any law",
          "Impersonate any person or organization, or misrepresent your connection with them",
          "Get around usage limits, access controls or security measures, or access accounts or data that aren't yours",
          "Interfere with the Service, for example by overloading it, introducing malware, or probing or testing its security without our written permission",
          "Scrape or collect data from the Service by automated means, other than through the API as documented",
          "Copy, modify, reverse engineer or resell the Service, except where the law allows it or we've agreed in writing",
          "Use the Service to build a competing product or service",
        ],
      },
      {
        type: "p",
        text: "If you break these rules, we may remove content, limit features, or suspend or close your account. Where it's appropriate and lawful, we'll tell you why. If you believe you've found a security vulnerability, please report it through the [contact form](/help#contact) instead of testing it further.",
      },

      { type: "h2", text: "6. Real estate and professional use" },
      {
        type: "p",
        text: "Many people use Roomwright to market properties and to present ideas to clients. If you do, you're responsible for how you use the results, and you agree to:",
      },
      {
        type: "ul",
        items: [
          "Disclose that images are virtually staged or digitally altered wherever the law, your MLS, your brokerage or a listing platform requires it. We recommend labeling them clearly even where it isn't required.",
          "Never use edits to hide, remove or play down material defects or conditions, such as water damage, cracks, mold, roof damage or anything else a buyer or renter would reasonably want to know.",
          "Not misrepresent a property's permanent features, such as its size, layout, views, fixtures or surroundings.",
          "Keep your original photos, and show them alongside edited versions where rules or good practice call for it.",
          "Make clear to clients that results are AI-generated concepts, not final designs, quotes or plans.",
        ],
      },
      {
        type: "p",
        text: "We don't review how results are used, and following the rules that apply to your profession and your market is your responsibility.",
      },

      { type: "h2", text: "7. Your content" },
      {
        type: "p",
        text: "**Your content** means the photos, reference or inspiration images, sketches, prompts, instructions and settings you submit to the Service. You keep all the rights you have in your content.",
      },
      {
        type: "p",
        text: "When you upload content, you confirm that you own it or have permission to use it this way, that you have the consent of anyone who can be identified in it, and that using it with Roomwright won't break the law or infringe anyone's rights.",
      },
      { type: "h3", text: "The permission you give us" },
      {
        type: "p",
        text: "To run the Service, we need your permission to handle your content and your results. You give us a worldwide, non-exclusive, royalty-free license to host, store, copy, process, transmit and display them, only as needed to provide the Service to you, keep it secure, prevent abuse and comply with the law. That includes sending your content to third-party AI model providers so they can generate your results, and storing your uploads and results so you can see them in your design history.",
      },
      {
        type: "p",
        text: "**We don't use your photos to train our own AI models, and we don't sell your personal information.** This license ends when you delete the content or your account, except for copies we must keep to comply with the law and copies that remain for a limited time in backups before they're overwritten.",
      },
      {
        type: "p",
        text: "We don't review everything people upload. We may look at content when we need to operate the Service, investigate a problem you've reported or check for a breach of these Terms, and we may remove content that breaks them.",
      },

      { type: "h2", text: "8. AI outputs" },
      {
        type: "p",
        text: "**Outputs** are the images and other results the Service generates for you. They're created by AI models, and that comes with important limits:",
      },
      {
        type: "ul",
        items: [
          "Outputs are concepts for exploring ideas. They aren't professional advice of any kind, including design, architectural, engineering, construction, legal, financial or real estate advice.",
          "Outputs aren't plans, specifications or construction documents. They may show dimensions, structures, materials, colors, lighting or fixtures inaccurately, or in ways that aren't possible, safe or permitted where you live.",
          "Colors and materials are approximations. They don't represent specific products and may look different in real life.",
          "Before you build, remodel, buy or make a financial decision, check your plans with qualified professionals and confirm local codes and permit requirements.",
          "Results vary from one run to the next. Other users may receive similar outputs, so outputs aren't guaranteed to be unique.",
          "Outputs may unintentionally resemble existing designs, products or artworks. You're responsible for making sure your use of an output doesn't infringe anyone's rights.",
        ],
      },
      { type: "h3", text: "Who owns outputs" },
      {
        type: "p",
        text: "As between you and Roomwright, you own your outputs, to the extent the law recognizes rights in them, and we assign to you any rights we may have in them. Some places don't grant copyright in AI-generated images, so we can't promise that your outputs are protected by copyright.",
      },
      { type: "h3", text: "How you can use outputs" },
      {
        type: "p",
        text: "During the beta, you may use your outputs for personal or commercial purposes, as long as you follow these Terms, including the real estate rules in section 6. If we later link certain uses, such as commercial use, to specific paid plans, we'll explain that on our [Pricing page](/pricing) before the change takes effect.",
      },

      { type: "h2", text: "9. Our intellectual property" },
      {
        type: "p",
        text: "The Service, including our software, website, designs, text, graphics, logos and the Roomwright name, belongs to us or our licensors and is protected by law. Apart from your content and your outputs, these Terms don't give you any rights in it, except a limited, personal, non-exclusive and non-transferable right to use the Service as these Terms allow. That right ends if your access to the Service ends.",
      },
      {
        type: "p",
        text: "Please don't use our name or logo in a way that suggests we endorse you or your work, unless we've agreed to it in writing. Writers and journalists can find guidance on referring to Roomwright on our [Press page](/press).",
      },
      { type: "h3", text: "Feedback" },
      {
        type: "p",
        text: "If you send us ideas, suggestions or feedback, we may use them to improve Roomwright without owing you anything for them. We appreciate it: feedback is how a beta gets better.",
      },

      { type: "h2", text: "10. Using the API" },
      {
        type: "p",
        text: "You can create API keys in Account settings and use them to access the Service from your own software, as described in our [API documentation](/docs/api). When you use the API:",
      },
      {
        type: "ul",
        items: [
          "Keep your API keys secret. Store them on a server, never in client-side code, public repositories or anywhere others can see them.",
          "You're responsible for all activity under your keys. If you think a key has been exposed, revoke it and create a new one.",
          "API renders count toward the same daily allowance as the studio, and we may set rate limits or other usage limits.",
          "If you use the API to offer features to your own users, you're responsible for your product, for giving your users any notices the law requires, including about how their images are processed, and for making sure their use follows the acceptable use rules in section 5.",
          "Don't resell or redistribute access to the Service as a standalone product unless we've agreed to it in writing.",
        ],
      },
      {
        type: "p",
        text: "The API is part of the beta. We may change it, including its endpoints, parameters and limits, and we'll try to give advance notice of significant changes where we reasonably can. We may suspend or revoke API access that's being misused or that puts the Service at risk.",
      },

      { type: "h2", text: "11. Third-party services" },
      {
        type: "p",
        text: "Roomwright relies on other companies to work, including hosting providers, third-party AI model providers that generate results and, once paid plans launch, a payment processor. These providers handle data under their own terms and policies. Our [Privacy Policy](/privacy) explains what information we share with them and why.",
      },
      {
        type: "p",
        text: "The Service may link to websites or services run by others. We don't control them and aren't responsible for their content, products or practices.",
      },

      { type: "h2", text: "12. Disclaimers" },
      {
        type: "p",
        text: "We work hard to make Roomwright useful and reliable, but it's a beta product built on AI models, and AI models make mistakes.",
      },
      {
        type: "p",
        text: "**To the fullest extent the law allows, the Service and all outputs are provided as is and as available, without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, title, non-infringement and accuracy.**",
      },
      {
        type: "p",
        text: "We don't promise that the Service will be uninterrupted, secure or error-free, that outputs will be accurate or suitable for your purpose, or that content stored in the Service will never be lost. Please keep your own copies of any outputs that matter to you. Some places don't allow certain warranties to be excluded, so some of these disclaimers may not apply to you.",
      },

      { type: "h2", text: "13. Limitation of liability" },
      {
        type: "p",
        text: "**To the fullest extent the law allows, Roomwright and its affiliates, officers, employees, agents and suppliers won't be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data, goodwill or business opportunities, arising out of or related to these Terms or the Service, even if we've been told such damages are possible.** This includes losses that result from decisions you make based on outputs, such as design, renovation, purchase or sale decisions.",
      },
      {
        type: "p",
        text: "**To the fullest extent the law allows, our total liability for all claims relating to the Service is limited to the greater of the amount you paid us for the Service in the 12 months before the event that gave rise to the claim, or 100 US dollars.**",
      },
      {
        type: "p",
        text: "Nothing in these Terms limits or excludes liability that can't be limited or excluded by law, such as liability for fraud or, where applicable, for death or personal injury caused by negligence. If you're a consumer, you also keep any rights you have under consumer protection laws that can't be waived.",
      },

      { type: "h2", text: "14. Responsibility for your use" },
      {
        type: "p",
        text: "If someone brings a claim against us because of content you uploaded, the way you used outputs, or your breach of these Terms or the law, you agree to cover the reasonable losses and costs that result, including legal fees, to the extent the law allows. This doesn't apply to the extent a loss was caused by our own breach or wrongdoing, and we'll let you know promptly about any such claim.",
      },

      { type: "h2", text: "15. Suspension and termination" },
      {
        type: "p",
        text: "You can stop using Roomwright at any time. You can delete individual designs in the app, and you can delete your account from Account settings, which also removes your designs.",
      },
      {
        type: "p",
        text: "We may suspend or close your account, or limit your access, if you break these Terms, if the law requires it, if your use creates risk or harm for other users, for us or for anyone else, or if your account appears to be used fraudulently. Where it's reasonable, we'll tell you first and give you a chance to fix the problem.",
      },
      {
        type: "p",
        text: "We may also end the beta, or stop offering the Service or part of it. If we decide to shut down the Service entirely, we'll give you reasonable advance notice where we can, so you have time to download your designs.",
      },
      {
        type: "p",
        text: "Sections that by their nature should continue after your account ends will continue to apply, including those about outputs, intellectual property, disclaimers, limitation of liability, responsibility for your use and governing law.",
      },

      { type: "h2", text: "16. Changes to these Terms" },
      {
        type: "p",
        text: "We may update these Terms as Roomwright grows, for example when paid plans launch, when we add features or when the law changes. The Last updated date on this page shows when they last changed. If a change is material, we'll let you know in advance, by email or with a notice in the app, and tell you when it takes effect.",
      },
      {
        type: "p",
        text: "If you keep using the Service after the changes take effect, you accept the updated Terms. If you don't agree with them, please stop using the Service and delete your account.",
      },

      { type: "h2", text: "17. Governing law and disputes" },
      {
        type: "p",
        text: "If you have a concern, please contact us first through the [contact form](/help#contact). Most issues can be resolved quickly that way.",
      },
      {
        type: "p",
        text: "These Terms are governed by the laws of the place where Roomwright's operating company is established, without regard to conflict-of-law rules, and disputes will be handled by the courts of that place. If you're a consumer and the law where you live gives you the right to bring claims in your local courts, or to rely on mandatory protections of your local law, these Terms don't take those rights away.",
      },

      { type: "h2", text: "18. General" },
      {
        type: "ul",
        items: [
          "These Terms, together with any plan terms shown to you when you buy, make up the whole agreement between you and us about the Service.",
          "If any part of these Terms is found unenforceable, the rest stays in effect.",
          "If we don't enforce a provision right away, we haven't waived our right to enforce it later.",
          "You can't transfer your rights or obligations under these Terms without our consent. We may transfer ours as part of a merger, acquisition, reorganization or sale of assets, and these Terms will continue to protect you.",
          "We aren't responsible for delays or failures caused by events outside our reasonable control.",
          "These Terms don't create a partnership, employment or agency relationship between you and us.",
        ],
      },

      { type: "h2", text: "19. Contact us" },
      {
        type: "p",
        text: "Questions about these Terms? Send us a message through the [contact form on our Help page](/help#contact).",
      },
    ],
  },

  {
    slug: "privacy",
    navLabel: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Roomwright collects, uses and protects your information, including the photos you upload, how AI processing works, and the choices and rights you have.",
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This policy explains what information Roomwright collects, how we use it, who we share it with and the choices you have. You're trusting us with photos of your home, so we've tried to be clear and specific.",
    updated: UPDATED,
    blocks: [
      { type: "h2", text: "The short version" },
      {
        type: "ul",
        items: [
          "We collect what we need to run Roomwright: your account details, the photos and instructions you submit, the designs you create and basic technical information.",
          "To generate results, we send your photos and prompts to third-party AI model providers, solely for that purpose.",
          "We don't sell your personal information, and we don't use your photos to train our own AI models.",
          "We only use strictly necessary cookies, such as the session cookie that keeps you signed in. There are no advertising cookies and, at present, no third-party analytics.",
          "You can delete individual designs in the app, and delete your account and designs from Account settings.",
          "You can ask to access, correct, export or delete your information through the contact form on our Help page.",
        ],
      },

      { type: "h2", text: "1. Who this policy covers" },
      {
        type: "p",
        text: "This policy applies to personal information we handle when you visit our website, use the Roomwright studio or API (together, the **Service**), or get in touch with us. **Roomwright**, **we** and **us** mean the company that operates Roomwright, which is responsible for your personal information as described here.",
      },
      {
        type: "p",
        text: "If you use a feature that another company has built on our API, that company's privacy policy also applies, and it's responsible for the information it collects from you.",
      },

      { type: "h2", text: "2. Information we collect" },
      { type: "h3", text: "Information you give us" },
      {
        type: "ul",
        items: [
          "Account details: your email address and password when you sign up, and a display name if you choose one. We store passwords only as one-way hashes, never in readable form.",
          "Your content: the photos you upload, such as rooms, facades, gardens and sketches, any reference or inspiration images, and the prompts, instructions and settings you choose. Photos can contain personal information, such as people, personal belongings, a house number or embedded details like where the photo was taken.",
          "Messages and forms: what you send us through the contact form on our Help page or other forms on our site, such as early-access sign-ups or business inquiries. This usually includes your email address and message, and anything else you choose to add, like your company name.",
        ],
      },
      { type: "h3", text: "Information created when you use Roomwright" },
      {
        type: "ul",
        items: [
          "Designs: the images the Service generates for you, stored with your account so you can see them in your design history.",
          "Usage records: the tools and settings you use, when you run renders and how many you've run, so we can show your history, apply the daily allowance and fix problems.",
          "API keys and activity: the API keys you create and records of the renders requested with them, which count toward your allowance.",
        ],
      },
      { type: "h3", text: "Information collected automatically" },
      {
        type: "p",
        text: "When you use the Service, our servers and hosting providers automatically record technical information, such as your IP address, browser and device type, the pages or endpoints requested, dates and times, and error details. We use it to keep the Service secure and working and to investigate problems. We use cookies only as described in section 7.",
      },
      { type: "h3", text: "Payment information in the future" },
      {
        type: "p",
        text: "There are no payments during the beta. When paid plans launch, payments will be handled by a third-party payment processor. Your card details will go to that processor and won't be stored on our servers. We'll receive only what we need to manage your plan, such as which plan you're on, your payment status and your billing history.",
      },

      { type: "h2", text: "3. How we use your information" },
      { type: "p", text: "We use personal information to:" },
      {
        type: "ul",
        items: [
          "Create and secure your account and keep you signed in",
          "Generate designs from your photos and instructions, and keep them in your design history",
          "Apply the daily render allowance and other usage limits across the studio and the API",
          "Reply to your messages and requests, and send you service messages about your account, security, the beta or changes to our terms and policies",
          "Prevent fraud, abuse and misuse, and enforce our Terms of Service",
          "Understand how the Service is used overall, fix bugs and improve Roomwright, using usage records and feedback rather than training models on your photos",
          "Comply with the law and respond to lawful requests",
        ],
      },
      {
        type: "p",
        text: "If we send marketing emails in the future, such as news about new features, we'll do so only where the law allows, and every one will include a way to unsubscribe.",
      },
      { type: "h3", text: "Legal bases" },
      {
        type: "p",
        text: "If you're in the European Economic Area, the United Kingdom or another place with similar laws, we rely on these legal bases:",
      },
      {
        type: "ul",
        items: [
          "Contract: to provide the Service you signed up for, including generating and storing your designs",
          "Legitimate interests: to keep the Service secure, prevent abuse, understand usage and improve Roomwright, in ways that don't override your rights",
          "Consent: where we ask for it. You can withdraw your consent at any time.",
          "Legal obligation: where the law requires us to process or keep information",
        ],
      },

      { type: "h2", text: "4. How AI processing works" },
      {
        type: "p",
        text: "When you run a render, we send the images, instructions and settings needed for that render to a third-party AI model provider, such as Replicate or OpenAI, depending on the model that handles the request. The provider uses them to generate your result and returns it to us, and we store it in your design history.",
      },
      {
        type: "p",
        text: "**We send this information solely to generate your results.** We don't sell it, and we don't use your photos to train our own AI models.",
      },
      {
        type: "p",
        text: "AI providers process data under their own terms and privacy policies, and they may keep it for a limited time, for example to run their service or prevent abuse. We send them only what a render needs. The providers we use may change as models improve, and we'll update this policy when they do.",
      },

      { type: "h2", text: "5. Storage and retention" },
      {
        type: "p",
        text: "Your uploads and designs are stored on our hosting infrastructure so you can come back to them. We keep your information for as long as your account is open and we need it to provide the Service, unless you delete it sooner.",
      },
      {
        type: "ul",
        items: [
          "Designs: when you delete a design in the app, we remove it from your history and delete it from our active storage.",
          "Your account: when you delete your account in Account settings, we delete your account details, your designs and your uploads from our active systems.",
          "Messages: we keep messages you send us for as long as we need them to handle your request and keep a record of our conversation.",
          "Technical logs: we keep logs for a limited period for security and troubleshooting.",
        ],
      },
      {
        type: "p",
        text: "Deleted information can remain in backups for a limited time before it's overwritten. We may keep some information for longer where the law requires it, or where we need it to resolve disputes, prevent abuse or enforce our Terms, such as a record that an account was closed for breaking them.",
      },

      { type: "h2", text: "6. When we share information" },
      {
        type: "p",
        text: "We don't sell your personal information, and we don't share it for targeted advertising. We share it only in these situations:",
      },
      {
        type: "ul",
        items: [
          "Service providers: companies that help us run Roomwright, such as hosting and storage providers, AI model providers and, once paid plans launch, a payment processor. They receive only what they need to provide their services.",
          "Legal reasons: when we believe in good faith that disclosure is required by law or legal process, or needed to protect the rights, property or safety of our users, the public or Roomwright.",
          "Business changes: if Roomwright is involved in a merger, acquisition, reorganization or sale of assets, information may be transferred as part of that transaction. This policy, or one that protects you at least as well, will continue to apply.",
          "With your permission: when you ask us to share something or agree that we can.",
        ],
      },
      {
        type: "p",
        text: "When you download an output and share it yourself, how it's used from then on is up to you and the services you share it with.",
      },

      { type: "h2", text: "7. Cookies" },
      {
        type: "p",
        text: "We only use strictly necessary cookies. The main one is a session cookie that keeps you signed in. These cookies are essential for the Service to work: you can block cookies in your browser settings, but you won't be able to sign in if you do.",
      },
      {
        type: "p",
        text: "We don't use advertising cookies, and we don't use third-party analytics at present. If that changes, we'll update this policy first and ask for your consent where the law requires it.",
      },

      { type: "h2", text: "8. Security" },
      {
        type: "p",
        text: "We use reasonable technical and organizational measures to protect your information. For example, passwords are stored only as one-way hashes, connections to the Service are encrypted in transit, and access to user data is limited to what's needed to run and support the Service.",
      },
      {
        type: "p",
        text: "No system is completely secure, so we can't guarantee absolute security. You can help by using a strong, unique password and keeping your API keys secret. If you think your account has been compromised, or you've found a security issue, please tell us right away through the [contact form](/help#contact). If a security incident affects your personal information, we'll notify you and the relevant authorities where the law requires it.",
      },

      { type: "h2", text: "9. Your rights and choices" },
      { type: "p", text: "Depending on where you live, you may have the right to:" },
      {
        type: "ul",
        items: [
          "Access: get a copy of the personal information we hold about you",
          "Correction: have inaccurate or incomplete information corrected",
          "Deletion: have your personal information deleted",
          "Export: receive your information in a portable format",
          "Objection and restriction: object to some kinds of processing, or ask us to limit it",
          "Withdrawing consent: where we rely on your consent, withdraw it at any time",
        ],
      },
      {
        type: "p",
        text: "Whatever the law where you live says, you can ask us to access, correct, delete or export your personal information.",
      },
      { type: "h3", text: "Things you can do yourself" },
      {
        type: "p",
        text: "In the app, you can download your results and delete individual designs. You can delete your account, together with your designs, from Account settings.",
      },
      { type: "h3", text: "Making a request" },
      {
        type: "p",
        text: "For anything else, including a copy of your information, send a request through the [contact form](/help#contact) using the email address on your account. We may need to confirm your identity before we act on a request, and we'll respond within the time the law requires. We won't treat you differently for exercising your rights.",
      },
      {
        type: "p",
        text: "If you're not satisfied with our response, you can complain to the data protection authority where you live or work.",
      },
      { type: "h3", text: "California residents" },
      {
        type: "p",
        text: "If you live in California, you have the right to know what personal information we collect, use and disclose, and to request access to it, correction of it or its deletion. The categories we collect are identifiers (such as your email address, display name and IP address), visual information (the photos you upload, which may show people or your home) and internet activity (such as usage records and technical logs). We collect them from you and your devices, for the purposes in section 3, and disclose them only to the categories of recipients in section 6.",
      },
      {
        type: "p",
        text: "We don't sell personal information or share it for cross-context behavioral advertising, and we don't use sensitive personal information for purposes that would require offering you a right to limit it. You can use an authorized agent to make a request for you, and we won't discriminate against you for exercising your rights.",
      },

      { type: "h2", text: "10. Children" },
      {
        type: "p",
        text: "Roomwright isn't meant for children. You must be at least 16 to use it, and we don't knowingly collect personal information from anyone younger. If you believe a child under 16 has given us personal information, contact us and we'll delete it.",
      },
      {
        type: "p",
        text: "Please don't upload photos that show a child unless you're the child's parent or guardian, or have a parent's or guardian's permission.",
      },

      { type: "h2", text: "11. International transfers" },
      {
        type: "p",
        text: "Roomwright and the providers we use may process information in countries other than the one where you live, including the United States, where data protection laws may differ from those in your country. Where the law requires it, we use appropriate safeguards for these transfers, such as standard contractual clauses.",
      },

      { type: "h2", text: "12. Changes to this policy" },
      {
        type: "p",
        text: "We'll update this policy as Roomwright changes, for example when paid plans launch or if we change the providers we use. The Last updated date shows when it last changed. If we make a material change, we'll let you know in advance by email or with a notice in the app.",
      },

      { type: "h2", text: "13. Contact us" },
      {
        type: "p",
        text: "Questions or requests about privacy? Use the [contact form on our Help page](/help#contact) and mention that your message is about privacy, so we can handle it properly.",
      },
    ],
  },

  {
    slug: "refund-policy",
    navLabel: "Refund Policy",
    metaTitle: "Refund Policy",
    metaDescription:
      "Roomwright is free during the public beta, so there's nothing to refund yet. Here's how cancellations and refunds will work once paid plans launch.",
    eyebrow: "Legal",
    title: "Refund Policy",
    intro:
      "Roomwright is free while it's in public beta, so there's nothing to refund today. This page explains how cancellations and refunds will work once paid plans are available, so you know what to expect before you ever pay.",
    updated: UPDATED,
    blocks: [
      { type: "h2", text: "During the public beta" },
      {
        type: "p",
        text: "Every Roomwright account is free during the beta, with a daily render allowance. We don't collect payments or card details, so there are no charges to cancel or refund.",
      },
      {
        type: "p",
        text: "If you ever see a charge that claims to be from Roomwright during the beta, it didn't come from us. Contact your bank or card issuer, and let us know through the [contact form](/help#contact) so we can look into it.",
      },

      { type: "h2", text: "When paid plans launch" },
      {
        type: "p",
        text: "The plans on our [Pricing page](/pricing) aren't being charged yet. When they launch, you'll choose whether to upgrade, and nothing will be charged unless you do. Payments will be handled by a third-party payment processor, and your card details won't be stored on our servers. Once paid plans are available, the following terms apply.",
      },
      { type: "h3", text: "Cancel anytime" },
      {
        type: "p",
        text: "You can cancel a monthly plan at any time. Your plan stays active until the end of the billing period you've already paid for, and you won't be charged again. We don't give partial refunds for the unused part of a billing period, except as described below or where the law requires it.",
      },
      {
        type: "p",
        text: "If we offer yearly billing, the same approach will apply: you can cancel at any time, and your plan will stay active until the end of the year you've paid for.",
      },
      { type: "h3", text: "Refunds on a first payment" },
      {
        type: "p",
        text: "If you've just started a paid plan and it isn't right for you, you can ask for a refund of your first payment within 14 days of making it, as long as the plan has seen little use. When we review a request, we'll look at how much of the plan's render allowance you've used.",
      },
      {
        type: "p",
        text: "Renewal payments aren't covered by this. Still, if a renewal went through by mistake and you haven't used the plan since, contact us and we'll take a look.",
      },
      { type: "h3", text: "Billing mistakes" },
      {
        type: "p",
        text: "If you're charged twice, charged the wrong amount or charged after you canceled, tell us and we'll put it right, including with a refund where that's appropriate.",
      },
      { type: "h3", text: "Your rights under local law" },
      {
        type: "p",
        text: "Some countries give consumers additional rights, such as a right to cancel a purchase within a set period. Nothing in this policy limits the rights you have under the law where you live.",
      },

      { type: "h2", text: "How to request a refund" },
      { type: "p", text: "Send us a message through the [contact form on our Help page](/help#contact). Please include:" },
      {
        type: "ul",
        items: [
          "The email address on your Roomwright account",
          "The date and amount of the payment",
          "A short note on why you're asking for a refund",
        ],
      },
      { type: "p", text: "We'll review your request and confirm the outcome by email." },

      { type: "h2", text: "How refunds are paid" },
      {
        type: "p",
        text: "Approved refunds go back to your original payment method through our payment processor. Once we've issued a refund, it can take several business days for your bank or card issuer to show it on your statement. A plan that's been refunded ends when the refund is issued.",
      },

      { type: "h2", text: "Chargebacks" },
      {
        type: "p",
        text: "If there's a problem with a charge, please contact us before disputing it with your bank. It's usually quicker to sort out directly, and we'd like the chance to fix it.",
      },
      {
        type: "p",
        text: "If you do file a chargeback, we may pause your paid features while it's being resolved, and we may share relevant details about your account and usage with our payment processor so it can assess the dispute.",
      },

      { type: "h2", text: "Changes to this policy" },
      {
        type: "p",
        text: "We'll update this policy before paid plans launch if anything needs to change, and the Last updated date will show when it last changed. Changes won't affect payments made before they took effect.",
      },

      { type: "h2", text: "Questions" },
      {
        type: "p",
        text: "If anything here is unclear, ask us through the [contact form on our Help page](/help#contact).",
      },
    ],
  },
];
