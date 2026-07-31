import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import TypingEffect from 'react-typing-effect';

const Intro = () => {
  return (
    <div className="intro-space">

    
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">
            <TypingEffect text={["Dayani Hewawasam,"]} speed={100} eraseDelay={2000} />
          </span> 
          <br /> Aspiring Data Scientist
        </span>

        <p className="introPara">
        As a passionate final-year Computer Engineering undergraduate at the University of Ruhuna, I am <br />
deeply enthusiastic about Data Science, Machine Learning, and Artificial Intelligence. I enjoy <br />
transforming data into meaningful insights and building intelligent systems that address real-world <br />
challenges. Committed to continuous learning and innovation, I strive to contribute impactful <br />
solutions while collaborating effectively within diverse teams. </p>

        <Link to="contact" smooth={true} duration={500}>
  <button className="btn">
    <img src={btnImg} alt="Hire" className="btnImg" />Hire me
  </button>
</Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
    </div>
  );
}

export default Intro;
