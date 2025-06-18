import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Dr. Sharad Chaturvedi
        </h1>
        <p className="text-2xl md:text-3xl text-blue-700 font-semibold mb-6">
          Conservative Dentist
        </p>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Preserving smiles through precision and care.
        </p>
      </header>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/contact">Book Appointment</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
    </div>
  );
}
