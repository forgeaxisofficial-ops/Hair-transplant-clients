
import React from 'react';
import { APP_CONFIG } from '../config';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const DoctorBio: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Expert Surgeon</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Meet {APP_CONFIG.brand.doctorName}</h3>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            With over 12 years of experience and 5,000+ successful transplants, {APP_CONFIG.brand.doctorName} is a pioneer in the Bio-Enhanced FUE technique. Known for his "natural hairline artistry," he has treated celebrities, corporate leaders, and patients from all over India.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">M.S. Surgeon, Fellow in Hair Restoration</p>
                <p className="text-sm text-slate-500">AIIMS Alumni & ISHRS Member</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-800">5,000+ Successful Procedures</p>
                <p className="text-sm text-slate-500">Highest success rate in {APP_CONFIG.brand.city}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/doctor/600/700" 
              alt={APP_CONFIG.brand.doctorName} 
              className="relative rounded-3xl w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorBio;
