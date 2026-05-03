import React from 'react';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      title: 'B.Tech ECE',
      year: '2022 - Present',
      institution: 'Guru Nanak Institute of Technology (GNIT)',
      description: 'Electronics & Communication Engineering',
      icon: FaGraduationCap,
      side: 'left',
    },
    {
      title: 'Class 12th',
      year: '2021 - 2022',
      institution: 'Senior Secondary Education',
      description: 'Percentage: 74%',
      icon: FaSchool,
      side: 'right',
    },
    {
      title: 'Class 10th',
      year: '2019 - 2020',
      institution: 'Secondary Education',
      description: 'Percentage: 59%',
      icon: FaBook,
      side: 'left',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-12 flex flex-col md:flex-row items-center"
                data-aos={edu.side === 'left' ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
              >
                {edu.side === 'left' ? (
                  <>
                    <div className="md:w-5/12 md:text-right md:pr-8">
                      <div className="glass p-6 rounded-xl card-hover slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                        <h3 className="text-2xl font-bold mb-2 hover:text-purple-400 transition-colors duration-300">{edu.title}</h3>
                        <p className="text-purple-400 mb-2 font-semibold">{edu.year}</p>
                        <p className="text-gray-300 hover:text-white transition-colors duration-300">{edu.institution}</p>
                        <p className="text-gray-400 mt-2 hover:text-gray-200 transition-colors duration-300">{edu.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center pulse-animation hover:scale-125 transition-transform duration-300">
                        <edu.icon className="text-white" />
                      </div>
                    </div>
                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12"></div>
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center pulse-animation hover:scale-125 transition-transform duration-300">
                        <edu.icon className="text-white" />
                      </div>
                    </div>
                    <div className="md:w-5/12 md:pl-8">
                      <div className="glass p-6 rounded-xl card-hover slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                        <h3 className="text-2xl font-bold mb-2 hover:text-purple-400 transition-colors duration-300">{edu.title}</h3>
                        <p className="text-purple-400 mb-2 font-semibold">{edu.year}</p>
                        <p className="text-gray-300 hover:text-white transition-colors duration-300">{edu.institution}</p>
                        <p className="text-gray-400 mt-2 hover:text-gray-200 transition-colors duration-300">{edu.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
