import { Instagram, Facebook, MapPin } from "lucide-react";
import { CherrySVG } from "./Navbar";
import { toast } from "sonner";

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! Thank you.", {
      style: { background: "#16a34a", color: "#fff", border: "none" },
    });
  };

  return (
    <footer id="contact" className="bg-ink text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 text-white">
            <CherrySVG className="w-7 h-7 text-red-accent" />
            <span className="font-display italic text-2xl">Cafe Sushi</span>
          </div>
          <div className="flex-1 lg:max-w-md w-full">
            <p className="text-sm mb-3">Subscribe for exclusive offers and seasonal menus</p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-red-accent"
              />
              <button type="submit" className="btn-red px-6 py-3 rounded-full text-sm uppercase tracking-wider">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <h4 className="text-white font-display text-xl mb-4">Cafe Sushi</h4>
            <p className="text-sm leading-relaxed mb-5">
              London's finest Japanese sushi restaurant. Fresh fish. Handcrafted rolls. A warm welcome.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, MapPin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-red-accent hover:border-red-accent transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Menu", "Reservations", "Blog / Journal", "Gift Vouchers"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              {["Sushi Rolls", "Sashimi", "Maki Rolls", "Specialty Rolls", "Bento Boxes", "Drinks Menu"].map((l) => (
                <li key={l}><a href="#" className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl mb-4">Visit Us</h4>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p>12 Exmouth Market<br />London, EC1R 4QE</p>
              <p>
                <a href="tel:+442079460422" className="hover:text-gold">+44 20 7946 0422</a><br />
                <a href="mailto:hello@cafe-sushi.co.uk" className="hover:text-gold">hello@cafe-sushi.co.uk</a>
              </p>
              <p className="text-xs text-white/60 pt-2">
                Mon–Thu: 11:30am–10pm<br />
                Fri–Sat: 11:30am–11pm<br />
                Sun: 12pm–9pm
              </p>
            </address>
          </div>
        </div>

        <div className="border-t-2 border-red-accent pt-6 flex flex-wrap justify-between gap-4 text-xs">
          <p>© 2026 Cafe Sushi Ltd. All rights reserved.</p>
          <p className="text-gold">Certified by the Japanese Cuisine Goodwill Ambassador</p>
        </div>
      </div>
    </footer>
  );
}
