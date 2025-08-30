// components/AnimatedOrbs.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ top: "-10%", left: "-10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ top: "20%", right: "-10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ bottom: "-10%", left: "10%" }}
      />
    </div>
  );
}
