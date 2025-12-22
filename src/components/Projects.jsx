const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard with AI Recommendations",
      description: "Intelligent dashboard featuring AI-powered product suggestions and sales forecasting. Built with real-time analytics and smart recommendations that adapt to user behavior.",
      technologies: ["React", "Spring Boot", "AI", "Tailwind"],
      liveDemo: "https://orange-sky-049b5a010.4.azurestaticapps.net/",
      code: "https://github.com/Iam-AyAn18/EComAdmin"
    },
    {
      id: 2,
      title: "Agency Landing + AI Feature Showcase",
      description: "Modern SaaS landing page showcasing advanced AI integration capabilities including intelligent job suggestions, smart matching algorithms, and automated content generation.",
      technologies: ["React", "AI", "Tailwind", "Landing"],
      liveDemo: "https://lively-beach-0b0fffa10.1.azurestaticapps.net/",
      code: "https://github.com/Iam-AyAn18/agency-landing"
    }
  ]

  return (
    <section id="projects" className="py-40 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
      {/* Falling snow layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              animation: `snowfall ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
      
      {/* Subtle parallax gradient layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 15s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 19s ease-in-out infinite reverse'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-24 tracking-tight">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Featured </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-700/30 hover:border-teal-500/40 transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="p-12">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-teal-400/20 to-fuchsia-500/20 text-teal-300 text-sm font-semibold px-4 py-2 rounded-full border border-teal-400/30 hover:border-fuchsia-400/50 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-5">
                  <a
                    href={project.liveDemo}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-7 py-4 rounded-2xl transition-all duration-500 text-center shadow-xl hover:shadow-teal-500/50 hover:scale-[1.02]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900/40 backdrop-blur-xl border border-teal-500/30 text-teal-400 hover:border-teal-400/60 font-semibold px-7 py-4 rounded-2xl transition-all duration-500 text-center hover:scale-[1.02] shadow-xl"
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
