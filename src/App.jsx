import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CinematicIntro from './components/CinematicIntro';

function App() {
  // Intro plays on every page load / refresh
  const [introComplete, setIntroComplete] = useState(false);
  const [showSite, setShowSite] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setTimeout(() => setShowSite(true), 50);
  };

  // Lock scroll during intro
  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introComplete]);

  return (
    <>
      {/* Cinematic Intro Overlay */}
      <AnimatePresence>
        {!introComplete && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main Site — fades in after intro */}
      <AnimatePresence>
        {showSite && (
          <motion.div
            key="main-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-charcoal-900 min-h-screen text-gray-light font-hanken"
          >
            <Navbar />
            <main>
              <Hero />
              <Programs />
              <About />
              <Trainers />
              <Transformations />
              <Membership />
              <Gallery />
              <BMICalculator />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
