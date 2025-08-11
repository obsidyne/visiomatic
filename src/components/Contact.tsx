import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure your property with cutting-edge automation? Get a free consultation 
            and quote from our expert team today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get A Free Quote Today</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 90613 15054</p>
                  {/* <p className="text-gray-600">+91 87654 32109</p> */}
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@visiomatic.com</p>
                  <p className="text-gray-600">support@visiomatic.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">32/874 A8, Pallichambayil Rd, Chakkalakkal, Palarivattom, Kochi, Kerala 682025</p>
                  {/* <p className="text-gray-600">Bangalore, Karnataka 560100</p> */}
                </div>
              </div>
              
              {/* <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Emergency Support: 24/7</p>
                </div>
              </div> */}
            </div>
            
            {/* <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Visiomatic?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Free site inspection and consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Competitive pricing with no hidden costs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Professional installation and support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  2-year warranty on all installations
                </li>
              </ul>
            </div> */}
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="cctv">CCTV Systems</option>
                  <option value="security">Security Systems</option>
                  <option value="gate">Gate Automation</option>
                  <option value="access">Access Control</option>
                  <option value="home">Home Automation</option>
                  <option value="lighting">Smart Lighting</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;