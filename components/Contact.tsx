
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
            <p className="text-xl text-gray-600 mb-10">
              Ready to get started? Reach out via the form, or give us a call directly for an immediate response.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-red-600 p-4 rounded-2xl shadow-lg shadow-red-600/20">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-red-600 uppercase tracking-widest">Call or Text</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-2xl font-bold text-gray-900 hover:text-red-600 transition">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <Mail className="text-gray-900" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                  <a href={`mailto:${EMAIL}`} className="text-xl font-bold text-gray-900 hover:text-red-600 transition">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <MapPin className="text-gray-900" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Serving</p>
                  <p className="text-xl font-bold text-gray-900">The Greater Houston Area & Surrounding Locations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">Thank you for reaching out. Mr. Castro will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Approx. Square Footage</label>
                  <input type="number" placeholder="Optional" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl text-lg hover:bg-red-700 transition shadow-lg shadow-red-600/30">
                  Request Your Free Estimate
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
