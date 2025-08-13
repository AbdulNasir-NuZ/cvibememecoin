import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionWrapper from "@/components/section-wrapper"
import Heading3D from "@/components/heading-3d-css"
import Button3D from "@/components/button-3d"
import WalletConnectButton from "@/components/wallet-connect-button"

export default function FAQPage() {
  return (
    <main className="relative min-h-[100dvh] text-purple-900">
      {/* Hero */}
      <SectionWrapper
        id="faq-hero"
        className="h-[50vh] min-h-[420px] flex items-center"
        contentClassName="h-full flex items-center justify-center text-center"
      >
        <div className="max-w-4xl">
          <Heading3D text="FAQ" className="block" />
          <h1 className="sr-only">FAQ</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base text-indigo-900 md:text-lg">
            Answers to common questions about CVIBE, buying, wallets, and more.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
            <Button3D href="/how-to-buy" color="purple">
              How to Buy
            </Button3D>
            <WalletConnectButton color="indigo" />
          </div>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <section className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Accordion
              type="single"
              collapsible
              className="bg-purple-50/60 backdrop-blur rounded-xl ring-1 ring-purple-300/50 p-2"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-purple-900">What is CVIBE?</AccordionTrigger>
                <AccordionContent className="text-indigo-900">
                  CVIBE is a meme token focused on community, fair launch mechanics, and transparent tokenomics—
                  celebrating ocean vibes and internet culture.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-purple-900">Is there any tax on trades?</AccordionTrigger>
                <AccordionContent className="text-indigo-900">
                  CVIBE targets 0% buy/sell tax. Always verify the official contract and announcements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-purple-900">Where do I find the contract address?</AccordionTrigger>
                <AccordionContent className="text-indigo-900">
                  We will publish the verified contract on the official site and socials. Use the Copy Contract button
                  on the How to Buy section once available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-purple-900">Which networks are supported?</AccordionTrigger>
                <AccordionContent className="text-indigo-900">
                  CVIBE deploys to a fast, low-fee chain. Check the Tokenomics and Roadmap pages for network details and
                  future plans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-purple-900">How do I buy CVIBE?</AccordionTrigger>
                <AccordionContent className="text-indigo-900">
                  Follow the steps on the How to Buy section of the homepage: get a wallet, fund it, then swap on a
                  supported DEX using the official contract.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-300/30 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="py-6">{/* FooterBeach3D removed */}</div>
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
  )
}
