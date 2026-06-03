import { ImageResponse } from "next/og";

export const alt =
  "MCA Settlement Reviews — Independent ratings of MCA debt relief companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social-share card for any page without its own opengraph-image.
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a2540",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg viewBox="0 0 20 20" width={44} height={44} fill="#f5b800">
            <path d="M10 1.5l2.7 5.5 6.05.88-4.38 4.27 1.04 6.04L10 15.27l-5.41 2.92 1.04-6.04L1.25 7.88 7.3 7z" />
          </svg>
          <div
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            MCA Settlement Reviews
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Independent ratings of MCA debt relief companies
          </div>
          <div style={{ color: "#f5b800", fontSize: 28, fontWeight: 600 }}>
            Verified BBB records · No compensation · No sponsorships
          </div>
        </div>

        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 24 }}>
          mcasettlementreviews.com
        </div>
      </div>
    ),
    { ...size },
  );
}
