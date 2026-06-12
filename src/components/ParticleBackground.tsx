
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const color = Math.random() > 0.5 ? '#667eea' : '#4facfe';
      const opacity = Math.random() * 0.6 + 0.2;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 10 + 8;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        opacity: ${opacity};
        left: ${left}%;
        animation-duration: ${animationDuration}s;
      `;
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, animationDuration * 1000);
    };

    const intervalId = setInterval(createParticle, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ zIndex: -1 }}
    />
  );
};

export default ParticleBackground;
