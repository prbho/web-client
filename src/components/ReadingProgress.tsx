import { motion, useScroll } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-950/60 to-cyan-600/60 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ReadingProgress;
