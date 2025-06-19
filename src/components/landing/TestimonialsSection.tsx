import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  { name: 'Patient A', story: 'Dr. Sharad transformed my smile and my confidence. The conservative approach made all the difference!', avatar: 'http://via.placeholder.com/50' },
  { name: 'Patient B', story: 'I finally found a dentist who listens and explains everything. Highly recommend for a second opinion.', avatar: 'http://via.placeholder.com/50' },
  { name: 'Patient C', story: 'The root canal was painless and saved my tooth. Exceptional care and skill.', avatar: 'http://via.placeholder.com/50' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          What My Patients Say
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" />
                <CardTitle className="text-lg text-slate-700">{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">"{testimonial.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
