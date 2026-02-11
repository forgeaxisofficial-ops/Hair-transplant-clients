import React, { useState, useEffect, useRef } from 'react';
import { APP_CONFIG } from '../config';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { testimonials } = APP_CONFIG.copy;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.items.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{testimonials.headline}</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-[40px] bg-slate-50 border border-slate-100 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.items.map((item, idx) => (
                <div key={idx} className="min-w-full p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
                  <div className="shrink-0 relative">
                    <div className="absolute -inset-2 bg-blue-600 rounded-full blur opacity-20"></div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="relative w-24 h-24 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                      <Quote size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg md:text-2xl font-medium text-slate-700 italic leading-relaxed mb-6">
                      "{item.text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                      <p className="text-blue-600 font-semibold">{item.city} Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-4 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-4 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? 'bg-blue-600 w-8' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;