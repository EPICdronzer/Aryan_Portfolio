'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Simulate non-linear progress loading
      const increment = Math.floor(Math.random() * 8) + 3;
      current = Math.min(current + increment, 100);
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setVisible(false);
          }, 600); // match transition duration
        }, 300);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709] transition-all duration-700 ease-in-out ${
      fadeOut ? 'opacity-0 translate-y-[-100%]' : 'opacity-100'
    }`}>
      
      {/* Background glowing cyan-blue orb */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-6 z-10 text-center select-none">
        
        {/* Glowing AR Brand Logo */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-cyan-500/20 bg-zinc-950/60 shadow-[0_0_30px_rgba(34,211,238,0.15)] animate-pulse p-4">
          <img src="/favicon.png" alt="AR Logo" className="w-12 h-12 object-contain" />
        </div>

        {/* Loading Message */}
        <div className="space-y-1.5">
          <span className="block text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">
            Initializing AI Pipeline
          </span>
          <span className="block text-2xl font-extrabold tracking-widest text-white">
            {count}%
          </span>
        </div>

        {/* Simple Progress Bar */}
        <div className="w-48 h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/40">
          <div 
            className="h-full bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] transition-all duration-300 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>

      </div>

    </div>
  );
}
