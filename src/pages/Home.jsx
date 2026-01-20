// import React from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/home/Hero';
// import Pillars from '../components/home/Pillars';
// import { services } from '../data/services';
// import { motion, AnimatePresence } from 'framer-motion';
// import {constituencies} from '../data/constituencies';

// const Home = () => {
//   return (
//      <div className="w-full">
//       {/* Hero Section [cite: 4] */}
//       <Hero />

//       {/* About Snapshot [cite: 10, 12] */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-[#001f3f] mb-4">Who We Are</h2>
//           <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
//             Vision of Politics is a premier political consultancy dedicated to long-term democratic strengthening. 
//             We provide leaders with the intelligence needed to win with credibility and trust.
//           </p>
//         </div>
//       </section>

//       {/* 3 Pillars Section [cite: 13] */}
//       <Pillars />


//       <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
//           <div>
//             <h2 className="text-3xl font-bold text-[#001f3f]">Core Services</h2>
//             <p className="text-gray-500 mt-2">Data-driven solutions for modern campaigns</p>
//           </div>
//           <Link to="/services" className="text-[#c41e3a] font-bold hover:underline">
//             View All
//           </Link>
//         </div>

//         <div className="relative flex overflow-hidden">
//           {/* <motion.div 
//             className="flex gap-6 pr-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//           > */}
//             {services.map((service, idx) => (
//               <div 
//                 key={idx} 
//                 className="min-w-87.5 p-8 bg-gray-50 rounded-xl border border-transparent hover:border-[#c41e3a] transition-all shrink-0"
//               >
//                 <h3 className="font-bold text-[#001f3f] text-xl mb-4">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
//                 <Link to="/services" className="text-[#c41e3a] text-sm font-bold uppercase">
//                   Learn More
//                 </Link>
//               </div>
//             ))}
//           {/* </motion.div> */}
//         </div>
//       </section>


//       <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
//           <div>
//             <h2 className="text-3xl font-bold text-[#001f3f]">Our work</h2>
//             <p className="text-gray-500 mt-2">Ground Experience</p>
//           </div>
//           <Link to="/our-work" className="text-[#c41e3a] font-bold hover:underline">
//             View Details
//           </Link>
//         </div>

//         <div className="relative flex overflow-hidden">
//           <motion.div 
//             className="flex gap-6 pr-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//           >
//             {constituencies.map((constituency, idx) => (
//               <div 
//                 key={idx} 
//                 className="min-w-60 p-5 bg-gray-50 rounded-xl border border-transparent hover:border-[#c41e3a] transition-all shrink-0"
//               >
//                 <h3 className="font-bold text-[#001f3f] text-xl mb-4">{constituency}</h3>
//                 {/* <p className="text-gray-600 mb-6 text-sm">{constituency.description}</p> */}
//                 {/* <Link to="/services" className="text-[#c41e3a] text-sm font-bold uppercase">
//                   Learn More
//                 </Link> */}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>


//       {/* Final CTA [cite: 32, 33] */}
//       <section className="bg-[#001f3f] py-16">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-3xl font-bold text-white mb-6">
//             Ready to Strategize Your Next Move?
//           </h2>
//           <p className="text-blue-100 mb-8">
//             Invite political leaders and candidates to connect for professional campaign management.
//           </p>
//           <Link 
//             to="/contact" 
//             className="inline-block bg-[#c41e3a] text-white px-10 py-4 rounded-md font-bold hover:bg-red-700 transition-colors"
//           >
//             Connect With Us
//           </Link>
//         </div>
//       </section>
//       </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';
import { services } from '../data/services';
import { constituencies } from '../data/constituencies';

const Home = () => {
  // Duplicating constituencies for a seamless infinite loop in the "Our Work" section
  const duplicatedConstituencies = [...constituencies, ...constituencies];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Snapshot */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-4">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Vision of Politics is a premier political consultancy dedicated to long-term democratic strengthening. 
            We provide leaders with the intelligence needed to win with credibility and trust.
          </p>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <Pillars />

      {/* Core Services - Static Grid (Motion Removed) */}
      {/* Core Services - Grid for all 5 services */}
{/* Core Services - Static 3-Column Grid */}
<section className="py-20 bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl font-bold text-[#001f3f] tracking-tight">Core Services</h2>
        <p className="text-gray-500 mt-2">Data-driven solutions for modern campaigns</p>
      </div>
      <Link to="/services" className="text-[#c41e3a] font-bold hover:underline hidden sm:block">
        View All Services →
      </Link>
    </div>

    {/* Using slice(0, 3) to strictly show only the first three services */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.slice(0, 3).map((service) => (
        <div 
          key={service.id} 
          className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Static Red Accent Bar */}
          <div className="w-12 h-1 bg-[#c41e3a] mb-6"></div>
          
          <h3 className="font-bold text-[#001f3f] text-xl mb-4 leading-tight group-hover:text-[#c41e3a] transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            {service.description}
          </p>
          
          {/* <Link 
            to="/services" 
            className="text-[#001f3f] text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Explore Strategy <span>→</span>
          </Link> */}
        </div>
      ))}
    </div>
    
    {/* Optional: Mobile "View All" button for when the desktop link is hidden */}
    <div className="mt-10 text-center sm:hidden">
      <Link to="/services" className="text-[#c41e3a] font-bold">
        View All Services
      </Link>
    </div>
  </div>
</section>

      {/* Our Work - Motion Marquee */}
      <section className="py-20 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#001f3f]">Our Work</h2>
            <p className="text-gray-500 mt-2">Established Ground Experience</p>
          </div>
          <Link to="/work" className="text-[#c41e3a] font-bold hover:underline">
            View Details
          </Link>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedConstituencies.map((constituency, idx) => (
              <div 
                key={idx} 
                className="min-w-60 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#c41e3a] transition-all shrink-0 text-center shadow-sm"
              >
                <p className="text-xs text-[#c41e3a] font-bold uppercase tracking-widest mb-2">Assembly</p>
                <h3 className="font-bold text-[#001f3f] text-lg">{constituency}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#001f3f] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Strategize Your Next Move?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Invite political leaders and candidates to connect for professional campaign management.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#c41e3a] text-white px-10 py-4 rounded-md font-bold hover:bg-red-700 transition-all shadow-lg"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;