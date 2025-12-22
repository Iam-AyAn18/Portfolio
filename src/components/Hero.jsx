const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span className="text-teal-400 text-sm font-medium">AI Engineer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Ayan</span>
          <br />
          <span className="text-teal-400">Full-Stack Developer</span>
          <span className="text-gray-300"> | </span>
          <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">AI Integration Specialist</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Building intelligent web apps with <span className="text-teal-400 font-semibold">React</span>, <span className="text-teal-400 font-semibold">Spring Boot</span>, and <span className="text-teal-400 font-semibold">Azure</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 inline-block shadow-lg shadow-teal-500/50 hover:shadow-teal-500/70 hover:scale-105 transform"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
          </a>
          <a
            href="#contact"
            className="group relative border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 inline-block hover:scale-105 transform hover:shadow-lg hover:shadow-teal-500/50"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
