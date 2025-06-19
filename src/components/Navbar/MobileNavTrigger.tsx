'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React from 'react';

interface MobileNavTriggerProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // Optional: if handleNavLinkClick is still needed for the "Book Now" button specifically
  // handleNavLinkClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => void;
}

const MobileNavTrigger: React.FC<MobileNavTriggerProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  // handleNavLinkClick, // Uncomment if Book Now needs specific click handling from Navbar
}) => {
  // Simplified click handler for Book Now if it just closes the menu
  // If it needs smooth scroll, that logic would be passed from Navbar or handled internally
  const onBookNowClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Example: if handleSmoothScroll is available or passed
    // if (handleNavLinkClick) handleNavLinkClick(e, '#contact');
    // setIsMobileMenuOpen(false); // Usually, Book Now doesn't close the main menu, but navigates
  };

  return (
    <div className="md:hidden flex items-center">
      <Button
        asChild
        size="sm"
        className="mr-2 bg-accent text-off-white font-semibold shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background active:scale-105 transition-transform duration-150 ease-in-out md:hover:bg-sky-500 md:hover:text-off-white hover:bg-accent hover:text-off-white"
      >
        {/* Note: The onClick for smooth scroll might need to be re-evaluated if handleSmoothScroll was part of MobileNav's original handleNavLinkClick */}
        <Link href="#contact" onClick={onBookNowClick}>Book Now</Link>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu-panel" // This will point to the ID of the MobileNav panel
        className="text-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background active:text-sky-500 md:hover:text-sky-400 hover:text-accent"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </Button>
    </div>
  );
};

export default MobileNavTrigger;
