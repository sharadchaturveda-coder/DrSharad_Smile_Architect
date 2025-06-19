'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const aboutPoints = [
  { title: 'Confused by conflicting advice?' },
  { title: 'Tired of aggressive treatments?' },
  { title: 'Want a second opinion you can trust?' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background"> {/* Updated background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight text-center mb-12"> {/* Updated text color */}
          Why Choose a Conservative Approach?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {aboutPoints.map((point) => (
            <Card key={point.title} className="bg-brand-gray-800 rounded-2xl shadow-lg md:hover:shadow-xl active:shadow-2xl active:scale-[1.02] transition-all duration-300 ease-in-out"> {/* Prefixed hover:shadow-xl with md: */}
              <CardHeader>
                <CardTitle className="text-xl text-off-white">{point.title}</CardTitle> {/* Updated title color */}
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            // variant="outline" // Removed to use default solid styling
            size="lg"
            className="bg-accent text-off-white hover:bg-sky-500 hover:text-off-white font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background transition-all duration-300 ease-in-out transform md:hover:scale-105 shadow-lg md:hover:shadow-xl active:scale-105" // Prefixed hover effects, kept active:scale
            asChild
          >
            <Link href="#services">See How I Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
