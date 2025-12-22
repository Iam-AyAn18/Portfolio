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
    <section id="skills" className="py-24 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Tech <span className="text-teal-400">Stack</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border ${
                category.isAI 
                  ? 'border-teal-500/50 shadow-lg shadow-teal-500/20' 
                  : 'border-gray-700/50'
              } hover:border-teal-500/30 transition-all duration-300 hover:scale-105 transform`}
            >
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                category.isAI ? 'text-teal-400' : 'text-white'
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
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      category.isAI 
                        ? 'bg-teal-500/5 hover:bg-teal-500/10' 
                        : 'bg-gray-800/50 hover:bg-gray-700/50'
                    } transition-colors duration-200 group`}
                  >
                    <span className="text-2xl group-hover:scale-110 transform transition-transform duration-200">
                      {skill.icon}
                    </span>
                    <span className={`font-medium ${
                      category.isAI ? 'text-teal-400' : 'text-gray-300'
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
