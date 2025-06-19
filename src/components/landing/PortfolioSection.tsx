'use client'; // Required for Swiper

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SubtlePattern from '@/components/common/SubtlePattern';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const caseStudies = [
  { title: 'Smile Makeover Case 1', desc: 'Restored with composite bonding.' },
  { title: 'Complex Restoration Case 2', desc: 'Full mouth rehabilitation approach.' },
  { title: 'Anterior Esthetics Case 3', desc: 'Minimally invasive veneers.' },
  { title: 'Pediatric Restoration Case 4', desc: 'Gentle care for young smiles.' },
  { title: 'Orthodontic Alignment Case 5', desc: 'Achieving a harmonious bite.' },
  { title: 'Implant Placement Case 6', desc: 'Replacing missing teeth with precision.' }, // New case study
];

const ImagePlaceholder = ({ text, caseTitle }: { text: string; caseTitle: string }) => (
  <div className="relative aspect-[3/2] w-full bg-brand-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
    <SubtlePattern patternId={`portfolioPattern-${caseTitle}-${text}`} lineColor="rgba(241, 245, 249, 0.05)" />
    <span className="z-10 text-lg font-semibold text-off-white opacity-50">{text}</span>
  </div>
);

const PortfolioCard = ({ caseItem }: { caseItem: typeof caseStudies[0] }) => (
  <Card className="bg-brand-gray-800 rounded-2xl shadow-lg md:hover:shadow-xl active:shadow-2xl active:scale-[1.02] transition-all duration-300 ease-in-out h-full flex flex-col"> {/* Prefixed hover:shadow-xl with md: */}
    <CardHeader>
      <CardTitle className="text-xl text-accent">{caseItem.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col flex-grow">
      <div className="grid grid-cols-2 gap-2 mb-4">
        <ImagePlaceholder text="Before" caseTitle={caseItem.title} />
        <ImagePlaceholder text="After" caseTitle={caseItem.title} />
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mt-auto">{caseItem.desc}</p>
    </CardContent>
  </Card>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight text-center mb-12">
          Case Gallery
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true, el: '.swiper-pagination-portfolio' }}
            className="!pb-12" // Add padding for pagination
          >
            {caseStudies.map((caseItem) => (
              <SwiperSlide key={caseItem.title} className="h-auto">
                <PortfolioCard caseItem={caseItem} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-portfolio text-center mt-4"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseItem) => (
            <PortfolioCard key={caseItem.title} caseItem={caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
