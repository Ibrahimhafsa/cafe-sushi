import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const links: Array<{ label: string; id: string; path?: string }> = [
  { label: "Home", id: "home", path: "/" },
  { label: "About", id: "about", path: "/about" },
  { label: "Contact", id: "contact", path: "/contact" },
  { label: "Menu", id: "menu" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (l: (typeof links)[0]) => {
    setOpen(false);
    if (l.path) {
      if (location.pathname === l.path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate({ to: l.path });
      }
    } else {
      if (location.pathname !== "/") {
        navigate({ to: "/" }).then(() => {
          setTimeout(() => scrollToId(l.id), 100);
        });
      } else {
        scrollToId(l.id);
      }
    }
  };

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
          <span className="font-display italic text-2xl">Cafe Sushi</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-white/90 text-sm uppercase tracking-wider">
          {links.map((l) => (
            <li key={l.label}>
              <button onClick={() => handleNav(l)} className="hover:text-gold transition-colors">
                {l.label}
              </button>
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
          <button onClick={() => navigate({ to: "/reservation" })} className="btn-red px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide">
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
              <button
                key={l.label}
                className="text-white text-3xl font-display"
                onClick={() => handleNav(l)}
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => { setOpen(false); navigate({ to: "/reservation" }); }} className="btn-red px-8 py-3 rounded-full text-sm uppercase tracking-wide">
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
