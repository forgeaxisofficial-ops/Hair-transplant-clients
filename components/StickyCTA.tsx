import React from 'react';
import { APP_CONFIG } from '../config';
import { MessageCircle, Phone } from 'lucide-react';

const StickyCTA: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <div className="fixed bottom-6 right-6 left-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <a 
        href={`https://wa.me/${APP_CONFIG.brand.whatsapp}?text=Hi, I want a free graft analysis at ${APP_CONFIG.brand.name}`}
        className="bg-green-500 p-3.5 rounded-full shadow-2xl text-white pointer-events-auto transform hover:scale-110 active:scale-95 transition-all shadow-green-200/50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>
      
      <div className="w-full sm:w-auto bg-white/95 backdrop-blur-md p-2 rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 flex gap-1.5 pointer-events-auto">
        <button 
          onClick={onCTAClick}
          className="flex-1 sm:px-8 py-3 bg-blue-600 text-white font-black rounded-2xl text-sm whitespace-nowrap active:scale-95 transition-all shadow-lg shadow-blue-100"
        >
          Check My Grafts
        </button>
        <a 
          href={`tel:${APP_CONFIG.brand.phone}`}
          className="p-3 bg-slate-900 text-white rounded-2xl active:scale-95 transition-all"
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;