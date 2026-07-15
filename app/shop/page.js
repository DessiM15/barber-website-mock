import Image from "next/image";
import { ShoppingBag } from "@/components/icons";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { products } from "@/lib/site";

export const metadata = {
  title: "Shop — The Houston Barber",
  description:
    "Take the shop home. Premium pomades, beard oils, and grooming tools curated by our barbers.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Grooming Goods"
        title="Take the Shop Home"
        subtitle="The same premium products we use in the chair — curated by our barbers, built to last."
        image="https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.06}>
                <div className="group overflow-hidden rounded-2xl border border-ink-line bg-ink-card transition-colors hover:border-gold/30">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    {p.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-cream">
                        {p.name}
                      </h3>
                      <div className="font-display text-xl text-gold">
                        ${p.price}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">
                      {p.desc}
                    </p>
                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold/10">
                      <ShoppingBag className="h-4 w-4" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-xs text-cream/40">
              Online checkout is a demo in this mockup. Products are also
              available in-shop — ask your barber.
            </p>
          </Reveal>

          <div className="mt-14 rounded-2xl border border-ink-line bg-ink-soft p-10 text-center md:p-14">
            <Reveal>
              <h2 className="font-display text-3xl text-cream md:text-4xl">
                Not sure what your hair needs?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-cream/65">
                Book a cut and your barber will build a simple routine tailored to
                you — no guesswork.
              </p>
              <div className="mt-8">
                <BookButton>Book a Consultation</BookButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
