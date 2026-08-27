const skills = ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git & GitHub", "Node.js", "Figma"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto text-center bg-[#EAEFEF]">
      <p className="text-[#2563eb] font-medium mb-2 tracking-wide uppercase text-sm">What I Know</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-white border border-gray-300 text-gray-700 font-medium px-5 py-3 rounded-xl shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}