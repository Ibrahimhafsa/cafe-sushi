import { motion } from "framer-motion";
import { scrollToId } from "@/lib/scroll";

export function CtaBanner() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1600)",
        }}
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h2 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7 }}
            className="block"
          >
            FRESH SUSHI DEALS
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block"
          >
            JUST FOR YOU
          </motion.span>
        </h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ delay: 0.5 }}
          onClick={() => scrollToId("contact")}
          className="btn-red mt-10 px-10 py-4 rounded-full text-base uppercase tracking-wider font-medium"
        >
          Make a Reservation
        </motion.button>
      </div>
    </section>
  );
}
