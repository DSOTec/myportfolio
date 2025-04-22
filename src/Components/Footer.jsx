import React from 'react';
import github from '../assets/Navbar/github-brands.svg';
import linkedin from '../assets/Navbar/linkedin-brands.svg';
import x from '../assets/Navbar/twitter-brands.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0077B8] text-white  py-6">
      <div className="container mx-auto px-6 md:px-16 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/DSOTec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/dsotec/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/DSOTec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img src={x} alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 DSOTec. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;