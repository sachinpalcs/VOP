import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';

const Home = () => {
  return (
    <div>
      {/* Hero Section with H1 tagline */}
      <Hero />
      
      {/* About Snapshot*/}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#001f3f] mb-4">A Vision-Driven Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            Vision of Politics was founded to bring strategy, ethics, and ground-level reality to political campaigning. 
            We believe in winning with credibility and trust.
          </p>
        </div>
      </section>

      {/* 3 Pillars: Ground Reality, Data & Strategy, Ethical Politics */}
      <Pillars />

      {/* Call to Action Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#001f3f] mb-6">Ready to Lead with Strategy?</h2>
          <Link to="/contact" className="inline-block bg-[#c41e3a] text-white px-10 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;