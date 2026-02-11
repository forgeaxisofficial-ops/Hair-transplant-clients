import React from 'react';
import { APP_CONFIG } from '../config';

const Header: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <header className="sticky top-0 z-50 glass-header border-b border-slate-200 h-16 sm:h-20">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        {/* Left: Logo ONLY */}
        <div className="flex items-center min-w-0">
          <img 
            src={APP_CONFIG.brand.logo} 
            alt={APP_CONFIG.brand.name} 
            className="h-8 sm:h-11 w-auto object-contain shrink-0" 
          />
        </div>
        
        {/* Right: Single CTA Button */}
        <div className="flex items-center shrink-0">
          <button 
            onClick={onCTAClick}
            className="btn-brand px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-black text-[10px] sm:text-sm uppercase tracking-wider whitespace-nowrap shadow-md transition-all active:scale-95"
          >
            Get Free Analysis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;