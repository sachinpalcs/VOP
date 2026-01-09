import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Trust Statements */}
          <div>
            <h1 className="text-4xl font-extrabold text-[#001f3f] mb-6">
              Connect With Our <span className="text-[#c41e3a]">Strategy Team</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Invite political leaders and candidates to connect for professional campaign management, ground intelligence, and strategic planning.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border-l-4 border-[#001f3f]">
                <div className="text-xl">⚖️</div>
                <p className="text-sm text-gray-700 font-medium">
                  We maintain full compliance with election laws and reject all forms of misinformation.
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border-l-4 border-[#c41e3a]">
                <div className="text-xl">🤝</div>
                <p className="text-sm text-gray-700 font-medium">
                  All consultations are strictly confidential and research-driven.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Lead Generation Form  */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
            <form className="space-y-6">
              {/* Name Field [cite: 118] */}
              <div>
                <label className="block text-sm font-bold text-[#001f3f] mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c41e3a] outline-none transition-all"
                  placeholder="Your Full Name" 
                />
              </div>
              {/* <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 uppercase tracking-wide">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c41e3a] outline-none transition-all"
                    placeholder="Enter 10-digit Mobile Number"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div> */}

                <div className="flex">
                  <span className="flex items-center px-4 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-gray-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength="10"
                    inputMode="numeric"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-r-lg focus:ring-2 focus:ring-[#c41e3a] outline-none"
                    placeholder="Mobile Number"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>



              <div className="grid md:grid-cols-2 gap-6">
                {/* Constituency Field [cite: 119] */}
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 uppercase tracking-wide">
                    Constituency
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c41e3a] outline-none transition-all"
                    placeholder="e.g. Buxar" 
                  />
                </div>
                {/* Type of Election [cite: 120] */}
                <div>
                  <label className="block text-sm font-bold text-[#001f3f] mb-2 uppercase tracking-wide">
                    Type of Election
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c41e3a] outline-none transition-all appearance-none cursor-pointer">
                    <option>Assembly Election</option>
                    <option>Lok Sabha Election</option>
                    <option>Local Body Election</option>
                    <option>By-Election</option>
                  </select>
                </div>
              </div>

              {/* Requirement [cite: 121] */}
              <div>
                <label className="block text-sm font-bold text-[#001f3f] mb-2 uppercase tracking-wide">
                  Requirement
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c41e3a] outline-none transition-all"
                  placeholder="How can we help your campaign?"
                ></textarea>
              </div>

              <button className="w-full bg-[#001f3f] text-white font-bold py-4 rounded-lg hover:bg-[#c41e3a] shadow-lg transition-all transform hover:-translate-y-1">
                Submit Consultation Request
              </button>

              <p className="text-center text-xs text-gray-400 mt-4 italic">
                "Winning with credibility and trust."
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;