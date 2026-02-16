
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Treatments: React.FC = () => {
  const getServiceImage = (id: string) => {
    switch (id) {
      case 'orthodontics': return "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200";
      case 'cosmetic': return "https://images.unsplash.com/photo-1594539829551-456096046e72?auto=format&fit=crop&q=80&w=1200";
      case 'restoration': return "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200";
      default: return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200";
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* SECTION 0: Header (White) */}
      <section className="pt-48 pb-24 bg-white px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-glow-blue mb-8 tracking-tighter">Signature Treatments</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl italic font-light">Discover the art and science behind our most popular aesthetic procedures.</p>
        </div>
      </section>

      {/* Services List with alternating colors */}
      {SERVICES.map((s, index) => {
        const isBlue = index % 2 === 0; // First service (0) is Blue, second (1) is White, etc.
        return (
          <section key={s.id} id={s.id} className={`py-32 px-6 lg:px-12 ${isBlue ? 'bg-glow-blue text-white' : 'bg-white text-glow-blue'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 sticky top-32">
                <div className="relative">
                  <img
                    src={getServiceImage(s.id)}
                    alt={s.title}
                    className={`rounded-[40px] shadow-2xl w-full h-[500px] object-cover border ${isBlue ? 'border-white/10' : 'border-gray-100'}`}
                  />
                  <div className={`absolute -bottom-6 -right-6 p-6 rounded-[24px] shadow-2xl flex items-center space-x-4 border ${isBlue ? 'bg-white text-glow-blue border-white/10' : 'bg-glow-blue text-white border-gray-100'}`}>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest ${isBlue ? 'text-gray-400' : 'text-white/40'}`}>Starting At</p>
                      <p className="text-2xl font-black">{s.costRange}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-10">
                <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">{s.title}</h2>
                <p className={`text-xl leading-relaxed font-medium ${isBlue ? 'text-white/80' : 'text-gray-600'}`}>
                  {s.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className={`p-8 rounded-[32px] border ${isBlue ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Expected Outcomes</h4>
                    <p className={`text-sm leading-relaxed ${isBlue ? 'text-white/70' : 'text-gray-500'}`}>{s.outcomes}</p>
                  </div>
                  <div className={`p-8 rounded-[32px] border ${isBlue ? 'bg-white/10 border-white/20' : 'bg-glow-accent border-glow-accent'}`}>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Pre-Treatment Needs</h4>
                    <p className={`text-sm leading-relaxed ${isBlue ? 'text-white/70' : 'text-gray-500'}`}>{s.preRequirements}</p>
                  </div>
                </div>

                <Link to="/book" className={`w-full py-6 rounded-full text-xl font-black flex justify-between px-10 shadow-2xl transition-all hover:scale-[1.02] ${isBlue ? 'bg-white text-glow-blue' : 'bg-glow-blue text-white'}`}>
                  Schedule {s.title}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Treatments;
