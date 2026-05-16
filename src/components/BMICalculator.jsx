import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

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
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setCategory('Normal Weight');
      else if (bmiValue >= 25 && bmiValue <= 29.9) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <section className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-lime rounded-full mix-blend-multiply filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-6">
              Calculate Your <span className="text-lime text-glow">BMI</span>
            </h2>
            <p className="text-gray-light text-lg mb-8 leading-relaxed">
              Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m². It's a useful measure of whether you're a healthy weight for your height.
            </p>
            
            <div className="glass-card p-6 rounded-sm border-l-4 border-lime mb-8">
              <h4 className="text-white font-anton uppercase text-xl mb-4">BMI Categories:</h4>
              <ul className="space-y-2 font-mono text-sm text-gray-light">
                <li className="flex justify-between"><span>Underweight</span> <span>&lt; 18.5</span></li>
                <li className="flex justify-between text-lime"><span>Normal Weight</span> <span>18.5 - 24.9</span></li>
                <li className="flex justify-between"><span>Overweight</span> <span>25 - 29.9</span></li>
                <li className="flex justify-between"><span>Obese</span> <span>&gt; 30</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form onSubmit={calculateBMI} className="glass-card p-8 md:p-10 rounded-sm box-glow">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="text-lime" size={32} />
                <h3 className="text-2xl font-anton text-white uppercase tracking-wide">BMI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block font-mono text-sm text-gray-light uppercase tracking-widest mb-2">Weight / kg</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors"
                    placeholder="e.g. 70"
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm text-gray-light uppercase tracking-widest mb-2">Height / cm</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors"
                    placeholder="e.g. 175"
                    required
                  />
                </div>
                
                <button type="submit" className="w-full bg-lime text-charcoal-900 py-4 font-anton uppercase tracking-wider hover:bg-white transition-colors rounded-sm text-lg mt-4">
                  Calculate Now
                </button>
              </div>

              {bmi && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-charcoal-900 border border-lime/30 rounded-sm text-center"
                >
                  <p className="text-gray-light font-mono text-sm uppercase tracking-widest mb-2">Your BMI Is</p>
                  <p className="text-5xl font-anton text-lime mb-2">{bmi}</p>
                  <p className="text-white font-mono uppercase tracking-widest bg-lime/10 inline-block px-4 py-1 rounded-sm text-lime">{category}</p>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
