import React from 'react';
import html from '../assets/Techstack/html.png';
import css from '../assets/Techstack/css.png';
import js from '../assets/Techstack/js.png';
import bootstrap from '../assets/Techstack/bootstrap.png';
import tailwind from '../assets/Techstack/tailwind.png';
import reactjs from '../assets/Techstack/react.png';
import vs from '../assets/Techstack/VS.png';
import git from '../assets/Techstack/git.png';
import github from '../assets/Techstack/github.png';
import figma from '../assets/Techstack/figma.png';
import npm from '../assets/Techstack/npm.png';

const Technologies = () => {
  return (
    <div className="px-6 md:px-16 py-8 bg-gray-50">
      {/* Tech Stack Section */}
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tech Stack</h3>
        <p className="text-gray-600 text-lg mb-6">
          Technologies I've been working with recently:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <img src={html} title="HTML" alt="HTML" className="w-20 h-20 mx-auto" />
          <img src={css} title="CSS" alt="CSS" className="w-20 h-20 mx-auto" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="w-20 h-20 mx-auto" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" className="w-20 h-20 mx-auto" />
          <img src={js} title="JavaScript" alt="JavaScript" className="w-20 h-20 mx-auto" />
          <img src={reactjs} title="React" alt="React" className="w-20 h-20 mx-auto" />
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <img src={vs} title="Visual Studio Code" alt="Visual Studio Code" className="w-20 h-20 mx-auto" />
          <img src={git} title="Git" alt="Git" className="w-20 h-20 mx-auto" />
          <img src={github} title="Github" alt="Github" className="w-20 h-20 mx-auto" />
          <img src={figma} title="Figma" alt="Figma" className="w-20 h-20 mx-auto" />
          <img src={npm} title="NPM" alt="NPM" className="w-20 h-20 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;