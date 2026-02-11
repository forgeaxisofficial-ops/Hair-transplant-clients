
import React from 'react';
import { APP_CONFIG } from '../config';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-slate-100">
          <div className="p-8 md:p-12 flex-1">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Visit Our {APP_CONFIG.brand.city} Clinic</h3>
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                {APP_CONFIG.brand.address}
              </p>
            </div>
            
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_CONFIG.brand.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
            >
              <Navigation size={18} />
              Open in Google Maps
            </a>
          </div>
          
          <div className="w-full md:w-1/2 aspect-video md:aspect-auto min-h-[300px] bg-slate-200">
            {/* Real map embed would go here, using a placeholder for now */}
            <img src="https://picsum.photos/seed/map/800/600" alt="Map Location" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
