import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: '1,999',
    duration: 'per month',
    features: [
      'Full facility access',
      'Premium strength zones',
      'Luxury locker rooms',
      'High-speed Wi-Fi'
    ],
    isPopular: false
  },
  {
    name: 'Elite',
    price: '3,499',
    duration: 'per month',
    features: [
      'Everything in Standard',
      'Signature group classes',
      '2 Master coaching sessions',
      'Sauna & Steam room access',
      'Bespoke nutrition strategy'
    ],
    isPopular: true
  },
  {
    name: 'Black Card',
    price: '5,999',
    duration: 'per month',
    features: [
      'Everything in Elite',
      'Unlimited master coaching',
      'Advanced biometric assessment',
      'Dedicated recovery lab access',
      'Exclusive VIP lounge privileges'
    ],
    isPopular: false
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Cinematic Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">Join The Elite</span>
            <span className="w-8 h-px bg-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            MEMBERSHIP <span className="text-gradient-gold">TIERS</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/80 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Invest in your transformation. Choose a tier that matches your ambition. No hidden fees, unparalleled value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative glass-card rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 ${plan.isPopular ? 'border-gold/50 shadow-[0_30px_60px_rgba(212,175,55,0.15)] z-20 md:-mt-8 md:-mb-8 bg-gradient-to-b from-charcoal-800 to-charcoal-900' : 'border-white/10 z-10 bg-charcoal-900/60 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal-950 px-6 py-1.5 font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  Most Chosen
                </div>
              )}
              
              <h3 className="text-2xl font-display font-semibold text-white tracking-tight mb-2">{plan.name}</h3>
              <div className="flex items-end gap-2 mb-8 border-b border-white/10 pb-8">
                <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 tracking-tighter">₹{plan.price}</span>
                <span className="text-white/50 font-sans text-sm mb-2 font-medium">{plan.duration}</span>
              </div>
              
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <motion.li 
                    key={fIdx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (fIdx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gold/10 p-1 rounded-full mt-0.5 border border-gold/20 flex-shrink-0">
                      <Check className="text-gold" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-light/90 font-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/918858792208?text=Hello%20Fitness%20Studio%20GYM,%20I%20want%20to%20register%20for%20the%20${plan.name}%20gym%20membership.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block w-full text-center py-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] overflow-hidden rounded-none transition-all duration-300 ${plan.isPopular ? 'bg-gold text-charcoal-950 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold'}`}
              >
                <span className="relative z-10">Select {plan.name}</span>
                {plan.isPopular && <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
