import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle } from "lucide-react";

interface TableOfContentsProps {
  content: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3, h4");

    const headingData = Array.from(headingElements).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.charAt(1)),
    }));

    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    setTimeout(() => {
      headingData.forEach((_, index) => {
        const element = document.getElementById(`heading-${index}`);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="relative xl:block z-40 mb-8 xl:mb-0" // Changed from fixed to relative
    >
      <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-900/10 max-w-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <h4 className="text-sm font-medium text-slate-900">Contents</h4>
        </div>
        <nav className="space-y-2">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#heading-${index}`}
              className={`flex items-center gap-2 text-sm transition-all duration-200 py-1 px-2 rounded-lg ${
                activeHeading === `heading-${index}`
                  ? "text-cyan-700 font-medium bg-cyan-50"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
              style={{ paddingLeft: `${8 + (heading.level - 2) * 12}px` }}>
              <CheckCircle className="w-3 h-3 flex-shrink-0" />
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default TableOfContents;
