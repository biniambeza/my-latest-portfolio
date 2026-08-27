import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto bg-[#EAEFEF]">
      <p className="text-[#2563eb] font-medium mb-2 tracking-wide uppercase text-sm text-center">Achievements</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Certificates & Achievements</h2>
      <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Courses, certifications, and recognitions I've earned along the way.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
}