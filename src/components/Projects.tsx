
import React, { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "OR Based blackchain technology",
      description: "A QR-Based Blockchain System that securely stores and verifies data using blockchain technology. Each QR code is uniquely linked to an immutable blockchain record, enabling instant authentication while preventing data tampering and fraud. The project provides a transparent, decentralized, and secure solution for digital verification and document validation.",
      tech: ["HTML", "CSS", "JavaScript", "Python","QR Code Technology","SQLite"],
      image: "public/Screenshot 2026-06-11 220448.png",
      gradient: "from-blue-500 to-cyan-500",
      align: "right",
      githubUrl: "https://github.com/Rahul-P-dev/Medicine-Blockchain.git"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A premium, fully responsive E-Commerce platform built from scratch using only semantic HTML5, modern CSS3 (Glassmorphism, Dark Mode), and Vanilla JavaScript. Features dynamic product rendering, a live search engine, local storage cart/wishlist persistence, quick-view filters, and a mobile-first design framework with no dependencies.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "public/Screenshot 2026-06-12 133357.png",
      gradient: "from-purple-500 to-pink-500",
      align: "left",
      githubUrl: "https://github.com/Rahul-P-dev/CholaShop.git"
    },
    
  ];

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-blue">Featured</span> Projects
          </h2>
          <p className="text-xl text-theme-gray-400 max-w-2xl mx-auto">
            Discover my latest work showcasing innovative solutions and cutting-edge technology
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                project.align === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="flex-1">
                <div
                  className="glass-card hover-lift group cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex-1 text-center lg:text-left">
                <div className="glass-card p-8">
                  <h3 className="text-3xl font-bold mb-6 text-theme-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-theme-gray-300 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 glass-card text-sm text-blue-400 cursor-pointer tech-tag transition-all duration-300 hover:text-theme-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 hover:border-purple-400/50 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center lg:justify-start">
                    <button 
                      className="btn-secondary flex items-center gap-2"
                      onClick={() => handleGithubClick(project.githubUrl)}
                    >
                      <Github size={20} />
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
