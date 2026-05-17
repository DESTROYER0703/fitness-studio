import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, Flame, Users, BatteryCharging } from 'lucide-react';

const programs = [
  {
    icon: <Dumbbell size={32} strokeWidth={1.5} />,
    title: 'Elite Strength',
    description: 'Build unmatched power with our precision-engineered free weights and expert biomechanical guidance.',
  },
  {
    icon: <Flame size={32} strokeWidth={1.5} />,
    title: 'Metabolic Conditioning',
    description: 'High-intensity regimens designed to shred fat and push your cardiovascular limits.',
  },
  {
    icon: <Heart size={32} strokeWidth={1.5} />,
    title: 'Endurance Systems',
    description: 'State-of-the-art cardiovascular tech integrated with heart-rate monitoring for optimal zones.',
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: 'Master Coaching',
    description: 'One-on-one transformative sessions with internationally certified fitness architects.',
  },
  {
    icon: <Activity size={32} strokeWidth={1.5} />,
    title: 'Tactical Athletics',
    description: 'Functional performance training designed for real-world athletic dominance.',
  },
  {
    icon: <BatteryCharging size={32} strokeWidth={1.5} />,
    title: 'Recovery Lab',
    description: 'Accelerate healing with guided mobility, targeted stretching, and deep tissue protocols.',
  }
];

const ProgramCard = ({ program, index }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-10 rounded-2xl group relative overflow-hidden bg-charcoal-900/40 cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-charcoal-800/60 hover:-translate-y-2 border border-white/5 hover:border-gold/30"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.1), transparent 40%)`,
        }}
      />
      
      {/* Background Icon */}
      <div className="absolute -top-6 -right-6 p-8 opacity-[0.03] text-white group-hover:text-gold transition-colors duration-700 transform scale-[4] group-hover:scale-[4.5] group-hover:rotate-12">
        {program.icon}
      </div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-white/10 flex items-center justify-center text-gold mb-8 shadow-inner group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 transform group-hover:scale-110">
          {program.icon}
        </div>
        
        <h3 className="text-2xl font-display font-semibold text-white tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">
          {program.title}
        </h3>
        
        <p className="text-gray-light/70 mb-8 font-light leading-relaxed group-hover:text-gray-light transition-colors duration-300">
          {program.description}
        </p>
        
        <div className="flex items-center text-xs font-sans text-gold uppercase tracking-widest font-semibold group-hover:tracking-[0.2em] transition-all duration-300">
          <span className="relative overflow-hidden">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Discover</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Discover</span>
          </span>
          <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-[20%] top-1/4 w-[40%] h-[40%] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">Our Expertise</span>
            <span className="w-8 h-px bg-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            SIGNATURE <span className="text-gradient-gold">PROGRAMS</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/80 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Architected by industry veterans. Designed for profound transformation. Select the protocol that aligns with your ultimate vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
