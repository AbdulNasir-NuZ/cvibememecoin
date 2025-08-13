"use client"

import { useEffect, useRef } from "react"

export default function CoinCSS({ size = 160, speed = 3 }: { size?: number; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      ref.current.style.animation = "none"
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        animation: `coin-rotate ${speed}s linear infinite`,
      }}
      aria-hidden="true"
    >
      {/* Rim */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 90deg at 50% 50%, #d4af37, #bf8c18, #e8c557, #d4af37)",
          filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
        }}
      />
      {/* Front */}
      <div
        className="absolute inset-[6%] rounded-full grid place-items-center"
        style={{
          background: "radial-gradient(circle at 30% 30%, #f9e19a, #e0c269 60%, #b8922a 100%)",
          transform: "translateZ(1px)",
          border: "2px solid rgba(124,58,237,0.35)",
          backfaceVisibility: "hidden",
        }}
      >
        <span className="font-extrabold text-purple-900" style={{ letterSpacing: 2 }}>
          CVIBE
        </span>
      </div>
      {/* Back */}
      <div
        className="absolute inset-[6%] rounded-full grid place-items-center"
        style={{
          background: "radial-gradient(circle at 70% 70%, #f9e19a, #e0c269 60%, #b8922a 100%)",
          transform: "rotateY(180deg) translateZ(1px)",
          border: "2px solid rgba(124,58,237,0.35)",
          backfaceVisibility: "visible",
        }}
      >
        <span className="font-bold text-indigo-900" style={{ letterSpacing: 2 }}>
          MEME
        </span>
      </div>

      <style jsx>{`
        @keyframes coin-rotate {
          0% {
            transform: rotateY(0deg) rotateX(10deg);
          }
          50% {
            transform: rotateY(180deg) rotateX(-10deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(10deg);
          }
        }
      `}</style>
    </div>
  )
}
