
import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-primary/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-brand-primary/90 group-hover:text-brand-secondary transition-colors">{q}</span>
        {isOpen ? <ChevronUp className="text-brand-primary/40" /> : <ChevronDown className="text-brand-primary/40" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-brand-primary/70 leading-relaxed text-sm bg-brand-primary/5 p-4 rounded-xl">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-brand-primary mb-8 text-center">
          {APP_CONFIG.copy.faq.headline}
        </h2>
        <div className="space-y-2">
          {APP_CONFIG.copy.faq.questions.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
