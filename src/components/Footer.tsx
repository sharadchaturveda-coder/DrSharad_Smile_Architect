'use client';

import Link from 'next/link';
import { handleSmoothScroll } from '@/lib/utils/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center"> {/* Centering content */}
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Dr. Sharad Chaturvedi. All rights reserved.
          </p>
          {/* Removed the contact link and its container div */}
        </div>
      </div>
    </footer>
  );
}
