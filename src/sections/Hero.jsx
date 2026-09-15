import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function Hero() {
  const containerRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 text-center bg-white dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-black/[0.02] dark:bg-white/[0.02] blur-[80px] rounded-full"
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="scroll-reveal relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >

        {/* Subtitle / Role kicker */}
        <p className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase mb-2.5">
          FULL-STACK & AI ENGINEER • 0-TO-1 BUILDER
        </p>

        {/* Scaled-down compact Headline */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-black dark:text-white leading-[1.2] max-w-lg">
          Building Scalable Web &amp; Intelligent Systems.
        </h1>

        {/* Concise Description Bio with small font */}
        <p className="mt-3 text-[11px] sm:text-[12px] text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed font-normal">
          Product-minded engineer with a B.Sc. in Computer Engineering and a strong algorithmic foundation. Building high-performance SaaS platforms, robust APIs, and intelligent digital systems with <span className="text-black dark:text-white font-medium">React</span>, <span className="text-black dark:text-white font-medium">Node.js</span>, <span className="text-black dark:text-white font-medium">PostgreSQL</span>, and <span className="text-black dark:text-white font-medium">Flutter</span>.
        </p>

        {/* Very Small, Compact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowRight size={11} />
          </a>

          {/* Secondary CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Featured work
          </a>

          {/* CV / Resume CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Resume / CV</span>
            <ArrowUpRight size={10} />
          </a>
        </div>

        {/* Very Small Social Icons */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <a
            href="https://github.com/biniambeza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
          >
            <FaGithub size={11} />
          </a>

          <a
            href="https://linkedin.com/in/biniam-beza-14a511306"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
          >
            <FaLinkedinIn size={11} />
          </a>

          <a
            href="https://t.me/bini_bz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
          >
            <FaTelegramPlane size={11} />
          </a>

          <a
            href="mailto:biniambeza544@gmail.com"
            aria-label="Email Biniam"
            className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110"
          >
            <Mail size={11} />
          </a>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-1 text-[8px] font-mono tracking-[0.25em] text-neutral-400 dark:text-neutral-600 uppercase">
          <span>SCROLL</span>
        </div>
      </div>
    </section>
  );
}