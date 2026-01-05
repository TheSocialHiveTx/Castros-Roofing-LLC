
import React from 'react';
import { Hammer, Shield, Timer, Award, CheckCircle2 } from 'lucide-react';
import { WARRANTY_YEARS, SHINGLE_LIFE_YEARS } from '../constants';

const features = [
  {
    icon: <Timer size={32} className="text-red-600" />,
    title: "30-Year Lifespan",
    desc: `We only use high-grade architectural shingles designed to protect your home for ${SHINGLE_LIFE_YEARS} years.`
  },
  {
    icon: <Shield size={32} className="text-red-600" />,
    title: `${WARRANTY_YEARS}-Year Warranty`,
    desc: "Peace of mind comes standard. We stand behind our materials with a robust manufacturer warranty."
  },
  {
    icon: <Hammer size={32} className="text-red-600" />,
    title: "Expert Installation",
    desc: "Our crews are highly trained, ensuring every shingle is placed with perfection to withstand harsh weather."
  },
  {
    icon: <Award size={32} className="text-red-600" />,
    title: "Complete Coverage",
    desc: "Our quotes aren't just for shingles. We cover all labor, materials, and cleanup. No hidden fees."
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Excellence Guaranteed</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Castro's Roofing?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h4>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Built to Outlast the Storm</h3>
              <p className="text-gray-400 text-lg mb-8">
                Your roof is your home's first line of defense. At Castro's Roofing LLC, we don't just "shingle" a roof; we build a complete weather-protection system.
              </p>
              <ul className="space-y-4">
                {[
                  "Double-layered leak protection",
                  "High-wind resistance shingles",
                  "Complete decking inspection",
                  "Thorough site cleanup & nail sweep"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-red-500" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1505027492977-1037f14c46fa?auto=format&fit=crop&q=80&w=1000" 
                alt="Roofers working" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
