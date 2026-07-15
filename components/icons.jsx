"use client";

import * as Lucide from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Client-side icon barrel.
//
// lucide-react icons are forwardRef objects with no "use client"
// directive, so React treats them as Server Components. Passing one
// as a child/prop into a Client Component (e.g. next/link <Link> or
// our animated <Reveal>) breaks React Server Component flight
// serialization ("Unsupported Server Component type").
//
// We wrap each icon in a real client function component defined in
// this "use client" module. That makes every icon a proper client
// reference that renders and serializes across the server→client
// boundary. (A plain `export { X } from "lucide-react"` re-export
// here instead triggers a self-referential client-reference proxy
// and infinite recursion at build time — hence the wrappers.)
// ─────────────────────────────────────────────────────────────
const wrap = (Icon) => {
  const Wrapped = (props) => <Icon {...props} />;
  return Wrapped;
};

export const Calendar = wrap(Lucide.Calendar);
export const ExternalLink = wrap(Lucide.ExternalLink);
export const Menu = wrap(Lucide.Menu);
export const X = wrap(Lucide.X);
export const Phone = wrap(Lucide.Phone);
export const Instagram = wrap(Lucide.Instagram);
export const Facebook = wrap(Lucide.Facebook);
export const Mail = wrap(Lucide.Mail);
export const MapPin = wrap(Lucide.MapPin);
export const Star = wrap(Lucide.Star);
export const Scissors = wrap(Lucide.Scissors);
export const Clock = wrap(Lucide.Clock);
export const Award = wrap(Lucide.Award);
export const Sparkles = wrap(Lucide.Sparkles);
export const ArrowRight = wrap(Lucide.ArrowRight);
export const Check = wrap(Lucide.Check);
export const Quote = wrap(Lucide.Quote);
export const ShoppingBag = wrap(Lucide.ShoppingBag);
export const ShieldCheck = wrap(Lucide.ShieldCheck);
export const Smartphone = wrap(Lucide.Smartphone);
