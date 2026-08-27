import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#EAEFEF] z-50 border-b border-gray-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gray-900">
          Biniam<span className="text-[#2563eb]">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-[#2563eb] transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-[#2563eb] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#1d4ed8] transition-colors">
          Resume
        </a>

        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)} className="block hover:text-[#2563eb]">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}