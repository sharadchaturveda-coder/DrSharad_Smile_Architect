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
            'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
          )}
        >
          {item.label}
        </Link>
      ))}
      <Button
        asChild
        size="sm"
        className="ml-2 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
      >
        <Link href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')}>Book Now</Link>
      </Button>
    </div>
  );
};

export default DesktopNav;
