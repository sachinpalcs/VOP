// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       headline: "Shaping Winning Campaigns with Insight and Integrity",
//       subheading: "Bridging the gap between traditional politics and modern success through ground reality.",
//       image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       headline: "Data-Driven Strategy for Modern Elections",
//       subheading: "Empowering leaders with research-driven booth-level execution and strategic micro-planning.",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       headline: "Ethical Politics for Lasting Democracy",
//       subheading: "Commitment to clean campaigning, factual communication, and constitutional values.",
//       image: "https://bpac.in/what-defines-good-political-leadership/&fit=crop&q=80&w=800"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000); // Changes slide every 5 seconds
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden min-h-150flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Content Side */}
//           <div className="transition-all duration-700 ease-in-out">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-[#001f3f] leading-tight tracking-tight mb-6 min-h-37.5 lg:min-h-0">
//               {slides[currentSlide].headline}
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium min-h-20">
//               {slides[currentSlide].subheading}
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link 
//                 to="/contact" 
//                 className="bg-[#001f3f] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#002d5a] transition-all shadow-lg text-center"
//               >
//                 Request a Strategy Consultation
//               </Link>
//               <Link 
//                 to="/ethics" 
//                 className="border-2 border-[#001f3f] text-[#001f3f] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-all text-center"
//               >
//                 Our Ground Experience
//               </Link>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="flex gap-2 mt-8 justify-center lg:justify-start">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`h-2 transition-all duration-300 rounded-full ${
//                     currentSlide === index ? 'w-8 bg-[#c41e3a]' : 'w-2 bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Visual Side (Image Carousel) [cite: 127] */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-md h-100">
//               <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-100 rounded-2xl"></div>
//               {slides.map((slide, index) => (
//                 <img 
//                   key={index}
//                   src={slide.image} 
//                   alt={`Slide ${index}`} 
//                   className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl grayscale transition-opacity duration-1000 ease-in-out ${
//                     currentSlide === index ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      headline: "Winning Campaigns with Insight & Integrity",
      subheading: "Bridging the gap between traditional politics and modern success.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
    },
    {
      headline: "Data-Driven Strategy for Modern Elections",
      subheading: "Empowering leaders with research-driven booth-level execution.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
    },
    {
      headline: "Ethical Politics for Lasting Democracy",
      subheading: "Commitment to clean campaigning and constitutional values.",
      image: "https://images.unsplash.com/photo-1540910419312-4040a35f32a2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const paginate = useCallback((dir) => {
    setCurrentSlide((prev) => (dir === 1 ? (prev === slides.length - 1 ? 0 : prev + 1) : (prev === 0 ? slides.length - 1 : prev - 1)));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative bg-[#001f3f] py-4 lg:py-6 overflow-hidden min-h-1 flex items-center group">
      
      {/* Ultra-Slim Navigation Arrows */}
      <button onClick={() => paginate(-1)} className="absolute left-2 z-40 w-8 h-8 text-white/30 hover:text-[#c41e3a] transition-colors hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={() => paginate(1)} className="absolute right-2 z-40 w-8 h-8 text-white/30 hover:text-[#c41e3a] transition-colors hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Side: Tight Content */}
          <div className="relative h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full"
              >
                {/* <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#c41e3a] font-black text-[10px] tracking-widest uppercase">Consultancy • 0{currentSlide + 1}</span>
                </div> */}
                <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
                  {slides[currentSlide].headline}
                </h1>
                <p className="text-sm md:text-base text-blue-100 mb-5 max-w-sm opacity-80 font-medium">
                  {slides[currentSlide].subheading}
                </p>
                <div className="flex gap-3">
                  <Link to="/contact" className="bg-[#c41e3a] text-white px-5 py-2 rounded text-xs font-bold hover:bg-red-700 transition-all">
                    Consultation
                  </Link>
                  <Link to="/work" className="border border-white/20 text-white px-5 py-2 rounded text-xs font-bold hover:bg-white hover:text-[#001f3f] transition-all">
                    Experience
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Low-Height Image */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[260px] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>
            </div>
            {/* Minimal Indicators */}
            <div className="flex gap-1.5 mt-3 justify-end">
              {slides.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#c41e3a]' : 'w-1.5 bg-white/20'}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;