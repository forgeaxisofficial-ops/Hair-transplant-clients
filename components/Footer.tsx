
import React from 'react';
import { APP_CONFIG } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-8 mb-8 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">{APP_CONFIG.brand.name}</h4>
            <p className="text-sm">Premium Hair Restoration Excellence in {APP_CONFIG.brand.city}.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Patient Care</a>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed max-w-3xl">
          Disclaimer: Hair transplant is a surgical procedure. Results vary significantly between individuals based on donor area density, age, and medical history. Testimonials are shared with patient consent. Images are illustrative of our past results. Consult our experts for a personalized medical plan. {new Date().getFullYear()} © {APP_CONFIG.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
