/**
 * Builds resized image URLs from the client's Wix media library.
 * Used for the mockup only, until the original photos are self-hosted in src/assets/photos.
 * Wix serves AVIF/WebP automatically with enc_auto.
 */
import type { WixPhoto } from "../site";

const BASE = "https://static.wixstatic.com/media/";

function fileName(id: string) {
  const ext = id.split(".").pop() ?? "jpg";
  return `photo.${ext}`;
}

/** Resize and crop to exactly w×h. align: c (center) or t (top). */
export function wixFill(p: WixPhoto, w: number, h: number, align: "c" | "t" = "c", q = 82) {
  return `${BASE}${p.id}/v1/fill/w_${w},h_${h},al_${align},q_${q},enc_auto/${fileName(p.id)}`;
}

/** Scale to fit inside w×h, keeping the original aspect ratio. */
export function wixFit(p: WixPhoto, w: number, h: number, q = 90) {
  return `${BASE}${p.id}/v1/fit/w_${w},h_${h},q_${q},enc_auto/${fileName(p.id)}`;
}

/** srcset for a crop at a fixed aspect ratio (width / height), never upscaling past the original. */
export function wixSrcset(p: WixPhoto, ratio: number, widths: number[], align: "c" | "t" = "c") {
  const maxW = Math.min(p.w, Math.floor(p.h * ratio));
  const list = [...new Set(widths.map((w) => Math.min(w, maxW)))];
  return {
    src: wixFill(p, list[list.length - 1], Math.round(list[list.length - 1] / ratio), align),
    srcset: list.map((w) => `${wixFill(p, w, Math.round(w / ratio), align)} ${w}w`).join(", "),
    width: list[list.length - 1],
    height: Math.round(list[list.length - 1] / ratio),
  };
}
