import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      link: 'https://myportfolio-khaki-three.vercel.app/',
      image: 'https://dribbble.com/shots/3635258-Front-end-Developer-s-Portfolio', 
    },
    {
      title: 'Fitness Tracker App',
      description: 'A app used to track the consistency of exercise.',
      link: 'https://fit-tracker-lyart.vercel.app/',
      image: 'https://fit-tracker-lyart.vercel.app/assets/image-DGKJeFUd.jpg', 
    },
    {
      title: 'CJOS BOT',
      description: 'A AI assistant which gives answer to diverse kind of questions.',
      link: 'https://cjos-bot.vercel.app/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoA-f2ql_wgamkMarBmEKpz8I1oO4Z61-ewqFUqD2K3_LCh2jx-zN6No&s',
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