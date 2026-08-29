import { useEffect, useRef, useState } from "react";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";

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
};

const skills = [
  { name: "React", type: "Frontend", description: "Dynamic UI systems", color: "#61DAFB" },
  { name: "JavaScript", type: "Frontend", description: "Interactive experiences", color: "#F7DF1E" },
  { name: "HTML", type: "Frontend", description: "Semantic markup", color: "#F97316" },
  { name: "CSS", type: "Frontend", description: "Responsive styling", color: "#3B82F6" },
  { name: "Tailwind CSS", type: "Frontend", description: "Utility-first CSS", color: "#38BDF8" },
  { name: "Node.js", type: "Backend", description: "Server runtime", color: "#83CD29" },
  { name: "Express.js", type: "Backend", description: "Web framework", color: "#000000" },
  { name: "MongoDB", type: "Database", description: "NoSQL database", color: "#13AA52" },
  { name: "PostgreSQL", type: "Database", description: "Relational database", color: "#336791" },
  { name: "Git", type: "Tools", description: "Version control", color: "#F05032" },
  { name: "GitHub", type: "Tools", description: "Code collaboration", color: "#181717" },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      document.head.removeChild(link);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen scroll-mt-20 py-0 md:py-24 px-4 sm:px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      <style>{`
        @keyframes skill-reveal {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes icon-pulse {
          0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--skill-color) 0%, transparent); }
          50% { box-shadow: 0 0 0 6px color-mix(in srgb, var(--skill-color) 14%, transparent); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
          <div>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#12141C] dark:text-zinc-100 tracking-tight leading-none"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          A toolkit for
          <span className="block text-accent">building better</span>
        </h2>
          </div>
          <div className="md:max-w-sm md:text-right">
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-zinc-900 border border-black/[0.07] dark:border-zinc-800 rounded-2xl px-2 py-4 md:px-4 md:py-5 flex flex-col items-center gap-2.5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-800"
              style={{
                opacity: visible ? undefined : 0,
                animation: visible ? `skill-reveal 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${i * 75}ms both` : "none",
              }}
            >
              <span className="absolute top-4 right-4 text-[10px] font-bold text-black/25 dark:text-white/25" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <span
                  className="pointer-events-none absolute -inset-2 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    borderColor: skill.color,
                    animation: "skill-glow 2.5s ease-in-out infinite",
                  }}
                />
                <div
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: skill.color,
                    color: skill.name === "JavaScript" ? "#12141C" : "#ffffff",
                    "--skill-color": skill.color,
                    animation: "icon-pulse 3s ease-in-out infinite",
                    animationDelay: `${i * 180}ms`,
                  }}
                >
                  {(() => {
                    const Icon = icons[skill.name];
                    return <Icon size={28} aria-label={`${skill.name} icon`} />;
                  })()}
                </div>
              </div>

              <span className="relative text-sm font-bold text-[#12141C] dark:text-zinc-100 transition-colors">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-accent" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{skill.type}</span>
              <span className="hidden sm:block text-xs text-[#6B7280] dark:text-zinc-500">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}