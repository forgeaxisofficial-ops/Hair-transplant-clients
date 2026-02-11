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
    case SectionType.VSL: return <VSL />;
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

  return (
    <div className="min-h-screen">
      <Header onCTAClick={scrollToForm} />
      
      <main>
        {APP_CONFIG.sectionsOrder.map((section, idx) => (
          <React.Fragment key={`${section}-${idx}`}>
            <SectionRenderer type={section} onCTAClick={scrollToForm} />
            {/* Inject a quick CTA after every section except the last few for flow */}
            {idx < APP_CONFIG.sectionsOrder.length - 2 && (
              <QuickCTA onClick={scrollToForm} />
            )}
          </React.Fragment>
        ))}
        
        <section ref={formRef} id="lead-form" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-blue-50 opacity-30 pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-4 relative z-10">
            <LeadForm />
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA onCTAClick={scrollToForm} />
      
      {showExitPopup && (
        <ExitPopup onClose={() => setShowExitPopup(false)} onCTAClick={() => { setShowExitPopup(false); scrollToForm(); }} />
      )}
    </div>
  );
};

export default App;