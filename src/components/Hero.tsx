
import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="floating-animation">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Full Stack Python</span>
            <br />
            <span className="text-theme-white">Developer</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-theme-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with cutting-edge technology and innovative design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            className="btn-primary animate-pulse-glow"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button 
            className="btn-sharp group relative overflow-hidden"
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Social Media Icons with 3D Spin Effect */}
        <div className="flex justify-center gap-6 mb-24">
          <button
            onClick={() => openSocialLink('https://github.com/Rahul-P-dev')}
            className="p-3 rounded-full border border-gray-600 hover:border-white transition-all duration-500 hover:scale-110 hover:bg-white/10 group social-3d-hover"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-theme-gray-400 group-hover:text-theme-white transition-colors duration-300" />
          </button>
          <button
            onClick={() => openSocialLink('https://www.linkedin.com/in/rahul-p-a566432a6?utm_source=share_via&utm_content=profile&utm_medium=member_android')}
            className="p-3 rounded-full border border-gray-600 hover:border-white transition-all duration-500 hover:scale-110 hover:bg-white/10 group social-3d-hover"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-theme-gray-400 group-hover:text-theme-white transition-colors duration-300" />
          </button>
          <button
            onClick={() => openSocialLink('https://www.instagram.com/mr__rahul_kt_?igsh=OXluNHp2ZGJ3NGpi')}
            className="p-3 rounded-full border border-gray-600 hover:border-white transition-all duration-500 hover:scale-110 hover:bg-white/10 group social-3d-hover"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-theme-gray-400 group-hover:text-theme-white transition-colors duration-300" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating-animation">
          <ArrowDown className="w-6 h-6 text-theme-gray-400 animate-bounce" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-orange-600 rounded-full opacity-20 blur-xl floating-animation"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full opacity-20 blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
