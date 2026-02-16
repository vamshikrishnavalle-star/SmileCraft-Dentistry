import React from 'react';

const Counter: React.FC<{ end: number; duration?: number; suffix?: string; decimals?: number }> = ({ end, duration = 2000, suffix = '', decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
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

  React.useEffect(() => {
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
      <section className="pt-32 sm:pt-48 pb-20 px-4 md:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 reveal-container rounded-[30px] sm:rounded-glow overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
                alt="Dr. Julian Miller"
                className="h-[400px] sm:h-[600px] w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 bg-glow-accent rounded-full -z-10"></div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-glow-blue font-black uppercase tracking-widest text-[8px] sm:text-[10px] mb-4 block opacity-50">Meet Your Dentist</span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-glow-blue mb-6 lg:mb-8 leading-[1.1] tracking-tight">
              Dr. Julian Miller, <span className="italic font-light">DDS</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-glow-blue/70 mb-6 lg:mb-8 italic">Board Certified Aesthetic Specialist</p>
            <div className="space-y-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Dr. Miller graduated at the top of his class from the NYU College of Dentistry and completed his advanced residency in Prosthodontics at UCLA.
              </p>
              <p className="hidden sm:block">
                With over a decade of experience, he combines artistic vision with clinical precision to transform smiles across Hyderabad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-10 mt-10 border-t border-gray-100">
              <div>
                 <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={98} suffix="%" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Satisfaction</p>
              </div>
              <div>
                 <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={5000} suffix="+" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Smiles Transformed</p>
              </div>
              <div>
                 <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-glow-blue"><Counter end={4.9} decimals={1} suffix="★" /></p>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Team Section (Blue) */}
      <section className="py-20 lg:py-32 bg-glow-blue text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 border-b border-white/10 pb-8 text-center sm:text-left gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Our Experts</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">The Smile Team</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { name: 'Sarah Evans', role: 'Clinical Director', id: 101 },
              { name: 'David Cho', role: 'Master Ceramist', id: 102 },
              { name: 'Elena Rossi', role: 'Patient Coordinator', id: 103 },
              { name: 'Mark Wilson', role: 'Lead Hygienist', id: 104 }
            ].map((member, i) => (
              <div key={i} className="group text-center lg:text-left">
                <div className="relative mb-6 rounded-2xl sm:rounded-glow-small overflow-hidden aspect-square grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl border border-white/10 max-w-[280px] mx-auto lg:mx-0">
                  <img src={`https://picsum.photos/id/${member.id}/600/600`} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl">{member.name}</h4>
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Office Tour (White) */}
      <section className="py-20 lg:py-32 bg-white text-glow-blue">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="bg-glow-accent/30 rounded-[30px] sm:rounded-[60px] p-6 sm:p-12 lg:p-24 border border-glow-accent/50">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-12 sm:mb-20 text-center lg:text-left">
              <div className="lg:w-2/3">
                <span className="text-[10px] font-black uppercase tracking-widest text-glow-blue/40 mb-4 block">The Facility</span>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] lg:leading-[1]">A Sanctuary for Your <span className="italic font-light">Smile</span></h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
              ].map((url, i) => (
                <div key={i} className="reveal-container rounded-2xl h-64 sm:h-80 overflow-hidden shadow-lg border border-white/50">
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