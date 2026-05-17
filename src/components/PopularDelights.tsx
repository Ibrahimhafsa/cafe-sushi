import { motion } from "framer-motion";
import { toast } from "sonner";

const dishes = [
  { name: "Rainbow Roll", desc: "Crab, avocado, cucumber topped with tuna, salmon, and yellowtail", price: "£14.50", img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=600" },
  { name: "Yellowtail Sashimi", desc: "Six slices of premium yellowtail with ponzu and fresh jalapeño", price: "£13.00", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600" },
  { name: "Lobster Tempura Roll", desc: "Crispy tempura lobster, mango, avocado, spicy mayo", price: "£18.50", img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600" },
  { name: "Unagi", desc: "Grilled freshwater eel glazed with sweet teriyaki sauce", price: "£15.00", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600" },
  { name: "Samurai Roll", desc: "Spicy tuna, cucumber, topped with salmon and sriracha drizzle", price: "£14.50", img: "https://images.unsplash.com/photo-1617196034100-8e2a83a04a12?w=600" },
  { name: "Cucumber Roll (V)", desc: "Fresh cucumber, cream cheese, sesame seeds, house dressing", price: "£9.00", img: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600" },
];

export function PopularDelights() {
  return (
    <section id="menu" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          className="text-center mb-16"
        >
          <p className="font-jp italic text-gold mb-3">人気メニュー</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Popular Sushi Delights</h2>
          <div className="w-16 h-[3px] bg-red-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-ink">{d.name}</h3>
                  <span className="text-red-accent font-display text-xl">{d.price}</span>
                </div>
                <p className="text-muted-ink text-sm leading-relaxed mb-4">{d.desc}</p>
                <button
                  onClick={() =>
                    toast.success("Added to cart!", {
                      style: { background: "#D62828", color: "#fff", border: "none" },
                    })
                  }
                  className="opacity-0 group-hover:opacity-100 transition-opacity btn-red px-5 py-2 rounded-full text-xs uppercase tracking-wider"
                >
                  Add to Cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
