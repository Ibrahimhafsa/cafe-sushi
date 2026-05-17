import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { posts } from "@/lib/journal-data";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title || "Article"} — Cafe Sushi` },
        {
          name: "description",
          content: post?.excerpt || "Read our latest sushi journal articles.",
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-cream min-h-screen">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-display text-4xl text-ink mb-4">Article Not Found</h1>
          <Link to="/" className="text-red-accent hover:underline">Return Home</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Header section for Article */}
      <article className="pt-32 lg:pt-48 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-ink hover:text-red-accent transition-colors mb-8 text-sm uppercase tracking-wider font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
            
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2 text-muted-ink">
                <Calendar className="w-4 h-4 text-gold" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-red-accent font-medium">
                <Tag className="w-4 h-4" />
                <span className="uppercase tracking-widest">{post.cat}</span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-12">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 relative"
          >
            <div className="absolute -inset-4 bg-parchment -z-10 rounded-3xl transform rotate-1" />
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-muted-ink leading-relaxed text-lg md:text-xl">
              <p className="font-display text-2xl text-ink italic leading-relaxed border-l-4 border-red-accent pl-6 py-2 bg-parchment/50 rounded-r-lg">
                {post.excerpt}
              </p>
              
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-gold/30 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-ink uppercase tracking-widest mb-1">Written By</p>
              <p className="font-display text-xl text-ink">The Cafe Sushi Team</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full border border-border text-sm hover:bg-ink hover:text-white transition-all">Share Article</button>
              <Link to="/" className="btn-red px-8 py-2 rounded-full text-sm">Return Home</Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
      <Toaster position="bottom-right" />
    </main>
  );
}
