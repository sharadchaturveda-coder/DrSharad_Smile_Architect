import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input type="text" id="fullName" name="fullName" placeholder="Your Full Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea id="message" name="message" rows={4} placeholder="Your message..." required />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
              Submit
            </Button>
          </form>
        </section>

        {/* Static Info Section */}
        <section className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Clinic Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">#42 Smile Avenue, Whitefield, Bangalore</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-800 hover:underline">
                  +91-9876543210
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <MessageSquare className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                <a 
                  href="https://wa.me/+919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Clinic Hours</h3>
                <p className="text-gray-600">Mon – Sat | 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Google Maps Embed Placeholder */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Us Here</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed Placeholder</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
