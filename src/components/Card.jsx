import { ExternalLink, Award, Sparkles, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Card({ project }) {
  const { title, description, image, tags, live, github, id, award, featured } = project;

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-[#151518] rounded-[18px] border border-black/[0.06] dark:border-white/[0.07] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#e8734a]/8 dark:hover:shadow-black/60 hover:border-[#e8734a]/40 dark:hover:border-[#e8734a]/50 transition-all duration-300 hover:-translate-y-1.5 hover-tilt">
      {/* Thumbnail Banner */}
      <div className="relative aspect-16/9 overflow-hidden bg-neutral-100 dark:bg-[#1a1a20]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-[#161619] dark:to-[#1e1e24] text-center">
            <div className="w-12 h-12 rounded-xl bg-[#e8734a]/10 text-[#e8734a] flex items-center justify-center mb-2 shadow-inner">
              <FolderGit2 size={24} />
            </div>
            <span className="text-xs font-mono font-normal text-neutral-500 dark:text-neutral-400">
              Full-Stack Architecture
            </span>
          </div>
        )}

        {/* Project Number / Indicator Overlay */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
          <span className="text-[10px] font-mono font-normal tracking-widest text-white/90 uppercase">
            Project {String(id).padStart(2, "0")}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#e8734a] text-white text-[10px] font-medium tracking-wide uppercase">
              <Sparkles size={10} /> Featured
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Award Badge if present */}
        {award && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-normal mb-3">
            <Award size={14} className="text-amber-500" />
            <span>{award}</span>
          </div>
        )}

        <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-[#e8734a] transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-normal px-2.5 py-0.5 rounded-md bg-black/[0.02] dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border border-black/[0.04] dark:border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] dark:border-white/[0.05] mt-auto">
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8734a] hover:text-[#d4623c] transition-colors"
            >
              <span>Live Application</span>
              <ExternalLink size={13} />
            </a>
          ) : (
            <div />
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={14} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}