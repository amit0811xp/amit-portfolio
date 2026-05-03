import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/amit-pal-26724a3b7/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaGithub, href: 'https://github.com/amit0811xp', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaFacebook, href: 'https://www.facebook.com/share/1E3fCBcAgA/', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: 'https://www.instagram.com/amit.pal4713?igsh=M3drMTVnMmVyYXZp', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 pt-12 pb-6 border-t border-purple-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="fade-in-up">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Amit Pal
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              B.Tech ECE Student passionate about technology, innovation, and building impactful solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FaCode className="text-purple-400" />
              <span>Building the future, one line at a time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm group">
                <FaEnvelope className="text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:pal298110@gmail.com" className="hover:text-purple-400 transition-colors break-all">
                  pal298110@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm group">
                <FaPhone className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919749174742" className="hover:text-purple-400 transition-colors">
                  +91 97491 74742
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm group">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <p className="text-gray-300 text-sm mb-4">
              Connect with me on social media for updates and collaborations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 glass rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="fade-in-up text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} <span className="text-purple-400 font-semibold">Amit Pal</span>. All rights reserved.
            </p>
          </div>
          
          <div className="fade-in-up flex items-center gap-2 text-gray-400 text-sm" style={{ animationDelay: '0.1s' }}>
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        {/* Back to Top Indicator */}
        <div className="text-center mt-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300 text-sm font-medium group"
          >
            <span>Back to Top</span>
            <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
