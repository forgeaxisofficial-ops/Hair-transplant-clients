import React from 'react';
import { APP_CONFIG } from '../config';
import { Sparkles } from 'lucide-react';

const QuickCTA: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="py-14 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
            <Sparkles size={32} fill="currentColor" />
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight">
              Ready for your <span className="text-brand-secondary">transformation?</span>
            </p>
            <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Free Analysis • 2 Min Process • Instant Estimate</p>
          </div>
        </div>
        <button 
          onClick={onClick}
          className="btn-brand btn-highlight w-full sm:w-auto px-12 py-6 sm:py-7 rounded-2xl font-black transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap text-xl sm:text-2xl uppercase tracking-tighter"
        >
          Check Graft Requirement
        </button>
      </div>
    </div>
  );
};

export default QuickCTA;