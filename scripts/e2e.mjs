// End-to-end check of the whole product loop against a running server.
// Usage: BASE_URL=http://127.0.0.1:3000 node scripts/e2e.mjs
// Expects the server to run with FREE_DAILY_RENDERS=8 so the limit check is quick.
import sharp from "sharp";

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const LIMIT = Number(process.env.EXPECT_LIMIT ?? 8);
let cookie = "";
let passed = 0;

function check(cond, label, detail) {
  if (!cond) {
    console.error(`✗ ${label}`, detail ?? "");
    process.exit(1);
  }
  passed++;
  console.log(`✓ ${label}`);
}

async function req(path, init = {}) {
  const headers = new Headers(init.headers);
  if (cookie && !headers.has("authorization")) headers.set("cookie", cookie);
  const res = await fetch(BASE + path, { ...init, headers, redirect: "manual" });
  const set = res.headers.get("set-cookie");
  if (set) {
    const m = set.match(/rw_session=([^;]*)/);
    if (m) cookie = m[1] ? `rw_session=${m[1]}` : "";
  }
  return res;
}
const json = (body) => ({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

async function waitFor(path, headers = {}) {
  for (let i = 0; i < 120; i++) {
    const r = await req(path, { headers });
    const body = await r.json();
    if (body.status === "succeeded" || body.status === "failed") return body;
    await new Promise((res) => setTimeout(res, 500));
  }
  throw new Error("render timed out");
}

const email = `e2e-${Date.now()}@example.com`;
const password = "correct horse battery";

// Marketing + auth
let r = await req("/");
check(r.status === 200 && (await r.text()).includes("Roomwright"), "home page renders");
r = await req("/app");
check(r.status === 307 && r.headers.get("location")?.includes("/login"), "app redirects anonymous visitors to login");
r = await req("/api/auth/signup", json({ email, password: "short" }));
check(r.status === 400, "signup rejects a short password");
r = await req("/api/auth/signup", json({ email, password, name: "E2E Tester" }));
check(r.status === 200 && cookie, "signup creates a session");
r = await req("/api/auth/signup", json({ email, password }));
check(r.status === 409, "duplicate signup is refused");
r = await req("/app");
check(r.status === 200, "studio dashboard loads when signed in");

// Render from a sample photo
let form = new FormData();
form.set("tool", "redesign");
form.set("space", "interior");
form.set("roomType", "Living room");
form.set("style", "Japandi");
form.set("sample", "living-dated");
r = await req("/api/renders", { method: "POST", body: form });
let body = await r.json();
check(r.status === 202 && body.id?.startsWith("r_"), "create render from a sample photo", body);
const first = await waitFor(`/api/renders/${body.id}`);
check(first.status === "succeeded" && first.output_urls.length === 1, "sample render succeeds", first);
r = await req(first.output_urls[0]);
check(r.status === 200 && r.headers.get("content-type") === "image/jpeg", "owner can download the output");
const outMeta = await sharp(Buffer.from(await r.arrayBuffer())).metadata();
check(outMeta.width > 0, "output is a valid image", outMeta);
r = await fetch(BASE + first.output_urls[0]);
check(r.status === 404, "media is private to its owner");

// Upload a real file
const upload = await sharp({ create: { width: 1400, height: 1000, channels: 3, background: "#b9a893" } }).jpeg().toBuffer();
form = new FormData();
form.set("tool", "paint");
form.set("space", "interior");
form.set("color", "Sage");
form.set("image", new Blob([upload], { type: "image/jpeg" }), "wall.jpg");
r = await req("/api/renders", { method: "POST", body: form });
body = await r.json();
check(r.status === 202, "create render from an uploaded photo", body);
const second = await waitFor(`/api/renders/${body.id}`);
check(second.status === "succeeded" && second.input_url, "uploaded render succeeds and keeps its input", second);

// Validation
form = new FormData();
form.set("tool", "edit");
form.set("space", "interior");
form.set("sample", "living-dated");
r = await req("/api/renders", { method: "POST", body: form });
check(r.status === 400, "precision edit without instructions is rejected");
form = new FormData();
form.set("tool", "sky");
form.set("space", "interior");
form.set("sample", "living-dated");
r = await req("/api/renders", { method: "POST", body: form });
check(r.status === 400, "tool/space mismatch is rejected");
form = new FormData();
form.set("tool", "redesign");
form.set("image", new Blob([Buffer.from("not an image")], { type: "image/jpeg" }), "x.jpg");
r = await req("/api/renders", { method: "POST", body: form });
check(r.status === 400, "non-image upload is rejected");
r = await req("/api/renders", { method: "POST", body: new FormData(), headers: { origin: "https://evil.example" } });
check(r.status === 403, "cross-site POST is blocked");

// Iterate: rerun with a new style, then refine a result
r = await req(`/api/renders/${first.id}/rerun`, json({ style: "Coastal" }));
body = await r.json();
check(r.status === 202, "generate again with another style", body);
const third = await waitFor(`/api/renders/${body.id}`);
check(third.status === "succeeded" && third.options.style === "Coastal", "rerun keeps the photo and applies the new style", third);
form = new FormData();
form.set("tool", "edit");
form.set("space", "interior");
form.set("prompt", "Add a large fiddle leaf fig by the window");
form.set("fromRender", first.id);
r = await req("/api/renders", { method: "POST", body: form });
body = await r.json();
check(r.status === 202, "refine an earlier result with a precision edit", body);
const fourth = await waitFor(`/api/renders/${body.id}`);
check(fourth.status === "succeeded", "refinement succeeds", fourth);

// List
r = await req("/api/renders?limit=10");
body = await r.json();
check(body.data.length >= 4 && body.usage.used >= 4, "history lists designs and usage", body.usage);

// Public API
r = await req("/api/keys", json({ name: "e2e key" }));
const key = await r.json();
check(r.status === 201 && key.secret?.startsWith("rw_live_"), "create an API key");
const auth = { authorization: `Bearer ${key.secret}` };
r = await fetch(BASE + "/api/v1/renders", { headers: { authorization: "Bearer rw_live_invalidinvalidinvalid" } });
check(r.status === 401, "API rejects an unknown key");
r = await fetch(BASE + "/api/v1/renders", {
  method: "POST",
  headers: { ...auth, "Content-Type": "application/json" },
  body: JSON.stringify({ tool: "declutter", space: "interior", image_base64: upload.toString("base64") }),
});
body = await r.json();
check(r.status === 202 && ["queued", "processing"].includes(body.status) && body.input_url?.includes("/api/v1/renders/"), "API creates a render from base64", body);
const apiRender = await waitFor(`/api/v1/renders/${body.id}`, auth);
check(apiRender.status === "succeeded" && apiRender.output_urls[0].includes("/outputs/1"), "API render succeeds", apiRender);
r = await fetch(apiRender.output_urls[0].replace(/^https?:\/\/[^/]+/, BASE), { headers: auth });
check(r.status === 200 && r.headers.get("content-type") === "image/jpeg", "API downloads the output with the key");
r = await fetch(apiRender.output_urls[0].replace(/^https?:\/\/[^/]+/, BASE));
check(r.status === 401, "API output requires the key");
r = await fetch(BASE + "/api/v1/renders?limit=5", { headers: auth });
body = await r.json();
check(r.status === 200 && body.data.length === 5, "API lists renders");

// Daily limit
let used = (await (await req("/api/renders?limit=1")).json()).usage.used;
while (used < LIMIT) {
  r = await req(`/api/renders/${first.id}/rerun`, json({}));
  check(r.status === 202, `render ${used + 1} of ${LIMIT} allowed`);
  used++;
}
r = await req(`/api/renders/${first.id}/rerun`, json({}));
body = await r.json();
check(r.status === 429 && body.error.code === "rate_limited", "daily allowance is enforced", body);

// Leads (SKIP_LEADS=1 avoids leaving a test message in a live admin inbox)
if (!process.env.SKIP_LEADS) {
  r = await req("/api/leads", json({ kind: "support", email, name: "E2E", message: "Testing the help form" }));
  check(r.status === 200, "help form submission is stored");
}
r = await req("/api/leads", json({ kind: "support", email: "not-an-email" }));
check(r.status === 400, "invalid lead email is rejected");

// Delete a design
r = await req(`/api/renders/${second.id}`, { method: "DELETE" });
check(r.status === 200, "delete a design");
r = await req(`/api/renders/${second.id}`);
check(r.status === 404, "deleted design is gone");

// Account
r = await req("/api/account", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Renamed" }) });
check(r.status === 200, "update display name");
r = await req("/api/account", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: "wrong password" }) });
check(r.status === 401, "account deletion needs the right password");
const sessionBefore = cookie;
r = await req("/api/account", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
check(r.status === 200, "delete account");
r = await fetch(BASE + "/api/renders", { headers: { cookie: sessionBefore } });
check(r.status === 401, "old session no longer works");
r = await fetch(BASE + "/api/v1/renders", { headers: auth });
check(r.status === 401, "API key dies with the account");
r = await req("/api/auth/login", json({ email, password }));
check(r.status === 401, "deleted account can't log in");

console.log(`\nAll ${passed} checks passed.`);
