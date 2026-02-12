
import React from 'react';

const steps = [
  { title: "Consultation", desc: "Expert assessment of donor area and hairline design." },
  { title: "The Procedure", desc: "Painless graft extraction and artistic implantation in 6 hours." },
  { title: "Quick Recovery", desc: "Wash hair in 3 days. Return to office in 48 hours." },
  { title: "New Look", desc: "Noticeable growth in 4 months, full results in 8-10 months." },
];

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Your 4-Step Journey to Full Hair</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-black text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px border-t-2 border-dashed border-slate-200 -z-10"></div>
              )}
              <h4 className="font-bold text-slate-800 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500 px-4 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
