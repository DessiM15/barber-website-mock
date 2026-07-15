"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "@/components/icons";
import Reveal from "@/components/Reveal";

// Static, even grid of images with a click-to-open lightbox.
export default function StaticGallery({ images }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 0.05}>
            <button
              onClick={() => setActive(src)}
              className="group relative block w-full overflow-hidden rounded-xl"
              aria-label="View photo"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={src}
                  alt="The Houston Barber gallery"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/15" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

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
