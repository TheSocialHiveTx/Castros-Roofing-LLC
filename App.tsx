
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-200 selection:text-red-900">
      <Navbar />

      <main>
        <Hero />



        <Features />



        <Calculator />

        {/* Portfolio / Recent Work (Placeholders) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
                <h3 className="text-4xl lg:text-5xl font-bold">Recent Projects</h3>
              </div>
              <a href="#contact" className="text-gray-900 font-bold flex items-center gap-2 hover:text-red-600 transition group">
                Request a Site Visit <div className="w-10 h-0.5 bg-gray-300 group-hover:bg-red-600 transition"></div>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1541888941255-276f956f20dd?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
              ].map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-xl">Full Replacement</p>
                      <p className="text-white/70">Houston, TX</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-3xl font-bold heading-font tracking-tighter mb-6 block">
              <span className="text-red-600">CASTRO'S</span> ROOFING
            </span>
            <p className="text-gray-400 mb-8 max-w-md">
              High-quality roofing services in the Houston area. We specialize in residential roof replacements, repairs, and home improvement projects with unmatched pricing.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">FB</div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">IG</div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition cursor-pointer">TW</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-white transition">Our Services</a></li>

              <li><a href="#quote-calculator" className="hover:text-white transition">Quick Quote</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>{PHONE_NUMBER}</li>
              <li>{EMAIL}</li>
              <li>Serving Houston & Surrounding Areas</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
