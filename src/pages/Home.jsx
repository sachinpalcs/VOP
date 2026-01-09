import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';
import { services } from '../data/services';

const Home = () => {
  return (
     <div className="w-full">
      {/* Hero Section [cite: 4] */}
      <Hero />

      {/* About Snapshot [cite: 10, 12] */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-4">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Vision of Politics is a premier political consultancy dedicated to long-term democratic strengthening. 
            We provide leaders with the intelligence needed to win with credibility and trust.
          </p>
        </div>
      </section>

      {/* 3 Pillars Section [cite: 13] */}
      <Pillars />

      {/* Core Services Overview [cite: 17, 18] */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#001f3f]">Core Services</h2>
              <p className="text-gray-500 mt-2">Data-driven solutions for modern campaigns</p>
            </div>
            <Link to="/services" className="text-[#c41e3a] font-bold hover:underline hidden sm:block">
              View All Services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="p-8 bg-gray-50 rounded-xl border border-transparent hover:border-[#c41e3a] transition-all">
                <h3 className="font-bold text-[#001f3f] text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                <Link to="/services" className="text-[#c41e3a] text-sm font-bold uppercase tracking-wider">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA [cite: 32, 33] */}
      <section className="bg-[#001f3f] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Strategize Your Next Move?
          </h2>
          <p className="text-blue-100 mb-8">
            Invite political leaders and candidates to connect for professional campaign management.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#c41e3a] text-white px-10 py-4 rounded-md font-bold hover:bg-red-700 transition-colors"
          >
            Connect With Us
          </Link>
        </div>
      </section>
      </div>
  );
};

export default Home;