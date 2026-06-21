'use client';

import { useRef, useState, useEffect } from 'react';

// Helper: extract YouTube video ID from any YouTube URL (watch or shorts)
function getYTId(url) {
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

function YouTubeCard({ url, title }) {
  const [active, setActive] = useState(false);
  const id = getYTId(url);
  const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;

  return (
    <div
      className="group relative aspect-square rounded-xl overflow-hidden bg-[#0e0e12]/80 border border-zinc-800/60 hover:border-cyan-500/40 shadow-xl transition-all duration-500 ease-out cursor-pointer w-full h-full"
      onClick={() => setActive(true)}
    >
      {active ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* Thumbnail */}
          {thumb && (
            <img
              src={thumb}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          {/* Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] opacity-25 pointer-events-none" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/70 border border-white/20 group-hover:bg-[#22d3ee] group-hover:border-transparent group-hover:scale-110 shadow-2xl transition-all duration-400 flex items-center justify-center">
              <span className="text-white text-lg ml-1 group-hover:text-black transition-colors">▶</span>
            </div>
          </div>
          {/* Title bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors truncate">{title}</p>
          </div>
          {/* Live dot */}
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </>
      )}
    </div>
  );
}

function VideoSkeletonCard({ title = "Campaign Preview" }) {
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden bg-[#0e0e12]/80 border border-zinc-800/60 hover:border-cyan-500/40 shadow-xl transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between p-4 w-full h-full">
      
      {/* Glimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
      
      {/* Scanline/Noise mock effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-35 pointer-events-none group-hover:opacity-50 transition-opacity" />

      {/* Top Tag */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/40 text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
          Auto Play
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-cyan-500 animate-pulse transition-colors" />
      </div>

      {/* Centered Glowing Play Icon (Interactive Skeleton) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/80 group-hover:bg-[#22d3ee] group-hover:text-black group-hover:border-transparent group-hover:scale-110 shadow-2xl transition-all duration-500 flex items-center justify-center">
          <span className="text-sm ml-0.5 group-hover:translate-x-px group-hover:scale-105 transition-transform">
            ▶
          </span>
        </div>
      </div>

      {/* Bottom info progress tracker */}
      <div className="relative z-10 w-full space-y-2">
        {/* Mock progress bar */}
        <div className="w-full h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/40">
          <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] transition-all duration-1000 ease-out" />
        </div>

        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
          <span>{title}</span>
          <span>0:00 / 0:15</span>
        </div>
      </div>

    </div>
  );
}

function Carousel({ children }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkScrollLimits();

    // Attach scroll and resize event listeners
    container.addEventListener('scroll', checkScrollLimits);
    window.addEventListener('resize', checkScrollLimits);

    // Run a quick double check after mount to account for render timings
    const timer = setTimeout(checkScrollLimits, 300);

    return () => {
      container.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
      clearTimeout(timer);
    };
  }, [children]);

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.firstElementChild;
    if (!card) return;

    // Width of card + gap spacing (gap-4 is 16px)
    const cardWidth = card.getBoundingClientRect().width + 16;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full group/carousel pb-14 md:pb-0 md:px-12">
      {/* Carousel Track Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 select-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      {/* Left Button */}
      <button
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous Slide"
        className="absolute z-20 w-10 h-10 rounded-full bg-zinc-950/90 border border-zinc-800 text-white hover:border-[#22d3ee] hover:text-[#22d3ee] flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] cursor-pointer disabled:opacity-0 disabled:pointer-events-none
          bottom-0 left-1/2 -translate-x-[calc(50%+24px)]
          md:bottom-auto md:left-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Next Slide"
        className="absolute z-20 w-10 h-10 rounded-full bg-zinc-950/90 border border-zinc-800 text-white hover:border-[#22d3ee] hover:text-[#22d3ee] flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] cursor-pointer disabled:opacity-0 disabled:pointer-events-none
          bottom-0 left-1/2 translate-x-[calc(-50%+48px)]
          md:bottom-auto md:right-0 md:left-auto md:top-1/2 md:translate-x-1/2 md:-translate-y-1/2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

const tools = [
  {
    name: "DaVinci Resolve",
    level: "96%",
    desc: "Color Grading & Post-production",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9">
        <circle cx="50" cy="36" r="20" fill="#ef4444" opacity="0.95" />
        <circle cx="36" cy="62" r="20" fill="#22c55e" opacity="0.95" />
        <circle cx="64" cy="62" r="20" fill="#3b82f6" opacity="0.95" />
      </svg>
    )
  },
  {
    name: "Premiere Pro",
    level: "98%",
    desc: "High-speed Cut & Assembly",
    icon: (
      <div className="w-9 h-9 bg-[#110022] border border-[#ea77ff]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#ea77ff] select-none font-sans">
        Pr
      </div>
    )
  },
  {
    name: "After Effects",
    level: "94%",
    desc: "Motion Design & VFX",
    icon: (
      <div className="w-9 h-9 bg-[#0b001a] border border-[#d580ff]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#d580ff] select-none font-sans">
        Ae
      </div>
    )
  },
  {
    name: "Photoshop",
    level: "92%",
    desc: "Thumbnail Art & Graphics",
    icon: (
      <div className="w-9 h-9 bg-[#000a1a] border border-[#31a8ff]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#31a8ff] select-none font-sans">
        Ps
      </div>
    )
  },
  {
    name: "Audition",
    level: "90%",
    desc: "Sound Foley & Audio Cleanup",
    icon: (
      <div className="w-9 h-9 bg-[#00150a] border border-[#00e5a3]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#00e5a3] select-none font-sans">
        Au
      </div>
    )
  },
  {
    name: "Figma",
    level: "88%",
    desc: "Moodboards & Layout Design",
    icon: (
      <svg viewBox="0 0 38 57" className="w-6 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E" />
        <path d="M38 9.5C38 4.25 33.75 0 28.5 0H19V19H28.5C33.75 19 38 14.75 38 9.5Z" fill="#FF7262" />
        <path d="M19 19H9.5C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19Z" fill="#A259FF" />
        <path d="M38 28.5C38 23.25 33.75 19 28.5 19H19V38H28.5C33.75 38 38 33.75 38 28.5Z" fill="#1ABCFE" />
        <path d="M19 38H9.5C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38Z" fill="#0ACF83" />
      </svg>
    )
  }
];

const skills = [
  {
    name: "Narrative Pacing",
    level: "98%",
    desc: "Engaging retention cut flow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    )
  },
  {
    name: "Color Science",
    level: "95%",
    desc: "Cinematic look & grades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34241 19.4975 6.00227 19.8 6.7 19.8C7.5 19.8 8.1 19.2 8.1 18.4C8.1 17.8 7.7 17.3 7.5 16.7C7.2 15.9 7 15 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C11 19 10.1 18.7 9.4 18.2C9 17.9 8.5 17.8 8 18.2C6.8 19.2 5.5 20.5 4.85857 21C6.7 21.8 9.3 22 12 22Z" />
        <circle cx="7.5" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="11.5" cy="7.5" r="1" fill="currentColor"/>
        <circle cx="16.5" cy="9.5" r="1" fill="currentColor"/>
        <circle cx="15.5" cy="14.5" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "Sound Design",
    level: "94%",
    desc: "Atmospheres & Foley",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="3" height="4" rx="1" />
        <rect x="8" y="6" width="3" height="12" rx="1" />
        <rect x="14" y="3" width="3" height="18" rx="1" />
        <rect x="20" y="8" width="3" height="8" rx="1" />
      </svg>
    )
  },
  {
    name: "AI Integration",
    level: "92%",
    desc: "Gen B-Roll & Smart Editing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    name: "Thumbnail Strategy",
    level: "90%",
    desc: "Click-through rate designs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
      </svg>
    )
  },
  {
    name: "Script & Hook Analysis",
    level: "95%",
    desc: "Viral hook structuring",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  }
];

export default function Showcase() {
  const [skillsTab, setSkillsTab] = useState('tools');

  return (
    <section id="work" className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-0 w-[50%] h-[350px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[50%] h-[350px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Section 1: Informative and Tutorials */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              Informative and Tutorials
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Transforming complex information into clear, compelling, and memorable video lessons that captivate your audience.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/shorts/pU9K-dE1WmI', title: 'Tutorial Short #1' },
              { url: 'https://www.youtube.com/watch?v=jwaXpanqnZY&t=7s', title: 'Informative Deep Dive' },
              { url: 'https://www.youtube.com/shorts/rQ_yIAVokx4', title: 'Quick Tutorial #3' },
              { url: 'https://www.youtube.com/watch?v=mQHWh4PcZZw&t=7s', title: 'Explainer Video' },
              { url: 'https://www.youtube.com/shorts/Q6-8svA2NpM', title: 'Tutorial Short #5' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Section 1.5: Personal Services Accordion Grid (Mockup 2 Layout) */}
        <div className="space-y-8 border-t border-zinc-900/60 pt-16">
          {/* Mockup Top Header Row */}
          <div className="border-b border-zinc-800/60 pb-4 flex justify-between items-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <span></span>
            <span>[ Services ]</span>
            <span></span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4 pb-12">
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
              LET'S ACHIEVE<br />
              <span className="text-[#22d3ee]">GREATNESS</span>
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Ready to evolve your content and scale your audience? Let's discuss your next campaign.
            </p>
          </div>

          {/* Desktop View (visible on lg screens and above) */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-6 lg:w-full">
            
            {/* Top Row: Services 01 & 02 with side images 1 & 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              
              {/* Left Column Image 1 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_1.png" alt="AI video post-production workspace" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

              {/* Center Services Cards 01 & 02 */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Service 01: AI Video Editing */}
                <div className="p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[01]</span>
                    <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </div>
                  <div className="space-y-2 mt-12 relative z-10">
                    <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                      AI Video Editing
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      High-retention video post-production blending DaVinci Resolve with generative AI visual models for scroll-stopping shorts and reels.
                    </p>
                  </div>
                </div>

                {/* Service 02: Content Strategy */}
                <div className="p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[02]</span>
                    <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </div>
                  <div className="space-y-2 mt-12 relative z-10">
                    <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                      Content Strategy
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      Engineering competitor benchmarks, timing scripts, and viral hook framework structure to secure audience retention.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column Image 2 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_2.png" alt="Futuristic content analytics chart" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

            </div>

            {/* Bottom Row: Services 03 & 04 with side images 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
              
              {/* Left Column Image 3 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_3.png" alt="Cinematic professional camera rig" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

              {/* Center Services Cards 03 & 04 */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Service 03: Prompt Engineering */}
                <div className="p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[03]</span>
                    <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </div>
                  <div className="space-y-2 mt-12 relative z-10">
                    <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                      Prompt Engineering
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      Crafting custom text-to-video prompts, fine-tuning visual aesthetics, and securing early access to bleeding-edge video models.
                    </p>
                  </div>
                </div>

                {/* Service 04: AI Visual Assets */}
                <div className="p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                  <div className="flex justify-between items-start w-full relative z-10">
                    <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[04]</span>
                    <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </div>
                  <div className="space-y-2 mt-12 relative z-10">
                    <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                      AI Visual Assets
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      Creating generative b-roll renders, chromakey blends, and unique visual layers to replace traditional expensive studio shoots.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column Image 4 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_4.png" alt="Futuristic code streams and digital art" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

            </div>

          </div>

          {/* Mobile/Tablet View Carousel (visible only on screens smaller than lg) */}
          <div className="lg:hidden w-full">
            <Carousel>
              
              {/* Service 01: AI Video Editing */}
              <div className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-start p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                <div className="flex justify-between items-start w-full relative z-10">
                  <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[01]</span>
                  <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 mt-12 relative z-10">
                  <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                    AI Video Editing
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    High-retention video post-production blending DaVinci Resolve with generative AI visual models for scroll-stopping shorts and reels.
                  </p>
                </div>
              </div>

              {/* Service 02: Content Strategy */}
              <div className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-start p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                <div className="flex justify-between items-start w-full relative z-10">
                  <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[02]</span>
                  <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 mt-12 relative z-10">
                  <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                    Content Strategy
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    Engineering competitor benchmarks, timing scripts, and viral hook framework structure to secure audience retention.
                  </p>
                </div>
              </div>

              {/* Service 03: Prompt Engineering */}
              <div className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-start p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                <div className="flex justify-between items-start w-full relative z-10">
                  <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[03]</span>
                  <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 mt-12 relative z-10">
                  <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                    Prompt Engineering
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    Crafting custom text-to-video prompts, fine-tuning visual aesthetics, and securing early access to bleeding-edge video models.
                  </p>
                </div>
              </div>

              {/* Service 04: AI Visual Assets */}
              <div className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-start p-8 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 hover:bg-[#121216]/50 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.02] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.05] transition-all duration-500" />
                <div className="flex justify-between items-start w-full relative z-10">
                  <span className="text-[11px] font-bold text-zinc-500 tracking-wider">[04]</span>
                  <span className="text-zinc-600 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>
                <div className="space-y-2 mt-12 relative z-10">
                  <h4 className="text-xl font-bold tracking-wide text-zinc-200 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                    AI Visual Assets
                  </h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    Creating generative b-roll renders, chromakey blends, and unique visual layers to replace traditional expensive studio shoots.
                  </p>
                </div>
              </div>

            </Carousel>
          </div>
        </div>

        {/* Section 2: AI Enhanced Visuals */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              AI Enhanced Visuals
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Leveraging cutting-edge AI to craft unique, eye-catching visuals that make every second count.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/watch?v=Z3q1wBjtOOA&t=5s', title: 'AI Enhanced Visual #1' },
              { url: 'https://www.youtube.com/shorts/Rc02EPwSn9k', title: 'AI Short #2' },
              { url: 'https://www.youtube.com/shorts/vTnGYNpm4eE', title: 'AI Visual #3' },
              { url: 'https://www.youtube.com/shorts/TVLivpjeAhM', title: 'AI Short #4' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Section: Skills & Favorite Tools */}
        <div className="space-y-12 border-t border-zinc-900/60 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#22d3ee] uppercase block">
              Visit My Skill & Hire Me
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
              My Skills & Favorite Tools
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Explore the advanced editing software, post-production gear, and creative skills I use daily to craft visually stunning, high-retention content.
            </p>
          </div>

          {/* Toggle Switcher */}
          <div className="flex justify-center">
            <div className="bg-[#0e0e12]/80 border border-zinc-800/60 p-1.5 rounded-full flex items-center space-x-1 shadow-inner relative z-10">
              <button
                onClick={() => setSkillsTab('tools')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  skillsTab === 'tools'
                    ? 'bg-[#22d3ee] text-black shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tools
              </button>
              <button
                onClick={() => setSkillsTab('skills')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  skillsTab === 'skills'
                    ? 'bg-[#22d3ee] text-black shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Skills
              </button>
            </div>
          </div>

          {/* Skills Carousel */}
          <div className="relative z-10 pt-4 w-full">
            <Carousel>
              {(skillsTab === 'tools' ? tools : skills).map((item, idx) => (
                <div
                  key={idx}
                  className="w-[calc(50%-8px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(16.666%-13.33px)] shrink-0 snap-start rounded-full bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 flex flex-col items-center justify-between p-5 py-10 md:py-12 min-h-[290px] md:min-h-[320px] transition-all duration-500 ease-out cursor-pointer relative overflow-hidden group hover:-translate-y-1.5 hover:bg-[#121216]/50 shadow-xl hover:shadow-[0_12px_35px_-6px_rgba(34,211,238,0.3)]"
                >
                  {/* Top Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-zinc-950/60 border border-zinc-800/40 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:border-[#22d3ee]/20 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-1 flex-1 flex flex-col justify-center my-3">
                    <h4 className="text-xs md:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors uppercase tracking-wider">
                      {item.name}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-zinc-500 font-light group-hover:text-zinc-400 transition-colors px-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-sm font-black text-[#22d3ee] tracking-widest mt-2 group-hover:scale-105 transition-transform">
                    {item.level}
                  </div>

                  {/* Bottom glowing line on hover - Cyan theme instead of red line */}
                  <div className="absolute bottom-4 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
                  <div className="absolute -bottom-10 left-1/4 right-1/4 h-16 bg-[#22d3ee]/15 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Section 3: Dynamic Social Reels */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              Dynamic Social Reels
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Crafting high-energy, scroll-stopping social reels that grab attention in the first three seconds and hold it.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/shorts/bBU4qd--KEg', title: 'Scroll-Stopper Reel #1' },
              { url: 'https://www.youtube.com/shorts/TQs1V0PKCXA', title: 'Social Reel #2' },
              { url: 'https://www.youtube.com/shorts/bkSZpa4B8Y0', title: 'Dynamic Cut #3' },
              { url: 'https://www.youtube.com/shorts/1Eb-FVAFAlU', title: 'Viral Hook Reel #4' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

      </div>

    </section>
  );
}

