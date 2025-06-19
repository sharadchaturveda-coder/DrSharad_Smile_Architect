'use client';

import Link from 'next/link';
// We no longer need useState here
import { cn } from '@/lib/utils';
import { handleSmoothScroll } from '@/lib/utils/scroll';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import DesktopNav from './Navbar/DesktopNav';
// 1. Import the trigger button component instead of the full MobileNav
import MobileNavTrigger from './Navbar/MobileNavTrigger';
import React from 'react'; // Import React for type definitions

// 2. Define the new props interface
interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const scrolled = useScrollEffect();

  // This handleNavLinkClick is for DesktopNav and the main logo link.
  // It should no longer try to close the mobile menu, as that state is managed by RootLayout.
  // MobileNav will handle its own link clicks to close itself.
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    handleSmoothScroll(e, href);
    // setIsMobileMenuOpen(false); // Removed: State is now managed by RootLayout and MobileNav/MobileNavTrigger
  };

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-300',
        'bg-background/70 backdrop-blur-md',
        scrolled ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            onClick={(e) => handleNavLinkClick(e, '#hero')} // Uses the modified handleNavLinkClick
            className="text-2xl font-bold text-accent hover:text-sky-400 transition-colors"
          >
            Dr. Sharad Chaturvedi
          </Link>

          <DesktopNav handleNavLinkClick={handleNavLinkClick} />
          {/* 3. Render the new trigger component, passing props down */}
          <MobileNavTrigger
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            // The MobileNavTrigger's internal "Book Now" might need its own smooth scroll
            // or rely on a simplified click if handleNavLinkClick is not passed.
            // For now, MobileNavTrigger handles its own Book Now click as per its creation.
          />
          {/* 4. The original MobileNav component is GONE from this file. */}
        </div>
      </div>
    </nav>
  );
}
