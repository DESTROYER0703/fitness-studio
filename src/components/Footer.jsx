import React from 'react';
import { Camera, Share2, MessageCircle, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-3xl font-anton tracking-wider text-white block mb-6">
              FITNESS STUDIO <span className="text-lime">GYM</span>
            </a>
            <p className="text-gray-muted text-sm leading-relaxed mb-6">
              Transform your body and elevate your life with our premium fitness experience. Join our community of dedicated individuals today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal-800 flex items-center justify-center text-gray-light hover:bg-lime hover:text-charcoal-900 transition-colors border border-white/10">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal-800 flex items-center justify-center text-gray-light hover:bg-lime hover:text-charcoal-900 transition-colors border border-white/10">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal-800 flex items-center justify-center text-gray-light hover:bg-lime hover:text-charcoal-900 transition-colors border border-white/10">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-charcoal-800 flex items-center justify-center text-gray-light hover:bg-lime hover:text-charcoal-900 transition-colors border border-white/10">
                <Video size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-anton uppercase tracking-wide text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 font-mono text-sm tracking-widest uppercase">
              <li><a href="#home" className="text-gray-muted hover:text-lime transition-colors">Home</a></li>
              <li><a href="#programs" className="text-gray-muted hover:text-lime transition-colors">Programs</a></li>
              <li><a href="#trainers" className="text-gray-muted hover:text-lime transition-colors">Trainers</a></li>
              <li><a href="#membership" className="text-gray-muted hover:text-lime transition-colors">Membership</a></li>
              <li><a href="#gallery" className="text-gray-muted hover:text-lime transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-anton uppercase tracking-wide text-xl mb-6">Support</h4>
            <ul className="space-y-3 font-mono text-sm tracking-widest uppercase">
              <li><a href="#" className="text-gray-muted hover:text-lime transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-muted hover:text-lime transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-muted hover:text-lime transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="text-gray-muted hover:text-lime transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-anton uppercase tracking-wide text-xl mb-6">Newsletter</h4>
            <p className="text-gray-muted text-sm mb-4">Subscribe to get the latest news and offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-charcoal-800 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-lime text-charcoal-900 py-3 font-anton uppercase tracking-wider hover:bg-white transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-muted text-sm font-mono tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Fitness Studio GYM. All Rights Reserved.
          </p>
          <p className="text-gray-muted text-sm font-mono tracking-widest uppercase">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
