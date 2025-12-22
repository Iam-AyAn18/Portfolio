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
    <section id="ai-expertise" className="py-40 px-4 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 13s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 17s ease-in-out infinite reverse'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">AI </span>
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto">
            Specialized in building production-ready AI features that deliver real value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {expertise.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-3xl rounded-[2.5rem] p-12 border border-gray-700/30 hover:border-teal-500/40 transition-all duration-700 hover:scale-[1.02] shadow-2xl"
            >
              <div className="relative z-10">
                <div className="text-7xl mb-8 group-hover:scale-110 transform transition-transform duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIExpertise
