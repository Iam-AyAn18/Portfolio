const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-teal-400">Full-Stack Developer</span>
          <span className="text-gray-300"> | </span>
          <span className="text-teal-400">AI Integration Specialist</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Building innovative web applications with cutting-edge AI technologies. 
          Transforming ideas into intelligent, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
