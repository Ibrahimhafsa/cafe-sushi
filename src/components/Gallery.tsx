import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1600",
  "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
  "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600",
  "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600",
];

export function Gallery() {
  return (
    <motion.section
      id="pages"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7 }}
      className="overflow-x-auto md:overflow-hidden"
    >
      <div className="flex md:grid md:grid-cols-5 min-w-max md:min-w-0">
        {photos.map((src, i) => (
          <div
            key={i}
            className="relative group flex-shrink-0 w-72 md:w-auto h-[200px] md:h-[300px] overflow-hidden"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button aria-label="View" className="w-12 h-12 rounded-full bg-red-accent text-white flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
