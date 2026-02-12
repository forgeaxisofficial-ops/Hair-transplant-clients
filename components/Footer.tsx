
import React from 'react';
import { APP_CONFIG } from '../config';

const Footer: React.FC = () => {
  const { footer } = APP_CONFIG.copy;

  return (
    <footer className="bg-brand-primary py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center border-b border-brand-accent/10 pb-6 mb-6 text-center md:text-left">
          <div>
            <h4 className="text-brand-accent font-bold text-xl mb-2">{APP_CONFIG.brand.name}</h4>
            <p className="text-sm text-brand-footer-text">{footer.description} {APP_CONFIG.brand.city}.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
            {footer.links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-brand-footer-text hover:text-brand-accent transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-[10px] leading-relaxed max-w-3xl text-brand-footer-text">
          {footer.disclaimer} {new Date().getFullYear()} © {APP_CONFIG.brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
