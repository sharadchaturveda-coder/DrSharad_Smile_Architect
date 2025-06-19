import PlaceholderIcon from '@/components/common/PlaceholderIcon';

const credentials = [
  { title: 'BDS Degree', institution: 'Reputable Dental College' },
  { title: 'Certified in Esthetic Dentistry', institution: 'Mock Certification Institute' },
  { title: 'Advanced Endodontics Workshop', institution: 'International Dental Forum' },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-700 tracking-tight text-center mb-12">
          My Credentials
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {credentials.map((cred) => (
            <div key={cred.title} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <PlaceholderIcon className="mb-4 text-sky-500 w-12 h-12" />
              <h4 className="font-semibold text-lg text-slate-700">{cred.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{cred.institution}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">View Full CV (Available on request)</p>
      </div>
    </section>
  );
};

export default CredentialsSection;
