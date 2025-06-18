'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const navItems = [
  // { href: '#hero', label: 'Home' }, // Removed as logo links to #hero
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Cases' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle scroll and close mobile menu
  const handleScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#hero" onClick={(e) => handleScrollLinkClick(e, '#hero')} className="text-2xl font-bold text-blue-700">
            Dr. Sharad Chaturvedi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2"> {/* Reduced space for more items */}
            {navItems.map((item) => ( // Removed filter as 'Home' is already removed from navItems
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollLinkClick(e, item.href)}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  'text-gray-700 hover:bg-gray-100 hover:text-gray-900' // Simplified styling
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white ml-2">
              <Link href="#contact" onClick={(e) => handleScrollLinkClick(e, '#contact')}>Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white mr-2">
              <Link href="#contact" onClick={(e) => handleScrollLinkClick(e, '#contact')}>Book Now</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollLinkClick(e, item.href)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  'text-gray-700 hover:bg-gray-100 hover:text-gray-900' // Simplified styling
                )}
              >
                {item.label}
              </Link>
            ))}
            {/* "Book Now" already present above for mobile, or add here if separate styling needed */}
          </div>
        </div>
      )}
    </nav>
  );
}
