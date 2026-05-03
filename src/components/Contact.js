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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
          Get In{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 fade-in-up">Let's Connect</h3>
            <p className="text-gray-400 mb-8 fade-in-up hover:text-gray-200 transition-colors duration-300" style={{ animationDelay: '0.1s' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center glass p-4 rounded-lg card-hover zoom-in" style={{ animationDelay: '0.2s' }}>
                <FaEnvelope className="text-2xl text-purple-400 mr-4 pulse-animation" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center glass p-4 rounded-lg card-hover zoom-in" style={{ animationDelay: '0.3s' }}>
                <FaPhone className="text-2xl text-purple-400 mr-4 pulse-animation" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center glass p-4 rounded-lg card-hover zoom-in" style={{ animationDelay: '0.4s' }}>
                <FaMapMarkerAlt className="text-2xl text-purple-400 mr-4 pulse-animation" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white hover:text-purple-400 transition-colors duration-300">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12" aria-label="LinkedIn">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12" aria-label="GitHub">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12" aria-label="Twitter">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-125 hover:rotate-12" aria-label="Instagram">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <form className="glass p-8 rounded-xl card-hover" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full glow-btn bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold"
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
