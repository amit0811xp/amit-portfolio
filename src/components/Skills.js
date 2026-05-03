import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBrain, FaMicrochip, FaProjectDiagram } from 'react-icons/fa';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', progress: 85 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', progress: 80 },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', progress: 75 },
    { name: 'Electronics', icon: FaMicrochip, color: 'text-green-500', progress: 70 },
    { name: 'Problem Solving', icon: FaBrain, color: 'text-purple-500', progress: 78 },
    { name: 'Circuit Design', icon: FaProjectDiagram, color: 'text-pink-500', progress: 65 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !animated) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" data-aos="fade-up">
          My{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-5 sm:p-6 rounded-xl card-hover zoom-in"
              data-aos="flip-left"
              data-aos-delay={index * 100}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`text-3xl sm:text-4xl ${skill.color} mr-3 sm:mr-4 shake-animation transition-transform duration-300 hover:scale-125 hover:rotate-12 drop-shadow-lg`} />
                <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden mb-2 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1500 ease-out shadow-lg"
                  style={{ width: animated ? `${skill.progress}%` : '0%' }}
                ></div>
              </div>
              <p className="text-gray-300 text-sm font-semibold">{skill.progress}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
