import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Mail, ArrowDown, ArrowUpRight, Check, Code2 } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "biniambeza544@gmail.com";
  const revealLeft = useScrollReveal({ threshold: 0.1 });
  const revealRight = useScrollReveal({ threshold: 0.1, stagger: 120 });

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement("input");
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#faf8f6] dark:bg-[#0d0d0f] transition-colors duration-300"
    >
      {/* Ambient background glow orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-linear-to-b from-[#e8734a]/12 via-amber-400/8 to-transparent blur-3xl dark:from-[#e8734a]/15 dark:via-orange-500/8 rounded-full animate-ambient-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[400px] h-[400px] bg-amber-300/8 dark:bg-amber-500/8 blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-40 w-[400px] h-[400px] bg-orange-400/8 dark:bg-orange-600/8 blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Subtle background tech grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <div ref={revealLeft} className="scroll-reveal text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#141418] border border-black/[0.07] dark:border-white/[0.09] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-normal text-neutral-600 dark:text-neutral-400">
              Open to chat — looking for engineering roles
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 dark:text-white tracking-tight leading-[1.05]">
              Hi, I'm <span className="bg-linear-to-r from-[#e8734a] via-[#f5a623] to-[#e07c4a] bg-clip-text text-transparent">Biniam Beza</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-normal text-neutral-600 dark:text-neutral-400 typing-cursor">
              Full-Stack Software Engineer & Computer Engineering Graduate
            </p>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
            I craft scalable web systems, clean interfaces, and resilient digital architectures with{" "}
            <span className="font-medium text-neutral-700 dark:text-neutral-300">React, Node.js, PostgreSQL, and Flutter</span>.
            Creator of the award-winning <span className="text-[#e8734a] font-medium">BahirLink</span> public safety ecosystem.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-[#e8734a] hover:bg-[#d4623c] shadow-lg shadow-[#e8734a]/20 hover:shadow-xl hover:shadow-[#e8734a]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Featured Projects
              <ArrowDown size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-[#1a1a20] border border-black/8 dark:border-white/8 hover:border-[#e8734a] dark:hover:border-[#e8734a] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick social tags */}
          <div className="flex items-center gap-6 pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8734a]" />
              Addis Ababa, ET
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8734a]" />
              Bahir Dar Univ. Alumni
            </div>
          </div>
        </div>

        {/* Right Column: Bento Stats & Interactive Profile Card */}
        <div ref={revealRight} className="scroll-reveal space-y-4">
          {/* Stats Bento Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {[
              { value: "1st", label: "Awarded Place", desc: "Best Project of Year" },
              { value: "4+", label: "Years Coding", desc: "Computer Engineering" },
              { value: "11+", label: "Core Technologies", desc: "React, Node, Flutter, SQL" },
              { value: "100%", label: "Committed", desc: "To clean code & UX" },
            ].map((stat, idx) => (
              <div
                key={idx}
                data-reveal-child
                className="group relative p-5 rounded-[18px] bg-white dark:bg-[#141418] border border-black/[0.06] dark:border-white/[0.07] shadow-sm hover:shadow-lg hover:border-[#e8734a]/40 dark:hover:border-[#e8734a]/50 transition-all duration-300 hover:-translate-y-1 hover-tilt"
              >
                <div className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-[#e8734a] transition-colors animate-float" style={{ animationDelay: `${idx * 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 font-mono">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Connected Developer Details Card */}
          <div className="p-5 sm:p-6 rounded-[18px] bg-white dark:bg-[#141418] border border-black/[0.06] dark:border-white/[0.07] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] dark:border-white/[0.05]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e8734a]/10 text-[#e8734a] flex items-center justify-center font-medium">
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-neutral-900 dark:text-white">Biniam Beza</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">Software Engineer</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <MapPin size={14} className="text-[#e8734a]" />
                <span>Ethiopia</span>
              </div>
            </div>

            {/* Email with copy button */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05]">
              <div className="flex items-center gap-2 min-w-0">
                <Mail size={15} className="text-[#e8734a] shrink-0" />
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 truncate">
                  {email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white dark:bg-white/[0.06] border border-black/8 dark:border-white/8 hover:border-[#e8734a] text-neutral-600 dark:text-neutral-400 transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            {/* Social Connect Links */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://github.com/biniambeza"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] hover:bg-[#e8734a]/10 hover:text-[#e8734a] border border-black/[0.04] dark:border-white/[0.05] text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-all duration-200"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/biniam-beza-3a7b0542b?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] hover:bg-[#e8734a]/10 hover:text-[#e8734a] border border-black/[0.04] dark:border-white/[0.05] text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-all duration-200"
              >
                <FaLinkedinIn size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}