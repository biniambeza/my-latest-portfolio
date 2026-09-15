import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] dark:border-neutral-800/80 bg-white dark:bg-[#0a0a0c] px-4 sm:px-6 py-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider text-black dark:text-white uppercase text-[11px]">
            BINIAM <span className="text-neutral-400">•</span> DEV
          </span>
          <span className="text-neutral-400 dark:text-neutral-500">|</span>
          <p className="text-neutral-500 dark:text-neutral-400">
            © {currentYear} Biniam Beza.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 text-neutral-400 dark:text-neutral-500">
            <a
              href="https://github.com/biniambeza"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={13} />
            </a>
            <a
              href="https://www.linkedin.com/in/biniam-beza-3a7b0542b?"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedinIn size={13} />
            </a>
          </div>

          <span className="w-px h-3 bg-black/10 dark:bg-white/10" />

          <a
            href="#hero"
            className="group inline-flex items-center gap-1 text-[10px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp
              size={11}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}