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
  },
  {
    name: "GitHub",
    handle: "github.com/biniambeza",
    href: "https://github.com/biniambeza",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/biniam-beza",
    href: "https://www.linkedin.com/in/biniam-beza-3a7b0542b?",
    icon: FaLinkedinIn,
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
      className="relative py-14 sm:py-20 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0a0a0c] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div ref={leftRef} className="scroll-reveal space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-[9px] font-mono uppercase tracking-wider mb-2">
                <MessageSquare size={11} />
                Get In Touch
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white tracking-tight leading-tight">
                Let's build something{" "}
                <span className="accent-underline">
                  remarkable
                </span>
              </h2>
              <p className="mt-1.5 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
                Whether you have an upcoming project, a full-time engineering role, or a technical inquiry, my inbox is always open.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-2.5">
              {/* Email Card */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800/80 shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400 flex items-center justify-center shrink-0">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-medium text-black dark:text-white hover:underline truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(email, setCopiedEmail)}
                  className="shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-md bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-600 dark:text-neutral-300 transition-all flex items-center gap-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={10} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800/80 shadow-xs hover:border-black/20 dark:hover:border-neutral-600 transition-colors">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-neutral-500 dark:text-neutral-400 flex items-center justify-center shrink-0">
                    <Phone size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="text-xs font-medium text-black dark:text-white hover:underline truncate block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(phone, setCopiedPhone)}
                  className="shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-md bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-600 dark:text-neutral-300 transition-all flex items-center gap-1 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={10} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-900/40 border border-black/[0.05] dark:border-neutral-800 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                <MapPin size={12} />
                <span>Addis Ababa, Ethiopia • Open to Global Remote & Relocation</span>
              </div>
            </div>

            {/* Social Badges */}
            <div>
              <div className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase mb-2">
                Connect Directly
              </div>
              <div className="flex flex-wrap gap-1.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800 text-[10px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-all shadow-xs"
                    >
                      <Icon size={12} />
                      <span>{social.name}</span>
                      <ArrowUpRight size={9} className="text-neutral-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div ref={rightRef} className="scroll-reveal p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900/60 border border-black/[0.06] dark:border-neutral-800/80 shadow-sm">
            <h3 className="text-xs sm:text-sm font-medium text-black dark:text-white tracking-tight mb-1">
              Send a Direct Message
            </h3>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mb-4">
              Fill out the form below and it will prepare an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="senderEmail"
                    placeholder="jane@example.com"
                    className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="Tell me about your project, timeline, or position..."
                  className="w-full px-2.5 py-1.5 rounded-lg text-xs bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-neutral-800 text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-medium text-xs text-white dark:text-black bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-75 shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                {sending ? (
                  <span>Opening Mail Client...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={12} />
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