import { motion } from "framer-motion";
import { Mail, Clock, Globe } from "lucide-react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      info: "letstalk@cofellow.com",
      desc: "Drop us a line anytime",
      href: "mailto:letstalk@cofellow.com",
      color: "blue",
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Within 24 hours",
      desc: "We're pretty quick",
      color: "green",
    },
    {
      icon: Globe,
      title: "Timezone",
      info: "GMT+1 (Lagos)",
      desc: "Available 9AM - 6PM",
      color: "purple",
    },
  ];

  const colorVariants = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-100",
      hover: "hover:border-blue-200",
    },
    green: {
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-100",
      hover: "hover:border-green-200",
    },
    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      border: "border-purple-100",
      hover: "hover:border-purple-200",
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}>
      {/* Header */}
      <div className="mt-20">
        <motion.h2
          className="text-2xl font-semibold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}>
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}>
          Choose your preferred way to reach us
        </motion.p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid md:grid-cols-3 gap-2">
        {contactItems.map((item, index) => {
          const colors =
            colorVariants[item.color as keyof typeof colorVariants];
          const IconComponent = item.icon;

          return (
            <motion.div
              key={item.title}
              className={`relative group ${colors.bg} ${colors.border} border rounded-md p-6 transition-all duration-300 ${colors.hover} hover:shadow-lg hover:shadow-gray-100`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              {/* Clickable overlay for email */}
              {item.href && (
                <a
                  href={item.href}
                  className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`${item.title}: ${item.info}`}
                />
              )}

              <div className="space-y-4">
                {/* Icon */}
                <div className={`w-8 h-8 text-gray-700`}>
                  <IconComponent className={`w-8 h-8 ${colors.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p
                    className={`font-medium text-gray-900 text-xs ${
                      item.href ? "group-hover:text-blue-600" : ""
                    } transition-colors`}>
                    {item.info}
                  </p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>

                {/* Link indicator for email */}
                {item.href && (
                  <div className="absolute top-3 right-3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
