import { motion } from "framer-motion";
import { Share2, Heart, ExternalLink } from "lucide-react";

const ShareButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="hidden xl:block z-40">
      <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 shadow-xl shadow-slate-900/10">
        <div className="flex flex-col gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mb-2">
            <Share2 className="w-4 h-4 text-white" />
          </div>
          <button className="w-10 h-10 bg-slate-50 hover:bg-cyan-50 rounded-lg flex items-center justify-center transition-colors duration-200 group">
            <Heart className="w-4 h-4 text-slate-400 group-hover:text-cyan-600" />
          </button>
          <button className="w-10 h-10 bg-slate-50 hover:bg-cyan-50 rounded-lg flex items-center justify-center transition-colors duration-200 group">
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ShareButtons;
