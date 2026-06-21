'use client';

import { useEffect, useState, useRef } from 'react';

// Smooth Counter Component
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
    if (countRef.current) observer.observe(countRef.current);
    return () => { if (countRef.current) observer.unobserve(countRef.current); };
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
      const easeProgress = percentage * (2 - percentage);
      setCount(Math.floor(easeProgress * endValue));
      if (progress < duration) window.requestAnimationFrame(animate);
      else setCount(endValue);
    };
    window.requestAnimationFrame(animate);
  }, [hasAnimated, target, duration]);

  return <span ref={countRef} className="font-extrabold tracking-tight">{count}{suffix}</span>;
}

const stats = [
  { target: "25",  suffix: "+",  label: "Tutorials\nEdited",      color: "from-zinc-900 to-zinc-950", accent: "text-white", bar: "bg-white" },
  { target: "600", suffix: "+",  label: "Engineered\nPrompts",    color: "from-cyan-950/40 to-zinc-950", accent: "text-[#22d3ee]", bar: "bg-[#22d3ee]" },
  { target: "980", suffix: "K+", label: "Campaign\nViews",        color: "from-zinc-900 to-zinc-950", accent: "text-white", bar: "bg-white" },
];

const highlights = ["DaVinci Resolve", "Higgsfield", "Veo", "Kling"];

export default function Intro() {
  const [activeStat, setActiveStat] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setActiveStat((p) => (p + 1) % stats.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">

      {/* === BACKGROUND ELEMENTS === */}
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#22d3ee]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[100px] pointer-events-none" />
      {/* Top horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/20 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* ==============================
              LEFT COLUMN
          ============================== */}
          <div className="lg:col-span-6 flex flex-col space-y-8">

            {/* Top Tag Row */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                <span className="text-[9px] font-black tracking-[0.35em] text-zinc-500 uppercase">Hybrid Creative</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-zinc-800/80 to-transparent" />
              {/* Tech label pill */}
              <span className="text-[9px] font-bold tracking-widest text-[#22d3ee]/60 uppercase font-mono border border-[#22d3ee]/15 px-3 py-1 rounded-full">
                EST. 2020
              </span>
            </div>

            {/* Large display statement */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight">
                <span className="text-zinc-500 text-2xl md:text-3xl font-light block mb-1 tracking-widest">A</span>
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                  Post-Production
                </span>
                <br />
                <span
                  className="text-transparent font-black"
                  style={{ WebkitTextStroke: '1.5px rgba(34, 211, 238, 0.5)' }}
                >
                  Force Multiplier.
                </span>
              </h2>
            </div>

            {/* Body text with styled highlights */}
            <p className="text-zinc-400 text-sm md:text-base leading-[1.85] font-light max-w-lg">
              Bridging high-end post-production and generative AI—blending the precision of{' '}
              {highlights.map((h, i) => (
                <span key={h}>
                  <span className="text-white font-semibold relative inline-block group/hl">
                    {h}
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-[#22d3ee]/60 to-transparent scale-x-0 group-hover/hl:scale-x-100 transition-transform duration-300 origin-left" />
                  </span>
                  {i < highlights.length - 1 ? (i === highlights.length - 2 ? ' & ' : ', ') : ''}
                </span>
              ))}{' '}
              to create scroll-stopping visuals. Engineering{' '}
              <span className="text-[#22d3ee] font-semibold">600+ production-ready prompts</span>,
              driving <span className="text-[#22d3ee] font-semibold">980K+ campaign views</span>,
              and securing exclusive access to restricted models—because I don't just edit content; I <em className="not-italic text-white font-semibold">evolve</em> it.
            </p>

            {/* Stats — desktop horizontal cards */}
            <div className="hidden sm:flex items-stretch gap-4 pt-4">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStat(idx)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className={`relative flex-1 rounded-2xl bg-gradient-to-b ${s.color} border border-zinc-800/60 p-4 overflow-hidden transition-all duration-300 cursor-default
                    ${hoveredStat === idx ? 'border-[#22d3ee]/40 shadow-[0_8px_30px_rgba(34,211,238,0.1)] scale-[1.02]' : ''}`}
                >
                  {/* Number */}
                  <div className={`text-3xl font-black ${s.accent} leading-none mb-1`}>
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  {/* Label */}
                  <div className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase leading-tight whitespace-pre-line">
                    {s.label}
                  </div>
                  {/* Bottom accent bar */}
                  <div className={`absolute bottom-0 left-0 h-0.5 ${s.bar} opacity-30 transition-all duration-500 ${hoveredStat === idx ? 'right-0' : 'right-3/4'}`} />
                </div>
              ))}
            </div>

            {/* Stats — mobile auto-swiper */}
            <div className="sm:hidden flex flex-col items-center space-y-5 w-full border-t border-zinc-800/40 pt-8">
              <div className="relative h-[90px] w-full flex items-center justify-center select-none">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 flex flex-col items-center justify-center space-y-1 transition-all duration-700 ease-in-out ${
                      idx === activeStat ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <span className={`text-4xl font-black ${stat.accent}`}>
                      {idx === activeStat ? <Counter target={stat.target} suffix={stat.suffix} /> : `${stat.target}${stat.suffix}`}
                    </span>
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase text-center leading-tight whitespace-pre-line">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                {stats.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStat(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeStat ? "w-6 bg-[#22d3ee]" : "w-1.5 bg-zinc-800"}`}
                    aria-label={`Stat ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ==============================
              RIGHT COLUMN — CREATIVE IMAGE
          ============================== */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end select-none pointer-events-none">
            <div className="relative w-full max-w-md lg:max-w-none">

              {/* Outer ambient glow */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#22d3ee]/15 via-cyan-800/5 to-blue-600/10 blur-3xl pointer-events-none" />

              {/* Tilted background duplicate (depth layer) */}
              <div
                className="absolute inset-4 rounded-2xl overflow-hidden border border-zinc-700/20 opacity-40"
                style={{ transform: 'rotate(3deg) scale(0.97)' }}
              >
                <img src="/intro_workstation.png" alt="" className="w-full h-full object-cover filter grayscale contrast-75 brightness-40" />
              </div>

              {/* Main image card */}
              <div
                className="relative rounded-2xl overflow-hidden border border-zinc-700/50 shadow-[0_32px_100px_rgba(0,0,0,0.8)] bg-zinc-950"
                style={{ transform: 'rotate(-1.5deg)' }}
              >
                <img
                  src="/intro_workstation.png"
                  alt="AI editing workstation"
                  className="w-full object-cover filter contrast-110 brightness-85"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
                  }}
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.06)_50%)] bg-[size:100%_4px] opacity-40 pointer-events-none" />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent pointer-events-none" />

                {/* === VIEWFINDER CORNERS === */}
                {/* Top-left */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#22d3ee]/70 rounded-tl-sm" />
                {/* Top-right */}
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#22d3ee]/70 rounded-tr-sm" />
                {/* Bottom-left */}
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#22d3ee]/70 rounded-bl-sm" />
                {/* Bottom-right */}
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#22d3ee]/70 rounded-br-sm" />

                {/* Top status bar */}
                <div className="absolute top-0 left-0 right-0 px-5 py-2.5 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                    <span className="text-[8px] font-black tracking-[0.3em] text-[#22d3ee]/80 uppercase font-mono">Studio Setup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
              </div>

              {/* === FLOATING STAT CARDS (overlapping image) === */}

              {/* Card 1: Views — bottom left, jutting out */}
              <div
                className="absolute -bottom-5 -left-6 bg-[#0c0c0e]/90 border border-[#22d3ee]/30 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(34,211,238,0.12)] z-20"
                style={{ transform: 'rotate(1.5deg)' }}
              >
                <span className="text-[8px] font-black tracking-widest text-zinc-500 uppercase block mb-0.5 font-mono">Campaign Views</span>
                <span className="text-2xl font-black text-[#22d3ee] leading-none">980K+</span>
              </div>

              {/* Card 2: Active Since — top right, jutting out */}
              <div
                className="absolute -top-4 -right-5 bg-[#0c0c0e]/90 border border-zinc-700/60 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl z-20"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <span className="text-[8px] font-black tracking-widest text-zinc-600 uppercase block font-mono">Active Since</span>
                <span className="text-lg font-black text-white leading-tight">2020</span>
              </div>

              {/* Card 3: Prompts — right side, mid */}
              <div
                className="absolute top-1/2 -right-8 -translate-y-1/2 bg-[#0c0c0e]/90 border border-zinc-800/80 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl z-20 flex flex-col items-center"
                style={{ transform: 'translateY(-50%) rotate(1deg)' }}
              >
                <span className="text-[8px] font-mono font-black tracking-widest text-zinc-600 uppercase">Prompts</span>
                <span className="text-xl font-black text-white leading-none">600+</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/50 to-transparent mt-1" />
              </div>

              {/* Decorative dots grid on the right side */}
              <div
                className="absolute -right-4 top-8 bottom-8 w-6 flex flex-col justify-between items-center opacity-20 pointer-events-none z-10"
              >
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#22d3ee]" />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
