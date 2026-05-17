import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { Calendar, Users, Clock, MessageSquare, Utensils } from "lucide-react";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Make a Reservation — Cafe Sushi" },
      {
        name: "description",
        content: "Book your table at Cafe Sushi for an authentic Japanese dining experience in London.",
      },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We will contact you shortly to confirm.", {
      style: { background: "#D62828", color: "#fff", border: "none" },
    });
  };

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-ink">
        <div className="absolute inset-0 wave-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-jp italic text-gold mb-4"
          >
            予約する
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Book Your Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Join us for an unforgettable journey through the finest flavors of Japan.
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold/10"
            >
              <h2 className="font-display text-3xl text-ink mb-8 flex items-center gap-3">
                <Utensils className="text-red-accent" /> Reservation Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+44 000 000 000"
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <select required className="w-full bg-parchment/50 border border-gold/20 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-red-accent appearance-none transition-colors">
                        {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Select Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        required
                        type="date"
                        className="w-full bg-parchment/50 border border-gold/20 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Select Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                      <input
                        required
                        type="time"
                        className="w-full bg-parchment/50 border border-gold/20 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-ink/70 ml-1">Special Requests (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold" />
                    <textarea
                      rows={4}
                      placeholder="Allergies, birthday, or specific seating requests..."
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-red-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn-red w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest mt-4 shadow-lg shadow-red-accent/20">
                  Confirm Booking
                </button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative mb-12">
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gold/20 z-0" />
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80"
                  alt="Elegant Sushi Dining"
                  className="relative z-10 rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl text-ink mb-4">Reservation Policy</h3>
                  <p className="text-muted-ink leading-relaxed">
                    We hold tables for 15 minutes past the reservation time. If you are running late, please call us to keep your booking. For groups larger than 10, please contact us directly via email.
                  </p>
                </div>
                <div className="p-6 bg-parchment rounded-2xl border border-gold/10">
                  <h4 className="font-display text-xl text-ink mb-2">Need Help?</h4>
                  <p className="text-muted-ink text-sm">
                    Call us at <a href="tel:+442079460422" className="text-red-accent font-medium">+44 20 7946 0422</a><br />
                    Mon–Sun: 10:00 AM — 9:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
