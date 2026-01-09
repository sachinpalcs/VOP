// import { Link } from 'react-router-dom';
// import Logo from '../../assets/Logo.jpeg'

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           <Link to="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-[#001f3f] rounded-full flex items-center justify-center overflow-hidden">
//               <img 
//                 src={Logo} 
//                 alt="VOP Logo" 
//                 className="w-full h-full object-contain" 
//               />
//               {/* Replace with <img src={logo} /> once imported */}
//             </div>
//             <span className="font-bold text-lg tracking-tight text-[#001f3f]">VISION OF POLITICS</span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-[#c41e3a] font-medium">Home</Link>
//             <Link to ="/about" className="text-gray-700 hover:text-[#c41e3a] font-medium">About Us</Link>
//             <Link to="/services" className="text-gray-700 hover:text-[#c41e3a] font-medium">Services</Link>
//             <Link to="/work" className="text-gray-700 hover:text-[#c41e3a] font-medium">Our Work</Link>
//             {/* <Link to="/contact" className="bg-[#001f3f] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#002d5a] transition-all">
//               Request Consultation
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#001f3f] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={Logo} 
                alt="VOP Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-[#001f3f]">VISION OF POLITICS</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-700 hover:text-[#c41e3a] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {/* <Link 
              to="/contact" 
              className="bg-[#001f3f] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#002d5a] transition-all"
            >
              Request Consultation
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#001f3f] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="block px-3 py-3 text-base font-bold text-[#001f3f] hover:bg-gray-50 hover:text-[#c41e3a] rounded-md"
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#c41e3a] text-white px-5 py-3 rounded-md font-bold mt-4"
          >
            Request Consultation
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;