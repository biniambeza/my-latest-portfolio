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
      className="relative py-28 px-6 bg-white dark:bg-[#09090B] transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glow blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-136 h-80 rounded-full bg-linear-to-br from-[#4F46E5] to-[#7C3AED] opacity-[0.05] dark:opacity-[0.10] blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-accent dark:text-indigo-400 mb-3 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // achievements
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#12141C] dark:text-zinc-100 mb-4 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Certificates &amp; Achievements
          </h2>
          <p className="text-[#6B7280] dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Courses, certifications, and recognitions I've earned along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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