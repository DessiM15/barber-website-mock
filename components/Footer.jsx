import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "@/components/icons";
import Logo from "@/components/Logo";
import BookButton from "@/components/BookButton";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      {/* CTA band */}
      <div className="border-b border-ink-line">
        <div className="container-luxe flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h3 className="mt-3 font-display text-3xl text-cream md:text-4xl">
              Your chair is waiting.
            </h3>
          </div>
          <BookButton>Book Your Appointment</BookButton>
        </div>
      </div>

      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            A high-class barbershop in the heart of Houston. Precision cuts,
            classic shaves, and a room built for gentlemen.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-ink-line p-2.5 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-ink-line p-2.5 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-cream/60">{h.day}</span>
                <span
                  className={
                    h.time === "Closed" ? "text-cream/40" : "text-cream/85"
                  }
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Mockup crafted for demonstration · Booking via StyleSeat · Images via
            Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}
