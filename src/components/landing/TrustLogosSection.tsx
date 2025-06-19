import SubtlePattern from '@/components/common/SubtlePattern'; // Import SubtlePattern

const logoPlaceholders = [
  { id: 'logo1', text: 'Partner Logo 1' },
  { id: 'logo2', text: 'Partner Logo 2' },
  { id: 'logo3', text: 'Partner Logo 3' },
  { id: 'logo4', text: 'Partner Logo 4' },
  { id: 'logo5', text: 'Partner Logo 5' },
];

const LogoPlaceholder = ({ text, id }: { text: string; id: string }) => (
  <div className="relative w-32 h-16 bg-brand-gray-800 rounded-lg overflow-hidden flex items-center justify-center p-2 shadow-md">
    <SubtlePattern patternId={`trustLogoPattern-${id}`} lineColor="rgba(241, 245, 249, 0.05)" patternSize={8} />
    <span className="z-10 text-xs font-medium text-slate-400 text-center">{text}</span>
  </div>
);

const TrustLogosSection = () => {
  return (
    <section id="trust-logos" className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Trusted By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logoPlaceholders.map((logo) => (
            <LogoPlaceholder key={logo.id} id={logo.id} text={logo.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogosSection;
