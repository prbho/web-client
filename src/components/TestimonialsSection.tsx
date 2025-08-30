"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  projectType: string;
  results: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Cofellow transformed our brand vision into something extraordinary. Their strategic approach and attention to detail exceeded all expectations. The ROI on our investment was evident 3 weeks.",
    name: "Adekunle Adeniji.",
    title: "Founder & CEO",
    company: "Sprint G.S Ltd",
    rating: 5,
    projectType: "Brand Strategy & Identity",
    results: "250% increase in brand recognition",
    avatar: "/aa.jpg",
  },
  {
    quote:
      "The app design they created consistently impresses everyone who sees it. Working with Cofellow was one of our best decisions. Their user-centered approach resulted in exceptional user engagement.",
    name: "Muritala M.",
    title: "CEO",
    company: "Errandboy Nigeria",
    rating: 5,
    projectType: "Mobile App Design",
    results: "40% increase in user retention",
    avatar: "/mm.jpg",
  },
  {
    quote:
      "From concept to execution, Cofellow delivered beyond our wildest expectations. Their technical expertise combined with creative vision produced a platform that truly stands out in our industry.",
    name: "Emmanuel Ogbuefi",
    title: "Managing Director",
    company: "PWAN Heritage",
    rating: 5,
    projectType: "Web Platform Development",
    results: "300% growth in daily active users",
    avatar: "/eo.jpg",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}>
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

      {/* Main card */}
      <div className="relative bg-white p-10 rounded-3xl shadow-lg shadow-gray-100/50 border border-gray-100 group-hover:shadow-2xl group-hover:shadow-gray-200/30 transition-all duration-500">
        {/* Quote icon with floating animation */}
        <motion.div
          className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <Quote className="w-6 h-6 text-white" />
        </motion.div>

        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i + index * 0.2 }}
              viewport={{ once: true }}>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </motion.div>
          ))}
        </div>

        {/* Quote text with better typography */}
        <blockquote className="text-xl text-gray-800 leading-relaxed mb-8 font-light">
          "{testimonial.quote}"
        </blockquote>

        {/* Results badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-100">
          <CheckCircle className="w-4 h-4" />
          {testimonial.results}
        </div>

        {/* Client info section */}
        <div className="grid justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar with actual image */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-cyan-300 transition-all duration-300 shadow-sm">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-lg mb-1">
                {testimonial.name}
              </p>
              <p className="text-gray-600 text-sm mb-2">{testimonial.title}</p>
              <p className="text-gray-500 text-sm font-medium">
                {testimonial.company}
              </p>
            </div>
          </div>

          {/* Project type badge */}
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-xs font-medium border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-all duration-300">
              <ArrowRight className="w-3 h-3" />
              {testimonial.projectType}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24">
          {/* Icon */}
          {/* <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <Users className="w-7 h-7 text-cyan-600" />
          </motion.div> */}

          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Client Stories
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital
            presence and achieve remarkable growth through strategic design and
            development.
          </p>
        </motion.div>

        {/* Testimonials grid with staggered layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Social proof footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20">
          <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((testimonial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700 ml-2">
                50+ Happy Clients
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                5.0 Average Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
