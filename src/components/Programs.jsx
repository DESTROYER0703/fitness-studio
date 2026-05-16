import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, Flame, Users, BatteryCharging } from 'lucide-react';

const programs = [
  {
    icon: <Dumbbell size={40} />,
    title: 'Strength Training',
    description: 'Build muscle mass and increase overall strength with our heavy lifting zones and expert guidance.',
  },
  {
    icon: <Flame size={40} />,
    title: 'Fat Loss',
    description: 'High-intensity interval training designed to burn maximum calories and sculpt your physique.',
  },
  {
    icon: <Heart size={40} />,
    title: 'Cardio Fitness',
    description: 'Improve cardiovascular health with state-of-the-art treadmills, ellipticals, and rowers.',
  },
  {
    icon: <Users size={40} />,
    title: 'Personal Training',
    description: 'Get customized workout plans and one-on-one coaching from certified fitness professionals.',
  },
  {
    icon: <Activity size={40} />,
    title: 'CrossFit',
    description: 'Constantly varied functional movements performed at high intensity to build elite fitness.',
  },
  {
    icon: <BatteryCharging size={40} />,
    title: 'Yoga & Recovery',
    description: 'Enhance flexibility, reduce stress, and speed up muscle recovery in our dedicated studio.',
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card p-8 rounded-sm group relative overflow-hidden border border-white/10 bg-charcoal-800/80 backdrop-blur-md cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.15)] hover:border-lime/50"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(204,255,0,.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-0 right-0 p-8 opacity-5 text-white group-hover:text-lime transition-colors duration-500 transform scale-150 -translate-y-4 translate-x-4">
        {program.icon}
      </div>
      <div className="text-lime mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
        {program.icon}
      </div>
      <h3 className="text-2xl font-anton text-white uppercase mb-4 tracking-wide group-hover:text-lime transition-colors duration-300">
        {program.title}
      </h3>
      <p className="text-gray-muted mb-8 line-clamp-3 group-hover:text-gray-light transition-colors duration-300 relative z-10">
        {program.description}
      </p>
      <a href="#contact" className="inline-flex items-center text-sm font-mono text-white uppercase tracking-widest group-hover:text-lime transition-colors relative z-10">
        <span className="relative overflow-hidden">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Learn More</span>
          <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-lime">Learn More</span>
        </span>
        <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
      </a>
    </motion.div>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-4"
          >
            Elite <span className="text-lime text-glow">Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Choose from a variety of targeted fitness programs designed by industry experts to help you reach your specific goals.
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
