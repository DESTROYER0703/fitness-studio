import React from 'react';
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

function App() {
  return (
    <div className="bg-charcoal-900 min-h-screen text-gray-light font-hanken">
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
    </div>
  );
}

export default App;
