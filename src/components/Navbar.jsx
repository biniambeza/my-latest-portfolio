import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import useDarkMode from "../useDarkmode";

const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
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
      const scrollPosition = window.scrollY + 200;

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
          ? "bg-white/80 dark:bg-black/85 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.1] shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg"
          aria-label="Biniam Beza - Home"
        >
          <div className="relative w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-medium text-sm shadow-md shadow-black/15 dark:shadow-white/10 transition-transform duration-300 group-hover:scale-105">
            BB
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-black/30 dark:bg-white/30 ring-2 ring-white dark:ring-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm tracking-tight text-black dark:text-white transition-colors">
              Biniam Beza
            </span>
            <span className="text-[10px] font-mono font-normal text-black/50 dark:text-white/50 tracking-wider uppercase">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.05] p-1.5 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-black dark:text-white bg-white dark:bg-white/[0.1] shadow-xs"
                    : "text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-black/50 dark:text-white/50 bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.06] dark:border-white/[0.08] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun size={17} className="transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={17} className="transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 rounded-xl shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-black/50 dark:text-white/50 bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="w-9 h-9 rounded-xl flex items-center justify-center text-black dark:text-white bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]"
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
        <div className="mx-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-black/[0.1] dark:border-white/[0.12] shadow-2xl space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-black/[0.06] dark:bg-white/[0.1] text-black dark:text-white"
                    : "text-black/50 dark:text-white/50 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
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
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-white dark:text-black bg-black dark:bg-white rounded-xl shadow-xs"
            >
              Get In Touch
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}