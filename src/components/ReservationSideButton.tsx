import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ReservationSideButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 btn-red px-3 py-6 rounded-l-2xl shadow-2xl"
          style={{ writingMode: "vertical-rl" }}
          onClick={() => {
            const el = document.getElementById("reservation");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="uppercase tracking-widest text-xs font-medium">
            Make a Reservation
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
