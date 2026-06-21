'use client';

import { useState } from 'react';
import { CONFIG } from '@/config';

export default function Inquiry() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const faqs = [
    {
      question: "Are you open for freelance/contract projects?",
      answer: "Yes! I am open to freelance work, full-time contracts, and long-term partnerships with creators and brands who want to scale their content quality."
    },
    {
      question: "What is your typical turnaround time for a video?",
      answer: "Standard social media reels and shorts take 24–48 hours. Complex tutorials or high-end AI visuals take 3–5 days depending on the script complexity and asset requirements."
    },
    {
      question: "Which AI models and tools do you use?",
      answer: "I combine professional editing in DaVinci Resolve with generative visual pipelines using Sora, Kling AI, Midjourney, and Stable Diffusion to construct unique b-rolls and visuals."
    },
    {
      question: "Do you offer revisions for video edits?",
      answer: "Yes! Every project includes up to 2 rounds of revisions to fine-tune pacing, graphics, hooks, and sound design to match your creative direction."
    }
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Send a WhatsApp message to Aryan Chopra
    const messageText = `Hi Aryan! My name is ${name} (${email}). I viewed your portfolio and would love to work with you on an upcoming video/content project!`;
    const encodedMessage = encodeURIComponent(messageText);
    
    // Open WhatsApp link in a new window
    window.open(`https://wa.me/${CONFIG.phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[350px] bg-gradient-to-tr from-cyan-950/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 items-start">
        
        {/* Left Column: FAQs (span 7 columns on lg) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase">
              FAQ
            </span>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans leading-[1.05]">
              Do you have<br />
              <span className="text-zinc-500 block mt-1 font-sans">more questions?</span>
            </h3>
            <p className="text-zinc-400 text-sm font-light max-w-xl leading-relaxed">
              Here are some of the common questions about my workflow, video delivery, AI integration, and collaboration models. If you have any other questions, feel free to drop a message.
            </p>
          </div>

          {/* Decorative visual strip between heading and FAQs */}
          <div className="relative h-32 rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-950/40 select-none pointer-events-none group">
            <img
              src="/faq_graphic.png"
              alt="Visual graphic"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 transition-opacity duration-500 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709] pointer-events-none" />
            <div className="absolute inset-0 flex items-center px-6 gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">AI · Post-Production · Generative Video</span>
            </div>
          </div>

          {/* Accordion List */}
          <div className="border-t border-zinc-800/60 divide-y divide-zinc-800/60 pt-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div key={index} className="py-5 first:pt-2">
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left text-base font-bold text-zinc-200 hover:text-[#22d3ee] transition-colors duration-300 focus:outline-none cursor-pointer group"
                  >
                    <span className="tracking-wide">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ml-4 group-hover:text-[#22d3ee] ${
                        isOpen ? 'rotate-45 text-[#22d3ee]' : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>

                  {/* Answer Panel with smooth transition */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Work Card Block (span 5 columns on lg) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#0c0c0e]/80 border border-zinc-800/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group/card hover:border-[#22d3ee]/20 transition-all duration-500">
            {/* Subtle glow hover effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/[0.03] rounded-full blur-[60px] pointer-events-none group-hover/card:bg-cyan-500/[0.06] transition-all duration-700" />

            <div className="space-y-6">
              <h4 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-sans leading-tight">
                Would you like to <br />
                <span className="text-[#22d3ee]">work with me?</span>
              </h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Let's create scroll-stopping visual assets for your brand. Whether you need high-end post-production, interactive video tutorials, or viral retention strategy, I am ready to collaborate.
              </p>
            </div>

            <div className="space-y-6 relative z-10">
              <a
                href={`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent("Hi Aryan! I'd like to hire you. Let's discuss my project!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-3.5 rounded-full text-xs font-bold tracking-widest text-black bg-white hover:bg-[#22d3ee] active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.05)] uppercase cursor-pointer"
              >
                Hire Me
              </a>

              {/* Email Footer info */}
              <div className="border-t border-zinc-800/60 pt-6 space-y-1">
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                  Send me a message
                </span>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="block text-sm font-semibold text-zinc-300 hover:text-[#22d3ee] transition-colors"
                >
                  {CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
