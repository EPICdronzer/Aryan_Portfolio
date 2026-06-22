'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONFIG } from '@/config';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'py-6 bg-transparent border-b border-transparent'
          : scrolled 
            ? 'py-4 bg-[#070709]/80 backdrop-blur-md border-b border-zinc-800/40 shadow-lg' 
            : 'py-6 bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
              <span className="hidden md:inline">Aryan Chopra</span>
              <span className="inline md:hidden">AC</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
              Home
            </Link>
            
            <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
              Work
            </Link>
            <Link href="/services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent("Hi Aryan! I'd like to discuss a project with you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-zinc-700 hover:border-[#22d3ee] hover:bg-[#22d3ee]/10 active:scale-95 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Navigation overlay */}
      <div className={`fixed inset-0 bg-[#070709]/98 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 pb-12 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        {/* Dynamic moving background blobs inside drawer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[-20%] w-[300px] h-[300px] rounded-full bg-[#22d3ee]/10 blur-[80px]" />
          <div className="absolute bottom-[10%] right-[-20%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px]" />
        </div>

        {/* Menu Links Stack */}
        <div className="relative z-10 flex flex-col space-y-6 mt-4 overflow-y-auto max-h-[60vh] scrollbar-none">
          
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group border-b border-zinc-900/60 pb-3">
            <span className="text-xs font-mono text-[#22d3ee]/60 mt-1.5">00</span>
            <div className="flex flex-col">
              <span className="text-md font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                Home
              </span>
              <span className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300 mt-1">
                Return to homepage
              </span>
            </div>
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group border-b border-zinc-900/60 pb-3">
            <span className="text-xs font-mono text-[#22d3ee]/60 mt-1.5">01</span>
            <div className="flex flex-col">
              <span className="text-md font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                About
              </span>
              <span className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300 mt-1">
                The story, toolkit, & philosophy
              </span>
            </div>
          </Link>

          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group border-b border-zinc-900/60 pb-3">
            <span className="text-xs font-mono text-[#22d3ee]/60 mt-1.5">02</span>
            <div className="flex flex-col">
              <span className="text-md font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                Portfolio
              </span>
              <span className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300 mt-1">
                High-retention video edits & case studies
              </span>
            </div>
          </Link>

          <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group border-b border-zinc-900/60 pb-3">
            <span className="text-xs font-mono text-[#22d3ee]/60 mt-1.5">03</span>
            <div className="flex flex-col">
              <span className="text-md font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                Services
              </span>
              <span className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300 mt-1">
                Workflow pricing & interactive packages
              </span>
            </div>
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group pb-1">
            <span className="text-xs font-mono text-[#22d3ee]/60 mt-1.5">04</span>
            <div className="flex flex-col">
              <span className="text-md font-black tracking-tight text-white group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
                Contact
              </span>
              <span className="text-[11px] text-zinc-500 font-light group-hover:text-zinc-300 transition-colors duration-300 mt-1">
                Book a call or start a project
              </span>
            </div>
          </Link>

        </div>

        {/* Footer Area inside drawer */}
        <div className="relative z-10 flex flex-col space-y-4 mt-4">
          
          <div className="h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 w-full" />
          
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">Get in touch</span>
            <a href={`mailto:${CONFIG.email}`} className="text-sm font-semibold text-zinc-300 hover:text-[#22d3ee] transition-colors">
              {CONFIG.email}
            </a>
          </div>

          <div className="flex items-center justify-between">
            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-zinc-500 font-light">New Delhi, India 🇮🇳</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.074-1.825-2.097-2.097-1.859-.502-9.401-.502-9.401-.502s-7.543 0-9.401.502c-1.023.272-1.825 1.074-2.097 2.097-.502 1.86-.502 5.737-.502 5.737s0 3.878.502 5.738c.272 1.022 1.074 1.825 2.097 2.097 1.859.502 9.401.502 9.401.502s7.543 0 9.401-.502c1.022-.272 1.825-1.074 2.097-2.097.502-1.86.502-5.738.502-5.738s0-3.878-.502-5.737zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
