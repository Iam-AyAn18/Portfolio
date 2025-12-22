const About = () => {
  return (
    <section id="about" className="py-40 px-4 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 14s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 18s ease-in-out infinite reverse'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-24 tracking-tight">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">About </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-3xl rounded-[3rem] p-16 md:p-20 shadow-2xl border border-gray-700/30">
          <div className="text-gray-200 text-xl leading-relaxed space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl animate-bounce">👋</span>
              <span className="font-bold text-3xl text-white">Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Ayan</span></span>
            </div>

            <div className="flex gap-8 flex-wrap">
              <div className="flex-1 min-w-[250px] bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-500">
                <span className="text-3xl">🛠️</span>
                <span className="ml-2 font-semibold text-teal-400 text-lg">Backend Engineer</span>
                <p className="mt-4 text-gray-300 leading-relaxed">Passionate about building robust microservices and scalable APIs.</p>
              </div>
              <div className="flex-1 min-w-[250px] bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500">
                <span className="text-3xl">🤖</span>
                <span className="ml-2 font-semibold text-cyan-400 text-lg">AI Integrator</span>
                <p className="mt-2 text-gray-300">Expert in integrating AI models like <span className="text-teal-400 font-semibold">Groq</span> and <span className="text-teal-400 font-semibold">OpenAI</span> into production apps.</p>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-2xl">⚡</span>
              <span className="ml-2 font-semibold text-cyan-300">Real-Time AI & Autonomous Systems</span>
              <p className="mt-2 text-gray-300">I love building <span className="text-teal-400 font-semibold">real-time AI features</span> and <span className="text-teal-400 font-semibold">autonomous systems</span> that think and respond intelligently—smart recommendations, search, and conversational interfaces.</p>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <span className="text-3xl">📍</span>
              <span className="font-semibold text-teal-400">Based in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
