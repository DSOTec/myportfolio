import React from 'react';

const About = () => {
  return (
    <div className="px-6 pb-[4%] md:px-16 py-8 bg-gray-50">
      {/* About Me Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B8] mb-4">About Me</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Hello! I'm Samuel Daniel, a passionate frontend developer with a knack for creating clean, efficient, and user-friendly web applications. 
          With a strong foundation in modern web technologies, I specialize in turning ideas into visually appealing and functional digital experiences.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          I thrive on solving complex problems and continuously learning new tools and techniques to stay ahead in the ever-evolving tech landscape. 
          Whether it's building responsive websites, optimizing performance, or collaborating with teams, I bring dedication and creativity to every project.
        </p>
      </div>

      {/* Work Experience Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0077B8] mb-6">Work Experience</h1>

        <div className="space-y-8">
          {/* Job 1 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md p-6 rounded-lg">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Frontend Web Developer</h4>
              <p className="text-gray-500">Full Time</p>
            </div>
            <div className="text-right md:text-left">
              <p className="text-gray-700 font-medium">Web3bridge</p>
              <p className="text-gray-500">Jan 2024 - Present</p>
            </div>
          </div>

          {/* Add more jobs here if needed */}
        </div>
      </div>
    </div>
  );
};

export default About;