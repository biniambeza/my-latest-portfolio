import { projectsList } from "../data/projectsList";
import Card from "../components/Card";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 100 });

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-[9px] font-mono uppercase tracking-wider mb-2">
              <FolderGit2 size={11} />
              Portfolio Work
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white tracking-tight">
              Featured{" "}
              <span className="accent-underline">
                engineering projects
              </span>
            </h2>
            <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 max-w-lg">
              Production-tested web applications, full-stack systems, and mobile platforms crafted with modern standards.
            </p>
          </div>

          <a
            href="https://github.com/biniambeza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-900/60 border border-black/[0.08] dark:border-neutral-800 hover:border-black/25 dark:hover:border-neutral-600 shadow-xs transition-all self-start md:self-end"
          >
            <FaGithub size={12} />
            <span>More on GitHub</span>
            <ArrowUpRight size={10} />
          </a>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsList.map((project) => (
            <div key={project.id} data-reveal-child className="h-full">
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}