import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a2540",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width={26}
          height={26}
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
      </div>
    ),
    { ...size },
  );
}
