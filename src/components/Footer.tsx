import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Visiomatic</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Address 43/1851/A9, Peringattu Building, Pallissery Road, Palarivattom P O, Kochi -682025
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-lg transition-colors duration-300">
                <LinkedIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  CCTV Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Security Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Gate Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Access Control
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Home Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Smart Lighting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimoials" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Address 43/1851/A9, Peringattu Building, Pallissery Road, Palarivattom P O, Kochi -682025
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">+91 90613 15054</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">info@visiomatic.com</p>
                  <p className="text-gray-300">support@visiomatic.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-600/20 rounded-lg">
              <h4 className="font-semibold mb-2">24/7 Emergency Support</h4>
              <p className="text-sm text-gray-300">
                Call us anytime for urgent security issues or system failures.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Visiomatic. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm">
            <div className="mb-2 md:mb-0 text-gray-300">
              Developed by{" "}
              <a
                href="https://www.obsidyne.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-300"
              >
                Obsidyne
              </a>
            </div>
            {/* <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
