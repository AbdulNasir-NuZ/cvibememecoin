"use client"

import { useEffect, useRef, useState } from "react"
import CoinCSS from "./coin-css"

// Single coin that appears starting in the "intro" section (What is CVIBE?)
// then travels toward the Contact section while scrolling.
export default function CoinTravel({
  startSelector = "#intro",
  endSelector = "#contact",
  size = 176,
}: {
  startSelector?: string
  endSelector?: string
  size?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const startEl = document.querySelector(startSelector) as HTMLElement | null
    const endEl = document.querySelector(endSelector) as HTMLElement | null
    if (!startEl || !endEl) return

    const vh = window.innerHeight
    const vw = window.innerWidth
    let startAbs = 0
    let endAbs = 0
    let startX = vw * 0.7
    let startY = vh * 0.25

    const computeAnchors = () => {
      const sRect = startEl.getBoundingClientRect()
      const eRect = endEl.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset

      startAbs = sRect.top + scrollY + sRect.height * 0.5
      endAbs = eRect.top + scrollY + eRect.height * 0.5

      const img = document.querySelector("#intro img") as HTMLImageElement | null
      if (img) {
        const imgRect = img.getBoundingClientRect()
        const imgAbsTop = imgRect.top + scrollY
        const imgAbsRight = imgRect.right
        startY = imgAbsTop - startAbs + vh / 2 - size - 12
        startY = Math.max(8, Math.min(vh - size - 8, startY))
        startX = Math.min(vw - size - 12, imgAbsRight + 16)
      }

      setReady(true)
    }

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    let last = 0
    const animate = (ts: number) => {
      const dt = Math.min(0.05, (ts - last) / 1000)
      last = ts

      const scrollY = window.scrollY || window.pageYOffset
      const vhNow = window.innerHeight
      const vwNow = window.innerWidth

      const endX = vwNow * 0.18
      const endY = vhNow * 0.7

      const startAt = startAbs - vhNow * 0.5
      const endAt = endAbs - vhNow * 0.5
      const progress = clamp01((scrollY - startAt) / Math.max(1, endAt - startAt))

      if (ref.current) {
        const wiggle = Math.sin(ts / 300) * Math.min(40, vwNow * 0.03)
        const x = lerp(startX, endX, progress) + wiggle
        const y = lerp(startY, endY, progress)
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
        ref.current.style.opacity = progress > 0 && progress < 1 ? "1" : "0"
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    computeAnchors()
    const onResize = () => computeAnchors()
    window.addEventListener("resize", onResize)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [startSelector, endSelector, size])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-40 transition-opacity duration-300"
      style={{ width: size, height: size, opacity: ready ? 0 : 0 }}
      aria-hidden="true"
    >
      <CoinCSS size={size} speed={2.4} />
    </div>
  )
}
