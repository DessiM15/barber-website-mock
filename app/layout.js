import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Editorial Luxe pairing — a warm, high-contrast display serif with real
// character (Fraunces) over a clean neutral grotesque body (Inter).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "The Houston Barber — Master Cuts. Timeless Style.",
  description:
    "The Houston Barber is a high-class barbershop offering precision cuts, hot-towel shaves, and beard sculpting. Book instantly through StyleSeat.",
  keywords: [
    "Houston barber",
    "barbershop Houston",
    "haircut",
    "hot towel shave",
    "beard trim",
    "StyleSeat booking",
  ],
  openGraph: {
    title: "The Houston Barber",
    description: "Master cuts. Timeless style. Book instantly.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
