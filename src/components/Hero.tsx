import React from 'react';
import { ArrowRight, Shield, Camera, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="flex items-center">
          <div className="text-left animate-fadeInLeft max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart <span className="text-blue-400">Automation</span>
              <br />
              Solutions
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your property with cutting-edge CCTV systems, advanced security solutions,
              and intelligent gate automation. Your safety, our technology.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center --bg-red-200 text-center"
              >
                View Services
              </a>


            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div className="flex items-center space-x-2">
                <Camera className="w-6 h-6 text-teal-400" />
                <span className="text-white font-medium">CCTV Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-white font-medium">Security Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-orange-400" />
                <span className="text-white font-medium">Gate Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;