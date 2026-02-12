import React from 'react';
import { APP_CONFIG } from '../config';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      {/* WhatsApp Button Only */}
      <a
        href={`https://wa.me/${APP_CONFIG.brand.whatsapp}?text=Hi, I want a free graft analysis at ${APP_CONFIG.brand.name}`}
        className="flex items-center justify-center bg-[#25D366] w-14 h-14 rounded-full shadow-2xl text-white pointer-events-auto transform hover:scale-110 active:scale-95 transition-all shadow-green-400/20"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
};

export default StickyCTA;