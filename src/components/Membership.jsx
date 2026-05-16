import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '1999',
    duration: 'per month',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      'Free Wi-Fi'
    ],
    isPopular: false
  },
  {
    name: 'Pro',
    price: '3499',
    duration: 'per month',
    features: [
      'Everything in Basic',
      'Group fitness classes',
      '2 Personal training sessions',
      'Sauna & Spa access',
      'Nutrition consultation'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    price: '5999',
    duration: 'per month',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Custom diet plan',
      'Monthly body assessment',
      'Guest passes (2/month)'
    ],
    isPopular: false
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-lime to-transparent rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-4"
          >
            Membership <span className="text-lime text-glow">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className={`relative glass-card rounded-sm p-8 transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${plan.isPopular ? 'border-lime shadow-[0_0_30px_rgba(204,255,0,0.15)] z-20 md:-mt-8 md:-mb-8 bg-charcoal-800' : 'border-white/10 z-10 bg-charcoal-800/60'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime text-charcoal-900 px-6 py-2 font-mono text-sm font-bold tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(204,255,0,0.5)] animate-pulse">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-anton text-white tracking-wide uppercase mb-2">{plan.name}</h3>
              <div className="flex items-end gap-2 mb-8 border-b border-white/10 pb-8">
                <span className="text-5xl font-anton text-lime tracking-tight">₹{plan.price}</span>
                <span className="text-gray-muted font-mono text-sm mb-2">{plan.duration}</span>
              </div>
              
              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <motion.li 
                    key={fIdx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (fIdx * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-lime/10 p-1 rounded-full mt-0.5">
                      <Check className="text-lime shrink-0" size={16} />
                    </div>
                    <span className="text-gray-light">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/919559936173?text=Hello%20Fitness%20Studio%20GYM,%20I%20want%20to%20register%20for%20the%20${plan.name}%20gym%20membership.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block w-full text-center py-4 font-anton uppercase tracking-wider overflow-hidden rounded-sm text-lg ${plan.isPopular ? 'bg-lime text-charcoal-900' : 'bg-transparent border border-white text-white'}`}
              >
                <span className={`relative z-10 transition-colors duration-300 ${plan.isPopular ? 'group-hover:text-white' : 'group-hover:text-charcoal-900'}`}>Choose Plan</span>
                <div className={`absolute inset-0 transform scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100 ${plan.isPopular ? 'bg-charcoal-900' : 'bg-lime'}`}></div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
