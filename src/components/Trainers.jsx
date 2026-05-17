import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Share2, MessageCircle } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Thorne',
    specialty: 'Head Coach / Strength',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Former Olympic lifter with 15 years of elite strength conditioning experience.',
  },
  {
    name: 'Sarah Jenkins',
    specialty: 'Metabolic Conditioning',
    image: 'https://images.unsplash.com/photo-1611564494260-5f21fc3ce87d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Specialist in high-intensity cardiovascular regimens and holistic fat loss protocols.',
  },
  {
    name: 'David Chen',
    specialty: 'Tactical Athletics',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Master of functional movement, combining martial arts agility with CrossFit power.',
  },
  {
    name: 'Elena Rodriguez',
    specialty: 'Mobility & Recovery',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Certified physiotherapist and yoga master ensuring optimal biomechanical health.',
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-32 bg-charcoal-900 relative">
      {/* Cinematic Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gold/5 blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">The Masters</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter"
            >
              ELITE <span className="text-gradient-gold">ARCHITECTS</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/70 max-w-sm text-base font-light leading-relaxed mb-2"
          >
            Train under the guidance of internationally certified professionals dedicated to engineering your absolute peak performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-charcoal-950 aspect-[3/4]"
            >
              <motion.img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover origin-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Gold Accent Border */}
              <div className="absolute inset-x-4 bottom-4 top-4 border border-white/10 group-hover:border-gold/30 rounded-lg pointer-events-none transition-colors duration-500 z-20"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-30 flex flex-col justify-end h-full">
                
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-1 group-hover:text-gold transition-colors duration-300">{trainer.name}</h3>
                <p className="text-white/60 font-sans text-xs tracking-widest uppercase font-medium mb-4">{trainer.specialty}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-gray-light/80 text-sm font-light mb-6 line-clamp-2">{trainer.bio}</p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300 backdrop-blur-md">
                      <Globe size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300 backdrop-blur-md">
                      <MessageCircle size={16} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300 backdrop-blur-md">
                      <Share2 size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
