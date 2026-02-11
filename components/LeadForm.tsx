import React, { useState } from 'react';
import { APP_CONFIG } from '../config';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const LeadForm: React.FC = () => {
  const { leadForm, integrations } = APP_CONFIG;
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    // Initialize with default values from config
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
      <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-[40px] text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl">
             <CheckCircle2 size={48} />
          </div>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-3">Thank You, {formData.name || 'Friend'}!</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">Our senior medical coordinator will call you within <span className="text-blue-600 font-black italic">15 minutes</span> to discuss your hair analysis.</p>
        <div className="bg-white p-5 rounded-2xl border border-blue-100 text-sm font-bold text-slate-500 shadow-sm">
          💡 Pro-Tip: Keep your scalp photos ready on WhatsApp for faster estimation!
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-12 rounded-[48px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black text-slate-900 mb-3">{leadForm.headline}</h3>
        <p className="text-slate-500 font-medium">{leadForm.subheadline}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {leadForm.fields.map(field => (
          <div key={field.id}>
            <label className="block text-sm font-black text-slate-600 mb-2 uppercase tracking-widest px-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <div className="relative">
                <select
                  name={field.id}
                  required={field.required}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all appearance-none bg-slate-50 font-bold text-slate-700"
                >
                  <option value="" disabled>Select option</option>
                  {field.options?.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
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
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all bg-slate-50 font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-medium"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-4 shadow-xl shadow-blue-200 transition-all active:scale-95 text-xl mt-4 group"
        >
          {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          {leadForm.buttonText}
        </button>
        
        {status === 'error' && (
          <p className="text-center text-red-500 text-sm font-bold mt-2">
            Something went wrong. Please check your internet or try WhatsApp.
          </p>
        )}
        
        <div className="flex items-center justify-center gap-2 mt-6">
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
             24/7 Expert Support Available
           </p>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;