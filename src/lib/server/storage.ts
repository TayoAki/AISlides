import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import { DATA_DIR } from "./db";

const MEDIA_ROOT = path.join(DATA_DIR, "media");

export type MediaFile = "input" | "reference" | `output-${number}` | "input-thumb" | `output-${number}-thumb`;

function renderDir(renderId: string) {
  if (!/^r_[0-9a-z]+$/.test(renderId)) throw new Error("Invalid render id");
  return path.join(MEDIA_ROOT, "renders", renderId);
}

export function mediaPath(renderId: string, file: MediaFile) {
  if (!/^(input|reference|output-\d{1,2})(-thumb)?$/.test(file)) throw new Error("Invalid media file");
  return path.join(renderDir(renderId), `${file}.jpg`);
}

export async function writeMedia(renderId: string, file: MediaFile, data: Buffer) {
  const target = mediaPath(renderId, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  const tmp = `${target}.${process.pid}.tmp`;
  await fs.writeFile(tmp, data);
  await fs.rename(tmp, target);
}

export async function readMedia(renderId: string, file: MediaFile) {
  try {
    return await fs.readFile(mediaPath(renderId, file));
  } catch {
    return null;
  }
}

export async function deleteRenderMedia(renderId: string) {
  // Retries cover a render that is still writing files while it is being deleted.
  await fs.rm(renderDir(renderId), { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
}

/** Reads a bundled sample photo from public/images/library by key. */
export async function readSample(key: string) {
  if (!/^[a-z0-9-]+$/.test(key)) return null;
  try {
    return await fs.readFile(path.join(process.cwd(), "public", "images", "library", `${key}.webp`));
  } catch {
    return null;
  }
}
