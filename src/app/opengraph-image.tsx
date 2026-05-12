import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yorksell Real Estate Group | Toronto & GTA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backgroundColor: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 10% 110%, rgba(180,140,90,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top-right subtle grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "480px",
            height: "480px",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at top right, black 20%, transparent 70%)",
          }}
        />

        {/* Location pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#b48c5a",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Toronto &amp; GTA Real Estate
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          Advice You Can Trust.
        </div>

        {/* Divider */}
        <div
          style={{
            width: "64px",
            height: "2px",
            backgroundColor: "#b48c5a",
            marginBottom: "32px",
          }}
        />

        {/* Brand name + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.01em",
            }}
          >
            Yorksell Real Estate Group
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.02em",
            }}
          >
            yorksell.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
