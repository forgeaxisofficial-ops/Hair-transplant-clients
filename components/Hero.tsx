import React from 'react';
import { APP_CONFIG } from '../config';
import { Star, CheckCircle2 } from 'lucide-react';

const Hero: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const { hero } = APP_CONFIG.copy;

  return (
    <section className="relative pt-8 sm:pt-14 pb-8 sm:pb-12 overflow-hidden bg-white">
      {/* Background subtle decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        {/* H1: The Powerful Hook */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tighter max-w-4xl mx-auto">
          {hero.headline} <span className="text-brand-secondary">{hero.headlineHighlight}</span>
        </h1>

        {/* H2: Trust & Location Focused */}
        <h2 className="text-lg md:text-2xl text-slate-600 mb-4 sm:mb-6 font-semibold max-w-3xl mx-auto leading-relaxed">
          {hero.subheadline} {APP_CONFIG.brand.city}
        </h2>

        {/* Trust Proof Block */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="flex text-amber-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <span className="text-xs sm:text-base font-bold text-slate-700">
            4.9/5 (850+ Verified Patients)
          </span>
        </div>

        {/* Primary CTA Area */}
        <div className="mb-6 inline-block w-full sm:w-auto">
          <button
            onClick={onCTAClick}
            className="w-full sm:w-auto px-10 sm:px-16 py-5 sm:py-7 btn-brand rounded-xl sm:rounded-2xl font-black text-lg sm:text-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-100"
          >
            {hero.cta}
          </button>

          {/* Microcopy Below Button - Darker & Bolder */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 mt-6 text-[10px] sm:text-[12px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-600" /> Free Analysis</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-600" /> 2 Min Process</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-600" /> Instant Estimate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;