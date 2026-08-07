import { ImageResponse } from "next/og";

export const alt =
  "Sterling Digital — premium web design, development, and automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card shown when the site is shared on Instagram, WhatsApp, LinkedIn, etc.
// Built at build time so it stays a static asset.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background: "#0C2A1E",
          backgroundImage:
            "radial-gradient(60% 70% at 22% 26%, rgba(176,141,87,0.22), transparent 70%), radial-gradient(55% 65% at 78% 76%, rgba(90,160,120,0.16), transparent 72%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "3px solid #B08D57",
              color: "#F1E9D8",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5 }}>
            <span style={{ color: "#F1E9D8", fontWeight: 700 }}>Sterling</span>
            <span style={{ color: "#B08D57", fontWeight: 700, marginLeft: 10 }}>
              Digital
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.12,
              color: "#F1E9D8",
            }}
          >
            <span>We build websites that make</span>
            <span style={{ color: "#B08D57" }}>businesses impossible to ignore.</span>
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 29,
              color: "#C9BFA8",
              display: "flex",
            }}
          >
            Premium design · Ultra-fast development · Smart automation
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(241,233,216,0.14)",
            paddingTop: 26,
            fontSize: 26,
            color: "#8A7E63",
          }}
        >
          <span>sterlingdigital.gr</span>
          <span style={{ color: "#B08D57" }}>Book a call →</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
