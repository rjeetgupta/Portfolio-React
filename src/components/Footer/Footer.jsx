import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Row 1: Name + Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Side - Name */}
          <div className="flex items-center mb-6 md:mb-0">
            {/* <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
              <span className="text-white font-medium text-sm">DEV</span>
            </div> */}
            <span className="text-xl font-bold text-white">Ranjeet</span>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/rjeetgupta"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rjeetgupta/"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/rjeetgupta"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Row 2: Quick Links */}
        {/* <div className="flex flex-wrap justify-center gap-6">
          {['Home', 'Work', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {item}
            </a>
          ))}
        </div> */}

        {/* Row 3: CTA Message */}
        <div className="text-center text-gray-400 text-md max-w-2xl mx-auto">
          Let's build something cool. I'm open to collabs and freelance gigs. Currently learning & building — open for future opportunities.
        </div>

        {/* Row 4: Copyright + Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          {/* Copyright */}
          <p className="text-gray-500 text-md mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="text-md mr-2">Back to top</span>
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;