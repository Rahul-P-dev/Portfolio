
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Navigation />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="py-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            © 2026 Rahul-Portfolio. Crafted with passion and modern technology.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
