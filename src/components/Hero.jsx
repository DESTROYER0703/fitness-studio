import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 z-0 origin-top"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/40 to-charcoal-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]"></div>
      </motion.div>

      {/* Floating light particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-gold/20 blur-[100px] mix-blend-screen animate-float"
            style={{
              width: Math.random() * 400 + 200 + 'px',
              height: Math.random() * 400 + 200 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${i * 2}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold font-sans text-sm tracking-widest uppercase font-semibold">Elite Fitness Experience</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-bold text-white uppercase leading-[1.05] tracking-tighter mb-6"
          >
            FORGE YOUR
            <br />
            <span className="text-gradient-gold text-glow-gold block mt-2">ELITE PHYSIQUE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-light/80 mb-10 max-w-2xl font-sans font-light leading-relaxed mx-auto lg:mx-0"
          >
            Step into a world-class environment designed for those who demand excellence. Premium equipment, elite coaching, and an atmosphere that commands greatness.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <a href="#membership" className="button-gold group">
              <span>Start Your Legacy</span>
              <div className="w-8 h-8 rounded-full bg-charcoal-950/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ChevronDown size={16} className="-rotate-90" />
              </div>
            </a>
            
            <a href="#programs" className="flex items-center gap-4 text-white hover:text-gold transition-colors font-display uppercase tracking-widest text-sm group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all backdrop-blur-sm">
                <Play size={16} className="ml-1" fill="currentColor" />
              </div>
              View Our Facilities
            </a>
          </motion.div>
        </div>
      </div>

      {/* Luxury Stats Card - Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 right-0 w-full lg:w-auto lg:bottom-12 lg:right-12 z-20"
      >
        <div className="glass-card lg:rounded-2xl p-6 md:p-8 flex items-center gap-8 md:gap-12 overflow-hidden border-x-0 border-b-0 lg:border">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent"></div>
          {[{num: '5k+', label: 'Elite Members'}, {num: '25+', label: 'Master Trainers'}, {num: '15k', label: 'Sq Ft Luxury'}].map((stat, idx) => (
            <div key={idx} className="relative z-10">
              <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter">{stat.num}</p>
              <p className="text-xs font-sans text-gold uppercase tracking-widest mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 font-sans tracking-widest uppercase rotate-90 mb-4 origin-left">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
