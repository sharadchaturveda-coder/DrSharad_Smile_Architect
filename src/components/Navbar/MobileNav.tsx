'use client';

import Link from 'next/link';
import { X } from 'lucide-react'; // Example close icon
import { navItems } from './constants';
import { handleSmoothScroll } from '@/lib/utils/scroll';
import { cn } from '@/lib/utils';
import React from 'react'; // Ensure React is imported for JSX and types
import { Button } from '@/components/ui/button'; // Import Button for the close button

// 1. Define its new props
interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // handleNavLinkClick is no longer passed from Navbar for general links
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    handleSmoothScroll(e, href);
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  // Refs for focus management (optional but good for accessibility)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (isMobileMenuOpen && closeButtonRef.current) {
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
  }, [isMobileMenuOpen]);


  if (!isMobileMenuOpen) return null; // Render nothing if closed

  // 2. The main container is now a standalone overlay.
  return (
    <div
      id="mobile-menu-panel" // Keep ID for aria-controls
      className={cn(
        // '!fixed !inset-0 z-[9999]' was from previous attempts, new instructions use z-[100]
        // The key is that it's fixed and covers the inset.
        // The previous transform for slide-in is removed as per new design.
        // It will appear/disappear based on isMobileMenuOpen.
        // For a slide-in effect with this new structure, we'd re-add transform and conditional classes.
        // Sticking to provided JSX for now:
        "fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl flex flex-col p-6 md:hidden"
        // Adding md:hidden to ensure it doesn't accidentally show on desktop
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 id="mobile-menu-title" className="text-xl font-bold text-white">Menu</h2>
        <Button // Using the Button component for consistency and accessibility
          variant="ghost"
          size="icon"
          ref={closeButtonRef}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-white focus:bg-white/20 active:bg-white/30"
          aria-label="Close menu"
        >
          <X size={28} />
        </Button>
      </div>

      <nav className="flex flex-col space-y-4 flex-grow items-center justify-center"> {/* Centering links */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="text-white text-2xl font-semibold py-2 hover:text-slate-300 transition-colors w-full text-center" // Adjusted styling
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="text-center py-4">
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Dr. Sharad</p>
      </div>
    </div>
  );
};

export default MobileNav;
