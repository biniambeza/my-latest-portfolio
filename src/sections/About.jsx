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
  const stats = [
    ["01", "Think clearly"],
    ["02", "Build carefully"],
    ["03", "Polish relentlessly"],
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-20 py-28 px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      <div className="relative max-w-6xl w-full mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <p
            className="text-accent dark:text-indigo-400 mb-4 text-sm font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#12141C] dark:text-zinc-100 mb-6 tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built with intent.
            <span className="block text-accent dark:text-indigo-400">Made to matter.</span>
          </h2>
          <div className="w-16 h-1 bg-accent mb-7" />
          <p className="max-w-xl text-[#4B5060] dark:text-zinc-400 leading-relaxed mb-4">
            I'm a developer who enjoys turning ideas into clean, functional web experiences. I
            care about readable code, responsive interfaces, and the small details that make a
            product feel considered.
          </p>
          <p className="max-w-xl text-[#4B5060] dark:text-zinc-400 leading-relaxed mb-8">
            Away from the editor, I'm usually learning something new, exploring design trends, or
            sharpening my skills through side projects.
          </p>

          <ul className="flex flex-wrap gap-2 mb-10">
            {focus.map((item) => (
              <li
                key={item}
                className="text-xs font-semibold px-3 py-1.5 rounded-full text-accent dark:text-indigo-300 bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-zinc-800"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 max-w-md border-t border-black/10 dark:border-zinc-800 pt-5">
            {stats.map(([number, label]) => (
              <div key={number} className="pr-3">
                <p className="text-accent dark:text-indigo-400 text-xs font-bold mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {number}
                </p>
                <p className="text-sm font-semibold text-[#12141C] dark:text-zinc-200">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="absolute -top-5 -right-4 md:-right-7 bg-accent text-white px-4 py-2 text-xs font-bold tracking-wide z-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            available for good work
          </div>
          <div className="rounded-2xl bg-[#12141C] dark:bg-black shadow-2xl shadow-black/40 overflow-hidden border border-[#12141C] dark:border-zinc-800">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[11px] text-white/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                about.js
              </span>
              <span className="text-[10px] text-[#27C93F] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                live
              </span>
            </div>
            <pre className="px-6 py-8 text-[13px] md:text-sm leading-8 overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <code>
                <span className="text-white/30">01 </span><span className="text-[#7C7FE0]">const</span>{" "}
                <span className="text-white">biniam</span>{" "}<span className="text-white/50">=</span>{" "}<span className="text-white/50">{"{"}</span>{"\n"}
                <span className="text-white/30">02 </span>{"  "}<span className="text-[#93C5FD]">role</span><span className="text-white/50">:</span>{" "}<span className="text-[#F0B86E]">"Frontend Developer"</span><span className="text-white/50">,</span>{"\n"}
                <span className="text-white/30">03 </span>{"  "}<span className="text-[#93C5FD]">focus</span><span className="text-white/50">:</span>{" "}<span className="text-white/50">[</span><span className="text-[#F0B86E]">"clarity"</span><span className="text-white/50">,</span>{" "}<span className="text-[#F0B86E]">"craft"</span><span className="text-white/50">],</span>{"\n"}
                <span className="text-white/30">04 </span>{"  "}<span className="text-[#93C5FD]">currently</span><span className="text-white/50">:</span>{" "}<span className="text-[#F0B86E]">"learning something new"</span><span className="text-white/50">,</span>{"\n"}
                <span className="text-white/30">05 </span>{"  "}<span className="text-[#93C5FD]">status</span><span className="text-white/50">:</span>{" "}<span className="text-[#27C93F]">"open_to_ideas"</span>{"\n"}
                <span className="text-white/30">06 </span><span className="text-white/50">{"};"}</span>
              </code>
            </pre>
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[11px] text-white/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              <span>shipping thoughtful interfaces</span>
              <span className="text-[#818CF8]">v.2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}