
import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{q}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-slate-600 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl">
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
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
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
