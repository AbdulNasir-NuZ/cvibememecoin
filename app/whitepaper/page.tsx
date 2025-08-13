import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"

export default function WhitepaperPage() {
  return (
    <main className="relative min-h-[100dvh] text-purple-900">
      <SectionWrapper
        id="whitepaper-hero"
        className="h-[56vh] min-h-[460px] flex items-center"
        contentClassName="h-full flex items-center"
      >
        <div className="max-w-3xl">
          <Heading3D text="Whitepaper" />
          <h1 className="sr-only">Whitepaper</h1>
          <p className="mt-4 text-indigo-900">
            Explore CVIBE’s mission, token mechanics, and vision for an ocean-sized memetic ecosystem.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button3D href="/" color="purple">
              Back to Home
            </Button3D>
            <WalletConnectButton color="indigo" />
          </div>
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-purple-900">Summary</h2>
            <p className="mt-3 text-indigo-900">
              CVIBE aligns fair distribution with community incentives. Zero tax, LP locked, and transparent reporting.
            </p>
            <ul className="mt-4 list-disc pl-5 text-indigo-900 space-y-2">
              <li>Fair launch and renounced mint</li>
              <li>Clear token utility and roadmap</li>
              <li>Community governance experiments</li>
            </ul>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=420&width=560"
              alt="Whitepaper Diagram"
              width={560}
              height={420}
              className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-purple-300/60 bg-purple-50/70 backdrop-blur"
            />
            <div className="mt-4 flex gap-3">
              <Button3D color="indigo" href="#">
                Download (PDF)
              </Button3D>
              <Button3D color="purple" href="#">
                View Online
              </Button3D>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-300/30 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="py-6">{/* FooterBeach3D component removed */}</div>
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
