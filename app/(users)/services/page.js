'use client';

import { useState } from 'react';
import { CONFIG } from '@/config';

export default function ServicesPage() {
  const [reels, setReels] = useState(4);
  const [longForm, setLongForm] = useState(1);
  const [addThumbnails, setAddThumbnails] = useState(false);
  const [addStrategy, setAddStrategy] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const items = container.children;
    if (!items || items.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let minDistance = Infinity;
    let activeIdx = 0;

    for (let i = 0; i < items.length; i++) {
      const child = items[i];
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        activeIdx = i;
      }
    }
    setActiveIndex(activeIdx);
  };

  const services = [
    {
      title: 'High-Retention Video Editing',
      desc: 'Fast assembly, pacing analysis, Foley sounds, custom music tracks, color grading, and dynamic kinetic captioning.',
      deliverables: ['DaVinci workflow cuts', 'Audio mastering', 'Color space matching'],
      bg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Generative AI Integrations',
      desc: 'Seamlessly blending generative video plates (Kling, Sora, Midjourney) into edit timelines to compose B-rolls.',
      deliverables: ['Custom visual expansion plates', 'Upscaling resolution assets', 'Prompt concept designs'],
      bg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Retention Hook Optimization',
      desc: 'Analyzing client scripts and hook concepts to optimize structure, timing, and visual framing for the first 3 critical seconds.',
      deliverables: ['Script flowboard reviews', 'Hook structure drafts', 'CTR competitor benchmarks'],
      bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Visual Branding & Packagings',
      desc: 'Custom channel designs, thumbnail templates, title graphics, and signature sound textures to establish visual brand consistency.',
      deliverables: ['Photoshop design layers', 'Motion transition loops', 'Signature audio transitions'],
      bg: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Dynamic Kinetic Typography',
      desc: 'Creating high-impact, synchronized text animations and custom subtitles to maximize readability and viewer focus.',
      deliverables: ['Custom text presets', 'Synchronized sound effects', 'Multi-language SRTs'],
      bg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cinematic Color Grading',
      desc: 'Applying tailored LUTs, correcting exposure, and balancing color tones to achieve a highly polished, professional cinematic aesthetic.',
      deliverables: ['Primary color correction', 'Custom creative look styling', 'HDR & Rec.709 color exports'],
      bg: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Advanced Sound Design',
      desc: 'Layering ambient soundscapes, risers, hits, and realistic Foley elements to construct an immersive audio environment.',
      deliverables: ['Multi-track audio mix', 'Foley sound library integration', 'Loudness level normalization'],
      bg: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'YouTube Strategy & SEO',
      desc: 'Strategic optimization of video metadata, titles, descriptions, and tags to trigger the recommendation algorithm and boost CTR.',
      deliverables: ['Keyword research map', 'A/B tested titles list', 'Algorithm-friendly description templates'],
      bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Interactive Motion Graphics',
      desc: 'Designing bespoke custom transitions, lower thirds, callouts, and interactive visual cues that match your brand identity.',
      deliverables: ['After Effects template files', 'Transparent alpha exports', 'Bespoke brand transitions'],
      bg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hi Aryan!\n\nI customized a package on your website services planner:\n` +
      `- Reels: ${reels} Videos / Month\n` +
      `- Long-Form Videos: ${longForm} Videos / Month\n` +
      `- Thumbnail Package: ${addThumbnails ? 'Yes' : 'No'}\n` +
      `- Strategy Calls: ${addStrategy ? 'Yes' : 'No'}\n\n` +
      `Let's connect and discuss starting this project!`
    );
    window.open(`https://wa.me/${CONFIG.phone}?text=${message}`, '_blank');
  };

  const handleServiceWhatsAppRedirect = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hi Aryan!\n\nI am interested in your "${serviceTitle}" service. Let's discuss starting this project!`
    );
    window.open(`https://wa.me/${CONFIG.phone}?text=${message}`, '_blank');
  };

  return (
    <div className="relative pt-32 pb-24 px-6 md:px-20 lg:px-32 text-white">
      {/* Background radial glow */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            03 / MY SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            POST-PRODUCTION & AI<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)', color: 'transparent' }}>
              VIDEO SERVICES
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Professional video engineering tailored for creators and founders looking to maximize retention and engagement.
          </p>
        </div>

        {/* Core Services Grid (Mobile Swipeable, Desktop Grid) */}
        <div>
          <div 
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 relative z-10 md:items-stretch"
          >
            {services.map((s, idx) => (
              <div
                key={idx}
                onClick={() => handleServiceWhatsAppRedirect(s.title)}
                className={`group snap-center shrink-0 w-[85%] sm:w-[48%] md:w-auto md:shrink p-8 md:p-0 rounded-3xl bg-[#0c0c0e]/95 md:bg-[#0c0c0e] border shadow-lg relative overflow-hidden cursor-pointer transition-all duration-500 ease-out md:flex md:flex-col
                  ${idx === activeIndex
                    ? 'max-md:scale-100 max-md:opacity-100 max-md:border-[#22d3ee]/40 max-md:shadow-[0_0_30px_rgba(34,211,238,0.15)] z-20'
                    : 'max-md:scale-[0.92] max-md:opacity-45 max-md:border-zinc-800/80 z-10'
                  }
                  md:scale-100 md:opacity-100 md:border-zinc-800/70 md:hover:border-[#22d3ee]/40 md:hover:-translate-y-1.5 md:hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.25)]
                `}
              >
                {/* Mobile-only full-bleed background image */}
                <img 
                  src={s.bg} 
                  alt={s.title}
                  className="md:hidden absolute inset-0 w-full h-full object-cover opacity-45 transition-all duration-500 z-0 pointer-events-none select-none filter contrast-125"
                />
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-[#0c0c0e]/15 z-0 pointer-events-none" />

                {/* Desktop-only media strip — vivid color up top, fades to grayscale near the bottom */}
                <div className="hidden md:block relative h-40 overflow-hidden shrink-0">
                  {/* Base layer: full color, always visible */}
                  <img 
                    src={s.bg} 
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Grayscale layer: masked to fade in only toward the bottom */}
                  <img
                    src={s.bg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-all duration-700 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_40%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_40%,black_100%)]"
                  />
                  {/* Bottom fade into the card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/50 to-transparent" />
                  {/* Subtle top vignette for badge legibility — kept light so color still pops */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-zinc-300 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full w-7 h-7 flex items-center justify-center">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4 md:flex-1 md:px-8 md:pt-7">
                  <h4 className="text-xl md:text-lg font-bold text-zinc-100 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wide font-sans leading-snug">
                    {s.title}
                  </h4>
                  <p className="hidden md:block text-[13px] text-zinc-400 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Deliverable Tags */}
                <div className="mt-8 md:mt-0 border-t border-zinc-900 md:border-zinc-900/80 pt-6 md:px-8 md:pb-7 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#22d3ee]/70">Key Deliverables</span>
                    <span className="hidden md:inline-block text-[#22d3ee] text-sm opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {s.deliverables.map((item, id) => (
                      <span 
                        key={id} 
                        className="text-[10px] bg-zinc-950/80 border border-zinc-850 md:border-zinc-800/80 px-3 py-1 rounded-full text-zinc-400 font-medium md:group-hover:border-[#22d3ee]/20 md:group-hover:text-zinc-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators (mobile only) */}
          <div className="md:hidden flex justify-center gap-1.5 pt-2">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-5 bg-[#22d3ee]' : 'w-1.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Authentic Interactive Package Planner */}
        <div className="p-6 sm:p-8 md:p-12 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#22d3ee]/[0.015] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Interactive Inputs */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
                  Interactive Planner
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-100 tracking-wide font-sans leading-tight">
                  BUILD YOUR ENGAGEMENT PACKAGE
                </h3>
                <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed">
                  Toggle quantities and add-ons below to draft your customized editing package.
                </p>
              </div>

              <div className="space-y-5 md:space-y-6">
                {/* Short-Form Slider */}
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                    <span>Short-Form Reels / Shorts</span>
                    <span className="text-[#22d3ee] font-mono text-xs sm:text-sm whitespace-nowrap">{reels} Videos / Month</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => setReels(Math.max(0, reels - 1))}
                      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border border-zinc-800 bg-[#0c0c0e] hover:border-zinc-600 active:scale-95 text-zinc-300 font-bold transition-all"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={reels}
                      onChange={(e) => setReels(parseInt(e.target.value))}
                      className="flex-grow accent-[#22d3ee] bg-zinc-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                    <button
                      onClick={() => setReels(Math.min(20, reels + 1))}
                      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border border-zinc-800 bg-[#0c0c0e] hover:border-zinc-600 active:scale-95 text-zinc-300 font-bold transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Long-Form Slider */}
                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-400">
                    <span>Long-Form YouTube Videos</span>
                    <span className="text-[#22d3ee] font-mono text-xs sm:text-sm whitespace-nowrap">{longForm} Videos / Month</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button
                      onClick={() => setLongForm(Math.max(0, longForm - 1))}
                      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border border-zinc-800 bg-[#0c0c0e] hover:border-zinc-600 active:scale-95 text-zinc-300 font-bold transition-all"
                    >
                      -
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={longForm}
                      onChange={(e) => setLongForm(parseInt(e.target.value))}
                      className="flex-grow accent-[#22d3ee] bg-zinc-950 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                    <button
                      onClick={() => setLongForm(Math.min(10, longForm + 1))}
                      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full border border-zinc-800 bg-[#0c0c0e] hover:border-zinc-600 active:scale-95 text-zinc-300 font-bold transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add-ons Toggles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setAddThumbnails(!addThumbnails)}
                    className={`px-5 py-4 rounded-xl border-2 text-left transition-all duration-300 flex flex-col justify-between ${
                      addThumbnails 
                        ? 'border-[#22d3ee]/40 bg-[#22d3ee]/5 text-white' 
                        : 'border-zinc-800/80 bg-zinc-950/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">Thumbnail Pack</span>
                    <span className="text-[10px] text-zinc-500 mt-1">Custom thumbnail design and optimization layers</span>
                  </button>

                  <button
                    onClick={() => setAddStrategy(!addStrategy)}
                    className={`px-5 py-4 rounded-xl border-2 text-left transition-all duration-300 flex flex-col justify-between ${
                      addStrategy 
                        ? 'border-[#22d3ee]/40 bg-[#22d3ee]/5 text-white' 
                        : 'border-zinc-800/80 bg-zinc-950/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">Strategy Calls</span>
                    <span className="text-[10px] text-zinc-500 mt-1">Direct 1-on-1 strategy alignment sessions</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Calculated Receipt Box */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-zinc-900 lg:pl-10">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#060608] border border-zinc-900 space-y-5 sm:space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Package Summary</span>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline gap-3 text-[11px] sm:text-xs text-zinc-400">
                    <span>Short-Form Reels</span>
                    <span className="font-mono text-[#22d3ee] text-right shrink-0 whitespace-nowrap">{reels} Videos / Mo</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-3 text-[11px] sm:text-xs text-zinc-400">
                    <span>Long-Form YouTube</span>
                    <span className="font-mono text-[#22d3ee] text-right shrink-0 whitespace-nowrap">{longForm} Videos / Mo</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-3 text-[11px] sm:text-xs text-zinc-400">
                    <span>Thumbnails</span>
                    <span className="font-mono text-[#22d3ee] text-right shrink-0 whitespace-nowrap">{addThumbnails ? 'Included' : 'None'}</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-3 text-[11px] sm:text-xs text-zinc-400">
                    <span>Strategy Consultation</span>
                    <span className="font-mono text-[#22d3ee] text-right shrink-0 whitespace-nowrap">{addStrategy ? 'Included' : 'None'}</span>
                  </div>
                </div>

                <div className="h-[1px] bg-zinc-900 w-full" />

                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-4 rounded-xl text-center bg-[#22d3ee] hover:bg-[#06b6d4] active:scale-95 transition-all text-white font-bold uppercase tracking-wider text-xs shadow-[0_4px_20px_rgba(34,211,238,0.25)] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.237 3.483 8.42-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.788-1.485l-6.208 1.625zm7.422-5.759c1.562.928 3.109 1.486 4.703 1.487 5.479 0 9.935-4.456 9.938-9.937.001-2.656-1.03-5.153-2.906-7.03s-4.375-2.906-7.033-2.907c-5.48 0-9.937 4.457-9.94 9.939-.001 1.705.462 3.375 1.34 4.857l-.993 3.626 3.73-.978.161.093zm8.339-5.185c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.961 1.187-.177.202-.354.227-.658.076-.303-.151-1.28-.472-2.438-1.505-.901-.804-1.51-1.798-1.687-2.101-.177-.302-.019-.466.132-.616.136-.135.303-.354.455-.53.152-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.647-.937-2.253-.247-.599-.499-.518-.684-.528-.177-.008-.379-.01-.582-.01-.202 0-.531.076-.809.379-.278.303-1.062 1.037-1.062 2.529 0 1.492 1.087 2.934 1.239 3.136.152.202 2.139 3.267 5.182 4.578.724.312 1.29.499 1.731.639.728.231 1.39.198 1.913.12.583-.087 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.582-.353z" />
                  </svg>
                  Request this package
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}