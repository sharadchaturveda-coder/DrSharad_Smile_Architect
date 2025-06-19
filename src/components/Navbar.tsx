'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { handleSmoothScroll } from '@/lib/utils/scroll';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import DesktopNav from './Navbar/DesktopNav';
import MobileNav from './Navbar/MobileNav';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrollEffect();

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    handleSmoothScroll(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-300',
        'bg-white/70 backdrop-blur-md',
        scrolled ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="text-2xl font-bold text-sky-600 hover:text-sky-700 transition-colors"
          >
            Dr. Sharad Chaturvedi
          </Link>

          <DesktopNav handleNavLinkClick={handleNavLinkClick} />
          <MobileNav
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            handleNavLinkClick={handleNavLinkClick}
          />
        </div>
      </div>
    </nav>
  );
}
