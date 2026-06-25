'use client';

/**
 * FloatingObjects — decorative animated 3D shapes for section backgrounds.
 *
 * Props:
 *   id        — unique string prefix so gradient IDs don't clash across instances
 *   variant   — 'left' | 'right' | 'both' (which side(s) to place objects on)
 *   className — extra classes on the wrapper
 */
export default function FloatingObjects({ id = 'fo', variant = 'both', className = '' }) {
  const base = 'pointer-events-none select-none absolute z-0';
  const cls = `opacity-30 filter grayscale drop-shadow-[0_8px_16px_rgba(255,255,255,0.05)]`;

  return (
    <div className={`${base} inset-0 overflow-hidden ${className}`} aria-hidden="true">

      {/* ── LEFT SIDE ─────────────────────────────────────────── */}
      {(variant === 'left' || variant === 'both') && (
        <>
          {/* Torus — top left */}
          <div className="hidden lg:block absolute top-[8%] left-[1.5%] animate-float-all-1">
            <svg width="88" height="88" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <radialGradient id={`${id}-torus-l`} cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#a1a1aa" />
                  <stop offset="100%" stopColor="#27272a" />
                </radialGradient>
              </defs>
              <path
                d="M100 30 C138.66 30,170 61.34,170 100 C170 138.66,138.66 170,100 170 C61.34 170,30 138.66,30 100 C30 61.34,61.34 30,100 30 Z M100 65 C119.33 65,135 80.67,135 100 C135 119.33,119.33 135,100 135 C80.67 135,65 119.33,65 100 C65 80.67,80.67 65,100 65 Z"
                fill={`url(#${id}-torus-l)`}
              />
            </svg>
          </div>

          {/* Sphere — lower left */}
          <div className="hidden lg:block absolute bottom-[12%] left-[2.5%] animate-float-all-2">
            <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <radialGradient id={`${id}-sphere-l`} cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#71717a" />
                  <stop offset="100%" stopColor="#18181b" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill={`url(#${id}-sphere-l)`} />
            </svg>
          </div>

          {/* Triangle — mid left */}
          <div className="hidden xl:block absolute top-[48%] left-[1%] animate-float-all-1" style={{ animationDelay: '2s' }}>
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <linearGradient id={`${id}-tri-l`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#52525b" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>
              </defs>
              <path d="M50 15 L85 80 L15 80 Z" fill={`url(#${id}-tri-l)`} />
            </svg>
          </div>
        </>
      )}

      {/* ── RIGHT SIDE ────────────────────────────────────────── */}
      {(variant === 'right' || variant === 'both') && (
        <>
          {/* Worm/blob — upper right */}
          <div className="hidden lg:block absolute top-[10%] right-[1.5%] animate-float-all-2">
            <svg width="96" height="96" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <linearGradient id={`${id}-worm-r`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#71717a" />
                  <stop offset="100%" stopColor="#18181b" />
                </linearGradient>
              </defs>
              <path
                d="M50,100 C30,70 60,30 100,30 C140,30 170,70 150,100 C130,130 160,170 100,170 C40,170 70,130 50,100 Z"
                fill="none"
                stroke={`url(#${id}-worm-r)`}
                strokeWidth="28"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Triangle — mid right */}
          <div className="hidden lg:block absolute top-[44%] right-[2%] animate-float-all-1" style={{ animationDelay: '3s' }}>
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <linearGradient id={`${id}-tri-r`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#52525b" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>
              </defs>
              <path d="M50 15 L85 80 L15 80 Z" fill={`url(#${id}-tri-r)`} />
            </svg>
          </div>

          {/* Torus — lower right */}
          <div className="hidden xl:block absolute bottom-[8%] right-[2%] animate-float-all-2" style={{ animationDelay: '1.5s' }}>
            <svg width="72" height="72" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls}>
              <defs>
                <radialGradient id={`${id}-torus-r`} cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#a1a1aa" />
                  <stop offset="100%" stopColor="#27272a" />
                </radialGradient>
              </defs>
              <path
                d="M100 30 C138.66 30,170 61.34,170 100 C170 138.66,138.66 170,100 170 C61.34 170,30 138.66,30 100 C30 61.34,61.34 30,100 30 Z M100 65 C119.33 65,135 80.67,135 100 C135 119.33,119.33 135,100 135 C80.67 135,65 119.33,65 100 C65 80.67,80.67 65,100 65 Z"
                fill={`url(#${id}-torus-r)`}
              />
            </svg>
          </div>
        </>
      )}

    </div>
  );
}
