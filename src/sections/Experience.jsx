import { Briefcase, Code, Rocket, Calendar } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

const experiences = [
  {
    period: "2024 — 2025",
    role: "Lead Full-Stack Developer",
    company: "BahirLink (Final Year Capstone Project)",
    description:
      "Spearheaded the development and end-to-end architecture of a centralized emergency response and municipal public safety platform. Designed PostgreSQL relational schemas, built high-throughput Node.js microservices, and connected React web dashboard and Flutter mobile applications. Awarded 1st place for technical complexity and real-world impact.",
    tools: ["React", "Flutter", "Node.js", "PostgreSQL", "REST APIs"],
    icon: Rocket,
  },
  {
    period: "Apr 2025 — Aug 2025",
    role: "Web Developer Intern",
    company: "Ethio-Afric Tech Solutions",
    description:
      "Engineered responsive, accessible frontend features with React.js and modern state management. Collaborated closely with senior software engineers on backend RESTful endpoints, database schemas with MongoDB and PostgreSQL, and integrated third-party client APIs.",
    tools: ["React", "Node.js", "MongoDB", "PostgreSQL", "Git"],
    icon: Briefcase,
  },
  {
    period: "May 2022 — June 2026",
    role: "B.Sc. in Computer Engineering",
    company: "Bahir Dar University",
    description:
      "Completing final-year bachelor's degree with emphasis on software engineering, computer networks, database systems, and embedded computing. Actively built full-stack solutions and participated in competitive university hackathons.",
    tools: ["Computer Architecture", "Algorithms", "Databases", "Software Engineering"],
    icon: Code,
  },
];

export default function Experience() {
  const headerRef = useScrollReveal();
  const timelineRef = useScrollReveal({ stagger: 200 });

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-black/60 dark:text-white/60 text-xs font-mono font-normal uppercase tracking-wider mb-3">
            <Briefcase size={14} />
            Career & Education
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white tracking-tight">
            Work experience &{" "}
            <span className="accent-underline">
              journey
            </span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-black/40 dark:text-white/40 max-w-lg mx-auto">
            A track record of shipping impactful software, continuous learning, and software craftsmanship.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="scroll-reveal relative pl-6 sm:pl-8 md:pl-10 space-y-10 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-linear-to-b before:from-black/30 before:via-black/10 before:to-transparent dark:before:from-white/30 dark:before:via-white/10 dark:before:to-transparent">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} data-reveal-child className="group relative">
                {/* Timeline Node */}
                <div className="absolute -left-6 sm:-left-8 md:-left-10 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-black dark:bg-white text-white dark:text-black shadow-md ring-4 ring-[#fafafa] dark:ring-[#0a0a0a] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={14} />
                </div>

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.09] shadow-xs hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/60 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-normal text-black/60 dark:text-white/60 bg-black/[0.04] dark:bg-white/[0.07]">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono font-normal text-black/25 dark:text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-normal text-black/50 dark:text-white/50 mb-4">
                    {exp.company}
                  </div>

                  <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono font-normal px-2.5 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-black/50 dark:text-white/50"
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
