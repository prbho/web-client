"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { navigationLinks } from "@/const";

interface FooterProps {
  companyInfo?: {
    name: string;
    description: string;
    logo: string;
    email: string;
  };
  navigationLinks?: {
    title: string;
    links: {
      href: string;
      label: string;
    }[];
  }[];
  socialLinks?: {
    platform: string;
    href: string;
    icon: React.ReactNode;
  }[];
  copyrightText?: string;
  accentColor?: string;
}

export default function Footer({
  companyInfo = {
    name: "Cofellow",
    description:
      "A creative design agency helping startups and bold brands build their future with design, strategy & code.",
    logo: "/logo.png",
    email: "letstalk@cofellow.com",
  },

  socialLinks = [
    {
      platform: "Twitter",
      href: "#",
      icon: <Twitter className="w-4 h-4" />,
    },
    {
      platform: "Instagram",
      href: "#",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      platform: "LinkedIn",
      href: "#",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ],
  copyrightText = `© ${new Date().getFullYear()} Cofellow. All rights reserved.`,
}: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <motion.div
                className="w-8 h-8 bg-gray-50 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}>
                <Image
                  src="/logo.png"
                  alt={`${companyInfo.name} Logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <span className="font-medium text-slate-900 transition-all duration-300 text-sm">
              Cofellow
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            {companyInfo.description}
          </p>
        </motion.div>

        {/* Navigation Columns */}
        {navigationLinks.map((column, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}>
            <h4 className="font-medium text-gray-900 mb-4">{column.title}</h4>
            <ul className="space-y-3">
              {column.links.map((link, linkIndex) => (
                <motion.li
                  key={linkIndex}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={link.href}
                    className={`text-gray-600 hover:text-gray-900 text-sm flex items-center gap-2 transition-colors ${
                      linkIndex === 0 ? "mt-0" : ""
                    }`}>
                    <ArrowRight className="w-3 h-3 text-cyan-600 group-hover:text-cyan-600" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}>
          <h4 className="font-medium text-gray-900 mb-4">Get in touch</h4>
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-4 h-4 text-gray-500" />
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              {companyInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.platform}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-100 py-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}>
        <p className="text-xs text-gray-500">{copyrightText}</p>
      </motion.div>
    </footer>
  );
}
