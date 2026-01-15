// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       headline: "Winning Campaigns with Insight & Integrity",
//       subheading: "Bridging the gap between traditional politics and modern success.",
//       image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       headline: "Data-Driven Strategy for Modern Elections",
//       subheading: "Empowering leaders with research-driven booth-level execution.",
//       image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       headline: "Ethical Politics for Lasting Democracy",
//       subheading: "Commitment to clean campaigning and constitutional values.",
//       image: "https://images.unsplash.com/photo-1540910419312-4040a35f32a2?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   const paginate = useCallback((dir) => {
//     setCurrentSlide((prev) => (dir === 1 ? (prev === slides.length - 1 ? 0 : prev + 1) : (prev === 0 ? slides.length - 1 : prev - 1)));
//   }, [slides.length]);

//   useEffect(() => {
//     const timer = setInterval(() => paginate(1), 7000);
//     return () => clearInterval(timer);
//   }, [paginate]);

//   return (
//     <section className="relative bg-[#001f3f] py-6 lg:py-10 overflow-hidden min-h-1 flex items-center group">
      
//       {/* Ultra-Slim Navigation Arrows */}
//       <button onClick={() => paginate(-1)} className="absolute left-2 z-40 w-8 h-8 text-white/30 hover:text-[#c41e3a] transition-colors hidden md:block">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
//       </button>
//       <button onClick={() => paginate(1)} className="absolute right-2 z-40 w-8 h-8 text-white/30 hover:text-[#c41e3a] transition-colors hidden md:block">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
//       </button>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="grid lg:grid-cols-2 gap-6 items-center">
          
//           {/* Left Side: Tight Content */}
//           <div className="relative h-[280px] flex flex-col justify-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.4 }}
//                 className="absolute w-full"
//               >
//                 {/* <div className="flex items-center gap-2 mb-2">
//                   <span className="text-[#c41e3a] font-black text-[10px] tracking-widest uppercase">Consultancy • 0{currentSlide + 1}</span>
//                 </div> */}
//                 <h1 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
//                   {slides[currentSlide].headline}
//                 </h1>
//                 <p className="text-sm md:text-base text-blue-100 mb-5 max-w-sm opacity-80 font-medium">
//                   {slides[currentSlide].subheading}
//                 </p>
//                 <div className="flex gap-3">
//                   <Link to="/contact" className="bg-[#c41e3a] text-white px-5 py-2 rounded text-xs font-bold hover:bg-red-700 transition-all">
//                     Consultation
//                   </Link>
//                   <Link to="/work" className="border border-white/20 text-white px-5 py-2 rounded text-xs font-bold hover:bg-white hover:text-[#001f3f] transition-all">
//                     Experience
//                   </Link>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Side: Low-Height Image */}
//           <div className="hidden lg:block relative">
//             <div className="relative w-full h-[260px] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
//               <AnimatePresence mode="wait">
//                 <motion.img 
//                   key={currentSlide}
//                   src={slides[currentSlide].image}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
//                 />
//               </AnimatePresence>
//             </div>
//             {/* Minimal Indicators */}
//             <div className="flex gap-1.5 mt-3 justify-end">
//               {slides.map((_, i) => (
//                 <div key={i} className={`h-1 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#c41e3a]' : 'w-1.5 bg-white/20'}`} />
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
  const [direction, setDirection] = useState(0);

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
      image: "https://i0.wp.com/oecd-development-matters.org/wp-content/uploads/2020/10/democracy-voting-1.jpg?fit=1000%2C567&ssl=1"
    }
  ];

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="relative bg-[#001f3f] py-12 lg:py-16 overflow-hidden flex items-center min-h-150 group">
      
      {/* Navigation Arrows */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 lg:left-8 z-40 w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full hidden md:flex items-center justify-center hover:bg-[#c41e3a] transition-all transform hover:scale-105 opacity-0 group-hover:opacity-100 border border-white/20"
      > 
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 lg:right-8 z-40 w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full hidden md:flex items-center justify-center hover:bg-[#c41e3a] transition-all transform hover:scale-105 opacity-0 group-hover:opacity-100 border border-white/20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Content Side */}
          <div className="relative h-100 flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* <span className="h-[2px] w-8 bg-[#c41e3a]"></span> */}
                  {/* <span className="text-[#c41e3a] font-bold text-xs tracking-widest uppercase">
                    Strategic Vision 0{currentSlide + 1}
                  </span> */}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6">
                  {slides[currentSlide].headline}
                </h1>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg opacity-90">
                  {slides[currentSlide].subheading}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="relative bg-[#c41e3a] text-white px-8 py-3.5 rounded-lg font-bold text-base overflow-hidden transition-all hover:shadow-[0_8px_25px_-5px_rgba(196,30,58,0.4)] text-center group/btn"
                  >
                    <span className="relative z-10">Request a Strategy Consultation</span>
                  </Link>

                  <Link 
                    to="/our-work" 
                    className="border-2 border-white/30 text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-white hover:text-[#001f3f] transition-all text-center"
                  >
                    Our Ground Experience 
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="relative flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md h-95">
              {/* White border accent for dark background */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/10 rounded-2xl"></div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img 
                    src={slides[currentSlide].image}
                    // className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                    className="w-full h-full object-cover"
                    alt="VOP Campaign Insight"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            {/* <div className="flex gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentSlide === index ? 'w-10 bg-[#c41e3a]' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;