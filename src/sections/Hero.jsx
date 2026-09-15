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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 sm:px-8 md:px-12 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Ambient background glow orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-linear-to-b from-black/[0.04] to-transparent blur-3xl dark:from-white/[0.06] dark:to-transparent rounded-full animate-ambient-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[400px] h-[400px] bg-black/[0.03] dark:bg-white/[0.04] blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-40 w-[400px] h-[400px] bg-black/[0.03] dark:bg-white/[0.04] blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div ref={revealLeft} className="scroll-reveal text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/[0.06] border border-black/[0.1] dark:border-white/[0.12] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40 dark:bg-white/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white" />
            </span>
            <span className="text-xs font-normal text-black/60 dark:text-white/60">
              Open to chat — looking for engineering roles
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black dark:text-white tracking-tight leading-[1.05]">
              Hi, I'm <span className="underline decoration-2 underline-offset-4 decoration-black/30 dark:decoration-white/30">Biniam Beza</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-normal text-black/50 dark:text-white/50 typing-cursor">
              Full-Stack Software Engineer & Computer Engineering Graduate
            </p>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-black/40 dark:text-white/40 max-w-xl leading-relaxed">
            I craft scalable web systems, clean interfaces, and resilient digital architectures with{" "}
            <span className="font-medium text-black/70 dark:text-white/70">React, Node.js, PostgreSQL, and Flutter</span>.
            Creator of the award-winning <span className="text-black dark:text-white font-medium">BahirLink</span> public safety ecosystem.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 shadow-lg shadow-black/10 dark:shadow-white/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Featured Projects
              <ArrowDown size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-black dark:text-white bg-transparent border border-black/15 dark:border-white/15 hover:border-black/40 dark:hover:border-white/40 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick tags */}
          <div className="flex items-center gap-6 pt-2 text-xs font-mono text-black/35 dark:text-white/35">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
              Addis Ababa, ET
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30" />
              Bahir Dar Univ. Alumni
            </div>
          </div>
        </div>

        {/* Right Column: Bento Stats & Profile Card */}
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
                className="group relative p-5 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] shadow-sm hover:shadow-lg hover:border-black/20 dark:hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover-tilt"
              >
                <div className="text-3xl sm:text-4xl font-medium tracking-tight text-black dark:text-white transition-colors animate-float" style={{ animationDelay: `${idx * 200}ms` }}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-black/50 dark:text-white/50 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-black/30 dark:text-white/30 mt-0.5 font-mono">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Developer Details Card */}
          <div className="p-5 sm:p-6 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-black/[0.06] dark:bg-white/[0.08] text-black dark:text-white flex items-center justify-center font-medium">
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-black dark:text-white">Biniam Beza</div>
                  <div className="text-[11px] text-black/40 dark:text-white/40 font-mono">Software Engineer</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-black/40 dark:text-white/40">
                <MapPin size={14} />
                <span>Ethiopia</span>
              </div>
            </div>

            {/* Email with copy */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06]">
              <div className="flex items-center gap-2 min-w-0">
                <Mail size={15} className="text-black/40 dark:text-white/40 shrink-0" />
                <span className="text-xs font-mono text-black/60 dark:text-white/60 truncate">
                  {email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="shrink-0 px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white dark:bg-white/[0.08] border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-black/60 dark:text-white/60 transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://github.com/biniambeza"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.05] dark:border-white/[0.07] text-xs font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-200"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/biniam-beza-3a7b0542b?"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/[0.05] dark:border-white/[0.07] text-xs font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all duration-200"
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