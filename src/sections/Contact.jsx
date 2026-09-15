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
      className="relative py-20 md:py-28 px-5 sm:px-8 bg-[#fafafa] dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div ref={leftRef} className="scroll-reveal space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-black/60 dark:text-white/60 text-xs font-mono font-normal uppercase tracking-wider mb-3">
                <MessageSquare size={14} />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black dark:text-white tracking-tight leading-tight">
                Let's build something{" "}
                <span className="accent-underline">
                  remarkable
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-black/40 dark:text-white/40 max-w-md leading-relaxed">
                Whether you have an upcoming project, a full-time engineering role, or a technical inquiry, my inbox is always open.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.09] shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] text-black/50 dark:text-white/50 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-black/30 dark:text-white/30 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(email, setCopiedEmail)}
                  className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black/60 dark:text-white/60 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 rounded-[18px] bg-white dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.09] shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] text-black/50 dark:text-white/50 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-black/30 dark:text-white/30 uppercase">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="text-xs sm:text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors truncate block"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(phone, setCopiedPhone)}
                  className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black/60 dark:text-white/60 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={13} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-[18px] bg-white/60 dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.06] text-xs font-mono text-black/40 dark:text-white/40">
                <MapPin size={15} />
                <span>Addis Ababa, Ethiopia (UTC+3) • Open to Remote & Relocation</span>
              </div>
            </div>

            {/* Social Badges */}
            <div>
              <div className="text-xs font-mono font-normal text-black/30 dark:text-white/30 uppercase mb-3">
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
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.09] hover:border-black/25 dark:hover:border-white/25 text-xs font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-all hover:-translate-y-0.5 shadow-xs"
                    >
                      <Icon size={15} />
                      <span>{social.name}</span>
                      <ArrowUpRight size={12} className="text-black/25 dark:text-white/25" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div ref={rightRef} className="scroll-reveal p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] shadow-xl shadow-black/[0.03] dark:shadow-black/50">
            <h3 className="text-xl font-medium text-black dark:text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-black/40 dark:text-white/40 mb-6">
              Fill out the form below and it will prepare an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-black/50 dark:text-white/50 mb-1.5">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-black/50 dark:text-white/50 mb-1.5">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="senderEmail"
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-black/50 dark:text-white/50 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project, timeline, or position..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm text-white dark:text-black bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 disabled:opacity-75 shadow-lg shadow-black/10 dark:shadow-white/5 transition-all duration-200 cursor-pointer active:scale-[0.99]"
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