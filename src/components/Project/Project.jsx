import React from 'react'

function Project() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Blog Website", 
              description: "A dynamic blog platform with user authentication and content management.",
              github: "https://github.com/yourusername/blog-website",
              live: "https://your-blog-website.com",
              image: "/images/blog-website.jpg"
            },
            { 
              title: "News Website", 
              description: "Real-time news aggregator with customizable categories and search functionality.",
              github: "https://github.com/yourusername/news-website",
              live: "https://your-news-website.com",
              image: "/images/news-website.jpg"
            },
            { 
              title: "ShadowNet Website", 
              description: "A cybersecurity-themed website showcasing dark web concepts and security measures.",
              github: "https://github.com/yourusername/shadownet-website",
              live: "https://your-shadownet-website.com",
              image: "/images/shadownet-website.jpg"
            }
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-cyan-500/30 transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">{project.title}</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Project