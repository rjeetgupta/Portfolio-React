import React from "react";
import { FiCode, FiDatabase, FiCpu, FiCloud, FiServer, FiLayers } from "react-icons/fi";

const Skill = () => {
  // Easily modifiable data structure
  const expertiseCategories = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      color: "text-blue-400"
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "Backend Development",
      items: ["Node.js", "Express", "REST APIs"],
      color: "text-purple-400"
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "ORM"],
      color: "text-emerald-400"
    },
    
    // Add or remove categories as needed
    // {
    //   icon: <FiLayers className="w-6 h-6" />,
    //   title: "Other Skills",
    //   items: ["Data Structures", "Algorithms", "Problem Solving"],
    //   color: "text-pink-400"
    // }
  ];

  return (
    <section id="expertise" className="py-28 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and skills I've mastered through projects and coursework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/50 hover:bg-gray-800/70 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-3 ${category.color.replace('text', 'bg')}`}></span>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;