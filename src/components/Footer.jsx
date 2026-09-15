import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-black px-5 sm:px-8 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-xs font-medium shadow-xs">
            BB
          </div>
          <p className="text-xs text-black/40 dark:text-white/40">
            © {currentYear} <span className="font-medium text-black/70 dark:text-white/70">Biniam Beza</span>. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-black/40 dark:text-white/40">
            <a
              href="https://github.com/biniambeza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/biniam-beza-3a7b0542b?"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          <span className="w-px h-4 bg-black/10 dark:bg-white/10" />

          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp
              size={13}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}