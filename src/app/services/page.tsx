import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Edit3, ShieldCheck, Smile, Sparkles, Zap } from 'lucide-react'; // Example icons

const services = [
  {
    title: "Composite Restorations",
    description: "Tooth-colored fillings that preserve structure and aesthetics.",
    icon: <Sparkles className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  },
  {
    title: "Root Canal Treatment",
    description: "Pain-free endodontic care to save natural teeth.",
    icon: <Zap className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  },
  {
    title: "Tooth Recontouring",
    description: "Minor reshaping for better symmetry and bite.",
    icon: <Edit3 className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  },
  {
    title: "Dental Sealants",
    description: "Protective barriers to prevent decay.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  },
  {
    title: "Cosmetic Bonding",
    description: "Fast, aesthetic correction for chipped or stained teeth.",
    icon: <Smile className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  },
  {
    title: "Oral Prophylaxis",
    description: "Comprehensive cleaning and gum health maintenance.",
    icon: <CheckCircle className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Dental Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {service.icon}
            <CardHeader className="p-0 mb-2 w-full">
              <CardTitle className="text-2xl text-blue-700">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 w-full">
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
