"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ReadingProgress from "./ReadingProgress";

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center space-x-2"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}>
      <div
        className={`relative ${
          scrolled ? "w-8 h-8" : "w-10 h-10"
        } transition-all duration-300`}>
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full bg-slate-50 rounded-md">
          <Image
            src="/logo.png"
            alt="Company Logo"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <motion.span
        className={`font-medium text-slate-900 transition-all duration-300 ${
          scrolled ? "text-sm" : "text-base"
        }`}>
        Cofellow
      </motion.span>
    </motion.div>
  );
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}>
            <div className="flex justify-between items-center mb-8">
              <Logo scrolled={false} />
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close menu">
                <X className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(241, 245, 249, 0)", "rgba(241, 245, 249, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: navBackground,
          borderBottomWidth: 1,
          borderColor: navBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto sm:md-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="z-10">
              <Logo scrolled={scrolled} />
            </Link>

            <div className="hidden md:flex items-center gap-1 h-full">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="h-full">
                  <motion.div
                    className={`px-4 py-2 flex rounded-lg text-sm font-medium relative h-full justify-center items-center ${
                      pathname === link.href
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}>
                    <span>{link.label}</span>
                    {pathname === link.href && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-5 h-0.5 bg-cyan-600 rounded-full"
                        layoutId="navIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Link href="/contact">
                <motion.button
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm flex items-center gap-2"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open menu">
              <Menu className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
        <ReadingProgress />
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
