import { useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web App',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_3m2m5of',
      'template_8yiyl7f',
      {
        title: 'Portfolio Contact',
        name: formData.name,
        email: formData.email,
        message: `${formData.message}\n\nProject Type: ${formData.projectType}`,
        time: new Date().toLocaleString(),
      },
      'IJQpGhgmrmQXP1Y0U'
    )
    .then((result) => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', projectType: 'Web App', message: '' });
    }, (error) => {
      alert('Oops! Something went wrong. Please try again later.');
    });
  }

  return (
    <section id="contact" className="py-40 px-4 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-950/5 via-transparent to-transparent" style={{animation: 'float 13s ease-in-out infinite'}}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-950/5" style={{animation: 'float 17s ease-in-out infinite reverse'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Get In </span>
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 text-xl font-light">
            I'm open to <span className="text-teal-400 font-medium">AI-focused projects</span> and <span className="text-cyan-400 font-medium">consulting</span>
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 shadow-2xl border border-gray-700/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-200 font-semibold mb-3 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-800/50 text-gray-100 border border-gray-600/50 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 backdrop-blur-sm"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-200 font-semibold mb-3 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-800/50 text-gray-100 border border-gray-600/50 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="projectType" className="block text-gray-200 font-semibold mb-3 text-lg">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-800/50 text-gray-100 border border-gray-600/50 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <option value="Web App">Web App</option>
                <option value="AI Feature">AI Feature</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-200 font-semibold mb-3 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-5 py-4 bg-gray-800/50 text-gray-100 border border-gray-600/50 rounded-xl focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 transition-all duration-200 resize-none backdrop-blur-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-8 py-6 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-teal-500/50 hover:scale-[1.02] text-lg"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-10 pt-10 border-t border-gray-700/50">
            <p className="text-gray-400 text-center mb-4">Or connect with me directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:ayanpal58@gmail.com"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email
              </a>
              <span className="text-gray-600 hidden sm:block">|</span>
              <a
                href="https://linkedin.com/in/iamayan18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
