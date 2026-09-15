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

      // Determine active section for nav highlight
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
          ? "bg-white/80 dark:bg-[#0d0d0f]/85 backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#e8734a] rounded-lg"
          aria-label="Biniam Beza - Home"
        >
          <div className="relative w-9 h-9 rounded-xl bg-linear-to-br from-[#e8734a] to-[#d4623c] flex items-center justify-center text-white font-medium text-sm shadow-md shadow-[#e8734a]/20 transition-transform duration-300 group-hover:scale-105">
            BB
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-[#0d0d0f]" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm tracking-tight text-neutral-900 dark:text-white transition-colors">
              Biniam Beza
            </span>
            <span className="text-[10px] font-mono font-normal text-[#e8734a] tracking-wider uppercase">
              Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/[0.02] dark:bg-white/[0.03] p-1.5 rounded-full border border-black/[0.04] dark:border-white/[0.05]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#e8734a] dark:text-white bg-white dark:bg-white/[0.08] shadow-xs"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Controls (Theme Toggle & Contact CTA) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-500 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.1] border border-black/[0.05] dark:border-white/[0.07] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon size={17} className="text-neutral-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Quick Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#e8734a] hover:bg-[#d4623c] rounded-xl shadow-sm shadow-[#e8734a]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Talk
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile controls wrapper */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-500 dark:text-neutral-400 bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.07]"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-neutral-600" />
            )}
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.07]"
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
        <div className="mx-4 p-4 rounded-2xl bg-white/95 dark:bg-[#141418]/95 backdrop-blur-xl border border-black/[0.07] dark:border-white/[0.09] shadow-2xl space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#e8734a]/10 text-[#e8734a] dark:bg-[#e8734a]/15"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#e8734a]" />}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-white bg-[#e8734a] rounded-xl shadow-xs"
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