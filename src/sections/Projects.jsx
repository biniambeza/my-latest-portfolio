import { useEffect } from "react";
import { projectsList } from "../data/projectsList";
import Card from "../components/Card";

export default function Projects() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <section 
      id="projects" 
      className="relative min-h-screen scroll-mt-20 py-28 px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p
              className="text-accent dark:text-indigo-400 mb-3 text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // selected work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#12141C] dark:text-zinc-100 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Things I've built.
            </h2>
          </div>
          <div className="md:max-w-sm md:text-right">
            <p className="text-[#6B7280] dark:text-zinc-400 leading-relaxed">
              A small collection of products, experiments, and lessons turned into interfaces.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent dark:text-indigo-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {String(projectsList.length).padStart(2, "0")} projects / and counting
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projectsList.map((project, i) => (
            <div
              key={project.id}
              style={{ animationDelay: `${i * 70}ms` }}
              className="animate-[fade-up_0.5s_ease-out_both]"
            >
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}