const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "OpenAI API", icon: "🤖" },
    { name: "Git", icon: "📦" },
    { name: "Tailwind CSS", icon: "🎨" }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Tech <span className="text-teal-400">Stack</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="text-gray-300 font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
