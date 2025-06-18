import { Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
        About Dr. Sharad Chaturvedi
      </h1>

      <section className="mb-12">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Dr. Sharad Chaturvedi is a dental surgeon specializing in conservative and restorative dentistry. With years of hands-on clinical experience, his approach emphasizes minimal intervention and long-term oral health. He believes in patient-centered care, using evidence-based practices to deliver both functional and aesthetic results. His commitment to continuous learning ensures that patients receive the most current and effective treatments available. Dr. Chaturvedi is dedicated to creating a comfortable and trusting environment where every patient feels heard and well-cared for.
        </p>
      </section>

      <section className="my-12 bg-blue-50 p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Quote className="w-12 h-12 text-blue-600 transform scale-x-[-1]" aria-hidden="true" />
        </div>
        <blockquote className="text-2xl md:text-3xl text-blue-700 italic text-center font-semibold">
          “Preserve whenever possible. Replace only when necessary.”
        </blockquote>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Clinic Philosophy
        </h2>
        <ul className="space-y-6">
          {[
            { title: "Patient Education and Transparency", description: "We believe informed patients make the best decisions for their oral health. We take the time to explain procedures, options, and preventive measures clearly." },
            { title: "Minimally Invasive Procedures", description: "Our approach prioritizes preserving natural tooth structure. We utilize the latest techniques to ensure treatments are as conservative as possible." },
            { title: "Comfort-First Clinical Environment", description: "We strive to make your dental experience as comfortable and stress-free as possible, with a focus on gentle care and a welcoming atmosphere." },
          ].map((item, index) => (
            <li key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
