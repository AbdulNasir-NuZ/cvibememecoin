"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error server or client
    console.error("Route error:", error)
  }, [error])

  return (
    <div className="container px-4 md:px-6 py-16">
      <div className="mx-auto max-w-xl rounded-xl border border-purple-300/40 bg-purple-50/70 p-6 text-purple-900 backdrop-blur">
        <h2 className="text-xl font-semibold">Something went wrong.</h2>
        <p className="mt-2 text-sm text-indigo-900">
          We&apos;ve caught the error. You can try to recover and re-render this section.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-purple-400 px-4 text-purple-900 hover:bg-purple-500"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
