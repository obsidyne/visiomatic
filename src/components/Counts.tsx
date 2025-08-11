import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, Award, Clock } from 'lucide-react';

const Counts = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    support: 0
  });

  const finalCounts = {
    clients: 500,
    projects: 1200,
    experience: 12,
    support: 24
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        clients: Math.min(prevCounts.clients + Math.ceil(finalCounts.clients / steps), finalCounts.clients),
        projects: Math.min(prevCounts.projects + Math.ceil(finalCounts.projects / steps), finalCounts.projects),
        experience: Math.min(prevCounts.experience + Math.ceil(finalCounts.experience / steps), finalCounts.experience),
        support: Math.min(prevCounts.support + Math.ceil(finalCounts.support / steps), finalCounts.support)
      }));
    }, stepDuration);

    setTimeout(() => clearInterval(interval), duration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      number: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers across various industries'
    },
    {
      icon: CheckCircle,
      number: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered automation solutions'
    },
    {
      icon: Award,
      number: counts.experience,
      suffix: '+',
      label: 'Years Experience',
      description: 'Leading the automation industry'
    },
    {
      icon: Clock,
      number: counts.support,
      suffix: '/7',
      label: 'Support Available',
      description: 'Round-the-clock customer assistance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Success in Numbers</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            These numbers reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold mb-2">
                {stat.number}<span className="text-2xl">{stat.suffix}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-blue-100 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counts;