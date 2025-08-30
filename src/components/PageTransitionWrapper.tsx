"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransitionWrapper({
  children,
  className = "",
}: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(false);

  // Handle loading state for smoother transitions
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Reduced motion variants
  const reducedMotionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Full motion variants with sophisticated animations
  const fullMotionVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      filter: "blur(4px)",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  // Choose variants based on user preference
  const variants = shouldReduceMotion
    ? reducedMotionVariants
    : fullMotionVariants;

  return (
    <>
      {/* Loading overlay for smoother transitions */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-white pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-8 h-8 border-2 border-slate-300 border-t-slate-900 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page transition wrapper */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`min-h-screen bg-white ${className}`}
          style={{
            // Ensure smooth font rendering during transitions
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}>
          {/* Content wrapper with staggered animation support */}
          <motion.div
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1,
                },
              },
            }}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Page transition overlay effect */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 pointer-events-none z-40"
          initial={{
            background:
              "linear-gradient(45deg, transparent 0%, rgba(15, 23, 42, 0.03) 50%, transparent 100%)",
            x: "-100%",
          }}
          animate={{
            x: "100%",
            transition: {
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
    </>
  );
}

// Optional: Export individual transition variants for custom usage
export const pageTransitionVariants = {
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  slideDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
};

// Hook for custom page transitions
export const usePageTransition = (
  variant: keyof typeof pageTransitionVariants = "slideUp"
) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return {
    key: pathname,
    variants: shouldReduceMotion
      ? pageTransitionVariants.fade
      : pageTransitionVariants[variant],
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  };
};
