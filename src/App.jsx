import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AIExpertise from './components/AIExpertise'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIExpertise />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
