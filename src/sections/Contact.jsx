import { useEffect, useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#12141C] overflow-hidden text-center"
    >
      {/* Ambient gradient glow, echoes the light-section blobs but brighter against dark */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.18] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <p
          className="text-[#93C5FD] mb-3 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // get in touch
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let's Talk
        </h2>
        <p className="text-white/60 mb-10 leading-relaxed max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <div className="flex flex-col items-center gap-5">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            Say Hello
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Terminal-style email row, click to copy */}
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-[#4F46E5]">$</span>
            {email}
            <span className="text-white/30 group-hover:text-white/60 transition-colors">
              {copied ? "copied ✓" : "copy"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}