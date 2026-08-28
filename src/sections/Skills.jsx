import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.25 }
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
      className="relative py-28 px-6 max-w-4xl mx-auto text-center bg-white overflow-hidden"
    >
      {/* Faint grid, ties back to the hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#12141C 1px, transparent 1px), linear-gradient(90deg, #12141C 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative">
        <p
          className="text-[#4F46E5] mb-3 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // what i know
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#12141C] mb-12 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="group relative bg-white border border-black/[0.08] text-[#3F4452] font-semibold px-5 py-3 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 hover:border-transparent hover:text-[#12141C]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.5s ease-out ${i * 60}ms, transform 0.5s ease-out ${i * 60}ms`,
              }}
            >
              {/* gradient ring, appears on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#4F46E5,#7C3AED)_border-box] border-2 border-transparent" />
              <span className="relative flex items-center gap-1.5">
                <span
                  className="text-[#4F46E5]/50 group-hover:text-[#4F46E5] transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  &gt;
                </span>
                {skill}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}