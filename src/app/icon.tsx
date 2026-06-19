import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#020304",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(103, 232, 249, 0.55)",
            borderRadius: 7,
            boxShadow: "0 0 12px rgba(103, 232, 249, 0.7)",
            color: "#67e8f9",
            display: "flex",
            fontSize: 15,
            fontWeight: 800,
            height: 25,
            justifyContent: "center",
            letterSpacing: -1,
            width: 25,
          }}
        >
          N
        </div>
      </div>
    ),
    size,
  );
}
