export default function Card({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            GitHub →
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
}