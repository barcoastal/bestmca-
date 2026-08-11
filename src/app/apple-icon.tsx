import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a2540",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width={104}
          height={104}
          xmlns="http://www.w3.org/2000/svg"
        >
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
            color: "#f5b800",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          MCA
        </div>
      </div>
    ),
    { ...size },
  );
}
