import Image from "next/image"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border border-purple-300/60 bg-purple-50/70 px-4 py-2text-cyan-50/90 backdrop-blur hover:bg-purple-100/70"
    >
      <span className="font-semibold">{label}</span>
    </a>
  )
}

export default function CommunityPage() {
  return (
    <main className="relative min-h-[100dvh]text-cyan-50/90">
      <SectionWrapper
        id="community-hero"
        className="h-[50vh] min-h-[420px] flex items-center"
        contentClassName="h-full flex items-center"
      >
        <div className="max-w-3xl">
          <Heading3D text="Community" />
          <h1 className="sr-only">Community</h1>
          <p className="mt-4 text-cyan-50/90">
            Join the CVIBE fam: memes, builders, creators, and longboarders riding the same wave.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WalletConnectButton color="indigo" />
            <Button3D href="/" color="purple">
              Back to Home
            </Button3D>
          </div>
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-cyan-50/90 ">Hangouts</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <SocialLink href="#" label="Twitter / X" />
              <SocialLink href="#" label="Telegram" />
              <SocialLink href="#" label="Discord" />
              <SocialLink href="#" label="Reddit" />
            </div>
            <p className="mt-6 text-cyan-50/90">
              Share memes, propose ideas, help new surfers get onboarded, and vote on community initiatives.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=420&width=560"
              alt="Community Vibes"
              width={560}
              height={420}
              className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-purple-300/60 bg-purple-50/70 backdrop-blur"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-300/30 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="py-6">{/* FooterBeach3D component removed */}</div>
          <div className="flex flex-wrap items-center gap-4 py-8 text-sm">
            <a href="/" className="text-cyan-50/90 hover:underline underline-offset-4">
              Home
            </a>
            <a href="/tokenomics" className="text-cyan-50/90 hover:underline underline-offset-4">
              Tokenomics
            </a>
            <a href="/roadmap" className="text-cyan-50/90 hover:underline underline-offset-4">
              Roadmap
            </a>
            <a href="/faq" className="text-cyan-50/90 hover:underline underline-offset-4">
              FAQ
            </a>
            <a href="/whitepaper" className="text-cyan-50/90 hover:underline underline-offset-4">
              Whitepaper
            </a>
            <a href="/partners" className="text-cyan-50/90 hover:underline underline-offset-4">
              Partners
            </a>
            <a href="/community" className="text-cyan-50/90 hover:underline underline-offset-4">
              Community
            </a>
          </div>
          <div className="flex items-center justify-between border-t border-purple-300/20 py-6 text-xs text-cyan-50/90">
            <p>&copy; {new Date().getFullYear()} CVIBE. All rights reserved.</p>
            <p>Made with love and ocean vibes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
