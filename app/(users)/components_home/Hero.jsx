'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [time, setTime] = useState('');

  // Live-updating Clock showing Local Time & Timezone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const timeZoneStr = new Intl.DateTimeFormat('en-US', { 
        timeZoneName: 'short' 
      }).formatToParts(now).find(part => part.type === 'timeZoneName')?.value || 'GMT';

      setTime(`${timeStr} ${timeZoneStr}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#070709] text-white overflow-hidden flex flex-col items-center justify-end pb-12 pt-32 px-6 md:px-20 lg:px-32">
      
      {/* 1. Concentric Circles (Centered behind the face of the portrait) */}
      <div className="absolute top-[40%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-0">
        {/* Ring 1 (Inner) */}
        <div className="absolute rounded-full border border-zinc-800/60 w-[260px] h-[260px] animate-pulse" />
        
        {/* Ring 2 */}
        <div className="absolute rounded-full border border-zinc-800/40 w-[420px] h-[420px]" />
        
        {/* Ring 3 */}
        <div className="absolute rounded-full border border-zinc-800/25 w-[600px] h-[600px]" />
        
        {/* Ring 4 */}
        <div className="absolute rounded-full border border-zinc-800/12 w-[800px] h-[800px]" />
        
        {/* Ring 5 (Outer) */}
        <div className="absolute rounded-full border border-zinc-800/5 w-[1020px] h-[1020px]" />
      </div>

      {/* 2. Black and White Floating 3D Objects */}
      {/* Floating Torus (Left) */}
      <div className="absolute top-[22%] left-[6%] md:left-[10%] lg:left-[15%] animate-float-all-1 z-10 pointer-events-none">
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-45 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]"
        >
          <defs>
            <radialGradient id="torusGradGS" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#27272a" />
            </radialGradient>
          </defs>
          <path
            d="M 100 30 C 138.66 30, 170 61.34, 170 100 C 170 138.66, 138.66 170, 100 170 C 61.34 170, 30 138.66, 30 100 C 30 61.34, 61.34 30, 100 30 Z M 100 65 C 119.33 65, 135 80.67, 135 100 C 135 119.33, 119.33 135, 100 135 C 80.67 135, 65 119.33, 65 100 C 65 80.67, 80.67 65, 100 65 Z"
            fill="url(#torusGradGS)"
          />
        </svg>
      </div>

      {/* Floating Worm (Right) */}
      <div className="absolute top-[32%] right-[6%] md:right-[10%] lg:right-[15%] animate-float-all-2 z-10 pointer-events-none">
        <svg
          width="110"
          height="110"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-55 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]"
        >
          <defs>
            <linearGradient id="spiralGradGS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>
          <path
            d="M50,100 C30,70 60,30 100,30 C140,30 170,70 150,100 C130,130 160,170 100,170 C40,170 70,130 50,100 Z"
            fill="none"
            stroke="url(#spiralGradGS)"
            strokeWidth="28"
            strokeLinecap="round"
          />
          <path
            d="M60,100 C45,78 68,48 100,48 C132,48 155,78 140,100"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-20"
          />
        </svg>
      </div>

      {/* Floating Sphere (Lower Left) */}
      <div className="absolute bottom-[25%] left-[8%] md:left-[12%] animate-float-all-2 z-10 pointer-events-none">
        <svg
          width="75"
          height="75"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-40 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]"
        >
          <defs>
            <radialGradient id="sphereGradGS" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#18181b" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="40" fill="url(#sphereGradGS)" />
        </svg>
      </div>

      {/* Floating Cone (Upper Right) */}
      <div className="absolute top-[20%] right-[8%] md:right-[12%] animate-float-all-1 z-10 pointer-events-none">
        <svg
          width="85"
          height="85"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-45 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]"
        >
          <defs>
            <linearGradient id="coneGradGS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#52525b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
          </defs>
          <path d="M50 15 L85 80 L15 80 Z" fill="url(#coneGradGS)" />
        </svg>
      </div>

      {/* 3. Badges and Text Elements positioned around the rings */}
      {/* Top Left: Role badge */}
      {/* <div className="absolute top-[18%] left-[5%] md:left-[10%] lg:left-[15%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161a]/60 border border-zinc-800/40 backdrop-blur-sm shadow-md pointer-events-auto z-30 select-none">
        <span className="text-sm">🎬</span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">AI Video Editor</span>
      </div> */}
      
      {/* Top Right: Location coordinates (Hidden on Mobile) */}
      <div className="hidden md:block absolute top-[18%] right-[5%] md:right-[10%] lg:right-[15%] text-right pointer-events-auto z-30 select-none">
        <span className="block text-[11px] font-black tracking-widest text-[#22d3ee] uppercase">
          28.6139° N, 77.2090° E
        </span>
        <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider">
          New Delhi, India
        </span>
      </div>
{/* 
      

      <div className="absolute top-[48%] right-[5%] md:right-[10%] lg:right-[15%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161a]/60 border border-zinc-800/40 backdrop-blur-sm shadow-md pointer-events-auto z-30 select-none">
        <span className="text-sm">🤖</span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Generative Creator</span>
      </div> */}

      

        

      {/* 4. Center Portrait and Name Overlay (Strict layering) */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-end z-20">
        
        {/* Grayscale Portrait (No Circle Container, transparent background, slightly smaller dimensions) */}
        <div className="relative w-72 h-80 sm:w-80 sm:h-[380px] md:w-[380px] md:h-[440px] z-10 pointer-events-none select-none flex items-end justify-center">
          <img
            src="/img2.png"
            alt="Aryan Chopra Portrait"
            className="w-full h-full object-contain filter grayscale contrast-110 brightness-95 select-none pointer-events-none transform scale-[1.08] transition-transform duration-700 hover:scale-112"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* Foreground Content wrapper - pulled up with negative margin to overlap name over the chest/shoulders */}
        <div className="relative -mt-20 sm:-mt-24 md:-mt-32 z-20 flex flex-col items-center text-center select-none w-full">
          {/* Cursive subtitle Hello, I'm */}
          <div className="font-cursive text-3xl md:text-4xl text-zinc-100 tracking-wide select-none">
            Hello, I'm
          </div>

          {/* Big Cyan Block Text Name overlay */}
          <h1 className="font-block text-[15vw] sm:text-[13vw] md:text-[11vw] text-[#22d3ee] font-black uppercase leading-[0.85] tracking-normal select-none mt-1 drop-shadow-[0_8px_20px_rgba(34,211,238,0.25)]">
            Aryan Chopra
          </h1>

          {/* CTA Buttons Row (Clickable) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md px-6 pointer-events-auto">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-widest text-black bg-[#22d3ee] hover:bg-[#06b6d4] active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(34,211,238,0.25)] uppercase cursor-pointer"
            >
              HIRE ME!
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1k1cTc4Wl2fUQTuxikBrh4qJfO_j78agS/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-widest text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-300 uppercase cursor-pointer"
            >
              VIEW CV
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
