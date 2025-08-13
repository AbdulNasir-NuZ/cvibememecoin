import Button3D from "./button-3d"
import WalletConnectButton from "./wallet-connect-button"
import GlassCard from "./glass-card"
import Heading3D from "./heading-3d-css"

/**
 * Call-to-action section with enhanced glassmorphism cards
 */
export default function CTASection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* CONSISTENT HEADING STYLE - Same as other sections */}
          <div className="mb-6">
            <Heading3D text="Ready to Ride the Wave?" />
            <h2 className="sr-only">Ready to Ride the Wave?</h2>
          </div>
          <p className="mt-4 text-lg text-cyan-50/90">
            Join the CVIBE community and be part of the next-gen meme revolution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button3D href="#how-to-buy" color="purple">
              Buy CVIBE Now
            </Button3D>
            <WalletConnectButton color="indigo" />
            <Button3D href="/whitepaper" color="purple">
              Read Whitepaper
            </Button3D>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <GlassCard title="Join Community">
            <span className="text-cyan-50/90">
              Connect with fellow CVIBE holders, share memes, and stay updated on the latest developments.
            </span>
          </GlassCard>
          <GlassCard title="Track Progress">
            <span className="text-cyan-50/90">
              Follow our roadmap, tokenomics updates, and partnership announcements as we grow together.
            </span>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
