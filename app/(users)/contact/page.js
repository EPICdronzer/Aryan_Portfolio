'use client';

import { useState } from 'react';
import { CONFIG } from '@/config';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [details, setDetails] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const days = [
    { id: 'mon', label: 'Monday', date: 'June 22' },
    { id: 'tue', label: 'Tuesday', date: 'June 23' },
    { id: 'wed', label: 'Wednesday', date: 'June 24' },
    { id: 'thu', label: 'Thursday', date: 'June 25' },
    { id: 'fri', label: 'Friday', date: 'June 26' },
  ];

  const timeSlots = [
    '10:00 AM IST', '12:00 PM IST', '02:00 PM IST', '04:00 PM IST', '06:00 PM IST'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = selectedDay && selectedTime 
      ? `\nSuggested Call Time: ${selectedDay} at ${selectedTime}`
      : '';
    const message = encodeURIComponent(
      `Hi Aryan!\n\nI want to start a video project. Here are my details:\n` +
      `- Name: ${name}\n` +
      `- Brand/Channel: ${brand}\n` +
      `- Project Details: ${details}${bookingDetails}`
    );
    window.open(`https://wa.me/${CONFIG.phone}?text=${message}`, '_blank');
  };

  return (
    <div className="relative pt-32 pb-24 px-6 md:px-20 lg:px-32 text-white min-h-screen overflow-hidden">
      
      {/* CSS Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0" 
        style={{
          backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
        }}
      />

      {/* Cyberpunk ambient rotating glow spots */}
      <div className="absolute top-[10%] left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none animate-float-all-1 z-0" />
      <div className="absolute bottom-[20%] right-1/4 w-[450px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none animate-float-all-2 z-0" />

      {/* Technical bracket decorations on the page boundaries */}
      <div className="hidden lg:block absolute top-40 left-10 text-[9px] font-mono text-zinc-700 tracking-widest select-none pointer-events-none">
        [SYS_INIT // CON_PAGE]
      </div>
      <div className="hidden lg:block absolute bottom-16 right-10 text-[9px] font-mono text-zinc-700 tracking-widest select-none pointer-events-none">
        ARYAN_STUDIO © 2026 // ALL_STATUS_ONLINE
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
            <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            04 / CONTACT DATABASE
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-zinc-100 font-sans">
            START YOUR VIRAL<br />
            <span className="text-transparent font-black block mt-2" style={{ WebkitTextStroke: '1px rgba(34, 211, 238, 0.4)', color: 'transparent' }}>
              VIDEO CAMPAIGN
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Let's design a high-retention video funnel for your brand. Submit details below or book a calendar slot directly.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Info Cards (Mobile Swiper, Tablet/Desktop Sidebar Stack) */}
          <div className="lg:col-span-3 flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-6 -mx-6 px-6 lg:flex lg:flex-col lg:mx-0 lg:px-0 lg:pb-0 lg:gap-5 w-auto">
            
            {/* Card 1: Location */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] lg:w-full lg:shrink p-6 rounded-lg bg-[#0c0c0e]/90 border border-zinc-850 shadow-lg relative overflow-hidden group min-h-[150px] flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
              
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                alt="Location Map background"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent z-0 pointer-events-none" />
              
              {/* Top decor bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/10 via-cyan-500/30 to-transparent" />
              
              <div className="relative z-10 space-y-1">
                <span className="text-[8px] font-mono font-bold tracking-widest text-[#22d3ee]/80 uppercase block">NODE LOG //</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block">Location</span>
                <h4 className="text-base font-black text-zinc-200 uppercase tracking-wide mt-1">New Delhi, India</h4>
              </div>

              {/* Glowing radar GPS graphic */}
              <div className="relative z-10 flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-2">
                <p className="text-[10px] text-zinc-500 font-mono">28.6139° N, 77.2090° E</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping absolute" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </div>
              </div>
            </div>

            {/* Card 2: Contact Channels */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] lg:w-full lg:shrink p-6 rounded-lg bg-[#0c0c0e]/90 border border-zinc-850 shadow-lg relative overflow-hidden group min-h-[150px] flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
              
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Contact envelope background"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent z-0 pointer-events-none" />
              
              {/* Top decor bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/10 via-cyan-500/30 to-transparent" />
              
              <div className="relative z-10 space-y-1">
                <span className="text-[8px] font-mono font-bold tracking-widest text-[#22d3ee]/80 uppercase block">DIRECT CONNECT //</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block">Contact Channels</span>
                <h4 className="text-xs font-mono font-bold text-zinc-300 tracking-tight break-all mt-1">{CONFIG.email}</h4>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-2">
                <p className="text-[10px] text-zinc-550 font-mono">{CONFIG.formattedPhone}</p>
                
                {/* Visual email copy tag button */}
                <button 
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-950/60 text-[9px] font-bold text-zinc-500 uppercase tracking-wider hover:border-cyan-500/30 hover:text-[#22d3ee] transition-all cursor-pointer"
                >
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Card 3: Availability */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] lg:w-full lg:shrink p-6 rounded-lg bg-[#0c0c0e]/90 border border-zinc-850 shadow-lg relative overflow-hidden group min-h-[150px] flex flex-col justify-between hover:border-cyan-500/20 transition-all duration-300">
              
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Availability calendar background"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/85 to-transparent z-0 pointer-events-none" />
              
              {/* Top decor bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/10 via-cyan-500/30 to-transparent" />
              
              <div className="relative z-10 space-y-1">
                <span className="text-[8px] font-mono font-bold tracking-widest text-[#22d3ee]/80 uppercase block">SCHEDULER STATUS //</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block">Availability</span>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1.5 leading-snug">Mon - Fri: 10AM - 7PM IST</h4>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-zinc-900/60 pt-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider">Online &amp; Active</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-650">Avg Resp: &lt;2h</span>
              </div>
            </div>

          </div>

          {/* Center Column: Contact Form */}
          <div className="lg:col-span-5 p-8 rounded-xl bg-[#0c0c0e]/95 border border-zinc-800/80 shadow-2xl space-y-8 w-full relative overflow-hidden">
            {/* Corner Viewfinder Decorations */}
            <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-800" />
            <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-800" />
            <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-800" />
            <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-800" />

            <div className="space-y-1.5 relative z-10">
              <span className="text-[9px] font-mono font-bold text-[#22d3ee]/80 tracking-widest block uppercase">FORM_SUBMISSION_VAL</span>
              <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-200">
                Submit Project Details
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              
              {/* Technical Name Field */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 group-focus-within:text-[#22d3ee] transition-colors">
                  <span>[01 // INITIATOR NAME]</span>
                  <span className="text-zinc-700 select-none">REQUIRED</span>
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-[#060608]/70 border-b border-zinc-800 focus:border-[#22d3ee] rounded-t-lg px-4 py-3 text-sm focus:outline-none transition-all placeholder-zinc-700 text-zinc-200"
                />
              </div>

              {/* Technical Brand/Channel Field */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 group-focus-within:text-[#22d3ee] transition-colors">
                  <span>[02 // PLATFORM OR BRAND IDENTIFIER]</span>
                  <span className="text-zinc-700 select-none">REQUIRED</span>
                </div>
                <input
                  type="text"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="e.g. YouTube channel link, Brand name"
                  className="w-full bg-[#060608]/70 border-b border-zinc-800 focus:border-[#22d3ee] rounded-t-lg px-4 py-3 text-sm focus:outline-none transition-all placeholder-zinc-700 text-zinc-200"
                />
              </div>

              {/* Technical Outline/Brief */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 group-focus-within:text-[#22d3ee] transition-colors">
                  <span>[03 // PROJECT SCOPE & CREATIVE BRIEF]</span>
                  <span className="text-zinc-700 select-none">REQUIRED</span>
                </div>
                <textarea
                  required
                  rows="4"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Explain video format, timeline, visual style targets, and include links to your channel/assets."
                  className="w-full bg-[#060608]/70 border-b border-zinc-800 focus:border-[#22d3ee] rounded-t-lg px-4 py-3 text-sm focus:outline-none transition-all placeholder-zinc-700 text-zinc-200 resize-none"
                />
              </div>

              {/* Dynamic slot summary card */}
              {selectedDay && selectedTime && (
                <div className="p-4 rounded-xl border border-dashed border-[#22d3ee]/35 bg-[#22d3ee]/[0.02] flex items-center justify-between text-xs animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                    <span className="text-zinc-300 font-mono text-[11px]">Selected: {selectedDay} @ {selectedTime}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setSelectedDay(''); setSelectedTime(''); }}
                    className="text-[#22d3ee] text-[10px] font-bold uppercase tracking-wider hover:underline"
                  >
                    Reset
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white text-xs font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(34,211,238,0.2)] active:scale-98 transition-all duration-300 cursor-pointer"
              >
                Launch via WhatsApp
              </button>

            </form>
          </div>

          {/* Right Column: Calendar */}
          <div className="lg:col-span-4 p-8 rounded-xl bg-[#0c0c0e]/95 border border-zinc-800/80 shadow-2xl flex flex-col justify-between space-y-8 min-h-full w-full relative overflow-hidden">
            {/* Corner Viewfinder Decorations */}
            <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-800" />
            <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-800" />
            <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-800" />
            <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-800" />

            <div className="space-y-6 relative z-10">
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono font-bold text-[#22d3ee]/80 tracking-widest block uppercase">SYS_CALL_INDEX</span>
                <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-200">
                  Book Strategy Call
                </h3>
              </div>

              {/* Days Grid */}
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 block">[01 // CHOOSE PREFERRED DAY]</span>
                <div className="grid grid-cols-5 gap-2">
                  {days.map((day) => {
                    const isSelected = selectedDay.startsWith(day.label);
                    return (
                      <button
                        key={day.id}
                        type="button"
                        onClick={() => setSelectedDay(`${day.label}, ${day.date}`)}
                        className={`p-2 py-3 rounded-lg border text-center flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'border-[#22d3ee] bg-[#22d3ee]/10 text-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                            : 'border-zinc-850 bg-zinc-950/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                        }`}
                      >
                        <span className="text-[9px] uppercase font-bold tracking-tight block">{day.label.slice(0, 3)}</span>
                        <span className="text-xs font-black block mt-1.5">{day.date.split(' ')[1]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div className="space-y-3 min-h-[140px]">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-500 block">[02 // SELECT TIME WINDOW]</span>
                {selectedDay ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fade-in">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`px-3 py-2.5 rounded-xl border text-left text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'border-[#22d3ee] bg-[#22d3ee]/10 text-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                              : 'border-zinc-850 bg-zinc-950/20 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 border border-dashed border-zinc-900 rounded-2xl bg-zinc-950/10 min-h-[100px] text-center">
                    <p className="text-[10px] text-zinc-600 font-mono">Select a day above to unlock active call slots.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Connect Grid */}
            <div className="border-t border-zinc-900/60 pt-6 space-y-4 relative z-10">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 block">[SYSTEM FEEDBACK]</span>
              
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 space-y-1">
                <span className="text-[8px] font-mono text-zinc-600 uppercase block">Automatic Slot Translation</span>
                <p className="text-[10px] text-zinc-500 leading-normal">
                  All dates translate to Indian Standard Time (IST). Selected slot pre-populates in your WhatsApp message.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
