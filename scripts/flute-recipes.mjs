// Writes the Flute promo scene recipes. Tweak camera/focus/motion here, then run:
//   node scripts/flute-recipes.mjs && npx flute sync
import { writeFileSync } from "node:fs";
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

const recipes = [
  {
    version: 1,
    id: "hero-survey",
    title: "See your space, remade",
    description: "A close oblique pass across the landing hero, from the headline to the studio card.",
    definition: {
      width: 1920,
      height: 1080,
      scene: {
        version: 3,
        camera: { x: -220, y: 60, z: 380, perspective: 1600, rotateX: 6, rotateY: 20, rotateZ: 0 },
        focus: { distance: 1240, fStop: 6.3, focalLength: 90, maxBlur: 5 },
        nodes: [{ id: "landing" }],
      },
      motion: { durationMs: 6500, speed: 0.5, tracks: [cam("x", -300, 260, 6500), cam("z", 420, 330, 6500)] },
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
      scene: {
        version: 3,
        camera: { x: 260, y: -120, z: 520, perspective: 1500, rotateX: 10, rotateY: -18, rotateZ: 0 },
        focus: { distance: 1120, fStop: 5.6, focalLength: 90, maxBlur: 5 },
        nodes: [{ id: "studio" }],
      },
      motion: { durationMs: 6500, speed: 0.5, tracks: [cam("y", -220, 240, 6500), cam("x", 300, 230, 6500)] },
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
        camera: { x: -120, y: 40, z: 260, perspective: 1700, rotateX: 14, rotateY: 14, rotateZ: 0 },
        focus: { distance: 1440, fStop: 8, focalLength: 80, maxBlur: 5 },
        nodes: [{ id: "toolkit" }, ...TOOL_IDS.map((id) => ({ id: `tool-${id}`, parentId: "toolkit" }))],
      },
      motion: {
        durationMs: 6500,
        speed: 0.5,
        tracks: [
          ...createCascadeTracks({ items: TOOL_IDS.map((id) => ({ id: `tool-${id}` })), depth: 320, depthStep: 26, staggerMs: 150, entranceMs: 2200 }),
          cam("x", -220, 160, 6500),
        ],
      },
    },
  },
  {
    version: 1,
    id: "pricing-survey",
    title: "Free while in beta",
    description: "A slow survey along the pricing plans, with focus riding the cards.",
    definition: {
      width: 1920,
      height: 1080,
      scene: {
        version: 3,
        camera: { x: -260, y: 80, z: 420, perspective: 1600, rotateX: 8, rotateY: 18, rotateZ: 0 },
        focus: { distance: 1200, fStop: 6.3, focalLength: 90, maxBlur: 5 },
        nodes: [{ id: "pricing" }],
      },
      motion: { durationMs: 6500, speed: 0.5, tracks: [cam("x", -320, 300, 6500), focus(1180, 1240, 6500)] },
    },
  },
];

for (const r of recipes) {
  writeFileSync(new URL(`../src/flute/scenes/${r.id}.scene.json`, import.meta.url), JSON.stringify(r, null, 2) + "\n");
  console.log("wrote", r.id);
}
