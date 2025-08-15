import React from 'react';
import { ArrowRight, Shield, Camera, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url("hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="flex items-center">
          <div className="text-left animate-fadeInLeft max-w-4xl w-full">
            {/* Responsive heading with smaller text on mobile */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              VISIOMATIC <br /> 
              <span className="text-blue-400">SMART HOME</span>
            </h1>

            {/* Responsive paragraph with smaller text on mobile */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Transform your property with cutting-edge CCTV systems, advanced security solutions,
              and intelligent gate automation. Your safety, our technology.
            </p>

            {/* Responsive button layout */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="#services"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-center text-sm sm:text-base"
              >
                View Services
              </a>
            </div>

            {/* Responsive feature list - stack vertically on small screens */}
            {/* <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-2">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">CCTV Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">Security Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">Gate Automation</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;