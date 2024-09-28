import React from 'react'

function Skill() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-black"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          My Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105 flex flex-col items-center">
              <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold text-cyan-400">{skill.name}</h2>
            </div>
          ))}
        </div>
      </main>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}

export default Skill