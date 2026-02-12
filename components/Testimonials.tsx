import React, { useState, useEffect, useRef } from 'react';
import { APP_CONFIG } from '../config';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { testimonials } = APP_CONFIG.copy;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isScrollingRef.current && scrollContainerRef.current) {
        const nextIndex = (activeIndex + 1) % testimonials.items.length;
        const width = scrollContainerRef.current.offsetWidth;
        scrollContainerRef.current.scrollTo({
          left: nextIndex * width,
          behavior: 'smooth'
        });
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, testimonials.items.length]);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % testimonials.items.length;
    scrollToSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + testimonials.items.length) % testimonials.items.length;
    scrollToSlide(prevIndex);
  };

  const handleScrollRaw = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / width);

      // Only update state if index actually changed to prevent re-renders
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }

      // Simple debounce for auto-scroll pause
      isScrollingRef.current = true;
      if (window.scrollTimeout) clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Type augmentation for window timeout
  useEffect(() => {
    window.scrollTimeout = null;
    return () => {
      if (window.scrollTimeout) clearTimeout(window.scrollTimeout);
    };
  }, []);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">{testimonials.headline}</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          {/* Main Carousel Container */}
          <div className="relative rounded-[40px] bg-white border border-slate-100 shadow-2xl overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={handleScrollRaw}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.items.map((item, idx) => (
                <div key={idx} className="min-w-full snap-center flex-shrink-0 p-8 md:p-14 flex flex-col md:flex-row items-stretch gap-8 md:gap-14">
                  {/* Before/After Visualization */}
                  <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2 flex-1 min-h-[220px]">
                      <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-transform hover:scale-[1.02]">
                        <img src={item.beforeImage} alt="Before" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Day 0</div>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden border-2 border-blue-200 shadow-sm transition-transform hover:scale-[1.02]">
                        <img src={item.afterImage} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Result</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-1">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{item.city} Patient</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex gap-1 mb-5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-6 text-blue-100 opacity-50" size={48} />
                      <p className="relative text-lg md:text-xl font-medium text-slate-700 italic leading-relaxed mb-8">
                        "{item.text}"
                      </p>
                    </div>
                    <div className="mt-auto p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Clinic Verified Result</p>
                      <p className="text-[10px] text-slate-400 font-medium">Verified by Radiant Hair Clinic Internal Quality Standards.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:flex items-center justify-center border border-slate-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:flex items-center justify-center border border-slate-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300 hover:bg-blue-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add global declaration for scrollTimeout if needed in strict TS environments, usually fine in JS/TSX context if understood
declare global {
  interface Window {
    scrollTimeout: any;
  }
}

export default Testimonials;