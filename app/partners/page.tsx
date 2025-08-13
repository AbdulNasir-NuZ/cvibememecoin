import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"

function PartnerCard({ name }: { name: string }) {
  return (
    <div className="rounded-xl border border-purple-300/50 bg-purple-50/70 p-5 backdrop-blur text-purple-900">
      <div className="flex items-center gap-3">
        <Image
          src="/placeholder.svg?height=40&width=40"
          width={40}
          height={40}
          alt={`${name} logo`}
          className="rounded-full"
        />
        <div className="font-semibold">{name}</div>
      </div>
      <p className="mt-3 text-sm text-indigo-900">
        Strategic partner helping expand CVIBE’s reach and utility across ecosystems.
      </p>
    </div>
  )
}

export default function PartnersPage() {
  const partners = ["WaveDEX", "OceanScan", "SurfGuard", "MemeLabs", "TideTools", "BeachWallet"]
  return (
    <main className="relative min-h-[100dvh] text-purple-900">
      <SectionWrapper
        id="partners-hero"
        className="h-[50vh] min-h-[420px] flex items-center"
        contentClassName="h-full flex items-center"
      >
        <div className="max-w-3xl">
          <Heading3D text="Partners" />
          <h1 className="sr-only">Partners</h1>
          <p className="mt-4 text-indigo-900">
            Collaborations that accelerate CVIBE adoption, integrations, and community growth.
          </p>
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <PartnerCard key={p} name={p} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-300/30 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center gap-4 py-8 text-sm">
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
            <a href="/whitepaper" className="text-purple-900 hover:underline underline-offset-4">
              Whitepaper
            </a>
            <a href="/partners" className="text-purple-900 hover:underline underline-offset-4">
              Partners
            </a>
            <a href="/community" className="text-purple-900 hover:underline underline-offset-4">
              Community
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-purple-300/20 py-6 text-xs text-indigo-900">
            <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
            <p>Made with love and ocean vibes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
