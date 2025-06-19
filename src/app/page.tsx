'use client';

import AnimatedSection from '@/components/common/AnimatedSection'; // Import AnimatedSection
import HeroSection from '@/components/landing/HeroSection';
import TrustLogosSection from '@/components/landing/TrustLogosSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import CredentialsSection from '@/components/landing/CredentialsSection';
import ContactSection from '@/components/landing/ContactSection';
import FinalCTASection from '@/components/landing/FinalCTASection';

export default function LandingPage() {
  const sectionAnimationProps = (delay: number = 0) => ({
    tag: 'div' as 'div', // Explicitly type tag for AnimatedSection if needed, or let it default
    delay,
    className: "w-full", // Ensure sections take full width if not inherently block
  });

  return (
    <main className="flex-grow flex flex-col items-center">
      {/* HeroSection typically doesn't animate in the same way, or has its own internal animations */}
      <HeroSection />

      <AnimatedSection {...sectionAnimationProps(0.1)}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        {/* "Preserve your smile" section moved here */}
        <FinalCTASection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        <CredentialsSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        <ContactSection />
      </AnimatedSection>

      <AnimatedSection {...sectionAnimationProps(0.2)}>
        {/* "Trusted By" section moved here, just before the implicit Footer */}
        <TrustLogosSection />
      </AnimatedSection>
    </main>
  );
}
