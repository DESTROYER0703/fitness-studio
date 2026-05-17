import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setCategory('Optimal');
      else if (bmiValue >= 25 && bmiValue <= 29.9) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-gold"></span>
              <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">Diagnostics</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6">
              BIOMETRIC <span className="text-gradient-gold">ANALYSIS</span>
            </h2>
            <p className="text-gray-light/80 text-lg mb-10 font-light leading-relaxed">
              Body Mass Index provides a foundational baseline for your architectural blueprint. Calculate your metric to initiate your tailored transformation protocol.
            </p>
            
            <div className="glass-card p-8 rounded-2xl border-l-2 border-l-gold mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-charcoal-900/50">
              <h4 className="text-white font-display uppercase font-semibold text-xl mb-6 tracking-tight">Index Parameters:</h4>
              <ul className="space-y-4 font-sans text-sm text-gray-light/80 font-light">
                <li className="flex justify-between items-center border-b border-white/5 pb-2"><span>Underweight</span> <span className="font-medium text-white/50">&lt; 18.5</span></li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2 text-gold"><span>Optimal Configuration</span> <span className="font-semibold text-gold">18.5 - 24.9</span></li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2"><span>Overweight</span> <span className="font-medium text-white/50">25 - 29.9</span></li>
                <li className="flex justify-between items-center"><span>Obese</span> <span className="font-medium text-white/50">&gt; 30</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card p-10 md:p-12 rounded-2xl relative overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                  <Activity size={20} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white uppercase tracking-tight">Engine Calculator</h3>
              </div>

              <form onSubmit={calculateBMI} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      type="number" 
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="peer w-full bg-charcoal-950 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="weight" className="absolute left-4 top-4 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-charcoal-900 peer-focus:px-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-3 peer-valid:left-2 peer-valid:bg-charcoal-900 peer-valid:px-2 peer-valid:text-xs">Weight (kg)</label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="number" 
                      id="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="peer w-full bg-charcoal-950 border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="height" className="absolute left-4 top-4 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-charcoal-900 peer-focus:px-2 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-3 peer-valid:left-2 peer-valid:bg-charcoal-900 peer-valid:px-2 peer-valid:text-xs">Height (cm)</label>
                  </div>
                </div>
                
                <button type="submit" className="button-gold w-full py-4 text-sm mt-4">
                  Initialize Calculation
                </button>
              </form>

              <AnimatePresence>
                {bmi && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 bg-charcoal-950/50 border border-gold/30 rounded-xl text-center relative">
                      <div className="absolute inset-0 bg-gold/5 blur-xl"></div>
                      <p className="text-gray-light/70 font-sans text-xs uppercase tracking-[0.2em] mb-3 relative z-10 font-semibold">Your Diagnostic Index</p>
                      <p className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-4 tracking-tighter relative z-10">{bmi}</p>
                      <div className="inline-block px-6 py-2 rounded-full border border-gold/40 bg-gold/10 relative z-10">
                        <p className="text-gold font-sans text-sm uppercase tracking-[0.1em] font-semibold">{category}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
