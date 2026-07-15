import Link from "next/link";
import { Calendar } from "@/components/icons";

// Routes to the on-site /book page (which hosts the StyleSeat embed).
export default function BookButton({
  children = "Book Now",
  variant = "gold",
  className = "",
  withIcon = true,
}) {
  const base = variant === "outline" ? "btn-outline" : "btn-gold";
  return (
    <Link href="/book" className={`${base} ${className}`}>
      {withIcon && <Calendar className="h-4 w-4" />}
      {children}
    </Link>
  );
}
