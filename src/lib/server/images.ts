import "server-only";
import sharp from "sharp";

export const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;
const ACCEPTED = new Set(["jpeg", "png", "webp", "avif", "gif", "tiff", "heif"]);

export class ImageError extends Error {}

/**
 * Validates an uploaded image, applies EXIF rotation, strips metadata (including GPS),
 * and stores it as a JPEG no larger than 2048px on its long side.
 */
export async function normalizeUpload(input: Buffer) {
  if (input.byteLength > MAX_UPLOAD_BYTES) throw new ImageError("That photo is larger than 15 MB. Please use a smaller file.");
  let meta: Awaited<ReturnType<ReturnType<typeof sharp>["metadata"]>>;
  try {
    meta = await sharp(input, { failOn: "error" }).metadata();
  } catch {
    throw new ImageError("We couldn't read that file. Please upload a JPEG, PNG or WebP photo.");
  }
  if (!meta.format || !ACCEPTED.has(meta.format)) throw new ImageError("Please upload a JPEG, PNG or WebP photo.");
  if (!meta.width || !meta.height || meta.width < 256 || meta.height < 256)
    throw new ImageError("That image is too small. Please use a photo at least 256 pixels on each side.");
  try {
    const { data, info } = await sharp(input, { failOn: "error" })
      .rotate()
      .resize({ width: 2048, height: 2048, fit: "inside", withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 88, mozjpeg: true })
      .toBuffer({ resolveWithObject: true });
    return { data, width: info.width, height: info.height };
  } catch {
    throw new ImageError("We couldn't process that photo. HEIC files from some phones need to be exported as JPEG first.");
  }
}

export async function thumbnail(data: Buffer, width = 640) {
  return sharp(data).resize({ width, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
}

/** Compact JPEG for sending to AI providers (Replicate recommends data URLs under 1 MB). */
export async function forProvider(data: Buffer, maxSide = 1280) {
  let quality = 86;
  let out = await sharp(data).resize({ width: maxSide, height: maxSide, fit: "inside", withoutEnlargement: true }).jpeg({ quality }).toBuffer();
  while (out.byteLength > 900_000 && quality > 50) {
    quality -= 12;
    out = await sharp(data).resize({ width: maxSide, height: maxSide, fit: "inside", withoutEnlargement: true }).jpeg({ quality }).toBuffer();
  }
  return out;
}

export async function toJpeg(data: Buffer) {
  return sharp(data).rotate().flatten({ background: "#ffffff" }).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
}

export const dataUrl = (jpeg: Buffer) => `data:image/jpeg;base64,${jpeg.toString("base64")}`;
