import { useEffect } from "react";
import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";

export default function Certificates() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <section 
      id="certificates" 
      className="relative min-h-screen scroll-mt-20 py-10 md:py-24 px-4 sm:px-6 bg-[#e5e7eb] dark:bg-[#09090B] transition-colors duration-300 overflow-hidden flex items-center"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7 md:mb-10">
          <div>
            <p
              className="text-accent dark:text-indigo-400 mb-3 text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // achievements
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#12141C] dark:text-zinc-100 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Certificates &amp; Achievements
            </h2>
          </div>
          <div className="md:max-w-sm md:text-right">
            <p className="text-[#6B7280] dark:text-zinc-400 leading-relaxed">
              Proof of practice, curiosity, and the work behind the work.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent dark:text-indigo-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {String(certificates.length).padStart(2, "0")} milestones collected
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {certificates.map((cert, i) => (
            <div
              key={cert.id}
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-[fade-up_0.5s_ease-out_both]"
            >
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}