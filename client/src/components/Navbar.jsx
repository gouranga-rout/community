// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import RichIND_logo from '../assets/RICHIND_LOGO.png';

const Navbar = () => {
  return (
     <header>
       <nav>
         <div class="nav-bar">
           <div class="logo">
               <NavLink to="/">  
                  <img src={RichIND_logo} />  
                </NavLink>
            </div>
            <div class="team_name">
              <a href="#"><h1>Team Aaryan </h1></a>
            </div>
        </div>
      </nav>
   </header>    

  );
};

export default Navbar;
