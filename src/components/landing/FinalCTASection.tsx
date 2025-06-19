'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { handleSmoothScroll } from '@/lib/utils/scroll';

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-16 bg-gradient-to-r from-sky-600 to-emerald-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Preserve your smile. Book your appointment today.
        </h2>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-white text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:border-white/80 hover:shadow-lg hover:shadow-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
          asChild
        >
          <Link href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
            Book Consultation
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
