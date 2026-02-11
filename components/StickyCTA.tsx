import React from 'react';
import { APP_CONFIG } from '../config';
import { MessageCircle, Phone } from 'lucide-react';

const StickyCTA: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <div className="fixed bottom-6 right-6 left-6 z-40 flex flex-col items-end gap-4 pointer-events-none">
      <a 
        href={`https://wa.me/${APP_CONFIG.brand.whatsapp}?text=Hi, I want a free graft analysis at ${APP_CONFIG.brand.name}`}
        className="bg-green-500 p-5 rounded-full shadow-2xl text-white pointer-events-auto transform hover:scale-110 active:scale-95 transition-all shadow-green-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
      
      <div className="w-full sm:w-auto bg-white/95 backdrop-blur-md p-2.5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 flex gap-2 pointer-events-auto">
        <button 
          onClick={onCTAClick}
          className="flex-1 sm:px-10 py-4 bg-blue-600 text-white font-black rounded-2xl text-base whitespace-nowrap active:scale-95 transition-all shadow-lg shadow-blue-100"
        >
          Check My Grafts
        </button>
        <a 
          href={`tel:${APP_CONFIG.brand.phone}`}
          className="p-4 bg-slate-900 text-white rounded-2xl active:scale-95 transition-all"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;