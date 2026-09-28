import "server-only";
import { MAX_UPLOAD_BYTES } from "./images";
import { RenderInputError } from "./renders";

/**
 * Reads render settings and images from either multipart form data
 * (fields + `image`/`reference` files) or JSON (`image_base64`/`reference_base64`).
 * Accepts snake_case (public API) and camelCase (app) field names.
 */
export async function readRenderRequest(request: Request) {
  const type = request.headers.get("content-type") ?? "";
  const fields: Record<string, string> = {};
  let image: Buffer | null = null;
  let reference: Buffer | null = null;

  const fromB64 = (value: unknown) => {
    if (typeof value !== "string" || !value) return null;
    const b64 = value.replace(/^data:image\/[a-z+.-]+;base64,/i, "");
    const buf = Buffer.from(b64, "base64");
    if (buf.byteLength > MAX_UPLOAD_BYTES) throw new RenderInputError("Images must be 15 MB or smaller.", 413);
    return buf;
  };

  if (type.includes("multipart/form-data")) {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      throw new RenderInputError("Could not read the upload. Please try again.");
    }
    for (const [key, value] of form.entries()) {
      if (typeof value === "string") fields[key] = value;
      else if (value.size > 0) {
        if (value.size > MAX_UPLOAD_BYTES) throw new RenderInputError("Images must be 15 MB or smaller.", 413);
        const buf = Buffer.from(await value.arrayBuffer());
        if (key === "image") image = buf;
        else if (key === "reference") reference = buf;
      }
    }
  } else if (type.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body || typeof body !== "object") throw new RenderInputError("Send a JSON body or multipart form.");
    for (const [key, value] of Object.entries(body)) {
      if (key === "image_base64" || key === "imageBase64") image = fromB64(value);
      else if (key === "reference_base64" || key === "referenceBase64") reference = fromB64(value);
      else if (typeof value === "string") fields[key] = value;
    }
  } else {
    throw new RenderInputError("Unsupported content type. Use multipart/form-data or application/json.", 415);
  }

  const pick = (...keys: string[]) => keys.map((k) => fields[k]).find((v) => v !== undefined && v !== "");
  return {
    spec: {
      tool: pick("tool"),
      space: pick("space"),
      roomType: pick("roomType", "room_type"),
      style: pick("style"),
      strength: pick("strength"),
      prompt: pick("prompt"),
      surface: pick("surface"),
      material: pick("material"),
      color: pick("color"),
      sky: pick("sky"),
    },
    sample: pick("sample") ?? null,
    fromRender: pick("fromRender", "from_render") ?? null,
    image,
    reference,
  };
}
