const AIExpertise = () => {
  const expertise = [
    {
      id: 1,
      title: "LLM Integration",
      description: "Groq, OpenAI integration into production",
      icon: "🤖",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Real-Time AI",
      description: "Streaming responses, async LLM handling",
      icon: "⚡",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Intelligent Features",
      description: "Job suggestions, smart search, recommendations",
      icon: "🎯",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 4,
      title: "Prompt Engineering",
      description: "Effective prompts for production workflows",
      icon: "✨",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="ai-expertise" className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="text-teal-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in building production-ready AI features that deliver real value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 transform"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIExpertise
