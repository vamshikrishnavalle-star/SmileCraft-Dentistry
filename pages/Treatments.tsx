import React from 'react';
import { SERVICES } from '../constants.tsx';
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
      <section className="pt-32 sm:pt-48 pb-16 lg:pb-24 bg-white px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-glow-blue mb-6 lg:mb-8 tracking-tighter leading-[1.1]">Signature Treatments</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto italic font-light">Discover the art and science behind our most popular aesthetic procedures.</p>
        </div>
      </section>

      {/* Services List with alternating colors */}
      {SERVICES.map((s, index) => {
        const isBlue = index % 2 === 0; 
        return (
          <section key={s.id} id={s.id} className={`py-16 sm:py-24 lg:py-32 px-4 md:px-6 lg:px-12 ${isBlue ? 'bg-glow-blue text-white' : 'bg-white text-glow-blue'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                <div className="relative">
                  <img
                    src={getServiceImage(s.id)}
                    alt={s.title}
                    className={`rounded-[30px] sm:rounded-[40px] shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover border ${isBlue ? 'border-white/10' : 'border-gray-100'}`}
                  />
                  <div className={`absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] shadow-2xl flex items-center space-x-4 border ${isBlue ? 'bg-white text-glow-blue border-white/10' : 'bg-glow-blue text-white border-gray-100'}`}>
                    <div>
                      <p className={`text-[8px] sm:text-[10px] font-black uppercase tracking-widest ${isBlue ? 'text-gray-400' : 'text-white/40'}`}>Starting At</p>
                      <p className="text-xl sm:text-2xl font-black">{s.costRange}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 mt-8 lg:mt-0">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">{s.title}</h2>
                <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-medium ${isBlue ? 'text-white/80' : 'text-gray-600'}`}>
                  {s.longDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                  <div className={`p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border ${isBlue ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                    <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Expected Outcomes</h4>
                    <p className={`text-sm leading-relaxed ${isBlue ? 'text-white/70' : 'text-gray-500'}`}>{s.outcomes}</p>
                  </div>
                  <div className={`p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border ${isBlue ? 'bg-white/10 border-white/20' : 'bg-glow-accent border-glow-accent'}`}>
                    <h4 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4">Pre-Treatment Needs</h4>
                    <p className={`text-sm leading-relaxed ${isBlue ? 'text-white/70' : 'text-gray-500'}`}>{s.preRequirements}</p>
                  </div>
                </div>

                <Link to="/book" className={`w-full py-4 sm:py-6 rounded-full text-lg sm:text-xl font-black flex justify-between items-center px-8 sm:px-10 shadow-2xl transition-all hover:scale-[1.02] ${isBlue ? 'bg-white text-glow-blue' : 'bg-glow-blue text-white'}`}>
                  <span>Schedule {s.title}</span>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
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