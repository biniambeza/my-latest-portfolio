import { useState, useEffect } from "react";
import useDarkMode from "../useDarkmode"; // Adjust path if located in src/hooks/

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
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    // Pull in a display face for the wordmark/logo
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
          ? "bg-[#e5e7eb] dark:bg-[#09090B] border-b border-black/6 dark:border-zinc-800/80 shadow-[0_4px_20px_-8px_rgba(17,24,39,0.15)]"
          : "bg-[#e5e7eb] dark:bg-[#09090B] border-b border-transparent"
      }`}
    >
      <div className="w-full px-6 py-3.5 flex items-center">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            B
          </span>
          <span
            className="text-lg font-bold tracking-tight text-[#12141C] dark:text-zinc-100 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Biniam<span className="text-accent dark:text-indigo-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex flex-1 justify-evenly items-center mx-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                className="group relative text-[13px] font-semibold uppercase tracking-wider text-[#4B5060] dark:text-zinc-400 hover:text-[#12141C] dark:hover:text-zinc-100 transition-colors py-2"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#4F46E5] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls (Theme Toggle + Resume CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              // Sun Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              // Moon Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#4F46E5] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-[#4338CA] hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile controls wrapper */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            className="relative w-9 h-9 flex items-center justify-center text-[#12141C] dark:text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d="M4 6h16"
                className={`origin-center transition-transform duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <path
                d="M4 12h16"
                className={`transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <path
                d="M4 18h16"
                className={`origin-center transition-transform duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-5 pt-1 bg-[#e5e7eb] dark:bg-[#09090B] border-t border-black/6 dark:border-zinc-800/80">
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
                className="group flex items-center gap-3 py-2.5 text-[15px] font-semibold text-[#3F4452] dark:text-zinc-300 hover:text-[#12141C] dark:hover:text-zinc-100"
              >
                <span className="h-0.5 w-3 rounded-full bg-[#4F46E5] transition-all duration-300 group-hover:w-6" />
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
              className="inline-flex items-center justify-center gap-1.5 w-full bg-[#4F46E5] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-indigo-500/25"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}