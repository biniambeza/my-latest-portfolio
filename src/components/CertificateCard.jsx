export default function CertificateCard({ certificate }) {
  const { title, issuer, date, image, link } = certificate;

  const initials = (title || "?")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const CardInner = (
    <div className="group relative h-full flex flex-col bg-white rounded-2xl border border-black/[0.06] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-transparent">
      {/* gradient ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#4F46E5,#7C3AED)_border-box] border-2 border-transparent" />

      <div className="relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-12 h-12 rounded-xl object-cover mb-4 border border-black/[0.06]"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {initials}
          </div>
        )}

        <h3
          className="text-[15px] font-bold text-[#12141C] mb-1 leading-snug"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] mb-1">{issuer}</p>
        {date && (
          <p
            className="text-xs text-[#9CA3AF] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {date}
          </p>
        )}

        {link && (
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#4F46E5]">
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
          </span>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardInner}
    </a>
  ) : (
    CardInner
  );
}