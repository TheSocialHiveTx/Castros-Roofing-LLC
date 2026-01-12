import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "How long does a typical roof replacement take?",
            answer: "Most standard residential roof replacements are completed in 1-2 days. Factors like weather, roof size, and complexity can affect this timeline, but we strive to minimize disruption to your schedule."
        },
        {
            question: "Do you offer warranties on your work?",
            answer: "Yes! We provide a 10-year workmanship warranty on all full roof replacements. Additionally, we use high-quality materials that come with their own manufacturer warranties, typically ranging from 25 years to lifetime coverage."
        },
        {
            question: "Will my insurance cover the cost of a new roof?",
            answer: "If your roof has been damaged by a storm (wind, hail, falling debris), your homeowners insurance policy may cover the replacement. We have extensive experience working with insurance adjusters and can help guide you through the claims process."
        },
        {
            question: "How do I know if I need a repair or a full replacement?",
            answer: "Age and extent of damage are key factors. If your roof is over 20 years old or has widespread damage, replacement is often more cost-effective. Minor leaks or missing shingles on a newer roof can usually be repaired. We offer free inspections to give you an honest assessment."
        },
        {
            question: "What types of roofing materials do you install?",
            answer: "We primarily install high-quality architectural asphalt shingles due to their durability and cost-effectiveness. We also work with metal roofing and flat roof systems for specific applications."
        },
        {
            question: "Do I need to be home during the installation?",
            answer: "You strictly don't need to be home, but we recommend being reachable by phone in case unforeseen issues arise. We do ask that vehicles be moved from the driveway and fragile items secured inside."
        }
    ];

    return (
        <div className="pt-20">
            <div className="bg-gray-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Answers to common questions about roofing, insurance, and our process.
                    </p>
                </div>
            </div>

            <div className="py-20 px-4 max-w-4xl mx-auto">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>

            <div className="bg-red-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <HelpCircle className="w-8 h-8 opacity-80" />
                            <h3 className="text-2xl font-bold uppercase">Still have questions?</h3>
                        </div>
                        <p className="text-white/80 max-w-md">
                            We're here to help! Give us a call or send us an email and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <a href="#contact" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold uppercase hover:bg-gray-100 transition shadow-lg">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition"
            >
                <span className="font-bold text-lg text-gray-900 pr-8">{question}</span>
                {isOpen ? (
                    <Minus className="text-red-600 shrink-0" />
                ) : (
                    <Plus className="text-gray-400 shrink-0" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
