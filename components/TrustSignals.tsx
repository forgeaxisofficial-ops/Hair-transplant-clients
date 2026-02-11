
import React from 'react';
import { APP_CONFIG } from '../config';
import * as LucideIcons from 'lucide-react';

const TrustSignals: React.FC = () => {
  const { offers } = APP_CONFIG.copy;
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">{offers.headline}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.items.map((item, idx) => {
            // @ts-ignore - dynamic icon access
            const Icon = LucideIcons[item.icon] || LucideIcons.CheckCircle;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
