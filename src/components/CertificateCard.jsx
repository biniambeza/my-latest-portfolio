import { useState } from "react";
import { X } from "lucide-react";

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, image, link } = certificate;
  const [isImageOpen, setIsImageOpen] = useState(false);

  const initials = (title || "?")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const CardInner = (
    <div className="group relative h-full flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-black/10 dark:border-zinc-800 p-3 md:p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-/10 hover:border-[#1597ff]/60 dark:hover:border-[#1597ff]/600">
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          {image ? (
            <button
              onClick={() => setIsImageOpen(true)}
              className="relative cursor-pointer hover:opacity-80 transition-opacity"
              title="Click to view full image"
            >
              <img
                src={image}
                alt={title}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border border-black/6 dark:border-zinc-700"
              />
              <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">View</span>
              </div>
            </button>
          ) : (
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white text-sm font-bold bg-accent shadow-sm shadow-indigo-500/20"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              {initials}
            </div>
          )}
          <span className="text-[10px] font-bold text-black/30 dark:text-white/30" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {date || "N/A"}
          </span>
        </div>

        <h3
            className="text-sm md:text-base font-bold text-[#12141C] dark:text-zinc-100 mb-2 leading-snug transition-colors"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] dark:text-zinc-400 mb-1 transition-colors">{issuer}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-3 md:pt-5 inline-flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-accent[#1597ff]/60 group-hover:text-accent-purple dark:group-hover:text-[#1597ff]/600 transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            View credential
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {CardInner}
        </a>
      ) : (
        CardInner
      )}

      {/* Image Modal */}
      {isImageOpen && image && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          <div 
            className="relative max-w-2xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <p className="absolute bottom-4 left-4 right-4 text-white/70 text-sm text-center">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}