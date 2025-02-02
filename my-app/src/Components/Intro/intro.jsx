import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Dayani</span> <br/> Frontend Developer</span>

            <p className="introPara">As a passionate Computer Engineering undergraduate at the University of Ruhuna, I am deeply enthusiastic about <br/> frontend
 development. I focus on creating intuitive, visually appealing user experiences by combining technical skills <br/> with creative
 design. Always eager to learn and explore new technologies, I aim to contribute innovative solutions <br/> and work effectively
 within development teams.</p>
 <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;