// import React from 'react';
// import { constituencies } from '../data/constituencies';

// const OurWork = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Header Section [cite: 79] */}
//       <section className="bg-gray-50 py-16 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-4xl font-extrabold text-[#001f3f] mb-6">Our Ground Experience</h1>
//           <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
//             Our extensive on-ground exposure and regional understanding allow us to adapt strategies 
//             to local culture, voter psychology, and political realities.
//           </p>
//         </div>
//       </section>

//       {/* Constituency Grid  */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-[#001f3f] flex items-center gap-2">
//               <span className="w-8 h-1 bg-[#c41e3a]"></span>
//               Assembly Constituencies
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {constituencies.map((location, index) => (
//               <div 
//                 key={index} 
//                 className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-[#c41e3a] hover:shadow-md transition-all group"
//               >
//                 <p className="text-[#001f3f] font-bold group-hover:text-[#c41e3a] transition-colors">
//                   {location}
//                 </p>
//                 <p className="text-xs text-gray-400 uppercase mt-1 tracking-widest">Assembly Segment</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      

//       {/* Experience Closing Statement [cite: 97] */}
//       <section className="py-16 bg-[#001f3f] text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed">
//             "Our experience across diverse constituencies allows us to adapt strategy to local 
//             culture, voter psychology, and political realities."
//           </blockquote>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurWork;

// import React from 'react';
// import { constituencies } from '../data/constituencies';

// const OurWork = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Header Section */}
//       <section className="bg-[#001f3f] py-20 text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Ground Experience</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//             Our extensive on-ground exposure and regional understanding allow us to adapt strategies 
//             to local culture, voter psychology, and political realities. [cite: 81, 97]
//           </p>
//         </div>
//       </section>

//       {/* Where We've Worked Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-[#001f3f] inline-block relative pb-4">
//               Where We’ve Worked
//               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#c41e3a]"></span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {constituencies.map((location, index) => (
//               <div 
//                 key={index} 
//                 className="p-8 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-[#c41e3a] hover:bg-white hover:shadow-md transition-all duration-300 group text-center"
//               >
//                 <div className="text-[#c41e3a] opacity-30 group-hover:opacity-100 transition-opacity mb-2 font-serif text-sm">
//                   AC Segment
//                 </div>
//                 <p className="text-[#001f3f] font-bold text-xl tracking-wide">
//                   {location} 
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Strategic Adaptability Section */}
      
//       <section className="py-16 bg-gray-50 border-y border-gray-100">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200">
//             <p className="text-xl md:text-2xl text-[#001f3f] font-medium italic leading-relaxed">
//               “Our experience across diverse constituencies allows us to adapt strategy to local
//               culture, voter psychology, and political realities.” 
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Final Call to Action Link */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h3 className="text-2xl font-bold text-[#001f3f] mb-6">Ready to bring this experience to your constituency?</h3>
//           <a 
//             href="/contact" 
//             className="inline-block bg-[#001f3f] text-white px-10 py-4 rounded-md font-bold hover:bg-[#c41e3a] transition-all shadow-lg"
//           >
//             Connect With Us [cite: 33]
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurWork;

import React from 'react';
import { constituencies } from '../data/constituencies';

const OurWork = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Slim Header Section */}
      <section className="bg-[#001f3f] py-12 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c41e3a] opacity-10 rounded-full -mr-20 -mt-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Our Ground Experience
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed font-medium">
              We bring extensive on-ground exposure and regional understanding to every campaign. 
              By diving deep into local dynamics, we ensure our strategies are rooted in 
              the actual pulse of the constituency.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Constituency Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-[#c41e3a] uppercase tracking-[0.3em] mb-2">
                Portfolio
              </h2>
              <h3 className="text-3xl font-bold text-[#001f3f]">
                Where We've Worked
              </h3>
            </div>
            <p className="text-gray-500 max-w-md italic">
              A comprehensive list of assembly segments where we have successfully deployed 
              our strategic frameworks and ground intelligence systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {constituencies.map((location, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:border-[#001f3f] hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Red line: Start at w-0 (invisible) and expand to w-full on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#c41e3a] group-hover:w-full transition-all duration-500 ease-in-out"></div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-[#001f3f] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {location}
                  </h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Assembly Constituency
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Closing Quote Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block p-10 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#c41e3a] text-white rounded-full flex items-center justify-center text-2xl font-serif">
              “
            </div>
            
            <p className="text-xl md:text-2xl font-bold text-[#001f3f] leading-snug italic">
              "Our experience across diverse constituencies allows us to adapt strategy to local culture, voter psychology, and political realities."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;