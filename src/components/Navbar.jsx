import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import useDarkMode from "../useDarkmode";

const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0c]/85 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-xs font-semibold tracking-wider text-black dark:text-white uppercase flex items-center gap-1.5 outline-none"
          aria-label="Biniam Beza Home"
        >
          <span>BINIAM</span>
          <span className="text-neutral-400 dark:text-neutral-500">•</span>
          <span className="text-neutral-500 dark:text-neutral-400 font-normal">DEV</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 text-[11px] font-normal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-0.5 transition-colors duration-200 ${
                  isActive
                    ? "text-black dark:text-white font-medium border-b border-black dark:border-white"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Controls */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all cursor-pointer"
          >
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-medium rounded-full bg-white text-black border border-neutral-200 dark:border-transparent dark:bg-white dark:text-black hover:bg-neutral-100 dark:hover:bg-neutral-200 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Download size={11} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.1] shadow-2xl space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2 text-xs font-medium rounded-xl transition-colors ${
                  isActive
                    ? "bg-black/5 dark:bg-white/10 text-black dark:text-white font-medium"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-medium rounded-full bg-white text-black border border-neutral-200 dark:border-transparent dark:bg-white dark:text-black shadow-sm"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}