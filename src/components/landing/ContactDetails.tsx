import { Button } from '@/components/ui/button';

const ContactDetails = () => {
  return (
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
  );
};

export default ContactDetails;
