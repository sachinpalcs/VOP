import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpeg'

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#001f3f] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={Logo} 
                alt="VOP Logo" 
                className="w-full h-full object-contain" 
              />
              {/* Replace with <img src={logo} /> once imported */}
            </div>
            <span className="font-bold text-lg tracking-tight text-[#001f3f]">VISION OF POLITICS</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#c41e3a] font-medium">Home</Link>
            <Link to ="/about" className="text-gray-700 hover:text-[#c41e3a] font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#c41e3a] font-medium">Services</Link>
            <Link to="/work" className="text-gray-700 hover:text-[#c41e3a] font-medium">Our Work</Link>
            <Link to="/contact" className="bg-[#001f3f] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#002d5a] transition-all">
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;