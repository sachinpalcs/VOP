import React from 'react';

const Pillars = () => {
  const pillars = [
    {
      title: "Ground Reality",
      icon: "📍",
      desc: "Direct field intelligence and local understanding of voter psychology." // [cite: 97]
    },
    {
      title: "Data & Strategy",
      icon: "📊",
      desc: "Research-driven approach using booth-level execution and data analysis." // [cite: 27, 28]
    },
    {
      title: "Ethical Politics",
      icon: "⚖️",
      desc: "Commitment to clean campaigning, factual communication, and democratic values." // [cite: 108, 110, 111]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001f3f]">The VOP Approach</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between traditional campaign management and modern, data-driven strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-4 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;