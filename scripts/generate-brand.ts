/**
 * Generates the Lilt UI brand assets from the mark paths in
 * components/lilt-logo.tsx plus a wordmark outlined from Space Grotesk 600:
 *
 *   public/brand/lilt-mark.svg          mark, adapts via prefers-color-scheme
 *   public/brand/lilt-lockup-light.svg  mark + wordmark, baked light colors
 *   public/brand/lilt-lockup-dark.svg   mark + wordmark, baked dark colors
 *   app/icon.svg                        favicon badge (mint square)
 *   app/favicon.ico                     16 + 32 raster fallback of the badge
 *   app/apple-icon.png                  180x180 opaque badge
 *   components/lilt-brand.generated.ts  wordmark path data for the OG image
 *
 * Run: bun scripts/generate-brand.ts
 * The font is fetched from Google Fonts (OFL) into node_modules/.cache and is
 * never committed.
 */
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// opentype.js is pinned to 1.3.4: 2.0.0 emits NaN coordinates for some Space
// Grotesk glyphs ("y", "f"), truncating the outlined text in every renderer.
import { parse } from "opentype.js";
import pngToIco from "png-to-ico";
import sharp from "sharp";

import { LILT_SPARK_PATH, LILT_WAVE_PATH } from "../components/lilt-logo";

const ROOT = path.resolve(import.meta.dirname, "..");
const FONT_CACHE = path.join(ROOT, "node_modules/.cache/lilt-brand");
const FONT_FILE = path.join(FONT_CACHE, "space-grotesk-600.ttf");
const FONT_CSS_URL =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600";

// Brand colors, mirrored from registry/lilt/theme/lilt.css.
const LIGHT = { mark: "#164c35", text: "#121713" };
const DARK = { mark: "#a5e5c6", text: "#f1f4ee" };
const MINT = "#aeeacf";

// Bounding box of the mark artwork inside its 24x24 viewBox, stroke included.
const ART = { x1: 1.9, x2: 23.6, y1: 2, y2: 18.2 };
const ART_W = ART.x2 - ART.x1;
const ART_H = ART.y2 - ART.y1;

const markGroup = (color: string, transform?: string) => `
  <g${transform ? ` transform="${transform}"` : ""} fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round">
    <path d="${LILT_WAVE_PATH}" stroke-width="1.8"/>
    <path d="${LILT_SPARK_PATH}" stroke-width="1.4"/>
  </g>`;

const svg = (viewBox: string, w: number, h: number, body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${viewBox}" fill="none">${body}\n</svg>\n`;

// Satori renders SVG <img> sources at their intrinsic width/height and clips
// instead of scaling, so the OG image needs viewBox-only markup.
const stripDims = (markup: string) =>
  markup.replace(/ width="[^"]*" height="[^"]*"/u, "");

const round = (n: number) => Math.round(n * 100) / 100;

const fetchFont = async (): Promise<ReturnType<typeof parse>> => {
  if (!existsSync(FONT_FILE)) {
    // A non-browser UA makes Google Fonts serve static TTFs opentype.js can read.
    const cssResponse = await fetch(FONT_CSS_URL, {
      headers: { "User-Agent": "curl/8" },
    });
    const css = await cssResponse.text();
    const url = css.match(/src:\s*url\((?<ttf>https:[^)]+\.ttf)\)/u)?.groups
      ?.ttf;
    if (!url) {
      throw new Error(
        "Could not resolve a TTF from Google Fonts css2 — fetch the Space Grotesk variable TTF from github.com/google/fonts/tree/main/ofl/spacegrotesk instead."
      );
    }
    await mkdir(FONT_CACHE, { recursive: true });
    const ttfResponse = await fetch(url);
    const ttf = await ttfResponse.arrayBuffer();
    await writeFile(FONT_FILE, Buffer.from(ttf));
  }
  const data = await readFile(FONT_FILE);
  return parse(
    data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
  );
};

const badgeSvg = (size: number) => {
  const pad = size * 0.15;
  const s = (size - 2 * pad) / ART_W;
  const tx = (size - ART_W * s) / 2 - ART.x1 * s;
  const ty = (size - ART_H * s) / 2 - ART.y1 * s;
  const body = `
  <rect width="${size}" height="${size}" rx="${round(size * 0.227)}" fill="${MINT}"/>${markGroup(LIGHT.mark, `translate(${round(tx)} ${round(ty)}) scale(${round(s)})`)}`;
  return svg(`0 0 ${size} ${size}`, size, size, body);
};

const main = async () => {
  const font = await fetchFont();
  const fontSize = 64;
  const textOptions = { kerning: true, letterSpacing: -0.02 };
  const probe = font.getPath("Lilt UI", 0, 0, fontSize, textOptions);
  const bb = probe.getBoundingBox();
  const capsH = bb.y2 - bb.y1;

  // Lockup layout: mark art ~1.24x cap height, optically centered on the caps.
  const s = (1.24 * capsH) / ART_H;
  const pad = 0.14 * capsH;
  const markTx = pad - ART.x1 * s;
  const capsCenter = bb.y1 + capsH / 2;
  const markTy = capsCenter + 0.03 * capsH - ((ART.y1 + ART.y2) / 2) * s;
  const gap = 0.42 * capsH;
  const textX = pad + ART_W * s + gap - bb.x1;
  const wordPath = font
    .getPath("Lilt UI", textX, 0, fontSize, textOptions)
    .toPathData(2);
  const top = Math.min(bb.y1, markTy + ART.y1 * s) - pad;
  const bottom = Math.max(bb.y2, markTy + ART.y2 * s) + pad;
  const width = round(textX + bb.x2 + pad);
  const height = round(bottom - top);
  const viewBox = `0 ${round(top)} ${width} ${height}`;
  const markTransform = `translate(${round(markTx)} ${round(markTy)}) scale(${round(s)})`;

  const lockup = (c: { mark: string; text: string }) =>
    svg(
      viewBox,
      width,
      height,
      `${markGroup(c.mark, markTransform)}\n  <path d="${wordPath}" fill="${c.text}"/>`
    );

  // Tagline outlined for the OG image (no font loading at render time).
  const tagline = "Precision with a playful rhythm.";
  const tagProbe = font.getPath(tagline, 0, 0, fontSize, textOptions);
  const tagBb = tagProbe.getBoundingBox();
  const tagPad = 2;
  const tagPath = font
    .getPath(tagline, tagPad - tagBb.x1, 0, fontSize, textOptions)
    .toPathData(2);
  const tagW = round(tagBb.x2 - tagBb.x1 + 2 * tagPad);
  const tagH = round(tagBb.y2 - tagBb.y1 + 2 * tagPad);
  const taglineSvg = (fill: string) =>
    svg(
      `0 ${round(tagBb.y1 - tagPad)} ${tagW} ${tagH}`,
      tagW,
      tagH,
      `\n  <path d="${tagPath}" fill="${fill}"/>`
    );

  const brandDir = path.join(ROOT, "public/brand");
  await mkdir(brandDir, { recursive: true });

  const adaptiveMark = svg(
    "0 0 24 24",
    24,
    24,
    `
  <style>:root{color:${LIGHT.mark}}@media (prefers-color-scheme:dark){:root{color:${DARK.mark}}}</style>${markGroup("currentColor")}`
  );

  await writeFile(path.join(brandDir, "lilt-mark.svg"), adaptiveMark);
  await writeFile(path.join(brandDir, "lilt-lockup-light.svg"), lockup(LIGHT));
  await writeFile(path.join(brandDir, "lilt-lockup-dark.svg"), lockup(DARK));
  await writeFile(path.join(ROOT, "app/icon.svg"), badgeSvg(64));

  const [png16, png32, apple] = await Promise.all([
    sharp(Buffer.from(badgeSvg(16)))
      .png()
      .toBuffer(),
    sharp(Buffer.from(badgeSvg(32)))
      .png()
      .toBuffer(),
    sharp(Buffer.from(badgeSvg(180)))
      .flatten({ background: MINT })
      .png()
      .toBuffer(),
  ]);
  await writeFile(
    path.join(ROOT, "app/favicon.ico"),
    await pngToIco([png16, png32])
  );
  await writeFile(path.join(ROOT, "app/apple-icon.png"), apple);

  const generated = `// Generated by scripts/generate-brand.ts — do not edit by hand.
// "Lilt UI" + tagline in Space Grotesk 600, -0.02em tracking, outlined so the
// OG image renders without loading fonts.
export const LOCKUP_LIGHT_SVG = ${JSON.stringify(stripDims(lockup(LIGHT)))};
export const LOCKUP_SIZE = { height: ${height}, width: ${width} } as const;
export const TAGLINE_LIGHT_SVG = ${JSON.stringify(stripDims(taglineSvg("#4b5449")))};
export const TAGLINE_SIZE = { height: ${tagH}, width: ${tagW} } as const;
`;
  await writeFile(
    path.join(ROOT, "components/lilt-brand.generated.ts"),
    generated
  );

  console.log(`lockup ${width}x${height} — assets written:
  public/brand/{lilt-mark,lilt-lockup-light,lilt-lockup-dark}.svg
  app/{icon.svg,favicon.ico,apple-icon.png}
  components/lilt-brand.generated.ts`);
};

await main();
