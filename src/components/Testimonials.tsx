import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      position: 'Homeowner',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Visiomatic transformed our office security completely. Their CCTV system is top-notch and the team was incredibly professional throughout the installation process.'
    },
    {
      name: 'John Doe',
      position: 'Homeowner',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'The gate automation system they installed has made our daily routine so much easier. The quality of work and after-sales support is exceptional.'
    },
    {
      name: 'John Doe',
      position: 'Facility Manager, MegaMall',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'Managing security for a large mall is complex, but Visiomatic made it seamless. Their surveillance system covers every angle and the monitoring is flawless.'
    },
    {
      name: 'Sneha Reddy',
      position: 'Property Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      rating: 5,
      text: 'We\'ve worked with Visiomatic on multiple projects. Their expertise in home automation and security systems is unmatched in the industry.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients <span className="text-blue-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our automation services and customer support.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="absolute top-6 left-6">
              <Quote className="w-12 h-12 text-blue-200" />
            </div>
            
            <div className="text-center mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;