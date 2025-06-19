import PlaceholderIcon from '@/components/common/PlaceholderIcon';

const TrustLogosSection = () => {
  return (
    <section id="trust-logos" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          Trusted By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* IDA */}
          <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Continuing Education */}
          <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Mock Dental Association */}
          <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Another Mock Logo */}
          <PlaceholderIcon className="w-20 h-10 text-slate-400" /> {/* Yet Another Mock Logo */}
        </div>
      </div>
    </section>
  );
};

export default TrustLogosSection;
