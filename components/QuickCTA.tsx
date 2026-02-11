import React from 'react';
import { APP_CONFIG } from '../config';
import { Sparkles } from 'lucide-react';

const QuickCTA: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="py-8 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
            <Sparkles size={20} fill="currentColor" />
          </div>
          <p className="text-lg font-bold text-slate-800">
            Take the first step towards your <span className="text-blue-600">new look</span> today.
          </p>
        </div>
        <button 
          onClick={onClick}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-100 active:scale-95 whitespace-nowrap"
        >
          Check Graft Price Now
        </button>
      </div>
    </div>
  );
};

export default QuickCTA;