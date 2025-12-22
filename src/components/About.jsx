const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-teal-400">Me</span>
        </h2>
        
        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            I'm a passionate full-stack developer with a strong focus on integrating AI technologies 
            into modern web applications. With expertise in both frontend and backend development, 
            I create seamless, intelligent solutions that push the boundaries of what's possible.
          </p>
          
          <p>
            My journey in software development has led me to specialize in machine learning integration, 
            natural language processing, and building scalable architectures. I thrive on solving complex 
            problems and turning innovative ideas into reality.
          </p>
          
          <p>
            When I'm not coding, I'm exploring the latest advancements in AI, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
