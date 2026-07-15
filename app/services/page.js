import { Clock, Check, Star } from "@/components/icons";
import { PageHero, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { services } from "@/lib/site";

export const metadata = {
  title: "Services & Pricing — The Houston Barber",
  description:
    "Precision cuts, skin fades, straight-razor shaves, beard sculpting, and complete grooming packages. Transparent pricing, no surprises.",
};

const included = [
  "Complimentary consultation",
  "Hot-towel finish on every cut",
  "Premium products & tools",
  "A cold drink on the house",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        title="The Menu"
        subtitle="Handcrafted grooming for the modern gentleman. Straightforward pricing — every service ends with our signature hot-towel touch."
        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 0.06}>
              <div
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-ink-card p-8 transition-colors ${
                  s.featured
                    ? "border-gold/40"
                    : "border-ink-line hover:border-gold/30"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-6 top-6 flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-gold">
                    <Star className="h-3 w-3 fill-gold" /> Signature
                  </span>
                )}
                <div>
                  <h3 className="font-display text-2xl text-cream">{s.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-ink-line pt-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-cream/45">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {s.duration}
                  </div>
                  <div className="font-display text-3xl text-gradient-gold">
                    ${s.price}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-ink-line bg-ink-soft py-20 md:py-28">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Always included"
            title="Every visit, elevated"
            subtitle="No add-on games. When you sit in our chair, the full experience comes standard."
          />
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-ink-line bg-ink-card p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-cream/80">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 text-center md:py-24">
        <div className="container-luxe">
          <Reveal>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Found your service?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/65">
              Pick a time that works for you — live availability, instant
              confirmation.
            </p>
            <div className="mt-8">
              <BookButton className="text-base">Book Now</BookButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
