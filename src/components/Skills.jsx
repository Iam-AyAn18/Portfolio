const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Responsive Design", icon: "📱" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Spring Boot", icon: "🍃" },
        { name: "Java", icon: "☕" },
        { name: "REST APIs", icon: "🔌" },
        { name: "Microservices", icon: "🔧" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Azure", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "🔄" },
        { name: "CI/CD", icon: "🚀" }
      ]
    },
    {
      category: "AI & LLMs",
      isAI: true,
      skills: [
        { name: "Groq API", icon: "⚡" },
        { name: "OpenAI", icon: "🤖" },
        { name: "LLM Prompting", icon: "💡" },
        { name: "Real-time AI", icon: "🔥" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" }
      ]
    },
    {
      category: "Tools & Architecture",
      skills: [
        { name: "GitHub", icon: "📦" },
        { name: "System Design", icon: "🏗️" },
        { name: "API Architecture", icon: "🎯" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-40 px-4 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 14s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 18s ease-in-out infinite reverse'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-24 tracking-tight">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Tech </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-3xl rounded-[2rem] p-10 border ${
                category.isAI 
                  ? 'border-teal-500/40 shadow-2xl shadow-teal-500/20' 
                  : 'border-gray-700/30'
              } hover:border-teal-500/50 transition-all duration-700 hover:scale-[1.02]`}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                category.isAI ? 'text-teal-400' : 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
              }`}>
                {category.isAI && (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                  </span>
                )}
                {category.category}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      category.isAI 
                        ? 'bg-gradient-to-r from-teal-400/10 to-fuchsia-500/10 hover:from-teal-400/20 hover:to-fuchsia-500/20' 
                        : 'bg-gray-800/50 hover:bg-gray-700/60'
                    } transition-all duration-200 group border border-transparent hover:border-teal-400/30`}
                  >
                    <span className="text-2xl group-hover:scale-110 transform transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className={`font-medium ${
                      category.isAI ? 'text-teal-300' : 'text-gray-300'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
