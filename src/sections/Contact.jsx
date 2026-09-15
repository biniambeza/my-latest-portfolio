import { useState } from "react";
import { Send, Check, ArrowUpRight, Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import useScrollReveal from "../useScrollReveal";

const email = "biniambeza544@gmail.com";
const phone = "+251993835149";

const socials = [
  {
    name: "Telegram",
    handle: "@ben_1216",
    href: "https://t.me/ben_1216",
    icon: FaTelegramPlane,
    color: "#229ED9",
  },
  {
    name: "GitHub",
    handle: "github.com/biniambeza",
    href: "https://github.com/biniambeza",
    icon: FaGithub,
    color: "#181717",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/biniam-beza",
    href: "https://www.linkedin.com/in/biniam-beza-3a7b0542b?",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sending, setSending] = useState(false);
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal({ threshold: 0.1 });

  const copyToClipboard = async (text, setSuccess) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const senderEmail = form.get("senderEmail") || "";
    const message = form.get("message") || "";

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setSending(false);
    }, 400);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#f5f2ef]/60 dark:bg-[#111114] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div ref={leftRef} className="scroll-reveal space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#e8734a]/10 text-[#e8734a] text-xs font-mono font-normal uppercase tracking-wider mb-3">
                <MessageSquare size={14} />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight leading-tight">
                Let's build something{" "}
                <span className="accent-underline bg-linear-to-r from-[#e8734a] to-[#f5a623] bg-clip-text text-transparent">
                  remarkable
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
                Whether you have an upcoming project, a full-time engineering role, or a technical inquiry, my inbox is always open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-[18px] bg-white dark:bg-[#161619] border border-black/[0.06] dark:border-white/[0.07] shadow-xs hover:border-[#e8734a]/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#e8734a]/10 text-[#e8734a] flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#e8734a] transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(email, setCopiedEmail)}
                  className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-[#e8734a] hover:text-white text-neutral-600 dark:text-neutral-400 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 rounded-[18px] bg-white dark:bg-[#161619] border border-black/[0.06] dark:border-white/[0.07] shadow-xs hover:border-[#e8734a]/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-[#e8734a] transition-colors truncate block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(phone, setCopiedPhone)}
                  className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-xl bg-black/[0.03] dark:bg-white/[0.05] hover:bg-emerald-500 hover:text-white text-neutral-600 dark:text-neutral-400 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-[18px] bg-white/60 dark:bg-[#161619]/60 border border-black/[0.04] dark:border-white/[0.05] text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <MapPin size={15} className="text-[#e8734a]" />
                <span>Addis Ababa, Ethiopia (UTC+3) • Open to Remote & Relocation</span>
              </div>
            </div>

            {/* Social Network Badges */}
            <div>
              <div className="text-xs font-mono font-normal text-neutral-400 dark:text-neutral-500 uppercase mb-3">
                Connect Directly
              </div>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#161619] border border-black/[0.06] dark:border-white/[0.07] hover:border-[#e8734a] text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-all hover:-translate-y-0.5 shadow-xs"
                    >
                      <Icon size={15} style={{ color: social.color }} />
                      <span>{social.name}</span>
                      <ArrowUpRight size={12} className="text-neutral-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div ref={rightRef} className="scroll-reveal p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#161619] border border-black/[0.07] dark:border-white/[0.08] shadow-xl shadow-black/[0.02] dark:shadow-black/50">
            <h3 className="text-xl font-medium text-neutral-900 dark:text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              Fill out the form below and it will prepare an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.01] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.08] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#e8734a] focus:ring-2 focus:ring-[#e8734a]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="senderEmail"
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.01] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.08] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#e8734a] focus:ring-2 focus:ring-[#e8734a]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project, timeline, or position..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.01] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.08] text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-[#e8734a] focus:ring-2 focus:ring-[#e8734a]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-[#e8734a] hover:bg-[#d4623c] disabled:opacity-75 shadow-lg shadow-[#e8734a]/20 hover:shadow-xl hover:shadow-[#e8734a]/25 transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                {sending ? (
                  <span>Opening Mail Client...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}