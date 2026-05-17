import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Sushi Rolls", "Specialty Rolls", "Salmon Rolls", "Maki Rolls"];

const data: Record<string, Array<{ name: string; desc: string; price: string; img: string }>> = {
  "Sushi Rolls": [
    { name: "Spicy Tuna Roll", desc: "Habanero, jalapeño and creamy sriracha", price: "£12.00", img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=200" },
    { name: "Ebi Tempura", desc: "Cooked shrimp, wasabi, and soy sauce", price: "£13.50", img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=200" },
    { name: "Maki Sushi", desc: "Fresh rice, nori seaweed, pickled ginger, and nigiri", price: "£11.00", img: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=200" },
    { name: "Salmon Sushi", desc: "Norwegian salmon, avocado, cucumber, sesame", price: "£14.50", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=200" },
    { name: "California Roll", desc: "Crab stick, avocado, cucumber, sesame", price: "£12.00", img: "https://images.unsplash.com/photo-1617196034100-8e2a83a04a12?w=200" },
    { name: "Tuna Maguro", desc: "Fatty tuna, garden pickles, natto flax, furikake", price: "£15.50", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=200" },
  ],
  "Specialty Rolls": [
    { name: "Dragon Roll", desc: "Eel, cucumber, avocado, sweet eel sauce", price: "£17.00", img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=200" },
    { name: "Volcano Roll", desc: "Spicy baked seafood, crab, avocado", price: "£16.50", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=200" },
    { name: "Sakura Special", desc: "Toro, uni, ikura, gold leaf garnish", price: "£24.00", img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=200" },
    { name: "Tokyo Crunch", desc: "Crispy tempura, spicy tuna, scallion", price: "£15.00", img: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=200" },
  ],
  "Salmon Rolls": [
    { name: "Salmon Avocado", desc: "Fresh salmon, ripe avocado, sushi rice", price: "£11.50", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=200" },
    { name: "Salmon Skin Roll", desc: "Crispy salmon skin, cucumber, sesame", price: "£10.00", img: "https://images.unsplash.com/photo-1617196034100-8e2a83a04a12?w=200" },
    { name: "Spicy Salmon", desc: "Norwegian salmon, chilli mayo, scallion", price: "£12.50", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=200" },
    { name: "Salmon Nigiri", desc: "Two pieces, hand-pressed nigiri", price: "£8.00", img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=200" },
  ],
  "Maki Rolls": [
    { name: "Tuna Maki", desc: "Lean tuna, nori, sushi rice", price: "£9.50", img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=200" },
    { name: "Avocado Maki (V)", desc: "Creamy avocado, sesame finish", price: "£7.00", img: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=200" },
    { name: "Eel Maki", desc: "Grilled eel, cucumber, sweet glaze", price: "£11.00", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=200" },
    { name: "Crab Maki", desc: "Snow crab, cucumber, tobiko", price: "£10.50", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=200" },
  ],
};

export function BestDishes() {
  const [active, setActive] = useState(tabs[0]);
  const items = data[active];
  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="font-jp italic text-gold mb-3">私たちのメニュー</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink">The Best Dishes</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-14">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 py-2 text-sm md:text-base uppercase tracking-wider transition-colors border-b-2 ${
                active === t
                  ? "border-red-accent text-red-accent"
                  : "border-transparent text-muted-ink hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-6"
          >
            {[left, right].map((col, ci) => (
              <ul key={ci} className="space-y-6">
                {col.map((it) => (
                  <li key={it.name} className="flex gap-4 items-center pb-6 border-b border-border last:border-0">
                    <img
                      src={it.img}
                      alt={it.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1 gap-3">
                        <h3 className="font-display text-lg text-ink">{it.name}</h3>
                        <span className="text-red-accent font-medium whitespace-nowrap">{it.price}</span>
                      </div>
                      <p className="text-sm text-muted-ink">{it.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
