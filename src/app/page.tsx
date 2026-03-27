import { FeaturesGridSection } from "@/components/landing/features-grid";
import { FinalCtaSection } from "@/components/landing/final-cta";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHero } from "@/components/landing/hero";
import { HighlightSections } from "@/components/landing/highlights";
import { MetricsSection } from "@/components/landing/metrics";
import { LandingNavbar } from "@/components/landing/navbar";
import { PricingSection } from "@/components/landing/pricing";
import { SocialProofSection } from "@/components/landing/social-proof";
import { TestimonialsSection } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="relative min-h-screen overflow-x-hidden bg-slate-50 px-4 pb-6 sm:px-6 lg:px-8">
        <LandingHero />
        <SocialProofSection />
        <FeaturesGridSection />
        <HighlightSections />
        <MetricsSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCtaSection />
        <LandingFooter />
      </main>
    </>
  );
}
