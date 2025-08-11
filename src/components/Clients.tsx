import React, { useEffect, useRef } from 'react';

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'SecureBase', logo: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'AutoMate', logo: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'SmartHome', logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'SecureTech', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'GateWay', logo: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'VisionPro', logo: 'https://images.pexels.com/photos/1181448/pexels-photo-1181448.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' },
    { name: 'SafeGuard', logo: 'https://images.pexels.com/photos/1181480/pexels-photo-1181480.jpeg?auto=compress&cs=tinysrgb&w=200&h=100' }
  ];

  // Duplicate clients for seamless scrolling
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Trusted By</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            Our Valued <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with industry leaders and innovative companies who trust us 
            with their automation and security needs.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-48 h-24 flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <span className="text-gray-800 font-semibold text-sm">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join <span className="font-semibold text-blue-600">500+</span> companies who trust Visiomatic for their automation needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;