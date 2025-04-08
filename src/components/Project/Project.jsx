import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration and admin dashboard",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for business metrics with real-time updates",
      tags: ["Next.js", "Tailwind", "Firebase"],
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial application with biometric authentication",
      tags: ["React Native", "TypeScript", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with 3D elements and animations",
      tags: ["Three.js", "GSAP", "React"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time sync",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Workout tracking and progress visualization",
      tags: ["React", "Chart.js", "Node.js"],
      link: "#",
      github: "#"
    }
  ];

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
          <div className="flex overflow-x-hidden py-4">
            <div className="flex animate-scroll hover:[animation-play-state:paused] whitespace-nowrap">
              {duplicatedProjects.map((project, index) => (
                <div key={index} className="inline-block mx-4 w-80 flex-shrink-0 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.link} className="text-gray-400 hover:text-white flex items-center text-sm">
                        <FiExternalLink className="mr-1" /> Live Demo
                      </a>
                      <a href={project.github} className="text-gray-400 hover:text-white flex items-center text-sm">
                        <FiGithub className="mr-1" /> Code
                      </a>
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