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
  const gridRef = useScrollReveal({ stagger: 100 });

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.type === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-black/60 dark:text-white/60 text-xs font-mono font-normal uppercase tracking-wider mb-3">
              <Cpu size={14} />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white tracking-tight">
              A toolkit engineered for{" "}
              <span className="accent-underline">
                performance
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-white/[0.04] p-1.5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
                      : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => {
            const Icon = icons[skill.name];
            return (
              <div
                key={skill.name}
                data-reveal-child
                className="group relative p-5 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between hover-tilt"
              >
                {/* Hover top glow bar */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-black dark:bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs bg-black/[0.04] dark:bg-white/[0.08] text-black/70 dark:text-white/70">
                      {Icon && <Icon size={24} />}
                    </div>

                    <span className="text-[10px] font-mono font-normal uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-black/40 dark:text-white/40">
                      {skill.type}
                    </span>
                  </div>

                  <h3 className="text-base font-medium text-black dark:text-white tracking-tight mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono font-normal text-black/30 dark:text-white/30">
                    Production Ready
                  </span>
                  <span className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-black dark:group-hover:bg-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}