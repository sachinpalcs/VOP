import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.jpeg'

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Vision of Politics" className="w-10 h-10"/>
              <span className="font-bold text-lg tracking-tight">VISION OF POLITICS</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Winning with credibility and trust. We are committed to clean campaigning and fact-based communication.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[#c41e3a] font-bold uppercase tracking-wider text-sm mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to="/services" className="hover:text-white transition-colors">Political Strategy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Ground Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Political Branding</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Campaigns</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#c41e3a] font-bold uppercase tracking-wider text-sm mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Our Ground Experience</Link></li>
              <li><Link to="/ethics" className="hover:text-white transition-colors">Ethics & Values</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Work With Us</Link></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-[#c41e3a] font-bold uppercase tracking-wider text-sm mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {/* Replace # with your actual social links */}
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition-all">FB</a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition-all">X</a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition-all">IG</a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c41e3a] transition-all">YT</a>
            </div>
            <p className="text-xs text-blue-200">
              Rejection of hate, misinformation, and manipulation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Vision of Politics. All Rights Reserved. </p>
          <p className="mt-2">Compliance with election laws and democratic values.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;