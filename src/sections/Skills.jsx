import { useEffect, useRef, useState } from "react";

const icons = {
  React: (
    <>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" />
    </>
  ),
  JavaScript: (
    <path
      d="M9 4c-1.7 0-2.5.9-2.5 2.4v2.3c0 1.3-.5 1.8-1.5 1.8v3c1 0 1.5.5 1.5 1.8v2.3C6.5 19.1 7.3 20 9 20M15 4c1.7 0 2.5.9 2.5 2.4v2.3c0 1.3.5 1.8 1.5 1.8v3c-1 0-1.5.5-1.5 1.8v2.3c0 1.5-.8 2.4-2.5 2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Tailwind CSS": (
    <path
      d="M6 12c.8-3 2.5-4.5 5-4.5 2.5 0 4 1.5 5 3-1 0-2-.5-3-.5-2 0-3 1-3.5 2.5m-3.5-.5c.8 3 2.5 4.5 5 4.5 2.5 0 4-1.5 5-3-1 0-2 .5-3 .5-2 0-3-1-3.5-2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  HTML5: (
    <path
      d="M9 8l-3 4 3 4M15 8l3 4-3 4M13 6l-2 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  CSS3: (
    <path
      d="M5 4l1.2 14L12 20l5.8-2L19 4H5zM8 8h8l-.3 3H8.5M8.5 11l.3 3.2L12 15l3.2-.8.3-2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Git & GitHub": (
    <>
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 8v8M9 6h4a4 4 0 014 4v0" strokeLinecap="round" />
    </>
  ),
  "Node.js": (
    <path
      d="M12 3l7 4v10l-7 4-7-4V7l7-4z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Figma: (
    <>
      <path d="M9 3h4a3 3 0 010 6H9V3z" />
      <path d="M9 9h4a3 3 0 010 6H9V9z" />
      <path d="M9 15a3 3 0 106 0v-.5a3 3 0 00-3-3" />
    </>
  ),
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
      className="relative min-h-screen scroll-mt-20 py-28 px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
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
          className="text-3xl md:text-4xl font-bold text-[#12141C] dark:text-zinc-100 mb-14 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A toolkit for
          <span className="block text-accent dark:text-indigo-400">building better.</span>
        </h2>
        <p className="max-w-xl mx-auto -mt-8 mb-12 text-[#4B5060] dark:text-zinc-400 leading-relaxed">
          The tools I use to turn rough ideas into fast, accessible, and carefully finished experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-zinc-900 border border-black/[0.07] dark:border-zinc-800 rounded-2xl px-4 py-6 flex flex-col items-center gap-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-800"
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
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    backgroundColor: skill.color,
                    color: skill.name === "JavaScript" ? "#12141C" : "#ffffff",
                    animation: `float-badge ${3 + (i % 3) * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    {icons[skill.name]}
                  </svg>
                </div>
              </div>

              <span className="relative text-sm font-bold text-[#12141C] dark:text-zinc-100 transition-colors">{skill.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-accent dark:text-indigo-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{skill.type}</span>
              <span className="text-xs text-[#6B7280] dark:text-zinc-500">{skill.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}