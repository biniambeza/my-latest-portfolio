import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const focus = ["Clean code", "Responsive UI", "Small details"];

  return (
    <section id="about" className="relative py-28 px-6 bg-white overflow-hidden">
      {/* Ambient blob, echoes the hero without repeating it exactly */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.06] blur-3xl" />

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left — copy */}
        <div className="text-left">
          <p
            className="text-[#4F46E5] mb-3 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#12141C] mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About Me
          </h2>

          <p className="text-[#4B5060] leading-relaxed mb-4">
            I'm a developer who enjoys turning ideas into clean, functional web experiences. I
            focus on writing readable code, building responsive interfaces, and paying attention
            to the small details that make a product feel polished.
          </p>
          <p className="text-[#4B5060] leading-relaxed mb-8">
            When I'm not coding, I'm usually learning something new, exploring design trends, or
            working on side projects to sharpen my skills.
          </p>

          <ul className="flex flex-wrap gap-2">
            {focus.map((item) => (
              <li
                key={item}
                className="text-xs font-semibold px-3 py-1.5 rounded-full text-[#4F46E5] bg-[#4F46E5]/[0.07] border border-[#4F46E5]/15"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — signature bio-as-code card */}
        <div className="relative">
          <div className="rounded-2xl bg-[#12141C] shadow-2xl shadow-indigo-950/20 overflow-hidden border border-white/5">
            {/* window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span
                className="ml-3 text-[11px] text-white/30"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                about.js
              </span>
            </div>

            {/* code body */}
            <pre
              className="px-5 py-6 text-[13px] leading-7 overflow-x-auto"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <code>
                <span className="text-[#7C7FE0]">const</span>{" "}
                <span className="text-white">biniam</span>{" "}
                <span className="text-white/50">=</span>{" "}
                <span className="text-white/50">{"{"}</span>
                {"\n  "}
                <span className="text-[#93C5FD]">role</span>
                <span className="text-white/50">:</span>{" "}
                <span className="text-[#F0B86E]">"Frontend Developer"</span>
                <span className="text-white/50">,</span>
                {"\n  "}
                <span className="text-[#93C5FD]">focus</span>
                <span className="text-white/50">:</span>{" "}
                <span className="text-white/50">[</span>
                <span className="text-[#F0B86E]">"clean code"</span>
                <span className="text-white/50">,</span>{" "}
                <span className="text-[#F0B86E]">"responsive UI"</span>
                <span className="text-white/50">],</span>
                {"\n  "}
                <span className="text-[#93C5FD]">currently</span>
                <span className="text-white/50">:</span>{" "}
                <span className="text-[#F0B86E]">"learning something new"</span>
                <span className="text-white/50">,</span>
                {"\n"}
                <span className="text-white/50">{"};"}</span>
              </code>
            </pre>
          </div>

          {/* subtle accent glow beneath the card */}
          <div className="pointer-events-none absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}