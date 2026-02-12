import React from 'react';
import { APP_CONFIG } from '../config';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const DoctorBio: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-2">Expert Surgeon</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">Meet {APP_CONFIG.brand.doctorName}</h3>

          <p className="text-brand-primary/70 mb-6 leading-relaxed">
            With over 12 years of experience and 5,000+ successful transplants, {APP_CONFIG.brand.doctorName} is a pioneer in the Bio-Enhanced FUE technique. Known for his "natural hairline artistry," he has treated celebrities, corporate leaders, and patients from all over India.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="font-bold text-brand-primary/90">M.S. Surgeon, Fellow in Hair Restoration</p>
                <p className="text-sm text-brand-primary/60">AIIMS Alumni & ISHRS Member</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-brand-primary/90">5,000+ Successful Procedures</p>
                <p className="text-sm text-brand-primary/60">Highest success rate in {APP_CONFIG.brand.city}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative max-w-xs md:max-w-sm w-full">
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-secondary to-brand-primary rounded-3xl blur opacity-20"></div>
            <img
              src="https://picsum.photos/seed/doctor/600/700"
              alt={APP_CONFIG.brand.doctorName}
              className="relative rounded-3xl w-full h-auto shadow-2xl transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorBio;