'use client'; // Make it a client component for onClick handler

import Link from 'next/link';

// Helper for smooth scrolling
const handleFooterScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1); // Remove #
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

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
              href="#contact" // Changed to anchor link
              onClick={(e) => handleFooterScrollLinkClick(e, '#contact')}
              className="text-sm text-slate-500 hover:text-sky-600 transition-colors" // Updated colors
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
