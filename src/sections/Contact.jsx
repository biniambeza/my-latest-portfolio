export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center bg-[#EAEFEF]">
      <p className="text-[#2563eb] font-medium mb-2 tracking-wide uppercase text-sm">Get In Touch</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Talk</h2>
      <p className="text-gray-600 mb-8">Have a project in mind or just want to say hi? My inbox is always open.</p>
      <a href="mailto:your.email@example.com" className="inline-block bg-[#2563eb] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1d4ed8] transition-colors">
        Say Hello
      </a>
    </section>
  );
}