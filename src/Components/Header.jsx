import React from "react";
import github from '../assets/Navbar/github-brands.svg';
import linkedin from '../assets/Navbar/linkedin-brands.svg';
import x from '../assets/Navbar/twitter-brands.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-[3%] pl-[5%] pr-[5%] pb-[4%] py-4 md:py-8-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-[#0077B8] text-[1.5rem] underline font-bold font-[Poppins]">
            Samuel Daniel
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-[#0077B8]">Home</Link></li>
            <li><Link to="/About" className="hover:text-[#0077B8]">About</Link></li>
            <li><Link to="/Technologies" className="hover:text-[#0077B8]">Technologies</Link></li>
            <li><Link to="/Projects" className="hover:text-[#0077B8]">Projects</Link></li>
            <li><Link to="/Contact" className="hover:text-[#0077B8]">Contact</Link></li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
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