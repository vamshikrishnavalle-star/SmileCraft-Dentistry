
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Veneers', 'Whitening', 'Invisalign', 'Full Makeover'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-charcoal mb-6">Smile Gallery</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore the transformations our patients have experienced. Real people, real results, real confidence.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-medical-blue text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group animate-fadeIn">
              <BeforeAfterSlider before={item.before} after={item.after} className="h-64 mb-4" />
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-medical-blue bg-blue-50 px-2 py-1 rounded mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-charcoal">{item.description}</h3>
                  <p className="text-xs text-gray-400 mt-1">Completion time: {item.timeframe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 bg-charcoal rounded-[40px] p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-3xl font-bold mb-6 relative z-10">Ready for Your Own Transformation?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">Join thousands of others who have trusted SmileCraft to reveal their best self.</p>
          <Link to="/book" className="inline-block px-10 py-4 bg-trust-gold hover:bg-yellow-600 text-white font-bold rounded-full transition-all shadow-xl relative z-10">
            Book My Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
