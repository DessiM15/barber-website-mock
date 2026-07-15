import Image from "next/image";
import { Instagram, Scissors } from "@/components/icons";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { team } from "@/lib/site";

export const metadata = {
  title: "Our Barbers — The Houston Barber",
  description:
    "Meet the master barbers behind The Houston Barber. Skilled hands, decades of craft, and a genuine love for the trade.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Craftsmen"
        title="Meet Your Barbers"
        subtitle="Every chair is run by a licensed professional with a signature style. Find your match and book directly."
        image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe space-y-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 2) * 0.06}>
              <div
                className={`grid overflow-hidden rounded-2xl border border-ink-line bg-ink-card md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="eyebrow">{member.role}</p>
                  <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
                    {member.name}
                  </h2>
                  <p className="mt-5 leading-relaxed text-cream/65">
                    {member.bio}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.15em] text-cream/45">
                      Specialties
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.specialties.map((sp) => (
                        <span
                          key={sp}
                          className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-xs text-gold"
                        >
                          <Scissors className="h-3 w-3" />
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <BookButton withIcon={false}>
                      Book with {member.name.split(" ")[0]}
                    </BookButton>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="rounded-full border border-ink-line p-3 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
