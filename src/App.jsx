import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SectionDivider = () => (
  <div className="section-divider mx-auto" style={{ maxWidth: 800 }} />
);

const App = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ minHeight: '100vh' }}
    >
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;
