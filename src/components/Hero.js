import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaGithub, FaLinkedin, FaCode, FaRocket } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Load particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: ['#667eea', '#764ba2', '#f093fb', '#4facfe'] },
          shape: { type: 'circle' },
          opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
          size: { value: 4, random: true, anim: { enable: true, speed: 3, size_min: 0.1 } },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#667eea',
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative animated-gradient overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-0"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FaCode className="absolute top-1/4 left-1/4 text-purple-400 text-4xl opacity-20 animate-float" style={{ animationDelay: '0s' }} />
        <FaRocket className="absolute top-1/3 right-1/4 text-pink-400 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <FaGithub className="absolute bottom-1/3 left-1/3 text-blue-400 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        {/* Main Content with Parallax Effect */}
        <div 
          className="transform transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Greeting Badge */}
          <div className="inline-block mb-6 fade-in-up">
            <div className="glass px-6 py-2 rounded-full border border-purple-400/30 backdrop-blur-lg">
              <span className="text-purple-300 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Main Heading with Staggered Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="block fade-in-up text-white" style={{ animationDelay: '0.1s' }}>
              Hi, I'm
            </span>
            <span className="block mt-2 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x font-extrabold">
                  Amit Pal
                </span>
                {/* Animated Underline */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 animate-scale-x"></span>
              </span>
            </span>
          </h1>
          
          {/* Typing Animation with Enhanced Styling */}
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 h-20 sm:h-24 flex items-center justify-center px-4 fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <TypeAnimation
                sequence={[
                  'B.Tech ECE Student 🎓',
                  2000,
                  'Tech Enthusiast 💻',
                  2000,
                  'Future Engineer 🚀',
                  2000,
                  'Problem Solver 🧩',
                  2000,
                  'Innovation Seeker 💡',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-bold drop-shadow-lg"
              />
              {/* Cursor Effect */}
              <span className="inline-block w-1 h-8 sm:h-10 bg-purple-400 ml-1 animate-blink"></span>
            </div>
          </div>
          
          {/* Description with Icon */}
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto fade-in-up px-4 leading-relaxed font-medium" style={{ animationDelay: '0.7s' }}>
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              <span className="px-3 py-1 glass rounded-full text-sm sm:text-base">Electronics & Communication</span>
              <span className="text-purple-400">•</span>
              <span className="px-3 py-1 glass rounded-full text-sm sm:text-base">GNIT</span>
              <span className="text-purple-400">•</span>
              <span className="px-3 py-1 glass rounded-full text-sm sm:text-base">Hyderabad</span>
            </span>
          </p>
          
          {/* CTA Buttons with Enhanced Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up px-4 mb-12" style={{ animationDelay: '0.9s' }}>
            <a
              href="#projects"
              className="group relative glow-btn glow-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-size-200 animate-gradient-x px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transform hover:scale-110 transition-all duration-300 text-white shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <FaRocket className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </a>
            <a
              href="#contact"
              className="group glass px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 text-white border-2 border-white/40 backdrop-blur-lg shadow-xl"
            >
              <span>Contact Me</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center fade-in-up" style={{ animationDelay: '1.1s' }}>
            <a
              href="https://github.com/amit0811xp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 group"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl text-white group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-pal-26724a3b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator with Enhanced Animation */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10 fade-in-up" style={{ animationDelay: '1.3s' }}>
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-white text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
              <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
            </div>
            <FaChevronDown className="text-2xl text-white opacity-70 group-hover:opacity-100 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
