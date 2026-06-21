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
    <div className="relative pt-32 pb-24 px-6 md:px-20 lg:px-32 text-white">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#22d3ee] uppercase">
            04 / CONTACT ME
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Left Column: Info Cards (Mobile Swiper, Tablet/Desktop Sidebar Stack) */}
          <div className="md:col-span-3 lg:col-span-3 flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-6 -mx-6 px-6 md:flex md:flex-col md:mx-0 md:px-0 md:pb-0 md:gap-4 w-auto">
            
            {/* Card 1: Location */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-auto md:shrink p-6 rounded-2xl bg-[#0c0c0e]/90 border border-zinc-800/80 shadow-lg relative overflow-hidden group min-h-[140px] flex flex-col justify-between">
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                alt="Location Map background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-32 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#22d3ee]/80">Location</span>
                <h4 className="text-base font-bold text-zinc-100 uppercase tracking-wide">New Delhi, India</h4>
                <p className="text-[11px] text-zinc-500 font-mono">28.6139° N, 77.2090° E</p>
              </div>
            </div>

            {/* Card 2: Contact Channels */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-auto md:shrink p-6 rounded-2xl bg-[#0c0c0e]/90 border border-zinc-800/80 shadow-lg relative overflow-hidden group min-h-[140px] flex flex-col justify-between">
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Contact envelope background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-32 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#22d3ee]/80">Direct Channels</span>
                <h4 className="text-base font-bold text-zinc-100 tracking-wide break-all">{CONFIG.email}</h4>
                <p className="text-[11px] text-zinc-400 font-medium">{CONFIG.formattedPhone}</p>
              </div>
            </div>

            {/* Card 3: Availability */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-auto md:shrink p-6 rounded-2xl bg-[#0c0c0e]/90 border border-zinc-800/80 shadow-lg relative overflow-hidden group min-h-[140px] flex flex-col justify-between">
              {/* Grayscale Dim Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Availability calendar background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-32 group-hover:scale-105 transition-all duration-500 z-0 pointer-events-none select-none filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/75 to-[#0c0c0e]/35 z-0 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#22d3ee]/80">Availability</span>
                <h4 className="text-base font-bold text-zinc-100 uppercase tracking-wide">Mon - Fri: 10AM - 7PM IST</h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">Open for bookings</span>
                </div>
              </div>
            </div>

          </div>

          {/* Center Column: Contact Form */}
          <div className="md:col-span-5 lg:col-span-5 p-8 rounded-3xl bg-[#0c0c0e]/95 border border-zinc-800/80 shadow-xl space-y-8 w-full">
            <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-200">
              Submit Project Details
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#060608] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22d3ee] focus:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all placeholder-zinc-700 text-white"
                  />
                </div>

                {/* Brand */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Brand / Channel Name</label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. YouTube Channel, Tech Brand"
                    className="w-full bg-[#060608] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22d3ee] focus:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all placeholder-zinc-700 text-white"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Project Outline & Links</label>
                <textarea
                  required
                  rows="4"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Share a brief overview of your content style, editing goals, and links to your current accounts."
                  className="w-full bg-[#060608] border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22d3ee] focus:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all placeholder-zinc-700 text-white resize-none"
                />
              </div>

              {/* Dynamic suggestion card */}
              {selectedDay && selectedTime && (
                <div className="p-4 rounded-xl border border-dashed border-[#22d3ee]/35 bg-[#22d3ee]/[0.02] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                    <span className="text-zinc-300 font-medium">Selected Slot: {selectedDay} ({selectedTime})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setSelectedDay(''); setSelectedTime(''); }}
                    className="text-[#22d3ee] hover:underline animate-fade-in"
                  >
                    Clear Slot
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#22d3ee] hover:bg-[#06b6d4] active:scale-95 text-white text-xs font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(34,211,238,0.25)] transition-all"
              >
                Send via WhatsApp
              </button>

            </form>
          </div>

          {/* Right Column: Calendar */}
          <div className="md:col-span-4 lg:col-span-4 p-8 rounded-3xl bg-[#0c0c0e]/95 border border-zinc-800/80 shadow-xl flex flex-col justify-between space-y-8 min-h-full w-full">
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-200">
                Book a Strategy Call
              </h3>

              {/* Days Grid */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Select Date</span>
                <div className="grid grid-cols-5 gap-2">
                  {days.map((day) => (
                    <button
                      key={day.id}
                      onClick={() => setSelectedDay(`${day.label}, ${day.date}`)}
                      className={`p-2.5 rounded-xl border text-center flex flex-col justify-between transition-all duration-300 ${
                        selectedDay.startsWith(day.label)
                          ? 'border-[#22d3ee] bg-[#22d3ee]/5 text-[#22d3ee]'
                          : 'border-zinc-850 bg-zinc-950/20 text-zinc-500 hover:border-zinc-750 hover:text-zinc-300'
                      }`}
                    >
                      <span className="text-[9px] uppercase font-bold tracking-tight block">{day.label.slice(0, 3)}</span>
                      <span className="text-xs font-black block mt-1">{day.date.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              {selectedDay && (
                <div className="space-y-3 animate-fade-in">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Select Time (IST)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-4 py-3 rounded-xl border text-left text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                          selectedTime === slot
                            ? 'border-[#22d3ee] bg-[#22d3ee]/5 text-[#22d3ee]'
                            : 'border-zinc-850 bg-zinc-950/20 text-zinc-500 hover:border-zinc-750 hover:text-zinc-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Direct Connect Grid */}
            <div className="border-t border-zinc-900 pt-6 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block">Direct Inquiries</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email Copy widget */}
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded-xl border border-zinc-850 bg-zinc-950/20 hover:border-zinc-750 hover:bg-[#121216]/50 transition-all flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 group"
                >
                  <span>{isCopied ? 'Copied!' : 'Copy Email'}</span>
                  </button>

                
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
