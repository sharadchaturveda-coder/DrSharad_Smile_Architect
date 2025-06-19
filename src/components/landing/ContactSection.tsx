import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="p-8 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50">
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
