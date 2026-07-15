import { Star, Quote } from "@/components/icons";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { reviews } from "@/lib/site";

export const metadata = {
  title: "Reviews — The Houston Barber",
  description:
    "See why Houston keeps coming back. Real reviews from real clients of The Houston Barber.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Word on the Street"
        title="What Houston Says"
        subtitle="Rated 4.9 across 500+ reviews. Here's a taste of what our clients tell their friends."
        image="https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Rating summary */}
      <section className="border-b border-ink-line py-14">
        <div className="container-luxe flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          <div className="text-center">
            <div className="font-display text-6xl text-gradient-gold">4.9</div>
            <div className="mt-2 flex justify-center text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold" />
              ))}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.15em] text-cream/50">
              Average rating
            </div>
          </div>
          <div className="h-16 w-px bg-ink-line hidden sm:block" />
          <div className="text-center">
            <div className="font-display text-6xl text-cream">500+</div>
            <div className="mt-3 text-xs uppercase tracking-[0.15em] text-cream/50">
              Verified reviews
            </div>
          </div>
          <div className="h-16 w-px bg-ink-line hidden sm:block" />
          <div className="text-center">
            <div className="font-display text-6xl text-cream">98%</div>
            <div className="mt-3 text-xs uppercase tracking-[0.15em] text-cream/50">
              Would recommend
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.06}>
                <figure className="card p-8">
                  <Quote className="h-8 w-8 text-gold/40" />
                  <blockquote className="mt-4 leading-relaxed text-cream/80">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-ink-line pt-5">
                    <div>
                      <div className="font-display text-lg text-cream">
                        {r.name}
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-gold">
                        {r.role}
                      </div>
                    </div>
                    <div className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-gold" />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <h2 className="font-display text-3xl text-cream md:text-4xl">
                Join the regulars.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-cream/65">
                There&apos;s a reason they keep coming back. Come see for yourself.
              </p>
              <div className="mt-8">
                <BookButton className="text-base">Book Your Cut</BookButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
