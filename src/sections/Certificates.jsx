import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import { Award } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function Certificates() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ stagger: 130 });

  return (
    <section
      id="certificates"
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#faf8f6]/50 dark:bg-[#0d0d0f] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#e8734a]/10 text-[#e8734a] text-xs font-mono font-normal uppercase tracking-wider mb-3">
              <Award size={14} />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight">
              Certificates &{" "}
              <span className="accent-underline bg-linear-to-r from-[#e8734a] to-[#f5a623] bg-clip-text text-transparent">
                achievements
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
              Academic honors, programming certifications, and verified credentials demonstrating technical excellence.
            </p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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