import { useEffect, useState } from "react";

export default function Hero() {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const blink = setInterval(() => setCursorOn((v) => !v), 600);
    return () => {
      document.head.removeChild(link);
      clearInterval(blink);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#F7F8FA] dark:bg-[#09090B] text-[#12141C] dark:text-zinc-100 transition-colors duration-300"
    >
      <style>{`
        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 30px) scale(1.05); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.6s ease-out both; }
        .fade-up-2 { animation: fade-up 0.6s ease-out 0.1s both; }
        .fade-up-3 { animation: fade-up 0.6s ease-out 0.2s both; }
        .fade-up-4 { animation: fade-up 0.6s ease-out 0.3s both; }
        .fade-up-5 { animation: fade-up 0.6s ease-out 0.4s both; }
      `}</style>

      {/* Ambient gradient blobs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-104 h-104 rounded-full bg-linear-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.14] dark:opacity-[0.12] blur-3xl"
        style={{ animation: "drift-a 14s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 w-120 h-120 rounded-full bg-linear-to-br from-[#7C3AED] to-[#4F46E5] opacity-[0.12] dark:opacity-[0.10] blur-3xl"
        style={{ animation: "drift-b 16s ease-in-out infinite" }}
      />

      {/* Faint grid texture (Dark overlay in dark mode, light overlay in light mode) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(#12141C 1px, transparent 1px), linear-gradient(90deg, #12141C 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Code pill badge */}
        <p
          className="fade-up-1 text-accent dark:text-indigo-400 mb-5 text-sm px-4 py-1.5 rounded-full bg-accent/[0.07] dark:bg-indigo-500/10 border border-accent/20 dark:border-indigo-500/20"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          console.log(<span className="text-accent-purple dark:text-purple-400">"hi, my name is"</span>)
        </p>

        {/* Main Name */}
        <h1
          className="fade-up-2 text-4xl md:text-6xl font-bold text-[#12141C] dark:text-zinc-100 mb-3 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Biniam Beza
        </h1>

        {/* Subtitle */}
        <h2
          className="fade-up-3 text-xl md:text-2xl font-semibold text-[#3F4452] dark:text-zinc-300 mb-6 flex items-center gap-1"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          I build things for the web.
          <span
            className="inline-block w-0.75 h-6 md:h-7 bg-linear-to-b from-[#4F46E5] to-[#7C3AED] ml-1"
            style={{ opacity: cursorOn ? 1 : 0 }}
          />
        </h2>

        {/* Description Paragraph */}
        <p className="fade-up-4 max-w-xl text-[#6B7280] dark:text-zinc-400 mb-9 leading-relaxed">
          A passionate developer focused on creating clean, functional, and user-friendly digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="fade-up-5 flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-linear-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-[#12141C]/15 dark:border-zinc-800 dark:bg-zinc-900/50 text-[#3F4452] dark:text-zinc-300 px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:border-accent/50 hover:text-accent dark:hover:border-indigo-500/50 dark:hover:text-white hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 dark:opacity-50">
        <span
          className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] dark:text-zinc-500"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#6B7280] dark:text-zinc-500 animate-bounce"
        >
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="7" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </div>
    </section>
  );
}