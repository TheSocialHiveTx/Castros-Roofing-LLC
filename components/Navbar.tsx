
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold heading-font tracking-tighter">
              <span className="text-red-600">CASTRO'S</span> <span className="text-gray-900">ROOFING</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition">Services</a>
            <a href="#special-offer" className="text-gray-700 hover:text-red-600 font-medium transition">Special Offer</a>
            <a href="#quote-calculator" className="text-gray-700 hover:text-red-600 font-medium transition">Quick Quote</a>
            <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700 transition">
              Get Free Estimate
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 space-y-2">
          <a href="#services" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#special-offer" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Special Offer</a>
          <a href="#quote-calculator" className="block py-3 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Quick Quote</a>
          <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="flex items-center gap-2 py-3 text-red-600 font-bold">
            <Phone size={18} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
