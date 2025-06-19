'use client'; // Added client directive

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import Image from 'next/image'; // For placeholder images
import { motion } from 'framer-motion'; // Added for animations

// Placeholder icons (replace with actual icons or svgs)
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg className={`w-8 h-8 text-slate-400 ${className}`} fill="currentColor" viewBox="0 0 20 20"> {/* Default color updated */}
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
  </svg>
);

// Helper for smooth scrolling, similar to Navbar
const handlePageScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1); // Remove #
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function LandingPage() {
  return (
    // Navbar and Footer are rendered by layout.tsx
    // <div className="flex flex-col min-h-screen">
      <main className="flex-grow"> {/* Removed outer div and Navbar call */}
        {/* HERO SECTION - NEW DESIGN */}
        <section
          id="hero"
          className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f6f9fc] to-[#eaeef3] text-slate-700 py-20 md:py-32 text-center overflow-hidden"
        >
          {/* Faint dental-themed SVG/abstract blur placeholder */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            {/* Placeholder for SVG - e.g., a very light, large tooth outline or abstract waves */}
            <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="text-sky-100">
              <defs>
                <filter id="blurMe">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                </filter>
              </defs>
              <circle cx="150" cy="150" r="100" fill="currentColor" filter="url(#blurMe)" />
              <circle cx="650" cy="450" r="150" fill="currentColor" filter="url(#blurMe)" />
              <rect x="300" y="200" width="200" height="200" rx="50" fill="currentColor" filter="url(#blurMe)" transform="rotate(30 400 300)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Elevating Dental Excellence.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Experience the pinnacle of dental artistry and compassionate care. <br />
              Your journey to a radiant, healthy smile begins here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                asChild
              >
                <Link href="#contact" onClick={(e) => handlePageScrollLinkClick(e, '#contact')}>
                  Discover Your Smile Potential
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 3. Trust Logos Strip */}
        <section id="trust-logos" className="py-12 bg-white"> {/* Keep bg-white for contrast with #fdfdfd */}
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
              Trusted By
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* IDA */}
              <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Continuing Education */}
              <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Mock Dental Association */}
              <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Another Mock Logo */}
              <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Yet Another Mock Logo */}
            </div>
          </div>
        </section>

        {/* 4. Pain Points (serves as About/How I Work) */}
        <section id="about" className="py-16 md:py-24 bg-slate-50"> {/* Changed to bg-slate-50 for subtle difference */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              Why Choose a Conservative Approach?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-600">Confused by conflicting advice?</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-600">Tired of aggressive treatments?</CardTitle>
                </CardHeader>
              </Card>
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-600">Want a second opinion you can trust?</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-sky-500 text-sky-600 hover:bg-sky-50 hover:text-sky-700 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-colors duration-300"
                asChild
              >
                <Link href="#services">See How I Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              My Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Composite Fillings', benefit: 'Seamless, tooth-colored restorations.' },
                { title: 'Root Canal Treatment', benefit: 'Save your natural tooth, relieve pain.' },
                { title: 'Oral Prophylaxis', benefit: 'Professional cleaning for optimal health.' },
                { title: 'Esthetic Bonding', benefit: 'Enhance your smile with cosmetic bonding.' },
                { title: 'Sensitivity Management', benefit: 'Relief from tooth sensitivity.' },
                { title: 'Preventive Dentistry', benefit: 'Proactive care to prevent future issues.' },
              ].map((service) => (
                <Card key={service.title} className="text-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4"><PlaceholderIcon className="text-sky-500" /></div>
                    <CardTitle className="text-xl text-sky-600">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{service.benefit}</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 6. Patient Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              What My Patients Say
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { name: 'Patient A', story: 'Dr. Sharad transformed my smile and my confidence. The conservative approach made all the difference!' },
                { name: 'Patient B', story: 'I finally found a dentist who listens and explains everything. Highly recommend for a second opinion.' },
                { name: 'Patient C', story: 'The root canal was painless and saved my tooth. Exceptional care and skill.' },
              ].map((testimonial) => (
                <Card key={testimonial.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Image src="http://via.placeholder.com/50" alt={testimonial.name} width={50} height={50} className="rounded-full" /> {/* Changed to http */}
                    <CardTitle className="text-lg text-slate-700">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">"{testimonial.story}"</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 7. Portfolio: Case Gallery */}
        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              Case Gallery
            </h2>
            {/* Placeholder for Carousel or 3-column layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Smile Makeover Case 1', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Restored with composite bonding.' }, // Changed to http
                { title: 'Complex Restoration Case 2', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Full mouth rehabilitation approach.' }, // Changed to http
                { title: 'Anterior Esthetics Case 3', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Minimally invasive veneers.' }, // Changed to http
              ].map((caseItem) => (
                <Card key={caseItem.title} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-sky-600">{caseItem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <Image src={caseItem.before} alt={`${caseItem.title} - Before`} width={300} height={200} className="rounded-lg" /> {/* src is now http, added rounded-lg */}
                      <Image src={caseItem.after} alt={`${caseItem.title} - After`} width={300} height={200} className="rounded-lg" /> {/* src is now http, added rounded-lg */}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{caseItem.desc}</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 8. Credentials Section */}
        <section id="credentials" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              My Credentials
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <PlaceholderIcon className="mb-4 text-sky-500 w-12 h-12" />
                <h4 className="font-semibold text-lg text-slate-700">BDS Degree</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Reputable Dental College</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <PlaceholderIcon className="mb-4 text-sky-500 w-12 h-12" />
                <h4 className="font-semibold text-lg text-slate-700">Certified in Esthetic Dentistry</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Mock Certification Institute</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <PlaceholderIcon className="mb-4 text-sky-500 w-12 h-12" />
                <h4 className="font-semibold text-lg text-slate-700">Advanced Endodontics Workshop</h4>
                <p className="text-slate-600 text-sm leading-relaxed">International Dental Forum</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">View Full CV (Available on request)</p>
          </div>
        </section>

        {/* 9. Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="p-8 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50">
                <form className="space-y-6">
                  {/* Assuming Input and Textarea components from ui/ can be styled via globals.css or accept className prop */}
                  <Input type="text" placeholder="Your Name" className="bg-white/70 border-slate-300 focus:border-sky-500 focus:ring-sky-500 rounded-lg" />
                  <Input type="email" placeholder="Your Email" className="bg-white/70 border-slate-300 focus:border-sky-500 focus:ring-sky-500 rounded-lg" />
                  <Input type="tel" placeholder="Your Phone (Optional)" className="bg-white/70 border-slate-300 focus:border-sky-500 focus:ring-sky-500 rounded-lg" />
                  <Textarea placeholder="Your Message / Preferred Appointment Time" rows={4} className="bg-white/70 border-slate-300 focus:border-sky-500 focus:ring-sky-500 rounded-lg" />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6 p-8 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50">
                <div>
                  <h4 className="font-semibold text-lg text-slate-700 mb-1">Clinic Address</h4>
                  <p className="text-slate-600 leading-relaxed">123 Dental Street, Smile City, PIN 456001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-700 mb-1">Working Hours</h4>
                  <p className="text-slate-600 leading-relaxed">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-slate-600 leading-relaxed">Sun: Closed</p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">Call Now</Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">WhatsApp</Button>
                </div>
                <div className="mt-6 h-64 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
                  [Placeholder for Map or Clinic Image]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA Strip */}
        <section id="final-cta" className="py-16 bg-gradient-to-r from-sky-600 to-emerald-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Preserve your smile. Book your appointment today.
            </h2>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 hover:border-white/80 hover:shadow-lg hover:shadow-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              asChild
            >
              <Link href="#contact" onClick={(e) => handlePageScrollLinkClick(e, '#contact')}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    // Footer is rendered by layout.tsx
    // </div>
  );
}
