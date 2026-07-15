"use client";

import { useState } from "react";
import { ExternalLink, Calendar } from "@/components/icons";
import { STYLESEAT_URL } from "@/lib/site";

// ─────────────────────────────────────────────────────────────
// StyleSeat booking embed.
//
// NOTE: StyleSeat does not officially support iframe embedding on
// every plan, and some profiles set X-Frame-Options that block it.
// We attempt an inline iframe; if it fails to load, users still get
// a prominent, always-working "Open StyleSeat" button + deep link.
//
// 👉 Set your real profile URL in lib/site.js (STYLESEAT_URL).
// ─────────────────────────────────────────────────────────────
export default function StyleSeatEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-ink-line bg-ink-card">
        {/* Fallback / loading layer */}
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-ink-card px-6 text-center">
            <Calendar className="h-10 w-10 text-gold" />
            <div>
              <p className="font-display text-2xl text-cream">
                Loading live availability…
              </p>
              <p className="mt-2 max-w-md text-sm text-cream/60">
                If the calendar doesn&apos;t appear, your browser or the
                StyleSeat plan may block embedding. Use the button below to book
                in a new tab — it always works.
              </p>
            </div>
            <a
              href={STYLESEAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <ExternalLink className="h-4 w-4" />
              Open StyleSeat
            </a>
          </div>
        )}

        <iframe
          src={STYLESEAT_URL}
          title="Book with The Houston Barber on StyleSeat"
          className="h-[820px] w-full"
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-center text-xs text-cream/50">
        Booking securely powered by StyleSeat.{" "}
        <a
          href={STYLESEAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-4 hover:underline"
        >
          Open in a new tab
        </a>
      </p>
    </div>
  );
}
