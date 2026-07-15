import Image from "next/image";
import Link from "next/link";
import { Scissors, Clock, Award, Sparkles, ArrowRight, Star } from "@/components/icons";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { SectionHeading, Marquee } from "@/components/Section";
import { services, team, reviews, gallery, site } from "@/lib/site";

const perks = [
  {
    icon: Scissors,
    title: "Precision Craft",
    text: "Every cut is tailored to your face, your hair, and your lifestyle — never rushed.",
  },
  {
    icon: Award,
    title: "Master Barbers",
    text: "A licensed team with decades of combined experience behind the chair.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    text: "Hot towels, a cold drink, and a room that feels as sharp as the cut.",
  },
  {
    icon: Clock,
    title: "Book in Seconds",
    text: "Live availability through StyleSeat — reserve your chair anytime, day or night.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={["Precision Fades", "Straight-Razor Shaves", "Beard Sculpting", "Classic Cuts", "Hot-Towel Finish"]}
      />

      {/* About strip */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Barber giving a precision cut at The Houston Barber"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/30 bg-ink-card p-6 shadow-2xl md:block">
              <div className="font-display text-4xl text-gold">4.9</div>
              <div className="mt-1 flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <div className="mt-1 text-xs text-cream/60">Google rating</div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to the chair"
              title="Where a haircut becomes a ritual"
              subtitle="The Houston Barber was built on a simple idea — that grooming should feel like an escape, not an errand. From the moment you walk in, you're in good hands: a warm greeting, a sharp cut, and details that set the standard for the city."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {perks.map((p) => (
                <Reveal key={p.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/60">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-gold"
              >
                Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-ink-line bg-ink-soft py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Menu"
            title="Signature Services"
            subtitle="Handcrafted grooming, priced with no surprises. Every service finishes with our signature hot-towel touch."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.08}>
                <div className="group card h-full p-7 transition-colors hover:border-gold/40">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl text-cream">{s.name}</h3>
                    <div className="text-right">
                      <div className="font-display text-2xl text-gold">
                        ${s.price}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream/45">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {s.duration}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookButton>Book a Service</BookButton>
            <Link href="/services" className="btn-outline">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Craftsmen"
            title="Meet Your Barbers"
            subtitle="Skilled hands, steady eyes, and a genuine love for the craft. Pick your barber and book with them directly."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-ink-line bg-ink-card">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-cream">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-gold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/team" className="btn-outline">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="border-y border-ink-line bg-ink-soft py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Work"
            title="Fresh From the Chair"
            subtitle="A look at the cuts, fades, and finishes leaving our shop every day."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.slice(0, 6).map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 3) * 0.06}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "row-span-2 md:col-span-1" : ""
                }`}
              >
                <div
                  className={`group relative ${
                    i === 0 ? "aspect-[3/4] md:h-full" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Fresh cut at The Houston Barber"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn-outline">
              View the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Word on the Street"
            title="What Houston Says"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="card h-full p-8">
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-cream/80">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink-line pt-5">
                    <div className="font-display text-lg text-cream">
                      {r.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-gold">
                      {r.role}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/reviews" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="container-luxe relative z-10 py-28 text-center">
          <Reveal>
            <p className="eyebrow">Look sharp. Feel sharper.</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl text-cream md:text-6xl">
              Book your seat at{" "}
              <span className="text-gradient-gold">The Houston Barber</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-cream/70">
              Reserve in seconds through StyleSeat. Walk out looking like the
              best version of yourself.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <BookButton className="text-base">Book Now</BookButton>
              <a href={site.phoneHref} className="btn-outline text-base">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
