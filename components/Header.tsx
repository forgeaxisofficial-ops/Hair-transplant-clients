import React from 'react';
import { APP_CONFIG } from '../config';
import { Phone } from 'lucide-react';

const Header: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-lg shadow-sm">
             <img src={APP_CONFIG.brand.logo} alt={APP_CONFIG.brand.name} className="h-10 w-auto" />
          </div>
          <span className="font-black text-xl text-slate-900 hidden sm:block tracking-tight">{APP_CONFIG.brand.name}</span>
        </div>
        
        <div className="flex items-center gap-5">
          <a 
            href={`tel:${APP_CONFIG.brand.phone}`} 
            className="hidden lg:flex items-center gap-2.5 text-slate-900 font-bold hover:text-blue-600 transition-colors"
          >
            <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
               <Phone size={18} fill="currentColor" />
            </div>
            <span>{APP_CONFIG.brand.phone}</span>
          </a>
          <button 
            onClick={onCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl shadow-blue-100 transition-all active:scale-95 whitespace-nowrap"
          >
            Free Analysis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;