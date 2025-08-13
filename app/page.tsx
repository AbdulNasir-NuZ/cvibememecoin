import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import CoinTravel3D from "@/components/coin-travel-3d"
import FooterCoin3D from "@/components/footer-coin-3d"
import WalletConnectButton from "@/components/wallet-connect-button"
import CTASection from "@/components/cta-section"
import GlassCard from "@/components/glass-card"
import AppProviders from "@/components/app-providers"

export default function Page() {
  return (
    <AppProviders>
      <main className="relative min-h-[100dvh] text-white">
        {/* Traveling rotating coin - TRAVELS FROM RIGHT TO LEFT */}
        <CoinTravel3D
          startSelector="#intro"
          endSelector="footer"
          coinImage="/images/cvibecoin.png"
        />

        {/* Hero - Page 1 - CONSISTENT HEADING STYLE */}
        <SectionWrapper
          id="hero"
          className="h-[88vh] min-h-[560px] flex items-center"
          contentClassName="h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-100/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm">
              Next‑gen Meme Token on the Waves
            </div>

            <div className="mt-8">
              <Heading3D text="Ride the Meme Wave" className="block" />
              <h1 className="sr-only">Ride the Meme Wave</h1>
            </div>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-cyan-50/90 leading-relaxed">
              CVIBE is a community-driven token celebrating good vibes,
              decentralization, and ocean sized memes. Built for speed,
              fairness, and fun optimized for the next generation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Button3D href="#how-to-buy" color="purple">
                Buy Now
              </Button3D>
              <WalletConnectButton color="indigo" />
            </div>
          </div>
        </SectionWrapper>

        {/* What is CVIBE? - Page 2 - CONSISTENT HEADING STYLE */}
        <SectionWrapper id="intro" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <Heading3D text="What is CVIBE?" />
            <h2 className="sr-only">What is CVIBE?</h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="md:order-1">
              <p className="text-lg text-cyan-50/90 leading-relaxed">
                CVIBE token is a next-gen meme coin engineered for virality,
                speed, and community rewards. Crafted with modern token
                standards, transparent tokenomics, and zero team dump mechanics,
                it&apos;s designed for long-term waves not ripples.
              </p>
              <ul className="mt-8 space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400"
                    aria-hidden="true"
                  />
                  <span className="text-cyan-50/90">
                    Fair launch, LP locked, and renounced mint community first
                    from day one.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400"
                    aria-hidden="true"
                  />
                  <span className="text-cyan-50/90">
                    Optimized contract for low gas and high throughput.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-400"
                    aria-hidden="true"
                  />
                  <span className="text-cyan-50/90">
                    Rewards, quests, and viral-friendly referral drops.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:order-2">
              {/* This is the image where the traveling 3D coin starts from its center */}
              <Image
                src="/images/coinmeme.jpg"
                width={560}
                height={480}
                alt="CVIBE Visual"
                className="mx-auto aspect-video rounded-xl object-cover ring-1 ring-cyan-300/40 bg-cyan-50/10 backdrop-blur-sm shadow-2xl"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* About - Page 3 - CONSISTENT HEADING STYLE */}
        <SectionWrapper id="about" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <Heading3D text="About" />
            <h2 className="sr-only">About</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <GlassCard title="Vision">
              <span className="text-cyan-50/90">
                Empower a global beach loving community to co-create culture.
                Fun, transparent, and unstoppable.
              </span>
            </GlassCard>
            <GlassCard title="Tokenomics">
              <span className="text-cyan-50/90">
                1,000,000,000 supply • 0% tax • LP locked • No presale •
                Renounced mint. Simple. Fair. Clean.
              </span>
            </GlassCard>
            <GlassCard title="Chain">
              <span className="text-cyan-50/90">
                Deployed on a fast, low-fee L1/L2. Verified contract and open
                analytics for full transparency.
              </span>
            </GlassCard>
          </div>
        </SectionWrapper>

        {/* How to Buy - Page 4 - CONSISTENT HEADING STYLE */}
        <SectionWrapper id="how-to-buy" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <Heading3D text="How to Buy" />
            <h2 className="sr-only">How to Buy</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <GlassCard title="1. Get a Wallet">
              <span className="text-cyan-50/90">
                Install a crypto wallet like MetaMask or Phantom. Create a new
                wallet and back up your seed phrase securely.
              </span>
            </GlassCard>
            <GlassCard title="2. Fund & Select Network">
              <span className="text-cyan-50/90">
                Purchase or transfer the base token (e.g., ETH/SOL/BNB) to your
                wallet on the correct network.
              </span>
            </GlassCard>
            <GlassCard title="3. Swap for CVIBE">
              <span className="text-cyan-50/90">
                Open a DEX (Uniswap/PancakeSwap/Raydium), paste our contract
                address, select slippage if needed, and swap.
              </span>
            </GlassCard>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button3D href="https://app.uniswap.org/" color="indigo">
              Open DEX
            </Button3D>
            <Button3D color="purple">Copy Contract</Button3D>
          </div>
        </SectionWrapper>

        {/* Features - Page 5 - CONSISTENT HEADING STYLE */}
        <SectionWrapper id="features" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <Heading3D text="Why CVIBE?" />
            <h2 className="sr-only">Why CVIBE?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <GlassCard title="Fair Launch">
              <span className="text-cyan-50/90">
                No presales or team allocations. Everyone surfs the same wave.
              </span>
            </GlassCard>
            <GlassCard title="Security First">
              <span className="text-cyan-50/90">
                Audited contract, LP locked, and transparent analytics.
              </span>
            </GlassCard>
            <GlassCard title="Low Fees">
              <span className="text-cyan-50/90">
                Gas-optimized contract means more memes and fewer fees.
              </span>
            </GlassCard>
            <GlassCard title="Community Rewards">
              <span className="text-cyan-50/90">
                Quests, drops, and incentives for active contributors.
              </span>
            </GlassCard>
            <GlassCard title="Partnerships">
              <span className="text-cyan-50/90">
                Collaborations with brands, artists, and communities.
              </span>
            </GlassCard>
            <GlassCard title="Open & Transparent">
              <span className="text-cyan-50/90">
                Open-source and clear roadmap with governance.
              </span>
            </GlassCard>
          </div>
        </SectionWrapper>

        {/* Join Community Section - Page 6 - CONSISTENT HEADING STYLE */}
        <SectionWrapper id="community" className="py-20 md:py-28">
          <div className="mb-12 text-center">
            <Heading3D text="Join Community" />
            <h2 className="sr-only">Join Community</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <GlassCard title="Connect & Share">
                <div className="text-cyan-50/90">
                  <p className="mb-6">
                    Join the CVIBE fam: memes, builders, creators, and
                    longboarders riding the same wave.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-50/10 px-4 py-2 text-cyan-100 backdrop-blur-sm hover:bg-cyan-50/20 transition-colors"
                    >
                      <span className="font-semibold">Twitter / X</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-50/10 px-4 py-2 text-cyan-100 backdrop-blur-sm hover:bg-cyan-50/20 transition-colors"
                    >
                      <span className="font-semibold">Telegram</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-50/10 px-4 py-2 text-cyan-100 backdrop-blur-sm hover:bg-cyan-50/20 transition-colors"
                    >
                      <span className="font-semibold">Discord</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div>
              <GlassCard title="Stay Updated">
                <div className="text-cyan-50/90">
                  <p className="mb-6">
                    Share memes, propose ideas, help new surfers get onboarded,
                    and vote on community initiatives.
                  </p>
                  <div>
                    <Button3D href="/community" color="purple">
                      View Community Page
                    </Button3D>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </SectionWrapper>

        {/* Call to Action section */}
        <CTASection />

        {/* Footer with BIG ROTATING COIN - WHERE TRAVELING COIN ENDS */}
        <footer className="border-t border-cyan-300/20 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="py-8">
              {/* BIG ROTATING COIN - SAME ENDING POSITION */}
              <FooterCoin3D coinImage="/images/cvibecoin.png" />
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
                  <p className="font-semibold text-cyan-100">CVIBE</p>
                  <p className="text-xs text-cyan-200/80">
                    Ride the meme wave responsibly.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Link
                  href="#about"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#features"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#how-to-buy"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  How to Buy
                </Link>
                <Link
                  href="/tokenomics"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  Tokenomics
                </Link>
                <Link
                  href="/roadmap"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  Roadmap
                </Link>
                <Link
                  href="/faq"
                  className="text-cyan-100 hover:text-cyan-200 hover:underline underline-offset-4 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-cyan-300/20 py-6 text-xs text-cyan-200/80">
              <p>
                &copy; {new Date().getFullYear()} cre8tar. All rights reserved.
              </p>
              <p>Made for Fun and ocean vibes.</p>
            </div>
          </div>
        </footer>
      </main>
    </AppProviders>
  );
}
