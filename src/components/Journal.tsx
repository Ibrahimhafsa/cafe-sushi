import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { posts } from "@/lib/journal-data";

export function Journal() {
  const navigate = useNavigate();

  return (
    <section id="journal" className="bg-parchment py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
          <div>
            <p className="font-jp italic text-gold mb-3">私たちの物語</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">Our Sushi Journal</h2>
          </div>
          
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
                <p className="text-sm text-muted-ink leading-relaxed mb-5 line-clamp-2">{p.excerpt}</p>
                <button
                  onClick={() => navigate({ to: "/journal/$slug", params: { slug: p.slug } })}
                  className="text-red-accent font-medium inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
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
