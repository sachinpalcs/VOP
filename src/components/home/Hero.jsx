// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          
//           <div>
//             {/* Headline: Vision-driven, authoritative [cite: 5] */}
//             <h1 className="text-4xl md:text-6xl font-extrabold text-[#001f3f] leading-tight tracking-tight mb-6">
//               Shaping Winning Campaigns with <span className="text-[#c41e3a]">Insight and Integrity</span>
//             </h1>
            
//             {/* Subheading: Ground reality, strategy, and ethics [cite: 7] */}
//             <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
//               We bridge the gap between traditional politics and modern success through 
//               <span className="text-[#001f3f] font-bold"> ground reality</span>, 
//               <span className="text-[#001f3f] font-bold"> data-driven strategy</span>, and 
//               <span className="text-[#001f3f] font-bold"> uncompromising ethics</span>.
//             </p>
            
//             {/* CTA Buttons [cite: 8, 9] */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link 
//                 to="/contact" 
//                 className="bg-[#001f3f] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#002d5a] transition-all shadow-lg"
//               >
//                 Request a Strategy Consultation
//               </Link>
//               <Link 
//                 to="/work" 
//                 className="border-2 border-[#001f3f] text-[#001f3f] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-all"
//               >
//                 Our Ground Experience
//               </Link>
//             </div>
//           </div>

//           {/* Visual Element [cite: 127] */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md">
//               <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-100 rounded-2xl"></div>
//               <img 
//                 src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800" 
//                 alt="Vision of Politics Strategy" 
//                 className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      headline: "Shaping Winning Campaigns with Insight and Integrity",
      subheading: "Bridging the gap between traditional politics and modern success through ground reality.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
    },
    {
      headline: "Data-Driven Strategy for Modern Elections",
      subheading: "Empowering leaders with research-driven booth-level execution and strategic micro-planning.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
    },
    {
      headline: "Ethical Politics for Lasting Democracy",
      subheading: "Commitment to clean campaigning, factual communication, and constitutional values.",
      image: "https://bpac.in/what-defines-good-political-leadership/&fit=crop&q=80&w=800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden min-h-150flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="transition-all duration-700 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#001f3f] leading-tight tracking-tight mb-6 min-h-37.5 lg:min-h-0">
              {slides[currentSlide].headline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium min-h-20">
              {slides[currentSlide].subheading}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="bg-[#001f3f] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#002d5a] transition-all shadow-lg text-center"
              >
                Request a Strategy Consultation
              </Link>
              <Link 
                to="/work" 
                className="border-2 border-[#001f3f] text-[#001f3f] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-all text-center"
              >
                Our Ground Experience
              </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    currentSlide === index ? 'w-8 bg-[#c41e3a]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Visual Side (Image Carousel) [cite: 127] */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-100">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-100 rounded-2xl"></div>
              {slides.map((slide, index) => (
                <img 
                  key={index}
                  src={slide.image} 
                  alt={`Slide ${index}`} 
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl grayscale transition-opacity duration-1000 ease-in-out ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;