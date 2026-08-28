export default function Footer() {
  return (
    <footer className="bg-[#12141C] border-t border-white/[0.06] px-6 py-7">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]" />
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Biniam Beza — built with React &amp; Tailwind
          </p>
        </div>

        <a
          href="#hero"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white/80 transition-colors"
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