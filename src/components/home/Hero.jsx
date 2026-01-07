// import React from "react";

// const Hero = () => {
//     return (
//         <section className="hero-section">
//             <div className="container mx-auto px-4 py-20 text-center">
//                 <h1 className="text-5xl font-bold text-[#001f3f] mb-4">Welcome to VOP</h1>
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                     Shaping Winning Campaigns with Insight and Integrity
//                 </p>
//             </div>
//         </section>
//     );
// }

// export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            {/* Headline: Vision-driven, authoritative [cite: 5] */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#001f3f] leading-tight tracking-tight mb-6">
              Shaping Winning Campaigns with <span className="text-[#c41e3a]">Insight and Integrity</span>
            </h1>
            
            {/* Subheading: Ground reality, strategy, and ethics [cite: 7] */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              We bridge the gap between traditional politics and modern success through 
              <span className="text-[#001f3f] font-bold"> ground reality</span>, 
              <span className="text-[#001f3f] font-bold"> data-driven strategy</span>, and 
              <span className="text-[#001f3f] font-bold"> uncompromising ethics</span>.
            </p>
            
            {/* CTA Buttons [cite: 8, 9] */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="bg-[#001f3f] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#002d5a] transition-all shadow-lg"
              >
                Request a Strategy Consultation
              </Link>
              <Link 
                to="/work" 
                className="border-2 border-[#001f3f] text-[#001f3f] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-all"
              >
                Our Ground Experience
              </Link>
            </div>
          </div>

          {/* Visual Element [cite: 127] */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-100 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800" 
                alt="Vision of Politics Strategy" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;