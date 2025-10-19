import React, { useState, useRef } from "react";
import LogoBlue from '../../images/Logo_Blue.png'
import "./Navbar.css";


const NavbarH = ({scrollToMyDiv})  => {
  
  return (
    <nav>
      <img src={LogoBlue} className="logo" alt="aquavengers" />
      <ul>
        <li>
          <span onClick={() => scrollToMyDiv(1)}>More</span>
        </li>
        <li>
        <span onClick={() => scrollToMyDiv(2)}>About</span>
        </li>
        <li>
        <span onClick={() => scrollToMyDiv(4)}>Contact</span>
        </li>
        </ul>
    </nav>
  );
};

export default NavbarH;