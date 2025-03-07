import React , { useRef } from 'react';
import emailjs from '@emailjs/browser';
import facebookIcon from '../../assets/facebook-icon.png';
import instagramIcon from '../../assets/instagram.png';
import gmailIcon from '../../assets/gmailIcon.png'
import './contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xxd0eop', 'template_p7c2bcl', form.current, {
        publicKey: 'rdWtY4jiNt9c7u0Kc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <div className='contact-section'> 
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
    <label>Name</label>
      <input type="text" name="user_name" className='name' placeholder="Enter your name"/>
      <label>Email</label>
      <input type="email" name="user_email" className='email' placeholder="Enter your email"/>
      <label>Message</label>
      <textarea name="message" className='msg' placeholder="Enter your message"/>
      <input type="submit" value="Send" className='submitBtn' />
        <div className="links">
        <a href="https://web.facebook.com/profile.php?id=100091322136291" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="link" />
          </a>
          <a href="https://www.instagram.com/_d_a_y_a_n_i_" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="link" />
          </a>
          <a href="mailto:dayanihewawasam@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="link" />
          </a>
        </div>
    </form>
    </div>
  )
}

export default Contact