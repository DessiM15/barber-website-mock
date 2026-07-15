// ─────────────────────────────────────────────────────────────
//  THE HOUSTON BARBER — central site configuration & content
//  Everything here is placeholder content. Edit freely.
//  👉 To go live, replace STYLESEAT_URL below with your real
//     StyleSeat profile link (e.g. https://www.styleseat.com/m/v/yourshop)
// ─────────────────────────────────────────────────────────────

export const STYLESEAT_URL =
  "https://www.styleseat.com/m/v/thehoustonbarber"; // ← SWAP with your real StyleSeat profile URL

export const site = {
  name: "The Houston Barber",
  tagline: "Master Cuts. Timeless Style.",
  phone: "(832) 407-0773",
  phoneHref: "tel:+18324070773",
  email: "hello@thehoustonbarber.com",
  address: "2114 Washington Ave, Houston, TX 77007",
  mapsQuery: "2114 Washington Ave, Houston, TX 77007",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
  hours: [
    { day: "Monday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
    { day: "Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    name: "Signature Cut",
    price: "45",
    duration: "45 min",
    desc: "A precision cut tailored to your face shape, finished with a hot-towel neck shave and styling.",
    featured: true,
  },
  {
    name: "Skin Fade",
    price: "50",
    duration: "50 min",
    desc: "Seamless bald-fade blending from skin to length, sculpted with razor-sharp detail.",
  },
  {
    name: "Beard Sculpt & Line-Up",
    price: "30",
    duration: "30 min",
    desc: "Beard shaped, lined, and conditioned with warm oils for a crisp, defined finish.",
  },
  {
    name: "The Royal Shave",
    price: "40",
    duration: "40 min",
    desc: "Traditional straight-razor shave with hot towels, pre-shave oil, and a cooling balm.",
    featured: true,
  },
  {
    name: "Cut & Beard Combo",
    price: "65",
    duration: "60 min",
    desc: "Full signature cut paired with a complete beard sculpt. Our most-requested service.",
  },
  {
    name: "The Gentleman's Package",
    price: "95",
    duration: "90 min",
    desc: "Cut, royal shave, beard sculpt, and a scalp treatment. The complete grooming ritual.",
    featured: true,
  },
  {
    name: "Kids' Cut (12 & under)",
    price: "30",
    duration: "30 min",
    desc: "A patient, precise cut for our youngest gentlemen.",
  },
  {
    name: "Gray Blending & Color",
    price: "40",
    duration: "40 min",
    desc: "Subtle color camouflage to blend gray, keeping it natural and sharp.",
  },
];

export const team = [
  {
    name: "Marcus Bell",
    role: "Founder / Master Barber",
    bio: "18 years behind the chair. Marcus built The Houston Barber on one belief — a great cut is a quiet kind of confidence.",
    specialties: ["Skin Fades", "Straight-Razor", "Classic Pompadour"],
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
  },
  {
    name: "Andre Cole",
    role: "Senior Barber",
    bio: "Andre's textured crops and beard work keep his chair booked out weeks in advance.",
    specialties: ["Textured Crops", "Beard Sculpt", "Line-Ups"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
  },
  {
    name: "Diego Ramos",
    role: "Barber / Color Specialist",
    bio: "From gray blending to bold designs, Diego brings an artist's eye to every seat.",
    specialties: ["Color & Blending", "Hair Design", "Tapers"],
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
  },
  {
    name: "Terrence Wade",
    role: "Barber",
    bio: "Precise, patient, and meticulous — Terrence is the go-to for the classic gentleman's cut.",
    specialties: ["Scissor Work", "Classic Cuts", "Hot-Towel Shave"],
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    instagram: "https://instagram.com",
  },
];

export const reviews = [
  {
    name: "James P.",
    text: "Best fade I've had in Houston, hands down. The hot-towel finish alone is worth the visit. Booked my next three appointments before I left.",
    role: "Regular since 2021",
  },
  {
    name: "Chris M.",
    text: "Walked in for my wedding cut and left feeling like a million bucks. The Gentleman's Package is an experience, not just a haircut.",
    role: "Groom",
  },
  {
    name: "Devon R.",
    text: "Marcus took his time and actually listened to what I wanted. Cleanest line-up I've ever gotten. This place is a cut above.",
    role: "First-time client",
  },
  {
    name: "Anthony L.",
    text: "Old-school barbershop feel with a high-end finish. Great conversation, cold drink, sharp cut. My son and I both come here now.",
    role: "Regular since 2022",
  },
  {
    name: "Marcus T.",
    text: "The straight-razor shave is unreal. Relaxing, precise, and the details are perfect every single time. Booking on StyleSeat is effortless.",
    role: "Regular",
  },
  {
    name: "Ray G.",
    text: "Andre is an artist. My beard has never looked this sharp. The whole shop just feels premium from the moment you walk in.",
    role: "Regular since 2023",
  },
];

export const products = [
  {
    name: "Matte Clay Pomade",
    price: "24",
    tag: "Best Seller",
    desc: "Strong hold, zero shine. All-day control with a natural finish.",
    image:
      "https://images.unsplash.com/photo-1584316712724-f5d4b188fee2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Beard Oil — Cedar & Amber",
    price: "22",
    desc: "Softens, conditions, and tames with a warm, woody scent.",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sea-Salt Texture Spray",
    price: "18",
    desc: "Effortless texture and grip for a lived-in, matte look.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Aftershave Balm",
    price: "20",
    tag: "New",
    desc: "Cooling, alcohol-free balm to calm and hydrate post-shave.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "The Houston Barber Comb",
    price: "14",
    desc: "Hand-finished carbon-fiber comb. Anti-static, heat resistant.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Grooming Gift Set",
    price: "68",
    tag: "Bundle",
    desc: "Clay, beard oil, and comb boxed in a premium tin. Save 15%.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  },
];

// Gallery — Unsplash barbershop / grooming imagery.
// ~16 images so the 4 opposing-scroll columns loop smoothly.
export const gallery = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=80",
];

// Hero background montage (hotlinkable Mixkit barbershop clips).
// They crossfade in sequence on a loop. Swap any with your own footage
// (drop an .mp4 in /public and use "/your-clip.mp4").
export const HERO_VIDEOS = [
  "https://assets.mixkit.co/videos/43236/43236-720.mp4", // barbershop interior pan
  "https://assets.mixkit.co/videos/43242/43242-720.mp4", // close-up haircut with clippers
  "https://assets.mixkit.co/videos/43229/43229-720.mp4", // fashion cut, barber working the machine
];
export const HERO_POSTER =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80";
