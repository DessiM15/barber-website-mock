# The Houston Barber — Website Mockup

A high-class barbershop website mockup built with **Next.js 14 (App Router)** + **Tailwind CSS**, in a cinematic **Black & Gold** theme. Inspired by FreshCut Barbershop and Balls Barbershop, with an embedded **StyleSeat** booking flow so clients can view availability and book directly on-site.

> **Status:** Design mockup. Content (services, pricing, hours, team, address, reviews) is realistic placeholder data — edit freely.

---

## ✨ Features

- Cinematic **video hero** (with Unsplash poster fallback)
- **Black & Gold luxe** theme, custom `H` monogram logo, Playfair Display + Inter type
- Sticky, blur-on-scroll **navigation** with mobile drawer
- Scroll-reveal animations (framer-motion) + gold accents throughout
- **Pages:** Home · Services & Pricing · Team/Barbers · Gallery (with lightbox) · Shop · Reviews · About · Contact (Google Map + hours) · Book
- **Embedded StyleSeat booking** on `/book`, with an always-working "Open StyleSeat" fallback
- Fully responsive, statically generated, SEO metadata per page

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## 🔧 Make It Yours (swap-in checklist)

Almost everything lives in **`lib/site.js`**.

### 1. StyleSeat booking (most important)
Open `lib/site.js` and replace the placeholder with your real StyleSeat profile URL:

```js
export const STYLESEAT_URL = "https://www.styleseat.com/m/v/YOUR-PROFILE";
```

Every "Book Now" button routes to `/book`, which embeds this URL. Individual barber
"Book with …" buttons currently point to the same page — give each barber their own
StyleSeat link if you'd like per-barber booking.

> **Note on embedding:** StyleSeat may set `X-Frame-Options` that prevent the calendar
> from displaying inside an iframe on some plans/browsers. The `/book` page handles this
> gracefully — if the inline calendar is blocked, a prominent **"Open StyleSeat"** button
> opens booking in a new tab so clients can always book.

### 2. Business details
In `lib/site.js`, edit the `site` object: `name`, `phone`, `email`, `address`, `mapsQuery`,
social links, and `hours`. The address also drives the Google Map on the Contact page.

### 3. Content
Still in `lib/site.js`: `services`, `team`, `reviews`, `products`, and `gallery` are plain
arrays — edit text, prices, and image URLs.

### 4. Images & video
- Images use [Unsplash](https://unsplash.com) URLs. Swap any `https://images.unsplash.com/...`
  link for your own hosted photos (add new image hosts to `remotePatterns` in `next.config.mjs`).
- The hero video is a hotlinked stock clip (`HERO_VIDEO` in `lib/site.js`). Replace it with
  your own shop footage — drop an `.mp4` in `/public` and set `HERO_VIDEO = "/your-video.mp4"`.

### 5. Logo
The logo is inline SVG in `components/Logo.jsx` (an `H` monogram crest). Colors pull from the
Tailwind `gold` palette in `tailwind.config.js`.

---

## 🎨 Theme

Colors, fonts, and animations are defined in `tailwind.config.js` and `app/globals.css`.
Core palette: `ink` (near-black) + `gold` + `cream`.

---

## 📦 Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset **Next.js** is auto-detected — no config needed. Deploy.

---

## 🗂 Project Structure

```
app/            # App Router pages (home, services, team, gallery, shop, reviews, about, contact, book)
components/     # Navbar, Footer, Hero, Logo, BookButton, StyleSeatEmbed, Reveal, Section, GalleryGrid, icons
lib/site.js     # ← All content & config (StyleSeat URL, business info, services, team, reviews, products)
```

---

_Booking powered by StyleSeat · Imagery via Unsplash · Stock video via Mixkit._
