import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 text-white p-3 rounded-lg">
                <span className="font-bold text-xl">B</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">BOXSAM</h3>
                <p className="text-sm text-gray-400">Technologies Pvt Ltd</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2017, BOXSAM Technologies is a Delhi NCR-based digital marketing and technology solutions company. We turn clicks into clients through data-driven strategies.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@boxsam.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+91-9616683869</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>E-31A, First Floor, Jawahar Park, Laxmi Nagar, New Delhi - 110092</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">SEO & Local Ranking</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">PPC Management</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Social Media Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Content Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Email Marketing</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Web Development</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Lead Generation</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About Us</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact Us</button></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Free SEO Audit</a></li>
              <li><a href="https://www.boxsam.in/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Visit Our Website</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">ROI Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Delhi NCR Market Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">SME Growth Guide</a></li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-4 text-gray-400">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/boxsam-technologies" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/boxsam_india" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 BOXSAM Technologies Private Limited. All rights reserved.</p>
              <p className="mt-1">
                <span className="text-blue-400">Developed by: Ankit Sachan</span>
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup - Optional Enhancement */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold">Stay Updated with Delhi NCR Digital Trends</h4>
              <p className="text-blue-100">Get exclusive insights and strategies for growing your business in Delhi NCR.</p>
            </div>
            <div className="flex max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;