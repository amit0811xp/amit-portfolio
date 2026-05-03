import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Skills', href: '#skills', icon: FaCode },
    { name: 'Education', href: '#education', icon: FaGraduationCap },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', href: '#contact', icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/amit0811xp', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/amit-pal-26724a3b7/', label: 'LinkedIn' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Animation */}
            <a href="#home" className="relative group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-180 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                    <span className="text-white font-bold text-xl">AP</span>
                  </div>
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-400 opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-size-200">
                    Amit Pal
                  </div>
                  <div className="text-xs text-gray-400 font-medium">Portfolio</div>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative group px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className={`text-sm ${isActive ? 'animate-bounce' : 'group-hover:scale-125 transition-transform'}`} />
                    <span className="font-medium text-sm">{link.name}</span>
                    
                    {/* Hover Effect */}
                    {!isActive && (
                      <>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                      </>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Social Icons */}
              <div className="flex gap-2 mr-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                      aria-label={social.label}
                    >
                      <Icon className="text-white text-sm group-hover:rotate-12 transition-transform" />
                    </a>
                  );
                })}
              </div>

              {/* Hire Me Button */}
              <a
                href="#contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white text-sm overflow-hidden group shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Hire Me</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/50">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300"
            style={{ 
              width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
            }}
          ></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/98 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-24 left-0 right-0 mx-4 glass rounded-3xl p-8 transform transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Navigation
            </h3>
            <p className="text-gray-400 text-sm">Explore my portfolio</p>
          </div>

          {/* Mobile Menu Links */}
          <div className="space-y-2 mb-8">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'glass hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20' : 'bg-purple-500/20'
                  }`}>
                    <Icon className="text-lg" />
                  </div>
                  <span className="font-semibold text-lg flex-1">{link.name}</span>
                  <span className="text-2xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Social Links */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm mb-4 text-center">Connect with me</p>
            <div className="flex gap-3 justify-center mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="text-xl text-white group-hover:rotate-12 transition-transform" />
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white text-center shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
