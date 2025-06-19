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
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          Why Choose a Conservative Approach?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {aboutPoints.map((point) => (
            <Card key={point.title} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-600">{point.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-sky-500 text-sky-600 hover:bg-sky-50 hover:text-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-colors duration-300"
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
