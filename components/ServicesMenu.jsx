"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Star } from "@/components/icons";

// Editorial services menu: pick a category, its services reveal below with
// fine-dining-style dotted leader lines out to the price.
export default function ServicesMenu({ services, categories }) {
  const cats = categories.filter((c) => services.some((s) => s.category === c));
  const [active, setActive] = useState(cats[0]);
  const items = services.filter((s) => s.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {cats.map((c) => {
          const count = services.filter((s) => s.category === c).length;
          const on = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`group flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                on
                  ? "border-gold bg-gold text-ink"
                  : "border-ink-line text-cream/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {c}
              <span
                className={`text-xs ${on ? "text-ink/60" : "text-cream/40"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Menu for the active category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-3xl"
        >
          {items.map((s) => (
            <div
              key={s.name}
              className="group border-b border-ink-line py-7 first:border-t"
            >
              <div className="flex items-end gap-3">
                <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-gold md:text-3xl">
                  {s.name}
                </h3>
                {s.featured && (
                  <Star className="mb-1.5 h-4 w-4 shrink-0 fill-gold text-gold" />
                )}
                {/* dotted leader */}
                <span className="mb-2 h-px flex-1 border-b border-dotted border-cream/25" />
                <span className="font-display text-2xl text-gold md:text-3xl">
                  ${s.price}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                <p className="max-w-xl text-sm leading-relaxed text-cream/60">
                  {s.desc}
                </p>
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-cream/45">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
