import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0512",
          borderRadius: "6px",
          border: "2px solid #8b1e5a",
          boxSizing: "border-box",
        }}
      >
        {/* Pixel Blocky 'D' */}
        <div
          style={{
            position: "relative",
            width: "18px",
            height: "20px",
            backgroundColor: "#ff1493",
            borderRadius: "0 6px 6px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "10px",
              backgroundColor: "#0a0512",
              borderRadius: "0 3px 3px 0",
              marginLeft: "-2px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
