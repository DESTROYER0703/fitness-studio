import React from 'react';
import { Globe, Share2, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-3xl font-display font-bold tracking-tight text-white block mb-6 uppercase">
              FITNESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">STUDIO</span>
            </a>
            <p className="text-gray-light/60 text-sm font-light leading-relaxed mb-8 pr-4">
              An elite sanctum engineered for those who demand excellence. We forge the extraordinary through advanced biomechanics and master coaching.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-light hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300">
                <Globe size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-light hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-light hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300">
                <Share2 size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-light hover:border-gold hover:bg-gold hover:text-charcoal-950 transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display uppercase font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><a href="#home" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">The Experience</a></li>
              <li><a href="#programs" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Disciplines</a></li>
              <li><a href="#trainers" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Master Coaches</a></li>
              <li><a href="#membership" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Tiers</a></li>
              <li><a href="#gallery" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Sanctuary View</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display uppercase font-semibold text-lg mb-6">Legal & Support</h4>
            <ul className="space-y-4 font-sans text-sm font-light">
              <li><a href="#" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Concierge Desk</a></li>
              <li><a href="#" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Terms of Excellence</a></li>
              <li><a href="#" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Privacy Charter</a></li>
              <li><a href="#contact" className="text-gray-light/70 hover:text-gold transition-colors inline-block hover:translate-x-1 transform duration-300">Initiate Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display uppercase font-semibold text-lg mb-6">The Briefing</h4>
            <p className="text-gray-light/60 text-sm font-light mb-6">Join our private registry for exclusive insights and advanced training protocols.</p>
            <form className="flex flex-col gap-3">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder=" " 
                  className="peer w-full bg-charcoal-900 border border-white/10 text-white px-4 py-3 rounded-none focus:outline-none focus:border-gold transition-colors placeholder-transparent"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-6 peer-valid:text-xs pointer-events-none">Email Address</label>
              </div>
              <button 
                type="submit" 
                className="w-full bg-transparent border border-gold text-gold py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal-950 transition-colors duration-300 mt-2"
              >
                Request Access
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-light/40 text-xs font-sans uppercase tracking-[0.1em] text-center md:text-left font-light">
            &copy; {new Date().getFullYear()} FITNESS STUDIO GYM. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gold/60 text-xs font-sans uppercase tracking-[0.2em] font-medium">
            Engineered For Greatness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
