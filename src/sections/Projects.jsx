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
      className="relative py-28 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glow blobs */}
      <div className="pointer-events-none absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-linear-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.06] dark:opacity-[0.10] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-linear-to-br from-[#7C3AED] to-[#4F46E5] opacity-[0.06] dark:opacity-[0.10] blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-accent dark:text-indigo-400 mb-3 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // my work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#12141C] dark:text-zinc-100 mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Recent Projects
          </h2>
          <p className="text-[#6B7280] dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            A few things I've built recently. Each one taught me something new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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