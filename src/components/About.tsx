
import React, { useEffect, useState } from 'react';
import { Code2, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Coffee, title: "Coffee Lover", description: "Fueled by caffeine and creativity" },
    { icon: Heart, title: "Passionate", description: "Love what I do and do what I love" },
    { icon: Zap, title: "Fast Learner", description: "Quick to adapt to new technologies" }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-xl text-gray-400 max-w-2xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Passionate developer creating digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Hi, I'm <span className="gradient-text">Rahul</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Web Developer with experience in creating 
                beautiful, functional, and user-centered digital experiences. I specialize in Web 
                development using modern technologies and best practices.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                My journey in development started with a curiosity about how things work, and it has 
                evolved into a passion for creating solutions that make a difference in people's lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="glass-card px-4 py-2 text-purple-400">
                  Web Developer
                </span>
                
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`glass-card p-6 text-center hover:scale-105 transition-transform duration-300 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">My Development Philosophy</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that are not just 
              functional, but delightful. Every project is an opportunity to learn something new and push 
              the boundaries of what's possible. I'm always excited to take on new challenges and collaborate 
              with teams that share the same passion for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
