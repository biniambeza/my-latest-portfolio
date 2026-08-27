export default function CertificateCard({ certificate }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:border-[#2563eb]/40 transition-all duration-300 overflow-hidden flex flex-col">
      <img src={certificate.image} alt={certificate.title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{certificate.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{certificate.issuer}</p>
        <p className="text-xs text-[#2563eb] font-medium mb-4">{certificate.date}</p>
        {certificate.link ? (
          <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-medium text-gray-700 hover:text-[#2563eb]">
            View Certificate →
          </a>
        ) : (
          <span className="mt-auto text-sm font-medium text-gray-400">No link available</span>
        )}
      </div>
    </div>
  );
}