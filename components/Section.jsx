import Image from "next/image";
import Reveal from "@/components/Reveal";

// Interior page hero with image background + gold eyebrow.
export function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden pt-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      <div className="container-luxe relative z-10 py-20 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl leading-tight text-cream md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-base text-cream/70 md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mx-auto mt-8 gold-rule" />
        </Reveal>
      </div>
    </section>
  );
}

// Centered section heading.
export function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-cream/65">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 gold-rule ${align === "center" ? "mx-auto" : ""}`} />
    </Reveal>
  );
}

// Scrolling marquee band.
export function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-ink-line bg-ink-soft py-6">
      <div className="flex min-w-full shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl tracking-wide text-cream/80">
              {t}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}
