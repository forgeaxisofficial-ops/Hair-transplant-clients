
import React from 'react';
import { APP_CONFIG } from '../config';

const VSL: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-snug">
          {APP_CONFIG.copy.vsl.headline}
        </h2>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border-4 border-slate-800">
          <iframe
            src={`https://player.vimeo.com/video/${APP_CONFIG.copy.vsl.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <p className="mt-8 text-slate-400 text-sm italic">
          *Individual results may vary based on donor density and stage of baldness.
        </p>
      </div>
    </section>
  );
};

export default VSL;
