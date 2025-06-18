import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Dr. Sharad Chaturvedi
        </h1>
        <p className="text-xl md:text-2xl text-blue-700 font-semibold mb-8 max-w-2xl mx-auto">
          Conservative & Restorative Dentist – Preserving Natural Smiles with Precision
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            <Link href="/contact">Book Appointment</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-8 py-3 text-lg">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </header>

      {/* Brief Intro Section */}
      <section className="my-16 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          With a focus on precision and preservation, Dr. Sharad combines clinical expertise with a conservative approach to modern dentistry. Every treatment is rooted in function, comfort, and care.
        </p>
      </section>

      {/* Featured Services Preview */}
      <section className="my-16 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Featured Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Composite Restorations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                High-quality, tooth-colored fillings that blend seamlessly with your natural teeth, restoring form and function.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Root Canal Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Gentle and effective treatment to save infected teeth, relieving pain and preserving your natural smile.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Preventive Dentistry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proactive care including cleanings, check-ups, and patient education to maintain optimal oral health.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link" className="text-blue-600 hover:text-blue-800 text-lg">
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
