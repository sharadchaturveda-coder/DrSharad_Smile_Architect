'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { handleSmoothScroll } from '@/lib/utils/scroll';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f6f9fc] to-[#eaeef3] text-slate-700 py-20 md:py-32 text-center overflow-hidden"
    >
      {/* Faint dental-themed SVG/abstract blur placeholder */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="text-sky-100">
          <defs>
            <filter id="blurMeHero"> {/* Unique ID for filter */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
          </defs>
          <circle cx="150" cy="150" r="100" fill="currentColor" filter="url(#blurMeHero)" />
          <circle cx="650" cy="450" r="150" fill="currentColor" filter="url(#blurMeHero)" />
          <rect x="300" y="200" width="200" height="200" rx="50" fill="currentColor" filter="url(#blurMeHero)" transform="rotate(30 400 300)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Elevating Dental Excellence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Experience the pinnacle of dental artistry and compassionate care. <br />
          Your journey to a radiant, healthy smile begins here.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
            asChild
          >
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Discover Your Smile Potential
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
