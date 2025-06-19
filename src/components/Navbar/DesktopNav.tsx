'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navItems } from './constants';
import { handleSmoothScroll } from '@/lib/utils/scroll';

interface DesktopNavProps {
  handleNavLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ handleNavLinkClick }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavLinkClick(e, item.href)}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            'text-off-white hover:text-accent hover:bg-slate-700' // Updated link colors
          )}
        >
          {item.label}
        </Link>
      ))}
      <Button
        asChild
        size="sm"
        className="ml-2 bg-accent text-off-white hover:bg-sky-500 hover:text-off-white font-semibold shadow-md md:hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background active:scale-105" // Prefixed hover effects, kept active:scale
      >
        <Link href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>Book Now</Link>
      </Button>
    </div>
  );
};

export default DesktopNav;
