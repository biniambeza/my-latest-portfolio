import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gray-900">
          Biniam<span className="text-blue-600">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
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
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)} className="block hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}