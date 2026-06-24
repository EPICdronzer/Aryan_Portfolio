'use client';

import { useState, useEffect, useRef } from 'react';
import { CONFIG } from '@/config';
import gsap from 'gsap';

export default function Hero() {
  const [time, setTime] = useState('');
  const sectionRef = useRef(null);

  // Live-updating Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      const timeZoneStr = new Intl.DateTimeFormat('en-US', {
        timeZoneName: 'short'
      }).formatToParts(now).find(p => p.type === 'timeZoneName')?.value || 'GMT';
      setTime(`${timeStr} ${timeZoneStr}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Concentric rings — scale in from 0, inner-to-outer stagger
      tl.fromTo('.hero-ring', {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.55)',
      }, 0);

      // 2. Floating 3D objects — fly in from left/right
      tl.fromTo('.hero-float-left', {
        x: -140,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
      }, 0.2);

      tl.fromTo('.hero-float-right', {
        x: 140,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
      }, 0.2);

      // 3. Badges slide in from their sides
      tl.fromTo('.hero-badge-left', {
        x: -50,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      }, 0.55);

      tl.fromTo('.hero-badge-right', {
        x: 50,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      }, 0.55);

      // 4. Portrait — slides up and fades in
      tl.fromTo('.hero-portrait', {
        y: 80,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      }, 0.35);

      // 5. "Hello, I'm" cursive subtitle
      tl.fromTo('.hero-subtitle', {
        y: 28,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
      }, 0.9);

      // 6. Big name — clip-path wipe reveal from bottom
      tl.fromTo('.hero-name', {
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0,
      }, {
        clipPath: 'inset(0 0 0% 0)',
        opacity: 1,
        duration: 0.95,
        ease: 'power4.out',
      }, 1.05);

      // 7. CTA buttons pop up with stagger
      tl.fromTo('.hero-cta', {
        y: 28,
        opacity: 0,
        scale: 0.95,
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        stagger: 0.14,
        ease: 'back.out(1.5)',
      }, 1.3);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#070709] text-white overflow-hidden flex flex-col items-center justify-end pb-12 pt-32 px-6 md:px-20 lg:px-32"
    >
      
      {/* 1. Concentric Circles */}
      <div className="absolute top-[40%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-0">
        <div className="hero-ring absolute rounded-full border border-zinc-800/60 w-[260px] h-[260px] animate-pulse" />
        <div className="hero-ring absolute rounded-full border border-zinc-800/40 w-[420px] h-[420px]" />
        <div className="hero-ring absolute rounded-full border border-zinc-800/25 w-[600px] h-[600px]" />
        <div className="hero-ring absolute rounded-full border border-zinc-800/12 w-[800px] h-[800px]" />
        <div className="hero-ring absolute rounded-full border border-zinc-800/5 w-[1020px] h-[1020px]" />
      </div>

      {/* 2. Floating Torus (Left) */}
      <div className="hero-float-left absolute top-[22%] left-[6%] md:left-[10%] lg:left-[15%] animate-float-all-1 z-10 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="opacity-45 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]">
          <defs>
            <radialGradient id="torusGradGS" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#27272a" />
            </radialGradient>
          </defs>
          <path d="M 100 30 C 138.66 30, 170 61.34, 170 100 C 170 138.66, 138.66 170, 100 170 C 61.34 170, 30 138.66, 30 100 C 30 61.34, 61.34 30, 100 30 Z M 100 65 C 119.33 65, 135 80.67, 135 100 C 135 119.33, 119.33 135, 100 135 C 80.67 135, 65 119.33, 65 100 C 65 80.67, 80.67 65, 100 65 Z" fill="url(#torusGradGS)" />
        </svg>
      </div>

      {/* Floating Worm (Right) */}
      <div className="hero-float-right absolute top-[32%] right-[6%] md:right-[10%] lg:right-[15%] animate-float-all-2 z-10 pointer-events-none">
        <svg width="110" height="110" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="opacity-55 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]">
          <defs>
            <linearGradient id="spiralGradGS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>
          <path d="M50,100 C30,70 60,30 100,30 C140,30 170,70 150,100 C130,130 160,170 100,170 C40,170 70,130 50,100 Z" fill="none" stroke="url(#spiralGradGS)" strokeWidth="28" strokeLinecap="round" />
          <path d="M60,100 C45,78 68,48 100,48 C132,48 155,78 140,100" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" className="opacity-20" />
        </svg>
      </div>

      {/* Floating Sphere (Lower Left) */}
      <div className="hero-float-left absolute bottom-[25%] left-[8%] md:left-[12%] animate-float-all-2 z-10 pointer-events-none">
        <svg width="75" height="75" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="opacity-40 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]">
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
      <div className="hero-float-right absolute top-[20%] right-[8%] md:right-[12%] animate-float-all-1 z-10 pointer-events-none">
        <svg width="85" height="85" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="opacity-45 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]">
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

      {/* Floating Role Badge: Top Left */}
      <div className="hero-badge-left hidden md:flex absolute top-[18%] left-[5%] md:left-[10%] lg:left-[15%] items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161a]/60 border border-zinc-800/40 backdrop-blur-sm shadow-md pointer-events-auto z-30 select-none">
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">AI Video Editor</span>
      </div>

      {/* Top Right: Location coordinates */}
      <div className="hero-badge-right hidden md:block absolute top-[18%] right-[5%] md:right-[10%] lg:right-[15%] text-right pointer-events-auto z-30 select-none">
        <span className="block text-[11px] font-black tracking-widest text-[#22d3ee] uppercase">28.6139° N, 77.2090° E</span>
        <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider">New Delhi, India</span>
      </div>

      {/* Floating Generative Creator badge: Right mid */}
      <div className="hero-badge-right hidden md:flex absolute top-[48%] right-[5%] md:right-[10%] lg:right-[15%] items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161a]/60 border border-zinc-800/40 backdrop-blur-sm shadow-md pointer-events-auto z-30 select-none">
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Generative Creator</span>
      </div>

      {/* Floating stats badge: Left mid */}
      <div className="hero-badge-left hidden lg:flex absolute top-[48%] left-[5%] lg:left-[12%] flex-col gap-1 px-4 py-3 rounded-2xl bg-[#16161a]/60 border border-zinc-800/40 backdrop-blur-sm shadow-md pointer-events-auto z-30 select-none">
        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Campaign Views</span>
        <span className="text-xl font-black text-[#22d3ee] tracking-tight">980K+</span>
      </div>

      {/* 4. Center Portrait and Name Overlay */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-end z-20">
        
        <div className="hero-portrait relative w-72 h-80 sm:w-80 sm:h-[380px] md:w-[380px] md:h-[440px] z-10 pointer-events-none select-none flex items-end justify-center">
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

        <div className="relative -mt-20 sm:-mt-24 md:-mt-32 z-20 flex flex-col items-center text-center select-none w-full">
          <div className="hero-subtitle font-cursive text-3xl md:text-4xl text-zinc-100 tracking-wide select-none">
            Hello, I'm
          </div>

          <h1 className="hero-name font-block text-[15vw] sm:text-[13vw] md:text-[11vw] text-[#22d3ee] font-black uppercase leading-[0.85] tracking-normal select-none mt-1 drop-shadow-[0_8px_20px_rgba(34,211,238,0.25)]">
            Aryan Chopra
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md px-6 pointer-events-auto">
            <a
              href={`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent("Hi Aryan! I'd like to hire you for a project. Let's talk!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-widest text-black bg-[#22d3ee] hover:bg-[#06b6d4] active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(34,211,238,0.25)] uppercase cursor-pointer"
            >
              HIRE ME!
            </a>
            <a
              href="https://drive.google.com/file/d/1k1cTc4Wl2fUQTuxikBrh4qJfO_j78agS/view?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold tracking-widest text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-300 uppercase cursor-pointer"
            >
              VIEW CV
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
