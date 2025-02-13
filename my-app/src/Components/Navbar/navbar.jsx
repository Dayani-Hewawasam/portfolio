import React from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import linkedin from "../../assets/linkedinlogo.png";
import github from "../../assets/githublogo.png";
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
        <a href="#about" className="desktopMenuListItem">About</a>
      <a href="#skills" className="desktopMenuListItem">Skills</a>
      <a href="#projects" className="desktopMenuListItem">Projects</a>
      <a href="#contact" className="desktopMenuListItem">Contact</a>
        </div>
        <div className="desktopMenubtn">
        <a href="https://www.linkedin.com/in/dayani-hewawasam-33353128b/" target="_blank" rel="noopener noreferrer">
    <button>
        <img src={linkedin} alt="LinkedIn" className="desktopMenulogo" />
    </button>
</a>
<a href="https://github.com/Dayani-Hewawasam" target="_blank" rel="noopener noreferrer">
    <button>
        <img src={github} alt="GitHub" className="desktopMenulogo" />
    </button>
</a>
        </div>
    </nav>
  )
}

export default Navbar