import React from 'react';
import profilepics from '../assets/DSC_0023-Edit-removebg-preview (2).png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="pl-[5%] pr-[5%]">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 font-[arial] text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[1.5rem] md:text-[2rem]">
              Hi, 👋 I'm Samuel Daniel — a frontend developer passionate about bringing ideas to life through clean, efficient, and innovative code.
            </h1>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={profilepics}
              alt="Profile"
              className="w-[200px] md:w-[300px] rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;