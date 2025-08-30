import { motion } from "framer-motion";
import {
  Target,
  Palette,
  Users,
  Globe,
  Smartphone,
  Layers,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Brand Strategy",
      desc: "Strategic positioning that differentiates your brand in the market",
      icon: Target,
      color: "blue",
    },
    {
      title: "Visual Identity",
      desc: "Memorable logos and brand systems that tell your story",
      icon: Palette,
      color: "purple",
    },
    {
      title: "UX Design",
      desc: "User-centered experiences that drive engagement and conversion",
      icon: Users,
      color: "green",
    },
    {
      title: "Web Design",
      desc: "Beautiful, responsive websites that perform across all devices",
      icon: Globe,
      color: "cyan",
    },
    {
      title: "App Design",
      desc: "Intuitive mobile experiences that users love to engage with",
      icon: Smartphone,
      color: "orange",
    },
    {
      title: "Design Systems",
      desc: "Scalable design frameworks for consistent brand experiences",
      icon: Layers,
      color: "pink",
    },
  ];

  const colorVariants = {
    blue: {
      bg: "group-hover:bg-blue-50",
      iconBg: "group-hover:bg-blue-100",
      iconColor: "group-hover:text-blue-600",
      accent: "group-hover:border-blue-200",
    },
    purple: {
      bg: "group-hover:bg-purple-50",
      iconBg: "group-hover:bg-purple-100",
      iconColor: "group-hover:text-purple-600",
      accent: "group-hover:border-purple-200",
    },
    green: {
      bg: "group-hover:bg-green-50",
      iconBg: "group-hover:bg-green-100",
      iconColor: "group-hover:text-green-600",
      accent: "group-hover:border-green-200",
    },
    cyan: {
      bg: "group-hover:bg-cyan-50",
      iconBg: "group-hover:bg-cyan-100",
      iconColor: "group-hover:text-cyan-600",
      accent: "group-hover:border-cyan-200",
    },
    orange: {
      bg: "group-hover:bg-orange-50",
      iconBg: "group-hover:bg-orange-100",
      iconColor: "group-hover:text-orange-600",
      accent: "group-hover:border-orange-200",
    },
    pink: {
      bg: "group-hover:bg-pink-50",
      iconBg: "group-hover:bg-pink-100",
      iconColor: "group-hover:text-pink-600",
      accent: "group-hover:border-pink-200",
    },
  };

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-4">What We Do</h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const colors =
              colorVariants[service.color as keyof typeof colorVariants];
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                className={`group p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 ${colors.bg} ${colors.accent}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}>
                <div
                  className={`w-12 h-12 bg-slate-50 rounded-2xl mb-6 transition-all duration-300 flex items-center justify-center ${colors.iconBg}`}>
                  <IconComponent
                    className={`w-6 h-6 text-slate-400 transition-colors duration-300 ${colors.iconColor}`}
                  />
                </div>
                <h3 className="text-xl font-medium mb-3 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>

                {/* Optional: Add a subtle accent line */}
                <div className="mt-6 w-8 h-0.5 bg-slate-200 group-hover:bg-current transition-all duration-300 opacity-0 group-hover:opacity-30"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional: Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Need something specific? We&apos;d love to discuss your unique
            requirements and create a custom solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
