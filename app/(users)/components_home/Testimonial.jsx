'use client';

import { useState, useEffect } from 'react';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      name: "Ishaan Sharma",
      title: "Founder, MarkitUp & Creator",
      image: "/testimonial_1.png",
      statNumber: "85%",
      statDesc: "Retention Boost",
      quote: "Aryan's AI post-production is game-changing. He didn't just edit our videos—he engineered hooks that boosted our average viewer retention by 85%. Absolute genius!"
    },
    {
      name: "Nikhil Kamath",
      title: "Co-Founder, Zerodha & Host",
      image: "/testimonial_2.png",
      statNumber: "3.8M",
      statDesc: "Campaign Views",
      quote: "For long-form visual assets, Aryan's DaVinci Resolve workflows blended with generative Kling/Sora clips made our transitions seamless. Highly flexible storyteller."
    },
    {
      name: "Raj Shamani",
      title: "Founder, Shamani Industries & Podcaster",
      image: "/testimonial_3.png",
      statNumber: "60%",
      statDesc: "Fewer Drop-offs",
      quote: "Aryan edits like an internal team. Fast delivery, extreme clarity on what hooks the Indian audience in the first 3 seconds. The drop-offs reduced by 60%."
    }
  ];

  // Auto advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((activeIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSlideChange = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsFading(false);
    }, 300); // Wait for fade-out to complete
  };

  const current = testimonials[activeIndex];  return (
    <section className="relative bg-[#070709] text-white py-12 md:py-20 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 w-[50%] h-[300px] bg-gradient-to-t from-cyan-950/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">Testimonial</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-100 font-sans max-w-xl mx-auto leading-[1.1]">
            Trusted by forward -<br />
            <span className="text-[#22d3ee] block mt-1 font-sans">Thinking teams</span>
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm font-light max-w-lg mx-auto leading-relaxed">
            Empowering visionary creators and high-growth Indian brands with design-driven, AI-powered video editing built for scale.
          </p>
        </div>

        {/* Testimonial Active Display Area */}
        <div className="max-w-3xl mx-auto w-full">
          <div 
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center transition-all duration-300 ease-in-out ${
              isFading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
            }`}
          >
            
            {/* Left side: Photo with overlay badge (columns 1-5) */}
            <div className="md:col-span-5 flex justify-center md:justify-end pb-4 md:pb-0 w-full">
              <div className="relative w-full max-w-md aspect-[4/3] md:w-56 md:h-56 md:aspect-square rounded-xl border border-zinc-800/40 bg-zinc-950/60 shadow-2xl">
                
                {/* Opaque gray/portrait image container */}
                <div className="w-full h-full rounded-xl overflow-hidden relative select-none">
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlapping statistics card */}
                <div className="absolute -bottom-3 -left-3 bg-white text-zinc-950 px-4 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-zinc-100/90 z-20 flex flex-col min-w-[115px]">
                  <span className="text-xl font-black text-[#22d3ee] tracking-tight leading-none">
                    {current.statNumber}
                  </span>
                  {/* Horizontal line divider */}
                  <div className="w-full h-[1px] bg-zinc-200 my-1" />
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider leading-none">
                    {current.statDesc}
                  </span>
                </div>

              </div>
            </div>

            {/* Right side: Quote, Name, and Circle Gradient Icon (columns 6-12) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4 md:pl-4 relative">
              
              {/* Quote Block */}
              <div>
                <blockquote className="text-sm md:text-base lg:text-lg font-medium tracking-tight text-white leading-relaxed font-sans">
                  “{current.quote}”
                </blockquote>
              </div>

              {/* Author Row & Right Star Indicator */}
              <div className="flex justify-between items-end w-full pt-3 border-t border-zinc-900/60">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wide">
                    {current.name}
                  </h4>
                  <p className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                    {current.title}
                  </p>
                </div>

                {/* Glowing blueish star circle icon */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#22d3ee] via-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_4px_12px_rgba(34,211,238,0.25)] select-none shrink-0 relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#22d3ee] via-blue-500 to-indigo-600 blur-[6px] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    className="w-3.5 h-3.5 text-white relative z-10 animate-pulse"
                  >
                    <path d="M12 2l2.4 7.6H22l-6.2 4.7L18.2 22 12 17.3 5.8 22l2.4-7.7-6.2-4.7h7.6z" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Slide navigation dots indicators */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index 
                  ? 'w-6 bg-white' 
                  : 'w-1.5 bg-zinc-800 hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
