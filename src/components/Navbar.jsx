import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800 shadow-lg shadow-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent hover:scale-110 transform transition-transform duration-200 cursor-pointer">
              {'<Dev/>'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-lg font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-lg font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-lg font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('ai-expertise')}
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-lg font-medium"
              >
                AI Expertise
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-teal-400 hover:bg-gray-800 transition-all duration-200 px-4 py-2 rounded-lg font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white transition-all duration-200 px-5 py-2 rounded-lg font-medium shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transform ml-2"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-800 focus:outline-none transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('ai-expertise')}
              className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium"
            >
              AI Expertise
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-teal-400 hover:bg-gray-700 block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white block px-4 py-3 w-full text-left rounded-lg transition-all duration-200 font-medium shadow-lg shadow-teal-500/30"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
