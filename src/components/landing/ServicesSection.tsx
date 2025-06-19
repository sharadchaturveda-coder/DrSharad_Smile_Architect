import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import GeometricPlaceholderIcon from '@/components/common/GeometricPlaceholderIcon'; // Updated import

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
    <section id="services" className="py-16 md:py-24 bg-background"> {/* Updated background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight text-center mb-12"> {/* Updated text color */}
          My Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => ( // Added index for alternating shapes
            <Card key={service.title} className="text-center bg-brand-gray-800 rounded-2xl shadow-lg md:hover:shadow-xl active:shadow-2xl active:scale-[1.02] transition-all duration-300 ease-in-out"> {/* Prefixed hover:shadow-xl with md: */}
              <CardHeader>
                <div className="mx-auto mb-4">
                  <GeometricPlaceholderIcon
                    shape={index % 2 === 0 ? 'hexagon' : 'diamond'} // Alternate shapes
                    className="text-accent" // Icon color
                  />
                </div>
                <CardTitle className="text-xl text-accent">{service.title}</CardTitle> {/* Updated title color */}
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 leading-relaxed">{service.benefit}</p> {/* Updated paragraph color */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
