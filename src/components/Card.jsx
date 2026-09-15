import { ExternalLink, Award, Sparkles, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Card({ project }) {
  const { title, description, image, tags, live, github, id, award, featured } = project;

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-neutral-900/60 rounded-xl border border-black/[0.06] dark:border-neutral-800/80 overflow-hidden shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-all duration-200">
      {/* Thumbnail Banner */}
      <div className="relative aspect-16/9 overflow-hidden bg-[#f5f5f5] dark:bg-[#111111]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-linear-to-br from-[#f5f5f5] to-[#ebebeb] dark:from-[#111111] dark:to-[#1a1a1a] text-center">
            <div className="w-9 h-9 rounded-lg bg-black/[0.06] dark:bg-white/[0.08] text-black/50 dark:text-white/50 flex items-center justify-center mb-1.5 shadow-inner">
              <FolderGit2 size={18} />
            </div>
            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
              Full-Stack Architecture
            </span>
          </div>
        )}

        {/* Project Number Overlay */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
          <span className="text-[9px] font-mono tracking-widest text-white/90 uppercase">
            Project {String(id).padStart(2, "0")}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-medium tracking-wide uppercase">
              <Sparkles size={8} /> Featured
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4">
        {/* Award Badge */}
        {award && (
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-neutral-600 dark:text-neutral-300 text-[10px] mb-2 self-start">
            <Award size={11} />
            <span>{award}</span>
          </div>
        )}

        <h3 className="text-xs sm:text-[13px] font-medium text-black dark:text-white tracking-tight leading-snug mb-1.5 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {title}
        </h3>

        <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400 border border-black/[0.04] dark:border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center justify-between pt-2.5 border-t border-black/[0.04] dark:border-white/[0.06] mt-auto">
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-medium text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
            >
              <span>Live Application</span>
              <ExternalLink size={10} />
            </a>
          ) : (
            <div />
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={11} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}