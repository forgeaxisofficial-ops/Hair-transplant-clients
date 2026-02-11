import React from 'react';
import { APP_CONFIG } from '../config';
import { CheckCircle, Zap } from 'lucide-react';

const Pricing: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  const { pricing } = APP_CONFIG.copy;
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{pricing.headline}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{pricing.benefitHeadline}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[48px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Premium Inclusion Package</h3>
              </div>
              
              <div className="grid sm:grid-cols-1 gap-5 mb-12">
                {pricing.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
                    <CheckCircle size={22} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-bold leading-snug">{point}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={onCTAClick}
                className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] font-black text-xl transition-all shadow-2xl shadow-blue-100 transform hover:-translate-y-1 active:scale-95"
              >
                {pricing.buttonText}
              </button>
              
              <p className="text-center text-slate-400 text-xs mt-6 font-medium uppercase tracking-widest">
                No upfront payment required for consultation
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
               <p className="text-3xl font-black text-slate-900">100%</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Safe & Hygiene</p>
            </div>
            <div className="p-4 border-x border-slate-200">
               <p className="text-3xl font-black text-slate-900">5k+</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Happy Patients</p>
            </div>
            <div className="p-4">
               <p className="text-3xl font-black text-slate-900">EMI</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Easy Monthly Plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;