"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  User,
  Calendar,
  Briefcase,
  CheckCircle,
  Eye,
  Clock,
} from "lucide-react";
import ClientCallToAction from "./ClientCallToAction";
import ShareButtons from "./ShareButtons";
import TableOfContents from "./TableOfContents";
import Image from "next/image";

interface CaseStudyClientProps {
  post: {
    metadata: {
      title: string;
      description: string;
      image?: string; // This should be string, not an object
      tags?: string[];
      client?: string;
      year?: string;
      role?: string;
    };
    htmlContent: string;
  };
}

const MetaCard = ({
  icon,
  title,
  value,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  gradient: string;
}) => (
  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`w-8 h-8 ${gradient} rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-slate-500 font-medium">{title}</span>
        <span className="text-slate-900 font-medium">{value}</span>
      </div>
    </div>
  </div>
);

export default function EnhancedCaseStudy({ post }: CaseStudyClientProps) {
  const [isClient, setIsClient] = useState(false);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const wordCount = post.htmlContent
      .replace(/<[^>]*>/g, "")
      .split(/\s+/).length;
    setReadingTime(Math.ceil(wordCount / 200));

    const headings = document.querySelectorAll(
      "article h2, article h3, article h4"
    );
    headings.forEach((heading, index) => {
      heading.id = `heading-${index}`;
    });
  }, [post.htmlContent]); // Added post.htmlContent to dependency array

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
    <main className="bg-white mt-20 text-slate-900">
      {/* Back Navigation */}
      <motion.div
        className="px-6 md:px-12 pt-8 pb-4 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <motion.button
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-600 transition-colors group bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2"
          whileHover={{ scale: 1.05, x: -5 }}
          transition={{ duration: 0.2 }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </motion.button>
      </motion.div>

      {/* Header Section */}
      <section className="px-6 md:px-12 pt-12 pb-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto">
          {/* Project Meta */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {post.metadata.client && (
              <MetaCard
                icon={<User className="w-4 h-4 text-white" />}
                title="Client"
                value={post.metadata.client}
                gradient="bg-gradient-to-r from-cyan-600 to-blue-600"
              />
            )}
            {post.metadata.year && (
              <MetaCard
                icon={<Calendar className="w-4 h-4 text-white" />}
                title="Year"
                value={post.metadata.year}
                gradient="bg-gradient-to-r from-emerald-600 to-teal-600"
              />
            )}
            {post.metadata.role && (
              <MetaCard
                icon={<Briefcase className="w-4 h-4 text-white" />}
                title="Role"
                value={post.metadata.role}
                gradient="bg-gradient-to-r from-purple-600 to-indigo-600"
              />
            )}
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-700 to-cyan-600 bg-clip-text text-transparent">
              {post.metadata.title}
            </span>
          </motion.h1>

          <motion.p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
            {post.metadata.description}
          </motion.p>

          {/* Tags */}
          <motion.div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-100">
              <Clock className="w-4 h-4 text-cyan-600" />
              <span className="text-sm text-cyan-700 font-medium">
                {readingTime} min read
              </span>
            </div>
            {post.metadata.tags?.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-4 py-2 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-100 capitalize">
                <CheckCircle className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Image */}
      {post.metadata.image && (
        <motion.section
          className="px-6 md:px-12 mb-20 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          <div className="aspect-video overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-2xl shadow-slate-900/10 relative group">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Eye className="w-5 h-5 text-slate-700" />
            </div>
          </div>
        </motion.section>
      )}

      {/* Main Content with TOC */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-6">
        {/* Table of Contents - hidden on mobile, sticky on desktop */}
        <div className="lg:col-span-3 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto">
          {isClient && <TableOfContents content={post.htmlContent} />}
        </div>

        {/* Article Content */}
        <motion.section
          className="lg:col-span-7 pb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}>
          <article
            className="prose prose-slate prose-lg max-w-none
              prose-headings:font-light prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:font-bold prose-p:mb-6 prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-cyan-800
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-cyan-600 hover:prose-a:text-cyan-700 prose-a:no-underline
              prose-strong:text-slate-900 prose-strong:font-medium
              prose-blockquote:border-cyan-200 prose-blockquote:text-slate-600
              prose-code:text-slate-800 prose-code:bg-slate-50 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-12
              prose-hr:border-slate-200 prose-hr:my-16"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </motion.section>

        {/* Share Buttons - hidden on mobile, sticky on desktop */}
        <div className="lg:col-span-2 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          {isClient && <ShareButtons />}
        </div>
      </div>

      {/* CTA Section */}
      <ClientCallToAction />
    </main>
  );
}
