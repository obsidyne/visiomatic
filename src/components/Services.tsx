import React from 'react';
import { Camera, Shield, Lock, Zap, Monitor, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Systems',
      description: 'Advanced surveillance systems with HD cameras, night vision, and remote monitoring capabilities.',
      features: ['HD/4K Cameras', 'Night Vision', 'Remote Access', 'Motion Detection']
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: 'Comprehensive security solutions including alarms, sensors, and integrated monitoring systems.',
      features: ['Burglar Alarms', 'Motion Sensors', 'Door/Window Sensors', '24/7 Monitoring']
    },
    {
      icon: Lock,
      title: 'Gate Automation',
      description: 'Smart gate systems with remote control, access cards, and automatic opening mechanisms.',
      features: ['Remote Control', 'Access Cards', 'Automatic Gates', 'Intercom Systems']
    },
    {
      icon: Zap,
      title: 'Smart Lighting',
      description: 'Intelligent lighting solutions with automated controls, timers, and energy efficiency.',
      features: ['Auto Timers', 'Motion Control', 'Energy Saving', 'Remote Management']
    },
    {
      icon: Monitor,
      title: 'Access Control',
      description: 'Advanced access control systems with biometric scanners, key cards, and visitor management.',
      features: ['Biometric Scanners', 'Key Card Access', 'Visitor Management', 'Time Tracking']
    },
    {
      icon: Home,
      title: 'Home Automation',
      description: 'Complete home automation solutions for convenience, security, and energy management.',
      features: ['Smart Thermostats', 'Automated Curtains', 'Voice Control', 'Mobile App']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Complete Automation <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From CCTV surveillance to smart home automation, we provide end-to-end solutions 
            tailored to your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;