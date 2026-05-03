import React from 'react';
import { FaLaptopCode, FaMicrochip, FaSignal, FaRobot, FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Shoe E-Commerce Website',
      description: 'A modern, fully responsive e-commerce website for shoes featuring product catalog, shopping cart, and smooth user experience with React and modern design.',
      icon: FaLaptopCode,
      gradient: 'from-orange-500 to-red-500',
      tags: ['React', 'CSS', 'E-Commerce'],
      tagColors: ['bg-blue-500', 'bg-purple-500', 'bg-green-500'],
      liveUrl: 'http://shoe-website-front-end.vercel.app/',
      githubUrl: 'https://github.com/amit0811xp',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React, Tailwind CSS, and JavaScript featuring smooth animations and glassmorphism design.',
      icon: FaLaptopCode,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['React', 'Tailwind', 'JS'],
      tagColors: ['bg-blue-500', 'bg-cyan-500', 'bg-yellow-500'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amit0811xp/amit-portfolio',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      featured: false,
    },
    {
      title: 'Smart Home System',
      description: 'IoT-based home automation system using Arduino and sensors to control lights, temperature, and security features remotely.',
      icon: FaMicrochip,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Arduino', 'IoT', 'C++'],
      tagColors: ['bg-green-500', 'bg-blue-500', 'bg-purple-500'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amit0811xp',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
      featured: false,
    },
    {
      title: 'Signal Processing App',
      description: 'Digital signal processing application for analyzing and filtering audio signals with real-time visualization and FFT analysis.',
      icon: FaSignal,
      gradient: 'from-green-500 to-teal-500',
      tags: ['Python', 'DSP', 'NumPy'],
      tagColors: ['bg-yellow-500', 'bg-red-500', 'bg-blue-500'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amit0811xp',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
      featured: false,
    },
    {
      title: 'Line Following Robot',
      description: 'Autonomous robot that follows a predefined path using IR sensors and motor control algorithms for precise navigation.',
      icon: FaRobot,
      gradient: 'from-orange-500 to-red-500',
      tags: ['Arduino', 'Robotics', 'C'],
      tagColors: ['bg-green-500', 'bg-orange-500', 'bg-purple-500'],
      liveUrl: '#',
      githubUrl: 'https://github.com/amit0811xp',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      featured: false,
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
              className="glass rounded-2xl overflow-hidden card-hover bounce-in shadow-2xl group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
                  <FaStar className="text-xs" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl`}>
                    <project.icon className="text-3xl text-white" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 sm:px-3 py-1 ${project.tagColors[idx]} bg-opacity-30 rounded-full text-xs sm:text-sm hover:bg-opacity-50 transition-all duration-300 transform hover:scale-110 cursor-pointer text-white font-medium border border-white/20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 min-w-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 min-w-[120px] glass border border-purple-400/30 hover:bg-purple-500/20 text-white px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
