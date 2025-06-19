// 1. Add 'use client' and useState
'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
// Removed Inter, DM_Sans imports
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNav from '@/components/Navbar/MobileNav'; // 2. Import MobileNav here

// Removed inter and dmSans font initializations

// Static metadata export might need to be removed or handled differently with 'use client'
// For now, I will comment it out as per the instructions' hint.
// export const metadata: Metadata = {
//   title: 'Dr. Sharad Chaturvedi - Conservative Dentist',
//   description: 'Preserving smiles through precision and care. Dental clinic and academic portfolio of Dr. Sharad Chaturvedi.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. Create the state here at the highest level
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background text-off-white font-sans antialiased flex flex-col'
          // Removed inter.variable, dmSans.variable
        )}
      >
        {/* 4. Render both Navbar and MobileNav as siblings */}
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        {/* 
          The MobileNav component itself will handle its visibility based on isMobileMenuOpen.
          It will also need the handleNavLinkClick prop if that logic is to be kept inside it for closing on link click.
          However, the new instructions for MobileNav.tsx show it handling link clicks internally.
        */}
        <MobileNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
