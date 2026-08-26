import { projects } from "../data/projects";
import Card from "../components/Card";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">My Projects</h2>
      <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">A few things I've built recently. Each one taught me something new.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}