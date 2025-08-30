"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CallToAction from "./CallToAction";

export default function WorkPageClient({ projects }: { projects: any[] }) {
  const [filter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.metadata.tags?.includes(filter));

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
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 md:px-12 py-32">
        <div className="min-h-[75vh] top-0 flex flex-col items-center justify-center px-6 md:px-12 py-32 bg-gradient-to-br from-cyan-50 to-orange-50 absolute w-full"></div>
        <div className="max-w-6xl mx-auto relative z-3">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16">
            <motion.div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8 border border-gray-100">
              <Briefcase className="w-4 h-4 mr-2 text-cyan-600" />
              Our Portfolio
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Selected Work That
              <>
                <br />
                <span
                  className={`bg-gradient-to-r from-cyan-600 to-slate-600 bg-clip-text text-transparent font-medium`}>
                  Speaks Volumes
                </span>
              </>
            </motion.h1>
            {/* <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Simple, fair pricing
            </h1> */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A curated collection of brand identities and digital experiences
              crafted for forward-thinking companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-6 md:px-12 pb-32 relative z-3">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${project.slug}-${filter}`}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                }}
                className="group">
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="mb-8">
                    <div className="aspect-video overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full h-full">
                        <Image
                          src={project.metadata.image}
                          alt={project.metadata.title}
                          width={1200}
                          height={675}
                          className="object-cover w-full h-full group-hover:opacity-90 transition-opacity duration-500"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.h3
                      className="text-2xl font-light text-slate-900 group-hover:text-slate-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      {project.metadata.title}
                    </motion.h3>

                    <p className="text-slate-600 leading-relaxed">
                      {project.metadata.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {(project.metadata.tags || []).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project indicator */}
                    <motion.div
                      className="flex items-center text-sm text-slate-400 group-hover:text-slate-600 transition-colors duration-300 pt-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}>
                      <span>View Project</span>
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}>
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}

      <CallToAction
        title={{
          text: "Have a project in mind?",
          highlight: "Let's create together",
          highlightGradient: "from-cyan-400 to-blue-500",
        }}
        description="We're always excited to take on new challenges and help bring bold
            ideas to life through thoughtful design."
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
