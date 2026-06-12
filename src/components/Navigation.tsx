
import React, { useState, useEffect } from 'react';
import { Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="w-full px-6 py-6">
        <div className="relative flex items-center justify-between lg:justify-start w-full">
          {/* Left side - Theme toggle and Portfolio text (full screen) */}
          <div className="flex items-center space-x-4 lg:absolute lg:left-6 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400 transition-transform duration-300" />
              )}
            </button>
            <div className="text-2xl font-bold gradient-text">Rahul</div>
          </div>
          
          {/* Right side - Navigation menu (full screen) */}
          <div className="hidden lg:flex space-x-8 lg:absolute lg:right-6 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
                  activeSection === section ? 'text-blue-400' : 'text-theme-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-theme-white hover:scale-110 transition-transform duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-white transition-all duration-300"></div>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              {['home', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-theme-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
