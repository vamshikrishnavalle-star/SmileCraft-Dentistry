
import React, { useState, useEffect, useRef } from 'react';

const Counter: React.FC<{ end: number; duration?: number; suffix?: string; decimals?: number }> = ({ end, duration = 2000, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* SECTION 0: Doctor Profile (White) */}
      <section className="pt-48 pb-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 reveal-container rounded-glow overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
                alt="Dr. Julian Miller"
                className="h-[600px] w-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-glow-accent rounded-full -z-10"></div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-glow-blue font-black uppercase tracking-widest text-[10px] mb-4 block opacity-50">Meet Your Dentist</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-glow-blue mb-8 leading-[1.1] tracking-tight">
              Dr. Julian Miller, <span className="italic font-light">DDS</span>
            </h1>
            <p className="text-2xl font-medium text-glow-blue/70 mb-8 italic">Board Certified Aesthetic Specialist</p>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                Dr. Miller graduated at the top of his class from the NYU College of Dentistry and completed his advanced residency in Prosthodontics at UCLA.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-gray-100">
              <div>
                 <p className="text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={98} suffix="%" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Satisfaction</p>
              </div>
              <div>
                 <p className="text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={5000} suffix="+" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Smiles Transformed</p>
              </div>
              <div>
                 <p className="text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={4.9} decimals={1} suffix="★" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Team Section (Blue) */}
      <section className="py-32 bg-glow-blue text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Our Experts</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">The Smile Team</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: 'Sarah Evans', role: 'Clinical Director' },
              { name: 'David Cho', role: 'Master Ceramist' },
              { name: 'Elena Rossi', role: 'Patient Coordinator' },
              { name: 'Mark Wilson', role: 'Lead Hygienist' }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 rounded-glow-small overflow-hidden aspect-square grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-white/10">
                  <img src={`https://picsum.photos/id/${100 + i}/600/600`} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h4 className="font-bold text-xl">{member.name}</h4>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Office Tour (White) */}
      <section className="py-32 bg-white text-glow-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-glow-accent/30 rounded-[60px] p-12 lg:p-24 border border-glow-accent/50">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
              <div className="lg:w-1/2">
                <span className="text-[10px] font-black uppercase tracking-widest text-glow-blue/40 mb-4 block">The Facility</span>
                <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1]">A Sanctuary for Your <span className="italic font-light">Smile</span></h2>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              ].map((url, i) => (
                <div key={i} className="reveal-container rounded-glow-small h-80 overflow-hidden shadow-lg border border-white/50">
                  <img
                    src={url}
                    alt={`Office View ${i+1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
