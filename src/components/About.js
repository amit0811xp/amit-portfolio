import React from 'react';
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" data-aos="fade-up">
          About{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="glass p-6 sm:p-8 rounded-2xl card-hover">
              <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center float-animation shadow-2xl">
                <FaUser className="text-7xl sm:text-9xl text-white opacity-60 pulse-animation" />
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="space-y-6">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed fade-in-up hover:text-white transition-colors duration-300">
              I'm a passionate B.Tech student specializing in Electronics & Communication
              Engineering at Guru Nanak Institute of Technology (GNIT). My journey in
              technology began with curiosity and has evolved into a dedicated pursuit of
              excellence.
            </p>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed fade-in-up hover:text-white transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
              From scoring 59% in Class 10 to improving to 74% in Class 12, I've learned
              that growth is a continuous process. Now, as an engineering student, I'm
              focused on building practical skills, working on innovative projects, and
              preparing myself for a successful career in technology.
            </p>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed fade-in-up hover:text-white transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
              I believe in constant learning, adapting to new technologies, and turning
              challenges into opportunities. My goal is to contribute meaningfully to the
              tech industry and make a positive impact through my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
