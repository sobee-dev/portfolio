import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(30,58,138,0.4) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: 16, fontWeight: 600 }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-2px",
          }}
        >
          Obinna Samuel E.
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: 32,
            color: "#60a5fa",
            fontWeight: 600,
            margin: "16px 0 0",
          }}
        >
          Fullstack Software Developer
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: 20,
            color: "#94a3b8",
            margin: "20px 0 0",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          I build websites and apps that help businesses look credible online and convert more clients.
        </p>

        {/* Skills pills */}
        <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
          {["Next.js", "React", "Node.js", "Django", "TypeScript"].map((skill) => (
            <div
              key={skill}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "8px 16px",
                color: "#cbd5e1",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "#475569", fontSize: 18 }}>
            portfolio-sobee-devs-projects.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}