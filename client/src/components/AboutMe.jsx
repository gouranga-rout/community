// components/AboutMe.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/profile.png';
import fb from '../social-icons/fb.png';
import ig from '../social-icons/ig.png';
import wa from '../social-icons/wa.png';
import linkedin from '../social-icons/in.png';
import github from '../social-icons/GitHub.png';

const AboutMe = () => {
  return (
   <div className="about-me-container">
     <div className="about-heading">
       <h1>ABOUT TEAM FOUNDER </h1>
     </div>

     <div className="owner-photo-and-details">
        <div className="profile">
          <img src={Profile} alt="profile-picture" />
        </div>
    
        <div className="social-links">
           <NavLink to="https://www.facebook.com/gouranga.rout.908?mibextid=ZbWKwL"><img src={fb} alt="fb.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://www.instagram.com/gouranga__rout/"><img src={ig} alt="ig.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://bit.ly/getDetails_"><img src={wa} alt="wa.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://www.linkedin.com/in/gourangarout?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src={linkedin} alt="in.png" data-aos="zoom-in" /></NavLink>
           <NavLink to="https://github.com/gouranga-rout/"><img src={github} alt="GitHub.png" data-aos="zoom-in" /></NavLink>       
       </div>

       <div className="details">
          <p> Hello friends 👋🏻 I am <span>Aaryan </span>  
             and I am a 12th pass student.
             By profession I am a :

              <ul>
                  <li>Computer Programmer</li>
                  <li>Affiliate Marketer</li>
                  <li>Network Marketer</li>
                  <li>Investor</li>
		  <li>District Ambassador of Chatwise</li>
                  <li>Cyber Security Researcher</li>
                  <li>Full Stack Web Developer</li>
              </ul>

          </p>
          <p>For more information checkout my social media handles 😎</p><br /><br />
      </div>

   </div>


</div>

  );
};

export default AboutMe;
