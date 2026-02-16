
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  before: string;
  after: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<Props> = ({ before, after, className = '' }) => {
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const relativeX = x - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setPosition(percentage);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-ew-resize rounded-2xl shadow-2xl select-none group ${className}`}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
      aria-label="Before and after image comparison slider"
    >
      {/* "After" Image (Background) */}
      <img 
        src={after} 
        alt="After transformation" 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" 
      />

      {/* "Before" Image (Clipped Overlay) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden border-r border-white/30 z-10"
        style={{ width: `${position}%` }}
      >
        <img 
          src={before} 
          alt="Before transformation" 
          className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none" 
          style={{ width: containerWidth }}
        />
      </div>

      {/* Control Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl transform -translate-x-1/2 group-hover:scale-110 transition-transform border border-gray-100">
          <svg className="w-6 h-6 text-medical-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l-4 4m0 0l4 4m-4-4h16m0 0l-4-4m4 4l-4 4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-charcoal shadow-sm">
          Before
        </span>
      </div>
      <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-charcoal shadow-sm">
          After
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
