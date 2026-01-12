import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold heading-font tracking-tighter">
              <span className="text-red-600">CASTRO'S</span> <span className="text-gray-900">ROOFING</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                  } hover:text-red-600 font-medium transition`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700 transition"
            >
              Get Free Estimate
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 p-2" aria-label="Toggle Menu">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 px-4 space-y-2 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={toggleMenu}
            className={`block py-3 font-medium border-b border-gray-50 ${isActive(link.path) ? 'text-red-600' : 'text-gray-700'
              }`}
          >
            {link.name}
          </Link>
        ))}
        <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="flex items-center gap-2 py-4 text-red-600 font-bold">
          <Phone className="w-5 h-5" /> {PHONE_NUMBER}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
