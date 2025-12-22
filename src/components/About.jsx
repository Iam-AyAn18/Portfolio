const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gray-800 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.4) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-teal-400">Me</span>
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300">
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p className="text-xl md:text-2xl font-semibold text-white mb-6">
              👋 Hi, I'm <span className="text-teal-400">Ayan</span>
            </p>
            
            <p>
              I'm a backend engineer with a passion for building robust microservices and scalable APIs. 
              My expertise lies in integrating cutting-edge AI models like <span className="text-teal-400 font-semibold">Groq</span> and <span className="text-teal-400 font-semibold">OpenAI</span> into production applications, 
              creating seamless experiences that leverage the power of artificial intelligence.
            </p>
            
            <p>
              What excites me most is implementing <span className="text-teal-400 font-semibold">real-time AI features</span> and building <span className="text-teal-400 font-semibold">autonomous systems</span> that 
              can think and respond intelligently. Whether it's smart recommendations, intelligent search, 
              or conversational interfaces, I love turning AI concepts into practical, production-ready solutions.
            </p>
            
            <p className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Based in <span className="text-teal-400 font-semibold">Kolkata</span>, India</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
