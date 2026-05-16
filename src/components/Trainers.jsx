import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Share2, MessageCircle } from 'lucide-react';

const trainers = [
  {
    name: 'Marcus Thorne',
    specialty: 'Head Coach / Strength',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sarah Jenkins',
    specialty: 'HIIT & Fat Loss',
    image: 'https://images.unsplash.com/photo-1611564494260-5f21fc3ce87d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'David Chen',
    specialty: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elena Rodriguez',
    specialty: 'Yoga & Mobility',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-charcoal-900 relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-lime/5 -translate-y-1/2 -skew-y-6 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-4"
          >
            Elite <span className="text-lime text-glow">Trainers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Train with the best. Our certified experts are dedicated to pushing you beyond your limits and ensuring you reach your goals safely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15 }}
              className="group relative overflow-hidden rounded-sm shadow-2xl bg-charcoal-800"
            >
              <div className="aspect-w-3 aspect-h-4 h-[400px] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover origin-center"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime/30 transition-colors duration-500 rounded-sm pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-2xl font-anton text-white uppercase tracking-wide mb-1 group-hover:text-lime transition-colors duration-300">{trainer.name}</h3>
                <p className="text-lime font-mono text-sm tracking-widest uppercase mb-4">{trainer.specialty}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-charcoal-900 transition-colors backdrop-blur-sm"><Camera size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-charcoal-900 transition-colors backdrop-blur-sm"><MessageCircle size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-lime hover:text-charcoal-900 transition-colors backdrop-blur-sm"><Share2 size={18} /></a>
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
