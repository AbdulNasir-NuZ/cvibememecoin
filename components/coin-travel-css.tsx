"use client"

import { useEffect, useRef, useState } from "react"
import CoinCSS from "./coin-css"

export default function CoinTravelCSS({
  startSelector = "#intro",
  endSelector = "#contact",
  size = 176,
}: {
  startSelector?: string
  endSelector?: string
  size?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Track rAF id and running state to avoid scheduling frames after unmount.
  const rafRef = useRef<number | null>(null)
  const runningRef = useRef<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const startEl = document.querySelector(startSelector) as HTMLElement | null
    const endEl = document.querySelector(endSelector) as HTMLElement | null
    if (!startEl || !endEl || !ref.current) return

    let startAbs = 0
    let endAbs = 0
    let startX = 0
    let startY = 0

    const computeAnchors = () => {
      const sRect = startEl.getBoundingClientRect()
      const eRect = endEl.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset
      const vh = window.innerHeight
      const vw = window.innerWidth

      startAbs = sRect.top + scrollY + sRect.height * 0.5
      endAbs = eRect.top + scrollY + eRect.height * 0.5

      const introImg = document.querySelector("#intro img") as HTMLImageElement | null
      if (introImg) {
        const r = introImg.getBoundingClientRect()
        startX = Math.min(vw - size - 12, r.right + 16)
        startY = Math.max(8, r.top + scrollY - startAbs + vh / 2 - size - 12)
      } else {
        startX = vw * 0.7
        startY = vh * 0.25
      }
    }

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = (ts: number) => {
      if (!runningRef.current) return
      const el = ref.current
      if (!el) {
        // stop if node vanished
        runningRef.current = false
        return
      }

      const scrollY = window.scrollY || window.pageYOffset
      const vh = window.innerHeight
      const vw = window.innerWidth

      const startAt = startAbs - vh * 0.5
      const endAt = endAbs - vh * 0.5
      const t = clamp01((scrollY - startAt) / Math.max(1, endAt - startAt))

      const endX = vw * 0.18
      const endY = vh * 0.72
      const wiggle = Math.sin(ts / 300) * Math.min(40, vw * 0.03)

      const x = lerp(startX, endX, t) + wiggle
      const y = lerp(startY, endY, t)

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      el.style.opacity = t > 0 && t < 1 ? "1" : "0"

      rafRef.current = requestAnimationFrame(animate)
    }

    computeAnchors()
    const onResize = () => computeAnchors()
    window.addEventListener("resize", onResize)

    runningRef.current = true
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      runningRef.current = false
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      window.removeEventListener("resize", onResize)
    }
  }, [mounted, startSelector, endSelector, size])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-40 transition-opacity duration-300"
      style={{ width: size, height: size, opacity: 0 }}
      aria-hidden="true"
    >
      {mounted && <CoinCSS size={size} speed={2.4} />}
    </div>
  )
}
