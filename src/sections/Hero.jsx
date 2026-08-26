export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-blue-50">
      <p className="text-blue-600 font-medium mb-4">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Biniam Beza
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 mb-6">
        I build things for the web.
      </h2>
      <p className="max-w-xl text-gray-600 mb-8">
        A passionate developer focused on creating clean, functional, and user-friendly digital experiences.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          View My Work
        </a>
        <a href="#contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  );
}