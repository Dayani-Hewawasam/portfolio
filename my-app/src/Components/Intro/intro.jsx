import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import TypingEffect from 'react-typing-effect';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">
            <TypingEffect text={["Dayani Hewawasam,"]} speed={100} eraseDelay={2000} />
          </span> 
          <br /> Frontend Developer
        </span>

        <p className="introPara">
          As a passionate Computer Engineering undergraduate at the University of Ruhuna, I am deeply <br />
          enthusiastic about frontend development. I focus on creating intuitive, visually appealing user <br />
          experiences by combining technical skills with creative design. Always eager to learn and explore <br />
          new technologies, I aim to contribute innovative solutions and work effectively within development teams.
        </p>

        <Link to="contact" smooth={true} duration={500}>
  <button className="btn">
    <img src={btnImg} alt="Hire" className="btnImg" />Hire me
  </button>
</Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
