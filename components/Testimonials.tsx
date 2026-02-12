import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../config';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    const { testimonials } = APP_CONFIG.copy;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.items.length]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);

    return (
        <section className="py-4 bg-brand-primary/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-4">{testimonials.headline}</h2>
                    <div className="w-24 h-1.5 bg-brand-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Carousel Container */}
                    <div className="relative overflow-hidden rounded-[40px] bg-white border border-brand-primary/10 shadow-2xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.items.map((item, idx) => (
                                <div key={idx} className="min-w-full p-8 md:p-14 flex flex-col md:flex-row items-stretch gap-8 md:gap-14">
                                    {/* Before/After Visualization */}
                                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                                        <div className="grid grid-cols-2 gap-2 flex-1 min-h-[220px]">
                                            <div className="relative rounded-2xl overflow-hidden border border-brand-primary/10 shadow-sm">
                                                <img src={item.beforeImage} alt="Before" className="w-full h-full object-cover" />
                                                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Day 0</div>
                                            </div>
                                            <div className="relative rounded-2xl overflow-hidden border-2 border-brand-secondary/30 shadow-sm">
                                                <img src={item.afterImage} alt="After" className="w-full h-full object-cover" />
                                                <div className="absolute top-2 right-2 px-2 py-0.5 bg-brand-secondary text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Result</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 px-1">
                                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" />
                                            <div>
                                                <h4 className="text-sm font-bold text-brand-primary">{item.name}</h4>
                                                <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest">{item.city} Patient</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                                        <div className="flex gap-1 mb-5 text-brand-stars">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <div className="relative">
                                            <Quote className="absolute -top-4 -left-6 text-brand-accent opacity-28" size={48} />
                                            <p className="relative text-lg md:text-xl font-medium text-brand-primary/80 italic leading-relaxed mb-6">
                                                "{item.text}"
                                            </p>
                                        </div>
                                        <div className="mt-auto p-4 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10">
                                            <p className="text-xs font-bold text-brand-primary/60 uppercase tracking-widest mb-1">Clinic Verified Result</p>
                                            <p className="text-[10px] text-brand-primary/40 font-medium">Verified by Radiant Hair Clinic Internal Quality Standards.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-10 bg-white p-3 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:block"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-10 bg-white p-3 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all text-slate-400 z-10 hidden sm:block"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === i ? 'bg-brand-secondary w-8' : 'bg-brand-primary'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;