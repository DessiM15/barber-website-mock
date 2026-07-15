"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, MapPin } from "@/components/icons";
import { LogoMark } from "@/components/Logo";
import BookButton from "@/components/BookButton";
import { HERO_VIDEOS, HERO_POSTER, site } from "@/lib/site";

export default function Hero() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();

  // Hero logo fades/rises out as you scroll — it "hands off" to the
  // logo that fades into the centered navbar (see Navbar.jsx).
  const logoOpacity = useTransform(scrollY, [0, 240], [1, 0]);
  const logoY = useTransform(scrollY, [0, 240], [0, -40]);
  const logoScale = useTransform(scrollY, [0, 240], [1, 0.82]);

  // Crossfade between the montage clips.
  useEffect(() => {
    if (HERO_VIDEOS.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % HERO_VIDEOS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background montage — stacked clips crossfade in sequence.
          👉 Swap clips in HERO_VIDEOS (lib/site.js) with your own footage. */}
      <div className="absolute inset-0">
        {HERO_VIDEOS.map((src, i) => (
          <video
            key={src}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-ink/25" />

      {/* Centered hero content */}
      <motion.div
        style={{ opacity: logoOpacity, y: logoY, scale: logoScale }}
        className="container-luxe relative z-10 flex flex-col items-center text-center"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-luxe text-gold">
            Est. Houston, Texas
          </p>
          <span className="h-px w-8 bg-gold/60" />
        </div>

        {/* Big stacked logo */}
        <div className="mt-8 flex flex-col items-center">
          <LogoMark className="h-16 w-16 md:h-20 md:w-20" />
          <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            The Houston
          </h1>
          <div className="mt-2 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/50 md:w-16" />
            <span className="font-display text-2xl italic tracking-[0.35em] text-gold md:text-3xl">
              Barber
            </span>
            <span className="h-px w-10 bg-gold/50 md:w-16" />
          </div>
        </div>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
          Precision fades, straight-razor shaves, and beard sculpting in a room
          built for the modern gentleman.
        </p>

        {/* CTAs centered under the logo */}
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <BookButton className="text-base">Book Your Cut</BookButton>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              site.mapsQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base"
          >
            <MapPin className="h-4 w-4" />
            Find the Shop
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold" />
            ))}
          </div>
          <span className="text-sm tracking-wide text-cream/65">
            500+ five-star cuts in Houston
          </span>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
