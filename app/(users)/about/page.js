'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState('post-production');

  const philosophy = [
    {
      title: 'Pacing as a Science',
      desc: 'Every visual and audio transition is timed according to user retention dynamics, ensuring high watch rates.',
      bg: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI Multiplication',
      desc: 'Using generative Kling/Sora visual models to instantly compose B-roll without sacrificing the creator\'s personal signature.',
      bg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Soundscapes',
      desc: 'Layering custom vocal curves, deep bass sweeps, and Foley assets to design deep auditory immersion.',
      bg: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cinematic Grading',
      desc: 'Bringing the color space of digital films to social feeds, separating content from generic uploads.',
      bg: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const tools = {
    'post-production': [
      { 
        name: 'DaVinci Resolve', 
        desc: 'Precision color grading, audio editing (Fairlight), and industry-standard cuts.', 
        bg: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80',
        role: 'Primary NLE & Color',
        specs: ['Color Grading', 'Fairlight Audio', 'Node Compositing', 'Multi-Cam Editing']
      },
      { 
        name: 'Adobe After Effects', 
        desc: 'Advanced motion graphics, custom transition loops, and dynamic visual FX.', 
        bg: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
        role: 'Motion Graphics Engine',
        specs: ['Keyframe FX', 'Rotoscoping', '3D Camera Tracking', 'Expression Scripting']
      },
      { 
        name: 'Premiere Pro', 
        desc: 'Rapid assembly, timeline drafting, and audio-video synchronization.', 
        bg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
        role: 'Drafting & Assembly',
        specs: ['Proxies Workflow', 'Speech to Text', 'Essential Sound', 'Dynamic Link Sync']
      },
      { 
        name: 'Audition & Photoshop', 
        desc: 'Audio cleanups, vocal balancing, thumbnail design, and visual assets.', 
        bg: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=800&q=80',
        role: 'Asset Polish & Audio',
        specs: ['Spectral Noise Repair', 'Vocal Mastering', 'CTR Thumbnail Layers', 'Generative Fill Design']
      },
    ],
    'generative-ai': [
      { 
        name: 'Kling & Sora AI', 
        desc: 'Blending B-roll layers and video expansions with restricted model access.', 
        bg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        role: 'Text-to-Video Engine',
        specs: ['Physics-based B-roll', 'Video Expansions', 'AI Camera Direction', 'Frame Interpolation']
      },
      { 
        name: 'Midjourney', 
        desc: 'Creating high-fidelity graphics, customized backdrops, and prompt artwork.', 
        bg: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80',
        role: 'Image Concept Generator',
        specs: ['Ultra-realistic Artwork', 'Aspect Ratio Control', 'Consistent Characters', 'Style Tuning Filters']
      },
      { 
        name: 'ElevenLabs', 
        desc: 'Synthesizing voiceovers, background cues, and localized audio textures.', 
        bg: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
        role: 'Voice & SFX Synthesizer',
        specs: ['Voice Cloning', 'Emotional Tone Curves', 'Procedural Foley SFX', 'Multi-Lingual Dubbing']
      },
      { 
        name: 'Custom GPTs & Prompts', 
        desc: 'Hook writing, script polishing, and retention structure optimization.', 
        bg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        role: 'Script & Copy Alignment',
        specs: ['First 3s Hooks', 'Pacing Outline Drafts', 'Sentiment Analyzer', 'A/B Title Generators']
      },
    ],
    'hardware-gear': [
      { 
        name: 'Ryzen 9 Workstation', 
        desc: 'Custom build featuring 64GB DDR5 RAM and RTX 4090 GPU for instant renders.', 
        bg: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
        role: 'Main Compute Engine',
        specs: ['RTX 4090 24GB VRAM', '16-Core Ryzen 9 7950X', '64GB RAM @ 6000MHz', '4TB Gen4 NVMe SSD']
      },
      { 
        name: 'Sony A7IV Camera', 
        desc: 'Mirrorless recording for crisp 4K visual assets and interview plates.', 
        bg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
        role: 'Visual Capture Device',
        specs: ['4K 10-bit 4:2:2 Color', 'S-Cinetone Profile', 'Real-time Eye AF', 'Sigma 24-70mm f/2.8 DG']
      },
      { 
        name: 'Shure SM7B Vocal Mic', 
        desc: 'Warm podcast and voiceover recording with premium sound treatment.', 
        bg: 'https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=800&q=80',
        role: 'Audio Capture Setup',
        specs: ['Focusrite Vocaster Solo', 'Cloudlifter CL-1 Gain', 'Dynamic Cardioid Polar', 'Acoustic Soundproofing']
      },
      { 
        name: 'Elgato Stream Deck', 
        desc: 'Macro execution and hotkey routing for optimized post-production speed.', 
        bg: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=800&q=80',
        role: 'Post-Production Console',
        specs: ['15 Custom LCD Keys', 'Resolve Grading Macros', 'Sora Prompt Templates', 'One-Click Audio Sync']
      },
    ]
  };

  const timeline = [
    { year: '2020', title: 'Creative Genesis', desc: 'Began freelance editing, focusing on traditional editing pipelines in Adobe Premiere and understanding narrative pacing.' },
    { year: '2022', title: 'The Pacing Breakthrough', desc: 'Shifted focus to short-form retention metrics, developing frameworks to maximize watch time. Scaled multiple client videos past 5M+ views.' },
    { year: '2024', title: 'Generative AI Integration', desc: 'Pioneered integration of DaVinci Resolve workflows with advanced AI generative video models (Kling, Sora, Midjourney) for B-roll composition.' },
    { year: '2026', title: 'Elite Strategy & Consultation', desc: 'Partnering directly with leading Indian creators and tech founders to architect end-to-end viral video channels.' }
  ];

  return (
    <div className="relative pt-32 pb-24 px-6 md:px-20 lg:px-32 text-white">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            01 / WHO I AM
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            THE MAN BEHIND THE<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)', color: 'transparent' }}>
              CAMERA & WORKSTATION
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Fusing cutting-edge generative AI technologies with narrative-driven editing psychology to craft viral digital experiences for brands and founders.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#22d3ee] tracking-wide">
              MY PHILOSOPHY
            </h3>
            <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
              I believe video editing is not just about cuts and transitions—it is a branch of behavioral psychology. In a digital world dominated by short attention spans, the first three seconds are sacred ground. We design our clips using structural hook frameworks that keep viewers locked from the start.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              By combining state-of-the-art post-production suites (DaVinci Resolve, AE) with generative AI platforms, I act as a force multiplier. This workflow allows for rapid asset creation, automated layout composition, and high-fidelity soundscapes that would take typical production houses weeks to execute.
            </p>
          </div>
          
          {/* Core Philosophy Cards (Mobile Swipeable, Desktop Grid) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-6 md:pb-0 w-auto">
            {philosophy.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-auto md:shrink p-6 rounded-2xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/20 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group min-h-[160px]"
              >
                {/* Dim background image */}
                <img 
                  src={item.bg} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter contrast-125"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-[#0c0c0e]/15 z-0 pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <h4 className="text-base font-bold text-zinc-100 uppercase tracking-wide group-hover:text-[#22d3ee] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toolkit Section */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-3xl font-black uppercase text-zinc-100">THE CREATIVE TOOLKIT</h3>
            <p className="text-xs text-zinc-500 font-light">Explore the software, gear, and models driving my post-production engine.</p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex justify-center gap-2 max-w-lg mx-auto bg-[#0c0c0e]/60 p-1.5 rounded-full border border-zinc-800/40 relative z-20 backdrop-blur-md">
            {[
              { id: 'post-production', label: 'Software' },
              { id: 'generative-ai', label: 'Generative AI' },
              { id: 'hardware-gear', label: 'Hardware & Gear' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex-1 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee]'
                    : 'text-zinc-500 border border-transparent hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid (Mobile Swipeable, Desktop Grid) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 relative z-10">
            {tools[activeCategory].map((tool, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85%] aspect-square sm:w-[48%] md:w-auto md:shrink md:aspect-square p-6 rounded-2xl bg-[#0c0c0e]/90 border border-zinc-800/80 hover:border-[#22d3ee]/20 hover:bg-[#121216]/90 hover:shadow-[0_12px_35px_-6px_rgba(34,211,238,0.15)] hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Dim background image */}
                <img 
                  src={tool.bg} 
                  alt={tool.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter contrast-125"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/60 to-[#0c0c0e]/15 z-0 pointer-events-none" />

                <div className="flex flex-col justify-between h-full relative z-10 w-full">
                  <div className="space-y-1 md:space-y-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#22d3ee]/80 block font-mono">{tool.role}</span>
                    <h4 className="text-base md:text-lg font-black text-zinc-100 group-hover:text-[#22d3ee] transition-colors uppercase tracking-wide">{tool.name}</h4>
                    <p className="text-[11px] md:text-xs text-zinc-400 font-light leading-relaxed">{tool.desc}</p>
                  </div>
                  
                  {/* Key specs or features */}
                  <div className="pt-3 border-t border-zinc-900/60 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {tool.specs.map((spec, specIdx) => (
                        <span key={specIdx} className="text-[9px] font-medium bg-zinc-950/80 border border-zinc-850 px-2 py-0.5 rounded text-zinc-500 font-mono tracking-tight group-hover:border-cyan-500/20 group-hover:text-zinc-400 transition-colors">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-3xl font-black uppercase text-zinc-100 font-sans">MY EVOLUTION</h3>
            <p className="text-xs text-zinc-500 font-light">The key milestones of my post-production and strategy career.</p>
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-zinc-800/60 ml-4 md:ml-auto md:border-l-0">
            {/* Center line for desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-800/60 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-10 h-10 rounded-full bg-[#0c0c0e] border-2 border-zinc-800 flex items-center justify-center text-xs font-bold text-[#22d3ee] shadow-lg z-20">
                    {item.year.slice(2)}
                  </div>

                  {/* Spacer for layout grid */}
                  <div className="w-full md:w-1/2 px-8 hidden md:block" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 px-8 relative z-10">
                    <div className="p-6 rounded-2xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 space-y-2">
                      <span className="text-xs font-bold text-[#22d3ee]/80 font-mono tracking-widest">{item.year}</span>
                      <h4 className="text-lg font-bold text-zinc-100 uppercase">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
