import React, { useState } from 'react';
import CostEstimator from '../components/CostEstimator.tsx';
import { FAQS } from '../constants.tsx';

const Pricing: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <div className="animate-fadeIn">
      {/* SECTION 0: Header & Estimator (White) */}
      <section className="pt-32 sm:pt-48 pb-20 lg:pb-32 bg-white px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-blue mb-6 tracking-tighter leading-[1.1]">Pricing & Financing</h1>
            <p className="text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto">We believe in transparent pricing and flexible options.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] shadow-2xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-black text-glow-blue mb-6 sm:mb-8">Base Pricing</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex justify-between pb-4 border-b border-gray-50">
                    <span className="text-sm sm:text-base text-gray-500 font-bold">Consultation</span>
                    <span className="text-sm sm:text-base font-black text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-50">
                    <span className="text-sm sm:text-base text-gray-500 font-bold">Whitening</span>
                    <span className="text-sm sm:text-base font-black text-glow-blue">₹15,000+</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-50">
                    <span className="text-sm sm:text-base text-gray-500 font-bold">Invisalign</span>
                    <span className="text-sm sm:text-base font-black text-glow-blue">₹1,50,000+</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-gray-50">
                    <span className="text-sm sm:text-base text-gray-500 font-bold">Veneers</span>
                    <span className="text-sm sm:text-base font-black text-glow-blue">₹25,000/u</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-glow-accent/50 rounded-2xl">
                    <p className="text-[10px] font-bold text-glow-blue uppercase tracking-widest mb-1">Financial Tip</p>
                    <p className="text-[11px] text-gray-600">Early payment discounts up to 5% apply to all upfront full payments.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <CostEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FAQs (Blue) */}
      <section className="py-20 lg:py-32 bg-glow-blue text-white px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">Questions?</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Find answers to common questions</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.id} className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden transition-all hover:bg-white/10">
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 sm:p-8 text-left flex justify-between items-center group"
                >
                  <span className="font-black text-lg sm:text-xl tracking-tight pr-4 leading-tight">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center transition-transform ${activeFaq === faq.id ? 'rotate-180 bg-white text-glow-blue' : 'group-hover:border-white'}`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {activeFaq === faq.id && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 animate-fadeIn">
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;