import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.05] dark:border-white/[0.07] bg-white dark:bg-[#0d0d0f] px-5 sm:px-8 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#e8734a] flex items-center justify-center text-white text-xs font-medium shadow-xs">
            BB
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {currentYear} <span className="font-medium text-neutral-700 dark:text-neutral-300">Biniam Beza</span>. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <a
              href="https://github.com/biniambeza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[#e8734a] transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/biniam-beza-3a7b0542b?"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[#e8734a] transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          <span className="w-px h-4 bg-black/8 dark:bg-white/8" />

          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-[#e8734a] dark:hover:text-[#e8734a] transition-colors"
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