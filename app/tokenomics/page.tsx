import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"
import FooterCoin3D from "@/components/footer-coin-3d"
import GlassCard from "@/components/glass-card"
import AppProviders from "@/components/app-providers"

export default function TokenomicsPage() {
  return (
    <AppProviders>
      <main className="relative min-h-[100dvh] text-purple-900">
        {/* Hero */}
        <SectionWrapper
          id="tokenomics-hero"
          className="h-[60vh] min-h-[460px] flex items-center"
          contentClassName="h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <Heading3D text="Tokenomics" className="block" />
            <h1 className="sr-only">Tokenomics</h1>
            <p className="mt-4 max-w-2xl mx-auto text-base text-indigo-900 md:text-lg">
              Simple, fair, and transparent. CVIBE is engineered for longevity with clean mechanics and community-first
              distribution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
              <Button3D href="/roadmap" color="purple">
                View Roadmap
              </Button3D>
              <WalletConnectButton color="indigo" />
            </div>
          </div>
        </SectionWrapper>

        {/* Stats */}
        <section className="relative py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <GlassCard title="Total Supply">1,000,000,000 CVIBE</GlassCard>
              <GlassCard title="Tax">0% Buy / 0% Sell</GlassCard>
              <GlassCard title="LP">Locked</GlassCard>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <GlassCard title="Community">92%</GlassCard>
              <GlassCard title="CEX/LP/Market">5%</GlassCard>
              <GlassCard title="Treasury/Partnerships">3%</GlassCard>
            </div>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-purple-900">Principles</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-indigo-900">
                  <li>Fair launch, no team allocation, no presale.</li>
                  <li>Renounced mint, audited contract, public analytics.</li>
                  <li>Gas-optimized transfers and clean, transparent mechanics.</li>
                </ul>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=420&width=560"
                  alt="CVIBE Token Distribution"
                  width={560}
                  height={420}
                  className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-purple-300/60 bg-purple-50/70 backdrop-blur"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-300/30 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="py-6">
              {/* Rotating coin above footer (no beach elements) */}
              <FooterCoin3D />
            </div>
            <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="Token Logo"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-purple-900">CVIBE</p>
                  <p className="text-xs text-indigo-900">Ride the meme wave responsibly.</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="/" className="text-purple-900 hover:underline underline-offset-4">
                  Home
                </a>
                <a href="/tokenomics" className="text-purple-900 hover:underline underline-offset-4">
                  Tokenomics
                </a>
                <a href="/roadmap" className="text-purple-900 hover:underline underline-offset-4">
                  Roadmap
                </a>
                <a href="/faq" className="text-purple-900 hover:underline underline-offset-4">
                  FAQ
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-purple-300/20 py-6 text-xs text-indigo-900">
              <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
              <p>Made with love and ocean vibes.</p>
            </div>
          </div>
        </footer>
      </main>
    </AppProviders>
  )
}
