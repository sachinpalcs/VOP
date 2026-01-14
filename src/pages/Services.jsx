// import React from 'react';
// import { services } from '../data/services';
// import { detailedServices } from '../data/services';

// const Services = () => {
//   return (
//     <>
//     <div className="bg-white">
//       {/* Header */}
//       <section className="bg-[#001f3f] py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Detailed Services</h1>
//           <p className="text-blue-100 max-w-2xl mx-auto">
//             Strategic support with structured decision-making systems.
//           </p>
//         </div>
//       </section>

//       {/* Detailed Sections */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           {detailedServices.map((service, index) => (
//             <div 
//               key={service.id} 
//               className={`flex flex-col lg:flex-row items-center gap-12 py-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
//             >
//               {/* Text Side */}
//               <div className="lg:w-1/2">
//                 <span className="text-[#c41e3a] font-bold text-sm tracking-widest uppercase">
//                   Service 0{index + 1}
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mt-2 mb-6">
//                   {service.title}
//                 </h2>
//                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                   {service.description}
//                 </p>
                
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {service.process.map((item, i) => (
//                     <div key={i} className="flex items-start gap-3">
//                       <div className="mt-1 bg-red-100 p-1 rounded-full">
//                         <svg className="w-3 h-3 text-[#c41e3a]" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//                         </svg>
//                       </div>
//                       <span className="text-gray-700 font-medium">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Visual Side */}
//               <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 h-80 flex items-center justify-center border border-gray-100">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4 opacity-20">VOP</div>
//                   <p className="text-[#001f3f] font-bold italic">"{service.tagline}"</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Ethics Footer [cite: 106] */}
//       <section className="bg-gray-50 py-12 border-t">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h3 className="text-[#001f3f] font-bold mb-4">Our Commitment</h3>
//           <p className="text-sm text-gray-500 italic">
//             All services are delivered with total rejection of hate, misinformation, and manipulation. 
//           </p>
//         </div>
//       </section>
//     </div>
//     </>
//   );
// };

// export default Services;

import React from 'react';
import { detailedServices } from '../data/detailedServices';

const Services = () => {
  return (
    <div className="bg-white">
      {/* 1. Authority Header */}
      <section className="bg-[#001f3f] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c41e3a] opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Capabilities</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            We support campaigns with structured decision-making systems and ground intelligence.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Blocks */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {detailedServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 py-20 border-b border-gray-100 last:border-0 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="h-0.5 w-12 bg-[#c41e3a]"></div>
                  <span className="text-[#c41e3a] font-bold text-sm tracking-widest uppercase">
                    Capability {/* 0{index + 1} */}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-4">
                  {service.title}
                </h2>
                <p className="text-[#001f3f] font-semibold italic mb-6">
                  "{service.tagline}"
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.process.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-[#c41e3a] rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-700 font-bold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative p-1 bg-gray-100 rounded-3xl">
                   <div className="bg-white rounded-[1.4rem] p-12 h-80 flex flex-col items-center justify-center text-center shadow-inner">
                      <div className="text-7xl font-black text-gray-100 mb-4 select-none">VOP</div>
                      <div className="w-16 h-1 bg-[#001f3f] mb-6"></div>
                      <p className="text-[#001f3f] font-bold uppercase tracking-[0.2em] text-xs">
                        {service.id.replace('room', ' Room')} Strategy
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Ethics & Commitment */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-12 bg-white rounded-3xl shadow-xl border border-gray-100 relative">
            <h3 className="text-[#001f3f] text-2xl font-bold mb-6">Our Commitment to Integrity</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Rejection of hate, misinformation, and manipulation. All strategies are built on 
              fact-based communication and respect for democratic institutions."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;