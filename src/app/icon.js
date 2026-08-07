import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser-tab mark: gold "S" monogram inside a gold ring on the brand green.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C2A1E",
        }}
      >
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
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
