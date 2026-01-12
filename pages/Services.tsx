import React from 'react';
import { Shield, Hammer, Home, ClipboardCheck, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Services: React.FC = () => {
    const services = [
        {
            id: 'residential',
            title: 'Residential Roofing',
            description: 'Complete roof replacements for your home. We use high-quality architectural shingles that enhance your curb appeal and provide lasting protection.',
            icon: <Home className="w-12 h-12 text-red-600" />,
            features: ['Architectural Shingles', 'Leak Barrier Protection', 'Expert Ventilation', 'Clean Site Guarantee']
        },
        {
            id: 'repairs',
            title: 'Roof Repairs',
            description: 'From storm damage to minor leaks, our team can quickly assess and fix issues to prevent further damage to your home\'s interior.',
            icon: <Hammer className="w-12 h-12 text-red-600" />,
            features: ['Leak Detection', 'Shingle Replacement', 'Flashing Repair', 'Emergency Services']
        },
        {
            id: 'inspections',
            title: 'Roof Inspections',
            description: 'Detailed assessments of your roof\'s condition. Perfect for real estate transactions or checking for storm damage after severe weather.',
            icon: <ClipboardCheck className="w-12 h-12 text-red-600" />,
            features: ['Comprehensive Report', 'Photos Included', 'Damage Assessment', 'Free for Homeowners']
        },
        {
            id: 'gutters',
            title: 'Gutters & Siding',
            description: 'Complete your home\'s exterior protection with our gutter and siding services. We ensure proper water diversion and aesthetic appeal.',
            icon: <Shield className="w-12 h-12 text-red-600" />,
            features: ['Seamless Gutters', 'Gutter Guards', 'Vinyl Siding', 'Soffit & Fascia']
        }
    ];

    return (
        <div className="pt-20">
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Professional roofing solutions tailored to your needs. From minor repairs to full replacements, we've got you covered.
                    </p>
                </div>
            </div>

            <div className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition border border-gray-100">
                            <div className="p-8 md:p-12">
                                <div className="mb-6 bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition uppercase tracking-wide">
                                    Get an Estimate <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 uppercase">Ready to Start Your Project?</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Contact us today for a free, no-obligation estimate on any of our services.
                    </p>
                    <a
                        href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                        className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-600/20 uppercase"
                    >
                        Call {PHONE_NUMBER}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
