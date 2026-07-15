"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "@/components/icons";
import Logo from "@/components/Logo";
import BookButton from "@/components/BookButton";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLeft = nav.slice(0, 4);
  const navRight = nav.slice(4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // On the homepage the hero owns the big centered logo, so the navbar
  // logo only fades in once you scroll. On every other page there's no
  // hero logo, so show the navbar logo immediately.
  const isHome = pathname === "/";
  const showLogo = scrolled || !isHome;

  const linkClass = (href) =>
    `link-nav ${pathname === href ? "text-gold after:w-full" : ""}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-ink-line/70 bg-ink/90 backdrop-blur-md"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="container-luxe relative flex h-20 items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden flex-1 items-center gap-6 lg:flex">
          {navLeft.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Centered logo — crossfades in */}
        <Link
          href="/"
          aria-label="The Houston Barber — home"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
            showLogo
              ? "translate-y-[-50%] opacity-100"
              : "pointer-events-none translate-y-[-30%] opacity-0"
          }`}
        >
          <Logo />
        </Link>

        {/* Right links + actions (desktop) */}
        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          {navRight.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-ink-line" />
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="text-cream/70 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
          </a>
          <BookButton withIcon={false}>Book</BookButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-ink transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[85vh]" : "max-h-0"
        }`}
      >
        <div className="container-luxe flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-ink-line/60 py-4 text-lg tracking-[0.08em] ${
                pathname === item.href ? "text-gold" : "text-cream/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <BookButton className="w-full">Book Now</BookButton>
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
