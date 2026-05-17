import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-charcoal-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gold"></span>
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase font-semibold">Inquiries</span>
            <span className="w-8 h-px bg-gold"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6"
          >
            REACH <span className="text-gradient-gold">THE PINNACLE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light/80 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Initiate your transformation. Our concierge team is prepared to architect your bespoke fitness journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-2xl text-center group transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 text-gold">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-white tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">The Sanctuary</h3>
            <p className="text-gray-light/70 font-light leading-relaxed mb-8">
              Mandap Marriage Hall, 2nd Floor, <br/>
              Near Tambeshwar Mandir, VIP Road, <br/>
              Awas Vikas, Fatehpur-UP-212601
            </p>
            <a 
              href="https://www.google.com/maps/dir//Mandap+Marriage+Hall,+Near+Tambeshwar+Mandir,+VIP+Road,+Awas+Vikas,+Fatehpur,+Uttar+Pradesh+212601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold/50 text-gold px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-none hover:bg-gold hover:text-charcoal-950 transition-all duration-300"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="glass-card p-10 rounded-2xl text-center group transition-all duration-500 hover:-translate-y-2 bg-gradient-to-b from-charcoal-800/80 to-charcoal-900/80 border-gold/20"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 text-gold">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-white tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">Concierge</h3>
            <p className="text-gray-light/70 font-light mb-3 hover:text-white transition-colors"><a href="tel:07942691796">07942691796</a></p>
            <p className="text-gray-light/70 font-light mb-8 hover:text-white transition-colors"><a href="tel:09559936173">09559936173</a></p>
            <a 
              href="https://wa.me/918858792208?text=Hello%20Fitness%20Studio%20GYM,%20I%20want%20to%20know%20more%20about%20membership%20and%20training%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-charcoal-950 px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-none hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card p-10 rounded-2xl text-center group transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 text-gold">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-white tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">Operating Hours</h3>
            <p className="text-gray-light/70 font-light mb-3">Mon - Sat: <span className="text-white">5:00 AM - 10:00 PM</span></p>
            <p className="text-gray-light/70 font-light">Sunday: <span className="text-white">6:00 AM - 12:00 PM</span></p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-2xl"
          >
            <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-2">Request Consultation</h3>
            <p className="text-gray-light/60 font-light mb-8 text-sm">Our master coaches will respond within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-gold transition-colors placeholder-transparent" required />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Full Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-gold transition-colors placeholder-transparent" required />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
                </div>
              </div>
              <div className="relative group">
                <input type="tel" id="phone" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-gold transition-colors placeholder-transparent" />
                <label htmlFor="phone" className="absolute left-0 top-3 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Phone Number</label>
              </div>
              <div className="relative group">
                <textarea id="message" placeholder=" " rows="4" className="peer w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-gold transition-colors resize-none placeholder-transparent" required></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-gray-light/50 text-sm transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-4 peer-valid:text-xs">Your Objective</label>
              </div>
              <button type="submit" className="button-gold w-full mt-4">
                Submit Request
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group"
          >
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl pointer-events-none transition-colors duration-500 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14371.428519702213!2d80.82424074999999!3d25.9221588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984a9ec8018eec5%3A0x88981e83dcfaeec0!2sFatehpur%2C%20Uttar%20Pradesh%20212601!5e0!3m2!1sen!2sin!4v1715801234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fitness Studio GYM Location"
              className="transition-all duration-1000 group-hover:filter-none"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
