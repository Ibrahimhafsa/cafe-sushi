import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cafe Sushi" },
      {
        name: "description",
        content: "Discover the story behind Cafe Sushi, our passion for authentic Japanese cuisine, and our commitment to freshness.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Hero section for About Page */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-ink">
        <div className="absolute inset-0 wave-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-jp italic text-gold mb-4"
          >
            私たちの物語
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            The Cafe Sushi Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            A journey of tradition, freshness, and the pursuit of the perfect roll.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-red-accent z-0" />
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=80"
              alt="Sushi Chef at work"
              loading="lazy"
              className="relative z-10 rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl text-ink mb-8">Crafting Excellence Since 2012</h2>
            <div className="space-y-6 text-muted-ink leading-relaxed text-lg">
              <p>
                Founded in the heart of London, Cafe Sushi began with a simple mission: to make high-quality, authentic Japanese cuisine accessible to everyone. What started as a small family-run stall has grown into one of the city's most beloved sushi destinations.
              </p>
              <p>
                Our philosophy is centered around the concept of 'Shun'—the traditional Japanese appreciation of seasonality. We believe that food is at its best when it's fresh, which is why our chefs visit the market every morning to hand-pick the finest ingredients.
              </p>
              <p>
                Every dish at Cafe Sushi is a testament to our dedication. From the precise temperature of our vinegared rice to the expert slicing of our sashimi, we honor the centuries-old techniques of sushi-making while embracing modern culinary creativity.
              </p>
              <p>
                We invite you to join us and experience the passion, the tradition, and the artistry that goes into every bite. At Cafe Sushi, you're not just a customer; you're part of our continuing story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-red-accent font-display text-4xl italic">01.</div>
              <h3 className="font-display text-2xl text-ink">Pristine Quality</h3>
              <p className="text-muted-ink">Sourcing the freshest fish daily from sustainable and trusted local suppliers.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="text-red-accent font-display text-4xl italic">02.</div>
              <h3 className="font-display text-2xl text-ink">Master Craft</h3>
              <p className="text-muted-ink">Our chefs bring years of expertise and discipline to every handcrafted roll.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-red-accent font-display text-4xl italic">03.</div>
              <h3 className="font-display text-2xl text-ink">Modern Spirit</h3>
              <p className="text-muted-ink">Respecting Japanese tradition while exploring contemporary Asian flavors.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
