"use client"

type Heading3DProps = {
  text: string
  className?: string
  variant?: "hero" | "sand"
}

export default function Heading3D({ text, className = "", variant = "hero" }: Heading3DProps) {
  // CONSISTENT PROFESSIONAL OCEAN-THEMED HEADING FOR ALL PAGES
  return (
    <div className={"relative inline-block select-none text-center " + className}>
      <span
        className="
          relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black
          bg-gradient-to-r from-cyan-200 via-blue-100 to-teal-200 bg-clip-text text-transparent
          drop-shadow-2xl
        "
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          textShadow: `
            0 0 20px rgba(255,255,255,0.5),
            0 0 40px rgba(59,130,246,0.3),
            0 0 60px rgba(14,165,233,0.2),
            2px 2px 4px rgba(0,0,0,0.8),
            4px 4px 8px rgba(0,0,0,0.6)
          `,
          letterSpacing: "-0.02em",
          lineHeight: "0.9",
        }}
      >
        {text}
      </span>

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black opacity-30 blur-sm"
        style={{
          background: "linear-gradient(45deg, #06b6d4, #3b82f6, #0ea5e9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          letterSpacing: "-0.02em",
          lineHeight: "0.9",
        }}
      >
        {text}
      </div>
    </div>
  )
}
