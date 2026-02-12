import React, { useState, useEffect, useRef } from 'react';
import { APP_CONFIG } from './config';
import { SectionType } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import VSL from './components/VSL';
import TrustSignals from './components/TrustSignals';
import Gallery from './components/Gallery';
import DoctorBio from './components/DoctorBio';
import ProcessSteps from './components/ProcessSteps';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ExitPopup from './components/ExitPopup';
import Testimonials from './components/Testimonials';
import QuickCTA from './components/QuickCTA';

const SectionRenderer: React.FC<{ type: SectionType; onCTAClick: () => void }> = ({ type, onCTAClick }) => {
  switch (type) {
    case SectionType.Hero: return <Hero onCTAClick={onCTAClick} />;
    case SectionType.VSL: return <VSL onCTAClick={onCTAClick} />;
    case SectionType.TrustSignals: return <TrustSignals />;
    case SectionType.Gallery: return <Gallery />;
    case SectionType.DoctorBio: return <DoctorBio />;
    case SectionType.ProcessSteps: return <ProcessSteps />;
    case SectionType.Testimonials: return <Testimonials />;
    case SectionType.Pricing: return <Pricing onCTAClick={onCTAClick} />;
    case SectionType.FAQ: return <FAQ />;
    case SectionType.Location: return <Location />;
    default: return null;
  }
};

const App: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !sessionStorage.getItem('exit_popup_shown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Strip alpha channel from 8-char hex so Tailwind opacity modifiers (/60 etc.) work
  const c = (hex: string) => hex.length === 9 ? hex.slice(0, 7) : hex;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <style>{`
        :root {
          --brand-primary: ${c(APP_CONFIG.theme.primary)};
          --brand-secondary: ${c(APP_CONFIG.theme.secondary)};
          --brand-accent: ${c(APP_CONFIG.theme.accent)};
          --brand-headline-highlight: ${c(APP_CONFIG.theme.headlineHighlight)};
          --brand-stars: ${c(APP_CONFIG.theme.stars)};
          --brand-footer-text: ${c(APP_CONFIG.theme.footerText)};
        }

        .btn-brand { 
          background-color: var(--brand-secondary); 
          color: white; 
          transition: all 0.2s ease-in-out;
        }
        .btn-brand:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }
        .btn-brand:active {
          transform: translateY(0);
        }

        .btn-highlight {
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 99, 235, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
        }
        
        .glass-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      <Header onCTAClick={scrollToForm} />

      <main>
        {APP_CONFIG.sectionsOrder.map((section, idx) => (
          <React.Fragment key={`${section}-${idx}`}>
            <SectionRenderer type={section} onCTAClick={scrollToForm} />

            {/* Logic for injected CTA between other sections, but NOT after Hero or VSL */}
            {idx < APP_CONFIG.sectionsOrder.length - 1 && section !== SectionType.Hero && section !== SectionType.VSL && section !== SectionType.Gallery && section !== SectionType.DoctorBio && section !== SectionType.FAQ && section !== SectionType.Pricing && section !== SectionType.ProcessSteps && (
              <QuickCTA onClick={scrollToForm} />
            )}
          </React.Fragment>
        ))}

        <section ref={formRef} id="lead-form" className="py-16 bg-white relative">
          <div className="absolute inset-0 bg-slate-50 opacity-40 pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-4 relative z-10">
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />

      {showExitPopup && (
        <ExitPopup onClose={() => setShowExitPopup(false)} onCTAClick={() => { setShowExitPopup(false); scrollToForm(); }} />
      )}
    </div>
  );
};

export default App;