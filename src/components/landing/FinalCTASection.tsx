'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { handleSmoothScroll } from '@/lib/utils/scroll';

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-16 bg-gradient-to-r from-accent to-sky-600 text-off-white text-center"> {/* Changed section text to off-white */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Preserve your smile. Book your appointment today.
        </h2>
        <Button
          size="lg"
          // Removed variant="outline" to use default button styling which we will customize
          className="bg-off-white text-accent font-semibold px-8 py-3 text-lg shadow-lg md:hover:shadow-xl transition-all duration-300 transform md:hover:scale-105 hover:bg-slate-200 hover:text-sky-500 focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-sky-600 active:scale-105" // Prefixed hover effects, kept active:scale
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
