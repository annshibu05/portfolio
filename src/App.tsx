import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mesh-background text-white relative">
      <div className="geometric-pattern"></div>
      <div className="relative">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Academics />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;