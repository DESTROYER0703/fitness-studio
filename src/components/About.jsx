import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const About = () => {
  const features = [
    'Imported biomechanical equipment',
    'Internationally certified masters',
    'Bespoke physiological programming',
    'Luxury climate-controlled environment',
    'Impeccable hygiene standards',
    'Exclusive member privileges'
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-r border-white/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[700px] w-full rounded-2xl overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Gym Interior" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80"></div>
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Floating Luxury Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 right-0 md:-right-10 bg-charcoal-900/80 backdrop-blur-xl p-8 rounded-2xl border border-gold/20 shadow-2xl hidden sm:flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-white text-3xl font-display font-bold tracking-tighter">PREMIUM</div>
                <div className="text-gold text-xs font-sans uppercase tracking-[0.2em] font-semibold mt-1">
                  Standard
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">The Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-8 leading-[1.1]">
              Engineered For <br/>
              <span className="text-gradient-gold">Excellence</span>
            </h2>
            
            <p className="text-gray-light/80 text-lg mb-10 font-light leading-relaxed">
              Fitness Studio GYM is a sanctuary for the ambitious. We transcend the conventional gym experience by merging cutting-edge sports science with unparalleled luxury. This is where uncompromising standards meet profound physical transformation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20">
                    <CheckCircle2 className="text-gold" size={14} />
                  </div>
                  <span className="text-gray-light/90 font-light text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#trainers" className="button-outline w-fit">
              Explore Our Lineage
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
