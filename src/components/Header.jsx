import React from 'react';

import resume from '../assets/files/MYKHAILO_POMORSKYI.pdf';
import menu from '../assets/images/menu.png';
import menuBg from '../assets/images/menu_bg.png';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <nav id="navbar_top">
      <div className="d-none d-lg-block"></div>
      <button className="d-block d-lg-none menuOpener">
        <img src={menu} alt="Menu" className="img-top" />
        <img src={menuBg} alt="Menu" />
      </button>
      <div className="rightPanel">
        <ol className="d-none d-lg-block">
          <li>
            <a href="#aboutMe">
              <span data-content="About Me" aria-hidden="true"></span>About Me
            </a>
          </li>
          <li>
            <a href="#work">
              <span data-content="Work" aria-hidden="true"></span>Work
            </a>
          </li>
          <li>
            <a href="#projects">
              <span data-content="Projects" aria-hidden="true"></span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span data-content="Contact" aria-hidden="true"></span>Contact
            </a>
          </li>
        </ol>

        {/* <button className="accentButton slideBtn">Resume</button> */}
        <a
          id="resumeBtn"
          href={resume}
          target="_blank"
          className="accentButton slideBtn"
          // download="MYKHAILO_POMORSKYI_RESUME.pdf"
        >
          Resume
        </a>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Header;
