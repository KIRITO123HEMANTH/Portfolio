import React, { useState } from 'react';
import { ExternalLink, Github, Award, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      name: 'Zoroto',
      description: 'Full-stack food ordering platform with real-time updates, built using React, Node.js, and MongoDB. Features include user authentication, order tracking, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    }
  ];

  const certificates = [
    {
      name: 'Java Full Stack Web Development',
      issuer: 'Aptitude Guru Hemchandar',
      image: 'https://i.postimg.cc/25hcGD2j/image.png'
    },
    {
      name: 'Blockchain Security',
      issuer: 'Coursera',
      image: 'https://i.postimg.cc/7YtWYX54/image-2.png'
    },
    {
      name: 'Cryptogtaphy I',
      issuer: 'Coursera',
      image: 'https://i.postimg.cc/X4xMzk7Q/image-3.png'
    }
  ];

  const techStack = [
    { name: 'Java', category: 'Language' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Netlify', category: 'Deployment' },
    { name: 'Git', category: 'Tools' }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'techstack', label: 'Tech Stack', icon: ExternalLink }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my projects, certifications, and technical expertise
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="min-h-[400px]">
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={cert.name}
                  className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'techstack' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-xs">{tech.category}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;