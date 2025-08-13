"use client"

import { useEffect, useRef } from "react"
import Coin3D from "./coin-3d"

type CoinTravel3DProps = {
  startSelector?: string
  endSelector?: string
  coinImage?: string
}

export default function CoinTravel3D({
  startSelector = "#intro",
  endSelector = "#features",
  coinImage,
}: CoinTravel3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    let frame: number

    const animate = () => {
      if (!ref.current) return

      const scroll = window.scrollY
      const vw = window.innerWidth
      const vh = window.innerHeight

      // Find elements
      const introSection = document.querySelector(startSelector) as HTMLElement | null
      const cvibeImage = document.querySelector(`${startSelector} img`) as HTMLImageElement | null
      const footerSection = document.querySelector("footer") as HTMLElement | null

      if (!introSection || !cvibeImage || !footerSection) {
        ref.current.style.opacity = "0"
        ref.current.style.visibility = "hidden"
        frame = requestAnimationFrame(animate)
        return
      }

      // Calculate positions
      const introTop = introSection.offsetTop
      const footerTop = footerSection.offsetTop

      // Show coin when page 2 image is visible
      const showAt = introTop - vh * 0.2
      const hideAt = footerTop + vh * 0.2

      // Hide coin outside the range
      if (scroll < showAt || scroll > hideAt) {
        ref.current.style.opacity = "0"
        ref.current.style.visibility = "hidden"
        frame = requestAnimationFrame(animate)
        return
      }

      // Show coin
      ref.current.style.visibility = "visible"

      // Travel logic
      const travelStartAt = introTop + vh * 0.1

      if (scroll < travelStartAt) {
        // PHASE 1: Float ABOVE PAGE 2 IMAGE (VIEWPORT COORDINATES)
        const time = Date.now() / 1000
        const floatX = Math.sin(time * 0.8) * 15
        const floatY = Math.cos(time * 1.0) * 12

        // FIXED VIEWPORT POSITION - Right side, upper area
        const coinX = vw * 0.7 // 70% from left (right side)
        const coinY = vh * 0.2 // 20% from top (upper area)

        ref.current.style.left = `${coinX + floatX}px`
        ref.current.style.top = `${coinY + floatY}px`
        ref.current.style.opacity = "1"
        ref.current.style.zIndex = "95"
        ref.current.style.transform = "scale(1.3)"
      } else {
        // PHASE 2: CURVED TRAVEL TO BIG ROTATING COIN
        const travelProgress = Math.min(1, (scroll - travelStartAt) / (hideAt - travelStartAt))

        // START: Right side, upper area
        const startX = vw * 0.7 // 70% from left
        const startY = vh * 0.2 // 20% from top

        // END: Center of screen where big rotating coin is
        const endX = vw * 0.5 // 50% from left (center)
        const endY = vh * 0.5 // 50% from top (center)

        // QUADRATIC BEZIER CURVE CALCULATION
        // Control point creates the curve (offset from straight line)
        const controlX = startX - vw * 0.2 // Pull curve to the left
        const controlY = startY + vh * 0.3 // Pull curve downward

        // Quadratic Bezier formula: B(t) = (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
        const t = travelProgress
        const oneMinusT = 1 - t

        const currentX = oneMinusT * oneMinusT * startX + 2 * oneMinusT * t * controlX + t * t * endX

        const currentY = oneMinusT * oneMinusT * startY + 2 * oneMinusT * t * controlY + t * t * endY

        // FORCE STAY IN VIEWPORT BOUNDS
        const clampedX = Math.max(50, Math.min(vw - 250, currentX))
        const clampedY = Math.max(50, Math.min(vh - 250, currentY))

        // Floating animation during travel
        const time = Date.now() / 1000
        const floatX = Math.sin(time * 1.2) * 8
        const floatY = Math.cos(time * 1.4) * 6

        // Hide when reaching big coin position
        let opacity = 1
        let scale = 1.3
        let zIndex = 95

        if (travelProgress > 0.85) {
          const fadeProgress = (travelProgress - 0.85) / 0.15
          opacity = Math.max(0, 1 - fadeProgress * 4) // Fast fade
          scale = 1.3 - fadeProgress * 1.0
          zIndex = 5 // Behind big coin
        }

        ref.current.style.left = `${clampedX + floatX}px`
        ref.current.style.top = `${clampedY + floatY}px`
        ref.current.style.opacity = opacity.toString()
        ref.current.style.zIndex = zIndex.toString()
        ref.current.style.transform = `scale(${scale})`
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [startSelector, endSelector])

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none"
      style={{
        width: "200px",
        height: "200px",
        opacity: 0,
        visibility: "hidden",
        zIndex: 95,
        transform: "scale(1.3)",
      }}
    >
      <Coin3D spinSpeed={2.6} metalness={0.95} roughness={0.15} coinImage={coinImage} />
    </div>
  )
}
