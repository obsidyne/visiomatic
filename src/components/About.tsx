import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-center lg:text-left mb-12">
              <span className="text-blue-600 font-semibold text-lg">About Visiomatic</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Leading the Future of <span className="text-blue-600">Automation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in the automation industry, Visiomatic has been at the 
                forefront of providing innovative security and automation solutions. We combine cutting-edge 
                technology with exceptional service to protect what matters most to you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">To provide comprehensive automation solutions that enhance security, convenience, and peace of mind for our clients.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the most trusted name in automation services, setting industry standards for quality and innovation.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">Excellence, integrity, and customer satisfaction drive everything we do, ensuring lasting relationships built on trust.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                  <Zap className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Fast</h3>
                  <p className="text-blue-100">Quick installation and setup</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Certified</h3>
                  <p className="text-teal-100">Industry certified professionals</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Support</h3>
                  <p className="text-orange-100">24/7 customer support</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform duration-300">
                  <Target className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Precise</h3>
                  <p className="text-purple-100">Accurate installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;