const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Chat Application",
      description: "A real-time chat application integrated with GPT-4 for intelligent responses. Built with React, Node.js, and OpenAI API.",
      technologies: ["React", "Node.js", "OpenAI API", "WebSocket"],
      liveDemo: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Smart Content Analyzer",
      description: "Machine learning-based content analysis tool that provides sentiment analysis, keyword extraction, and summarization.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveDemo: "#",
      code: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-teal-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-teal-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold px-6 py-2 rounded transition-colors duration-200"
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
