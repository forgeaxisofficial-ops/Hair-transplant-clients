import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  const { leadForm, integrations } = APP_CONFIG;
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    leadForm.fields.forEach(f => {
      if (f.defaultValue) defaults[f.id] = f.defaultValue;
    });
    return defaults;
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(integrations.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: window.location.href,
          timestamp: new Date().toISOString(),
          clinic: APP_CONFIG.brand.name
        }),
      });

      if (response.ok) {
        setStatus('success');
        if (integrations.redirectUrl) {
          window.location.href = integrations.redirectUrl;
        }
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-primary/5 border-2 border-brand-primary/10 p-10 rounded-[48px] text-center shadow-inner">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-secondary shadow-xl">
            <CheckCircle2 size={48} />
          </div>
        </div>
        <h3 className="text-3xl font-black text-brand-primary mb-3">Analysis Requested!</h3>
        <p className="text-lg text-brand-primary/60 mb-8 leading-relaxed">Thank you, {formData.name}. Our senior coordinator will call you in <span className="text-brand-secondary font-black">15 minutes</span>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-14 rounded-[40px] sm:rounded-[56px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-brand-primary/10">
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl font-black text-brand-primary mb-2 sm:mb-3 leading-tight">{leadForm.headline}</h3>
        <p className="text-sm sm:text-base text-brand-primary/50 font-medium">{leadForm.subheadline}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {leadForm.fields.map(field => (
          <div key={field.id}>
            <label className="block text-[10px] font-black text-brand-primary/40 mb-2 uppercase tracking-[0.2em] px-1">
              {field.label} {field.required && <span className="text-red-400">*</span>}
            </label>

            {field.type === 'select' ? (
              <div className="relative">
                <select
                  name={field.id}
                  required={field.required}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-brand-primary/5 focus:ring-4 focus:ring-brand-secondary/5 focus:border-brand-secondary outline-none transition-all appearance-none bg-brand-primary/5 font-bold text-brand-primary/70 text-sm sm:text-base"
                >
                  <option value="" disabled>Select option</option>
                  {field.options?.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary/40">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 1L6 6L11 1" /></svg>
                </div>
              </div>
            ) : (
              <input
                type={field.type}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                value={formData[field.id] || ''}
                onChange={handleChange}
                className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-brand-primary/5 focus:ring-4 focus:ring-brand-secondary/5 focus:border-brand-secondary outline-none transition-all bg-brand-primary/5 font-bold text-brand-primary/80 text-sm sm:text-base"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-brand font-black py-4 sm:py-6 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 sm:gap-4 shadow-xl transition-all text-lg sm:text-xl mt-2 sm:mt-4"
        >
          {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={20} className="sm:w-6 sm:h-6" />}
          {leadForm.buttonText}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;