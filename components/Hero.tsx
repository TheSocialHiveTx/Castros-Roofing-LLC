
import React from 'react';
import { ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { SPECIAL_OFFER_PRICE, MAX_SQFT_FOR_OFFER } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632759162351-375eaa30b777?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern roof shingles" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              TOP RATED ROOFING EXPERTS
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              PROTECTING YOUR HOME WITH <span className="text-red-600">PRECISION.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Expert craftsmanship, high-quality materials, and a price that can't be beat. Join thousands of satisfied homeowners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote-calculator" className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition transform hover:-translate-y-1 shadow-xl">
                Get Your Quote <ArrowRight size={20} />
              </a>
              <a href="#special-offer" className="flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                View Special Offer
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg leading-tight">10-YEAR</p>
                  <p className="text-gray-400 text-sm">Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div className="text-white">
                  <p className="font-bold text-lg leading-tight">30-YEAR</p>
                  <p className="text-gray-400 text-sm">Shingle Life</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-lg transform rotate-6">
                <p className="text-sm font-bold opacity-80">STARTING UNDER</p>
                <p className="text-4xl font-black">${SPECIAL_OFFER_PRICE}</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800" 
                alt="House with new roof" 
                className="rounded-xl mb-6"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Guaranteed Pricing</h3>
                <p className="text-gray-600">
                  If your roof is under {MAX_SQFT_FOR_OFFER} sqft, you're guaranteed a full replacement for less than ${SPECIAL_OFFER_PRICE}.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    Architectural Shingles Included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    All Labor & Materials Included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
