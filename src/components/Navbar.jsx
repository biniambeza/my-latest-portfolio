import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Pull in a display face for the wordmark/logo so it doesn't read as system-default
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_20px_-8px_rgba(17,24,39,0.15)]"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            B
          </span>
          <span
            className="text-lg font-bold tracking-tight text-[#12141C]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Biniam<span className="text-[#4F46E5]">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className="group relative text-[13px] font-semibold uppercase tracking-wider text-[#4B5060] hover:text-[#12141C] transition-colors py-2"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center text-[#12141C]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M4 6h16"
              className={`origin-center transition-transform duration-300 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <path
              d="M4 12h16"
              className={`transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <path
              d="M4 18h16"
              className={`origin-center transition-transform duration-300 ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-5 pt-1 bg-white/90 backdrop-blur-md border-t border-black/[0.06]">
          {navLinks.map((link, i) => (
            <li
              key={link.name}
              className="transition-all duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 40}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-8px)",
              }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 py-2.5 text-[15px] font-semibold text-[#3F4452]"
              >
                <span className="h-[2px] w-3 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300 group-hover:w-6" />
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-indigo-500/25"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}