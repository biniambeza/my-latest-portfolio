import { useEffect, useRef, useState } from "react";
import { Briefcase, Code, Rocket } from "lucide-react";

const experience = [
  {
    period: "2025 — Present",
    role: "Student & Developer",
    company: "Bahir Dar University",
    description:
      "Computer Engineering student (CGPA 3.13) completing final year. Developing full-stack applications with focus on real-world problem solving, system architecture, and production-ready solutions.",
    tools: ["React", "Node.js", "PostgreSQL", "Flutter"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    period: "Apr 2025 — Aug 2025",
    role: "Web Developer Intern",
    company: "Ethio-Afric Tech Solutions",
    description:
      "Developed responsive, user-friendly web applications using React.js. Implemented frontend interfaces and assisted in backend development with RESTful APIs. Worked with MongoDB and PostgreSQL databases. Collaborated with senior engineers on production-ready solutions.",
    tools: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Developer",
    company: "Final Year Project - BahirLink",
    description:
      "Led development of a centralized emergency and public service platform. Designed system architecture, database systems, and integrated web and mobile applications. Project awarded 1st place for technical complexity and real-world impact.",
    tools: ["React", "Flutter", "Node.js", "PostgreSQL"],
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen scroll-mt-20 py-16 md:py-24 px-4 sm:px-6 bg-[#e5e7eb] dark:bg-[#050505] transition-colors duration-300 flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes timeline-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(21, 151, 255, 0.3); }
          50% { box-shadow: 0 0 30px rgba(21, 151, 255, 0.5); }
        }
        .timeline-item {
          animation: timeline-reveal 0.6s ease-out forwards;
        }
        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
      `}</style>

      <div className="max-w-5xl w-full mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-16 md:mb-20">
          <div>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#12141C] dark:text-white tracking-tight leading-none mb-4"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              The work so far.
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#1597ff] to-cyan-500 rounded-full" />
          </div>
          <p className="max-w-sm md:text-right text-[#6B7280] dark:text-[#9aa1ad] leading-relaxed">
            A timeline of the places, projects, and practice that shaped how I build for the web.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1597ff] via-[#1597ff] to-transparent dark:from-indigo-500 dark:via-indigo-500 dark:to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experience.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div key={item.period} className="timeline-item relative">
                  {/* Desktop Layout */}
                  <div className={`hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center`}>
                    {/* Left Content (alternating) */}
                    <div className={isLeft ? "text-right" : "opacity-0 pointer-events-none"}>
                      <p className="text-xs font-bold text-[#1597ff] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.period}
                      </p>
                    </div>

                    {/* Center Dot */}
                    <div className="flex justify-center">
                      <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ring-4 ring-[#e5e7eb] dark:ring-[#050505] hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Right Content (alternating) */}
                    <div className={!isLeft ? "text-left" : "opacity-0 pointer-events-none"}>
                      <p className="text-xs font-bold text-[#1597ff] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.period}
                      </p>
                    </div>
                  </div>

                  {/* Card (below dot on desktop, below content on mobile) */}
                  <div className={`md:grid gap-8 ${isLeft ? "md:grid-cols-[1fr_auto_1fr]" : "md:grid-cols-[1fr_auto_1fr]"}`}>
                    {/* Mobile Period */}
                    <div className="md:hidden mb-2">
                      <p className="text-[10px] font-bold text-[#1597ff] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.period}
                      </p>
                    </div>

                    <div className={`${isLeft ? "md:col-start-1 md:col-end-2" : "md:col-start-3 md:col-end-4"} md:row-start-2`}>
                      <div className="group relative pl-12 md:pl-0">
                        {/* Mobile dot */}
                        <div className="md:hidden absolute -left-6 top-3 w-3 h-3 rounded-full bg-[#1597ff] ring-2 ring-[#e5e7eb] dark:ring-[#050505]" />

                        <div className="bg-white dark:bg-[#0F1117] border border-[#1597ff]/20 dark:border-indigo-500/20 rounded-2xl p-6 md:p-7 backdrop-blur-sm transition-all duration-500 hover:border-[#1597ff]/60 dark:hover:border-indigo-400/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1597ff]/20 dark:hover:shadow-indigo-500/20 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#f8f9fa] dark:group-hover:from-[#0F1117] dark:group-hover:to-[#161b22]">
                          
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-[#12141C] dark:text-white tracking-tight group-hover:text-[#1597ff] dark:group-hover:text-indigo-400 transition-colors" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                {item.role}
                              </h3>
                              <p className="text-sm font-semibold text-[#1597ff] dark:text-indigo-400 mt-1">{item.company}</p>
                            </div>
                            <span className="text-3xl opacity-10 group-hover:opacity-20 transition-opacity">{String(index + 1).padStart(2, "0")}</span>
                          </div>

                          <p className="text-sm md:text-base text-[#6B7280] dark:text-[#8b949e] leading-relaxed mb-5 group-hover:text-[#4B5060] dark:group-hover:text-[#c9d1d9] transition-colors">
                            {item.description}
                          </p>

                          {/* Tools/Skills */}
                          <div className="flex flex-wrap gap-2">
                            {item.tools.map((tool) => (
                              <span
                                key={tool}
                                className="inline-flex items-center px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#1597ff] dark:text-indigo-400 bg-[#1597ff]/10 dark:bg-indigo-500/10 border border-[#1597ff]/30 dark:border-indigo-500/30 rounded-lg hover:bg-[#1597ff]/20 dark:hover:bg-indigo-500/20 transition-colors"
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                              >
                                • {tool}
                              </span>
                            ))}
                          </div>

                          {/* Corner Accent */}
                          <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-[#1597ff] to-transparent rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 pt-8 border-t border-black/10 dark:border-[#303238]">
          <p className="text-center text-sm text-[#6B7280] dark:text-[#8b949e]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            More experiences coming soon <span className="text-[#1597ff]">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
