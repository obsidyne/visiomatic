import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Corporate Office Security',
      category: 'CCTV & Access Control',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Mumbai',
      description: 'Complete security system with 50+ cameras and biometric access control'
    },
    {
      id: 2,
      title: 'Residential Gate Automation',
      category: 'Gate Automation',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Delhi',
      description: 'Smart gate system with remote access and intercom integration'
    },
    {
      id: 3,
      title: 'Shopping Mall Surveillance',
      category: 'CCTV Systems',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Bangalore',
      description: '200+ camera installation with advanced analytics and monitoring'
    },
    {
      id: 4,
      title: 'Smart Home Automation',
      category: 'Home Automation',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Chennai',
      description: 'Complete home automation with lighting, security, and climate control'
    },
    {
      id: 5,
      title: 'Industrial Security Setup',
      category: 'Security Systems',
      image: 'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Pune',
      description: 'High-security installation for manufacturing facility'
    },
    {
      id: 6,
      title: 'Hotel Access Control',
      category: 'Access Control',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Goa',
      description: 'Card-based access system for 200+ rooms with central management'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest automation projects across various industries and applications, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;