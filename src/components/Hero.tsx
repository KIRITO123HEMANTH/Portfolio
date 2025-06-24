import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I'm a Full Stack Web Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techStack = ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Blockchain'];

  const scrollToProjects = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">
              Hemanth Sai Kumar
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Karimisetty
            </span>
          </h1>
          
          {/* Typing animation */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 h-12 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Crafting fast, scalable, and modern web applications with expertise in blockchain technology
          </p>
          
          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/20 rounded-full text-purple-300 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="inline mr-2" size={20} />
              Contact Me
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-purple-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;