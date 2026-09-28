import type { SpaceKind, Strength, ToolId } from "@/lib/tools";

/** Validated render settings. */
export type RenderSpec = {
  tool: ToolId;
  space: SpaceKind;
  roomType?: string;
  style?: string;
  strength: Strength;
  prompt?: string;
  surface?: string;
  material?: string;
  color?: string;
  sky?: string;
};

export type ProviderInput = {
  spec: RenderSpec;
  prompt: string;
  /** Normalized JPEG of the user's photo, when the tool uses one. */
  image?: Buffer;
  /** Normalized JPEG of the inspiration photo for style transfer. */
  reference?: Buffer;
  aspect?: { width: number; height: number };
};

export type ProviderId = "replicate" | "openai" | "demo";

export interface ImageProvider {
  id: ProviderId;
  /** Demo renders are clearly labeled previews, not AI output. */
  demo: boolean;
  generate(input: ProviderInput): Promise<Buffer>;
}

export class ProviderError extends Error {
  constructor(
    message: string,
    public readonly userMessage = "The design engine couldn't finish this render. Please try again.",
  ) {
    super(message);
  }
}
