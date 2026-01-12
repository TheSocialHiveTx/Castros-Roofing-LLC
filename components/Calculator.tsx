
import React, { useState } from 'react';
import { Calculator as CalcIcon, Info, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Calculator: React.FC = () => {
  const [sqft, setSqft] = useState<number | ''>('');
  const [result, setResult] = useState<'qualifies' | 'custom' | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof sqft === 'number') {
      setResult('qualifies'); // Just show "Ready" state
    }
  };

  return (
    <section id="quote-calculator" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Your Estimate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter your information below to get started on your roof replacement project.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="p-10 bg-gray-900 text-white">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <CalcIcon size={28} />
              <h3 className="text-2xl font-bold uppercase tracking-tight">Price Estimate</h3>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">
                  Estimated Roof Size (SQ FT)
                </label>
                <input
                  type="number"
                  value={sqft}
                  onChange={(e) => setSqft(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="e.g. 2400"
                  className="w-full bg-gray-800 border-gray-700 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-red-600/20"
              >
                Calculate Now
              </button>
            </form>

            <div className="mt-10 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <Info className="text-red-500 shrink-0" size={20} />
              <p className="text-sm text-gray-400">
                Most standard 3-4 bedroom single-story homes fall under 3000 sqft. If you're unsure, we offer free on-site measurements!
              </p>
            </div>
          </div>

          <div className="p-10 flex flex-col justify-center items-center text-center">
            {result === null ? (
              <div className="opacity-40">
                <img src="https://picsum.photos/seed/roof/200/200" alt="Icon" className="mb-6 rounded-full grayscale" />
                <p className="text-xl font-medium text-gray-500">Enter your roof size to see your estimated price.</p>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">Estimate Request Ready!</h4>
                <p className="text-gray-600 mb-6">Based on your square footage, we can provide you with a competitive quote.</p>
                <a href="#contact" className="block w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition mb-4">
                  Contact Us Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
