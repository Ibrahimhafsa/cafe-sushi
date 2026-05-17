import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Pages", "Menu", "Contact"];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <CherrySVG className="w-7 h-7 text-red-accent" />
          <span className="font-display italic text-2xl">Sakura House</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-white/90 text-sm uppercase tracking-wider">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-gold transition-colors">{l}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5 text-white">
          <button aria-label="Wishlist" className="hover:text-gold transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="relative hover:text-gold transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="btn-red px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide">
            Book Now
          </button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink z-50 flex flex-col items-center justify-center gap-8"
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-white text-3xl font-display"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <button className="btn-red px-8 py-3 rounded-full text-sm uppercase tracking-wide">
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export function CherrySVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c1 2 0 4-2 5 0-2 1-4 2-5zm0 5c2-1 4 0 5 2-2 0-4-1-5-2zm0 0c-2-1-4 0-5 2 2 0 4-1 5-2zm0 0c1 2 0 4-2 5 0-2 1-4 2-5zm0 10c1 2 0 4-2 5 0-2 1-4 2-5zm0 0c2-1 4 0 5 2-2 0-4-1-5-2zm0 0c-2-1-4 0-5 2 2 0 4-1 5-2z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
