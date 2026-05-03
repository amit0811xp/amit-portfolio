import React from 'react';
import { FaLaptopCode, FaMicrochip, FaSignal, FaRobot, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with HTML, Tailwind CSS, and JavaScript featuring smooth animations and glassmorphism design.',
      icon: FaLaptopCode,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['HTML', 'CSS', 'JS'],
      tagColors: ['bg-purple-500', 'bg-blue-500', 'bg-yellow-500'],
    },
    {
      title: 'Smart Home System',
      description: 'IoT-based home automation system using Arduino and sensors to control lights, temperature, and security features remotely.',
      icon: FaMicrochip,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Arduino', 'IoT', 'C++'],
      tagColors: ['bg-green-500', 'bg-blue-500', 'bg-purple-500'],
    },
    {
      title: 'Signal Processing App',
      description: 'Digital signal processing application for analyzing and filtering audio signals with real-time visualization and FFT analysis.',
      icon: FaSignal,
      gradient: 'from-green-500 to-teal-500',
      tags: ['Python', 'DSP', 'NumPy'],
      tagColors: ['bg-yellow-500', 'bg-red-500', 'bg-blue-500'],
    },
    {
      title: 'Line Following Robot',
      description: 'Autonomous robot that follows a predefined path using IR sensors and motor control algorithms for precise navigation.',
      icon: FaRobot,
      gradient: 'from-orange-500 to-red-500',
      tags: ['Arduino', 'Robotics', 'C'],
      tagColors: ['bg-green-500', 'bg-orange-500', 'bg-purple-500'],
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" data-aos="fade-up">
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden card-hover bounce-in shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-all duration-500 hover:scale-110`}>
                <project.icon className="text-5xl sm:text-6xl text-white opacity-60 float-animation hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 hover:text-gray-100 transition-colors duration-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 sm:px-3 py-1 ${project.tagColors[idx]} bg-opacity-30 rounded-full text-xs sm:text-sm hover:bg-opacity-50 transition-all duration-300 transform hover:scale-110 cursor-pointer text-white font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center transform hover:scale-110 hover:translate-x-1 text-sm sm:text-base font-medium">
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center transform hover:scale-110 hover:translate-x-1 text-sm sm:text-base font-medium">
                    <FaGithub className="mr-2" />
                    Code
                  </a>
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
