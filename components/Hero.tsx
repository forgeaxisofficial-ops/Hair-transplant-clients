import React from 'react';
import { APP_CONFIG } from '../config';
import { ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

const Hero: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const { hero } = APP_CONFIG.copy;
  
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs mb-6 border border-blue-200 uppercase tracking-wide">
            <ShieldCheck size={14} />
            {hero.eyebrow}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6">
            {hero.headline}
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-10">
            <button 
              onClick={onCTAClick}
              className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              {hero.cta}
            </button>
            <div className="flex items-center gap-3 px-4 py-2">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/face${i}/40/40`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Patient" />
                ))}
              </div>
              <div className="text-xs font-bold text-slate-500">
                <div className="flex text-amber-500 mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                4.9/5 TrustScore (850+)
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
            {[
              "Pay Per Graft Model", 
              "Life-time Growth", 
              "0% Interest EMI", 
              "Expert Surgeons"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-white/50 border border-slate-200/50 p-2.5 rounded-xl shadow-sm">
                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
          <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white">
            <img src="https://picsum.photos/seed/hero-hair/800/600" alt="Hair Transplant Results" className="w-full h-auto object-cover" />
            <div className="absolute bottom-6 left-6 right-6 p-5 glass-effect rounded-[24px] flex items-center justify-between border border-white/40 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                   <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-0.5">Highly Recommended</p>
                  <p className="text-sm font-extrabold text-slate-800">Best Hair Clinic Excellence 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;