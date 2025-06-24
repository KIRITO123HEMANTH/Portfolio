import React from 'react';
import { Download, ExternalLink, Code, Database, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', desc: 'React, TypeScript, Tailwind CSS' },
    { icon: Database, name: 'Backend Development', desc: 'Node.js, MongoDB, Express' },
    { icon: Smartphone, name: 'Blockchain Technology', desc: 'Smart Contracts, Web3, DeFi' },
  ];

  const handleDownloadCV = () => {
    const cvUrl = 'https://i.postimg.cc/xChd2hWZ/Hemanth-Hsk-Main-Resume.png';
    const fileName = 'Hemanth_Resume.pdf';
  
    fetch(cvUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(error => {
        console.error('Download failed:', error);
        // Fallback: Open in new tab if download fails
        window.open(cvUrl, '_blank');
      });
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hello, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Hemanth</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Web Developer specializing in blockchain technology and modern web applications. 
                Currently pursuing B.E. Computer Science Engineering (Blockchain) at Sathyabama University.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                With expertise in React, Node.js, and MongoDB, I create scalable web solutions that combine cutting-edge 
                technology with exceptional user experiences. I'm particularly interested in the intersection of traditional 
                web development and blockchain technology.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </button>
              <button
                onClick={handleViewPortfolio}
                className="px-6 py-3 border-2 border-purple-500 hover:bg-purple-500/20 rounded-lg text-purple-300 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <ExternalLink className="mr-2" size={20} />
                View Portfolio
              </button>
            </div>
          </div>
          
          {/* Right content - Profile image and skills */}
          <div className="space-y-8">
            {/* Profile image with glowing effect */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/25">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://i.postimg.cc/zG92TBwP/Profile.jpg"
                      alt="Hemanth Sai Kumar Karimisetty"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Skills cards */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-4 bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                      <skill.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{skill.name}</h3>
                      <p className="text-gray-400 text-sm">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;