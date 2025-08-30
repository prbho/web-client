"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-2">
        {/* Unique availability indicator */}
        <motion.div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-slate-600 mb-8 border border-slate-200 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Available for new projects
        </motion.div>

        {/* Typography with enhanced hierarchy */}
        <motion.h1 className="text-5xl md:text-7xl font-light leading-[0.9] tracking-tight mb-6">
          <span className="block mb-3">Thoughtful Design</span>
          <span className="bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent font-medium">
            Meets Strategic Impact
          </span>
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          We craft distinctive brand identities and digital experiences that
          drive measurable results for ambitious companies.
        </motion.p>

        {/* Enhanced CTA buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-700 text-white rounded-xl font-medium hover:bg-cyan-800 transition-all shadow-lg hover:shadow-xl group">
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Your Project
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 bg-white text-slate-700 hover:text-slate-900 font-medium transition-colors group flex items-center border border-slate-200 rounded-lg hover:bg-white/50 backdrop-blur-sm">
            Explore Our Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}>
        <div className="flex flex-col items-center">
          <p className="text-xs text-slate-500 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
