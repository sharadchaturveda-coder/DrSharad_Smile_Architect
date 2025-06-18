import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const caseStudies = [
  {
    title: "Anterior Composite Build-Up – Esthetic Case",
    description: "A patient presented with fractured incisors. Composite layering technique was used to restore form and function in a single visit.",
    beforeImage: "/case1-before.jpg",
    afterImage: "/case1-after.jpg",
  },
  {
    title: "Posterior Root Canal & Crown – Functional Restoration",
    description: "Complex root canal treatment followed by a durable ceramic crown to save a molar and restore chewing efficiency.",
    beforeImage: "/case2-before.jpg",
    afterImage: "/case2-after.jpg",
  },
  {
    title: "Full Mouth Rehabilitation Teaser – Smile Makeover",
    description: "Initial phase of a comprehensive smile makeover, addressing wear and discoloration. Further treatment planned.",
    beforeImage: "/case3-before.jpg",
    afterImage: "/case3-after.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Clinical Portfolio
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
        {caseStudies.map((study, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">{study.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">{study.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Before</h3>
                  <div className="relative w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                    <Image src={study.beforeImage} alt={`${study.title} - Before`} fill={true} sizes="100vw" className="object-cover opacity-75" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Placeholder Image</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">After</h3>
                  <div className="relative w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                    <Image src={study.afterImage} alt={`${study.title} - After`} fill={true} sizes="100vw" className="object-cover opacity-75" />
                     <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Placeholder Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 pt-4">
              <p>Note: Images are illustrative placeholders. Actual clinical photos would be used in a real portfolio.</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
