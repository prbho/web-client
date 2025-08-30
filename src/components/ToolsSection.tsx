import { motion } from "framer-motion";

// You can replace these with actual icon components or SVGs
const ToolIcon = ({ name }: { name: string }) => {
  const iconPaths = {
    Figma: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M15.5 2.25a3.25 3.25 0 0 1 .986 6.348A3.25 3.25 0 0 1 15.5 15a3.25 3.25 0 1 1-6.5 0V8.598a3.25 3.25 0 1 1 0-6.348 3.25 3.25 0 0 1 4.014 0A3.25 3.25 0 0 1 15.5 2.25z" />
      </svg>
    ),
    Webflow: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 4.5c0-1.1-.9-2-2-2H2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-15zM22 19.5H2v-15h20v15z" />
        <path d="M6.5 7.5h-2v2h2v-2zm0 3h-2v2h2v-2zm0 3h-2v2h2v-2zm3-6h8v2h-8v-2zm0 3h8v2h-8v-2zm0 3h8v2h-8v-2z" />
      </svg>
    ),
    Framer: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    Tailwind: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    Notion: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z" />
      </svg>
    ),
  };

  return (
    <div className="w-8 h-8 text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
      {iconPaths[name as keyof typeof iconPaths] || (
        <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
          <span className="text-xs font-bold text-slate-600">
            {name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
};

const ToolsSection = () => {
  const tools = [
    { name: "Figma", color: "hover:text-purple-600" },
    { name: "Webflow", color: "hover:text-blue-600" },
    { name: "Framer", color: "hover:text-pink-600" },
    { name: "Next.js", color: "hover:text-black" },
    { name: "Tailwind", color: "hover:text-cyan-600" },
    { name: "Notion", color: "hover:text-gray-800" },
  ];

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16">
          <h2 className="text-2xl font-light text-slate-600 mb-8">
            Powered by industry-leading tools
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className={`group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 cursor-default ${tool.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}>
              <ToolIcon name={tool.name} />
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Additional info */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            We stay up-to-date with the latest tools and technologies to deliver
            cutting-edge solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
