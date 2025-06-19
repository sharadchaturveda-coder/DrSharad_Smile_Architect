import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SubtlePattern from '@/components/common/SubtlePattern'; // Import new pattern component

const testimonials = [
  { name: 'Patient A', story: 'Dr. Sharad transformed my smile and my confidence. The conservative approach made all the difference!', avatarPlaceholder: 'A' },
  { name: 'Patient B', story: 'I finally found a dentist who listens and explains everything. Highly recommend for a second opinion.', avatarPlaceholder: 'B' },
  { name: 'Patient C', story: 'The root canal was painless and saved my tooth. Exceptional care and skill.', avatarPlaceholder: 'C' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background"> {/* Updated background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight text-center mb-12"> {/* Updated text color */}
          What My Patients Say
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-brand-gray-800 rounded-2xl shadow-lg md:hover:shadow-xl active:shadow-2xl active:scale-[1.02] transition-all duration-300 ease-in-out"> {/* Prefixed hover:shadow-xl with md: */}
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center"> {/* Placeholder container */}
                  <SubtlePattern patternId={`avatarPattern-${testimonial.name}`} lineColor="rgba(241, 245, 249, 0.1)" />
                  <span className="z-10 text-xl font-semibold text-off-white opacity-75">
                    {testimonial.avatarPlaceholder}
                  </span>
                </div>
                <CardTitle className="text-lg text-off-white">{testimonial.name}</CardTitle> {/* Updated title color */}
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 leading-relaxed">"{testimonial.story}"</p> {/* Updated paragraph color */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
