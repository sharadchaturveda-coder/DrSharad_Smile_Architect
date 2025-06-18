import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import Image from 'next/image'; // For placeholder images

// Placeholder icons (replace with actual icons or svgs)
const PlaceholderIcon = ({ className }: { className?: string }) => (
  <svg className={`w-8 h-8 text-gray-400 ${className}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
  </svg>
);

export default function LandingPage() {
  return (
    // Navbar and Footer are rendered by layout.tsx
    // <div className="flex flex-col min-h-screen">
      <main className="flex-grow"> {/* Removed outer div and Navbar call */}
        {/* 2. Hero Section */}
        <section id="hero" className="bg-gray-50 py-20 md:py-32 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Conservative Dentist. Restoring Natural Smiles.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Precision-based treatments that preserve, not replace.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
              <Link href="#contact">Schedule Consultation</Link>
            </Button>
            {/* Optional: placeholder image of Dr. Sharad */}
            <div className="mt-12">
              <Image
                src="http://via.placeholder.com/150" // Changed to http
                alt="Dr. Sharad Chaturvedi"
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 3. Trust Logos Strip */}
        <section id="trust-logos" className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              Trusted By
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <PlaceholderIcon className="w-20 h-10" /> {/* IDA */}
              <PlaceholderIcon className="w-20 h-10" /> {/* Continuing Education */}
              <PlaceholderIcon className="w-20 h-10" /> {/* Mock Dental Association */}
              <PlaceholderIcon className="w-20 h-10" /> {/* Another Mock Logo */}
              <PlaceholderIcon className="w-20 h-10" /> {/* Yet Another Mock Logo */}
            </div>
          </div>
        </section>

        {/* 4. Pain Points (serves as About/How I Work) */}
        <section id="about" className="py-16 md:py-24 bg-gray-50"> {/* Added id="about" here */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Why Choose a Conservative Approach?
            </h2> {/* Added a title for the section */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-700">Confused by conflicting advice?</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-700">Tired of aggressive treatments?</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-700">Want a second opinion you can trust?</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">See How I Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
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
                <Card key={service.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4"><PlaceholderIcon /></div>
                    <CardTitle className="text-xl text-blue-700">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.benefit}</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 6. Patient Testimonials */}
        <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              What My Patients Say
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { name: 'Patient A', story: 'Dr. Sharad transformed my smile and my confidence. The conservative approach made all the difference!' },
                { name: 'Patient B', story: 'I finally found a dentist who listens and explains everything. Highly recommend for a second opinion.' },
                { name: 'Patient C', story: 'The root canal was painless and saved my tooth. Exceptional care and skill.' },
              ].map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Image src="http://via.placeholder.com/50" alt={testimonial.name} width={50} height={50} className="rounded-full" /> {/* Changed to http */}
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.story}"</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 7. Portfolio: Case Gallery */}
        <section id="portfolio" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Case Gallery
            </h2>
            {/* Placeholder for Carousel or 3-column layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Smile Makeover Case 1', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Restored with composite bonding.' }, // Changed to http
                { title: 'Complex Restoration Case 2', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Full mouth rehabilitation approach.' }, // Changed to http
                { title: 'Anterior Esthetics Case 3', before: 'http://via.placeholder.com/300x200/cccccc/969696?text=Before', after: 'http://via.placeholder.com/300x200/a2ccb2/333333?text=After', desc: 'Minimally invasive veneers.' }, // Changed to http
              ].map((caseItem) => (
                <Card key={caseItem.title}>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">{caseItem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <Image src={caseItem.before} alt={`${caseItem.title} - Before`} width={300} height={200} className="rounded" /> {/* src is now http */}
                      <Image src={caseItem.after} alt={`${caseItem.title} - After`} width={300} height={200} className="rounded" /> {/* src is now http */}
                    </div>
                    <p className="text-gray-600 text-sm">{caseItem.desc}</p>
                  </CardContent>
                </Card>
              ))}</div>
          </div>
        </section>

        {/* 8. Credentials Section */}
        <section id="credentials" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              My Credentials
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <PlaceholderIcon className="mb-2 text-blue-600" />
                <h4 className="font-semibold text-lg">BDS Degree</h4>
                <p className="text-gray-600 text-sm">Reputable Dental College</p>
              </div>
              <div className="flex flex-col items-center">
                <PlaceholderIcon className="mb-2 text-blue-600" />
                <h4 className="font-semibold text-lg">Certified in Esthetic Dentistry</h4>
                <p className="text-gray-600 text-sm">Mock Certification Institute</p>
              </div>
              <div className="flex flex-col items-center">
                <PlaceholderIcon className="mb-2 text-blue-600" />
                <h4 className="font-semibold text-lg">Advanced Endodontics Workshop</h4>
                <p className="text-gray-600 text-sm">International Dental Forum</p>
              </div>
            </div>
            {/* CV link removed as /cv page is deleted. Text can remain as placeholder. */}
            <p className="text-sm text-gray-600 mt-4">View Full CV (Available on request)</p>
          </div>
        </section>

        {/* 9. Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <form className="space-y-6">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input type="tel" placeholder="Your Phone (Optional)" />
                  <Textarea placeholder="Your Message / Preferred Appointment Time" rows={4} />
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-700 mb-1">Clinic Address</h4>
                  <p className="text-gray-600">123 Dental Street, Smile City, PIN 456001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-700 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sun: Closed</p>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-green-500 hover:bg-green-600">Call Now</Button>
                  <Button className="bg-teal-500 hover:bg-teal-600">WhatsApp</Button>
                </div>
                {/* Optional embedded map or clinic-front image */}
                <div className="mt-6 h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  [Placeholder for Map or Clinic Image]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA Strip */}
        <section id="final-cta" className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Preserve your smile. Book your appointment today.
            </h2>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg" asChild>
              <Link href="#contact">Book Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
    // Footer is rendered by layout.tsx
    // </div>
  );
}
