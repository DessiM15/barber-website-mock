import { Calendar, Clock, ShieldCheck, Smartphone } from "@/components/icons";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import StyleSeatEmbed from "@/components/StyleSeatEmbed";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book Now — The Houston Barber",
  description:
    "Reserve your chair at The Houston Barber. Live availability and instant confirmation, powered by StyleSeat.",
};

const steps = [
  { icon: Calendar, title: "Pick a service", text: "Choose from cuts, shaves, beard work, and full packages." },
  { icon: Clock, title: "Choose a time", text: "See live availability for your barber and lock it in." },
  { icon: ShieldCheck, title: "Confirm instantly", text: "Secure booking with instant confirmation via StyleSeat." },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Reserve Your Chair"
        title="Book in Seconds"
        subtitle="Live availability, instant confirmation. Reserve your appointment below — securely powered by StyleSeat."
        image="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Steps */}
      <section className="border-b border-ink-line py-14">
        <div className="container-luxe grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm text-gold">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg text-cream">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-cream/60">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Embed */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <Reveal>
            <StyleSeatEmbed />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
              <div className="flex items-center gap-2 text-sm text-cream/60">
                <Smartphone className="h-4 w-4 text-gold" />
                Prefer to call? Reach us at{" "}
                <a href={site.phoneHref} className="text-gold hover:underline">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
