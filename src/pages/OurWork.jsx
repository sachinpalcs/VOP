import React from 'react';
import { groundExperience } from '../data/constituencies';

const OurWork = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section [cite: 79] */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-[#001f3f] mb-6">Our Ground Experience</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Our extensive on-ground exposure and regional understanding allow us to adapt strategies 
            to local culture, voter psychology, and political realities. [cite: 81, 97]
          </p>
        </div>
      </section>

      {/* Constituency Grid  */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#001f3f] flex items-center gap-2">
              <span className="w-8 h-1 bg-[#c41e3a]"></span>
              Assembly Constituencies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groundExperience.map((location, index) => (
              <div 
                key={index} 
                className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-[#c41e3a] hover:shadow-md transition-all group"
              >
                <p className="text-[#001f3f] font-bold group-hover:text-[#c41e3a] transition-colors">
                  {location}
                </p>
                <p className="text-xs text-gray-400 uppercase mt-1 tracking-widest">Assembly Segment</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Closing Statement [cite: 97] */}
      <section className="py-16 bg-[#001f3f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed">
            "Our experience across diverse constituencies allows us to adapt strategy to local 
            culture, voter psychology, and political realities." [cite: 97]
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default OurWork;