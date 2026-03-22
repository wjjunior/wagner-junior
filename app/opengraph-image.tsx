import { ImageResponse } from "next/og";
import { translations } from "@/shared/i18n/translations";

const t = translations.en;

export const runtime = "edge";

export const alt = `${t.header.title} — ${t.header.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "linear-gradient(135deg, #030014 0%, #1a0a2e 50%, #030014 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "6px",
              color: "#a78bfa",
            }}
          >
            {t.header.subtitle}
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1,
              background: "linear-gradient(135deg, #f0f0f0 0%, #7c3aed 50%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t.header.title}
          </span>
          <span
            style={{
              fontSize: "24px",
              lineHeight: 1.5,
              color: "#8a8a9a",
              maxWidth: "700px",
            }}
          >
            {t.header.tagline}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            left: "80px",
            fontSize: "18px",
            color: "#5a5a6a",
          }}
        >
          wagnerjunior.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
