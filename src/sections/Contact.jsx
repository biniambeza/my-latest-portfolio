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
      className="relative min-h-screen scroll-mt-20 py-28 px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden text-center flex items-center justify-center"
    >
      <div className="relative max-w-2xl mx-auto">
        <p
          className="text-accent dark:text-indigo-400 mb-3 text-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // get in touch
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-[#12141C] dark:text-zinc-100 mb-5 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let's Talk
        </h2>
        <p className="text-[#6B7280] dark:text-zinc-400 mb-10 leading-relaxed max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <div className="flex flex-col items-center gap-5">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-[#4338CA] hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Say Hello
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Terminal-style email row */}
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-2 text-sm text-[#6B7280] dark:text-zinc-400 hover:text-[#12141C] dark:hover:text-zinc-200 transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-accent dark:text-indigo-400">$</span>
            {email}
            <span className="text-[#9CA3AF] dark:text-zinc-500 group-hover:text-[#4B5563] dark:group-hover:text-zinc-300 transition-colors">
              {copied ? "copied ✓" : "copy"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}