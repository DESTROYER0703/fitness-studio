import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Modern, state-of-the-art equipment',
    'Certified & experienced trainers',
    'Personalized coaching & nutrition plans',
    'Premium, high-energy atmosphere',
    'Clean & hygienic environment',
    'Flexible membership options'
  ];

  return (
    <section id="about" className="py-24 bg-[#0d1007]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] w-full rounded-sm overflow-hidden border border-white/10 group shadow-2xl shadow-lime/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gym Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0 border-[4px] border-lime/0 group-hover:border-lime/20 transition-colors duration-500 pointer-events-none rounded-sm"></div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-charcoal-800 p-6 rounded-sm border-l-4 border-lime shadow-2xl glass-card hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="text-lime text-4xl font-anton">10+</div>
                <div className="text-sm font-mono text-gray-light uppercase tracking-widest leading-tight">
                  Years of<br/>Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-lime font-mono text-sm tracking-widest uppercase mb-2">About Our Brand</h4>
            <h2 className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-6">
              More Than Just A Gym, <br/>It's A <span className="text-lime text-glow">Lifestyle</span>
            </h2>
            <p className="text-gray-light text-lg mb-8 leading-relaxed">
              At Fitness Studio GYM, we believe that fitness is not a destination, but a continuous journey. We provide a premium environment that inspires greatness, pushes boundaries, and fosters a community of dedicated individuals striving for peak performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-lime mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-light">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#trainers" 
              className="group relative inline-block bg-lime text-charcoal-900 px-8 py-4 font-anton uppercase tracking-wider overflow-hidden rounded-sm text-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Meet Our Trainers</span>
              <div className="absolute inset-0 bg-charcoal-900 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
