'use client';

import Link from 'next/link';
import { CONFIG } from '@/config';

export default function Footer() {
  const getWhatsAppLink = (serviceName) => {
    const message = encodeURIComponent(`Hi Aryan! I'm interested in your "${serviceName}" service. Let's discuss starting this project!`);
    return `https://wa.me/${CONFIG.phone}?text=${message}`;
  };

  return (
    <footer className="bg-[#050507] text-white pt-24 pb-12 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-[#22d3ee]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header section: Call to action */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Let's Bring Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#3b82f6]">Vision to Life</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light">
              Every campaign has a story — we're here to capture yours. Blending DaVinci Resolve precision with Kling, Higgsfield, and Veo generative AI to create high-retention video content. 🎥
            </p>
          </div>
          
          <div>
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#050507] hover:bg-zinc-200 active:scale-95 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-xl"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Mid Row: Direct Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-zinc-800/80">
          <a 
            href={`mailto:${CONFIG.email}`}
            className="flex items-center justify-between group py-3 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white border-b border-transparent hover:border-[#22d3ee]/30 transition-all duration-300"
          >
            <span>Email</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#22d3ee]">↗</span>
          </a>
          
          <a 
            href={`tel:+${CONFIG.phone}`}
            className="flex items-center justify-between group py-3 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white border-b border-transparent hover:border-[#22d3ee]/30 transition-all duration-300"
          >
            <span>{CONFIG.formattedPhone}</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#22d3ee]">↗</span>
          </a>
          
          <a 
            href={`https://wa.me/${CONFIG.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group py-3 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white border-b border-transparent hover:border-[#22d3ee]/30 transition-all duration-300"
          >
            <span>WhatsApp</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#22d3ee]">↗</span>
          </a>
        </div>

        {/* Footer Grids columns (5 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-16">
          
          {/* Col 1: Pages */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#22d3ee] font-bold">Pages</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-bold">Services</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href={getWhatsAppLink("High-Retention Video Editing")} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">Video Editing</a></li>
              <li><a href={getWhatsAppLink("Generative AI Integrations")} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">AI Integrations</a></li>
              <li><a href={getWhatsAppLink("Retention Hook Optimization")} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">Hook Optimization</a></li>
              <li><a href={getWhatsAppLink("Visual Branding & Packagings")} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">Visual Branding</a></li>
              <li><a href={getWhatsAppLink("Dynamic Kinetic Typography")} target="_blank" rel="noopener noreferrer" className="hover:text-[#22d3ee] transition-colors">Kinetic Typography</a></li>
            </ul>
          </div>

          {/* Col 3: AI Stack */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-bold">AI &amp; Edit Stack</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><span className="text-zinc-500 font-light">DaVinci Resolve Studio</span></li>
              <li><span className="text-zinc-500 font-light">Higgsfield AI</span></li>
              <li><span className="text-zinc-500 font-light">Kling AI Pro</span></li>
              <li><span className="text-zinc-500 font-light">Google Veo</span></li>
              <li><span className="text-zinc-500 font-light">Claude AI</span></li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-300 font-bold">Social Connection</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn ↗</a></li>
              {/* <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">X (Twitter) ↗</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">YouTube ↗</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Instagram ↗</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">TikTok ↗</a></li> */}
            </ul>
          </div>

          {/* Col 5: Media Card (Right-most) */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-start">
            <a 
              href="https://www.youtube.com/watch?v=jwaXpanqnZY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full h-36 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl block cursor-pointer"
            >
              {/* Real video thumbnail from YouTube */}
              <img 
                src="https://img.youtube.com/vi/jwaXpanqnZY/mqdefault.jpg" 
                alt="AI Video Project Preview" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/15 transition-colors duration-300 z-10">
                <div className="w-10 h-10 rounded-full bg-[#22d3ee]/90 flex items-center justify-center text-zinc-950 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-3 z-20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                  AI Campaigns 2026
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* Large Signature Typography: ARYAN Chopra. */}
        <div className="py-8 border-t border-dashed border-zinc-800/80 overflow-hidden flex items-center justify-center select-none pointer-events-none">
          <h3 className="text-[8vw] md:text-[9vw] font-black text-center text-[#101015] tracking-tighter leading-none select-none uppercase transition-colors duration-500 hover:text-zinc-900">
            Aryan Chopra.
          </h3>
        </div>

        {/* Bottom Copyright bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900 text-[11px] text-zinc-500 font-medium">
          <div>
            <span>© 2026 Aryan Chopra. All rights reserved.</span>
          </div>
          <div>
            <a href={`mailto:${CONFIG.email}`} className="hover:text-white transition-colors">
              {CONFIG.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
