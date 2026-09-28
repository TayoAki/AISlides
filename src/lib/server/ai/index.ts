import "server-only";
import { createOpenAIProvider } from "./openai";
import { createReplicateProvider } from "./replicate";
import { demoProvider } from "./demo";
import type { ImageProvider } from "./types";

let cached: ImageProvider | null = null;

/**
 * Picks the image provider from the environment:
 * AI_PROVIDER=replicate|openai|demo, or automatically by whichever key is set.
 */
export function getProvider(): ImageProvider {
  if (cached) return cached;
  const choice = (process.env.AI_PROVIDER ?? "").toLowerCase();
  const replicate = process.env.REPLICATE_API_TOKEN;
  const openai = process.env.OPENAI_API_KEY;
  if ((choice === "replicate" || (!choice && replicate)) && replicate) cached = createReplicateProvider(replicate);
  else if ((choice === "openai" || (!choice && openai)) && openai) cached = createOpenAIProvider(openai);
  else cached = demoProvider;
  return cached;
}

export function providerStatus() {
  const p = getProvider();
  return { id: p.id, demo: p.demo };
}
