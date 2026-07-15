import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";

export const metadata = {
  title: "About — The Houston Barber",
  description:
    "The story behind The Houston Barber — a high-class barbershop built on craft, community, and hospitality.",
};

const values = [
  {
    title: "Craft over speed",
    text: "We never rush a cut. Great work takes the time it takes — and it shows in the finish.",
  },
  {
    title: "A room with soul",
    text: "Warm lighting, good music, and easy conversation. The shop is as much a hangout as a service.",
  },
  {
    title: "Everyone's welcome",
    text: "First cut or fiftieth, kid or grandfather — you'll leave feeling like a regular.",
  },
];

const timeline = [
  { year: "2012", text: "Marcus opens a single chair on Washington Ave." },
  { year: "2016", text: "The shop expands to four chairs and a full team." },
  { year: "2020", text: "Launched online booking — never wait on a call again." },
  { year: "2024", text: "Named one of Houston's top-rated barbershops." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A cut above, since 2012"
        subtitle="What started as one chair and a sharp pair of shears grew into one of Houston's most-loved barbershops."
        image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=1000&q=80"
                alt="Inside The Houston Barber"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why we do it"
              title="More than a haircut"
              subtitle="We believe how you look shapes how you feel — and how you feel shapes your day. Our job is to send you back out sharper, taller, and ready for whatever's next."
            />
            <p className="mt-6 leading-relaxed text-cream/65">
              Every member of our team is licensed, seasoned, and obsessed with
              the details most people never notice — but everyone feels. From the
              first consultation to the final hot-towel finish, we sweat the small
              stuff so you don&apos;t have to.
            </p>
            <div className="mt-8">
              <BookButton>Book Your First Visit</BookButton>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-ink-line bg-ink-soft py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our Values"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-8">
                  <div className="font-display text-5xl text-gold/25">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-xl text-cream">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="The journey" title="How we got here" />
          <div className="mx-auto mt-14 max-w-2xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-sm text-gold">
                      {t.year}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-ink-line" />
                    )}
                  </div>
                  <p className="pt-4 text-cream/75">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
