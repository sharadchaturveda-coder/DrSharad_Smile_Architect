import { Button } from '@/components/ui/button';

const ContactDetails = () => {
  return (
    <div className="space-y-6 p-8 bg-brand-gray-800 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/50"> {/* Updated background and border */}
      <div>
        <h4 className="font-semibold text-lg text-off-white mb-1">Clinic Address</h4> {/* Updated text color */}
        <p className="text-slate-400 leading-relaxed">123 Dental Street, Smile City, PIN 456001</p> {/* Updated text color */}
      </div>
      <div>
        <h4 className="font-semibold text-lg text-off-white mb-1">Working Hours</h4> {/* Updated text color */}
        <p className="text-slate-400 leading-relaxed">Mon - Sat: 10:00 AM - 7:00 PM</p> {/* Updated text color */}
        <p className="text-slate-400 leading-relaxed">Sun: Closed</p> {/* Updated text color */}
      </div>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"> {/* Stack buttons on small screens */}
        <Button className="bg-accent text-off-white hover:bg-sky-500 hover:text-off-white font-semibold shadow-md md:hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background w-full sm:w-auto active:scale-105">Call Now</Button>
        <Button className="bg-accent text-off-white hover:bg-sky-500 hover:text-off-white font-semibold shadow-md md:hover:shadow-lg transition-all duration-300 ease-in-out transform md:hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background w-full sm:w-auto active:scale-105">WhatsApp</Button>
      </div>
      <div className="mt-6 h-64 bg-brand-gray-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700"> {/* Updated background, text, and added border */}
        [ Clinic Location Map ]
      </div>
    </div>
  );
};

export default ContactDetails;
