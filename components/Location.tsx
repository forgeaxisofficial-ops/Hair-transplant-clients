
import React from 'react';
import { APP_CONFIG } from '../config';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Content Side */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <MapPin size={14} />
              <span>Prime Location</span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Visit Our Premium Clinic in {APP_CONFIG.brand.city}
            </h3>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Experience world-class care in our state-of-the-art facility. Conveniently located near major transport hubs with ample parking.
            </p>

            <div className="flex items-start gap-5 mb-10 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg mt-1">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-xl text-slate-900 font-bold leading-relaxed mb-1">
                  {APP_CONFIG.brand.address}
                </p>
                <p className="text-slate-500 text-sm font-medium">Open Mon-Sat, 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto justify-center"
            >
              <Navigation size={20} />
              <span>Get Directions</span>
              <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Map/Image Side - Standalone Card */}
          <div className="order-1 md:order-2 relative group">
            {/* Decorative blob behind */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-1 md:rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="https://picsum.photos/seed/clinicLocation/800/800"
                alt="Clinic Location Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>

              {/* Floating Map Label */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">View on Map</p>
                <p className="font-bold text-slate-900">Google Maps Integration</p>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Open in Maps</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
