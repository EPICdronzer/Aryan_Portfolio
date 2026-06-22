'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState('post-production');
  const [activeIndexPhilosophy, setActiveIndexPhilosophy] = useState(0);
  const [activeIndexToolkit, setActiveIndexToolkit] = useState(0);
  const [activeIndexExperience, setActiveIndexExperience] = useState(0);

  const toolkitScrollRef = useRef(null);

  // Reset toolkit carousel position + active dot whenever the tab changes
  useEffect(() => {
    setActiveIndexToolkit(0);
    if (toolkitScrollRef.current) {
      toolkitScrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
    }
  }, [activeCategory]);

  const handleScrollExperience = (e) => {
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
    setActiveIndexExperience(activeIdx);
  };

  const handleScrollPhilosophy = (e) => {
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
    setActiveIndexPhilosophy(activeIdx);
  };

  const handleScrollToolkit = (e) => {
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
    setActiveIndexToolkit(activeIdx);
  };

  const philosophy = [
    {
      tag: 'Retention',
      title: 'Pacing as a Science',
      desc: 'Every visual and audio transition is timed according to user retention dynamics, ensuring high watch rates.',
      bg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80'
    },
    {
      tag: 'Generative AI',
      title: 'AI Multiplication',
      desc: 'Using generative Kling/Sora visual models to instantly compose B-roll without sacrificing the creator\'s personal signature.',
      bg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80'
    },
    {
      tag: 'Audio Design',
      title: 'Soundscapes',
      desc: 'Layering custom vocal curves, deep bass sweeps, and Foley assets to design deep auditory immersion.',
      bg: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=900&q=80'
    },
    {
      tag: 'Color & Look',
      title: 'Cinematic Grading',
      desc: 'Bringing the color space of digital films to social feeds, separating content from generic uploads.',
      bg: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80'
    }
  ];

  const experience = [
    {
      title: 'AI Content Creator and Video Editor',
      company: 'Galaxy.ai',
      companyTag: '#1 All-in-One AI Platform',
      type: 'Full-time',
      dates: 'Aug 2025 — Present',
      duration: '11 mos',
      location: 'Dwarka, Delhi, India · Hybrid',
      desc: 'Spearheaded the end-to-end creation of engaging video and written content designed to demystify generative AI for our users. Blended creative storytelling with deep technical knowledge of AI models to produce high-retention content.',
      shortDesc: 'End-to-end creation of engaging video content that demystifies generative AI for users.',
      skills: ['DaVinci Resolve', 'Video Editing', '+3 skills'],
      current: true
    },
    {
      title: 'Video Editor',
      company: 'OneRoadmap',
      companyTag: 'Freelance',
      type: 'Freelance',
      dates: 'Jun 2025 — Aug 2025',
      duration: '3 mos',
      location: 'Remote',
      desc: 'Edited and delivered dynamic video content for clients, including sponsored reels featuring premier brands such as IIT Mandi, Unacademy, IIM, and Zell Education.',
      shortDesc: 'Sponsored reels for premier brands including IIT Mandi, Unacademy, and IIM.',
      skills: ['Video Editing', 'DaVinci', '+2 skills'],
      current: false
    },
    {
      title: 'UX Designer',
      company: 'Vtex.AI',
      companyTag: 'Internship',
      type: 'Internship',
      dates: 'Jun 2025',
      duration: '1 mo',
      location: 'Remote',
      desc: 'Designed intuitive and user-friendly UI/UX solutions for internal and client-facing tools.',
      shortDesc: 'Intuitive UI/UX solutions for internal and client-facing tools.',
      skills: ['UI/UX Design'],
      current: false
    },
    {
      title: 'Lead User Experience Designer',
      company: 'Reto INDIA',
      companyTag: '3 mos total',
      type: 'Part-time',
      dates: 'May 2025',
      duration: '1 mo',
      location: 'Remote',
      desc: 'Selected for personalized leadership development and mentorship by the CEO due to high-impact performance and potential. Previously User Experience Designer (Apprenticeship), Mar 2025 — May 2025.',
      shortDesc: 'Selected for leadership mentorship by the CEO after a high-impact apprenticeship.',
      skills: ['Product Design', 'UI/UX', '+15 skills'],
      current: false
    },
    {
      title: 'Freelance Designer · Graphics, UI/UX & Digital Products',
      company: 'Freelance',
      companyTag: 'Self-employed',
      type: 'Freelance',
      dates: 'Sep 2022 — Mar 2025',
      duration: '2 yrs 7 mos',
      location: 'Dwarka, Delhi, India · Remote',
      desc: 'As a freelance graphic designer and emerging UX designer, combined creative visual communication with user-centered design thinking to build functional, meaningful, and visually engaging solutions.',
      shortDesc: 'Visual communication and user-centered design for functional, engaging products.',
      skills: ['Product Design', 'HTML', '+29 skills'],
      current: false
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
        name: 'Higgsfield', 
        desc: 'Advanced AI generative text-to-video layers and realistic camera animation.', 
        bg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
        role: 'AI Generation Hub',
        specs: ['Text-to-Video', 'Camera Movement Control', 'Character Consistency', 'Dynamic B-Roll']
      },
      { 
        name: 'Claude', 
        desc: 'AI-assisted scripting, structural hook drafting, and content ideation.', 
        bg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        role: 'Scripting & Ideation',
        specs: ['Hook Engineering', 'Outline Generation', 'Competitor Analysis', 'Script Polishing']
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

  const timelineImages = [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div className="relative pt-24 pb-16 px-6 md:px-20 lg:px-32 text-white">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            01 / WHO I AM
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            THE MAN BEHIND THE<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)', color: 'transparent' }}>
              CAMERA &amp; WORKSTATION
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Fusing cutting-edge generative AI technologies with narrative-driven editing psychology to craft viral digital experiences for brands and founders.
          </p>
        </div>

        {/* About Banner: Portrait + Workstation strip */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800/60 shadow-[0_24px_80px_rgba(0,0,0,0.6)] bg-zinc-950/40 h-48 md:h-64 select-none pointer-events-none">
          {/* Background workstation image */}
          <img
            src="/intro_workstation.png"
            alt="Editing workstation"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-35 filter grayscale contrast-110"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent pointer-events-none" />
          {/* Content over banner */}
          <div className="absolute inset-0 flex items-end p-8 gap-6">
            {/* Portrait */}
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-[#22d3ee]/40 shadow-[0_0_20px_rgba(34,211,238,0.15)] shrink-0">
              <img
                src="/img2.png"
                alt="Aryan Chopra"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
            {/* Name + role text */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Available for Projects</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">Aryan Chopra</h3>
              <p className="text-[#22d3ee] text-xs font-bold uppercase tracking-widest">AI Video Editor · Post-Production Specialist</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase block">
              Career Path
            </span>
            <h3 className="text-3xl font-black uppercase text-zinc-100 font-sans">Experience</h3>
            <p className="text-xs text-zinc-500 font-light">From freelance design roots to AI-driven video production at scale.</p>
          </div>

          {/* Desktop: full stacked cards */}
          <div className="hidden md:block max-w-3xl mx-auto space-y-4">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className={`relative p-6 md:p-7 rounded-2xl bg-[#0c0c0e]/80 border transition-all duration-300 group ${
                  job.current
                    ? 'border-[#22d3ee]/40 shadow-[0_0_30px_rgba(34,211,238,0.08)]'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {job.current && (
                  <span className="absolute -top-2.5 left-6 px-2.5 py-0.5 rounded-full bg-[#070709] border border-[#22d3ee]/50 text-[9px] font-bold text-[#22d3ee] uppercase tracking-widest">
                    Current
                  </span>
                )}

                <div className="flex items-start gap-4">
                  {/* Logo badge */}
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center text-[#22d3ee] font-black text-sm uppercase">
                    {job.company.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    {/* Title row */}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="text-sm md:text-base font-bold text-zinc-100 group-hover:text-[#22d3ee] transition-colors duration-300">
                        {job.title}
                      </h4>
                      <span className="text-[11px] font-mono text-zinc-500 shrink-0">{job.dates}</span>
                    </div>

                    {/* Company row */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400">
                      <span className="font-semibold text-zinc-300">{job.company}</span>
                      <span className="text-zinc-600">·</span>
                      <span>{job.companyTag}</span>
                      <span className="text-zinc-600">·</span>
                      <span>{job.type}</span>
                    </div>

                    <p className="text-[11px] text-zinc-500 uppercase tracking-wide">{job.location} · {job.duration}</p>

                    {/* Description */}
                    <p className="text-xs md:text-[13px] text-zinc-400 font-light leading-relaxed pt-1">
                      {job.desc}
                    </p>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-medium bg-zinc-950/80 border border-zinc-800/80 px-2 py-0.5 rounded text-zinc-500 font-mono tracking-tight group-hover:border-[#22d3ee]/20 group-hover:text-zinc-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: fixed-size swipeable carousel, condensed content */}
          <div className="md:hidden">
            <div
              onScroll={handleScrollExperience}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-2 -mx-6 px-6 w-auto"
            >
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className={`snap-center shrink-0 w-[82%] h-[280px] p-5 rounded-2xl bg-[#0c0c0e]/90 border flex flex-col transition-all duration-500 ease-out relative overflow-hidden
                    ${idx === activeIndexExperience
                      ? 'scale-100 opacity-100 border-[#22d3ee]/40 shadow-[0_0_25px_rgba(34,211,238,0.12)] z-20'
                      : 'scale-[0.94] opacity-50 border-zinc-800/80 z-10'
                    }
                  `}
                >
                  {job.current && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-[#070709] border border-[#22d3ee]/50 text-[8px] font-bold text-[#22d3ee] uppercase tracking-widest">
                      Current
                    </span>
                  )}

                  {/* Logo badge */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center text-[#22d3ee] font-black text-sm uppercase mb-3">
                    {job.company.charAt(0)}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-zinc-100 leading-snug h-9 overflow-hidden">
                    {job.title}
                  </h4>

                  {/* Company row */}
                  <p className="text-[11px] text-zinc-400 mt-1">
                    <span className="font-semibold text-zinc-300">{job.company}</span> · {job.type}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{job.dates}</p>

                  {/* Condensed description */}
                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed mt-2.5 flex-1 overflow-hidden">
                    {job.shortDesc}
                  </p>

                  {/* Single skill chip row, max 2 */}
                  <div className="flex flex-wrap gap-1.5 pt-3 mt-auto">
                    {job.skills.slice(0, 2).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[9px] font-medium bg-zinc-950/80 border border-zinc-800/80 px-2 py-0.5 rounded text-zinc-500 font-mono tracking-tight"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 pt-4">
              {experience.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndexExperience ? 'w-5 bg-[#22d3ee]' : 'w-1.5 bg-zinc-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-12">

          {/* Intro text block, centered above the philosophy stack */}
          <div className="max-w-2xl mx-auto text-center space-y-5 border-t border-b border-zinc-800/60 py-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#22d3ee] tracking-wide font-sans">
              MY PHILOSOPHY
            </h3>
            <p className="text-zinc-200 font-light leading-relaxed text-sm md:text-base">
              I believe video editing is not just about cuts and transitions—it is a branch of behavioral psychology. In a digital world dominated by short attention spans, the first three seconds are sacred ground. We design our clips using structural hook frameworks that keep viewers locked from the start.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-xs md:text-sm">
              By combining state-of-the-art post-production suites (DaVinci Resolve, AE) with generative AI platforms, I act as a force multiplier. This workflow allows for rapid asset creation, automated layout composition, and high-fidelity soundscapes that would take typical production houses weeks to execute.
            </p>
          </div>

          {/* Desktop: connected alternating panel stack, tied together by one continuous trace line */}
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Continuous vertical trace line running through all four panels */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#22d3ee]/40 to-transparent -translate-x-1/2 z-0" />

            <div className="space-y-3">
              {philosophy.map((item, idx) => {
                const reversed = idx % 2 === 1;
                return (
                  <div key={idx} className="relative grid grid-cols-2 gap-3 items-stretch group">
                    {/* Node on the trace line */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#070709] border border-[#22d3ee]/60 z-20 group-hover:border-[#22d3ee] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-all duration-300" />

                    {/* Image panel */}
                    <div className={`relative h-44 rounded-2xl overflow-hidden border border-zinc-800/80 group-hover:border-[#22d3ee]/30 transition-all duration-500 ${reversed ? 'order-2' : 'order-1'}`}>
                      <img
                        src={item.bg}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${reversed ? 'from-transparent to-[#070709]/60' : 'from-[#070709]/60 to-transparent'}`} />
                    </div>

                    {/* Text panel */}
                    <div className={`relative flex flex-col justify-center p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-[#0c0c0e]/80 group-hover:border-[#22d3ee]/30 group-hover:bg-[#121216]/60 transition-all duration-500 space-y-2 ${reversed ? 'order-1' : 'order-2'}`}>
                      <span className="text-[10px] font-mono text-[#22d3ee]/70 font-bold tracking-widest uppercase">
                        {item.tag}
                      </span>
                      <h4 className="text-lg md:text-xl font-black text-zinc-100 uppercase tracking-wide group-hover:text-[#22d3ee] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-[13px] text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: swipeable cards (unchanged behavior) */}
          <div
            onScroll={handleScrollPhilosophy}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-8 -mx-6 px-6 w-auto"
          >
            {philosophy.map((item, idx) => (
              <div
                key={idx}
                className={`snap-center shrink-0 w-[85%] p-6 rounded-2xl bg-[#0c0c0e]/90 border shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group min-h-[160px] flex flex-col justify-between cursor-default transition-all duration-500 ease-out
                  ${idx === activeIndexPhilosophy
                    ? 'scale-100 opacity-100 border-[#22d3ee]/40 shadow-[0_0_25px_rgba(34,211,238,0.15)] z-20'
                    : 'scale-[0.92] opacity-45 border-zinc-800/80 pointer-events-none z-10'
                  }
                `}
              >
                {/* Dim background image */}
                <img
                  src={item.bg}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter contrast-125"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/70 to-[#0c0c0e]/20 z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  <span className="text-[10px] font-mono text-[#22d3ee]/80 font-bold tracking-widest uppercase">
                    {item.tag}
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-black text-zinc-100 uppercase tracking-wide group-hover:text-[#22d3ee] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="md:hidden flex justify-center gap-1.5 pt-2">
            {philosophy.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndexPhilosophy ? 'w-5 bg-[#22d3ee]' : 'w-1.5 bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Toolkit Section */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-3xl font-black uppercase text-zinc-100">THE CREATIVE TOOLKIT</h3>
            <p className="text-xs text-zinc-555 font-light">Explore the software, gear, and models driving my post-production engine.</p>
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
                className={`flex-1 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
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
          <div 
            ref={toolkitScrollRef}
            onScroll={handleScrollToolkit}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 relative z-10"
          >
            {tools[activeCategory].map((tool, idx) => (
              <div
                key={idx}
                className={`snap-center shrink-0 w-[85%] aspect-square sm:w-[48%] md:w-auto md:shrink md:aspect-square p-6 rounded-2xl bg-[#0c0c0e]/90 border hover:bg-[#121216]/90 hover:shadow-[0_12px_35px_-6px_rgba(34,211,238,0.15)] hover:translate-y-[-4px] transition-all duration-500 ease-out relative overflow-hidden group flex flex-col justify-between
                  ${idx === activeIndexToolkit
                    ? 'max-md:scale-100 max-md:opacity-100 max-md:border-[#22d3ee]/40 max-md:shadow-[0_0_25px_rgba(34,211,238,0.15)] z-20'
                    : 'max-md:scale-[0.92] max-md:opacity-45 max-md:border-zinc-800/80 pointer-events-none z-10'
                  }
                  md:scale-100 md:opacity-100 md:border-zinc-800/80 hover:border-[#22d3ee]/20
                `}
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

          {/* Dot indicators (mobile only) */}
          <div className="md:hidden flex justify-center gap-1.5 pt-2">
            {tools[activeCategory].map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndexToolkit ? 'w-5 bg-[#22d3ee]' : 'w-1.5 bg-zinc-700'
                }`}
              />
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
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-10 h-10 rounded-full bg-[#0c0c0e] border-2 border-[#22d3ee]/40 flex items-center justify-center text-xs font-bold text-[#22d3ee] shadow-[0_0_15px_rgba(34,211,238,0.2)] z-20">
                    {item.year.slice(2)}
                  </div>

                  {/* Spacer for layout grid */}
                  <div className="w-full md:w-1/2 px-8 hidden md:block" />

                  {/* Timeline Card with background image */}
                  <div className="w-full md:w-1/2 px-8 relative z-10">
                    <div className="relative p-6 rounded-2xl bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/30 transition-all duration-500 space-y-2 overflow-hidden group hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)]">
                      {/* Background image */}
                      <img
                        src={timelineImages[idx]}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 z-0 pointer-events-none select-none filter grayscale contrast-125"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/85 to-[#0c0c0e]/50 z-0 pointer-events-none" />
                      {/* Content */}
                      <div className="relative z-10 space-y-2">
                        <span className="text-xs font-bold text-[#22d3ee]/80 font-mono tracking-widest">{item.year}</span>
                        <h4 className="text-lg font-bold text-zinc-100 uppercase group-hover:text-[#22d3ee] transition-colors duration-300">{item.title}</h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                      </div>
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