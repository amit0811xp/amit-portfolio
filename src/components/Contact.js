import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16" data-aos="fade-up">
          Get In{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 fade-in-up text-white">Let's Connect</h3>
            <p className="text-gray-200 mb-6 sm:mb-8 fade-in-up hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed" style={{ animationDelay: '0.1s' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center glass p-3 sm:p-4 rounded-lg card-hover zoom-in shadow-lg" style={{ animationDelay: '0.2s' }}>
                <FaEnvelope className="text-xl sm:text-2xl text-purple-400 mr-3 sm:mr-4 pulse-animation flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-300 text-xs sm:text-sm">Email</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base truncate">pal298110@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center glass p-3 sm:p-4 rounded-lg card-hover zoom-in shadow-lg" style={{ animationDelay: '0.3s' }}>
                <FaPhone className="text-xl sm:text-2xl text-purple-400 mr-3 sm:mr-4 pulse-animation flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Phone</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">+91 97491 74742</p>
                </div>
              </div>

              <div className="flex items-center glass p-3 sm:p-4 rounded-lg card-hover zoom-in shadow-lg" style={{ animationDelay: '0.4s' }}>
                <FaMapMarkerAlt className="text-xl sm:text-2xl text-purple-400 mr-3 sm:mr-4 pulse-animation flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">Location</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg" aria-label="LinkedIn">
                  <FaLinkedin className="text-lg sm:text-xl text-white" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg" aria-label="GitHub">
                  <FaGithub className="text-lg sm:text-xl text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg" aria-label="Twitter">
                  <FaTwitter className="text-lg sm:text-xl text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12 shadow-lg" aria-label="Instagram">
                  <FaInstagram className="text-lg sm:text-xl text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <form className="glass p-5 sm:p-8 rounded-xl card-hover shadow-2xl" onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white transform hover:scale-105 text-sm sm:text-base"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white transform hover:scale-105 text-sm sm:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white transform hover:scale-105 text-sm sm:text-base"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-white transform hover:scale-105 text-sm sm:text-base resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full glow-btn glow-pulse bg-gradient-to-r from-purple-500 to-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 fade-in-up text-white shadow-lg text-sm sm:text-base"
                style={{ animationDelay: '0.5s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
