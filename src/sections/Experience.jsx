import { useEffect } from "react";

const experience = [
  {
    period: "2024 — Present",
    role: "Frontend Developer",
    company: "Independent Projects",
    description:
      "Designing and building responsive interfaces with React, JavaScript, and Tailwind CSS. Turning rough ideas into clear, useful digital products.",
    tools: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    period: "2023 — 2024",
    role: "Web Developer",
    company: "Freelance & Collaborations",
    description:
      "Created accessible landing pages and practical web tools, working from early concepts through polished, responsive implementation.",
    tools: ["HTML5", "CSS3", "Figma"],
  },
  {
    period: "2022 — 2023",
    role: "Developer in Progress",
    company: "Learning by Building",
    description:
      "Built a strong foundation in the web platform through focused study, small experiments, and projects that made every new concept tangible.",
    tools: ["Git", "Node.js", "UI Design"],
  },
];

export default function Experience() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <section
      id="experience"
      className="relative min-h-screen scroll-mt-20 py-16 md:py-24 px-4 sm:px-6 bg-[#e5e7eb] dark:bg-[#050505] transition-colors duration-300 flex items-center"
    >
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <div>
            <p
              className="text-[#1597ff] mb-3 text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // experience
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#12141C] dark:text-white tracking-tight leading-none"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              The work so far.
            </h2>
          </div>
          <p className="max-w-sm md:text-right text-[#6B7280] dark:text-[#9aa1ad] leading-relaxed">
            A timeline of the places, projects, and practice that shaped how I build for the web.
          </p>
        </div>

        <div className="relative ml-2 md:ml-0">
          <div className="absolute left-0 md:left-[8.5rem] top-2 bottom-2 w-px bg-black/15 dark:bg-[#303238]" />
          <div className="space-y-6 md:space-y-8">
            {experience.map((item, index) => (
              <article key={item.period} className="relative grid md:grid-cols-[8.5rem_1fr] gap-6 md:gap-10">
                <div className="hidden md:block text-right pt-5">
                  <p className="text-xs font-bold text-[#1597ff]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.period}
                  </p>
                </div>
                <div className="relative pl-8 md:pl-10">
                  <span className="absolute left-[-5px] md:left-[-5px] top-5 w-2.5 h-2.5 rounded-full bg-[#1597ff] ring-4 ring-[#e5e7eb] dark:ring-[#050505]" />
                  <div className="bg-white dark:bg-[#202124] border border-black/10 dark:border-[#303238] p-5 md:p-6 transition-all duration-300 hover:border-[#1597ff] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#12141C] dark:text-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                        {item.role}
                      </h3>
                      <span className="md:hidden text-[10px] font-bold text-[#1597ff]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-[#1597ff] mb-4">{item.company}</p>
                    <p className="max-w-2xl text-sm md:text-base text-[#6B7280] dark:text-[#a7adb8] leading-relaxed mb-5">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span key={tool} className="bg-[#e5e7eb] dark:bg-[#303238] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4B5060] dark:text-[#c4c8d0]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="absolute right-3 top-5 text-xs text-black/20 dark:text-white/20" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
