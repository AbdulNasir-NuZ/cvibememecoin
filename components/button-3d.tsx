"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type Button3DProps = {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  color?: "purple" | "indigo"
}

export default function Button3D({ children, className, href, onClick, color = "purple" }: Button3DProps) {
  const base =
    "relative inline-flex items-center justify-center rounded-xl px-6 h-12 select-none active:translate-y-[2px] focus:outline-none focus:ring-2"
  const palette =
    color === "indigo"
      ? "bg-gradient-to-b from-indigo-300 to-indigo-400 text-indigo-900 ring-indigo-500/30 shadow-[0_8px_0_rgba(67,56,202,0.28),0_18px_28px_-10px_rgba(67,56,202,0.35)]"
      : "bg-gradient-to-b from-purple-300 to-purple-400 text-purple-900 ring-purple-500/30 shadow-[0_8px_0_rgba(124,58,237,0.28),0_18px_28px_-10px_rgba(124,58,237,0.35)]"
  const hover =
    color === "indigo" ? "hover:from-indigo-400 hover:to-indigo-500" : "hover:from-purple-400 hover:to-purple-500"

  const cls = cn(base, palette, hover, className)

  const Inner = (
    <>
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-purple-50/40 to-transparent mix-blend-overlay" />
      <span className="relative font-semibold">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls}>
        {Inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {Inner}
    </button>
  )
}
