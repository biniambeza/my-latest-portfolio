import { useEffect, useRef, useState } from "react";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const icons = {
  React: FaReact,
  JavaScript: FaJsSquare,
  "Tailwind CSS": SiTailwindcss,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  "Git & GitHub": FaGitAlt,
  "Node.js": FaNodeJs,
  Figma: FaFigma,
};

const skills = [
  { name: "React", type: "Interface", description: "Dynamic UI systems", color: "#61DAFB" },
  { name: "JavaScript", type: "Language", description: "Thoughtful interactions", color: "#F7DF1E" },
  { name: "Tailwind CSS", type: "Styling", description: "Fast visual language", color: "#38BDF8" },
  { name: "HTML5", type: "Structure", description: "Semantic foundations", color: "#F97316" },
  { name: "CSS3", type: "Styling", description: "Polished responsive details", color: "#3B82F6" },
  { name: "Git & GitHub", type: "Workflow", description: "Clean collaboration", color: "#F05032" },
  { name: "Node.js", type: "Runtime", description: "Reliable web services", color: "#83CD29" },
  { name: "Figma", type: "Design", description: "Ideas into direction", color: "#A259FF" },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
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
      className="relative min-h-screen scroll-mt-20 py-10 md:py-24 px-4 sm:px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      <style>{`
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes skill-glow {
          0%, 100% { transform: scale(0.92); opacity: 0.35; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
      `}</style>

      <div className="relative max-w-5xl mx-auto text-center">
        <p
          className="text-accent dark:text-indigo-400 mb-3 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // what i know
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#12141C] dark:text-zinc-100 mb-6 md:mb-8 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A toolkit for
          <span className="block text-accent dark:text-indigo-400">building better.</span>
        </h2>
        <p className="max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base text-[#4B5060] dark:text-zinc-400 leading-relaxed">
          The tools I use to turn rough ideas into fast, accessible, and carefully finished experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-zinc-900 border border-black/[0.07] dark:border-zinc-800 rounded-2xl px-2 py-3 md:px-3 md:py-5 flex flex-col items-center gap-2 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-800"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(14px)",
                transition: `opacity 0.5s ease-out ${i * 70}ms, transform 0.5s ease-out ${i * 70}ms, border-color 0.3s ease-out`,
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
                  className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: skill.color,
                    color: skill.name === "JavaScript" ? "#12141C" : "#ffffff",
                    animation: `float-badge ${3 + (i % 3) * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {(() => {
                    const Icon = icons[skill.name];
                    return <Icon size={28} aria-label={`${skill.name} icon`} />;
                  })()}
                </div>
              </div>

              <span className="relative text-sm font-bold text-[#12141C] dark:text-zinc-100 transition-colors">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-accent dark:text-indigo-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{skill.type}</span>
              <span className="hidden sm:block text-xs text-[#6B7280] dark:text-zinc-500">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}