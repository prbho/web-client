"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  tagline?: {
    text: string;
    icon?: ReactNode;
  };
  heading: {
    text: string;
    highlight?: string;
    highlightGradient?: string;
  };
  description: string;
  primaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  showScrollIndicator?: boolean;
  background?: string;
  minHeight?: string;
}

export default function Hero({
  tagline = {
    text: "Comprehensive Design Services",
    icon: <Star className="w-4 h-4 mr-2 text-cyan-600" />,
  },
  heading = {
    text: "Services That",
    highlight: "Drive Growth",
    highlightGradient: "from-cyan-700 to-cyan-600",
  },
  description = "We partner with forward-thinking startups and established brands to create meaningful experiences that connect with audiences and drive business results.",
  primaryCta = {
    text: "Get Started",
    href: "/contact",
    icon: <MessageCircle className="w-4 h-4 mr-2" />,
  },
  secondaryCta = {
    text: "View Our Work",
    href: "/work",
    icon: <ArrowRight className="w-4 h-4 ml-2" />,
  },
  showScrollIndicator = true,
  background = "bg-white",
  minHeight = "min-h-[90vh]",
}: HeroProps) {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

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
    <section
      className={`relative ${minHeight} flex flex-col items-center justify-center px-6 md:px-12 py-32 ${background}`}>
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center">
        {tagline && (
          <motion.div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8 border border-gray-100 backdrop-blur-sm">
            {tagline.icon}
            {tagline.text}
          </motion.div>
        )}

        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
          {heading.text}
          {heading.highlight && (
            <>
              <br />
              <span
                className={`bg-gradient-to-r ${heading.highlightGradient} bg-clip-text text-transparent font-medium`}>
                {heading.highlight}
              </span>
            </>
          )}
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center my-16">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center px-8 py-4 bg-cyan-700 text-white rounded-xl font-medium hover:bg-cyan-800 transition-all shadow-lg hover:shadow-xl group">
              {primaryCta.icon && (
                <motion.span
                  className="group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}>
                  {primaryCta.icon}
                </motion.span>
              )}
              {primaryCta.text}
            </Link>
          )}

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center px-8 py-4 text-gray-600 hover:text-gray-900 transition-colors group">
              {secondaryCta.text}
              {secondaryCta.icon && (
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 4 }}>
                  {secondaryCta.icon}
                </motion.span>
              )}
            </Link>
          )}
        </motion.div>
      </motion.div>

      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
