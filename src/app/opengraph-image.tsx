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
          <svg viewBox="0 0 64 64" width={48} height={48}>
            <path
              fill="#f5b800"
              d="M30 10 C33 23 39 29 52 32 C39 35 33 41 30 54 C27 41 21 35 8 32 C21 29 27 23 30 10 Z"
            />
            <path
              fill="#ffd34d"
              d="M47 12 C47.8 15.4 49.6 17.2 53 18 C49.6 18.8 47.8 20.6 47 24 C46.2 20.6 44.4 18.8 41 18 C44.4 17.2 46.2 15.4 47 12 Z"
            />
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
