"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 0.05}>
            <button
              onClick={() => setActive(src)}
              className="group relative block w-full overflow-hidden rounded-xl"
              aria-label="View photo"
            >
              <Image
                src={src}
                alt="The Houston Barber gallery"
                width={600}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
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
