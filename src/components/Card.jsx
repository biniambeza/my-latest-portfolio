export default function Card({ project }) {
  const { title, description, image, tags, live, demo, github, id } = project;

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-black/10 dark:border-zinc-800 overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10 dark:hover:shadow-black/40 dark:hover:border-indigo-800">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-[#12141C] dark:bg-zinc-950">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent">
            <span
              className="text-white/90 text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 bg-[#12141C]/80 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            project {String(id).padStart(2, "0")}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#27C93F] shadow-[0_0_0_3px_rgba(39,201,63,0.18)]" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-lg font-bold text-[#12141C] dark:text-zinc-100 tracking-tight transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>
          <span className="text-indigo-200 dark:text-indigo-900 text-2xl leading-none" aria-hidden="true">↗</span>
        </div>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 leading-relaxed mb-4 flex-1 transition-colors">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-accent dark:text-indigo-400 bg-accent/[0.07] dark:bg-indigo-500/10 border border-accent/15 dark:border-indigo-500/20"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 pt-4 border-t border-black/6 dark:border-zinc-800 transition-colors">
          {(live || demo) && (
            <a
              href={live || demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-indigo-400 hover:text-accent-purple dark:hover:text-indigo-300 transition-colors"
            >
              Live Demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3F4452] dark:text-zinc-400 hover:text-[#12141C] dark:hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}