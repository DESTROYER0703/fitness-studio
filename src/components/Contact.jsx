import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0d1007]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-anton text-white uppercase tracking-wide mb-4"
          >
            Get In <span className="text-lime text-glow">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-light max-w-2xl mx-auto text-lg"
          >
            Ready to start your fitness journey? Contact us today or visit our facility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-sm text-center group hover:border-lime/50 transition-colors"
          >
            <div className="w-16 h-16 bg-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime group-hover:text-charcoal-900 transition-colors text-lime">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-anton text-white uppercase tracking-wide mb-4">Location</h3>
            <p className="text-gray-light leading-relaxed mb-6">
              Mandap Marriage Hall, 2nd Floor, <br/>
              Near Tambeshwar Mandir, VIP Road, <br/>
              Awas Vikas, Fatehpur-UP-212601
            </p>
            <a 
              href="https://www.google.com/maps/dir//Mandap+Marriage+Hall,+Near+Tambeshwar+Mandir,+VIP+Road,+Awas+Vikas,+Fatehpur,+Uttar+Pradesh+212601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-lime text-lime px-6 py-2 font-mono text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-lime hover:text-charcoal-900 transition-colors"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-sm text-center group hover:border-lime/50 transition-colors"
          >
            <div className="w-16 h-16 bg-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime group-hover:text-charcoal-900 transition-colors text-lime">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-anton text-white uppercase tracking-wide mb-4">Contact</h3>
            <p className="text-gray-light mb-2 hover:text-lime transition-colors"><a href="tel:07942691796">07942691796</a></p>
            <p className="text-gray-light mb-4 hover:text-lime transition-colors"><a href="tel:09559936173">09559936173</a></p>
            <a 
              href="https://wa.me/919559936173?text=Hello%20Fitness%20Studio%20GYM,%20I%20want%20to%20know%20more%20about%20membership%20and%20training%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime text-charcoal-900 px-6 py-2 font-mono text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-white transition-colors"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-sm text-center group hover:border-lime/50 transition-colors"
          >
            <div className="w-16 h-16 bg-charcoal-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime group-hover:text-charcoal-900 transition-colors text-lime">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-anton text-white uppercase tracking-wide mb-4">Hours</h3>
            <p className="text-gray-light mb-2">Mon - Sat: 5:00 AM - 10:00 PM</p>
            <p className="text-gray-light">Sunday: 6:00 AM - 12:00 PM</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-sm"
          >
            <h3 className="text-2xl font-anton text-white uppercase tracking-wide mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors" required />
                <input type="email" placeholder="Your Email" className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors" required />
              </div>
              <input type="tel" placeholder="Your Phone" className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors" />
              <textarea placeholder="Your Message" rows="4" className="w-full bg-charcoal-900 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors resize-none" required></textarea>
              <button type="submit" className="w-full bg-lime text-charcoal-900 py-4 font-anton uppercase tracking-wider hover:bg-white transition-colors rounded-sm text-lg">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[400px] rounded-sm overflow-hidden border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14371.428519702213!2d80.82424074999999!3d25.9221588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984a9ec8018eec5%3A0x88981e83dcfaeec0!2sFatehpur%2C%20Uttar%20Pradesh%20212601!5e0!3m2!1sen!2sin!4v1715801234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fitness Studio GYM Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
