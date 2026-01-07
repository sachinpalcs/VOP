import React from 'react';
import { services } from '../data/services';
import { detailedServices } from '../data/services';

const Services = () => {
  return (
    <>
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#001f3f] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Detailed Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Strategic support with structured decision-making systems. [cite: 66]
          </p>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {detailedServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 py-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="lg:w-1/2">
                <span className="text-[#c41e3a] font-bold text-sm tracking-widest uppercase">
                  Service 0{index + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mt-2 mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.process.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-1 rounded-full">
                        <svg className="w-3 h-3 text-[#c41e3a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-20">VOP</div>
                  <p className="text-[#001f3f] font-bold italic">"{service.tagline}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ethics Footer [cite: 106] */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-[#001f3f] font-bold mb-4">Our Commitment</h3>
          <p className="text-sm text-gray-500 italic">
            All services are delivered with total rejection of hate, misinformation, and manipulation. [cite: 113]
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;