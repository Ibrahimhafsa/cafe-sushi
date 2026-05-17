import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const heroLines = ["FRESH,", "FLAVOURFUL,", "AUTHENTIC"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1600)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />

      {/* Cherry petals */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute animate-petal pointer-events-none"
          style={{
            top: `${15 + i * 18}%`,
            left: `${10 + i * 22}%`,
            animationDelay: `${i * 2}s`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-pink-300/70 fill-current">
            <path d="M12 2c2 3 5 5 8 6-3 1-6 3-8 6-2-3-5-5-8-6 3-1 6-3 8-6z" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-jp italic text-gold text-sm md:text-base mb-6 tracking-wider"
        >
          一口ごとに幸福を
        </motion.p>

        <h1 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          {heroLines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white/80 text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          London's finest Japanese dining experience. Handcrafted sushi,
          traditional flavours, and a warm welcome every time you walk through our door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="mt-10"
        >
          <button className="btn-red px-10 py-4 rounded-full text-base font-medium uppercase tracking-wider inline-flex items-center gap-3">
            Order Now <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
