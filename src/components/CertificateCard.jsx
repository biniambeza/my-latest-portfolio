import { useState } from "react";
import { X, ExternalLink, Award, Eye } from "lucide-react";

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, image, link } = certificate;
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col h-full bg-white dark:bg-[#151518] rounded-[18px] border border-black/[0.06] dark:border-white/[0.07] p-5 shadow-xs hover:shadow-xl hover:shadow-[#e8734a]/5 dark:hover:shadow-black/60 hover:border-[#e8734a]/40 dark:hover:border-[#e8734a]/50 transition-all duration-300 hover:-translate-y-1 hover-tilt">
        {/* Top bar: Image or Icon and Year */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {image ? (
            <button
              onClick={() => setIsImageOpen(true)}
              className="relative w-14 h-14 rounded-xl overflow-hidden border border-black/[0.07] dark:border-white/[0.09] group/img cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e8734a]"
              title="Click to view full certificate"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Eye size={16} />
              </div>
            </button>
          ) : (
            <div className="w-14 h-14 rounded-xl bg-[#e8734a]/10 text-[#e8734a] flex items-center justify-center font-medium">
              <Award size={24} />
            </div>
          )}

          <span className="text-xs font-mono font-normal px-2.5 py-1 rounded-full bg-black/[0.02] dark:bg-white/[0.04] text-neutral-500 dark:text-neutral-400">
            {date || "Verified"}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-base font-medium text-neutral-900 dark:text-white leading-snug tracking-tight mb-1 group-hover:text-[#e8734a] transition-colors">
          {title}
        </h3>

        <p className="text-xs font-normal text-neutral-500 dark:text-neutral-400 mb-5">
          Issued by {issuer}
        </p>

        {/* Action button */}
        <div className="mt-auto pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8734a] hover:text-[#d4623c] transition-colors"
            >
              <span>Verify Credential</span>
              <ExternalLink size={12} />
            </a>
          ) : (
            <button
              onClick={() => setIsImageOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8734a] hover:text-[#d4623c] transition-colors cursor-pointer"
            >
              <span>View Award</span>
              <Eye size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isImageOpen && image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-w-3xl max-h-[85vh] w-full bg-white dark:bg-[#1a1a20] p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-neutral-800 dark:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h4 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white mb-4 pr-8 text-center">
              {title} — {issuer}
            </h4>

            <div className="w-full max-h-[65vh] overflow-auto flex items-center justify-center rounded-xl bg-black/5 dark:bg-black/30 p-2">
              <img
                src={image}
                alt={title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#e8734a] hover:bg-[#d4623c] rounded-xl transition-colors"
              >
                <span>Open Official Verification Link</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}