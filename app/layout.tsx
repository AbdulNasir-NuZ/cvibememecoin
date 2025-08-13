import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GlobalBackground from "@/components/global-background"
import ClientErrorBoundary from "@/components/client-error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CVIBE - Ride the Meme Wave",
  description: "Community-driven meme token celebrating good vibes, decentralization, and ocean-sized memes.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-transparent`}>
        <ClientErrorBoundary>
          {/* Full-screen video background for entire site */}
          <GlobalBackground />
          {children}
        </ClientErrorBoundary>
      </body>
    </html>
  )
}
