import React from 'react'

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <section className="mb-16 animate-fade-in-down text-center">
          <h1 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            About Me
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm Ranjeet Gupta, an MCA student with a burning passion for coding and cybersecurity. My journey in the digital realm is a thrilling adventure, driven by an insatiable curiosity and a relentless desire to push the boundaries of what's possible in technology.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <section className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <h2 className="text-3xl font-semibold mb-6 text-cyan-400">My Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              From writing my first lines of code to unraveling the mysteries of cybersecurity, every step of my journey has been an exhilarating challenge. I'm constantly evolving, adapting to the ever-changing tech landscape like a digital chameleon.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Coding</span>
              <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Cybersecurity</span>
              <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Innovation</span>
            </div>
          </section>

          <section className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 transition duration-300 transform hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">What Drives Me</h2>
            <ul className="list-none text-lg text-gray-300 space-y-4">
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>The thrill of solving complex problems through code</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>A fascination with the dark web and its security implications</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>The potential of technology to revolutionize the world</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>An unwavering commitment to continuous learning and growth</span>
              </li>
            </ul>
          </section>
        </div>

        <section className="animate-fade-in-up text-center bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600"></div>
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            I'm always eager to explore new opportunities, collaborations, or engage in stimulating conversations about tech. Reach out, and let's embark on a journey to push the boundaries of the digital frontier together.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg shadow-blue-500/50 animate-pulse relative overflow-hidden group">
            <span className="relative z-10">Initiate Contact</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </section>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default About