// The Houston Barber — logo mark (H monogram framed by a barber-pole crest)
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="The Houston Barber crest"
    >
      <defs>
        <linearGradient id="thb-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e6c987" />
          <stop offset="55%" stopColor="#c8a253" />
          <stop offset="100%" stopColor="#a07d34" />
        </linearGradient>
      </defs>
      {/* Outer shield */}
      <path
        d="M32 2 L58 11 V32 C58 47 46 57 32 62 C18 57 6 47 6 32 V11 Z"
        fill="none"
        stroke="url(#thb-gold)"
        strokeWidth="2.2"
      />
      {/* Inner hairline */}
      <path
        d="M32 8 L52 15 V32 C52 43.5 43 51.5 32 55.6 C21 51.5 12 43.5 12 32 V15 Z"
        fill="none"
        stroke="url(#thb-gold)"
        strokeWidth="0.9"
        opacity="0.55"
      />
      {/* H monogram */}
      <g fill="url(#thb-gold)">
        <rect x="22" y="18" width="4.2" height="26" rx="1" />
        <rect x="37.8" y="18" width="4.2" height="26" rx="1" />
        <rect x="22" y="29" width="20" height="4" rx="1" />
      </g>
      {/* Straight-razor accent under the H */}
      <path
        d="M20 49 h24"
        stroke="url(#thb-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="49" r="1.6" fill="url(#thb-gold)" />
    </svg>
  );
}

export default function Logo({ stacked = false, className = "" }) {
  if (stacked) {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <LogoMark className="h-12 w-12" />
        <div className="text-center leading-none">
          <div className="font-display text-lg tracking-[0.2em] text-cream">
            THE HOUSTON
          </div>
          <div className="font-display text-sm tracking-[0.55em] text-gold">
            BARBER
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark />
      <div className="leading-none">
        <div className="font-display text-base tracking-[0.18em] text-cream">
          THE HOUSTON
        </div>
        <div className="font-display text-[0.7rem] tracking-[0.5em] text-gold">
          BARBER
        </div>
      </div>
    </div>
  );
}
