import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudies = [
  { title: 'Smile Makeover Case 1', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Restored with composite bonding.' },
  { title: 'Complex Restoration Case 2', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Full mouth rehabilitation approach.' },
  { title: 'Anterior Esthetics Case 3', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Minimally invasive veneers.' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          Case Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((caseItem) => (
            <Card key={caseItem.title} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-sky-600">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Image src={caseItem.before} alt={`${caseItem.title} - Before`} width={300} height={200} className="rounded-lg" />
                  <Image src={caseItem.after} alt={`${caseItem.title} - After`} width={300} height={200} className="rounded-lg" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{caseItem.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
