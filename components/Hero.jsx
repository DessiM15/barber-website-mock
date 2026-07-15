"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "@/components/icons";
import BookButton from "@/components/BookButton";
import { HERO_VIDEO, HERO_POSTER, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background video with poster fallback.
          👉 Swap HERO_VIDEO in lib/site.js with your own shop footage. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      <div className="container-luxe relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </div>
            <span className="text-sm tracking-wide text-cream/70">
              500+ five-star cuts in Houston
            </span>
          </div>

          <p className="eyebrow mt-8">Est. Houston, Texas</p>

          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Master Cuts.
            <br />
            <span className="text-gradient-gold">Timeless Style.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
            Precision fades, straight-razor shaves, and beard sculpting in a room
            built for the modern gentleman. Sharp looks, warm hospitality — every
            single visit.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
        </motion.div>
      </div>

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
