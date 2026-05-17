import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const transformations = [
  {
    name: 'Michael Thorne',
    before: 'https://images.unsplash.com/photo-1598501258673-f116a4d7d3c0?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    testimonial: "I lost 40lbs in 6 months. The master coaches here don't just provide a blueprint; they engineer a complete paradigm shift in how you view excellence and discipline.",
    rating: 5,
    duration: '6 Months Protocol'
  },
  {
    name: 'Sarah Lancaster',
    before: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    testimonial: "From a complete novice to competing at an elite level. The facility, the community, and the elite coaching at this studio represent the pinnacle of fitness.",
    rating: 5,
    duration: '1 Year Transformation'
  }
];

const Transformations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  return (
    <section id="transformation" className="py-32 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">Testaments</span>
            <span className="w-8 h-px bg-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            PROVEN <span className="text-gradient-gold">EXCELLENCE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/80 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Witness the culmination of dedication and elite coaching. These are not just results; they are engineered transformations.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-6 md:p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] pointer-events-none"></div>

              <div className="flex gap-4 h-[350px] md:h-[450px] relative z-10">
                <div className="relative w-1/2 rounded-xl overflow-hidden border border-white/5 shadow-2xl group">
                  <img src={transformations[currentIndex].before} alt="Before" className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal-950/40 mix-blend-multiply"></div>
                  <div className="absolute bottom-4 left-4 bg-charcoal-900/80 backdrop-blur-md px-4 py-1.5 font-sans text-xs text-white/70 tracking-[0.2em] uppercase rounded-sm border border-white/10">Before</div>
                </div>
                <div className="relative w-1/2 rounded-xl overflow-hidden border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] group">
                  <img src={transformations[currentIndex].after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-gold px-4 py-1.5 font-sans text-xs text-charcoal-950 tracking-[0.2em] uppercase font-bold rounded-sm shadow-lg">After</div>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-center">
                <div className="flex gap-1.5 mb-8">
                  {[...Array(transformations[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" size={18} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-light text-white leading-tight mb-10 relative">
                  <span className="absolute -top-6 -left-6 text-6xl text-gold/20 font-serif font-bold">"</span>
                  <span className="relative z-10">{transformations[currentIndex].testimonial}</span>
                </blockquote>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xl font-display font-semibold text-white tracking-tight mb-1">{transformations[currentIndex].name}</p>
                  <p className="text-gold/80 font-sans text-xs uppercase tracking-[0.15em] font-medium">{transformations[currentIndex].duration}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal-950 hover:border-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal-950 hover:border-gold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] backdrop-blur-sm"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
