'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CONFIG } from '@/config'; // adjust import path to wherever CONFIG actually lives

// Helper: build a WhatsApp click-to-chat link with a prefilled, service-specific message
function getWhatsAppLink(serviceName) {
  const message = `Hi, I'd like to know more about your ${serviceName} service`;
  return `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
}

// Helper: extract YouTube video ID from any YouTube URL (watch or shorts)
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
      className="group relative aspect-square rounded-xl overflow-hidden bg-[#0e0e12]/80 border border-zinc-800/60 hover:border-cyan-500/40 shadow-xl transition-all duration-500 ease-out cursor-pointer w-full h-full"
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
          {/* Thumbnail */}
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] opacity-25 pointer-events-none" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-black/70 border border-white/20 group-hover:bg-[#22d3ee] group-hover:border-transparent group-hover:scale-110 shadow-2xl transition-all duration-400 flex items-center justify-center">
              <span className="text-white text-lg ml-1 group-hover:text-black transition-colors">▶</span>
            </div>
          </div>
          {/* Title bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors truncate">{title}</p>
          </div>
          {/* Live dot */}
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        </>
      )}
    </div>
  );
}

function VideoSkeletonCard({ title = "Campaign Preview" }) {
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden bg-[#0e0e12]/80 border border-zinc-800/60 hover:border-cyan-500/40 shadow-xl transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between p-4 w-full h-full">
      
      {/* Glimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
      
      {/* Scanline/Noise mock effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-35 pointer-events-none group-hover:opacity-50 transition-opacity" />

      {/* Top Tag */}
      <div className="relative z-10 flex justify-between items-center w-full">
        <span className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/40 text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
          Auto Play
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-cyan-500 animate-pulse transition-colors" />
      </div>

      {/* Centered Glowing Play Icon (Interactive Skeleton) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950/80 group-hover:bg-[#22d3ee] group-hover:text-black group-hover:border-transparent group-hover:scale-110 shadow-2xl transition-all duration-500 flex items-center justify-center">
          <span className="text-sm ml-0.5 group-hover:translate-x-px group-hover:scale-105 transition-transform">
            ▶
          </span>
        </div>
      </div>

      {/* Bottom info progress tracker */}
      <div className="relative z-10 w-full space-y-2">
        {/* Mock progress bar */}
        <div className="w-full h-1 rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/40">
          <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] transition-all duration-1000 ease-out" />
        </div>

        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors">
          <span>{title}</span>
          <span>0:00 / 0:15</span>
        </div>
      </div>

    </div>
  );
}

export function Carousel({ children }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isUserInteracting = useRef(false);
  const interactionTimeout = useRef(null);
  const autoPlayRef = useRef(null);

  const totalItems = React.Children.count(children);

  const handleScrollEvent = (e) => {
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
      if (distance < minDistance) { minDistance = distance; activeIdx = i; }
    }
    setActiveIndex(activeIdx);
  };

  // Scroll an item into view *horizontally only*, by moving the carousel
  // track's own scrollLeft directly (container.scrollTo). We deliberately
  // avoid element.scrollIntoView() here — it walks up every scrollable
  // ancestor, including the page itself, and can drag the whole window
  // vertically just to satisfy alignment. Computing the delta from
  // bounding rects and scrolling only the track keeps autoplay from ever
  // touching the page's scroll position.
  const centerItem = (idx, behavior = 'smooth') => {
    const container = containerRef.current;
    if (!container) return;
    const item = container.children[idx];
    if (!item) return;
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const delta = (itemRect.left + itemRect.width / 2) - (containerRect.left + containerRect.width / 2);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const targetLeft = Math.max(0, Math.min(container.scrollLeft + delta, maxScrollLeft));
    container.scrollTo({ left: targetLeft, behavior });
  };

  const pauseAutoPlay = () => {
    isUserInteracting.current = true;
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => { isUserInteracting.current = false; }, 5000);
  };

  // Auto-advance every 4s
  useEffect(() => {
    if (totalItems <= 1) return;
    autoPlayRef.current = setInterval(() => {
      if (!isUserInteracting.current) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % totalItems;
          centerItem(next);
          return next;
        });
      }
    }, 4000);
    return () => clearInterval(autoPlayRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScrollEvent);
    return () => {
      container.removeEventListener('scroll', handleScrollEvent);
    };
  }, [children]);

  // Click a dot to jump straight to that slide.
  const goToSlide = (idx) => {
    pauseAutoPlay();
    setActiveIndex(idx);
    centerItem(idx);
  };

  return (
    <div className="relative w-full group/carousel pb-2">
      {/* Carousel Track Container */}
      <div
        ref={containerRef}
        onTouchStart={pauseAutoPlay}
        onMouseDown={pauseAutoPlay}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 select-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child, idx) => {
          if (!child) return null;
          const isActive = idx === activeIndex;
          return React.cloneElement(child, {
            className: `${child.props.className || ''} transition-all duration-500 ease-out snap-center shrink-0 ${
              isActive
                ? 'max-md:scale-100 max-md:opacity-100 max-md:z-20'
                : 'max-md:scale-[0.92] max-md:opacity-40 max-md:z-10'
            }`
          });
        })}
      </div>

      {/* Dot pagination — active slide gets an elongated cyan pill, the
          rest stay small neutral dots. Tapping a dot jumps straight to
          that slide and pauses autoplay briefly, same as a manual swipe. */}
      {totalItems > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-1">
          {Array.from({ length: totalItems }).map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-6 bg-[#22d3ee] shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                    : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------
// Interactive "Retention Curve" — a real 60-second edit timeline you can
// scrub through. Every beat shows the exact technique (cut, grade, sound,
// pace) being used at that second, with a live retention line to match.
// This is the one truly interactive, hand-built moment on the page — it
// turns "I edit for retention" into something a visitor can actually play
// with rather than just read.
// ---------------------------------------------------------------------
const RETENTION_BEATS = [
  { time: 0,  tag: 'HOOK',    title: 'Pattern Interrupt', desc: 'Cold open mid-action. No logo, no intro card — the first frame is already the payoff.', value: 100 },
  { time: 3,  tag: 'PROMISE', title: 'The Promise, Stated', desc: 'One sentence names exactly what the viewer gets and how long it takes to get it.', value: 97 },
  { time: 8,  tag: 'CUT',     title: 'Visual Reset', desc: 'A jump-cut and an AI-generated b-roll insert break the frame before the first natural drop-off point.', value: 89 },
  { time: 18, tag: 'PACE',    title: 'Tension Beat', desc: 'Pacing deliberately slows for a moment — a held breath that makes the next cut land harder.', value: 84 },
  { time: 27, tag: 'GRADE',   title: 'Color Punch', desc: 'A saturation shift in the grade marks the turn, signaling something changed before the line does.', value: 90 },
  { time: 41, tag: 'AUDIO',   title: 'The Sting', desc: "A single foley hit re-grabs attention that's started to wander past the 40-second wall.", value: 82 },
  { time: 55, tag: 'PAYOFF',  title: 'Payoff + Soft CTA', desc: 'The promise from second three pays off, and the CTA rides the high point instead of interrupting it.', value: 79 },
];
const TOTAL_DURATION = 60;
const PLATFORM_AVG = 38;

// Chart geometry, in SVG viewBox units
const CHART_X0 = 30, CHART_X1 = 670, CHART_Y0 = 28, CHART_Y1 = 210;
const xForTime = (t) => CHART_X0 + (t / TOTAL_DURATION) * (CHART_X1 - CHART_X0);
const yForValue = (v) => CHART_Y1 - (v / 100) * (CHART_Y1 - CHART_Y0);

// Lightweight Catmull-Rom -> cubic Bezier smoothing so the line reads as
// a real curve rather than a jagged connect-the-dots chart.
function smoothPath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
}

function formatTime(t) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function RetentionCurve() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef(null);
  const resumeTimer = useRef(null);

  // Don't auto-animate for people who've asked for reduced motion —
  // they can still scrub manually any time.
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % RETENTION_BEATS.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isAutoPlaying]);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const pauseThenResume = () => {
    setIsAutoPlaying(false);
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const jumpToClientX = (clientX) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const time = fraction * TOTAL_DURATION;
    let nearest = 0;
    let minDist = Infinity;
    RETENTION_BEATS.forEach((b, i) => {
      const dist = Math.abs(b.time - time);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setActiveIdx(nearest);
  };

  const onTrackPointerDown = (e) => {
    pauseThenResume();
    jumpToClientX(e.clientX);
    const onMove = (ev) => jumpToClientX(ev.clientX);
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const points = RETENTION_BEATS.map((b) => ({ x: xForTime(b.time), y: yForValue(b.value) }));
  const lastBeat = RETENTION_BEATS[RETENTION_BEATS.length - 1];
  const fullPoints = [...points, { x: xForTime(TOTAL_DURATION), y: yForValue(lastBeat.value) }];

  const linePath = smoothPath(fullPoints);
  const areaPath = `${linePath} L ${fullPoints[fullPoints.length - 1].x},${CHART_Y1} L ${fullPoints[0].x},${CHART_Y1} Z`;

  const active = RETENTION_BEATS[activeIdx];
  const avgY = yForValue(PLATFORM_AVG);

  return (
    <div className="space-y-8 border-t border-zinc-900/60 pt-16">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-[10px] font-black tracking-[0.25em] text-[#22d3ee] uppercase block">
          Scrub The Timeline
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
          The Retention Curve
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
          Every cut, color shift, and sound hit in a 60-second edit is a decision aimed at one number. Drag the scrubber below to see what's happening on screen at each beat — and why the line holds instead of falling off a cliff.
        </p>
      </div>

      <div className="relative rounded-xl border border-zinc-800/80 bg-[#0c0c0e]/60 p-6 md:p-10 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/[0.05] rounded-full blur-[60px] pointer-events-none" />

        {/* Live readout row */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-baseline gap-3">
            <span className="text-5xl md:text-6xl font-black text-[#22d3ee] tabular-nums">
              {active.value}%
            </span>
            <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest pb-1 leading-snug">
              audience<br />retention
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">vs. platform avg</p>
              <p className="text-sm font-bold text-zinc-300">{PLATFORM_AVG}%</p>
            </div>
            <button
              onClick={() => {
                if (isAutoPlaying) {
                  setIsAutoPlaying(false);
                  clearTimeout(resumeTimer.current);
                } else {
                  setIsAutoPlaying(true);
                }
              }}
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
              className="w-9 h-9 rounded-full bg-zinc-950/90 border border-zinc-800 text-zinc-300 hover:border-[#22d3ee] hover:text-[#22d3ee] flex items-center justify-center transition-all duration-300 shrink-0 cursor-pointer"
            >
              {isAutoPlaying ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M7 5l12 7-12 7V5z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Graph */}
        <div className="relative z-10">
          <svg viewBox="0 0 700 230" className="w-full h-[180px] md:h-[230px] overflow-visible">
            <defs>
              <linearGradient id="retentionFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Platform average reference line */}
            <line x1={CHART_X0} y1={avgY} x2={CHART_X1} y2={avgY} stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 5" />
            <text x={CHART_X1} y={avgY - 8} textAnchor="end" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', fill: '#71717a' }}>
              SHORT-FORM AVG · {PLATFORM_AVG}%
            </text>

            {/* Area + line */}
            <path d={areaPath} fill="url(#retentionFill)" />
            <path d={linePath} fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />

            {/* Markers */}
            {points.map((p, i) => {
              const isActive = i === activeIdx;
              return (
                <g
                  key={RETENTION_BEATS[i].time}
                  className="cursor-pointer"
                  onClick={() => {
                    pauseThenResume();
                    setActiveIdx(i);
                  }}
                >
                  {isActive && <circle cx={p.x} cy={p.y} r="10" fill="#22d3ee" opacity="0.18" />}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isActive ? 5.5 : 3.5}
                    fill={isActive ? '#22d3ee' : '#3f3f46'}
                    stroke="#070709"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* Scrub line down to the active marker */}
            <line
              x1={points[activeIdx].x}
              y1={points[activeIdx].y}
              x2={points[activeIdx].x}
              y2={CHART_Y1}
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.5"
            />
          </svg>

          {/* Timeline scrub track */}
          <div
            ref={trackRef}
            onPointerDown={onTrackPointerDown}
            className="relative h-8 mt-2 cursor-pointer touch-none select-none"
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 rounded-full bg-zinc-800/80" />
            <div
              className="absolute top-1/2 -translate-y-1/2 left-0 h-1 rounded-full bg-[#22d3ee]/60"
              style={{ width: `${(active.time / TOTAL_DURATION) * 100}%` }}
            />
            {RETENTION_BEATS.map((b, i) => (
              <div
                key={b.time}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(b.time / TOTAL_DURATION) * 100}%` }}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? 'w-3.5 h-3.5 bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.6)]'
                      : 'w-2 h-2 bg-zinc-600'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
            <span>0:00</span>
            <span>1:00</span>
          </div>
        </div>

        {/* Callout card for the active beat */}
        <div className="relative z-10 mt-8 rounded-xl border border-zinc-800/60 bg-zinc-950/60 p-5 md:p-6">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
            <span className="text-[10px] font-mono text-zinc-500">{formatTime(active.time)}</span>
            <span className="text-[10px] font-black text-[#22d3ee] uppercase tracking-widest">{active.tag}</span>
          </div>
          <h4 className="text-base md:text-lg font-bold text-zinc-100">{active.title}</h4>
          <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed mt-1.5 max-w-xl">{active.desc}</p>
        </div>
      </div>
    </div>
  );
}

const tools = [
  {
    name: "DaVinci Resolve",
    level: "96%",
    desc: "Color Grading & Post-production",
    icon: (
      <svg viewBox="0 0 100 100" className="w-9 h-9">
        <g transform="translate(50,50) scale(0.9)">
          <path d="M0,0 C10,-25 35,-25 30,-5 C25,10 10,10 0,0" fill="#ef4444" />
          <path d="M0,0 C10,-25 35,-25 30,-5 C25,10 10,10 0,0" fill="#22c55e" transform="rotate(120)" />
          <path d="M0,0 C10,-25 35,-25 30,-5 C25,10 10,10 0,0" fill="#3b82f6" transform="rotate(240)" />
        </g>
      </svg>
    )
  },
  {
    name: "Claude",
    level: "98%",
    desc: "AI Scriptwriting & Hook Ideation",
    icon: (
      <div className="w-9 h-9 bg-[#1a120b] border border-[#d97706]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#d97706] select-none font-sans">
        Cl
      </div>
    )
  },
  {
    name: "Higgsfield",
    level: "94%",
    desc: "AI Generative Video & Camera Motion",
    icon: (
      <div className="w-9 h-9 bg-[#0b1a10] border border-[#10b981]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#10b981] select-none font-sans">
        Hf
      </div>
    )
  },
  {
    name: "Photoshop",
    level: "92%",
    desc: "Thumbnail Art & Graphics",
    icon: (
      <div className="w-9 h-9 bg-[#000a1a] border border-[#31a8ff]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#31a8ff] select-none font-sans">
        Ps
      </div>
    )
  },
  {
    name: "Audition",
    level: "90%",
    desc: "Sound Foley & Audio Cleanup",
    icon: (
      <div className="w-9 h-9 bg-[#00150a] border border-[#00e5a3]/60 rounded-lg flex items-center justify-center font-bold text-xs text-[#00e5a3] select-none font-sans">
        Au
      </div>
    )
  },
  {
    name: "Figma",
    level: "88%",
    desc: "Moodboards & Layout Design",
    icon: (
      <svg viewBox="0 0 38 57" className="w-6 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E" />
        <path d="M38 9.5C38 4.25 33.75 0 28.5 0H19V19H28.5C33.75 19 38 14.75 38 9.5Z" fill="#FF7262" />
        <path d="M19 19H9.5C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19Z" fill="#A259FF" />
        <path d="M38 28.5C38 23.25 33.75 19 28.5 19H19V38H28.5C33.75 38 38 33.75 38 28.5Z" fill="#1ABCFE" />
        <path d="M19 38H9.5C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38Z" fill="#0ACF83" />
      </svg>
    )
  }
];

const skills = [
  {
    name: "Narrative Pacing",
    level: "98%",
    desc: "Engaging retention cut flow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    )
  },
  {
    name: "Color Science",
    level: "95%",
    desc: "Cinematic look & grades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.34241 19.4975 6.00227 19.8 6.7 19.8C7.5 19.8 8.1 19.2 8.1 18.4C8.1 17.8 7.7 17.3 7.5 16.7C7.2 15.9 7 15 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 16.7614 14.7614 19 12 19C11 19 10.1 18.7 9.4 18.2C9 17.9 8.5 17.8 8 18.2C6.8 19.2 5.5 20.5 4.85857 21C6.7 21.8 9.3 22 12 22Z" />
        <circle cx="7.5" cy="10.5" r="1" fill="currentColor"/>
        <circle cx="11.5" cy="7.5" r="1" fill="currentColor"/>
        <circle cx="16.5" cy="9.5" r="1" fill="currentColor"/>
        <circle cx="15.5" cy="14.5" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "Sound Design",
    level: "94%",
    desc: "Atmospheres & Foley",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="10" width="3" height="4" rx="1" />
        <rect x="8" y="6" width="3" height="12" rx="1" />
        <rect x="14" y="3" width="3" height="18" rx="1" />
        <rect x="20" y="8" width="3" height="8" rx="1" />
      </svg>
    )
  },
  {
    name: "AI Integration",
    level: "92%",
    desc: "Gen B-Roll & Smart Editing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    name: "Thumbnail Strategy",
    level: "90%",
    desc: "Click-through rate designs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
      </svg>
    )
  },
  {
    name: "Script & Hook Analysis",
    level: "95%",
    desc: "Viral hook structuring",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-[#22d3ee]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  }
];

// Service data centralized with the bg image for each card (used for both desktop side-rail and mobile card backgrounds)
const servicesData = [
  {
    index: '01',
    name: 'AI Video Editing',
    desc: 'High-retention video post-production blending DaVinci Resolve with generative AI visual models for scroll-stopping shorts and reels.',
    image: '/services_1.png',
  },
  {
    index: '02',
    name: 'Content Strategy',
    desc: 'Engineering competitor benchmarks, timing scripts, and viral hook framework structure to secure audience retention.',
    image: '/services_2.png',
  },
  {
    index: '03',
    name: 'Prompt Engineering',
    desc: 'Crafting custom text-to-video prompts, fine-tuning visual aesthetics, and securing early access to bleeding-edge video models.',
    image: '/services_3.png',
  },
  {
    index: '04',
    name: 'AI Visual Assets',
    desc: 'Creating generative b-roll renders, chromakey blends, and unique visual layers to replace traditional expensive studio shoots.',
    image: '/services_4.png',
  },
];

// Shared service card — used in both desktop grid and mobile carousel.
// Clicking the card opens WhatsApp with a prefilled, service-specific message.
// `withBg` controls whether the card shows its own image as a background (mobile only).
function ServiceCard({ service, withBg }) {
  return (
    <a
      href={getWhatsAppLink(service.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-8 rounded-xl border border-zinc-800/80 hover:border-[#22d3ee]/40 transition-all duration-300 flex flex-col justify-between min-h-[240px] group cursor-pointer shadow-xl overflow-hidden block"
    >
      {/* Background image layer (mobile bg mode) */}
      {withBg && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-115 brightness-[0.35] group-hover:brightness-[0.45] transition-all duration-500"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          {/* Dark scrim so text stays readable over the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
        </>
      )}

      {/* Fallback flat background for desktop (no image) */}
      {!withBg && (
        <div className="absolute inset-0 bg-[#0c0c0e]/80 group-hover:bg-[#121216]/50 transition-all duration-300" />
      )}

      <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/[0.04] rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/[0.08] transition-all duration-500 z-10" />

      <div className="flex justify-between items-start w-full relative z-10">
        <span className="text-[11px] font-bold text-zinc-400 tracking-wider">[{service.index}]</span>
        <span className="text-zinc-400 group-hover:text-[#22d3ee] transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </span>
      </div>

      <div className="space-y-2 mt-12 relative z-10">
        <h4 className="text-xl font-bold tracking-wide text-zinc-100 group-hover:text-[#22d3ee] transition-colors duration-300 uppercase">
          {service.name}
        </h4>
        <p className="text-zinc-300 text-xs font-light leading-relaxed">
          {service.desc}
        </p>
      </div>
    </a>
  );
}

export default function Showcase() {
  const [skillsTab, setSkillsTab] = useState('tools');

  return (
    <section id="work" className="relative bg-[#070709] text-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-900/60 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-0 w-[50%] h-[350px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[50%] h-[350px] bg-gradient-to-t from-cyan-950/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* adding content ip */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              Content IP
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Building and curating original content experiences through professional video editing at Galaxy AI and self-created digital storytelling projects.
            </p>
          </div>

          <Carousel>
            {[
              {
                url: 'https://youtu.be/Zl6qP3ndPkk?si=m-ded9YT-Le8Ojcd',
                title: 'Magica AI for Content Creation'
              },
              {
                url: 'https://youtu.be/KOh9e5XZSD0?si=0a91KE4NjQO18YT2',
                title: 'Magica AI for Marketing'
              },
              {
                url: 'https://youtu.be/eyDbHqLTZgo?si=RKvC4fs0oQVc7Kxo',
                title: 'Magica AI for Students'
              },
              {
                url: 'https://youtu.be/T_EW2Xn46H8?si=JDKLV5G7zXVt-1jl',
                title: 'Magica AI for Fitness'
              }
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Interactive: The Retention Curve — sits right after Content IP */}
        <RetentionCurve />

        {/* Section 1: Informative and Tutorials */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              Informative and Tutorials
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Transforming complex information into clear, compelling, and memorable video lessons that captivate your audience.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/shorts/pU9K-dE1WmI', title: 'Tutorial Short #1' },
              { url: 'https://www.youtube.com/watch?v=jwaXpanqnZY&t=7s', title: 'Informative Deep Dive' },
              { url: 'https://www.youtube.com/shorts/rQ_yIAVokx4', title: 'Quick Tutorial #3' },
              { url: 'https://www.youtube.com/watch?v=mQHWh4PcZZw&t=7s', title: 'Explainer Video' },
              { url: 'https://www.youtube.com/shorts/Q6-8svA2NpM', title: 'Tutorial Short #5' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Section 1.5: Personal Services Accordion Grid (Mockup 2 Layout) */}
        <div className="space-y-8 border-t border-zinc-900/60 pt-16">
          {/* Mockup Top Header Row */}
          <div className="border-b border-zinc-800/60 pb-4 flex justify-between items-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <span></span>
            <span>[ Services ]</span>
            <span></span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4 pb-12">
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
              LET'S ACHIEVE<br />
              <span className="text-[#22d3ee]">GREATNESS</span>
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Ready to evolve your content and scale your audience? Let's discuss your next campaign.
            </p>
          </div>

          {/* Desktop View (visible on lg screens and above) */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-6 lg:w-full">
            
            {/* Top Row: Services 01 & 02 with side images 1 & 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              
              {/* Left Column Image 1 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_1.png" alt="AI video post-production workspace" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

              {/* Center Services Cards 01 & 02 */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <ServiceCard service={servicesData[0]} withBg={false} />
                <ServiceCard service={servicesData[1]} withBg={false} />
              </div>

              {/* Right Column Image 2 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_2.png" alt="Futuristic content analytics chart" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

            </div>

            {/* Bottom Row: Services 03 & 04 with side images 3 & 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
              
              {/* Left Column Image 3 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_3.png" alt="Cinematic professional camera rig" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

              {/* Center Services Cards 03 & 04 */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <ServiceCard service={servicesData[2]} withBg={false} />
                <ServiceCard service={servicesData[3]} withBg={false} />
              </div>

              {/* Right Column Image 4 */}
              <div className="hidden lg:block lg:col-span-2 select-none pointer-events-none">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-950/40 shadow-lg">
                  <img src="/services_4.png" alt="Futuristic code streams and digital art" className="w-full h-full object-cover filter grayscale contrast-115 brightness-95" />
                </div>
              </div>

            </div>

            {/* View All button — desktop, below the cards */}
            <div className="flex justify-center pt-4">
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-widest hover:border-[#22d3ee] hover:text-[#22d3ee] hover:bg-[#22d3ee]/5 transition-all duration-300"
              >
                View All Services
                
              </a>
            </div>

          </div>

          {/* Mobile/Tablet View Carousel (visible only on screens smaller than lg) */}
          <div className="lg:hidden w-full space-y-6">
            <Carousel>
              {servicesData.map((service) => (
                <div key={service.index} className="w-full sm:w-[calc(50%-8px)] shrink-0 snap-start">
                  <ServiceCard service={service} withBg={true} />
                </div>
              ))}
            </Carousel>

            {/* View All button — mobile, below the carousel arrows */}
            <div className="flex justify-center">
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-zinc-700 text-zinc-200 text-xs font-bold uppercase tracking-widest hover:border-[#22d3ee] hover:text-[#22d3ee] hover:bg-[#22d3ee]/5 transition-all duration-300"
              >
                View All Services
                
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: AI Enhanced Visuals */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              AI Enhanced Visuals
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Leveraging cutting-edge AI to craft unique, eye-catching visuals that make every second count.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/watch?v=Z3q1wBjtOOA&t=5s', title: 'AI Enhanced Visual #1' },
              { url: 'https://www.youtube.com/shorts/Rc02EPwSn9k', title: 'AI Short #2' },
              { url: 'https://www.youtube.com/shorts/vTnGYNpm4eE', title: 'AI Visual #3' },
              { url: 'https://www.youtube.com/shorts/TVLivpjeAhM', title: 'AI Short #4' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Section: Skills & Favorite Tools */}
        <div className="space-y-12 border-t border-zinc-900/60 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#22d3ee] uppercase block">
              Visit My Skill & Hire Me
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans">
              My Skills & Favorite Tools
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Explore the advanced editing software, post-production gear, and creative skills I use daily to craft visually stunning, high-retention content.
            </p>
          </div>

          {/* Toggle Switcher */}
          <div className="flex justify-center">
            <div className="bg-[#0e0e12]/80 border border-zinc-800/60 p-1.5 rounded-full flex items-center space-x-1 shadow-inner relative z-10">
              <button
                onClick={() => setSkillsTab('tools')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  skillsTab === 'tools'
                    ? 'bg-[#22d3ee] text-black shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tools
              </button>
              <button
                onClick={() => setSkillsTab('skills')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  skillsTab === 'skills'
                    ? 'bg-[#22d3ee] text-black shadow-lg'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Skills
              </button>
            </div>
          </div>

          {/* Skills Carousel */}
          <div className="relative z-10 pt-4 w-full">
            <Carousel>
              {(skillsTab === 'tools' ? tools : skills).map((item, idx) => (
                <div
                  key={idx}
                  className="w-[calc(50%-8px)] sm:w-[calc(33.333%-10.67px)] lg:w-[calc(16.666%-13.33px)] shrink-0 snap-start rounded-full bg-[#0c0c0e]/80 border border-zinc-800/80 hover:border-[#22d3ee]/40 flex flex-col items-center justify-between p-5 py-10 md:py-12 min-h-[290px] md:min-h-[320px] transition-all duration-500 ease-out cursor-pointer relative overflow-hidden group hover:-translate-y-1.5 hover:bg-[#121216]/50 shadow-xl hover:shadow-[0_12px_35px_-6px_rgba(34,211,238,0.3)]"
                >
                  {/* Top Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-zinc-950/60 border border-zinc-800/40 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-zinc-900 group-hover:border-[#22d3ee]/20 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-1 flex-1 flex flex-col justify-center my-3">
                    <h4 className="text-xs md:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors uppercase tracking-wider">
                      {item.name}
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-zinc-500 font-light group-hover:text-zinc-400 transition-colors px-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-sm font-black text-[#22d3ee] tracking-widest mt-2 group-hover:scale-105 transition-transform">
                    {item.level}
                  </div>

                  {/* Bottom glowing line on hover - Cyan theme instead of red line */}
                  <div className="absolute bottom-4 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />
                  <div className="absolute -bottom-10 left-1/4 right-1/4 h-16 bg-[#22d3ee]/15 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Section 3: Dynamic Social Reels */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-100 font-sans">
              Dynamic Social Reels
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
              Crafting high-energy, scroll-stopping social reels that grab attention in the first three seconds and hold it.
            </p>
          </div>

          <Carousel>
            {[
              { url: 'https://www.youtube.com/shorts/bBU4qd--KEg', title: 'Scroll-Stopper Reel #1' },
              { url: 'https://www.youtube.com/shorts/TQs1V0PKCXA', title: 'Social Reel #2' },
              { url: 'https://www.youtube.com/shorts/bkSZpa4B8Y0', title: 'Dynamic Cut #3' },
              { url: 'https://www.youtube.com/shorts/1Eb-FVAFAlU', title: 'Viral Hook Reel #4' },
            ].map((v) => (
              <div key={v.url} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-12px)] shrink-0 snap-start aspect-square">
                <YouTubeCard url={v.url} title={v.title} />
              </div>
            ))}
          </Carousel>
        </div>

      </div>

    </section>
  );
}