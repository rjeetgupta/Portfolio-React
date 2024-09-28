import React from 'react'

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black"></div>
      <main className="container mx-auto px-4 py-16 text-center relative z-10">
        <section className="mb-12 animate-fade-in-down">
          <h1 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text-shimmer">
            Ranjeet Gupta
          </h1>
          <p className="text-3xl text-blue-300 mb-8 font-light">
            MCA Student | Aspiring Developer | Cybersecurity Enthusiast
          </p>
        </section>

        <section className="mb-16 animate-fade-in-up">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the shadows of the digital realm. Dive into my world of code, where innovation meets the dark web's mystique.
            Explore the depths of my projects and unravel the complexities of modern tech.
          </p>
        </section>

        <section className="flex justify-center space-x-8 mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg shadow-blue-500/50">
            Infiltrate Projects
          </button>
          <button className="bg-transparent hover:bg-purple-600 text-purple-300 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded-lg transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg shadow-purple-500/50">
            Decrypt Resume
          </button>
        </section>

        <section className="animate-pulse">
          <p className="text-lg text-blue-300 mb-4">Venture Deeper</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-blue-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Home