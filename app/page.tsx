import { Faq } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Pricing } from '@/components/sections/pricing'
import { QuoteSection } from '@/components/sections/quote'
import { Services } from '@/components/sections/services'
import { WeBuy } from '@/components/sections/we-buy'
import { WhyUs } from '@/components/sections/why-us'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <WeBuy />
      <WhyUs />
      <Faq />
      <QuoteSection />
    </>
  )
}
