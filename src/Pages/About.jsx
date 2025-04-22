import React from 'react';

const About = () => {
  return (
    <div className="px-6 md:px-16 py-8 bg-gray-50">
      {/* About Me Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Work Experience Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Work Experience</h1>

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