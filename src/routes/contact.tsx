import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Cafe Sushi" },
      {
        name: "description",
        content: "Get in touch with Cafe Sushi. Find our location, opening hours, and contact details.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon.", {
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
            お問い合わせ
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            We'd love to hear from you. Reach out for inquiries, feedback, or just to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl text-ink mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-red-accent w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-ink">Our Location</h4>
                      <p className="text-muted-ink">12 Exmouth Market<br />London, EC1R 4QE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-red-accent w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-ink">Phone Number</h4>
                      <p className="text-muted-ink">+44 20 7946 0422</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-parchment rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-red-accent w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-ink">Email Address</h4>
                      <p className="text-muted-ink">hello@cafe-sushi.co.uk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gold/20">
                <h3 className="font-display text-2xl text-ink mb-6">Opening Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-ink">Monday — Thursday</span>
                    <span className="text-ink font-medium">11:30 AM — 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-ink">Friday — Saturday</span>
                    <span className="text-ink font-medium">11:30 AM — 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-ink">Sunday</span>
                    <span className="text-ink font-medium">12:00 PM — 9:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ink/70 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ink/70 ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ink/70 ml-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full bg-parchment/50 border border-gold/20 rounded-xl px-5 py-4 focus:outline-none focus:border-red-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-red w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest mt-4 flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-parchment relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-60">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4323281003463!2d-0.10915602338045331!3d51.524564271816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b50cf7159c9%3A0x86f78f6575990234!2sExmouth%20Market%2C%20London!5e0!3m2!1sen!2suk!4v1715873245671!5m2!1sen!2suk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-ink text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-gold/30">
            <div className="w-10 h-10 bg-red-accent rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-lg leading-none mb-1">Cafe Sushi</p>
              <p className="text-xs text-white/60 uppercase tracking-widest">Exmouth Market</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
