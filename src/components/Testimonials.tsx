import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    photo: "https://i.pravatar.cc/500?img=33",
    quote:
      "Sakura House is genuinely the best sushi I have had outside of Japan. The fish is always fresh, the rolls are beautifully presented, and the service is warm without being overbearing. We come every month.",
    name: "David Okafor",
    location: "Shoreditch, London",
  },
  {
    photo: "https://i.pravatar.cc/500?img=47",
    quote:
      "I took my partner here for our anniversary and it was perfect. The lobster tempura roll is absolutely outstanding. Booking was easy online and they remembered our dietary requirements. Brilliant.",
    name: "Priya S.",
    location: "Islington, London",
  },
  {
    photo: "https://i.pravatar.cc/500?img=12",
    quote:
      "As someone who has lived in Tokyo, I was sceptical about London sushi. Sakura House completely changed my mind. The quality and care that goes into every dish is remarkable. This place deserves every star it gets.",
    name: "James W.",
    location: "Notting Hill, London",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={t.photo}
              src={t.photo}
              alt={t.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </AnimatePresence>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-accent rounded-full flex items-center justify-center">
            <Quote className="w-9 h-9 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-jp italic text-gold mb-3">お客様の声</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-8">
            What Our Customers Say
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-ink leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <p className="font-display text-xl text-ink">{t.name}</p>
              <p className="text-sm text-muted-ink">{t.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-10">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-red-accent hover:text-white hover:border-red-accent transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-red-accent hover:text-white hover:border-red-accent transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex gap-2 ml-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === i ? "bg-red-accent w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
