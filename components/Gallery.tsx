
import React from 'react';
import { APP_CONFIG } from '../config';

const Gallery: React.FC = () => {
  return (
    <section className="py-12 bg-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{APP_CONFIG.copy.gallery.headline}</h2>
          <div className="w-20 h-1.5 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {APP_CONFIG.copy.gallery.images.map((img, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl group">
              <div className="grid grid-cols-2 relative">
                <div className="relative">
                  <img src={img.before} alt="Before" className="w-full aspect-[4/5] object-cover" />
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">Before</div>
                </div>
                <div className="relative">
                  <img src={img.after} alt="After" className="w-full aspect-[4/5] object-cover" />
                  <div className="absolute top-4 right-4 bg-brand-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">After</div>
                </div>
              </div>
              <div className="p-6 text-center border-t border-brand-primary/10">
                <p className="font-bold text-brand-primary/90 text-lg">{img.caption}</p>
                <p className="text-brand-primary/60 text-sm mt-1 italic">Verified result at {APP_CONFIG.brand.city} clinic</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
