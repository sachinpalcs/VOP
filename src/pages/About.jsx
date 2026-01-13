import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Who We Are */}
      <section className="bg-[#001f3f] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Vision of Politics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Vision of Politics (VOP) is a premier political consultancy dedicated to long-term democratic strengthening. 
            We provide leaders with the intelligence needed to win with credibility and trust.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#001f3f] mb-6">Why We Were Founded</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Vision of Politics was founded to bridge the gap between traditional, often chaotic campaign management and a structured, research-driven approach. 
              We believe that the future of Indian democracy lies in the hands of leaders who prioritize ground reality over guesswork.
            </p>
            <h2 className="text-3xl font-bold text-[#001f3f] mb-6">Our Philosophy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our philosophy is rooted in the belief that politics should be ethical, constitutional, and people-centric. 
              We focus on strengthening democratic institutions by ensuring that campaigns are built on facts and honest communication.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-inner">
            <h3 className="text-2xl font-bold text-[#c41e3a] mb-8">Vision & Mission</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-[#001f3f] text-lg uppercase tracking-wider">Vision</h4>
                <p className="text-gray-600 mt-2">Long-term democratic strengthening through professional political management.</p>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-bold text-[#001f3f] text-lg uppercase tracking-wider">Mission</h4>
                <p className="text-gray-600 mt-2">Empowering candidates to achieve winning results while maintaining credibility and trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategic Difference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001f3f]">The VOP Difference</h2>
            <p className="text-gray-500 mt-2">How we differ from traditional campaign management.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-gray-300">
              <h3 className="font-bold text-xl text-gray-500 mb-6">Traditional Management</h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-center gap-3">✕ Reliance on anecdotal feedback</li>
                <li className="flex items-center gap-3">✕ Short-term "wave" focus</li>
                <li className="flex items-center gap-3">✕ Often ignores booth-level micro-data</li>
                <li className="flex items-center gap-3">✕ Unstructured communication</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#c41e3a]">
              <h3 className="font-bold text-xl text-[#001f3f] mb-6">Vision of Politics Approach</h3>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-green-600 font-bold">✓</span> Research-driven ground intelligence</li>
                <li className="flex items-center gap-3"><span className="text-green-600 font-bold">✓</span> Booth-level micro-planning</li>
                <li className="flex items-center gap-3"><span className="text-green-600 font-bold">✓</span> Honest and fact-based communication</li>
                <li className="flex items-center gap-3"><span className="text-green-600 font-bold">✓</span> Proven ground experience across diverse regions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#001f3f] mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h4 className="font-bold text-[#001f3f] mb-2">Ethical</h4>
              <p className="text-sm text-gray-500">Rejection of hate, misinformation, and manipulation.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">📜</div>
              <h4 className="font-bold text-[#001f3f] mb-2">Constitutional</h4>
              <p className="text-sm text-gray-500">Strict respect for democratic institutions and laws.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="font-bold text-[#001f3f] mb-2">People-Centric</h4>
              <p className="text-sm text-gray-500">Focusing on ground reality and real local issues.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;