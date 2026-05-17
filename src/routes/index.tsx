import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { PopularDelights } from "@/components/PopularDelights";
import { CtaBanner } from "@/components/CtaBanner";
import { BestDishes } from "@/components/BestDishes";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cafe Sushi — Finest Japanese Sushi in London" },
      {
        name: "description",
        content:
          "Cafe Sushi is London's premier Japanese restaurant. Handcrafted sushi, fresh daily fish, and authentic flavours on Exmouth Market.",
      },
      { property: "og:title", content: "Cafe Sushi — Finest Japanese Sushi in London" },
      {
        property: "og:description",
        content:
          "Handcrafted sushi, sashimi and Asian cuisine in the heart of London. Book your table at Cafe Sushi.",
      },
      { property: "og:image", content: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <PopularDelights />
      <CtaBanner />
      <BestDishes />
      <Gallery />
      <Testimonials />
      <Journal />
      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
