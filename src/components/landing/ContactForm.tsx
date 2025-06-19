'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <form className="space-y-6">
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
  );
};

export default ContactForm;
