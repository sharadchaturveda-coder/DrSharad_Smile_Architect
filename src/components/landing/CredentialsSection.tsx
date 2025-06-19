import GeometricPlaceholderIcon from '@/components/common/GeometricPlaceholderIcon'; // Updated import

const credentials = [
  { title: 'BDS Degree', institution: 'Reputable Dental College' },
  { title: 'Certified in Esthetic Dentistry', institution: 'Mock Certification Institute' },
  { title: 'Advanced Endodontics Workshop', institution: 'International Dental Forum' },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-16 md:py-24 bg-background"> {/* Updated background */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-off-white tracking-tight text-center mb-12"> {/* Updated text color */}
          My Credentials
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {credentials.map((cred, index) => ( // Added index for alternating shapes
            <div key={cred.title} className="flex flex-col items-center p-6 bg-brand-gray-800 rounded-2xl shadow-lg md:hover:shadow-xl active:shadow-2xl active:scale-[1.02] transition-all duration-300 ease-in-out"> {/* Prefixed hover:shadow-xl with md: */}
              <GeometricPlaceholderIcon
                shape={index % 2 === 0 ? 'diamond' : 'hexagon'} // Alternate shapes, different start from Services
                className="mb-4 text-accent w-12 h-12" // Icon color and size
              />
              <h4 className="font-semibold text-lg text-accent">{cred.title}</h4> {/* Updated title color */}
              <p className="text-slate-400 text-sm leading-relaxed">{cred.institution}</p> {/* Updated paragraph color */}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-400 mt-4">View Full CV (Available on request)</p> {/* Updated text color */}
      </div>
    </section>
  );
};

export default CredentialsSection;
