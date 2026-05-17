import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-cream py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 wave-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-red-accent z-0" />
          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
            alt="Sushi platter on slate board"
            loading="lazy"
            className="relative z-10 rounded-lg shadow-2xl w-full h-[500px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-jp italic text-gold mb-4">私たちについて</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
            The Art of Sushi &<br />Asian Cuisine
          </h2>
          <p className="text-muted-ink leading-relaxed mb-4">
            We are passionate about bringing you the finest sushi and Asian cuisine
            crafted with precision, authenticity, and a modern touch.
          </p>
          <p className="text-muted-ink leading-relaxed mb-8">
            At Cafe Sushi, every roll is made fresh to order using the highest
            quality fish sourced daily from Billingsgate Market. We are inspired by
            the rich culinary traditions of Japan, adapted for London dining at its
            very best.
          </p>
          <button onClick={() => navigate({ to: "/about" })} className="border-2 border-red-accent text-red-accent px-7 py-3 rounded-full text-sm uppercase tracking-wider font-medium inline-flex items-center gap-2 hover:bg-red-accent hover:text-white transition-colors">
            About Us <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mt-10 pt-8 border-t border-gold/40">
            <h3 className="font-display text-2xl text-ink mb-4">Opening Hours</h3>
            <ul className="space-y-1.5 text-muted-ink text-sm">
              <li className="flex justify-between"><span>Monday to Thursday</span><span>11:30 AM — 10:00 PM</span></li>
              <li className="flex justify-between"><span>Friday to Saturday</span><span>11:30 AM — 11:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>12:00 PM — 9:00 PM</span></li>
            </ul>
            <p className="text-xs text-muted-ink/80 mt-4 italic">
              Kitchen closes 45 minutes before closing time. Reservations recommended at weekends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
