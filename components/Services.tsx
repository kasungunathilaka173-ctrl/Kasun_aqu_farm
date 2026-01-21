
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-display text-slate-900">Our Products & Services</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Providing end-to-end solutions for the ornamental fish industry, from initial breeding to final export and farm management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
