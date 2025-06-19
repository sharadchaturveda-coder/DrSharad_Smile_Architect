import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Dr. Sharad Chaturvedi - Conservative Dentist',
  description: 'Preserving smiles through precision and care. Dental clinic and academic portfolio of Dr. Sharad Chaturvedi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background text-slate-gray-dark font-sans antialiased flex flex-col',
          inter.variable,
          dmSans.variable
        )}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
