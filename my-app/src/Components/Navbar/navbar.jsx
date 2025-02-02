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
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>
        <div className="desktopMenubtn">
        <button >
            <img src={linkedin} alt="" className="desktopMenulogo" />
        </button>
        <button >
            <img src={github} alt="" className="desktopMenulogo" />
        </button>
        </div>
    </nav>
  )
}

export default Navbar