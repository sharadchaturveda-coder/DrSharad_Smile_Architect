'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const inputStyles = "bg-slate-700 border-slate-600 placeholder-slate-400 text-off-white focus:border-accent focus:ring-accent rounded-lg";
  return (
    <form className="space-y-6">
      <Input type="text" placeholder="Your Name" className={inputStyles} />
      <Input type="email" placeholder="Your Email" className={inputStyles} />
      <Input type="tel" placeholder="Your Phone (Optional)" className={inputStyles} />
      <Textarea placeholder="Your Message / Preferred Appointment Time" rows={4} className={inputStyles} />
      <Button
        type="submit"
        size="lg"
        className="w-full bg-accent text-off-white hover:bg-sky-500 hover:text-off-white font-semibold shadow-lg md:hover:shadow-xl transition-all duration-300 ease-in-out transform md:hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-brand-gray-800 active:scale-105" // Prefixed hover effects, kept active:scale
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
