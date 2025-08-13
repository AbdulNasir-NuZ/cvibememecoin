"use client"

import { useEffect, useRef } from "react"

/**
 * Full-screen video background for the entire website using internet URL
 */
export default function GlobalBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure video plays with sound on user interaction
    const playVideoWithSound = async () => {
      try {
        video.muted = false // Enable sound
        await video.play()
      } catch (error) {
        console.log("Video autoplay with sound failed, falling back to muted:", error)
        // Fallback to muted autoplay if sound fails
        video.muted = true
        try {
          await video.play()
        } catch (mutedError) {
          console.log("Muted video autoplay also failed:", mutedError)
        }
      }
    }

    // Try to play with sound immediately
    playVideoWithSound()

    // Also try to enable sound on first user interaction
    const enableSoundOnInteraction = () => {
      if (video.muted) {
        video.muted = false
        video.play().catch(() => {
          // If it fails, keep it muted
          video.muted = true
        })
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", enableSoundOnInteraction)
      document.removeEventListener("touchstart", enableSoundOnInteraction)
      document.removeEventListener("keydown", enableSoundOnInteraction)
    }

    document.addEventListener("click", enableSoundOnInteraction)
    document.addEventListener("touchstart", enableSoundOnInteraction)
    document.addEventListener("keydown", enableSoundOnInteraction)

    return () => {
      document.removeEventListener("click", enableSoundOnInteraction)
      document.removeEventListener("touchstart", enableSoundOnInteraction)
      document.removeEventListener("keydown", enableSoundOnInteraction)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Full-screen video background with internet URL */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        crossOrigin="anonymous"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Using the Pexels video URL you provided */}
        <source src="https://videos.pexels.com/video-files/3576395/3576395-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900" />
      </video>

      {/* Light overlay for content readability - REDUCED OPACITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/20" />

      {/* Additional subtle overlay for better text contrast - REDUCED OPACITY */}
      <div className="absolute inset-0 bg-purple-900/5" />
    </div>
  )
}
