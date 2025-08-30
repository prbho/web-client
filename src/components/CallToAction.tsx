"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Check } from "lucide-react";

interface CTAProps {
  title: {
    text: string;
    highlight?: string;
    highlightGradient?: string;
  };
  description: string;
  primaryAction?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
  background?: string;
  textColor?: string;
  highlightColor?: string;
}

export default function CallToAction({
  title = {
    text: "Ready to build something",
    highlight: "extraordinary together?",
    highlightGradient: "from-white to-gray-300",
  },
  description = "Let's discuss your project goals and explore how we can help bring your vision to life through strategic design.",
  primaryAction = {
    text: "Book Discovery Call",
    href: "/contact",
    icon: <Calendar className="w-5 h-5" />,
  },

  features = [
    { icon: <Check className="w-4 h-4" />, text: "Free consultation" },
    { icon: <Clock className="w-4 h-4" />, text: "24-hour response" },
  ],
  background = "bg-gray-900",
  textColor = "text-white",
  highlightColor = "text-gray-300",
}: CTAProps) {
  return (
    <section className={`py-32 px-6 md:px-12 ${background} ${textColor}`}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
          {title.text}
          {title.highlight && (
            <>
              <br />
              <span
                className={`bg-gradient-to-r ${title.highlightGradient} bg-clip-text text-transparent font-medium`}>
                {title.highlight}
              </span>
            </>
          )}
        </h2>

        <motion.p
          className={`text-xl ${highlightColor} mb-12 max-w-2xl mx-auto leading-relaxed`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}>
          {description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}>
          {primaryAction && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={primaryAction.href}
                className={`inline-flex items-center px-12 py-5 ${
                  background === "bg-gray-900"
                    ? "bg-white text-gray-900"
                    : "bg-gray-900 text-white"
                } rounded-xl text-lg font-medium hover:opacity-90 transition-all shadow-xl group`}>
                {primaryAction.icon && (
                  <motion.span
                    className="mr-2 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}>
                    {primaryAction.icon}
                  </motion.span>
                )}
                {primaryAction.text}
              </Link>
            </motion.div>
          )}
        </motion.div>

        {features && features.length > 0 && (
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`${highlightColor}`}>
                  {feature.icon}
                </motion.div>
                <span className={highlightColor}>{feature.text}</span>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
