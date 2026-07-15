import { PageHero } from "@/components/Section";
import StaticGallery from "@/components/StaticGallery";
import BookButton from "@/components/BookButton";
import { gallery } from "@/lib/site";

export const metadata = {
  title: "Gallery — The Houston Barber",
  description:
    "A look at the fades, cuts, shaves, and finishes leaving The Houston Barber every day.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Work"
        title="Fresh From the Chair"
        subtitle="Real cuts, real finishes. Tap any photo to view it up close."
        image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <StaticGallery images={gallery} />
          <div className="mt-16 text-center">
            <BookButton className="text-base">Get the Look</BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
