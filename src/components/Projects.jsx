const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard with AI Recommendations",
      description: "Intelligent dashboard featuring AI-powered product suggestions and sales forecasting. Built with real-time analytics and smart recommendations that adapt to user behavior.",
      technologies: ["React", "Spring Boot", "AI", "Tailwind"],
      liveDemo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Agency Landing + AI Feature Showcase",
      description: "Modern SaaS landing page showcasing advanced AI integration capabilities including intelligent job suggestions, smart matching algorithms, and automated content generation.",
      technologies: ["React", "AI", "Tailwind", "Landing"],
      liveDemo: "#",
      code: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 border border-gray-700/50 hover:border-teal-500/50 hover:scale-105 transform"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-teal-400 text-sm px-4 py-2 rounded-full border border-teal-500/30 hover:bg-teal-500/10 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-center shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transform"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex-1 border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-center hover:scale-105 transform"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
