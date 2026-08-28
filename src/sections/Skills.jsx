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
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "Node.js",
  "Figma",
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
      className="relative py-28 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden"
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
      `}</style>

      {/* Ambient background glow blobs */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.06] dark:opacity-[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] opacity-[0.06] dark:opacity-[0.10] blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <p
          className="text-[#4F46E5] dark:text-indigo-400 mb-3 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // what i know
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#12141C] dark:text-zinc-100 mb-14 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="group relative bg-white dark:bg-zinc-900/60 border border-black/[0.07] dark:border-zinc-800 rounded-2xl px-4 py-7 flex flex-col items-center gap-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-transparent dark:hover:border-transparent"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(14px)",
                transition: `opacity 0.5s ease-out ${i * 70}ms, transform 0.5s ease-out ${i * 70}ms`,
              }}
            >
              {/* Hover gradient borders */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#4F46E5,#7C3AED)_border-box] border-2 border-transparent dark:hidden" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:linear-gradient(#18181b,#18181b)_padding-box,linear-gradient(135deg,#4F46E5,#7C3AED)_border-box] border-2 border-transparent hidden dark:block" />

              {/* Icon badge */}
              <div className="relative">
                <span
                  className="pointer-events-none absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #4F46E5, #7C3AED, transparent 70%)",
                    animation: "spin-slow 3s linear infinite",
                  }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    animation: `float-badge ${3 + (i % 3) * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.6"
                  >
                    {icons[skill]}
                  </svg>
                </div>
              </div>

              <span className="relative text-sm font-semibold text-[#3F4452] dark:text-zinc-300 group-hover:text-[#12141C] dark:group-hover:text-white transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}