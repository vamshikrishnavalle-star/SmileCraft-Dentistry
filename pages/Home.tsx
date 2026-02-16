import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CLINIC_DETAILS } from '../constants';

const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES[1].id);

  return (
    <div className="animate-fadeIn">
      {/* SECTION 0: Hero Section (White) */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl lg:text-[100px] font-bold text-glow-blue leading-[0.9] tracking-tight mb-8">
              Caring for Your <br />
              <span className="italic font-light">Smile</span>, One Visit <br />
              at a Time.
            </h1>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
              Your smile is more than just an expression, it's a reflection of your confidence, health, and happiness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg flex items-center group transition-all hover:scale-[1.02] shadow-2xl">
                Set Appointment
                <svg className="w-5 h-5 ml-3 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <a 
                href={CLINIC_DETAILS.bookingUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg flex items-center group transition-all hover:scale-[1.02] shadow-2xl"
              >
                Book Instantly
              </a>
            </div>

            {/* Partner Logos Strip */}
            <div className="mt-20 flex flex-wrap items-center gap-10 opacity-20">
               <span className="text-2xl font-bold font-serif text-glow-blue">Basecamp</span>
               <span className="text-2xl font-bold font-serif text-glow-blue">DocuSign</span>
               <span className="text-2xl font-bold font-serif text-glow-blue">hopin</span>
               <span className="text-2xl font-bold font-serif text-glow-blue">attentive</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="reveal-container rounded-glow aspect-[4/5] shadow-2xl overflow-hidden border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
                 alt="Radiant Smile" 
                 className="w-full h-full object-cover"
               />
               
               {/* Overlay Floating Badge */}
               <div className="absolute top-[20%] left-[-10%] bg-white/95 backdrop-blur-md p-6 rounded-glow-small shadow-2xl w-[260px] animate-fadeIn hidden xl:block border border-white/50 text-glow-blue">
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="ml-auto text-[8px] font-bold text-gray-300 tracking-widest uppercase">GlowDent Product</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-glow-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                        <p className="text-sm font-black leading-tight">Glowing Toothbrush</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Bristle Type</p>
                      <p className="text-xs font-bold">Soft</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Handle</p>
                      <p className="text-xs font-bold">Ergonomic</p>
                    </div>
                  </div>
               </div>
               
               <div className="absolute top-4 right-4">
                  <Link to="/book" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
                    Contact <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: About Us (Blue) */}
      <section className="py-32 bg-glow-blue text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-6">
              <span className="text-sm font-bold text-white/60 uppercase tracking-widest">About Us</span>
              <span className="text-sm font-bold text-white/30">(01)</span>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="rounded-glow overflow-hidden h-[500px] relative border border-white/10 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                   alt="Clinical Excellence" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center group cursor-pointer hover:bg-white/30 transition-all shadow-xl text-white">
                    <svg className="w-8 h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                We create lasting relationships — built on <span className="italic font-light text-white/80">trust and care.</span> Our team is committed to making <span className="italic font-light text-white/80">every visit comfortable.</span>
              </h2>
              
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
                <div>
                   <p className="text-4xl lg:text-5xl font-bold text-white">98%</p>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-2">Satisfaction</p>
                </div>
                <div>
                   <p className="text-4xl lg:text-5xl font-bold text-white">5,000+</p>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-2">Smiles Transformed</p>
                </div>
                <div>
                   <p className="text-4xl lg:text-5xl font-bold text-white">4.9★</p>
                   <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-2">Star Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Services (White) */}
      <section className="py-32 px-6 lg:px-12 bg-white text-glow-blue">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 border-b border-gray-100 pb-6">
             <span className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-bold text-gray-400 uppercase tracking-widest">Our Services</span>
             <span className="text-sm font-bold text-gray-400 opacity-50">(02)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div className="space-y-4">
               {SERVICES.map((service, i) => (
                 <button 
                   key={service.id}
                   onMouseEnter={() => setActiveService(service.id)}
                   className={`w-full text-left py-10 border-b border-gray-100 flex justify-between items-center group transition-all ${activeService === service.id ? 'opacity-100' : 'opacity-30 hover:opacity-100'}`}
                 >
                   <div className="flex items-baseline space-x-6">
                     <span className={`text-5xl lg:text-6xl font-bold tracking-tighter transition-all ${activeService === service.id ? 'animate-slideUpFade' : ''}`}>
                       {service.title}
                     </span>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">0{i+1}</span>
                   </div>
                 </button>
               ))}
             </div>

             <div className="hidden lg:block relative">
               <div className="sticky top-40 bg-glow-accent rounded-glow p-12 h-[650px] overflow-hidden flex flex-col justify-between shadow-sm border border-gray-50">
                  <img 
                    src={SERVICES.find(s => s.id === activeService)?.id === 'cosmetic' ? "https://images.unsplash.com/photo-1594539829551-456096046e72?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"} 
                    alt="Service Preview" 
                    className="rounded-glow-small h-72 w-full object-cover mb-8 shadow-xl"
                  />
                  <div className="space-y-6">
                    <p className="text-2xl font-medium leading-relaxed">
                      A confident <span className="italic">smile</span> changes everything! Our {SERVICES.find(s => s.id === activeService)?.title} enhances your teeth's beauty.
                    </p>
                  </div>
                  <Link to="/treatments" className="bg-black text-white rounded-full py-5 px-10 text-lg flex justify-between group transition-all hover:scale-[1.02] shadow-lg">
                    Read More
                    <svg className="w-6 h-6 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Testimonials (Blue) */}
      <section className="py-32 px-6 lg:px-12 bg-glow-blue text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-start mb-20 border-b border-white/10 pb-6">
             <span className="px-4 py-1.5 border border-white/20 rounded-full text-sm font-bold text-white/60 uppercase tracking-widest">Testimonials</span>
             <span className="text-sm font-bold text-white/30">(03)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative">
                <div className="rounded-glow overflow-hidden w-full h-[600px] shadow-2xl border border-white/10">
                  <img src={TESTIMONIALS[0].image} className="w-full h-full object-cover" alt="Happy patient" />
                </div>
             </div>
             <div className="space-y-12">
                <p className="text-4xl lg:text-6xl font-medium leading-tight tracking-tight">
                  — The best <span className="italic text-white/80">dental experience</span> I've ever had! The team was so <span className="italic text-white/80">professional</span> and made me feel <span className="italic text-white/80">comfortable.</span>
                </p>
                <div className="flex items-center justify-between pt-10 border-t border-white/10 text-white">
                   <div>
                     <p className="text-2xl font-bold">{TESTIMONIALS[0].name}</p>
                     <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Brenda - Customer</p>
                   </div>
                   <div className="text-right">
                      <p className="text-5xl font-black text-white">4.5<span className="text-2xl opacity-30">/5</span></p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Final CTA (White) */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto bg-glow-blue rounded-glow p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
           <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12">
              <h2 className="text-5xl lg:text-[80px] font-bold leading-[1] max-w-2xl tracking-tighter">
                Illuminate Your <span className="italic font-light text-white/80">Smile</span> with Confidence & Care
              </h2>
              <div className="w-full lg:w-1/3">
                <Link to="/book" className="flex items-center justify-between border-b border-white/20 pb-4 mb-20 group hover:border-white transition-all text-xl font-medium text-white">
                  Send email to us
                  <div className="w-10 h-10 flex items-center justify-center transform group-hover:rotate-45 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </Link>
                <div className="grid grid-cols-2 gap-y-12 gap-x-8 text-white">
                   <div>
                     <p className="text-[9px] font-bold uppercase tracking-widest mb-2 opacity-40">Location</p>
                     <p className="text-xs leading-relaxed text-white/80">{CLINIC_DETAILS.address}</p>
                   </div>
                   <div>
                     <p className="text-[9px] font-bold uppercase tracking-widest mb-2 opacity-40">Call Us</p>
                     <p className="text-xs leading-relaxed text-white/80">{CLINIC_DETAILS.phone}</p>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;