import React from 'react';
import { APP_CONFIG } from '../config';
import { Phone, CheckCircle2, PlayCircle } from 'lucide-react';

interface VSLProps {
  onCTAClick: () => void;
}

const VSL: React.FC<VSLProps> = ({ onCTAClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Headline: Show full text without ellipses */}
        <h2 className="text-2xl sm:text-4xl font-black mb-8 leading-tight px-2">
          {APP_CONFIG.copy.vsl.headline}
        </h2>

        {/* Pre-video Bullet Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-slate-300">
          {[
            "Painless FUE Gold Technique",
            "98% Graft Survival Rate",
            "Artistic Natural Hairline"
          ].map((bullet, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></div>
              {bullet}
            </div>
          ))}
        </div>
        
        {/* Video Player: 90% Width for focus */}
        <div className="max-w-[90%] mx-auto relative group">
          <div className="absolute -inset-1 bg-brand-secondary/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-video rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-800 bg-black">
            <iframe
              src={`https://player.vimeo.com/video/${APP_CONFIG.copy.vsl.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="mt-6 text-slate-500 text-[10px] sm:text-xs italic uppercase tracking-widest font-bold">
          *Individual results may vary based on donor density
        </p>

        {/* Primary CTA: Significantly increased size and emphasis */}
        <div className="mt-12 sm:mt-16">
          <button 
            onClick={onCTAClick}
            className="w-full sm:w-auto px-10 sm:px-20 py-6 sm:py-8 btn-brand rounded-2xl sm:rounded-[32px] font-black text-xl sm:text-3xl shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105 active:scale-95 hover:shadow-[0_25px_60px_-5px_rgba(37,99,235,0.5)] border-2 border-white/5"
          >
            Check My Graft Requirement
          </button>
        </div>

        {/* Benefit Pills & Phone Block: Integrated below CTA with reduced spacing */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/50">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
            {[
              "Pay Per Graft", 
              "Life-time Growth", 
              "0% Interest EMI", 
              "Expert Surgeons"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[9px] sm:text-xs font-black text-slate-300 bg-slate-800/50 border border-slate-700 px-4 py-2.5 rounded-full shadow-inner">
                <CheckCircle2 size={13} className="text-brand-secondary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-4">Or speak with our expert now</p>
            <a 
              href={`tel:${APP_CONFIG.brand.phone}`}
              className="flex items-center gap-3 text-2xl sm:text-3xl font-black text-white hover:text-brand-secondary transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-brand-secondary shadow-lg border border-slate-700 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                <Phone size={24} fill="currentColor" />
              </div>
              {APP_CONFIG.brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSL;