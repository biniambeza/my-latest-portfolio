import { useState } from "react";
import { X, ExternalLink, Award, Eye } from "lucide-react";

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, image, link } = certificate;
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col h-full bg-white dark:bg-neutral-900/60 rounded-xl border border-black/[0.06] dark:border-neutral-800/80 p-3.5 sm:p-4 shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-all duration-200">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {image ? (
            <button
              onClick={() => setIsImageOpen(true)}
              className="relative w-10 h-10 rounded-lg overflow-hidden border border-black/[0.08] dark:border-white/[0.1] group/img cursor-pointer focus:outline-none"
              title="Click to view full certificate"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Eye size={12} />
              </div>
            </button>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
              <Award size={18} />
            </div>
          )}

          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400">
            {date || "Verified"}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xs sm:text-[13px] font-medium text-black dark:text-white leading-snug tracking-tight mb-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
          {title}
        </h3>

        <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-3">
          Issued by {issuer}
        </p>

        {/* Action */}
        <div className="mt-auto pt-2 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] font-medium text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
            >
              <span>Verify Credential</span>
              <ExternalLink size={10} />
            </a>
          ) : (
            <button
              onClick={() => setIsImageOpen(true)}
              className="inline-flex items-center gap-1 text-[10px] font-medium text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <span>View Award</span>
              <Eye size={10} />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isImageOpen && image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-w-2xl max-h-[85vh] w-full bg-white dark:bg-[#111111] p-4 rounded-xl shadow-xl border border-white/20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <h4 className="text-xs sm:text-sm font-medium text-black dark:text-white mb-3 pr-6 text-center">
              {title} — {issuer}
            </h4>

            <div className="w-full max-h-[65vh] overflow-auto flex items-center justify-center rounded-lg bg-black/5 dark:bg-black/30 p-2">
              <img
                src={image}
                alt={title}
                className="max-h-[55vh] max-w-full object-contain rounded shadow-xs"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}