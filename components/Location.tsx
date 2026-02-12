
import React from 'react';
import { APP_CONFIG } from '../config';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  const mapsUrl = APP_CONFIG.brand.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`;

  return (
    <section className="py-20 bg-brand-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-brand-secondary text-xs font-black uppercase tracking-[0.2em] mb-4">
            <div className="w-12 h-[1px] bg-brand-secondary/30"></div>
            <span>Visit Our Clinic</span>
            <div className="w-12 h-[1px] bg-brand-secondary/30"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-brand-primary leading-tight">
            Location in {APP_CONFIG.brand.city}
          </h3>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-brand-primary/5">
          <div className="grid md:grid-cols-5 items-stretch">

            {/* Map / Clinic Image — Clickable to Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 relative group cursor-pointer block min-h-[300px] md:min-h-[420px] overflow-hidden"
            >
              <img
                src={APP_CONFIG.brand.locationImage || 'https://picsum.photos/seed/clinicMap/900/600'}
                alt={`${APP_CONFIG.brand.name} Location`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-all duration-500 flex items-center justify-center">
                <div className="bg-white text-brand-primary px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2.5 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ExternalLink size={18} className="text-brand-secondary" />
                  Open in Google Maps
                </div>
              </div>
              {/* Corner badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-brand-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Tap to navigate
              </div>
            </a>

            {/* Info Side */}
            <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-black text-brand-primary mb-6">
                {APP_CONFIG.brand.name}
              </h4>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-primary/80 mb-1">Address</p>
                  <p className="text-brand-primary/60 text-sm leading-relaxed">
                    {APP_CONFIG.brand.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-primary/80 mb-1">Call Us</p>
                  <a href={`tel:${APP_CONFIG.brand.phone}`} className="text-brand-secondary text-sm font-semibold hover:underline">
                    {APP_CONFIG.brand.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-11 h-11 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-primary/80 mb-1">Clinic Hours</p>
                  <p className="text-brand-primary/60 text-sm">Mon – Sat: 10 AM – 7 PM</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-4 rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
