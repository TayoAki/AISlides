import { forProvider, toJpeg } from "../images";
import { ProviderError, type ImageProvider, type ProviderInput } from "./types";

const API = "https://api.openai.com/v1";

function sizeFor(input: ProviderInput) {
  if (input.spec.tool === "furniture-creator") return "1024x1024";
  const a = input.aspect;
  if (!a) return "1536x1024";
  const r = a.width / a.height;
  if (r > 1.15) return "1536x1024";
  if (r < 0.87) return "1024x1536";
  return "1024x1024";
}

export function createOpenAIProvider(apiKey: string, fetchImpl: typeof fetch = fetch): ImageProvider {
  const model = process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-1";
  const quality = process.env.OPENAI_IMAGE_QUALITY ?? "medium";
  const auth = { Authorization: `Bearer ${apiKey}` };

  async function readImage(res: Response) {
    if (res.status === 401) throw new ProviderError("openai auth", "The design engine isn't configured correctly. Please contact support.");
    if (res.status === 429) throw new ProviderError("openai rate limited", "The design engine is busy right now. Please try again in a minute.");
    const body = (await res.json().catch(() => ({}))) as { data?: { b64_json?: string }[]; error?: { message?: string; code?: string } };
    if (!res.ok) {
      const msg = body.error?.message ?? `status ${res.status}`;
      throw new ProviderError(
        `openai ${res.status}: ${msg}`,
        /safety|moderation/i.test(msg) ? "This image or instruction was blocked by the safety filter. Try a different photo or wording." : undefined,
      );
    }
    const b64 = body.data?.[0]?.b64_json;
    if (!b64) throw new ProviderError("openai returned no image");
    return toJpeg(Buffer.from(b64, "base64"));
  }

  async function edit(input: ProviderInput, fidelity: boolean) {
    const form = new FormData();
    form.set("model", model);
    form.set("prompt", input.prompt);
    form.set("size", sizeFor(input));
    form.set("quality", quality);
    form.set("n", "1");
    if (fidelity) form.set("input_fidelity", "high");
    const images = [input.image!, ...(input.reference ? [input.reference] : [])];
    for (const [i, img] of images.entries()) {
      const jpeg = await forProvider(img, 1536);
      form.append("image[]", new Blob([new Uint8Array(jpeg)], { type: "image/jpeg" }), `image-${i}.jpg`);
    }
    return fetchImpl(`${API}/images/edits`, { method: "POST", headers: auth, body: form });
  }

  return {
    id: "openai",
    demo: false,
    async generate(input) {
      if (input.spec.tool === "text-to-design" || input.spec.tool === "furniture-creator") {
        const res = await fetchImpl(`${API}/images/generations`, {
          method: "POST",
          headers: { ...auth, "Content-Type": "application/json" },
          body: JSON.stringify({ model, prompt: input.prompt, size: sizeFor(input), quality, n: 1 }),
        });
        return readImage(res);
      }
      if (!input.image) throw new ProviderError("missing input image", "This tool needs a photo to work from.");
      let res = await edit(input, true);
      // Older image models reject input_fidelity; retry once without it.
      if (res.status === 400) {
        const text = await res.clone().text();
        if (/input_fidelity/i.test(text)) res = await edit(input, false);
      }
      return readImage(res);
    },
  };
}
