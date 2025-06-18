import { GraduationCap, Award, BookOpen, CalendarDays } from 'lucide-react';
import React from 'react';

interface CVItem {
  heading: string;
  year?: string;
}

interface CVSection {
  title: string;
  icon: React.ReactNode; // Changed from JSX.Element to React.ReactNode
  items: CVItem[];
}

const cvSections: CVSection[] = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />,
    items: [
      { heading: "BDS, XYZ Dental College", year: "2018" },
      { heading: "Clinical Internship, ABC Hospital", year: "2019" },
    ],
  },
  {
    title: "Certifications",
    icon: <Award className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />,
    items: [
      { heading: "Certificate in Advanced Endodontics" },
      { heading: "Composite Esthetics Masterclass (Mock Course)" },
    ],
  },
  {
    title: "Workshops & Conferences",
    icon: <CalendarDays className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />,
    items: [
      { heading: "“Modern Adhesive Dentistry” – Delhi", year: "2021" },
      { heading: "“Conservative Techniques in Esthetics” – Chennai", year: "2022" },
    ],
  },
  {
    title: "Research",
    icon: <BookOpen className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />,
    items: [
      { heading: "“Comparative Longevity of Composite Restorations” – (Mock journal)", year: "2020" },
    ],
  },
];

export default function CVPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Curriculum Vitae
      </h1>
      <div className="space-y-12">
        {cvSections.map((section, index) => (
          <section key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              {section.icon}
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">{section.title}</h2>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-start">
                  <span className="text-lg text-gray-600">{item.heading}</span>
                  {item.year && <span className="text-md text-gray-500 bg-blue-50 px-2 py-1 rounded">{item.year}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
