import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  '/images/hero-bg.png',
  '/images/gallery-1.png',
  '/images/gallery-2.png',
  '/images/gallery-3.png',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-32 bg-[#050505] relative">
      <div className="absolute top-0 right-0 w-1/3 h-full border-r border-white/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">The Environment</span>
            <span className="w-8 h-px bg-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            LUXURY <span className="text-gradient-gold">FACILITIES</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/80 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Step into a realm of unmatched elegance and cutting-edge biomechanical engineering. Our facility is designed to inspire greatness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${idx === 0 || idx === 3 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              onClick={() => setSelectedImage(src)}
            >
              <div className={`w-full bg-charcoal-900 ${idx === 0 || idx === 3 ? 'h-[400px] md:h-[600px]' : 'h-[250px] md:h-[288px]'}`}>
                <img 
                  src={src} 
                  alt={`Gym facility ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl pointer-events-none transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-md flex items-center justify-center text-gold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300 focus:outline-none bg-charcoal-900/50 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged facility view" 
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
