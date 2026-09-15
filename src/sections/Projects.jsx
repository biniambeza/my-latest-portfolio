import { projectsList } from "../data/projectsList";
import Card from "../components/Card";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 150 });

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-white dark:bg-black transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-black/60 dark:text-white/60 text-xs font-mono font-normal uppercase tracking-wider mb-3">
              <FolderGit2 size={14} />
              Portfolio Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white tracking-tight">
              Featured{" "}
              <span className="accent-underline">
                engineering projects
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-black/40 dark:text-white/40 max-w-xl">
              Production-tested web applications, full-stack systems, and mobile platforms crafted with modern architectural standards.
            </p>
          </div>

          <a
            href="https://github.com/biniambeza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-black/60 dark:text-white/60 bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] hover:border-black/25 dark:hover:border-white/25 shadow-xs hover:shadow-md transition-all self-start md:self-end"
          >
            <FaGithub size={15} />
            <span>More on GitHub</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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