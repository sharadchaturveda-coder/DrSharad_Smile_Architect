'use client';

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
  return (
    <main className="flex-grow">
      <HeroSection />
      <TrustLogosSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <CredentialsSection />
      <ContactSection />
      <FinalCTASection />
    </main>
  );
}
