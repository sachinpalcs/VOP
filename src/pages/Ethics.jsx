import React from 'react';

const Ethics = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header */}
      <section className="bg-[#001f3f] py-16 md:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ethics & Values
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Strengthening the democratic fabric through integrity, transparency, and principled political management.
          </p>
        </div>
        {/* Subtle background red accent */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#c41e3a]"></div> */}
      </section>

      {/* 2. Core Ethical Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001f3f] mb-4">Our Integrity Framework</h2>
            <p className="text-gray-500 italic">At Vision of Politics, winning is built on credibility and trust.</p>
          </div>

          <div className="grid gap-8">
            {/* Commitment Items */}
            {[
              {
                title: "Commitment to Clean Campaigning",
                detail: "We believe in winning through superior strategy and ground intelligence, not through negative tactics.",
              },
              {
                title: "Fact-Based Communication",
                detail: "All messaging frameworks and campaign narratives are rooted in factual accuracy and rapid response planning that is both ethical and factual.",
              },
              {
                title: "Respect for Democratic Institutions",
                detail: "Our philosophy is centered on the long-term strengthening of the democratic process and respect for its core institutions.",
              },
              {
                title: "Compliance with Election Laws",
                detail: "We maintain strict adherence to all constitutional mandates and election laws throughout the campaign lifecycle.",
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Hover line effect matches the 'Our Work' style */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#c41e3a] group-hover:w-full transition-all duration-500 ease-in-out"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-12 h-12 bg-[#001f3f] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#001f3f] mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Rejection Statement Section */}
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-12 bg-white rounded-3xl shadow-2xl border-t-8 border-[#c41e3a]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#001f3f] mb-6 uppercase tracking-tight">
              Our Zero-Tolerance Policy
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Vision of Politics strictly maintains a total 
              <span className="text-[#c41e3a] font-bold"> rejection of hate, misinformation, and manipulation </span> 
              in any campaign we manage. 
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <div className="h-1 w-12 bg-gray-200"></div>
              <div className="h-1 w-12 bg-[#c41e3a]"></div>
              <div className="h-1 w-12 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;