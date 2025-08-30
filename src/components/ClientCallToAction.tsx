import { motion } from "framer-motion";
import { Eye, ArrowRight, CheckCircle } from "lucide-react";

export default function ClientCallToAction() {
  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-cyan-50/30">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center">
            <Eye className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
          Enjoyed this case study?
          <br />
          <span className="bg-gradient-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent font-medium">
            Explore more work
          </span>
        </h2>

        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover how we&apos;ve helped other companies transform their brands
          and create meaningful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            className="px-8 py-4 bg-cyan-700 text-white rounded-full font-medium hover:bg-cyan-800 transition-all shadow-xl shadow-cyan-700/25 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}>
            <Eye className="w-4 h-4" />
            <span>View All Work</span>
          </motion.button>

          <motion.button
            className="px-8 py-4 text-slate-700 hover:text-cyan-600 font-medium transition-colors flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full"
            whileHover={{ x: 5, scale: 1.05 }}>
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-8">
          <CheckCircle className="w-4 h-4 text-cyan-600" />
          <span>Usually responds within 24 hours</span>
        </div>
      </motion.div>
    </section>
  );
}
