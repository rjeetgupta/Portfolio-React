import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../../utils/project";

const Projects = () => {
  
  const handleOnClick = (link) => {
    window.open(link, "_blank");
  }

  // Duplicate the projects array to create seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-28 px-6 bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Selected <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of my most impactful work
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-hidden">
            <div className="flex animate-scroll hover:[animation-play-state:paused]">
              {projects.map((project, index) => (
                <div key={index} className="inline-block mx-4 w-80 flex-shrink-0 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
                  <div className="h-44 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>

                    <p className="text-gray-400 mb-4 ">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      onClick={() => handleOnClick(project.link)}
                      className="flex justify-between px-2">
                      <span className="text-gray-400 hover:text-white flex items-center text-sm cursor-pointer">
                        <FiExternalLink className="mr-1" /> Live Demo
                      </span>
                      <span
                        onClick={() => handleOnClick(project.github)}
                        className="text-gray-400 hover:text-white flex items-center text-sm cursor-pointer ">
                        <FiGithub className="mr-1" /> Code
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;