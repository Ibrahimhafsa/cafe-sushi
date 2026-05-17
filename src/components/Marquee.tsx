const items = [
  { text: "TUNA", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=120" },
  { text: "MAKI ROLLS", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=120" },
  { text: "SUSHI TACOS", img: "https://images.unsplash.com/photo-1617196034096-2186592bdb7e?w=120" },
  { text: "SALMON", img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=120" },
  { text: "SUSHI BURRITOS", img: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=120" },
  { text: "NIGIRI", img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=120" },
  { text: "TEMPURA", img: "https://images.unsplash.com/photo-1617196034100-8e2a83a04a12?w=120" },
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="bg-cream py-14 overflow-hidden marquee-pause border-y border-border">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {loop.map((it, i) => (
          <div key={i} className="flex items-center gap-10">
            <span
              className={`font-display text-4xl md:text-5xl italic ${
                i % 2 === 0 ? "text-ink" : "text-gold"
              }`}
            >
              {it.text}
            </span>
            <img
              src={it.img}
              alt=""
              loading="lazy"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
