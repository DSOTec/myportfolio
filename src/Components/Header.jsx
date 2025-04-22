import React, { useState } from "react";
import github from '../assets/Navbar/github-brands.svg';
import linkedin from '../assets/Navbar/linkedin-brands.svg';
import x from '../assets/Navbar/twitter-brands.svg';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pt-4 px-6 md:px-16">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link to="/" className="text-[#0077B8] text-[1.5rem] font-bold font-[Poppins]">
            Samuel Daniel
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-700 font-medium`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <li><Link to="/" className="hover:text-[#0077B8]">Home</Link></li>
            <li><Link to="/About" className="hover:text-[#0077B8]">About</Link></li>
            <li><Link to="/Technologies" className="hover:text-[#0077B8]">Technologies</Link></li>
            <li><Link to="/Projects" className="hover:text-[#0077B8]">Projects</Link></li>
            <li><Link to="/Contact" className="hover:text-[#0077B8]">Contact</Link></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="https://github.com/DSOTec" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] md:w-[40px]" src={github} alt="GitHub" />
          </Link>
          <Link to="https://www.linkedin.com/in/dsotec" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] md:w-[40px]" src={linkedin} alt="LinkedIn" />
          </Link>
          <Link to="https://x.com/DanielSamuelO3" target="_blank" rel="noopener noreferrer">
            <img className="w-[30px] md:w-[40px]" src={x} alt="Twitter" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;