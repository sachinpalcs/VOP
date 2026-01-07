import React from 'react';

const Card = ({ title, description, features, icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="text-[#c41e3a] text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#001f3f] mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 grow">{description}</p>
      
      <div className="border-t border-gray-50 pt-6">
        <h4 className="text-xs font-bold text-[#c41e3a] uppercase tracking-widest mb-4">Key Focus Areas</h4>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#c41e3a] mt-1">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;