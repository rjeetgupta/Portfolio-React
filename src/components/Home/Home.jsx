import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="pt-40 pb-28 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block mb-4 text-blue-400  font-mono text-2xl tracking-wider">
          SOFTWARE ENGINEER
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          I build <span className="text-blue-400">scalable solutions</span><br />
          for the digital world
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
        Passionate about building scalable web applications with modern technologies.
        Currently completing my Master's in Computer Applications at <span className="font-bold">Marwari College, Ranchi.</span>
          Specializing in modern web development with React, Node.js, and cloud architectures.
          Focused on creating clean, efficient code that delivers business value.
        </p>

        <div className="flex justify-center items-center md:justify-center gap-4 m-7">
          <a href="https://github.com/rjeetgupta" className="text-gray-400 hover:text-white">
            <FiGithub size={24} />
          </a>
          <a href="mailto:ranjeeturd@gmail.com" className="text-gray-400 hover:text-white">
            <FiMail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rjeetgupta/" className="text-gray-400 hover:text-white">
            <FiLinkedin size={24} />
          </a>
          <a href="https://x.com/rjeetgupta/" className="text-gray-400 hover:text-white">
            <FiTwitter size={24} />
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            View Projects
          </button>
          <button className="border border-gray-700 hover:border-gray-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;