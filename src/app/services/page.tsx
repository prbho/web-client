"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import {
  Palette,
  Monitor,
  Smartphone,
  Target,
  Lightbulb,
  Code,
  Layers,
  Search,
  Pencil,
  Figma,
  Globe,
  Zap,
  ArrowRight,
  Calendar,
  CheckCircle,
  Shield,
  LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";

// Type definitions
interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  features: string[];
}

interface ServiceGroup {
  category: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  services: Service[];
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const groupedServices: ServiceGroup[] = [
  {
    category: "Branding",
    icon: Palette,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
    services: [
      {
        title: "Brand Strategy",
        desc: "Strategic positioning and brand architecture that differentiates your business in competitive markets.",
        icon: Target,
        features: [
          "Market Analysis",
          "Brand Positioning",
          "Competitive Research",
          "Brand Guidelines",
        ],
      },
      {
        title: "Startup Branding",
        desc: "Complete brand identity systems designed to scale with your startup from MVP to market leader.",
        icon: Lightbulb,
        features: [
          "Logo Design",
          "Visual Identity",
          "Brand Voice",
          "Launch Strategy",
        ],
      },
    ],
  },
  {
    category: "Product Design",
    icon: Monitor,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    services: [
      {
        title: "UX & UI Design",
        desc: "User-centered design that transforms complex problems into intuitive, beautiful experiences.",
        icon: Figma,
        features: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Interface Design",
        ],
      },
      {
        title: "App Design",
        desc: "Native and cross-platform mobile experiences that users love and engage with daily.",
        icon: Smartphone,
        features: [
          "Mobile UX",
          "iOS & Android",
          "Design Systems",
          "User Testing",
        ],
      },
    ],
  },
  {
    category: "Development",
    icon: Code,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    services: [
      {
        title: "Web Design & Dev",
        desc: "High-performance websites and web applications built with modern frameworks and best practices.",
        icon: Globe,
        features: [
          "Next.js Development",
          "Responsive Design",
          "Performance Optimization",
          "SEO",
        ],
      },
      {
        title: "Design Systems",
        desc: "Scalable component libraries and design systems that ensure consistency across all touchpoints.",
        icon: Layers,
        features: [
          "Component Library",
          "Design Tokens",
          "Documentation",
          "Developer Handoff",
        ],
      },
    ],
  },
];

const ProcessStep = ({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: ProcessStepProps) => (
  <motion.div
    className="flex items-start space-x-6 group"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}>
    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-xl flex items-center justify-center font-semibold shadow-lg group-hover:shadow-xl transition-shadow">
      {number}
    </div>
    <div>
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-5 h-5 text-cyan-600" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: headerY }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-purple-50 to-pink-100 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Hero Section */}
      <Hero
        tagline={{
          text: "Premium Development Services",
          icon: <Code className="w-4 h-4 mr-2 text-cyan-600" />,
        }}
        heading={{
          text: "Build The Future",
          highlight: "With Confidence",
          highlightGradient: "from-cyan-600 to-indigo-600",
        }}
        description="Our expert team delivers cutting-edge solutions tailored to your business needs."
        background="bg-gradient-to-br from-gray-50 to-purple-50"
        minHeight="min-h-[99vh]"
      />

      {/* Services Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {groupedServices.map((group, groupIdx) => {
            const CategoryIcon = group.icon;

            return (
              <div key={group.category} className="mb-24 last:mb-0">
                {/* Category Header */}
                <motion.div
                  className="flex items-center mb-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center text-white mr-6 shadow-lg`}>
                    <CategoryIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light text-gray-900">
                      {group.category}
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-300 mt-2"></div>
                  </div>
                </motion.div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {group.services.map((service, serviceIdx) => {
                    const ServiceIcon = service.icon;
                    const serviceId = `${groupIdx}-${serviceIdx}`;

                    return (
                      <motion.div
                        key={service.title}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIdx * 0.1 }}
                        viewport={{ once: true }}
                        onHoverStart={() => setActiveService(serviceId)}
                        onHoverEnd={() => setActiveService(null)}>
                        <div
                          className={`h-full p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1 group-hover:${group.bgColor} group-hover:${group.borderColor}`}>
                          <div className="flex items-start justify-between mb-6">
                            <div
                              className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:${group.bgColor.replace(
                                "bg-",
                                "bg-"
                              )}`}>
                              <ServiceIcon
                                className={`w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:${group.textColor.replace(
                                  "text-",
                                  "text-"
                                )}`}
                              />
                            </div>
                            <motion.div
                              className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                              animate={
                                activeService === serviceId
                                  ? { rotate: 45, scale: 1.1 }
                                  : { rotate: 0, scale: 1 }
                              }>
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </div>

                          <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            {service.desc}
                          </p>

                          <div className="space-y-3">
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                              What&apos;s Included
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-6">
              <Zap className="w-7 h-7 text-cyan-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our Process
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every project follows our proven methodology designed to deliver
              exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <ProcessStep
                number="1"
                title="Discovery & Strategy"
                description="We start by understanding your business goals, target audience, and competitive landscape to inform our design decisions."
                icon={Search}
                delay={0}
              />
              <ProcessStep
                number="2"
                title="Concept & Ideation"
                description="Our team develops multiple creative concepts and approaches, collaborating with you to refine the direction."
                icon={Lightbulb}
                delay={0.1}
              />
            </div>
            <div className="space-y-12">
              <ProcessStep
                number="3"
                title="Design & Development"
                description="We bring concepts to life through iterative design and development, ensuring quality at every step."
                icon={Pencil}
                delay={0.2}
              />
              <ProcessStep
                number="4"
                title="Launch & Growth"
                description="After launch, we provide ongoing support and optimization to help your project achieve its full potential."
                icon={Zap}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      {/* <PricingWithConversion /> */}

      {/* CTA Section */}
      <CallToAction
        title={{
          text: "Ready to build something",
          highlight: "extraordinary together?",
          highlightGradient: "from-cyan-400 to-blue-500",
        }}
        description="Let's discuss your project goals and explore how we can help bring
            your vision to life through strategic design."
        primaryAction={{
          text: "Book Discovery Call",
          href: "/contact",
          icon: <Calendar className="w-5 h-5" />,
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
