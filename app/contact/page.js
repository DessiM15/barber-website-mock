import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "@/components/icons";
import { PageHero } from "@/components/Section";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact & Hours — The Houston Barber",
  description:
    "Visit The Houston Barber on Washington Ave. Hours, location, phone, and directions.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Come See Us"
        title="Visit the Shop"
        subtitle="Right in the heart of Houston's Washington Ave. Free parking, easy in and out."
        image="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <div className="space-y-6">
              <div className="card flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-cream">Location</h3>
                  <p className="mt-1 text-sm text-cream/65">{site.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      site.mapsQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold underline-offset-4 hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="card flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream">Call</h3>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block text-sm text-cream/65 hover:text-gold"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="card flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream">Email</h3>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block break-all text-sm text-cream/65 hover:text-gold"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-lg text-cream">Hours</h3>
                </div>
                <ul className="mt-4 divide-y divide-ink-line">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between py-2.5 text-sm"
                    >
                      <span className="text-cream/60">{h.day}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "text-cream/40"
                            : "text-cream/85"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-ink-line p-3 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-ink-line p-3 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <BookButton className="w-full sm:w-auto">
                Book an Appointment
              </BookButton>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-ink-line">
              <iframe
                title="The Houston Barber location"
                src={mapSrc}
                className="h-full min-h-[420px] w-full"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
