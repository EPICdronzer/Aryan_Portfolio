'use client';

import { useState } from 'react';

// ── helpers ─────────────────────────────────────────────────────────────────
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
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#060608] border border-zinc-900 group-hover:border-zinc-700 transition-all duration-300 cursor-pointer"
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/70 border border-white/20 group-hover:bg-[#22d3ee] group-hover:border-transparent group-hover:scale-110 shadow-2xl transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-base ml-1 group-hover:text-black transition-colors">▶</span>
            </div>
          </div>
          {/* Red live dot */}
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </>
      )}
    </div>
  );
}

// ── data ────────────────────────────────────────────────────────────────────
const projects = [
  // ── Informative & Tutorials ──────────────────────────────────────────────
  {
    title: 'Tutorial Short #1',
    category: 'tutorials',
    url: 'https://www.youtube.com/shorts/pU9K-dE1WmI',
    desc: 'Crisp short-form tutorial with kinetic subtitles, sound design, and retention-optimised pacing.',
    tag: 'Short · Tutorial',
  },
  {
    title: 'Informative Deep Dive',
    category: 'tutorials',
    url: 'https://www.youtube.com/watch?v=jwaXpanqnZY&t=7s',
    desc: 'Long-form explainer blending motion graphics, Foley sound, and dynamic layout structures.',
    tag: 'Long-Form · Informative',
  },
  {
    title: 'Quick Tutorial #3',
    category: 'tutorials',
    url: 'https://www.youtube.com/shorts/rQ_yIAVokx4',
    desc: 'Fast-cut tutorial short with on-screen annotation animations and clean colour grade.',
    tag: 'Short · Tutorial',
  },
  {
    title: 'Explainer Video',
    category: 'tutorials',
    url: 'https://www.youtube.com/watch?v=mQHWh4PcZZw&t=7s',
    desc: 'Structured explainer with zooming spotlight interfaces and custom title-card segments.',
    tag: 'Long-Form · Explainer',
  },
  {
    title: 'Tutorial Short #5',
    category: 'tutorials',
    url: 'https://www.youtube.com/shorts/Q6-8svA2NpM',
    desc: 'Punchy shorts-format tutorial optimised for first-3-second hook and high share rate.',
    tag: 'Short · Tutorial',
  },

  // ── AI Enhanced Visuals ──────────────────────────────────────────────────
  {
    title: 'AI Enhanced Visual #1',
    category: 'ai-visuals',
    url: 'https://www.youtube.com/watch?v=Z3q1wBjtOOA&t=5s',
    desc: 'DaVinci timeline edits blended with Kling generative AI B-rolls — futuristic automation aesthetic.',
    tag: 'Long-Form · AI Enhanced',
  },
  {
    title: 'AI Short #2',
    category: 'ai-visuals',
    url: 'https://www.youtube.com/shorts/Rc02EPwSn9k',
    desc: 'Experimental short illustrating AI visual extensions, color science, and sound space composition.',
    tag: 'Short · AI Enhanced',
  },
  {
    title: 'AI Visual #3',
    category: 'ai-visuals',
    url: 'https://www.youtube.com/shorts/vTnGYNpm4eE',
    desc: 'Generative B-roll renders, chromakey blends, and unique visual layers via Sora & Kling.',
    tag: 'Short · AI Enhanced',
  },
  {
    title: 'AI Short #4',
    category: 'ai-visuals',
    url: 'https://www.youtube.com/shorts/TVLivpjeAhM',
    desc: 'AI-generated background plates, rich cinematic colour grading and glowing lighting layers.',
    tag: 'Short · AI Enhanced',
  },

  // ── Dynamic Social Reels ─────────────────────────────────────────────────
  {
    title: 'Scroll-Stopper Reel #1',
    category: 'reels',
    url: 'https://www.youtube.com/shorts/bBU4qd--KEg',
    desc: 'High-energy reel with rapid text cards, sub-woofers, and custom visual sound design.',
    tag: 'Short · Social Reel',
  },
  {
    title: 'Social Reel #2',
    category: 'reels',
    url: 'https://www.youtube.com/shorts/TQs1V0PKCXA',
    desc: 'Scroll-stopping reel grabbing attention in the first three seconds with kinetic subtitle loops.',
    tag: 'Short · Social Reel',
  },
  {
    title: 'Dynamic Cut #3',
    category: 'reels',
    url: 'https://www.youtube.com/shorts/bkSZpa4B8Y0',
    desc: 'High-pacing cut optimised for platform algorithms — synced beats, colour pops, and motion blur.',
    tag: 'Short · Social Reel',
  },
  {
    title: 'Viral Hook Reel #4',
    category: 'reels',
    url: 'https://www.youtube.com/shorts/1Eb-FVAFAlU',
    desc: 'Viral hook framework short with engineered competitor benchmarks and retention-first pacing.',
    tag: 'Short · Social Reel',
  },
];

const categories = [
  { id: 'all',        label: 'All Projects' },
  { id: 'tutorials',  label: 'Informative & Tutorials' },
  { id: 'ai-visuals', label: 'AI Enhanced Visuals' },
  { id: 'reels',      label: 'Dynamic Social Reels' },
];

const btsStages = {
  raw: {
    title: 'Stage 1: Pacing & Hook Assembly',
    color: 'border-zinc-700 bg-zinc-950/40 text-zinc-400',
    action: 'Cutting empty silent frames, choosing the strongest vocal performances, and arranging the core hook sequence. The narrative timeline is locked here.',
    visualNotes: 'Uncolored log footage, rough cuts, no audio levels, raw camera audio.',
  },
  graded: {
    title: 'Stage 2: Color Space & AI Plate Blending',
    color: 'border-cyan-800 bg-cyan-950/20 text-cyan-400',
    action: 'Applying log color conversions and CSTs. Blending Kling/Sora generative video models to replace B-roll plates.',
    visualNotes: 'Rich cinematic colors, glowing lighting layers, integrated AI visual plates.',
  },
  final: {
    title: 'Stage 3: Sound Design & Kinetic Graphics',
    color: 'border-[#22d3ee] bg-[#0c0c0e] text-[#22d3ee]',
    action: 'Integrating dynamic animated text cards, custom transitions, and advanced soundscapes (swooshes, sub-booms, keystrokes, vocal compression).',
    visualNotes: 'Dynamic title cards, audio Foley sound design, client-ready rendering.',
  },
};

// ── page ────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [filter, setFilter]           = useState('all');
  const [editStage, setEditStage]     = useState('raw');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = projects.filter((p) => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pt-32 pb-24 px-6 md:px-20 lg:px-32 text-white">
      {/* Background glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            02 / MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            CASE STUDIES &amp; VIDEO<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34,211,238,0.4)', color: 'transparent' }}>
              SHOWCASE
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Explore my real portfolio of high-retention video projects. Click any card to play. Filter by category below.
          </p>
        </div>

        {/* Search & Filter Container */}
        <div className="max-w-xl mx-auto space-y-4 relative z-20">
          <div className="relative flex items-center bg-[#0c0c0e]/90 border border-zinc-800/80 rounded-2xl p-1.5 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300">
            {/* Search Icon */}
            <div className="pl-3.5 pr-2 text-zinc-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-zinc-500 focus-within:text-[#22d3ee] transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowFilters(true);
              }}
              onClick={() => setShowFilters(true)}
              onFocus={() => setShowFilters(true)}
              placeholder="Search projects..."
              className="w-full bg-transparent border-none text-zinc-200 placeholder-zinc-600 focus:outline-none text-xs py-2 px-1"
            />
            
            {/* Action buttons (Clear / Filter toggle) */}
            <div className="flex items-center gap-2 pr-2">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-lg hover:bg-zinc-800/50 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                  showFilters
                    ? 'bg-[#22d3ee]/10 border-[#22d3ee]/40 text-[#22d3ee]'
                    : 'bg-zinc-950/40 border-zinc-850 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <span>Filters</span>
              </button>
            </div>
          </div>
          
          {/* Filters List (Category buttons) */}
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showFilters 
                ? 'max-h-24 opacity-100 translate-y-0 visible' 
                : 'max-h-0 opacity-0 -translate-y-2 invisible pointer-events-none'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                    filter === cat.id
                      ? 'bg-[#22d3ee]/15 border-[#22d3ee]/45 text-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                      : 'bg-[#0c0c0e]/85 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Grid or Empty State */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 border border-zinc-850 rounded-3xl bg-[#0c0c0e]/60 max-w-lg mx-auto space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-zinc-650 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wide">No projects found</h4>
              <p className="text-xs text-zinc-555 font-light">Try adjusting your search terms or clearing the selected category.</p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
              className="px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-cyan-500/40 hover:text-[#22d3ee] transition-all cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div
              key={p.url}
              className="group flex flex-col rounded-3xl bg-[#0c0c0e]/90 border border-zinc-800/80 hover:border-[#22d3ee]/30 hover:bg-[#121216]/95 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden"
            >
              {/* Real YouTube thumbnail / player */}
              <YouTubeCard url={p.url} title={p.title} />

              {/* Card body */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#22d3ee]/80">
                  {p.tag}
                </span>
                <h4 className="text-sm font-bold text-zinc-100 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wide leading-snug">
                  {p.title}
                </h4>
                <p className="text-[11px] text-zinc-500 font-light leading-relaxed flex-1">
                  {p.desc}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 self-start flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-[#22d3ee] transition-colors"
                >
                  Open on YouTube
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Behind the Scenes Simulator */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0c0c0e]/80 border border-zinc-800/80 space-y-10 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22d3ee]/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
                AUTHENTIC SEGMENT
              </span>
              <h3 className="text-3xl font-black uppercase text-zinc-100 tracking-wide font-sans">
                BEHIND THE EDITING TIMELINE
              </h3>
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Ever wondered how log-profile files transform into viral masterpieces? Toggle the buttons to simulate the three stages of my post-production pipeline.
              </p>

              <div className="flex flex-col space-y-2 mt-4">
                {[
                  { id: 'raw',    label: 'Stage 1: Pacing & Hook Cuts' },
                  { id: 'graded', label: 'Stage 2: Color Space & Generative AI' },
                  { id: 'final',  label: 'Stage 3: Audio Foley & Motion FX' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setEditStage(s.id)}
                    className={`text-left px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      editStage === s.id
                        ? 'border-[#22d3ee]/40 bg-[#22d3ee]/5 text-[#22d3ee]'
                        : 'border-zinc-800/60 bg-zinc-950/20 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* Stage Image Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800/60 shadow-[0_16px_48px_rgba(0,0,0,0.8)] bg-zinc-950/60 aspect-video">
                <img
                  key={editStage}
                  src={
                    editStage === 'raw'
                      ? '/stage_raw_cuts.png'
                      : editStage === 'graded'
                      ? '/stage_color_grading.png'
                      : '/stage_sound_design.png'
                  }
                  alt={`Stage preview: ${btsStages[editStage].title}`}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-80 transition-all duration-700"
                />
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                {/* Stage badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-sm ${btsStages[editStage].color}`}>
                  {editStage === 'raw' ? 'Stage 01' : editStage === 'graded' ? 'Stage 02' : 'Stage 03'}
                </div>
                {/* Live indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Live Preview</span>
                </div>
              </div>

              <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${btsStages[editStage].color}`}>
                <div className="space-y-3">
                  <h4 className="text-base font-black uppercase tracking-wide">{btsStages[editStage].title}</h4>
                  <p className="text-xs font-light leading-relaxed">{btsStages[editStage].action}</p>
                </div>
                <div className="border-t border-zinc-900/60 pt-4 mt-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Simulated Viewport State</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono font-medium text-white">{btsStages[editStage].visualNotes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
