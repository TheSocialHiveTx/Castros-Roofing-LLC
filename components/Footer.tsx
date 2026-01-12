import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { PHONE_NUMBER, EMAIL } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <span className="text-3xl font-bold heading-font tracking-tighter mb-6 block uppercase">
                        <span className="text-red-600">CASTRO'S</span> ROOFING
                    </span>
                    <p className="text-gray-400 mb-8 max-w-md">
                        Professional roofing services for the Houston area. We specialize in residential roof replacements, repairs,
                        and home improvement with industry-leading pricing.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                            <Facebook size={20} />
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                            <Instagram size={20} />
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">
                            <Twitter size={20} />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 uppercase">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400 font-medium">
                        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white transition">Our Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
                        <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 uppercase">Contact Info</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li>{PHONE_NUMBER}</li>
                        <li>{EMAIL}</li>
                        <li>Houston, Texas</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Castro's Roofing LLC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
