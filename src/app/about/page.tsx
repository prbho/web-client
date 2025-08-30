// /app/about/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Eye,
  Users,
  Sparkles,
  Target,
  Palette,
  Monitor,
  Smartphone,
  Lightbulb,
  Heart,
  Award,
  Zap,
  ArrowRight,
  Mail,
  Calendar,
  CheckCircle,
  Shield,
  LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";

// Type definitions
type ColorVariant = "blue" | "green" | "purple" | "orange";
type ServiceColorVariant = "blue" | "purple" | "green";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  color: ColorVariant;
}

interface ServiceCategoryProps {
  category: string;
  services: string[];
  icon: LucideIcon;
  delay?: number;
  color: ServiceColorVariant;
}

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
  delay?: number;
  icon: LucideIcon;
}

interface TeamMemberProps {
  role: string;
  icon: LucideIcon;
  delay?: number;
}

const ValueCard = ({
  title,
  description,
  icon: Icon,
  index,
  color,
}: ValueCardProps) => {
  const colorVariants: Record<ColorVariant, string> = {
    blue: "group-hover:bg-blue-50 group-hover:border-blue-200",
    green: "group-hover:bg-green-50 group-hover:border-green-200",
    purple: "group-hover:bg-purple-50 group-hover:border-purple-200",
    orange: "group-hover:bg-orange-50 group-hover:border-orange-200",
  };

  const iconColors: Record<ColorVariant, string> = {
    blue: "group-hover:bg-blue-100 group-hover:text-blue-600",
    green: "group-hover:bg-green-100 group-hover:text-green-600",
    purple: "group-hover:bg-purple-100 group-hover:text-purple-600",
    orange: "group-hover:bg-orange-100 group-hover:text-orange-600",
  };

  return (
    <motion.div
      className={`group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorVariants[color]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}>
      <div
        className={`w-12 h-12 bg-gray-50 rounded-xl mb-6 transition-all duration-300 flex items-center justify-center ${iconColors[color]}`}>
        <Icon className="w-6 h-6 text-gray-400 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ServiceCategory = ({
  category,
  services,
  icon: Icon,
  delay = 0,
  color,
}: ServiceCategoryProps) => {
  const colorVariants: Record<ServiceColorVariant, string> = {
    blue: "group-hover:bg-blue-50 group-hover:border-blue-200",
    purple: "group-hover:bg-purple-50 group-hover:border-purple-200",
    green: "group-hover:bg-green-50 group-hover:border-green-200",
  };

  const iconColors: Record<ServiceColorVariant, string> = {
    blue: "group-hover:bg-blue-100 group-hover:text-blue-600",
    purple: "group-hover:bg-purple-100 group-hover:text-purple-600",
    green: "group-hover:bg-green-100 group-hover:text-green-600",
  };

  return (
    <motion.div
      className={`group text-center p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorVariants[color]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}>
      <div
        className={`w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${iconColors[color]}`}>
        <Icon className="w-7 h-7 text-gray-400 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
      <ul className="space-y-3 text-gray-600">
        {services.map((service, idx) => (
          <li key={idx} className="flex items-center justify-center text-sm">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-current transition-colors"></div>
            {service}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const StatCard = ({
  number,
  label,
  suffix = "",
  delay = 0,
  icon: Icon,
}: StatCardProps) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}>
    <div className="mb-4">
      <Icon className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-gray-600 transition-colors" />
    </div>
    <motion.div
      className="text-4xl md:text-5xl font-light text-gray-900 mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay + 0.2 }}>
      {number}
      {suffix}
    </motion.div>
    <p className="text-gray-500 text-sm font-medium">{label}</p>
  </motion.div>
);

const TeamMember = ({ role, icon: Icon, delay = 0 }: TeamMemberProps) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}>
    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 mx-auto flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
      <Icon className="w-8 h-8 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
    </div>
    <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
      {role}
    </p>
  </motion.div>
);

export default function AboutPage() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: headerY }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-100 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-green-50 to-blue-100 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Hero Section */}
      <Hero
        tagline={{
          text: "Meet the Team Behind the Magic",
          icon: <Sparkles className="w-4 h-4 mr-2 text-cyan-600" />,
        }}
        heading={{
          text: "We're Cofellow",
          highlight: "Your Creative Partner",
          highlightGradient: "from-cyan-600 to-blue-600",
        }}
        description="From brand strategy to product execution, we help startups and organizations build bold, memorable experiences that drive real business results."
        background="bg-gradient-to-br from-gray-50 to-blue-50"
        minHeight="min-h-[99vh]"
      />

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              number="100"
              suffix="+"
              label="Projects Delivered"
              icon={Award}
              delay={0}
            />
            <StatCard
              number="10"
              suffix="+"
              label="Years Experience"
              icon={Calendar}
              delay={0.1}
            />
            <StatCard
              number="50"
              suffix="+"
              label="Happy Clients"
              icon={Heart}
              delay={0.2}
            />
            <StatCard
              number="99"
              suffix="%"
              label="Client Satisfaction"
              icon={Zap}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl mb-6">
              <Target className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Our Mission
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 text-center border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
              We exist to empower founders and teams with the{" "}
              <span className="text-gray-900 font-semibold">
                strategy, design, and development
              </span>{" "}
              needed to stand out. Whether you&apos;re a new startup or a
              scaling company, we bring the clarity, creativity, and execution
              to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 border-1 rounded-2xl mb-6">
              <Lightbulb className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">What We Do</h2>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach covers every aspect of your digital
              presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCategory
              category="Branding"
              icon={Palette}
              color="blue"
              services={[
                "Brand Strategy",
                "Startup Identity Design",
                "Visual & Verbal Branding",
              ]}
              delay={0}
            />
            <ServiceCategory
              category="Product"
              icon={Monitor}
              color="purple"
              services={[
                "UX & UI Design",
                "Design Systems",
                "Prototyping & Testing",
              ]}
              delay={0.1}
            />
            <ServiceCategory
              category="Development"
              icon={Smartphone}
              color="green"
              services={[
                "Web App Development",
                "Frontend Engineering",
                "Landing Page Builds",
              ]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl mb-6">
              <Heart className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              What We Believe
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles guide every project and partnership we
              undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              title="Clarity First"
              description="Design and development must serve a clear purpose. We eliminate confusion and focus on what truly matters for your users and business goals."
              icon={Eye}
              color="blue"
              index={0}
            />
            <ValueCard
              title="Collaborative Process"
              description="We co-create with our clients, not just for them. Your insights combined with our expertise create the most impactful solutions."
              icon={Users}
              color="green"
              index={1}
            />
            <ValueCard
              title="Craft Matters"
              description="Details, polish, and precision make the difference between good and extraordinary. We obsess over the small things that create big impacts."
              icon={Sparkles}
              color="purple"
              index={2}
            />
            <ValueCard
              title="Impact Over Trends"
              description="We focus on work that moves the needle, not just what looks good. Every design decision is backed by strategy and user research."
              icon={Target}
              color="orange"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-32 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 border-1 rounded-2xl mb-6">
              <Users className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              The People Behind Cofellow
            </h2>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-12"></div>

            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our team combines strategic thinking, creative excellence, and
                technical expertise to deliver exceptional results. We&apos;re
                passionate about helping businesses tell their stories and
                connect with their audiences in meaningful ways.
              </p>

              <div className="flex justify-center items-center space-x-12">
                <TeamMember role="Strategy" icon={Target} delay={0} />
                <TeamMember role="Design" icon={Palette} delay={0.1} />
                <TeamMember role="Development" icon={Monitor} delay={0.2} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
