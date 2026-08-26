const skills = ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git & GitHub", "Node.js", "Figma"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto text-center bg-blue-50/50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-white shadow-sm border border-gray-100 text-gray-700 font-medium px-5 py-3 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}