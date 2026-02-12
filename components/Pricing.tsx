import React from 'react';
import { APP_CONFIG } from '../config';
import { CheckCircle, Zap } from 'lucide-react';

const Pricing: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const { pricing } = APP_CONFIG.copy;

  return (
    <section className="py-16 bg-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">{pricing.headline}</h2>
          <p className="text-xl text-brand-primary/60 max-w-2xl mx-auto">{pricing.benefitHeadline}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden border border-brand-primary/10 flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">Premium Inclusion Package</h3>
              </div>

              <div className="grid sm:grid-cols-1 gap-1 mb-8">
                {pricing.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 pb-3 bg-brand-primary/5 rounded-2xl hover:bg-brand-secondary/10 transition-colors border border-transparent hover:border-brand-secondary/20">
                    <CheckCircle size={22} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span className="text-brand-primary/70 font-bold leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onCTAClick}
                className="w-full py-6 bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-[24px] font-black text-xl transition-all shadow-2xl shadow-brand-secondary/20 transform hover:-translate-y-1 active:scale-95"
              >
                {pricing.buttonText}
              </button>

              <p className="text-center text-brand-primary/40 text-xs mt-6 font-medium uppercase tracking-widest">
                No upfront payment required for consultation
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-black text-brand-primary">100%</p>
              <p className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-widest">Safe & Hygiene</p>
            </div>
            <div className="p-4 border-x border-brand-primary/20">
              <p className="text-3xl font-black text-brand-primary">5k+</p>
              <p className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-widest">Happy Patients</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-black text-brand-primary">EMI</p>
              <p className="text-[10px] font-bold text-brand-primary/50 uppercase tracking-widest">Easy Monthly Plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;