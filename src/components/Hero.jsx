const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Falling snow layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 12s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 16s ease-in-out infinite reverse'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Glassy AI Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-xl animate-fade-in">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-400"></span>
          </span>
          <span className="text-teal-200 text-lg font-bold tracking-wide">AI Engineer</span>
        </div>

        {/* Animated Name & Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
          <span className="block animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ayan</span>
          <span className="block text-4xl md:text-6xl mt-4 font-bold animate-fade-in-delay"><span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Full-Stack Developer</span> <span className="text-gray-400">|</span> <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">AI Integration Specialist</span></span>
        </h1>

        {/* Dynamic subtitle with glass effect */}
        <div className="mx-auto mb-12 max-w-2xl px-6 py-4 rounded-2xl bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-lg animate-fade-in-delay">
          <p className="text-xl text-gray-300 font-medium">
            Building intelligent web apps with <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-semibold">React</span>, <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-semibold">Spring Boot</span>, and <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-semibold">Azure</span>
          </p>
        </div>

        {/* Premium Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-14 py-5 rounded-2xl shadow-2xl hover:shadow-teal-500/40 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          <a
            href="#contact"
            className="group relative bg-gray-900/40 backdrop-blur-xl border border-teal-500/30 text-teal-400 hover:border-teal-400/60 font-semibold px-14 py-5 rounded-2xl transition-all duration-500 hover:scale-[1.02] shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
