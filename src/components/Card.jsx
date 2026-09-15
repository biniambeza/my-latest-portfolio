import { ExternalLink, Award, Sparkles, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Card({ project }) {
  const { title, description, image, tags, live, github, id, award, featured } = project;

  return (
    <article className="group flex flex-col h-full bg-white dark:bg-white/[0.04] rounded-[18px] border border-black/[0.07] dark:border-white/[0.09] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/[0.08] dark:hover:shadow-black/60 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 hover-tilt">
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
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-[#f5f5f5] to-[#ebebeb] dark:from-[#111111] dark:to-[#1a1a1a] text-center">
            <div className="w-12 h-12 rounded-xl bg-black/[0.06] dark:bg-white/[0.08] text-black/50 dark:text-white/50 flex items-center justify-center mb-2 shadow-inner">
              <FolderGit2 size={24} />
            </div>
            <span className="text-xs font-mono font-normal text-black/35 dark:text-white/35">
              Full-Stack Architecture
            </span>
          </div>
        )}

        {/* Project Number Overlay */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
          <span className="text-[10px] font-mono font-normal tracking-widest text-white/90 uppercase">
            Project {String(id).padStart(2, "0")}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white text-black text-[10px] font-medium tracking-wide uppercase">
              <Sparkles size={10} /> Featured
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Award Badge */}
        {award && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-black/60 dark:text-white/60 text-xs font-normal mb-3">
            <Award size={14} />
            <span>{award}</span>
          </div>
        )}

        <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white tracking-tight leading-snug mb-2 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 leading-relaxed mb-5 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-normal px-2.5 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-black/50 dark:text-white/50 border border-black/[0.05] dark:border-white/[0.07]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.07] mt-auto">
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
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
              className="inline-flex items-center gap-1.5 text-xs font-normal text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
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