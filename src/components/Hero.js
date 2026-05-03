import React, { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  useEffect(() => {
    // Load particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative animated-gradient overflow-hidden"
    >
      <div id="particles-js" className="absolute w-full h-full top-0 left-0 z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 fade-in-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pulse-animation">
              Your Name
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'B.Tech ECE Student',
                2000,
                'Tech Enthusiast',
                2000,
                'Future Engineer',
                2000,
                'Problem Solver',
                2000,
                'Innovation Seeker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-200"
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
            B.Tech ECE Student | Tech Enthusiast | Future Engineer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#projects"
              className="glow-btn glow-pulse bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold inline-block transform hover:scale-110 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full font-semibold inline-block hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-110"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="block hover:scale-125 transition-transform duration-300">
            <FaChevronDown className="text-3xl text-white opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
