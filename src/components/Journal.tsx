import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=600",
    date: "16 May 2026",
    cat: "Sushi",
    title: "Exploring the Most Delicious Options for Every Taste",
    excerpt:
      "From classic California rolls to omakase tasting menus, we look at how London's love affair with sushi has grown into something remarkable.",
  },
  {
    img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600",
    date: "12 Apr 2026",
    cat: "Fusion",
    title: "Creative Sushi Fusion Recipes That Are Redefining the Roll",
    excerpt:
      "Our head chef explores the growing fusion trend and shares the thinking behind Cafe Sushi's most innovative new dishes.",
  },
  {
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    date: "3 Apr 2026",
    cat: "Culture",
    title: "The Cultural and Historical Journey of Sushi",
    excerpt:
      "Sushi has a 1,200-year history. Here is a short guide to where it came from, how it evolved, and why it matters so much today.",
  },
];

export function Journal() {
  return (
    <section id="journal" className="bg-parchment py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
          <div>
            <p className="font-jp italic text-gold mb-3">私たちの物語</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">Our Sushi Journal</h2>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("journal");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-red-accent font-medium inline-flex items-center gap-2 uppercase text-sm tracking-wider"
          >
            More Articles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider mb-3">
                  <span className="text-muted-ink">{p.date}</span>
                  <span className="text-border">|</span>
                  <span className="text-red-accent font-medium">{p.cat}</span>
                </div>
                <h3 className="font-display text-xl text-ink leading-snug mb-3">{p.title}</h3>
                <p className="text-sm text-muted-ink leading-relaxed mb-5">{p.excerpt}</p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-red-accent font-medium inline-flex items-center gap-2 text-sm"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
