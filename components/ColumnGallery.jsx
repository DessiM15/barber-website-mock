"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "@/components/icons";

// 4 evenly-filled columns; alternating columns scroll up / down on an
// infinite loop (opposition effect). Hover a column to pause it and click
// any image to open it in the lightbox.
export default function ColumnGallery({ images, columns = 4 }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Distribute images round-robin so neighbouring columns differ.
  const cols = Array.from({ length: columns }, () => []);
  images.forEach((src, i) => cols[i % columns].push(src));

  return (
    <>
      <div
        className="relative grid h-[80vh] grid-cols-2 gap-3 overflow-hidden md:grid-cols-4"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        {cols.map((col, ci) => {
          const loop = [...col, ...col]; // duplicate for seamless wrap
          const down = ci % 2 === 1;
          return (
            <div key={ci} className="group relative overflow-hidden">
              <div
                className="flex flex-col gap-3 will-change-transform group-hover:[animation-play-state:paused]"
                style={{
                  animation: `thb-scroll 40s linear infinite`,
                  animationDirection: down ? "reverse" : "normal",
                }}
              >
                {loop.map((src, i) => (
                  <button
                    key={`${ci}-${i}`}
                    onClick={() => setActive(src)}
                    className="group/img relative block w-full overflow-hidden rounded-xl"
                    aria-label="View photo"
                  >
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={src}
                        alt="The Houston Barber gallery"
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <span className="absolute inset-0 bg-ink/0 transition-colors group-hover/img:bg-ink/15" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes thb-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="thb-scroll"] { animation: none !important; }
        }
      `}</style>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream/80 transition-colors hover:text-gold"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl">
            <Image
              src={active}
              alt="The Houston Barber gallery — enlarged"
              width={1200}
              height={1600}
              className="mx-auto h-auto max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
