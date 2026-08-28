import { useEffect, useRef, useState } from "react";
import { Send, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const email = "your.email@example.com";
const socials = [
  { name: "Telegram", href: "https://t.me/biniambeza", icon: Send, color: "#229ED9", background: "#DCF3FE" },
  { name: "GitHub", href: "https://github.com/biniambeza", icon: FaGithub, color: "#24292F", background: "#E5E7EB" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/biniam-beza/", icon: FaLinkedinIn, color: "#0A66C2", background: "#DBEAFE" },
];

const COMMAND = "run contact.form --send";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [typed, setTyped] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return COMMAND;
    }
    return "";
  });
  const [sending, setSending] = useState(false);
  const pendingHref = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Signature moment: the terminal "types" its own launch command once on mount.
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (sending) return;
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("senderEmail")}\n\n${form.get("message")}`
    );
    pendingHref.current = `mailto:${email}?subject=${subject}&body=${body}`;
    setSending(true);
    setTimeout(() => {
      window.location.href = pendingHref.current;
      setSending(false);
    }, 550);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-20 py-16 md:py-24 px-4 sm:px-6 bg-[#E5E7EB] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      {/* subject-appropriate texture: a faint dot grid, not a gradient blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: "#9CA3AF",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 30% 40%, black, transparent)",
        }}
      />

      <div className="relative max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-center">
          {/* Left: thesis */}
          <div className="text-left">
            <p
              className="text-accent dark:text-indigo-400 mb-4 text-sm tracking-wide"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // get in touch
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#12141C] dark:text-zinc-100 mb-6 tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's make
              <span className="block text-accent dark:text-indigo-400">
                something useful.
              </span>
            </h2>
            <div className="w-16 h-1 bg-accent mb-7 rounded-full" />
            <p className="max-w-md text-[#4B5060] dark:text-zinc-400 leading-relaxed mb-8">
              Have a project in mind, a question to ask, or an idea worth
              exploring? Send a note and I will get back to you.
            </p>

            <button
              onClick={handleCopy}
              aria-live="polite"
              className="group flex items-center gap-2 text-sm text-[#6B7280] dark:text-zinc-400 hover:text-[#12141C] dark:hover:text-zinc-200 transition-colors mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] rounded-md px-1 -mx-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-accent dark:text-indigo-400">$</span>
              {email}
              <span className="inline-flex items-center gap-1 text-[#9CA3AF] dark:text-zinc-500 group-hover:text-[#4B5563] dark:group-hover:text-zinc-300">
                {copied ? (
                  <>
                    <Check size={13} className="text-[#27C93F]" /> copied
                  </>
                ) : (
                  "copy"
                )}
              </span>
            </button>

            <div className="flex items-center gap-3">
              {socials.map(({ name, href, icon: Icon, color, background }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${name}`}
                  title={name}
                  className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-zinc-800 text-[#4B5060] dark:text-zinc-400 hover:border-indigo-300 dark:hover:border-indigo-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ color, backgroundColor: background }}
                  >
                    <Icon size={17} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: terminal-styled form */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-xl lg:justify-self-end bg-[#0B0C14] border border-[#23283A] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 transition-shadow duration-500 focus-within:shadow-indigo-500/20 focus-within:border-[#3B3FA0]"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <p
                className="text-xs font-bold text-white/80"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                contact.form
              </p>
              <span
                className="text-[10px] uppercase tracking-[0.2em] text-[#27C93F] flex items-center gap-1.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                online
              </span>
            </div>

            {/* typed command line — the signature detail */}
            <div
              className="px-5 sm:px-6 pt-4 text-[13px] text-[#7DD3FC] min-h-5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-white/30">$ </span>
              {typed}
              <span className="inline-block w-1.75 h-3.25 bg-[#7DD3FC] ml-0.5 align-middle animate-[blink_1s_steps(1)_infinite]" />
            </div>

            <div className="p-5 sm:p-6 pt-4">
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <label className="text-left">
                  <span className="block text-xs font-bold text-white/60 mb-1.5">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-colors"
                  />
                </label>
                <label className="text-left">
                  <span className="block text-xs font-bold text-white/60 mb-1.5">
                    Email
                  </span>
                  <input
                    required
                    name="senderEmail"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-colors"
                  />
                </label>
              </div>
              <label className="block text-left mb-4">
                <span className="block text-xs font-bold text-white/60 mb-1.5">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell me a little about your idea..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-400 focus:bg-white/10 transition-colors"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="group w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#6366F1] disabled:opacity-70 disabled:cursor-wait text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {sending ? "Opening your email app…" : "Send message"}
                {!sending && (
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </button>
              <p
                className="mt-3 text-center text-[10px] text-white/30"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                opens your email app
              </p>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}