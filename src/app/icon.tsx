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
          viewBox="0 0 20 20"
          width={22}
          height={22}
          fill="#f5b800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1.5l2.7 5.5 6.05.88-4.38 4.27 1.04 6.04L10 15.27l-5.41 2.92 1.04-6.04L1.25 7.88 7.3 7z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
