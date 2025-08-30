//homepage

"use client";

import CallToAction from "@/components/CallToAction";
import HomeHero from "@/components/HomeHero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ToolsSection from "@/components/ToolsSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Animated background component
const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-full blur-3xl opacity-20"
      />
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <HomeHero />

      {/* Services Section */}
      <ServicesSection />

      {/* Capabilities Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Our Approach
            </h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              "We craft meaningful brand identities that resonate deeply with your target audience",
              "We build conversion-focused experiences with exceptional user experience design",
              "We create scalable design systems that grow with your business needs",
              "We partner with you long-term as your dedicated design team",
            ].map((capability, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}>
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {capability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <ToolsSection />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CallToAction
        title={{
          text: "Start your journey",
          highlight: "with us today",
          highlightGradient: "from-cyan-400 to-blue-500",
        }}
        description="Our team is ready to help you achieve your business goals through exceptional design."
        primaryAction={{
          text: "Get Started",
          href: "/contact",
          icon: <Zap className="w-5 h-5" />,
        }}
        features={[
          { icon: <CheckCircle className="w-4 h-4" />, text: "No obligations" },
          { icon: <Shield className="w-4 h-4" />, text: "Secure process" },
        ]}
        background="bg-gradient-to-br from-gray-800 to-gray-900"
      />
    </main>
  );
}
