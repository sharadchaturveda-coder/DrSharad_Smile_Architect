import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PlaceholderIcon from '@/components/common/PlaceholderIcon';

const services = [
  { title: 'Composite Fillings', benefit: 'Seamless, tooth-colored restorations.' },
  { title: 'Root Canal Treatment', benefit: 'Save your natural tooth, relieve pain.' },
  { title: 'Oral Prophylaxis', benefit: 'Professional cleaning for optimal health.' },
  { title: 'Esthetic Bonding', benefit: 'Enhance your smile with cosmetic bonding.' },
  { title: 'Sensitivity Management', benefit: 'Relief from tooth sensitivity.' },
  { title: 'Preventive Dentistry', benefit: 'Proactive care to prevent future issues.' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto mb-4"><PlaceholderIcon className="text-sky-500" /></div>
                <CardTitle className="text-xl text-sky-600">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{service.benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
