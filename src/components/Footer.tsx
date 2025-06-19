'use client';

import Link from 'next/link';
import { handleSmoothScroll } from '@/lib/utils/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-auto"> {/* Updated colors */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500"> {/* Updated colors */}
            &copy; {currentYear} Dr. Sharad Chaturvedi. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="text-sm text-slate-500 hover:text-sky-600 transition-colors"
            >
              Contact
            </Link>
            {/* Add other footer links if needed, e.g., Privacy Policy */}
          </div>
        </div>
      </div>
    </footer>
  );
}
