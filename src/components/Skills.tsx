
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: "React.js", level: 95, color: "from-purple-500 to-purple-700" },
    { name: "JavaScript", level: 90, color: "from-orange-500 to-orange-700" },
    { name: "Node.js", level: 88, color: "from-purple-600 to-orange-500" },
    { name: "Python", level: 85, color: "from-orange-600 to-purple-500" },
    { name: "HTML/CSS", level: 99, color: "from-purple-600 to-orange-500" },
     { name: "SQL", level: 80, color: "from-purple-600 to-orange-500" },

    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSkillHover = (index: number) => {
    setHoveredSkill(index);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="py-20 px-6 relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-purple">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-theme-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-card p-6 skill-item transition-transform duration-300"
              onMouseEnter={() => handleSkillHover(index)}
              onMouseLeave={handleSkillLeave}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-theme-white font-medium text-lg">{skill.name}</span>
                <span className="text-theme-gray-400 text-sm">
                  {hoveredSkill === index ? `${skill.level}%` : ''}
                </span>
              </div>
              
              <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300 ease-out glow-effect skill-bar`}
                  style={{
                    width: hoveredSkill === index ? `${skill.level}%` : '0%',
                    transitionDelay: hoveredSkill === index ? '0ms' : '0ms'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "7+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Technologies" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-theme-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
