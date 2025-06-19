'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { navItems } from './constants';

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleNavLinkClick,
}) => {
  return (
    <>
      <div className="md:hidden flex items-center">
        <Button
          asChild
          size="sm"
          className="mr-2 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
        >
          <Link href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>Book Now</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                  'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
