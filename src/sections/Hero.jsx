import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 overflow-hidden bg-[#e5e7eb] dark:bg-[#050505] text-[#12141C] dark:text-zinc-100 transition-colors duration-300"
    >
      <style>{`
        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 30px) scale(1.05); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.6s ease-out both; }
        .fade-up-2 { animation: fade-up 0.6s ease-out 0.1s both; }
        .fade-up-3 { animation: fade-up 0.6s ease-out 0.2s both; }
        .fade-up-4 { animation: fade-up 0.6s ease-out 0.3s both; }
        .fade-up-5 { animation: fade-up 0.6s ease-out 0.4s both; }
      `}</style>

      <div className="relative z-10 grid w-full max-w-6xl mx-auto lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
        <div className="text-left">
        <p
          className="fade-up-1 inline-block text-[#1597ff] mb-7 text-xs px-3 py-1.5 bg-[#071a2e] border border-[#0d3d68]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Frontend Developer
        </p>

        <h1
          className="fade-up-2 text-5xl sm:text-6xl lg:text-8xl font-bold text-[#12141C] dark:text-white mb-5 tracking-tight leading-[0.95]"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Biniam Beza
        </h1>

        <h2
          className="fade-up-3 text-xl md:text-3xl font-medium text-[#4B5060] dark:text-[#a7adb8] mb-7 max-w-2xl leading-tight"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Clean interfaces <span className="text-[#1597ff]">•</span> thoughtful systems <span className="text-[#1597ff]">•</span> useful products
        </h2>

        <p className="fade-up-4 max-w-xl text-[#6B7280] dark:text-[#9aa1ad] mb-9 leading-relaxed">
          I design and build responsive digital experiences with a focus on clarity, performance, and the details that make software feel effortless.
        </p>

        <div className="fade-up-5 flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="bg-[#1597ff] text-white px-6 py-3 font-semibold transition-colors duration-300 hover:bg-[#087bd7]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="border border-black/15 dark:border-[#2b3038] bg-white dark:bg-[#191a1d] text-[#1597ff] px-6 py-3 font-semibold transition-colors duration-300 hover:border-[#1597ff]"
          >
            Get in touch
          </a>
        </div>
      </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-px bg-[#303238] border border-[#303238]">
            {[['01', 'Projects delivered'], ['02', 'Core technologies'], ['03', 'Years learning'], ['04', 'Curious mind']].map(([number, label]) => (
              <div key={number} className="bg-[#202124] px-5 py-5">
                <p className="text-3xl font-bold text-white mb-1">{number === '01' ? '08+' : number === '02' ? '12+' : number === '03' ? '03+' : '∞'}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8f96a3]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#202124] border border-[#303238] p-5">
            <div className="flex items-center gap-3 text-sm text-[#c4c8d0] mb-4"><MapPin size={16} className="text-[#1597ff]" /> Addis Ababa, Ethiopia</div>
            <div className="flex items-center gap-3 text-sm text-[#c4c8d0] mb-5"><Mail size={16} className="text-[#1597ff]" /> {"your.email@example.com"}</div>
            <div className="flex gap-6 text-[#1597ff]">
              <a href="https://github.com/biniambeza" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/biniam-beza/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><FaLinkedinIn /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}