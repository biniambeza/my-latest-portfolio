export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#EAEFEF]">
      <p className="text-[#2563eb] font-medium mb-4 tracking-wide uppercase text-sm">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Biniam Beza
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2563eb] mb-6">
        I build things for the web.
      </h2>
      <p className="max-w-xl text-gray-600 mb-8">
        A passionate developer focused on creating clean, functional, and user-friendly digital experiences.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-[#2563eb] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1d4ed8] transition-colors">
          View My Work
        </a>
        <a href="#contact" className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  );
}