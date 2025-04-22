import React from "react"
import logo from '../assets/Navbar/DSlogobg.png'
import github from '../assets/Navbar/github-brands.svg'
import linkedin from '../assets/Navbar/linkedin-brands.svg'
import x from '../assets/Navbar/twitter-brands.svg'
import { Link } from "react-router-dom"


const Header = () => {

  return (
    <>
    <div className="pl-[4%] pr-[4%]">
    <div className=" flex justify-between items-center py-2 md:py-10">
        <div>
           <Link className="text-[#0077B8] text-[20px] underline font-[Poppins]" to=''> Samuel Daniel </Link>
        </div>
        <div className="">
            <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li><Link to='/'> Home </Link></li>
            <li><Link to='About' > About</Link></li>
            <li><Link to='Technologies'>Technologies</Link></li>
            <li><Link to='Projects'>Projects</Link></li>
            <li><Link to='Contact'>Contact</Link></li>
            </ul>    
        </div>
        <div className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
           <Link to="https://github.com/DSOTec" ><img className="w-[50px]" src={github} alt="github" /> </Link>
           <Link to="https://www.linkedin.com/in/dsotec"> <img className="w-[50px]"  src={linkedin} alt="linkedin" /></Link>
           <Link to="https://x.com/DanielSamuelO3"><img className="w-[50px]" src={x} alt="x" /></Link>
        </div>
    </div>
    </div>
  
    </>
  )
}

export default Header