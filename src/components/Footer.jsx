export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#e5e7eb] px-6 py-7 transition-colors duration-300 dark:border-zinc-800 dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-[#4F46E5]" />
          <p
            className="text-[#6B7280] dark:text-zinc-400 text-sm transition-colors duration-300"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Biniam Beza - built with React &amp; Tailwind
          </p>
        </div>

        <a
          href="#hero"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#4F46E5] dark:text-zinc-400 dark:hover:text-indigo-300 transition-colors"
        >
          Back to top
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}