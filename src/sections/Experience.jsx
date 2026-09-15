import { Briefcase, Code, Rocket, Calendar } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

const experiences = [
  {
    period: "2024 — 2025",
    role: "Lead Full-Stack Developer",
    company: "BahirLink (Final Year Capstone Project)",
    description:
      "Spearheaded the development and architecture of a centralized emergency response platform. Designed PostgreSQL relational schemas, built Node.js microservices, and connected React web dashboard and Flutter mobile apps. Awarded 1st place for technical complexity.",
    tools: ["React", "Flutter", "Node.js", "PostgreSQL", "REST APIs"],
    icon: Rocket,
  },
  {
    period: "Apr 2025 — Aug 2025",
    role: "Web Developer Intern",
    company: "Ethio-Afric Tech Solutions",
    description:
      "Engineered responsive, accessible frontend features with React.js. Collaborated on backend RESTful endpoints, database schemas with MongoDB and PostgreSQL, and integrated third-party client APIs.",
    tools: ["React", "Node.js", "MongoDB", "PostgreSQL", "Git"],
    icon: Briefcase,
  },
  {
    period: "May 2022 — June 2026",
    role: "B.Sc. in Computer Engineering",
    company: "Bahir Dar University",
    description:
      "Completing final-year bachelor's degree with emphasis on software engineering, computer networks, database systems, and embedded computing. Actively built full-stack solutions.",
    tools: ["Computer Architecture", "Algorithms", "Databases", "Software Engineering"],
    icon: Code,
  },
];

export default function Experience() {
  const headerRef = useScrollReveal();
  const timelineRef = useScrollReveal({ stagger: 150 });

  return (
    <section
      id="experience"
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-[9px] font-mono uppercase tracking-wider mb-2">
            <Briefcase size={11} />
            Career & Education
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white tracking-tight">
            Work experience &{" "}
            <span className="accent-underline">
              journey
            </span>
          </h2>
          <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
            A track record of shipping impactful software, continuous learning, and craftsmanship.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="scroll-reveal relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-linear-to-b before:from-black/20 before:via-black/10 before:to-transparent dark:before:from-white/20 dark:before:via-white/10 dark:before:to-transparent">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} data-reveal-child className="group relative">
                {/* Timeline Node */}
                <div className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full flex items-center justify-center bg-black dark:bg-white text-white dark:text-black shadow-xs ring-2 ring-[#fafafa] dark:ring-[#0a0a0c]">
                  <Icon size={10} />
                </div>

                {/* Card */}
                <div className="p-4 sm:p-4.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800/80 shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-neutral-600 dark:text-neutral-400 bg-black/[0.04] dark:bg-white/[0.06]">
                      <Calendar size={10} />
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-medium text-black dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-2.5">
                    {exp.company}
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400"
                      >
                        • {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
