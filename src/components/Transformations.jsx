import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const transformations = [
  {
    name: 'Michael T.',
    before: 'https://images.unsplash.com/photo-1598501258673-f116a4d7d3c0?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    testimonial: "I lost 40lbs in 6 months. The trainers here don't just give you a workout plan; they change your entire mindset about health and fitness.",
    rating: 5,
    duration: '6 Months'
  },
  {
    name: 'Sarah L.',
    before: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    testimonial: "From never lifting a weight to competing in local powerlifting meets. The community and coaching at Fitness Studio GYM are unmatched.",
    rating: 5,
    duration: '1 Year'
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
    <section id="transformation" className="py-24 bg-[#0d1007]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-4"
          >
            Real <span className="text-lime text-glow">Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. See the incredible transformations our members have achieved.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-4 md:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="flex gap-4 h-[300px] md:h-[400px]">
                <div className="relative w-1/2 rounded-sm overflow-hidden border border-white/10">
                  <img src={transformations[currentIndex].before} alt="Before" className="w-full h-full object-cover grayscale opacity-70" />
                  <div className="absolute top-4 left-4 bg-charcoal-900/80 px-3 py-1 font-mono text-sm text-white tracking-widest uppercase">Before</div>
                </div>
                <div className="relative w-1/2 rounded-sm overflow-hidden border border-lime/30">
                  <img src={transformations[currentIndex].after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-lime px-3 py-1 font-mono text-sm text-charcoal-900 tracking-widest uppercase font-bold">After</div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex gap-1 mb-6">
                  {[...Array(transformations[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-lime fill-lime" size={20} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-light italic mb-8 border-l-4 border-lime pl-6">
                  "{transformations[currentIndex].testimonial}"
                </blockquote>
                <div>
                  <p className="text-2xl font-anton text-white tracking-wide uppercase mb-1">{transformations[currentIndex].name}</p>
                  <p className="text-lime font-mono text-sm uppercase tracking-widest">Duration: {transformations[currentIndex].duration}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:text-charcoal-900 hover:border-lime transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white hover:bg-lime hover:text-charcoal-900 hover:border-lime transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
