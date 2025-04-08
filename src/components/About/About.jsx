const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://drive.google.com/file/d/1h9MgdBRnxaLZd1kzKO5fqoZwhV-tdLMc/view?usp=drive_link"
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-4">
              MCA Student & Aspiring Full Stack Developer
            </h3>
            <p className="text-gray-400 mb-4">
              I'm currently in my final year of Master of Computer Applications at <span className="text-md font-bold">Marwari College, Ranchi</span>, 
              specializing in web development . My academic journey has equipped 
              me with strong fundamentals in algorithms, database systems, and software engineering.
            </p>
            <p className="text-gray-400 mb-6">
              I've worked on multiple academic projects involving MERN stack development and database design.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Education</h4>
                <p className="text-gray-400 text-sm">
                  <span className="text-md font-bold">MCA - Marwari College, Ranchi</span><br />
                  (2023-2025)
                </p>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Focus Areas</h4>
                <p className="text-gray-400 text-sm">
                  Web Development<br />
                  Database Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;