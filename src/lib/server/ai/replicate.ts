import { dataUrl, forProvider, toJpeg } from "../images";
import { ProviderError, type ImageProvider, type ProviderInput } from "./types";

const API = "https://api.replicate.com/v1";
const TERMINAL = new Set(["succeeded", "failed", "canceled"]);

type Prediction = {
  id: string;
  status: string;
  output?: string | string[] | null;
  error?: string | null;
  urls?: { get?: string };
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function aspectFor(input: ProviderInput) {
  if (input.spec.tool === "furniture-creator") return "1:1";
  const a = input.aspect;
  if (!a) return "3:2";
  const r = a.width / a.height;
  if (r > 1.6) return "16:9";
  if (r > 1.2) return "3:2";
  if (r > 0.9) return "1:1";
  if (r > 0.7) return "2:3";
  return "9:16";
}

export function replicateModels() {
  return {
    edit: process.env.REPLICATE_EDIT_MODEL ?? "black-forest-labs/flux-kontext-pro",
    multi: process.env.REPLICATE_MULTI_MODEL ?? "flux-kontext-apps/multi-image-kontext-pro",
    text: process.env.REPLICATE_TEXT_MODEL ?? "black-forest-labs/flux-1.1-pro",
  };
}

/** Chooses the model and input payload for a render. Exported for tests. */
export async function replicateRequest(input: ProviderInput): Promise<{ model: string; payload: Record<string, unknown> }> {
  const models = replicateModels();
  const { spec, prompt } = input;
  if (spec.tool === "text-to-design" || spec.tool === "furniture-creator") {
    return {
      model: models.text,
      payload: { prompt, aspect_ratio: aspectFor(input), output_format: "jpg", output_quality: 90, safety_tolerance: 2 },
    };
  }
  if (!input.image) throw new ProviderError("missing input image", "This tool needs a photo to work from.");
  const image = dataUrl(await forProvider(input.image));
  if (spec.tool === "style-transfer") {
    if (!input.reference) throw new ProviderError("missing reference image", "Add an inspiration photo to borrow its style.");
    return {
      model: models.multi,
      payload: {
        prompt,
        input_image_1: image,
        input_image_2: dataUrl(await forProvider(input.reference, 1024)),
        aspect_ratio: "match_input_image",
        output_format: "jpg",
        safety_tolerance: 2,
      },
    };
  }
  return {
    model: models.edit,
    payload: { prompt, input_image: image, aspect_ratio: "match_input_image", output_format: "jpg", safety_tolerance: 2 },
  };
}

export function createReplicateProvider(token: string, fetchImpl: typeof fetch = fetch): ImageProvider {
  const auth = { Authorization: `Bearer ${token}` };

  async function predict(model: string, payload: Record<string, unknown>): Promise<string> {
    const res = await fetchImpl(`${API}/models/${model}/predictions`, {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json", Prefer: "wait=60" },
      body: JSON.stringify({ input: payload }),
    });
    if (res.status === 401 || res.status === 403) throw new ProviderError(`replicate auth ${res.status}`, "The design engine isn't configured correctly. Please contact support.");
    if (res.status === 402) throw new ProviderError("replicate billing", "The design engine is temporarily unavailable. Please try again later.");
    if (res.status === 429) throw new ProviderError("replicate rate limited", "The design engine is busy right now. Please try again in a minute.");
    if (!res.ok) throw new ProviderError(`replicate ${res.status}: ${(await res.text()).slice(0, 300)}`);
    let prediction = (await res.json()) as Prediction;
    const deadline = Date.now() + 4 * 60_000;
    while (!TERMINAL.has(prediction.status)) {
      if (Date.now() > deadline) throw new ProviderError("replicate timeout", "This render took too long. Please try again.");
      await sleep(1500);
      const poll = await fetchImpl(prediction.urls?.get ?? `${API}/predictions/${prediction.id}`, { headers: auth });
      if (!poll.ok) throw new ProviderError(`replicate poll ${poll.status}`);
      prediction = (await poll.json()) as Prediction;
    }
    if (prediction.status !== "succeeded") {
      const reason = prediction.error ?? prediction.status;
      const flagged = /nsfw|safety|flagged/i.test(reason);
      throw new ProviderError(
        `replicate ${prediction.status}: ${reason}`,
        flagged ? "This image or instruction was blocked by the safety filter. Try a different photo or wording." : undefined,
      );
    }
    const url = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output;
    if (!url) throw new ProviderError("replicate returned no output");
    return url;
  }

  return {
    id: "replicate",
    demo: false,
    async generate(input) {
      const { model, payload } = await replicateRequest(input);
      const url = await predict(model, payload);
      const file = await fetchImpl(url);
      if (!file.ok) throw new ProviderError(`replicate download ${file.status}`);
      return toJpeg(Buffer.from(await file.arrayBuffer()));
    },
  };
}
