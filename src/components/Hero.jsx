import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 scale-110 origin-top"
      >
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Gym Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-charcoal-900/40"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton text-white uppercase leading-[1.1] tracking-wide mb-6 overflow-hidden">
              <motion.span 
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} 
                className="block"
              >
                Transform Your Body.
              </motion.span>
              <motion.span 
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} 
                className="block text-lime text-glow"
              >
                Elevate Your Life.
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-light mb-10 max-w-2xl border-l-2 border-lime pl-4"
          >
            Premium fitness experience with world-class trainers, modern equipment, and elite training programs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#membership" 
              className="group relative bg-lime text-charcoal-900 px-8 py-4 text-center font-anton uppercase tracking-wider overflow-hidden rounded-sm text-lg flex-1 sm:flex-none"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Start Training</span>
              <div className="absolute inset-0 bg-charcoal-900 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#programs" 
              className="group relative border border-white text-white px-8 py-4 text-center font-anton uppercase tracking-wider overflow-hidden rounded-sm text-lg flex-1 sm:flex-none"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-charcoal-900">Explore Programs</span>
              <div className="absolute inset-0 bg-lime transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100"></div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-0 w-full z-10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-2xl">
            {[{num: '5000+', label: 'Members'}, {num: '20+', label: 'Expert Trainers'}, {num: '10', label: 'Years Exp.'}].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="cursor-default"
              >
                <p className="text-4xl font-anton text-lime">{stat.num}</p>
                <p className="text-sm font-mono text-gray-muted uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 right-10 z-10 hidden md:block"
      >
        <motion.a 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          href="#programs" 
          className="text-white/50 hover:text-lime transition-colors block"
        >
          <ChevronDown size={40} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
