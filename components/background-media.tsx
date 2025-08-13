import Image from "next/image"

type BackgroundMediaProps = {
  videoSrc?: string
  posterSrc?: string
  gifSrc?: string
  overlayClassName?: string
}

/**
 * Fixed, full-viewport background media that sits behind all content.
 * - Uses video as the primary background
 * - Falls back to GIF (and static poster) for reduced motion or when video is unavailable
 */
export default function BackgroundMedia({
  // videoSrc = "https://cdn.coverr.co/videos/coverr-ocean-waves-1560/1080p.mp4",
  videoSrc = "/public/video/cvibes.mp4",
  posterSrc = "/public/images/coinmeme.png",
  gifSrc = "/media/beach-loop.gif",
  overlayClassName = "from-black/70 via-black/60 to-black/80",
}: BackgroundMediaProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Video shown by default; hidden if user prefers reduced motion */}
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* GIF fallback for reduced motion users or when video is disabled */}
      <div className="relative hidden h-full w-full motion-reduce:block">
        <Image
          alt=""
          src={gifSrc || "/placeholder.svg"}
          fill
          sizes="100vw"
          priority
          aria-hidden="true"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Global readability overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlayClassName}`}
      />
    </div>
  );
}
