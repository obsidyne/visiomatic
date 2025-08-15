import React from 'react';
import { Camera, Shield, Lock, Zap,  Film , Coffee , Monitor, Home } from 'lucide-react';

const Services = () => {
const services = [
  {
    icon: Zap,
    title: 'Smart Lighting',
    description: 'Advanced dimming and lighting control solutions for energy efficiency and ambiance customization.',
    features: [
      'Adaptive Phase Dimmers',
      'Forward Phase Dimmers',
      '0-10V Dimmers',
      'Keypad Dimmers',
      'Configurable Dimmers',
      'Fan Speed Controller',
      'Retrofit Lighting Solutions'
    ]
  },
  {
    icon: Shield,
    title: 'Safety and Security',
    description: 'Comprehensive safety solutions including surveillance, access control, and secure entry systems.',
    features: [
      'Security Sensors',
      'Video Door Phones',
      'Digital Door Locks',
      'CCTV Solutions',
      'Card Access Door Bell',
      'Card Access Smart Garage'
    ]
  },
  {
    icon: Coffee,
    title: 'Comfort and Convenience',
    description: 'Smart control systems for a more comfortable and effortless living environment.',
    features: [
      'Air Conditioning Control',
      'Curtain and Blinds Control'
    ]
  },
  {
    icon: Film,
    title: 'Entertainment',
    description: 'Immersive entertainment systems with seamless audio and video distribution.',
    features: [
      'Home Theatres',
      'Audio and Video Distribution System',
      'Multiroom Audio Systems'
    ]
  },
  {
    icon: Monitor,
    title: 'Entrance Automation',
    description: 'Automated entry solutions for secure and convenient access to your property.',
    features: []
  },
  {
    icon: Home,
    title: 'Home Automation',
    description: 'Centralized control systems with touch screens and smart remotes for managing your home.',
    features: [
      'Touch Screen and NEEO Remote',
      'Smart Home Operating Systems'
    ]
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