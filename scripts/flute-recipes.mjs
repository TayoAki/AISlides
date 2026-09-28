// Writes the Flute promo scene recipes. Tweak camera/focus/motion here, then run:
//   node scripts/flute-recipes.mjs && npx flute sync
// Library thumbnails are kept while a scene's definition is unchanged; after changing one,
// refresh it with: npx flute snapshot --scene <id> --url http://localhost:3000
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createCascadeTracks } from "@webprodigies/flute";

const TOOL_IDS = ["redesign", "virtual-staging", "decor-staging", "declutter", "paint", "materials", "sky", "sketch", "edit", "style-transfer", "text-to-design", "furniture-creator"];
const cam = (property, from, to, durationMs) => ({
  target: { kind: "camera" },
  property,
  keyframes: [
    { timeMs: 0, value: from, easing: "cinematic" },
    { timeMs: durationMs, value: to, easing: "cinematic" },
  ],
});
const focus = (from, to, durationMs) => ({
  target: { kind: "focus" },
  property: "distance",
  keyframes: [
    { timeMs: 0, value: from, easing: "cinematic" },
    { timeMs: durationMs, value: to, easing: "cinematic" },
  ],
});

// Focus: for a surface at z=0 the point at frame center sits at roughly
// perspective + camera.z * cos(rotateY) * cos(rotateX) along the viewing axis.
const centerDepth = (c) => Math.round(c.perspective + c.z * Math.cos((c.rotateY * Math.PI) / 180) * Math.cos((c.rotateX * Math.PI) / 180));

const heroCam = { x: -170, y: -170, z: -240, perspective: 1400, rotateX: 4, rotateY: 22, rotateZ: 0 };
const studioCam = { x: 250, y: -150, z: -150, perspective: 1400, rotateX: 8, rotateY: -16, rotateZ: 0 };
const toolsCam = { x: -90, y: 40, z: -50, perspective: 1500, rotateX: 16, rotateY: 12, rotateZ: 0 };
const ctaCam = { x: -240, y: -220, z: 260, perspective: 1600, rotateX: 3, rotateY: -6, rotateZ: 0 };
const pricingCam = { x: -330, y: 20, z: -200, perspective: 1500, rotateX: 6, rotateY: 16, rotateZ: 0 };

const recipes = [
  {
    version: 1,
    id: "hero-survey",
    title: "See your space, remade",
    description: "A close oblique pass across the landing hero, from the headline to the studio card.",
    definition: {
      width: 1920,
      height: 1080,
      scene: { version: 3, camera: heroCam, focus: { distance: centerDepth(heroCam), fStop: 8, focalLength: 90, maxBlur: 5 }, nodes: [{ id: "landing" }] },
      motion: {
        durationMs: 6500,
        speed: 0.5,
        tracks: [cam("x", -170, 170, 6500), cam("z", -240, -300, 6500), focus(centerDepth(heroCam), centerDepth({ ...heroCam, z: -300 }), 6500)],
      },
    },
  },
  {
    version: 1,
    id: "studio-panel",
    title: "Pick a tool and a style",
    description: "A detail shot that travels down the real studio settings: tool, style, strength and generate.",
    definition: {
      width: 1920,
      height: 1080,
      scene: { version: 3, camera: studioCam, focus: { distance: centerDepth(studioCam), fStop: 7, focalLength: 90, maxBlur: 5 }, nodes: [{ id: "studio" }] },
      motion: { durationMs: 6500, speed: 0.5, tracks: [cam("y", -150, 380, 6500)] },
    },
  },
  {
    version: 1,
    id: "tools-plating",
    title: "Twelve tools, one studio",
    description: "The real tool cards settle into the toolkit grid while the camera glides across it.",
    definition: {
      width: 1920,
      height: 1080,
      scene: {
        version: 3,
        camera: toolsCam,
        focus: { distance: centerDepth(toolsCam), fStop: 8, focalLength: 90, maxBlur: 5 },
        nodes: [{ id: "toolkit" }, ...TOOL_IDS.map((id) => ({ id: `tool-${id}`, parentId: "toolkit" }))],
      },
      motion: {
        durationMs: 6500,
        speed: 0.5,
        tracks: [
          ...createCascadeTracks({ items: TOOL_IDS.map((id) => ({ id: `tool-${id}` })), depth: 320, depthStep: 26, staggerMs: 150, entranceMs: 2200 }),
          cam("x", -90, 40, 6500),
          cam("y", 40, 20, 6500),
        ],
      },
    },
  },
  {
    version: 1,
    id: "pricing-survey",
    title: "Free while in beta",
    description: "A slow survey along the pricing plans from Free to Enterprise.",
    definition: {
      width: 1920,
      height: 1080,
      scene: { version: 3, camera: pricingCam, focus: { distance: centerDepth(pricingCam), fStop: 8, focalLength: 90, maxBlur: 5 }, nodes: [{ id: "pricing" }] },
      motion: { durationMs: 6500, speed: 0.5, tracks: [cam("x", -330, 330, 6500)] },
    },
  },
  {
    version: 1,
    id: "cta-endcard",
    title: "Start designing free",
    description: "A slow push toward the real call to action, used as the promo's closing card.",
    definition: {
      width: 1920,
      height: 1080,
      scene: { version: 3, camera: ctaCam, focus: { distance: centerDepth(ctaCam), fStop: 9, focalLength: 90, maxBlur: 4 }, nodes: [{ id: "cta" }] },
      motion: {
        durationMs: 4000,
        speed: 0.5,
        tracks: [cam("z", 260, 60, 4000), cam("rotateY", -6, 0, 4000), focus(centerDepth(ctaCam), centerDepth({ ...ctaCam, z: 60, rotateY: 0 }), 4000)],
      },
    },
  },
];

for (const r of recipes) {
  const file = new URL(`../src/flute/scenes/${r.id}.scene.json`, import.meta.url);
  const previous = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : null;
  const unchanged = previous?.snapshot && JSON.stringify(previous.definition) === JSON.stringify(r.definition);
  writeFileSync(file, JSON.stringify(unchanged ? { ...r, snapshot: previous.snapshot } : r, null, 2) + "\n");
  console.log("wrote", r.id, unchanged ? "(kept thumbnail)" : previous?.snapshot ? "(thumbnail is stale: re-run flute snapshot)" : "");
}
