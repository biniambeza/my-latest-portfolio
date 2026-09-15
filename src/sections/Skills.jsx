import { useState } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiFlutter } from "react-icons/si";
import { Cpu } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

const icons = {
  React: FaReact,
  JavaScript: FaJsSquare,
  "Tailwind CSS": SiTailwindcss,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Flutter: SiFlutter,
};

const skills = [
  { name: "React", type: "Frontend", description: "Reusable component systems & modern hooks" },
  { name: "Flutter", type: "Frontend", description: "Cross-platform mobile apps for iOS & Android" },
  { name: "JavaScript", type: "Frontend", description: "ESNext syntax, asynchronous logic & DOM APIs" },
  { name: "Tailwind CSS", type: "Frontend", description: "Modern design systems & fluid responsive UI" },
  { name: "HTML", type: "Frontend", description: "Accessible semantic structure & SEO foundations" },
  { name: "CSS", type: "Frontend", description: "Advanced layouts, animations & responsive media" },
  { name: "Node.js", type: "Backend", description: "Event-driven asynchronous backend services" },
  { name: "Express.js", type: "Backend", description: "Robust RESTful APIs & middleware architecture" },
  { name: "PostgreSQL", type: "Database", description: "Relational modeling, indexing & performant queries" },
  { name: "MongoDB", type: "Database", description: "Document-oriented schemas & aggregation pipelines" },
  { name: "Git", type: "Tools", description: "Branching strategies, rebasing & version control" },
  { name: "GitHub", type: "Tools", description: "CI/CD actions, collaboration & project management" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 80 });

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.type === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-[9px] font-mono uppercase tracking-wider mb-2">
              <Cpu size={11} />
              Technical Arsenal
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white tracking-tight">
              A toolkit engineered for{" "}
              <span className="accent-underline">
                performance
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white dark:bg-white/[0.03] p-1 rounded-xl border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-xs"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredSkills.map((skill) => {
            const Icon = icons[skill.name];
            return (
              <div
                key={skill.name}
                data-reveal-child
                className="group relative p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800/80 shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300">
                      {Icon && <Icon size={16} />}
                    </div>

                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400">
                      {skill.type}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-medium text-black dark:text-white tracking-tight mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-normal">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between">
                  <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500">
                    Production Ready
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}