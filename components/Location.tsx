
import React from 'react';
import { APP_CONFIG } from '../config';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-secondary/5 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Content Side */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <MapPin size={14} />
              <span>Prime Location</span>
            </div>

            <h3 className="text-4xl font-black text-brand-primary mb-6 leading-tight">
              Visit Our Premium Clinic in {APP_CONFIG.brand.city}
            </h3>

            <div className="flex items-start gap-5 mb-10">
              <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-accent shrink-0 shadow-lg mt-1">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-xl text-brand-primary font-medium leading-relaxed mb-2">
                  {APP_CONFIG.brand.address}
                </p>
                <p className="text-brand-primary/60 text-sm">Easy access from all major metro stations.</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Navigation size={20} />
              <span>Get Directions</span>
              <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Map/Image Side - Standalone Card */}
          <div className="order-1 md:order-2 relative group">
            {/* Decorative blob behind */}
            <div className="w-full md:w-1/2 min-h-[400px] bg-brand-primary/10 relative group overflow-hidden rounded-b-[40px] md:rounded-b-none md:rounded-r-[40px]">
              <img
                src="https://picsum.photos/seed/clinicLocation/800/800"
                alt="Clinic Location Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-brand-primary/0 transition-colors"></div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm"
              >
                <div className="bg-white text-brand-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <MapPin size={18} className="text-brand-secondary" />
                  View on Google Maps
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
