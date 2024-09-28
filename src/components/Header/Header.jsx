import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-900 text-white shadow-2xl border-b border-purple-700 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-12 w-12 mr-3 filter brightness-0 invert animate-pulse" />
            <span className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-blue-400 hover:via-green-500 hover:to-yellow-500 transition-all duration-500">
              Ranjeet Gupta
            </span>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><NavLink to="/" className="relative overflow-hidden group text-lg font-medium" end>
              <span className="relative z-10 transition duration-300 group-hover:text-purple-400">Home</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink></li>
            <li><NavLink to="/about" className="relative overflow-hidden group text-lg font-medium">
              <span className="relative z-10 transition duration-300 group-hover:text-purple-400">About</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink></li>
            <li><NavLink to="/projects" className="relative overflow-hidden group text-lg font-medium">
              <span className="relative z-10 transition duration-300 group-hover:text-purple-400">Projects</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink></li>
            <li><NavLink to="/skills" className="relative overflow-hidden group text-lg font-medium">
              <span className="relative z-10 transition duration-300 group-hover:text-purple-400">Skills</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink></li>
            <li><NavLink to="/contact" className="relative overflow-hidden group text-lg font-medium">
              <span className="relative z-10 transition duration-300 group-hover:text-purple-400">Contact</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink></li>
          </ul>
          <div className="md:hidden">
            <button className="text-white focus:outline-none hover:text-purple-400 transition duration-300 transform hover:scale-110">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header