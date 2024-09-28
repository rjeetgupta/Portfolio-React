import React from 'react'

function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Let's Connect
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Reach Out</h2>
            <ul className="space-y-6">
              <li className="flex items-center group">
                <div className="bg-blue-600 p-3 rounded-full mr-4 group-hover:bg-blue-500 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition duration-300">ranjeet@example.com</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-purple-600 p-3 rounded-full mr-4 group-hover:bg-purple-500 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-gray-300 group-hover:text-purple-400 transition duration-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-green-600 p-3 rounded-full mr-4 group-hover:bg-green-500 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-gray-300 group-hover:text-green-400 transition duration-300">Mumbai, India</span>
              </li>
            </ul>
          </div>
          <form className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 transition duration-300">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Send a Message</h2>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2 text-lg">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2 text-lg">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="your.email@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2 text-lg">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full bg-gray-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Contact