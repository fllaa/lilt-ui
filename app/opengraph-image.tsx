import { ImageResponse } from "next/og";

import {
  LOCKUP_LIGHT_SVG,
  LOCKUP_SIZE,
  TAGLINE_LIGHT_SVG,
  TAGLINE_SIZE,
} from "@/components/lilt-brand.generated";
import { LILT_WAVE_PATH } from "@/components/lilt-logo";

export const alt = "LiltUI — a precise, warm, playful component registry";
export const size = { height: 630, width: 1200 };
export const contentType = "image/png";

const svgUri = (markup: string) =>
  `data:image/svg+xml,${encodeURIComponent(markup)}`;

// Oversized, soft-mint echo of the mark, tucked into the card's corner.
const decorativeWave = `<svg xmlns="http://www.w3.org/2000/svg" width="620" height="620" viewBox="0 0 24 24" fill="none">
  <path d="${LILT_WAVE_PATH}" stroke="#e3f7ed" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default function OpengraphImage() {
  const lockupWidth = 620;
  const lockupHeight = (lockupWidth / LOCKUP_SIZE.width) * LOCKUP_SIZE.height;
  const taglineWidth = 660;
  const taglineHeight =
    (taglineWidth / TAGLINE_SIZE.width) * TAGLINE_SIZE.height;

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#eceae2",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#fdfcf8",
          border: "2px solid #e3e1d8",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          height: 550,
          justifyContent: "center",
          overflow: "hidden",
          paddingLeft: 96,
          position: "relative",
          width: 1120,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static data URI in an OG canvas */}
        <img
          alt=""
          height={620}
          src={svgUri(decorativeWave)}
          style={{ bottom: -270, position: "absolute", right: -150 }}
          width={620}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static data URI in an OG canvas */}
        <img
          alt=""
          height={lockupHeight}
          src={svgUri(LOCKUP_LIGHT_SVG)}
          width={lockupWidth}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static data URI in an OG canvas */}
        <img
          alt=""
          height={taglineHeight}
          src={svgUri(TAGLINE_LIGHT_SVG)}
          style={{ marginTop: 48 }}
          width={taglineWidth}
        />
      </div>
    </div>,
    size
  );
}
