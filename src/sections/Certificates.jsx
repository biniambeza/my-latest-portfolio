import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import { Award } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function Certificates() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 100 });

  return (
    <section
      id="certificates"
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-white dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-[9px] font-mono uppercase tracking-wider mb-2">
              <Award size={11} />
              Verified Credentials
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white tracking-tight">
              Certificates &{" "}
              <span className="accent-underline">
                achievements
              </span>
            </h2>
            <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 max-w-lg">
              Academic honors, programming certifications, and verified credentials demonstrating technical excellence.
            </p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} data-reveal-child className="h-full">
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}