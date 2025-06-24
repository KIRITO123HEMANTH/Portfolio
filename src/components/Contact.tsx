import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/KIRITO123HEMANTH',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/hemanthkirito2723/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/kirito_hsk',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hemanthsaikumar551@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the comment to a backend
    alert('Thank you for your comment! I\'ll get back to you soon.');
    setComment('');
    setName('');
    setEmail('');
  };

  const handleSendMessage = () => {
    window.open('mailto:hemanthkarimisetty@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left card - Social Links */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-purple-500/10 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <MessageCircle className="mr-2 text-purple-400" size={28} />
                Connect With Me
              </h3>
              <p className="text-gray-300">
                Follow me on social media or send me an email
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-4 bg-gray-700/30 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700/50 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon size={32} className="mb-2" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
            
            <button
              onClick={handleSendMessage}
              className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </button>
          </div>

          {/* Right card - Comment Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:bg-purple-500/10 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Leave a Comment
              </h3>
              <p className="text-gray-300">
                Share your thoughts or project ideas
              </p>
            </div>
            
            <form onSubmit={handleSubmitComment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Share your thoughts or project ideas..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
              >
                <MessageCircle className="mr-2" size={20} />
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;