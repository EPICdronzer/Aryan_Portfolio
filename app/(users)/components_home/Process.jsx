'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label + divider fade in
      gsap.fromTo('.process-label', {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // Heading clip-path wipe reveal
      gsap.fromTo('.process-heading', {
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0,
      }, {
        clipPath: 'inset(0 0 0% 0)',
        opacity: 1,
        duration: 0.9,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // Process cards — stagger up from below
      gsap.fromTo('.process-card', {
        y: 70,
        opacity: 0,
        scale: 0.96,
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-card',
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[400px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Tiny uppercase label */}
        <div className="process-label mb-4 flex flex-col items-center">
          <span className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase">
            Process
          </span>
          {/* Centered line divider */}
          <div className="w-16 h-[1.5px] bg-[#22d3ee]/40 mt-2 shadow-[0_0_8px_rgba(34,211,238,0.2)]" />
        </div>

        {/* Section Heading */}
        <div className="process-heading mb-20 text-center max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            MY WORKING<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)', color: 'transparent' }}>
              PROCESS
            </span>
          </h3>
        </div>

        {/* Flex container on mobile (enabling sticky stack containing block), grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch relative pb-0">
          
          {/* Step 01 */}
          <div className="process-card sticky top-[100px] z-10 md:relative md:top-auto md:z-auto p-8 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 hover:border-[#22d3ee]/30 hover:bg-[#121216] transition-all duration-300 flex flex-col justify-between h-auto md:h-full group hover:translate-y-[-5px] md:hover:translate-y-[-5px] shadow-[0_12px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Dim Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
              alt="Research Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Outline number */}
              <div 
                className="text-6xl md:text-7xl font-extrabold tracking-widest transition-colors duration-300 group-hover:text-cyan-500/10"
                style={{ WebkitTextStroke: '1.5px rgba(34, 211, 238, 0.5)', color: 'transparent' }}
              >
                01
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-wide text-zinc-100 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                  Research
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Analyzing your core audience, competitor hooks, and current TikTok/Reels benchmarks. We isolate the optimal pacing guidelines and visual motifs.
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="process-card sticky top-[150px] z-20 md:relative md:top-auto md:z-auto p-8 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 hover:border-[#22d3ee]/30 hover:bg-[#121216] transition-all duration-300 flex flex-col justify-between h-auto md:h-full group hover:translate-y-[-5px] md:hover:translate-y-[-5px] shadow-[0_12px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Dim Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80" 
              alt="Strategy Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Outline number */}
              <div 
                className="text-6xl md:text-7xl font-extrabold tracking-widest transition-colors duration-300 group-hover:text-cyan-500/10"
                style={{ WebkitTextStroke: '1.5px rgba(34, 211, 238, 0.5)', color: 'transparent' }}
              >
                02
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-wide text-zinc-100 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                  Strategy
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Drafting script flowboards and timing retention hooks. We structure content to secure a high viewer retention rate in the critical first three seconds.
                </p>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="process-card sticky top-[200px] z-30 md:relative md:top-auto md:z-auto p-8 rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 hover:border-[#22d3ee]/30 hover:bg-[#121216] transition-all duration-300 flex flex-col justify-between h-auto md:h-full group hover:translate-y-[-5px] md:hover:translate-y-[-5px] shadow-[0_12px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Dim Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" 
              alt="Design Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Outline number */}
              <div 
                className="text-6xl md:text-7xl font-extrabold tracking-widest transition-colors duration-300 group-hover:text-cyan-500/10"
                style={{ WebkitTextStroke: '1.5px rgba(34, 211, 238, 0.5)', color: 'transparent' }}
              >
                03
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-bold tracking-wide text-zinc-100 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                  Design
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Executing precision cuts in DaVinci Resolve, blending generative Kling/Sora AI visual layers, and layering advanced sound effects and pacing assets.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
