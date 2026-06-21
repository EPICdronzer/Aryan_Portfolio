'use client';

import { useEffect, useState, useRef } from 'react';

// Smooth Counter Component using requestAnimationFrame (triggers when visible)
function Counter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    const endValue = parseInt(target, 10);
    if (isNaN(endValue)) return;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = percentage * (2 - percentage);
      const currentVal = Math.floor(easeProgress * endValue);
      
      setCount(currentVal);

      if (progress < duration) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(animate);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={countRef} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { 
    target: "25", 
    suffix: "+", 
    label: <>Tutorials<br />Edited</>, 
    color: "text-white" 
  },
  { 
    target: "600", 
    suffix: "+", 
    label: <>Engineered<br />Prompts</>, 
    color: "text-[#22d3ee] drop-shadow-[0_0_10px_rgba(34,211,238,0.15)]" 
  },
  { 
    target: "980", 
    suffix: "K+", 
    label: <>Campaign<br />Views</>, 
    color: "text-white" 
  }
];

export default function Intro() {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-[15%] w-[40%] h-[300px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full space-y-16 relative z-10 flex flex-col items-center">
        
        {/* Creative Description block (Centered Style) */}
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Centered glowing cyan bullet point */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">Hybrid Creative</span>
          </div>
          
          <p className="text-zinc-300 text-lg md:text-xl lg:text-2xl leading-relaxed font-light font-sans tracking-wide">
            a <span className="text-white font-medium">Hybrid Creative</span> bridging the gap between high-end post-production and generative AI. I blend the precision of <span className="text-[#22d3ee] font-semibold">DaVinci Resolve</span> with bleeding-edge tools like <span className="text-white font-medium">Sora 2</span>, <span className="text-white font-medium">Veo</span>, and <span className="text-white font-medium">Kling</span> to create scroll-stopping visuals. From editing 25+ tutorials to engineering a library of 600+ production-ready prompts, I combine technical storytelling with viral retention strategies. I’ve driven <span className="text-[#22d3ee] font-semibold">980,000+ views</span> for a single campaign and secured exclusive access to restricted models—because I don't just edit content; I evolve it.
          </p>
        </div>

        {/* Desktop Statistics Row (visible sm screens and above) */}
        <div className="hidden sm:grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto w-full border-t border-zinc-800/40 pt-12 px-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1 group">
              <span className={`text-4xl md:text-5xl font-black ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-zinc-500 uppercase text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Auto-Swiper Statistics (visible only on mobile) */}
        <div className="sm:hidden flex flex-col items-center space-y-6 w-full border-t border-zinc-800/40 pt-12 px-4">
          <div className="relative h-[90px] w-full flex items-center justify-center select-none">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center space-y-1 transition-all duration-700 ease-in-out transform ${
                  idx === activeStat
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <span className={`text-4xl font-black ${stat.color}`}>
                  {idx === activeStat ? (
                    <Counter target={stat.target} suffix={stat.suffix} />
                  ) : (
                    <span className="font-extrabold tracking-tight">
                      {stat.target}
                      {stat.suffix}
                    </span>
                  )}
                </span>
                <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase text-center leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center space-x-2 pt-2">
            {stats.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStat(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeStat ? "w-6 bg-[#22d3ee]" : "w-1.5 bg-zinc-800 hover:bg-zinc-700"
                }`}
                aria-label={`Go to stat ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
