
import React from 'react';
import { APP_CONFIG } from '../config';
import { X, Gift } from 'lucide-react';

const ExitPopup: React.FC<{ onClose: () => void; onCTAClick: () => void }> = ({ onClose, onCTAClick }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-[32px] max-w-md w-full p-8 relative shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
            <Gift size={40} />
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-2">Wait! Don't Leave Without This!</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Get an exclusive <span className="text-blue-600 font-bold">Flat ₹5,000 Voucher</span> + Free Scalp Analysis today!
          </p>

          <div className="space-y-3">
            <button
              onClick={onCTAClick}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 text-lg hover:bg-blue-700 transition-all"
            >
              Claim My Discount
            </button>
            <button onClick={onClose} className="w-full py-2 text-slate-400 text-sm font-medium hover:underline">
              No thanks, I'll pay full price
            </button>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -z-10 rounded-full -mr-16 -mt-16"></div>
      </div>
    </div>
  );
};

export default ExitPopup;
