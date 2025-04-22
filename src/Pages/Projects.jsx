import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      link: 'https://github.com/DSOTec/portfolio',
      image: 'https://via.placeholder.com/300', // Replace with your project image
    },
    {
      title: 'E-commerce App',
      description: 'A fully responsive e-commerce application with payment integration.',
      link: 'https://github.com/DSOTec/ecommerce-app',
      image: 'https://via.placeholder.com/300', // Replace with your project image
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using OpenWeatherMap API.',
      link: 'https://github.com/DSOTec/weather-app',
      image: 'https://via.placeholder.com/300', // Replace with your project image
    },
  ];

  return (
    <div className="px-6 md:px-16 py-8 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077B8] font-medium hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;